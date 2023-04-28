import chat from '@/utils/chat.js'

// const wait = async(ms) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// };

export default class Twitch {
    constructor(channel) {
        this.ws = null
        this.IsDisconnected = true
        this.ManuallyClosed = false

        this.channel = channel
        this.channelID = null

        this.OnUserId = null
        this.OnPrivateMessage = null
        this.OnClearChat = null
        this.OnClearMessage = null
    }

    connect() {
        if (!this.IsDisconnected) {
            return
        }

        this.ws = new WebSocket("wss://irc-ws.chat.twitch.tv:443");
        this.ws.onmessage = (e) => this.onMessage(e)
        this.ws.onopen = () => this.onOpen()
        this.ws.onerror = () => this.onError()
        this.ws.onclose = () => this.onClose()
    }

    part(channel) {
      this.ws.send(`PART #${channel}`)
    }

    join(channel) {
      this.ws.send(`PART #${channel}`)
    }

    disconnect() {
      if (this.ws != null) {
        this.ManuallyClosed = true
        this.ws.close()
      }
    }

    Disconnect() {
      this.ws.close()
    }

    async onError() {
        if (this.ManuallyClosed) return 
        console.log("Connection error occured, disconnecting...")
        this.ws.close()
    }

    async onClose() {
        if (!this.ManuallyClosed) {
          console.log("Disconnected, attempting to reconnect...")
          if (["t2x2", "shampan0v", "rj_st", "redfeed_sa"].includes(this.channel)) { // for logs
            this.OnPrivateMessage({"tags":{"badge-info":null,"badges":{},"color":"#FFFFFF","display-name":"System","emotes":null,"first-msg":"0","id":"4e9b10fb-7e80-46b5-9652-efc894188334","mod":"0","returning-chatter":"0","room-id":"22484632","subscriber":"0","tmi-sent-ts":"1680165804876","turbo":"0","user-id":"407046453","user-type":null},"source":{"nick":"System","host":"rj_st@rj_st.tmi.twitch.tv"},"command":{"command":"PRIVMSG","channel":"#forsen"},"parameters":"[TWITCH] Disconnected","BG":"0"})
          }
          this.IsDisconnected = true
          
          setTimeout(() => {this.connect()}, 1000);
        } 
    }

    async onOpen() {
        console.log("1232132312")
        this.IsDisconnected = false;
        this.ws.send("NICK justinfan1337")
        this.ws.send("JOIN #" + this.channel.toLowerCase());
        this.ws.send('CAP REQ :twitch.tv/tags twitch.tv/commands')
    }

    async onMessage(e) {
        let messages = e.data.split("\r\n")

        messages.forEach(message => {
          let payload = chat.parseMessage(message)
          if (!payload) {
            return
          }

          switch (payload.command.command) {
              // announce - USERNOTICE
              // нужно добавить реконнект
              case "CLEARCHAT":
                this.OnClearChat(payload)
                // this.Messages = this.Messages.filter(item => item.source.nick !== payload.parameters)
                break
              case "CLEARMSG":
                this.OnClearMessage(payload)
                // this.Messages = this.Messages.filter(item => item.tags["id"] !== payload.tags["target-msg-id"])
                break
              case "PRIVMSG":
                  if (this.channelID == null) {
                    this.channelID = payload.tags["room-id"]
                    this.OnUserId(payload.tags["room-id"])
                  }
                  this.OnPrivateMessage(payload)
                  break;
              case "PING":
                  this.ws.send(`PONG ${payload.message}`)
          }
        })
    }
}