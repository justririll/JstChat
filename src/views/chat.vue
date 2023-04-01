<template>
    <div id="chat">
      <ChatMessage v-for="mes in Messages" :key="mes" :Emotes="Emotes" :GlobalBadges="GlobalBadges"
       :Paints="Paints" :OtherBadges="OtherBadges" :defaultColors="defaultColors" :payload="mes" :BG="mes.BG"/>
    </div>
</template>
  
<script>
  // значки ффз (и чаттерино?)

  import ChatMessage from '@/components/ChatMessage.vue'
  import apis from '@/methods/tpd.js'
  import EventApi from '@/methods/eventapi.js'
  import Twitch from '@/methods/twitch.js'
  import Common from '@/methods/common'
  
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

        // other:
        PersonalEmotes: {},

        channel: this.$route.query.channel,
        currBG: true,
        IsDisconnected: false,
        Emotes: [],
        GlobalBadges: [],
        OtherBadges: [],
        Paints: [],
        channelID: null,
        client: null,
        Messages: [],
        defaultColors: ["#4242f7", "#ff7f50", "#1e90ff", "#00ff7f", "#9acd32", "#008000", "#ff4500", "#ff0000", "#daa520", "#ff69b4", "#5f9ea0", "#2e8b57", "#d2691e", "#a065d7", "#b22222"],
      }
    },
    updated() {
      window.scrollTo(0,document.body.scrollHeight);
      if (this.Messages.length > 50) {
        this.Messages.shift()
      }
    },
    methods: {
      onEmoteDelete(e) {
        this.Emotes = this.Emotes.filter(item => item.ID !== e.old_value.id)
      },
      onEmoteAdd(e) {
        this.Emotes.push({"Name": e.value.name, "ID": e.value.id, "Type": "7TV"})
      },
      onEmoteRename(e) {
        for (let emote of this.Emotes) {
          if (emote.ID == e.value.id) {
            emote.Name = e.value.name
          }
        }
        this.Emotes.push({"Name": e.value.name, "ID": e.value.id, "Type": "7TV"})
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
          this.Emotes = this.Emotes.concat(stv[0])

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
    created: async function() {
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

        // creating websocket
        this.client = new Twitch(this.channel);

        this.client.OnUserId = this.onUserID
        this.client.OnPrivateMessage = async (payload) => {
          payload.BG = this.BG
          if (this.altBG) {
            payload.BG = this.currBG ? this.BG : this.BG2
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

        this.client.connect()
        // getting data

        try {
          let userid = await apis.getUserID(this.channel)
          console.log(userid)
          await this.onUserID(userid)
        } catch (error) {
          // pass
        }

        this.Emotes = this.Emotes.concat(await apis.RetryOnError(apis.get7tvGlobalEmotes, [], 3))
        console.log("loaded 7tv global emotes")
        this.Emotes = this.Emotes.concat(await apis.RetryOnError(apis.getBttvGlobalEmotes, [], 3))
        console.log("loaded bttv global emotes")
        this.Emotes = this.Emotes.concat(await apis.RetryOnError(apis.getFfzEmotes, [this.channel], 3))
        console.log("loaded ffz channel emotes")
        this.Emotes = this.Emotes.concat(await apis.RetryOnError(apis.getFfzGlobalEmotes, [], 3))
        console.log("loaded ffz global emotes")

        let gb = await apis.RetryOnError(apis.getGlobalBadges, [], 3)
        if (this.GlobalBadges["subscriber"]) {
          gb["subscriber"] = this.GlobalBadges["subscriber"]
        }
        this.GlobalBadges = gb

        let bp = await apis.RetryOnError(apis.get7tvBadgesPaints, [], 3)
        this.OtherBadges = bp[0]
        this.OtherBadges.unshift({"Users": ["407046453"], "Url": "https://i.imgur.com/qgO1Y7A.png"}) // custom badges )))
        this.OtherBadges.unshift({"Users": ["521810742"], "Url": "https://cdn.7tv.app/emote/63d6ed00349f81ba10452fdd/2x.webp"})
        this.OtherBadges.unshift({"Users": ["69078167"], "Url": "https://i.imgur.com/nIm3MvW.gif"})
        this.OtherBadges.unshift({"Users": ["489131898"], "Url": "https://i.imgur.com/Kg7X4ga.gif"})
        this.Paints = bp[1]
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
    padding: 0;

    overflow: hidden;
  }
</style>
  