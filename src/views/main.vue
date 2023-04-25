<style>
  #main {
    width: 100%;
    height: 100%;

    font-family: 'Roboto', sans-serif;

    position: fixed;
    top: 0;
    left: 0;

    overflow: auto;
    
    background: rgb(46, 46, 46);
    color: white;
  }

  button {
    min-width: 5vw;
    font-size: 2.4vh;
    border: 1px solid black;
    background-color: #494949;
    color: white;
    border-radius: 8px;
    margin-left: 0.5vw;
  }

  .out_url {
    min-width: 50vw;
  }
  #out {
    margin-left: 10vw;
    margin-top: 5vh;
  }

  .setting-bottom {
    width: 10vw;
    display: inline-block;
    margin-left: 12vw;
    padding-top: 10vh;
  }
  input {
    min-width: 50px;
    max-width: 75px;
    min-height: 25px;
    background-color: #494949;
    color: white;
    border: 1px solid black;
    border-radius: 8px;
    font-size: 2.4vh;
    text-align: center;
  }

  select {
    min-width: 5vw;
    min-height: 4vh;
    background-color: #494949;
    color: white;
    border: 1px solid black;
    border-radius: 8px;
    font-size: 3vh;
    text-align: center;
  }

  .checkbox {
    min-width: 25px;
    min-height: 25px;
  }

  .chat {
    width: 25%;
    height: 100%;
    position: fixed;

    bottom: 0;

    overflow: hidden;

    user-select: none;

    font-family: v-bind(fontName);
  }

  .chat-box {
    position: absolute;
    bottom: v-bind(fromBottom);

    width: 100%;
  }

  .author {
    /* min-width: 600px; */

    border-left: 4px solid black;

    width: 75%;
    height: 10%;
    position: fixed;
    bottom: 0;
    left: 25%;

    font-size: 1.5vh;
  }
  .author-name {
    text-align: center;
    vertical-align:middle;
    padding-top: 2vh;
    height: 10%;
  }

  .quick-settings {
    position: fixed;
    left: 25%;
    width: 75%;
    height: 18%;
    
    border-left: 4px solid black;
    border-bottom: 4px solid black;
  }

  .url {
    position: fixed;    
    left: 25%;
    bottom: 10%;
    width: 75%;
    height: 14%;

    border-left: 4px solid black;
    border-top: 4px solid black;
  }

  .settings {
    border-left: 4px solid black;

    width: 75%;
    height: 57%;
    position: fixed;
    bottom: 10%;
    left: 25%;

    top: 18.5%;
    bottom: 14.5%;

    overflow: auto;
  }

  a {
    color: white;
  }

  .debug-description {
    text-align: center;
    vertical-align:middle;
    padding-top: 6vh;
    font-size: 30px;
  }

  .mes {
    width: 100%;
  }

  #channel-select {
    /* margin-left: 30%; */
    margin-top: 2vh;
  }

  .github-page {
    text-align: right;
    padding-top: 2vh;
    padding-right: 2vw;
  }

  #style-select {
    /* margin-left: 40%; */
    margin-top: 2vh;
  }

  /* this is need only for settigs block */
  .nsetting {
    background-color: #414040;
    min-height: 7vh;
    width: 100%;
    display: block;
    border-bottom: 2px solid black;
  }
  .nsetting-name {
    margin-top: 1%;
    margin-left: 6%;
    display: inline-block;
    font-size: 2vh;
    width: 40%;
  }
  .nsetting-input {
    margin-top: 2%;
    margin-right: 3%;
    float: right;
  }

  .small-desc {
    font-size: 1.5vh;
    opacity: 0.5;
  }

  /* and this need for out and style select LULE */
  .setting {
    display: inline-block;
    margin-left: 3.5vw;
    margin-top: 6vh;
    text-align: center;
  }
</style>

<template>
<div id="main">

    <div style="background-color: rgb(64 64 64);" class="chat" ref="chat">
        <div class="chat-box">
          <ChatMessage class="mes" v-for="mes in Messages" :key="mes"
          :Emotes="Emotes" :Paints="Paints" :GlobalBadges="GlobalBadges"
          :payload="mes" :BG="BG" :BG2="BG2" :paintsEnabled="paintsEnabled" 
          :font_size="fontSize" :interpolateSize="interpolateSize"
          :OtherBadges="OtherBadges" :defaultColors="defaultColors"
          :SmoothColors="SmoothColors" :border="Border" :shadowText="textShadow"/>
        </div>
    </div>

    <div style="background-color: #3a3a3a;" class="author">

      <div class="author-name">
        Made by JustRirill (rj_st) <br>
        Github link <a href="https://github.com/justririll/JstChat" target="_blank">here</a> <br>
        This application is not affiliated with Twitch
      </div>
    </div>

    <div class="quick-settings">
      <center>
        <div class="setting" id="channel-select">
          <div class="setting-name">Channel name</div>
          <input type="text" :value="selectedChannel" v-on:input="onChangeChannel">
        </div>
        <button :onClick="join">Try it!</button>

        <div class="setting" id="style-select">
          <div class="setting-name">Style</div>
          <select @change="changeStyle">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </center>
    </div>

    <div class="settings">

      <div class="nsetting">
          <div class="nsetting-name">Font size</div>
          <input class="nsetting-input" type="number" :value="fontSize" min="4" max="50" v-on:input="onChangeFontSize">
      </div>

      <div class="nsetting">
          <div class="nsetting-name">Background color <br> <span class="small-desc">(in hex)</span></div>
          <input class="nsetting-input" onclick="this.select();" type="text" :value="BG" v-on:input="onChangeBG">
      </div>

      <div class="nsetting">
        <div class="nsetting-name">Font name from <a target="_blank" href="https://fonts.google.com/">here</a> <br> <span class="small-desc">(e.g. "Castoro Titling"; CASE SENSIVITY!)</span></div>
        <input class="nsetting-input" onclick="this.select();" type="text" :value="fontName" v-on:change="onChangeFont">
      </div>

      <div class="nsetting">
        <div class="nsetting-name">Fade after (0 = disable) <br> <span class="small-desc">(this woudn't work in this test chat)</span></div>
        <input class="nsetting-input" onclick="this.select();" type="text" :value="deleteAfter" v-on:input="onChangeFade">
      </div>

      <div class="nsetting">
        <div class="nsetting-name">7TV paints</div>
        <input class="nsetting-input" type="checkbox" :value="paintsEnabled" v-on:input="onChangePaints" checked>
      </div>

      <div class="nsetting">
        <div class="nsetting-name">Smooth colors <br> <span class="small-desc">(works when background is not transparent only)</span></div>
        <input class="nsetting-input" type="checkbox" :value="SmoothColors" v-on:input="onChangeSmooth" checked>
      </div>

      <div class="nsetting">
        <div class="nsetting-name">Border</div>
        <input class="nsetting-input" type="checkbox" :value="Border" v-on:input="onChangeBorder" checked>
      </div>

      <div class="nsetting">
        <div class="nsetting-name">7TV personal emotes <br> <span class="small-desc">(works with EventAPI only)</span></div>
        <input class="nsetting-input" type="checkbox" :value="pEmotes" v-on:input="onChangepEmotes" checked>
      </div>

      <div class="nsetting">
        <div class="nsetting-name">7TV event api</div>
        <input class="nsetting-input" type="checkbox" :value="eventApi" v-on:input="onChangeEventApi" checked>
      </div>
    </div>

    <div class="url">
      <div class="setting" id="out">
        <div class="setting-name">Your URL:</div>
        <input onclick="this.select(); navigator.clipboard.writeText(this.value);" class="out_url" type="text" :value="out_url" readonly>
      </div>
    </div>
    
</div>
</template>

<script>
import ChatMessage from '@/components/ChatMessage_example.vue'
import Common from '@/utils/common'
import Twitch from '@/utils/twitch.js'
import apis from '@/utils/tpd.js'
import { useHead } from '@vueuse/head'

export default {
    name: 'main-page',
    components: {
      ChatMessage
    },
    data() {
      return {
        paintsEnabled: "1",
        fontSize: "18",
        interpolateSize: "1",
        SmoothColors: "1",
        Border: "2",
        pEmotes: "1",
        eventApi: "1",
        textShadow: "0",
        deleteAfter: "0",
        
        fontName: "Roboto",

        altBG: true,
        BG: "#2b2b2b",
        BG2: "",

        PersonalEmotes: {},

        GlobalBadges: [],
        OtherBadges: [],
        Messages: [],
        Emotes: [],
        Badges: {},
        Paints: [],

        //
        currBG: true,

        channel: "", // this is channel for websocket
        selectedChannel: "", // this is channel from input, for url generating

        client: null,
        evenapi: null,

        defaultColors: ["#4242f7", "#ff7f50", "#1e90ff", "#00ff7f", "#9acd32", "#008000", "#ff4500", "#ff0000", "#daa520", "#ff69b4", "#5f9ea0", "#2e8b57", "#d2691e", "#a065d7", "#b22222"],
      }
    },
    updated() {
      this.$refs.chat.scrollTo(0,this.$refs.chat.scrollHeight);
      if (this.Messages.length > 25) {
        this.Messages.shift()
      }
    },
    created: async function() {
      // this we need to put in bg setting update
      if (this.BG != "#2b2b2b" && this.BG != "transparent") {
          this.BG = "#" + this.BG
        }

      // alt bg creation:
      if (this.altBG && this.BG != "transparent") {
        let minus = 1
        let gray = Common.toGray(this.BG) 
        if (gray > 0.38) {
          minus = -30/gray
        }
        this.BG2 = Common.pSBC(0.01*minus, this.BG)
      } else if (this.BG == "transparent") {
        this.BG2 = "transparent"
      }

      await this.create_client()
    },
    methods: {
      changeStyle(event) {
        switch (event.target.value.trim()) {
          case "1":
            this.Border = "2"

            this.BG = "#2b2b2b"
            this.BG2 = "#323232"

            this.SmoothColors = "1"

            this.textShadow = "0"
            break;
        
          case "2":
            this.Border = "0"

            this.BG = "transparent"
            this.BG2 = "transparent"

            this.SmoothColors = "0"

            this.textShadow = "1"
            break;
        }
      },

      onChangeChannel(event) {
        this.selectedChannel = event.target.value.trim().toLowerCase()
      },
      onChangeFontSize(event) {
        let i = parseInt(event.target.value.trim())
        if (i > 0 && i <= 50) this.fontSize = event.target.value.trim()
      },
      onChangepEmotes() {
        this.pEmotes = this.pEmotes.trim() == "1" ? "0" : "1"
      },
      onChangeBorder() {
        this.Border = this.Border.trim() == "2" ? "0" : "2"
      },
      onChangeBG(event) {
        let newBG =event.target.value.trim()
        if (newBG == "transparent" || newBG == "none" || newBG == "") {
          this.BG = "transparent"
          this.BG2 = "transparent"
        } else if (newBG.length == 7 && newBG.substring(0, 1) == "#") {
          try {
            this.BG = newBG
            let minus = 1
            let gray = Common.toGray(this.BG)
            if (gray > 0.38) {
              minus = -30/gray
            }
            this.BG2 = Common.pSBC(0.01*minus, this.BG)
          } catch(e) {
            // pass
          }
        }
      },
      onChangeFade(event) {
        const parsed = parseInt(event.target.value.trim());
        if (isNaN(parsed)) this.deleteAfter = "0";
        else this.deleteAfter = event.target.value.trim();
      },
      onChangeFont(event) {
        let fontName = event.target.value.trim()
        this.fontName = fontName
        useHead({
          link: [{href: `https://fonts.googleapis.com/css2?family=${fontName}&display=swap`, rel: "stylesheet"}],
        })
      },
      onChangePaints() {
        this.paintsEnabled = this.paintsEnabled.trim() == "1" ? "0" : "1"
      },
      onChangeBottom() {
        this.fromBottom = this.fromBottom.trim() == "1" ? "0" : "1"
      },
      onChangeInterpolate() {
        this.interpolateSize = this.interpolateSize.trim() == "1" ? "0" : "1"
      },
      onChangeSmooth() {
        this.SmoothColors = this.SmoothColors.trim() == "1" ? "0" : "1"
      },
      onChangeEventApi() {
        this.eventApi = this.eventApi.trim() == "1" ? "0" : "1"
      },

      async join() {
        if (this.selectedChannel != "" && this.selectedChannel != this.channel) {
          // this.client.part(this.channel)
          this.channel = this.selectedChannel
          await this.create_client()
        }
      },

      async create_client() {
        this.Emotes = []
        this.Messages = []
        this.Badges = []

        if (this.client != null) {
          this.client.disconnect()
        }
        this.channelID = null
        this.client = new Twitch(this.channel)

        this.client.OnUserId = this.onUserID
        this.client.OnPrivateMessage = async (payload) => {
          payload.BG = 0
          if (this.altBG) {
            payload.BG = this.currBG ? 0 : 1
            this.currBG = !this.currBG
          }
          // payload.tags.color = undefined
          payload.PersonalEmotes = undefined
          if (payload.source.nick in this.PersonalEmotes) {
            payload.PersonalEmotes = this.PersonalEmotes[payload.source.nick]
          }
          this.Messages.push(payload)
        }
        this.client.OnClearChat = async (payload) => {
          this.Messages = this.Messages.filter(item => item.source.nick !== payload.parameters)
        }
        this.client.OnClearMessage = async (payload) => {
          this.Messages = this.Messages.filter(item => item.tags["id"] !== payload.tags["target-msg-id"])
        }

        let gb = await apis.RetryOnError(apis.getGlobalBadges, [], 3)
        if (this.GlobalBadges["subscriber"]) {
          gb["subscriber"] = this.GlobalBadges["subscriber"]
        }
        this.GlobalBadges = gb
        let bp = await apis.RetryOnError(apis.get7tvBadgesPaints, [], 3)
        this.OtherBadges = bp[0]
        this.Paints = bp[1]

        if (this.channel != "") {
          this.client.connect()
          this.Emotes = this.Emotes.concat(await apis.RetryOnError(apis.get7tvGlobalEmotes, [], 3))
          console.log("loaded 7tv global emotes")
          this.Emotes = this.Emotes.concat(await apis.RetryOnError(apis.getBttvGlobalEmotes, [], 3))
          console.log("loaded bttv global emotes")
          this.Emotes = this.Emotes.concat(await apis.RetryOnError(apis.getFfzEmotes, [this.channel], 3))
          console.log("loaded ffz channel emotes")
          this.Emotes = this.Emotes.concat(await apis.RetryOnError(apis.getFfzGlobalEmotes, [], 3))
          console.log("loaded ffz global emotes")
        } else {
          this.Emotes = this.Emotes.concat(await apis.RetryOnError(apis.get7tvGlobalEmotes, [], 3))
          this.Messages.push({"tags":{"badge-info":null,"badges":{"game-developer":"1"},"color":"#FFFFFF","display-name":"rj_st","emotes":null,"first-msg":"0","id":"4e9b10fb-7e80-46b5-9652-efc894188334","mod":"0","returning-chatter":"0","room-id":"22484632","subscriber":"0","tmi-sent-ts":"1680165804876","turbo":"0","user-id":"407046453","user-type":null},"source":{"nick":"rj_st","host":"rj_st@rj_st.tmi.twitch.tv"},"command":{"command":"PRIVMSG","channel":"#forsen"},"parameters":"ApuApustaja TeaTime","BG":"0"})
          this.Messages.push({"tags":{"badge-info":null,"badges":{"game-developer":"1"},"color":"#FFFFFF","display-name":"rj_st","emotes":null,"first-msg":"0","id":"4e9b10fb-7e80-46b5-9652-efc894188334","mod":"0","returning-chatter":"0","room-id":"22484632","subscriber":"0","tmi-sent-ts":"1680165804876","turbo":"0","user-id":"407046453","user-type":null},"source":{"nick":"rj_st","host":"rj_st@rj_st.tmi.twitch.tv"},"command":{"command":"PRIVMSG","channel":"#forsen"},"parameters":"ApuApustaja TeaTime","BG":"1"})
          // this.Messages.push({"tags":{"badge-info":{"subscriber":"33"},"badges":{"vip":"1","subscriber":"24"},"color":"#66CDAA","display-name":"Aroldas1","emotes":null,"first-msg":"0","id":"a6e4ccf3-98fe-437a-9318-d87b3591f8a5","mod":"0","returning-chatter":"0","room-id":"48189727","subscriber":"1","tmi-sent-ts":"1680348603142","turbo":"0","user-id":"69078167","user-type":null,"vip":"1"},"source":{"nick":"aroldas1","host":"aroldas1@aroldas1.tmi.twitch.tv"},"command":{"command":"PRIVMSG","channel":"#t2x2"},"parameters":"ApuApustaja TeaTime","BG":"0"})
        }
      }, 
      async get7tvchannel() {
        let stv = await apis.RetryOnError(apis.get7tvEmotes, [this.channelID], 3)
        if (stv.length > 0) {
          console.log("loaded seventv channel")
          this.Emotes = this.Emotes.concat(stv[0])

          // initializing event api
          // if (this.useEventAPI) {
          //   this.EventApi = new EventApi(stv[1], this.channelID, this.onEmoteAdd, this.onEmoteRename)

          //   this.EventApi.onDelete = this.onEmoteDelete
          //   this.EventApi.onAdd = this.onEmoteAdd
          //   this.EventApi.onRename = this.onEmoteRename

          //   this.EventApi.onPersonalEmotes = this.onPersonalEmotes

          //   this.EventApi.Connect()
          // }
        }
      },
      async getbttvchannel() {
        this.Emotes = this.Emotes.concat(await await apis.RetryOnError(apis.getBttvEmotes, [this.channelID], 3))
      },
      async getsubscriberbadges() {
        let subs = await apis.RetryOnError(apis.getSubscriberBadges, [this.channelID], 3)
        if (subs) {
          this.GlobalBadges["subscriber"] = subs
          console.log("loaded sub badges")
        }
      },
      async onUserID(id) {
          console.log(this.channelID)
          if (this.channelID == null) {
            this.channelID = id

            // a
            await this.getbttvchannel()
            await this.get7tvchannel()
            await this.getsubscriberbadges()
          }
        }
    },
    computed: {
      out_url() {
        let additional_query = ""
        if (this.selectedChannel != "") {
          if (this.fontSize != 18) additional_query += `&font_size=${this.fontSize}`
          if (this.BG != "#2b2b2b") additional_query += `&background=${this.BG != "transparent" ? this.BG.substring(1) : this.BG}`
          if (this.paintsEnabled != "1") additional_query += `&paints=0`
          if (this.SmoothColors != "1") additional_query += `&smoothcolor=0`
          if (this.Border != "2") additional_query += `&border=0`
          if (this.pEmotes != "1") additional_query += `&pemotes=0`
          if (this.eventApi != "1") additional_query += `&eventapi=0`
          if (this.textShadow != "0") additional_query += `&shadowtext=1`
          if (this.fontName != "Roboto") additional_query += `&fontname=${this.fontName}`
          if (this.deleteAfter != "0") additional_query += `&deleteafter=${this.deleteAfter}`

          return `${location.toString()}chat?channel=${this.selectedChannel}${additional_query}`
        }
        return `No channel!`
      },
    }
}
</script>