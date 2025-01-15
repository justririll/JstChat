
var EmotesBaseUrl = {
    "7TV": "https://cdn.7tv.app/emote/{0}/2x.webp",
    "BTTV": "https://cdn.betterttv.net/emote/{0}/2x",
    "FFZ": "https://cdn.frankerfacez.com/emote/{0}/2",
    "FFZ_ANIMATED": "https://cdn.frankerfacez.com/emote/{0}/animated/2",
}

export default {
    ParseExtensions(html, emotes) {
        let res = " " + html + " "
        for (const t of html.split(" ")) {
            if (emotes[t]) {
                let em = emotes[t]
                res = res.replace(` ${t} `, ` <img src="${EmotesBaseUrl[em.Type].replace('{0}', em.ID)}" ZeroWidth="${em.ZeroWidth}"> `)
            }
        }
        return res.trim()
    },
    ParseTwitch(html, emotes) {        
        let res = " " + html + " "
        for (const [em, url] of Object.entries(emotes)) {
            /* eslint-disable no-unused-vars */
            for (const a in res.split(" ")) {
                res = res.replace(` ${em} `, ` <img src="${url}"> `)
            }
        }
        return res.trim()
    },
    ParsePersonal(html, emotes) {
        let res = " " + html + " "
        if (emotes !== undefined) {
            for (const em of emotes) {
                /* eslint-disable no-unused-vars */
                for (const t of html.split(" ")) {
                    res = res.replace(` ${em.Name} `, ` <img src="${EmotesBaseUrl[em.Type].replace('{0}', em.ID)}" ZeroWidth="${em.ZeroWidth}"> `)
                }
            }
        }
        return res.trim()
    }
}

// {"rj_st":[{"Name":"Rain","ID":"62bacaedd6b13b10fd43b773","Type":"7TV","ZeroWidth":false},{"Name":"OfCourse","ID":"6124f0d3ca26708cad4a2677","Type":"7TV","ZeroWidth":false},{"Name":"Souless","ID":"6136ccaca461b8023b1230f3","Type":"7TV","ZeroWidth":false},{"Name":"ND","ID":"62158846238beda80c0a119c","Type":"7TV","ZeroWidth":false},{"Name":"KStare","ID":"6125c7ac34c1f4b6e4eee074","Type":"7TV","ZeroWidth":false}]}

// if (this.PersonalEmotes !== undefined) {
//   for (const em of this.PersonalEmotes) {
//     for (const i in f_mes) {
//       if (f_mes[i].Text.slice(0, -1) == em.Name) {
//         f_mes[i].Type = "emote"
//         f_mes[i].Text = this.EmotesBaseUrl[em.Type].replace('{0}', em.ID)
//         f_mes[i].ZeroWidth = em.ZeroWidth
//       }
//     }
//   }
// }