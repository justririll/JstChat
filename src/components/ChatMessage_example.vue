<template>
  <div class="ChatMessage" :bg="payload.BG">
    <div v-for="badge in Badges" :key="badge" class="Badge">
        <img :provider="badge.provider" :src="badge.Url">
    </div>
    <span>
      <span :HavePaints="HavePaints" class="message-nick" :style="{color: color}">{{ nick }}: </span>
      <span class="message-text" :action="this.payload.action" :HavePaints="HavePaints">
        <template v-for="mes in FinalMessage" :key="mes">
          <img v-if="mes.Type=='emote'" :src="mes.Text" :ZeroWidth="mes.ZeroWidth">
          <template v-if="mes.Type=='text'">{{mes.Text}}</template>
        </template>  
      </span>
    </span>
  </div>
</template>

<script>
import Common from '@/utils/common'
import ColourDistance from '@/utils/colour'

// @todo: zero-width emotes

export default {
name: 'ChatMessage',
data() {
  return {
    EmotesBaseUrl: {
      "7TV": "https://cdn.7tv.app/emote/{0}/2x.webp",
      "BTTV": "https://cdn.betterttv.net/emote/{0}/2x",
      "FFZ": "https://cdn.frankerfacez.com/emote/{0}/2",
      "TWITCH": ""
    },
    Paint: null,
    HavePaints: false,
    displayName: "",

    dot : 0,

    mes_BG : "",

    Badges: [],
  }
},
props: {
  Emotes: Object,
  OtherBadges: Array,
  GlobalBadges: Object,
  Paints: Array,
  font_size: String,
  shadowText: String,
  paintsEnabled: String,
  interpolateSize: String,

  overridedBadges: Boolean,

  padding: String,

  SmoothColors: String,

  defaultColors: Array,

  payload: Object,
  BG: String,
  BG2: String,

  border: String,
},
created: async function() {
  if (this.payload.command.command != "PRIVMSG") {
          return {}
      }
      this.displayName = this.payload.tags["display-name"]
      if (this.payload.tags["display-name"] == undefined) {
        this.displayName = this.payload.user
      }

      // twitch badges
      if (this.payload.tags.badges) {
        for (const [key, value] of Object.entries(this.payload.tags["badges"])) {
          if (this.GlobalBadges[key]) {
            let provider = "Twitch"
            if (this.overridedBadges && key == "moderator") provider = "ffz-mod-badge"
            this.Badges.push({"Url": this.GlobalBadges[key][value], "provider": provider})
          }
        }
      }
      // parse extension badges
      if (this.OtherBadges) {
        for (const value of this.OtherBadges) {
          if (value.Users.includes(this.payload.tags["user-id"])) {
            this.Badges.push({"Url": value.Url, "provider": value.Type})
          }
        }
      }

      // 7tv paints
      try {
        if (this.paintsEnabled == "1") {
        for (const value of this.Paints) {
          if (value.users.includes(this.payload.tags["user-id"])) {
            this.HavePaints = true
            this.Paint = value
            break
          }
        }
      }
      } catch (error) {
        console.log(error)
      }
  },
computed: {
  color() {
      let mes_BG = this.payload.BG == "0" ? this.BG : this.BG2

      let color = this.payload.tags.color
      if (!this.payload.tags.color) {
        color = this.defaultColors[Math.floor(Math.random() * this.defaultColors.length)]
      }
      // @todo: добавить убавление яркости
      if (mes_BG != "transparent" && this.SmoothColors == "1") {
        // если сообщение сливается с фоном:
        let userRGB = Common.hexToRgb(color)
        let backgroundRGB = Common.hexToRgb(mes_BG)

        // схожесть цветов
        let userXYZ = ColourDistance.rgb2xyz(userRGB[0], userRGB[1], userRGB[2])
        let backgroundXYZ = ColourDistance.rgb2xyz(backgroundRGB[0], backgroundRGB[1], backgroundRGB[2])


        let distance = ColourDistance.deltaE00(userXYZ[0], userXYZ[1], userXYZ[2], backgroundXYZ[0], backgroundXYZ[1], backgroundXYZ[2]) * 10
        if (distance == 0) {
          distance = 0.0001
        }
        if (distance < 0.3) {
          // значит фон сливается, теперь мы добавляем/убавляем +40% яркость пользователю
          let newColor = Common.pSBC(0.25, color)
          return newColor
        }
      }
      return color
    },
  FinalMessage() {
    let TempMessage = `${this.payload.parameters}`

      // TempMessage = twemoji.parse(TempMessage)

      let f_mes = Common.textToMessageObject(TempMessage)

      if (this.payload.tags.emotes) {
        let twitchEmotes = Common.parse_smiles(TempMessage, this.payload.tags["emotes"])
        for (const [em, url] of Object.entries(twitchEmotes)) {
          for (const i in f_mes) {
            if (f_mes[i].Text.slice(0, -1) == em) {
              f_mes[i].Type = "emote"
              f_mes[i].Text = url
              f_mes[i].ZeroWidth = false
            }
          }
        }
      }
      /* eslint-disable no-unused-vars */
      for (const i in f_mes) {
        if (this.Emotes[f_mes[i].Text.slice(0, -1)]) {
          let em = this.Emotes[f_mes[i].Text.slice(0, -1)]
          f_mes[i].Type = "emote"
          f_mes[i].Text = this.EmotesBaseUrl[em.Type].replace('{0}', em.ID)
          f_mes[i].ZeroWidth = em.ZeroWidth
        }
      }

      return f_mes
  },
  nick() {
    if (this.displayName.toLowerCase() != this.payload.source.nick) return `${this.payload.source.nick} (${this.displayName})`
    return this.displayName
  },
  bgImage() {
    if (!this.Paint || this.paintsEnabled == "0") {
      return ""
    }
    const ccsFunc = this.Paint.function

    const args = []
    switch (this.Paint.function) {
        case "linear-gradient":
            args.push(`${this.Paint.angle}deg`)
            break;
        case "radial-graient":
            args.push(this.Paint.shape ?? "circle")
            break
        case "url":
            args.push(this.Paint.image_url ?? "")
            break
    }
    let funcPrefix = ""
    if (this.Paint.function !== "URL") {
        funcPrefix = this.Paint.repeat ? "repeating-" : ""
    }
    for (const stop of this.Paint.stops) {
        const color = Common.DecimalToStringRGBA(stop.color)
        args.push(`${color} ${stop.at * 100}%`)
    }
    return `${funcPrefix}${ccsFunc}(${args.join(", ")})`
  },
  filterText() {
    if (this.shadowText == "1") {
      return "drop-shadow(-1px 2px 1px #2b2b2b)"
    }
    return ""
  },
  filter() {
    try {
      if (this.paintsEnabled == "0") throw "paints disabled"
      return this.Paint.drop_shadows
      .map((v) => `drop-shadow(${v.x_offset}px ${v.y_offset}px ${v.radius}px ${Common.DecimalToStringRGBA(v.color)})`)
      .join(" ");
    } catch (error) {
      if (this.shadowText == "1") {
        return "drop-shadow(-1px 2px 1px #2b2b2b)"
      }
      return ""
    }
  },
  paintColor() {
    if (!this.Paint || this.paintsEnabled == "0") {
      return ""
    }
    return Common.DecimalToStringRGBA(this.Paint.color)
  },
  badgeSize() {
    if (this.interpolateSize == "1" && parseInt(this.font_size)) {
      return Math.round(0.8 * parseInt(this.font_size) + 4.4).toString() + "px"
    }
    return "18px"
  },
  emoteSize() {
    if (this.interpolateSize == "1" && parseInt(this.font_size)) {
      return (parseInt(this.font_size) + 14).toString() + "px"
    }
    return "32px"
  },
  messageSize() {
    if (this.interpolateSize && parseInt(this.font_size)) {
      return Math.round(1.33 * parseInt(this.font_size) + 7).toString() + "px"
    }
    return "31px"
  },
  Font_Size() {
      return `${this.font_size}px`
  },
  Border() {
      return `${this.border}px solid black`
  },
  Padding() {
      if (this.padding == "1") {
        return "3px"
      }
      return "0px"
    }
}
}
</script>

<style>
  .ChatMessage[bg="0"] {
    background-color: v-bind(BG);
  }

  .ChatMessage[bg="1"] {
    background-color: v-bind(BG2);
  }

  .Badge {
    display: inline-block;
    padding-right: 3px;
  }
  .Badge img {
    width: v-bind(badgeSize);
    /* vertical-align: middle; */
  }
  .Badge img[provider="ffz-mod-badge"] {
    background-color: #00ad03;
    border-radius: 2px;
  }
  .ChatMessage {
    padding-top: v-bind(Padding);
    padding-bottom: v-bind(Padding);

    padding-left: 5px;

    min-height: v-bind(messageSize);
    font-size: v-bind(Font_Size);

    width: 100%;

    display: inline-block;

    background: v-bind(BG);
    color: white;
    border-top: v-bind(Border);
  }
  .message-text {
    bottom: 5px;
    margin-right: 13px;
    filter: v-bind('filterText');
  }
  .message-text img, .emoji {
    height: v-bind(emoteSize);
    vertical-align: middle;
    filter: unset;
    padding-right: 8px;
  }
  .message-nick {
    font-weight: 700;

    /* background-size: cover; */
    filter: v-bind('filter');
    color: v-bind('paintColor');
  }
  .message-nick[HavePaints="true"] {
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text !important;
    background-color: currentcolor;
    background-image: v-bind('bgImage');
  }
  .message-text img[ZeroWidth="true"] {
    position: absolute;
		z-index: 1;
		transform: translateX(-100%);
  }

  .message-text[action="true"][HavePaints="false"] {
    color: v-bind('color')
  }

  .message-text[action="true"][HavePaints="true"] {
    filter: v-bind('filter');
    color: v-bind('paintColor');
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text !important;
    background-color: currentcolor;
    background-image: v-bind('bgImage');
  }
</style>
