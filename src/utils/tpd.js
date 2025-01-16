// import common from '@/methods/common.js'
// @todo: сделать таймаут на получение всякой хуеты если произошла ошибка кроме 404

var Huita = {

    async get7tvEmoteSet(set_id) {
        const response = await fetch(`https://7tv.io/v3/emote-sets/${set_id}`)
        if (response.ok) {
            let emotes = []
            
            const json = await response.json()
            if (json.emotes != undefined) {
                for (const emote of json.emotes) {
                    emotes.push({"Name": emote.name, "ID": emote.id, "Type": "7TV", "ZeroWidth": emote.flags == 1})
                }
    
                let owner = json.owner.username
    
                return [emotes, owner]
            } else {
                return [undefined, undefined]
            }
        } 
        throw "failed to fetch 7tv emote set"
    },

    async wait(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    },
    
    async RetryOnError(func, args, attempts) {
        for (let a = 0; a < attempts; a++) {
            try {
                return await func(...args)
            } catch (error) {
                console.log("Attemption failed, retrying in 1s")
                console.log(`Error: ${error}`)
                await this.wait(1000)
                continue
            }
        }
        console.log("Failed to fetch func")
        return [];
    },

    async getUserID(channel) {
        const response = await fetch(`https://api.ivr.fi/v2/twitch/user?login=${channel}`)
        if (response.ok) {
            console.log("IVR API successful, getting user-id...")
            const json = await response.json()
            return json[0].id
        }
        throw "Unable to get user id from ivr API!"
    },
    async getGlobalBadges() {
        let badges = {}

        const response = await fetch("https://api.ivr.fi/v2/twitch/badges/global")
        if (response.ok) {
                const json = await response.json()
            for (const value of json) {
                let vers = value["versions"]
                let finalVersions = {}
                for (const value of vers) {
                    finalVersions[value["id"]] = value["image_url_2x"]
                }
                badges[value["set_id"]] = finalVersions
            }
            return badges
        }
        if (response.status != 404) {
            throw "not loaded"
        }
        return {}
    },
    async getSubscriberBadges(user_id) {
        let subscriber = {}

        const response = await fetch(`https://api.ivr.fi/v2/twitch/badges/channel?id=${user_id}`)
        const json = await response.json()
        if (response.ok && json.length > 0) {
            for (const obj of json) {
                if (obj["set_id"] == "subscriber") {
                    let vers = obj["versions"]
                    let finalVersions = {}
                    for (const value of vers) {
                        finalVersions[value["id"]] = value["image_url_2x"]
                    }
                    subscriber = finalVersions
                    return subscriber
                }
            }
        }
        if (response.status != 404 && json.length > 0) {
            throw "not loaded"
        }
        return {}
    },
    // async getUserBy7tvId(id) {
    //     const resp = await fetch("https://7tv.io/v3/gql", {
    //         method: 'POST',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             "operationName": "GetUserForUserPage",
    //             "variables": {
    //               "id": id
    //             },
    //             "query": "query GetUserForUserPage($id: ObjectID!) {\n  user(id: $id) {\n    id\n    username\n    display_name\n    created_at\n    avatar_url\n    style {\n      color\n      paint_id\n      __typename\n    }\n    biography\n    editors {\n      id\n      permissions\n      visible\n      user {\n        id\n        username\n        display_name\n        avatar_url\n        style {\n          color\n          paint_id\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    emote_sets {\n      id\n      name\n      capacity\n      owner {\n        id\n        __typename\n      }\n      __typename\n    }\n    roles\n    connections {\n      id\n      username\n      display_name\n      platform\n      linked_at\n      emote_capacity\n      emote_set_id\n      __typename\n    }\n    __typename\n  }\n}"
    //           })
    //       })
    //     const json = await resp.json()
    //     if (json.data.user != null) {
    //         return json.data.user
    //     }
    //     return undefined 
    // },
    async get7tvBadgesPaints() {
            let badges = []
            let paints = []

        const response = await fetch(`https://api.7tv.app/v2/badges?user_identifier=twitch_id`)
        if (response.ok) {
                const json = await response.json()
            for (const value of json["badges"]) {
                badges.push({"Users": value.users, "Url": value.urls[1][1], Type: "7TV"})
            }
            for (const value of json["paints"]) {
                paints.push(value)
            }
            return [badges, paints]
        }
        if (response.status != 404) {
            throw "not loaded"
        }
        return []
    },
    async get7tvEmotes(user_id) {
        let emotes = {}

        const response = await fetch(`https://7tv.io/v3/users/twitch/${user_id}`)
        if (response.ok) {
            const json = await response.json()
            for (const value of json["emote_set"]["emotes"]) {
                emotes[value.name] = {"ID": value.id, "Type": "7TV", "ZeroWidth": value.flags == 1}
            }
            return [emotes, json["emote_set"]["id"]]
        }
        if (response.status != 404) {
            throw "7tv not loaded"
        }
        return {}
    },
    async get7tvGlobalEmotes() {
        let emotes = {}

        const response = await fetch(`https://7tv.io/v3/emote-sets/01GG8F04Y000089195YKEP5CA3`)
        if (response.ok) {
            const json = await response.json()
            for (const value of json["emotes"]) {
                emotes[value.name] = {"ID": value.id, "Type": "7TV", "ZeroWidth": value.flags == 1}
            }
            return emotes
        }
        if (response.status != 404) {
            throw "not loaded"
        }
        return {}
    },
    async getBttvEmotes(user_id) {
        let emotes = {}
        const response = await fetch(`https://api.betterttv.net/3/cached/users/twitch/${user_id}`)
        if (response.ok) {
            const json = await response.json()
            if (json["sharedEmotes"]) {
                for (const value of json["sharedEmotes"]) {
                    emotes[value.code] = {"ID": value.id, "Type": "BTTV"}
                }
            }
            if (json["channelEmotes"]) {
                for (const value of json["channelEmotes"]) {
                    emotes[value.code] = {"ID": value.id, "Type": "BTTV"}
                }
            }
            return emotes
        }
        if (response.status != 404) {
            throw "not loaded"
        }
        return {}
    },
    async getBttvGlobalEmotes() {
        let emotes = {}

        const response = await fetch(`https://api.betterttv.net/3/cached/emotes/global`)
        if (response.ok) {
            const json = await response.json()
            for (const value of json) {
                emotes[value.code] = {"ID": value.id, "Type": "BTTV"}
            }
            return emotes
        }
        if (response.status != 404) {
            throw "not loaded"
        }
        return {}
    },
    async getFfzEmotes(channel) { // returns emotes, mod badge, vip badge
        let emotes = {}

        const response = await fetch(`https://api.frankerfacez.com/v1/room/${channel}`)
        if (response.ok) {
            const json = await response.json()
            for (const value of json["sets"][json["room"]["set"].toString()]["emoticons"]) {
                const type = value.animated === undefined ? "FFZ" : "FFZ_ANIMATED"
                emotes[value.name] = {"ID": value.id, "Type": type}
            }

            // getting custom badges:
            console.log(json.room.mod_urls)
            let mod_badge = undefined
            if (json.room.mod_urls != undefined) mod_badge = json.room.mod_urls["2"]

            console.log(json.vip_badge)
            let vip_badge = undefined
            if (json.room.vip_badge != undefined) vip_badge = json.room.vip_badge["2"]
            return [emotes, mod_badge, vip_badge]
        }
        if (response.status != 404) {
            throw "not loaded"
        }
        return []
    },
    async getFfzGlobalEmotes() {
        let emotes = {}

        const response = await fetch(`https://api.frankerfacez.com/v1/set/global`)
        if (response.ok) {
            const json = await response.json()
            for (const value of json["sets"]["3"]["emoticons"]) {
                const type = value.animated === undefined ? "FFZ" : "FFZ_ANIMATED"
                emotes[value.name] = {"ID": value.id, "Type": type}
            }
            return emotes
        }
        if (response.status != 404) {
            throw "not loaded"
        }
        return {}
    },
    // @todo: ffz badges, bttv badges. Maybe add chatterino badges.
}

export default Huita
