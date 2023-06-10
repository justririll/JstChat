<template>
    <div class="ChatMessage">
      <Badges :Badges="this.Badges"/>
      <span>
        <Nick :Tags="this.payload.tags" :color="color" :Login="this.payload.source.nick"
         :HavePaints="this.Paint != null" :id="payload.tags.id" />

        <Message :HavePaints="(this.Paint != null).toString()" :Emotes="Emotes" :twEmotes="TwitchEmotes" :pEmotes="PersonalEmotes"
         :Parameters="payload.parameters" :Action="payload.action" :color="this.color" :id="payload.tags.id" />
      </span>
    </div>
</template>

<script>
import ColourDistance from '@/utils/colour'
import Common from '@/utils/common'

import Message from '@/components/message/Message.vue'
import Nick from '@/components/message/Nick.vue'
import Badges from '@/components/message/Badges.vue'

// import twemoji from 'twemoji'


export default {
  name: 'ChatMessage',
  components: {
    Message,
    Nick,
    Badges
  },
  data() {
    return {
      EmotesBaseUrl: {
        "7TV": "https://cdn.7tv.app/emote/{0}/2x.webp",
        "BTTV": "https://cdn.betterttv.net/emote/{0}/2x",
        "FFZ": "https://cdn.frankerfacez.com/emote/{0}/2",
        "TWITCH": ""
      },
      // Paint: null,
      HavePaints: false,
      displayName: "",

      Badges: [],

      dot : 0,

      smoothColors: this.$route.query.smoothcolor || "1",

      paintsEnabled: this.$route.query.paints || "1",
      shadowText: this.$route.query.shadowtext || "0",
      font_size: this.$route.query.font_size || "18",
      interpolateSize: this.$route.query.interpbs != "0",
      border: this.$route.query.border || "2",
      padding: this.$route.query.padding || "1",
    }
  },
  props: {
    PersonalEmotes: Array,
    Emotes: Object,
    OtherBadges: Array,
    GlobalBadges: Object,
    Paints: Array,

    overridedBadges: Boolean,

    defaultColors: Array,

    payload: Object,
    BG: String,
  },
  created: async function() {
      if (this.payload.command.command != "PRIVMSG") {
          return {}
      }
      if (this.payload.tags.badges) {
        for (const [key, value] of Object.entries(this.payload.tags["badges"])) {
          if (this.GlobalBadges[key]) {
            let provider = "Twitch"
            if (this.overridedBadges && key == "moderator") provider = "ffz-mod-badge"
            if (this.GlobalBadges[key][value] != undefined) {
              this.Badges.push({"Url": this.GlobalBadges[key][value], "provider": provider})
            }
          }
        }
      }
      if (this.OtherBadges) {
        for (const value of this.OtherBadges) {
          if (value.Users.includes(this.payload.tags["user-id"])) {
            this.Badges.push({"Url": value.Url, provider: "none"})
          }
        }
      }
  },
  computed: {
    color() {
      let color = this.payload.tags.color
      if (!this.payload.tags.color) {
        color = this.defaultColors[Math.floor(Math.random() * this.defaultColors.length)]
      }
      if (this.BG != "transparent" && this.smoothColors == "1") {
        // если сообщение сливается с фоном:
        let userRGB = Common.hexToRgb(color)
        let backgroundRGB = Common.hexToRgb(this.BG)

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
    Paint() {
      if (this.paintsEnabled == "1") {
        for (const value of this.Paints) {
          if (value.users.includes(this.payload.tags["user-id"])) {
            return value
          }
        }
      }
      return null
    },
    TwitchEmotes() {
      if (this.payload.tags.emotes) {
        return Common.parse_smiles(this.payload.parameters, this.payload.tags["emotes"])
      }
      return {}
    },
    bgImage() {
      if (!this.Paint) {
        return ""
      }
      let cssFunc = ""

      const args = []
      switch (this.Paint.function) {
          case "LINEAR_GRADIENT":
              cssFunc = "linear-gradient"
              args.push(`${this.Paint.angle}deg`)
              break;
          case "RADIAL_GRADIENT":
              cssFunc = "radial-gradient"
              args.push(this.Paint.shape ?? "circle")
              break
          case "URL":
              cssFunc = "url-gradient"
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
      return `${funcPrefix}${cssFunc}(${args.join(", ")})`
    },
    filterText() {
      if (this.shadowText == "1") {
        return "drop-shadow(1px 2px 1px #2b2b2b)"
      }
      return ""
    },
    filter() {
      try {
        return this.Paint.shadows
        .map((v) => `drop-shadow(${v.x_offset}px ${v.y_offset}px ${v.radius}px ${Common.DecimalToStringRGBA(v.color)})`)
        .join(" ");
      } catch (error) {
        return ""
      }
    },
    paintColor() {
      if (!this.Paint) {
        return ""
      }
      return Common.DecimalToStringRGBA(this.Paint.color)
    },
    badgeSize() {
      if (this.interpolateSize && parseInt(this.font_size)) {
        return Math.round(0.8 * parseInt(this.font_size) + 4.4).toString() + "px"
      }
      return "18px"
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
  },
  methods: {
  }
}
</script>

<style>
  .Badge {
    display: inline-block;
    padding-right: 3px;
  }
  .Badge img {
    height: v-bind(badgeSize);
    /* vertical-align: middle; */
    margin-bottom: -3px;
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
  .message-text[action="true"][HavePaints="true"] {
    filter: v-bind('filter');
    color: v-bind('paintColor');
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text !important;
    background-color: currentcolor;
    background-image: v-bind('bgImage');
  }
  .message-nick {
    font-weight: 700;

    background-size: cover;
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
</style>
