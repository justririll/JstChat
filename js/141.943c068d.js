(self["webpackChunkchat"]=self["webpackChunkchat"]||[]).push([[141],{1223:function(t,e,n){var s=n(5112),a=n(30),o=n(3070).f,r=s("unscopables"),i=Array.prototype;void 0==i[r]&&o(i,r,{configurable:!0,value:a(null)}),t.exports=function(t){i[r][t]=!0}},7045:function(t,e,n){var s=n(6339),a=n(3070);t.exports=function(t,e,n){return n.get&&s(n.get,e,{getter:!0}),n.set&&s(n.set,e,{setter:!0}),a.f(t,e,n)}},490:function(t,e,n){var s=n(5005);t.exports=s("document","documentElement")},30:function(t,e,n){var s,a=n(9670),o=n(6048),r=n(748),i=n(3501),c=n(490),l=n(317),u=n(6200),h=">",d="<",f="prototype",p="script",g=u("IE_PROTO"),m=function(){},w=function(t){return d+p+h+t+d+"/"+p+h},b=function(t){t.write(w("")),t.close();var e=t.parentWindow.Object;return t=null,e},M=function(){var t,e=l("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(w("document.F=Object")),t.close(),t.F},v=function(){try{s=new ActiveXObject("htmlfile")}catch(e){}v="undefined"!=typeof document?document.domain&&s?b(s):M():b(s);var t=r.length;while(t--)delete v[f][r[t]];return v()};i[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=a(t),n=new m,m[f]=null,n[g]=t):n=v(),void 0===e?n:o.f(n,e)}},6048:function(t,e,n){var s=n(9781),a=n(3353),o=n(3070),r=n(9670),i=n(5656),c=n(1956);e.f=s&&!a?Object.defineProperties:function(t,e){r(t);var n,s=i(e),a=c(e),l=a.length,u=0;while(l>u)o.f(t,n=a[u++],s[n]);return t}},1956:function(t,e,n){var s=n(6324),a=n(748);t.exports=Object.keys||function(t){return s(t,a)}},7066:function(t,e,n){"use strict";var s=n(9670);t.exports=function(){var t=s(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},2262:function(t,e,n){"use strict";var s=n(2109),a=n(7908),o=n(6244),r=n(9303),i=n(1223);s({target:"Array",proto:!0},{at:function(t){var e=a(this),n=o(e),s=r(t),i=s>=0?s:n+s;return i<0||i>=n?void 0:e[i]}}),i("at")},2087:function(t,e,n){var s=n(7854),a=n(9781),o=n(7045),r=n(7066),i=n(7293),c=s.RegExp,l=c.prototype,u=a&&i((function(){var t=!0;try{c(".","d")}catch(u){t=!1}var e={},n="",s=t?"dgimsy":"gimsy",a=function(t,s){Object.defineProperty(e,t,{get:function(){return n+=s,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var r in t&&(o.hasIndices="d"),o)a(r,o[r]);var i=Object.getOwnPropertyDescriptor(l,"flags").get.call(e);return i!==s||n!==s}));u&&o(l,"flags",{configurable:!0,get:r})},4506:function(t,e,n){"use strict";var s=n(2109),a=n(1702),o=n(4488),r=n(9303),i=n(1340),c=n(7293),l=a("".charAt),u=c((function(){return"\ud842"!=="𠮷".at(-2)}));s({target:"String",proto:!0,forced:u},{at:function(t){var e=i(o(this)),n=e.length,s=r(t),a=s>=0?s:n+s;return a<0||a>=n?void 0:l(e,a)}})},9065:function(t,e,n){"use strict";n(1703);class s{static hex2lab(t){const[e,n,a,o]=s.hex2rgba(t),[r,i,c]=s.rgb2xyz(e,n,a,o);return s.xyz2lab(r,i,c)}static rgba2lab(t,e,n,a=1){const[o,r,i]=s.rgb2xyz(t,e,n,a);return s.xyz2lab(o,r,i)}static lab2rgba(t,e,n){const[a,o,r]=s.lab2xyz(t,e,n);return s.xyz2rgba(a,o,r)}static hex2rgba(t){let e;if("#"===t.charAt(0)&&(e=t.substring(1).split("")),e.length>6||e.length<3)throw new Error(`HEX colour must be 3 or 6 values. You provided it ${e.length}`);3===e.length&&(e=[e[0],e[0],e[1],e[1],e[2],e[2]]),e="0x"+e.join("");let n=e>>16&255,s=e>>8&255,a=255&e,o=1;return[n,s,a,o]}static rgb2xyz(t,e,n,s=1){t>255?t=255:t<0&&(t=0),e>255?e=255:e<0&&(e=0),n>255?n=255:n<0&&(n=0),s>1?s=1:s<0&&(s=0),t/=255,e/=255,n/=255,t>.04045?t=Math.pow((t+.055)/1.055,2.4):t/=12.92,e>.04045?e=Math.pow((e+.055)/1.055,2.4):e/=12.92,n>.04045?n=Math.pow((n+.055)/1.055,2.4):n/=12.92,t*=100,e*=100,n*=100;const a=.4124564*t+.3575761*e+.1804375*n,o=.2126729*t+.7151522*e+.072175*n,r=.0193339*t+.119192*e+.9503041*n;return[a,o,r]}static xyz2rgba(t,e,n){let s=t/100,a=e/100,o=n/100,r=3.2404542*s+-1.5371385*a+-.4985314*o,i=-.969266*s+1.8760108*a+.041556*o,c=.0556434*s+-.2040259*a+1.0572252*o;r>.0031308?r=1.055*Math.pow(r,1/2.4)-.055:r*=12.92,i>.0031308?i=1.055*Math.pow(i,1/2.4)-.055:i*=12.92,c>.0031308?c=1.055*Math.pow(c,1/2.4)-.055:c*=12.92;let l=Math.round(255*r),u=Math.round(255*i),h=Math.round(255*c);return[l,u,h,1]}static xyz2lab(t,e,n){const s=94.811,a=100,o=107.304;t/=s,e/=a,n/=o,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;const r=116*e-16,i=500*(t-e),c=200*(e-n);return[r,i,c]}static lab2xyz(t,e,n){const s=94.811,a=100,o=107.304;let r=(t+16)/116,i=e/500+r,c=r-n/200;r=Math.pow(r,3)>.008856?Math.pow(r,3):(r-16/116)/7.787,i=Math.pow(i,3)>.008856?Math.pow(i,3):(i-16/116)/7.787,c=Math.pow(c,3)>.008856?Math.pow(c,3):(c-16/116)/7.787;let l=i*s,u=r*a,h=c*o;return[l,u,h]}static deltaE00(t,e,n,s,a,o){Math.rad2deg=function(t){return 360*t/(2*Math.PI)},Math.deg2rad=function(t){return 2*Math.PI*t/360};const r=(t+s)/2,i=Math.sqrt(Math.pow(e,2)+Math.pow(n,2)),c=Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),l=(i+c)/2,u=(1-Math.sqrt(Math.pow(l,7)/(Math.pow(l,7)+Math.pow(25,7))))/2,h=e*(1+u),d=a*(1+u),f=Math.sqrt(Math.pow(h,2)+Math.pow(n,2)),p=Math.sqrt(Math.pow(d,2)+Math.pow(o,2)),g=(f+p)/2;let m=Math.rad2deg(Math.atan2(n,h));m<0&&(m+=360);let w=Math.rad2deg(Math.atan2(o,d));w<0&&(w+=360);const b=Math.abs(m-w)>180?(m+w+360)/2:(m+w)/2,M=1-.17*Math.cos(Math.deg2rad(b-30))+.24*Math.cos(Math.deg2rad(2*b))+.32*Math.cos(Math.deg2rad(3*b+6))-.2*Math.cos(Math.deg2rad(4*b-63));let v=w-m;Math.abs(v)>180&&(w<=m?v+=360:v-=360);const y=s-t,C=p-f;v=2*Math.sqrt(f*p)*Math.sin(Math.deg2rad(v)/2);const I=1+.015*Math.pow(r-50,2)/Math.sqrt(20+Math.pow(r-50,2)),T=1+.045*g,E=1+.015*g*M,O=30*Math.exp(-Math.pow((b-275)/25,2)),k=2*Math.sqrt(Math.pow(g,7)/(Math.pow(g,7)+Math.pow(25,7))),x=-k*Math.sin(2*Math.deg2rad(O)),D=1,P=1,F=1,j=Math.sqrt(Math.pow(y/(D*I),2)+Math.pow(C/(P*T),2)+Math.pow(v/(F*E),2)+x*(C/(P*T))*(v/(F*E)));return j}static getDarkerColour(t,e,n,a=1,o=.05){let[r,i,c]=s.rgba2lab(t,e,n,a);return r-=r*o,r<0&&(r=0),s.lab2rgba(r,i,c)}static getBrighterColour(t,e,n,a=1,o=.05){let[r,i,c]=s.rgba2lab(t,e,n,a);return r+=r*o,r>100&&(r=100),s.lab2rgba(r,i,c)}}e["Z"]=s},7662:function(t,e,n){"use strict";n(1703);function s(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function a(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}var o={textToMessageObject(t){let e=[];for(const n of t.split(" ")){let t=n.trim();""!=t&&e.push({Type:"text",Text:t+" "})}return e},getEmote(t,e){for(const n of t)if(n.Name==e)return[!0,n];return[!1,{}]},getEmoteTwitch(t,e){for(const n in t)if(n==e)return[!0,t[n]];return[!1,{}]},magnitude(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return Math.sqrt(e)},dot_product(t,e){if(t.length!==e.length)throw new Error("Vectors must have the same length");let n=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s];return n},DecimalToStringRGBA(t){const e=t>>>24&255,n=t>>>16&255,s=t>>>8&255,a=255&t;return`rgba(${e}, ${n}, ${s}, ${(a/255).toFixed(3)})`},toGray(t){let e=a(t);return e[0]/255*.2126+e[1]/255*.7152+e[2]/255*.0722},pSBC(t,e,n,s){let a,o,r,i,c,l,u,h=parseInt,d=Math.round,f="string"==typeof n;return"number"!=typeof t||t<-1||t>1||"string"!=typeof e||"r"!=e[0]&&"#"!=e[0]||n&&!f?null:(this.pSBCr||(this.pSBCr=t=>{let e=t.length,n={};if(e>9){if([a,o,r,f]=t=t.split(","),e=t.length,e<3||e>4)return null;n.r=h("a"==a[3]?a.slice(5):a.slice(4)),n.g=h(o),n.b=h(r),n.a=f?parseFloat(f):-1}else{if(8==e||6==e||e<4)return null;e<6&&(t="#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+(e>4?t[4]+t[4]:"")),t=h(t.slice(1),16),9==e||5==e?(n.r=t>>24&255,n.g=t>>16&255,n.b=t>>8&255,n.a=d((255&t)/.255)/1e3):(n.r=t>>16,n.g=t>>8&255,n.b=255&t,n.a=-1)}return n}),u=e.length>9,u=f?n.length>9||"c"==n&&!u:u,c=this.pSBCr(e),i=t<0,l=n&&"c"!=n?this.pSBCr(n):i?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},t=i?-1*t:t,i=1-t,c&&l?(s?(a=d(i*c.r+t*l.r),o=d(i*c.g+t*l.g),r=d(i*c.b+t*l.b)):(a=d((i*c.r**2+t*l.r**2)**.5),o=d((i*c.g**2+t*l.g**2)**.5),r=d((i*c.b**2+t*l.b**2)**.5)),f=c.a,l=l.a,c=f>=0||l>=0,f=c?f<0?l:l<0?f:f*i+l*t:0,u?"rgb"+(c?"a(":"(")+a+","+o+","+r+(c?","+d(1e3*f)/1e3:"")+")":"#"+(4294967296+16777216*a+65536*o+256*r+(c?d(255*f):0)).toString(16).slice(1,c?void 0:-2)):null)},hexToRgb(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:null},rgbToHex(t,e,n){return"#"+s(t)+s(e)+s(n)},parse_smiles(t,e){let n={};t=t.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"a");for(const[s,a]of Object.entries(e)){let e;e=parseInt(a[0]["endPosition"])-a[0]["startPosition"]==1?t.substring(a[0]["startPosition"],parseInt(a[0]["endPosition"])+2).trim():t.substring(parseInt(a[0]["startPosition"]),parseInt(a[0]["endPosition"])+2).trim(),e=e.split(" ")[0],e in n||(n[e]=`https://static-cdn.jtvnw.net/emoticons/v2/${s}/default/light/2.0`)}return n}};e["Z"]=o},7167:function(t,e,n){"use strict";n(2087);var s={async get7tvEmoteSet(t){const e=await fetch(`https://7tv.io/v3/emote-sets/${t}`);if(e.ok){let t=[];const n=await e.json();if(void 0!=n.emotes){for(const s of n.emotes)t.push({Name:s.name,ID:s.id,Type:"7TV",ZeroWidth:1==s.flags});let e=n.owner.username;return[t,e]}return[void 0,void 0]}throw"failed to fetch 7tv emote set"},async wait(t){return new Promise((e=>{setTimeout(e,t)}))},async RetryOnError(t,e,n){for(let a=0;a<n;a++)try{return await t(...e)}catch(s){console.log("Attemption failed, retrying in 1s"),await this.wait(1e3);continue}return console.log("Failed to fetch func"),[]},async getUserID(t){const e=await fetch(`https://api.ivr.fi/v2/twitch/user?login=${t}`);if(e.ok){console.log("IVR API successful, getting user-id...");const t=await e.json();return t[0].id}throw"Unable to get user id from ivr API!"},async getGlobalBadges(){let t={};const e=await fetch("https://api.ivr.fi/v2/twitch/badges/global");if(e.ok){const n=await e.json();for(const e of n){let n=e["versions"],s={};for(const t of n)s[t["id"]]=t["image_url_2x"];t[e["set_id"]]=s}return t}if(404!=e.status)throw"not loaded";return{}},async getSubscriberBadges(t){let e={};const n=await fetch(`https://api.ivr.fi/v2/twitch/badges/channel?id=${t}`),s=await n.json();if(n.ok&&s.length>0&&"subscriber"==s[0]["set_id"]){let t=s[0]["versions"],n={};for(const e of t)n[e["id"]]=e["image_url_2x"];return e=n,e}if(404!=n.status&&s.length>0)throw"not loaded";return{}},async get7tvBadgesPaints(){let t=[],e=[];const n=await fetch("https://api.7tv.app/v2/badges?user_identifier=twitch_id");if(n.ok){const s=await n.json();for(const e of s["badges"])t.push({Users:e.users,Url:e.urls[1][1],Type:"7TV"});for(const t of s["paints"])e.push(t);return[t,e]}if(404!=n.status)throw"not loaded";return[]},async get7tvEmotes(t){let e={};const n=await fetch(`https://7tv.io/v3/users/twitch/${t}`);if(n.ok){const t=await n.json();for(const n of t["emote_set"]["emotes"])e[n.name]={ID:n.id,Type:"7TV",ZeroWidth:1==n.flags};return[e,t["emote_set"]["id"]]}if(404!=n.status)throw"7tv not loaded";return{}},async get7tvGlobalEmotes(){let t={};const e=await fetch("https://7tv.io/v3/emote-sets/62cdd34e72a832540de95857");if(e.ok){const n=await e.json();for(const e of n["emotes"])t[e.name]={ID:e.id,Type:"7TV",ZeroWidth:1==e.flags};return t}if(404!=e.status)throw"not loaded";return{}},async getBttvEmotes(t){let e={};const n=await fetch(`https://api.betterttv.net/3/cached/users/twitch/${t}`);if(n.ok){const t=await n.json();if(t["sharedEmotes"])for(const n of t["sharedEmotes"])e[n.code]={ID:n.id,Type:"BTTV"};if(t["channelEmotes"])for(const n of t["channelEmotes"])e[n.code]={ID:n.id,Type:"BTTV"};return e}if(404!=n.status)throw"not loaded";return{}},async getBttvGlobalEmotes(){let t={};const e=await fetch("https://api.betterttv.net/3/cached/emotes/global");if(e.ok){const n=await e.json();for(const e of n)t[e.code]={ID:e.id,Type:"BTTV"};return t}if(404!=e.status)throw"not loaded";return{}},async getFfzEmotes(t){let e={};const n=await fetch(`https://api.frankerfacez.com/v1/room/${t}`);if(n.ok){const t=await n.json();for(const n of t["sets"][t["room"]["set"].toString()]["emoticons"])e[n.name]={ID:n.id,Type:"FFZ"};let s,a;return console.log(t.room.mod_urls),void 0!=t.room.mod_urls&&(s=t.room.mod_urls["2"]),console.log(t.vip_badge),void 0!=t.room.vip_badge&&(a=t.room.vip_badge["2"]),[e,s,a]}if(404!=n.status)throw"not loaded";return[]},async getFfzGlobalEmotes(){let t={};const e=await fetch("https://api.frankerfacez.com/v1/set/global");if(e.ok){const n=await e.json();for(const e of n["sets"]["3"]["emoticons"])t[e.name]={ID:e.id,Type:"FFZ"};return t}if(404!=e.status)throw"not loaded";return{}}};e["Z"]=s},4598:function(t,e,n){"use strict";function s(t){const e={"client-nonce":null,flags:null};let n={},s=t.split(";");return s.forEach((t=>{let s=t.split("="),a=""===s[1]?null:s[1];switch(s[0]){case"badges":case"badge-info":if(a){let t={},e=a.split(",");e.forEach((e=>{let n=e.split("/");t[n[0]]=n[1]})),n[s[0]]=t}else n[s[0]]=null;break;case"emotes":if(a){let t={},e=a.split("/");e.forEach((e=>{let n=e.split(":"),s=[],a=n[1].split(",");a.forEach((t=>{let e=t.split("-");s.push({startPosition:e[0],endPosition:e[1]})})),t[n[0]]=s})),n[s[0]]=t}else n[s[0]]=null;break;case"emote-sets":{let t=a.split(",");n[s[0]]=t;break}default:Object.prototype.hasOwnProperty.call(e,s[0])||(n[s[0]]=a)}})),n}function a(t){let e=null,n=t.split(" ");switch(n[0]){case"JOIN":case"PART":case"NOTICE":case"CLEARCHAT":case"CLEARMSG":case"HOSTTARGET":case"PRIVMSG":e={command:n[0],channel:n[1]};break;case"PING":e={command:n[0]};break;case"CAP":e={command:n[0],isCapRequestEnabled:"ACK"===n[2]};break;case"GLOBALUSERSTATE":e={command:n[0]};break;case"USERSTATE":case"ROOMSTATE":e={command:n[0],channel:n[1]};break;case"RECONNECT":e={command:n[0]};break;case"421":return null;case"001":e={command:n[0],channel:n[1]};break;case"002":case"003":case"004":case"353":case"366":case"372":case"375":case"376":return null;default:return null}return e}function o(t){if(null==t)return null;{let e=t.split("!");return{nick:2==e.length?e[0]:null,host:2==e.length?e[1]:e[0]}}}function r(t,e){let n=0,s=t.slice(n+1).trim(),a=s.indexOf(" ");return-1==a?e.botCommand=s.slice(0):(e.botCommand=s.slice(0,a),e.botCommandParams=s.slice(a).trim()),e}n.d(e,{Z:function(){return l}});var i={parseMessage(t){let e={tags:null,source:null,command:null,parameters:null,action:!1},n=0,i=null,c=null,l=null,u=null;if("@"===t[n]){let e=t.indexOf(" ");i=t.slice(1,e),n=e+1}if(":"===t[n]){n+=1;let e=t.indexOf(" ",n);c=t.slice(n,e),n=e+1}let h=t.indexOf(":",n);return-1==h&&(h=t.length),l=t.slice(n,h).trim(),h!=t.length&&(n=h+1,u=t.slice(n)),e.command=a(l),null==e.command?null:(null!=i&&(e.tags=s(i)),e.source=o(c),e.parameters=u,u&&"!"===u[0]&&(e.command=r(u,e.command)),e.parameters&&("ACTION"==e.parameters.split(" ")[0]&&(e.action=!0),e.parameters=e.parameters.replace("ACTION",""),e.parameters=e.parameters.replace("","")),e)}},c=i;class l{constructor(t){this.ws=null,this.IsDisconnected=!0,this.ManuallyClosed=!1,this.channel=t,this.channelID=null,this.OnUserId=null,this.OnPrivateMessage=null,this.OnClearChat=null,this.OnClearMessage=null}connect(){this.IsDisconnected&&(this.ws=new WebSocket("wss://irc-ws.chat.twitch.tv:443"),this.ws.onmessage=t=>this.onMessage(t),this.ws.onopen=()=>this.onOpen(),this.ws.onerror=()=>this.onError(),this.ws.onclose=()=>this.onClose())}part(t){this.ws.send(`PART #${t}`)}join(t){this.ws.send(`PART #${t}`)}disconnect(){null!=this.ws&&(this.ManuallyClosed=!0,this.ws.close())}Disconnect(){this.ws.close()}async onError(){this.ManuallyClosed||(console.log("Connection error occured, disconnecting..."),this.ws.close())}async onClose(){this.ManuallyClosed||(console.log("Disconnected, attempting to reconnect..."),["t2x2","shampan0v","rj_st","redfeed_sa"].includes(this.channel)&&this.OnPrivateMessage({tags:{"badge-info":null,badges:{},color:"#FFFFFF","display-name":"System",emotes:null,"first-msg":"0",id:"4e9b10fb-7e80-46b5-9652-efc894188334",mod:"0","returning-chatter":"0","room-id":"22484632",subscriber:"0","tmi-sent-ts":"1680165804876",turbo:"0","user-id":"407046453","user-type":null},source:{nick:"System",host:"rj_st@rj_st.tmi.twitch.tv"},command:{command:"PRIVMSG",channel:"#forsen"},parameters:"[TWITCH] Disconnected",BG:"0"}),this.IsDisconnected=!0,setTimeout((()=>{this.connect()}),1e3))}async onOpen(){console.log("1232132312"),this.IsDisconnected=!1,this.ws.send("NICK justinfan1337"),this.ws.send("JOIN #"+this.channel.toLowerCase()),this.ws.send("CAP REQ :twitch.tv/tags twitch.tv/commands")}async onMessage(t){let e=t.data.split("\r\n");e.forEach((t=>{let e=c.parseMessage(t);if(e)switch(e.command.command){case"CLEARCHAT":this.OnClearChat(e);break;case"CLEARMSG":this.OnClearMessage(e);break;case"PRIVMSG":null==this.channelID&&(this.channelID=e.tags["room-id"],this.OnUserId(e.tags["room-id"])),this.OnPrivateMessage(e);break;case"PING":this.ws.send(`PONG ${e.message}`)}}))}}}}]);
//# sourceMappingURL=141.943c068d.js.map