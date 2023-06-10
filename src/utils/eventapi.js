import apis from '@/utils/tpd.js'

// const wait = async(ms) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// };

class EventAPI {
    constructor(set_id, user_id) {
        this.ws = null
        this.set_id = set_id
        this.user_id = user_id //user_id

        this.onDelete = undefined
        this.onAdd = undefined
        this.onRename = undefined

        this.onBadgeCreate = undefined
        this.onBadgeDelete = undefined
        this.onPaintCreate = undefined
        this.onPaintDelete = undefined

        this.pending = {}

        this.onPersonalEmotes = undefined

        this.IsDisconnected = true

        this.IsReconnecting = false

        this.Timeout = 1000
        this.attemps = 0
    }

    Connect() {
        if (!this.IsDisconnected) return
        
        this.ws = new WebSocket("wss://events.7tv.io/v3");
        this.ws.onmessage = (e) => this.onMessage(e)
        this.ws.onclose = () => this.onClose()
        this.ws.onopen = () => this.onOpen()
        this.ws.onerror = () => {this.ws.close()}
        this.IsReconnecting = false
    }

    async onOpen() {
        this.IsDisconnected = false
        console.log("EVENT API connected")
    }

    async onClose() {
        if (this.IsReconnecting) return

        this.IsReconnecting = true

        console.log("EVENT API disconnected")
        this.IsDisconnected = true

        this.attemps++
        setTimeout(() => {this.Connect()}, this.Timeout*this.attemps)
    }

    subscribeToEvent(event, cond) {
        let message = {
            "op": 35,
            "d": {
                "type": event,
                "condition": cond
            }
        }
        this.ws.send(JSON.stringify(message))
    }

    getTwitchConnection(connections) {
        for (const con of connections) {
            if (con.platform == "TWITCH") {
                return con
            }
        }
        return undefined
    }

    async onMessage(e) {
        let json = JSON.parse(e.data)
        // console.log(json)
        switch (json.op) {
            case 4000, 4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010, 4011: {
                console.log(json)
                this.ws.close()
                this.Connect()
                break
            }
            case 1: {
                this.subscribeToEvent("emote_set.*", {"object_id": this.set_id})
                //other
                const cond = {
                    "id": this.user_id,
                    "ctx": "channel",
                    "platform": "TWITCH"
                }
                this.subscribeToEvent("emote_set.*", cond)
                this.subscribeToEvent("cosmetic.*", cond)
                this.subscribeToEvent("entitlement.*", cond)
                // this.subscribeToEvent("cosmetic.*", {
                //     "id": "407046453",
                //     "ctx": "user",
                //     "platform": "TWITCH"
                // })
                break
            }
            case 0:
                switch (json.d.type) {
                    case "emote_set.update": {
                        // if (json.d.body.contextual) return

                        if (json.d.body.pulled) {
                            for (const item of json.d.body.pulled) {
                                this.onDelete(item)
                                break;
                            }
                        }
                        if (json.d.body.pushed) {
                            for (const item of json.d.body.pushed) {
                                this.onAdd(item)
                                break;
                            }
                        }
                        if (json.d.body.updated) {
                            for (const item of json.d.body.updated) {
                                this.onRename(item)
                                break;
                            }
                        }
                        break
                    }
                    // personal emotes:
                    case "emote_set.create": {
                        if (json.d.body.object.name != "Personal Emotes") break
                        let set_id = json.d.body.object.id

                        this.onPersonalEmotes(...await apis.get7tvEmoteSet(set_id))

                        break
                    }
                    
                    // paints & badges auto update
                    case "cosmetic.create": {
                        switch (json.d.body.object.kind) {
                            case "PAINT": {
                                this.pending[json.d.body.object.id] =json.d.body.object
                                break;
                            }
                            case "BADGE": {
                                this.pending[json.d.body.object.id] = json.d.body.object
                                break;
                            }
                        }
                        break
                    }

                    case "entitlement.create": {
                        let p = this.pending[json.d.body.object.ref_id]

                        if (p == undefined) break

                        switch (p.kind) {
                            case "PAINT": {
                                p.user = this.getTwitchConnection(json.d.body.object.user.connections)
                                this.onPaintCreate(p)
                                break
                            }
                            case "BADGE": {
                                p.user = this.getTwitchConnection(json.d.body.object.user.connections)
                                this.onBadgeCreate(p)
                                break
                            }
                        }
                        break
                    }
                    case "entitlement.delete": {
                        let p = this.pending[json.d.body.object.ref_id]

                        if (p == undefined) break

                        switch (p.kind) {
                            case "PAINT": {
                                p.user = this.getTwitchConnection(json.d.body.object.user.connections)
                                this.onPaintDelete(p)
                                break
                            }
                            case "BADGE": {
                                p.user = this.getTwitchConnection(json.d.body.object.user.connections)
                                this.onBadgeDelete(p)
                                break
                            }
                        }
                        // delete this.pending[json.d.body.object.ref_id]
                        break
                    }
                }
                // че то произошло

        }
    }
}

export default EventAPI