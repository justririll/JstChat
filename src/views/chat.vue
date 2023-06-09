<template>
    <div id="chat">
        <transition-group :name="transition_group">
          <ChatMessage v-for="mes in Messages" :key="mes.tags.id" :PersonalEmotes="PersonalEmotes[mes.source.nick]"
          :Emotes="Emotes" :GlobalBadges="GlobalBadges"
          :Paints="Paints" :OtherBadges="OtherBadges"
          :defaultColors="defaultColors" :payload="mes"
          :BG="mes.BG" :overridedBadges="overridedBadges" v-emoji/>
        </transition-group>
    </div>
</template>

<script>
  // значки ффз (и чаттерино?)

  import ChatMessage from '@/components/ChatMessage.vue'
  import apis from '@/utils/tpd.js'
  import EventApi from '@/utils/eventapi.js'
  import Twitch from '@/utils/twitch.js'
  import Common from '@/utils/common'
  import { useHead } from '@vueuse/head'
  
  export default {
    name: 'chat-page',
    components: {
        ChatMessage
    },
    data() {
      return {
        EventApi: null,

        // settings:
        // value: selectedValue || defaultValue
        paintsEnabled: this.$route.query.paints || "1",
        font_size: this.$route.query.font_size || "18",
        // value: selectedValue != off (true by default)
        altBG: this.$route.query.altbg != "0",
        BG: this.$route.query.background || "#2b2b2b",
        BG2: "",
        useEventAPI: this.$route.query.eventapi != "0",
        pEmotesEnabled: this.$route.query.pemotes != "0",
        deleteAfter : this.$route.query.deleteafter || "0",
        fontName: this.$route.query.fontname || "roboto",
        ignoreList: (this.$route.query.ignore || "").toLowerCase().split(" "),

        // other:
        PersonalEmotes: {},

        channel: this.$route.query.channel,
        currBG: true,
        IsDisconnected: false,
        Emotes: {},
        GlobalBadges: [],
        OtherBadges: [],
        Paints: [],
        channelID: null,
        client: null,
        overridedBadges: false,
        Messages: [],
        defaultColors: ["#4242f7", "#ff7f50", "#1e90ff", "#00ff7f", "#9acd32", "#008000", "#ff4500", "#ff0000", "#daa520", "#ff69b4", "#5f9ea0", "#2e8b57", "#d2691e", "#a065d7", "#b22222"],
      }
    },
    methods: {
      onEmoteDelete(e) {
        delete this.Emotes[e.old_value.id]
      },
      onEmoteAdd(e) {
        this.Emotes[e.value.name] = {"ID": e.value.id, "Type": "7TV"}
      },
      onEmoteRename(e) {
        console.log(e)
        this.Emotes[e.value.name] = this.Emotes[e.old_value.name]
        delete this.Emotes[e.old_value.name]
      },
      onPersonalEmotes(e, user) {
        if (e != undefined && user != undefined && this.pEmotesEnabled) {
          this.PersonalEmotes[user] = e
        }
      },
      async get7tvchannel() {
        let stv = await apis.RetryOnError(apis.get7tvEmotes, [this.channelID], 3)
        if (stv.length > 0) {
          console.log("loaded seventv channel")
          this.Emotes = Object.assign(this.Emotes, stv[0])

          // initializing event api
          if (this.useEventAPI) {
            this.EventApi = new EventApi(stv[1], this.channelID, this.onEmoteAdd, this.onEmoteRename)

            this.EventApi.onDelete = this.onEmoteDelete
            this.EventApi.onAdd = this.onEmoteAdd
            this.EventApi.onRename = this.onEmoteRename

            this.EventApi.onPersonalEmotes = this.onPersonalEmotes

            this.EventApi.Connect()
          }
        }
      },
      async getbttvchannel() {
        this.Emotes = Object.assign(this.Emotes, await apis.RetryOnError(apis.getBttvEmotes, [this.channelID], 3))
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

            await this.getbttvchannel()
            await this.get7tvchannel()
            await this.getsubscriberbadges()
          }
        }
    },
    created: async function() {
      useHead({
          link: [{href: `https://fonts.googleapis.com/css2?family=${this.$route.query.fontname || "Roboto"}&display=swap`, rel: "stylesheet"}],
        })

        // check for bg:
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

        this.client = new Twitch(this.channel);

        this.client.OnUserId = this.onUserID
        this.client.OnPrivateMessage = async (payload) => {
          if (this.ignoreList.includes(payload.source.nick)) return

          payload.BG = this.BG
          if (this.altBG) {
            payload.BG = this.currBG ? this.BG : this.BG2
            this.currBG = !this.currBG
          }
          // payload.tags.color = undefined
          // payload.PersonalEmotes = undefined
          // if (payload.source.nick in this.PersonalEmotes) {
          //   payload.PersonalEmotes = this.PersonalEmotes[payload.source.nick]
          // }

          this.Messages.push(payload)

          if (this.deleteAfter != "0") {
            setTimeout(() => {
                let index = this.Messages.indexOf(payload)
                if (index > -1) {
                  this.Messages.splice(index, 1);
                }
            }, parseInt(this.deleteAfter)*1000);
          }
          if (this.Messages.length > 50) {
            this.Messages.shift()
          }
        }
        this.client.OnClearChat = async (payload) => {
          this.Messages = this.Messages.filter(item => item.source.nick !== payload.parameters)
        }
        this.client.OnClearMessage = async (payload) => {
          this.Messages = this.Messages.filter(item => item.tags["id"] !== payload.tags["target-msg-id"])
        }

        this.client.connect()
        // getting data

        try {
          let userid = await apis.getUserID(this.channel)
          console.log(userid)
          await this.onUserID(userid)
        } catch (error) {
          // pass
        }

        this.Emotes = Object.assign(this.Emotes, await apis.RetryOnError(apis.get7tvGlobalEmotes, [], 3))
        console.log("loaded 7tv global emotes")
        this.Emotes = Object.assign(this.Emotes, await apis.RetryOnError(apis.getBttvGlobalEmotes, [], 3))
        console.log("loaded bttv global emotes")

        let ffz_data = await apis.RetryOnError(apis.getFfzEmotes, [this.channel], 3) // this contains emotes, mod badge, vip badge

        if (ffz_data[0] != undefined) {this.Emotes = Object.assign(this.Emotes, ffz_data[0])}
        console.log("loaded ffz channel emotes")

        this.Emotes = Object.assign(this.Emotes, await apis.RetryOnError(apis.getFfzGlobalEmotes, [], 3))
        console.log("loaded ffz global emotes")

        let gb = await apis.RetryOnError(apis.getGlobalBadges, [], 3)
        if (this.GlobalBadges["subscriber"]) {
          gb["subscriber"] = this.GlobalBadges["subscriber"]
        }
        this.GlobalBadges = gb
        if (ffz_data[1] != undefined) {this.GlobalBadges["moderator"]["1"] = ffz_data[1]; this.overridedBadges = true}
        if (ffz_data[2] != undefined) this.GlobalBadges["vip"]["1"] = ffz_data[2]

        let bp = await apis.RetryOnError(apis.get7tvBadgesPaints, [], 3)
        this.OtherBadges = bp[0]
        this.OtherBadges.unshift({"Users": ["407046453"], "Url": "https://i.imgur.com/qgO1Y7A.png"}) // custom badges )))
        this.OtherBadges.unshift({"Users": ["521810742"], "Url": "https://cdn.7tv.app/emote/63d6ed00349f81ba10452fdd/2x.webp"})
        this.OtherBadges.unshift({"Users": ["69078167"], "Url": "https://i.imgur.com/nIm3MvW.gif"})
        this.OtherBadges.unshift({"Users": ["489131898"], "Url": "https://i.imgur.com/Kg7X4ga.gif"})
        this.Paints = bp[1]
    },
    computed: {
      transition_group() {
        if (this.deleteAfter != "0") return "tr"
        return "fl"
      }
    }
  }
</script>
  
<style>
  body {
    margin: 0px;
    overflow: hidden;
  }
  #chat {
    position: absolute;
    width: 100%;

    bottom: 0;

    overflow: hidden;
    font-family: v-bind(fontName);
  }

  .tr-leave-active {
    transition: opacity 0.5s ease;
  }
  .tr-leave-to {
    opacity: 0;
  }
</style>
  