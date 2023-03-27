// import common from '@/methods/common.js'
// @todo: сделать таймаут на получение всякой хуеты если произошла ошибка кроме 404

var Huita = {

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

        const response = await fetch("https://badges.twitch.tv/v1/badges/global/display?language=en")
        if (response.ok) {
                const json = await response.json()
            for (const [key, value] of Object.entries(json["badge_sets"])) {
                let vers = value["versions"]
                let finalVersions = {}
                for (const [key, value] of Object.entries(vers)) {
                    finalVersions[key] = value["image_url_2x"]
                }
                badges[key] = finalVersions
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

        const response = await fetch(`https://badges.twitch.tv/v1/badges/channels/${user_id}/display`)
        const json = await response.json()
        if (response.ok && Object.keys(json.badge_sets).length > 0) {
            let vers = json["badge_sets"]["subscriber"]["versions"]
            let finalVersions = {}
            for (const [key, value] of Object.entries(vers)) {
                finalVersions[key] = value["image_url_2x"]
            }
            subscriber = finalVersions
            return subscriber
        }
        if (response.status != 404 && Object.keys(json.badge_sets).length > 0) {
            throw "not loaded"
        }
        return {}
    },
    async get7tvBadgesPaints() {
            let badges = []
            let paints = []

        const response = await fetch(`https://api.7tv.app/v2/badges?user_identifier=twitch_id`)
        if (response.ok) {
                const json = await response.json()
            for (const value of json["badges"]) {
                badges.push({"Users": value.users, "Url": value.urls[1][1]})
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
        let emotes = []

        const response = await fetch(`https://7tv.io/v3/users/twitch/${user_id}`)
        if (response.ok) {
            const json = await response.json()
            for (const value of json["emote_set"]["emotes"]) {
                emotes.push({"Name": value.name, "ID": value.id, "Type": "7TV", "ZeroWidth": value.flags == 1})
            }
            return [emotes, json["emote_set"]["id"]]
        }
        if (response.status != 404) {
            throw "7tv not loaded"
        }
        return []
    },
    async get7tvGlobalEmotes() {
        let emotes = []

        const response = await fetch(`https://7tv.io/v3/emote-sets/62cdd34e72a832540de95857`)
        if (response.ok) {
            const json = await response.json()
            for (const value of json["emotes"]) {
                emotes.push({"Name": value.name, "ID": value.id, "Type": "7TV", "ZeroWidth": value.flags == 1})
            }
            return emotes
        }
        if (response.status != 404) {
            throw "not loaded"
        }
        return []
    },
    async getBttvEmotes(user_id) {
        let emotes = []
        const response = await fetch(`https://api.betterttv.net/3/cached/users/twitch/${user_id}`)
        if (response.ok) {
            const json = await response.json()
            if (json["sharedEmotes"]) {
                for (const value of json["sharedEmotes"]) {
                    emotes.push({"Name": value.code, "ID": value.id, "Type": "BTTV"})
                }
            }
            if (json["channelEmotes"]) {
                for (const value of json["channelEmotes"]) {
                    emotes.push({"Name": value.code, "ID": value.id, "Type": "BTTV"})
                }
            }
            return emotes
        }
        if (response.status != 404) {
            throw "not loaded"
        }
        return []
    },
    async getBttvGlobalEmotes() {
        let emotes = []

        const response = await fetch(`https://api.betterttv.net/3/cached/emotes/global`)
        if (response.ok) {
            const json = await response.json()
            for (const value of json) {
                emotes.push({"Name": value.code, "ID": value.id, "Type": "BTTV"})
            }
            return emotes
        }
        if (response.status != 404) {
            throw "not loaded"
        }
        return []
    },
    async getFfzEmotes(channel) {
        let emotes = []

        const response = await fetch(`https://api.frankerfacez.com/v1/room/${channel}`)
        if (response.ok) {
            const json = await response.json()
            for (const value of json["sets"][json["room"]["set"].toString()]["emoticons"]) {
                emotes.push({"Name": value.name, "ID": value.id, "Type": "FFZ"})
            }
            return emotes
        }
        if (response.status != 404) {
            throw "not loaded"
        }
        return []
    },
    async getFfzGlobalEmotes() {
        let emotes = []

        const response = await fetch(`https://api.frankerfacez.com/v1/set/global`)
        if (response.ok) {
            const json = await response.json()
            for (const value of json["sets"]["3"]["emoticons"]) {
                emotes.push({"Name": value.name, "ID": value.id, "Type": "FFZ"})
            }
            return emotes
        }
        if (response.status != 404) {
            throw "not loaded"
        }
        return []
    },
    // @todo: ffz badges, bttv badges. Maybe add chatterino badges.
}

export default Huita