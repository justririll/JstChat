(self["webpackChunkchat"]=self["webpackChunkchat"]||[]).push([[141],{1223:function(t,e,s){var n=s(5112),a=s(30),o=s(3070).f,r=n("unscopables"),i=Array.prototype;void 0==i[r]&&o(i,r,{configurable:!0,value:a(null)}),t.exports=function(t){i[r][t]=!0}},7045:function(t,e,s){var n=s(6339),a=s(3070);t.exports=function(t,e,s){return s.get&&n(s.get,e,{getter:!0}),s.set&&n(s.set,e,{setter:!0}),a.f(t,e,s)}},490:function(t,e,s){var n=s(5005);t.exports=n("document","documentElement")},30:function(t,e,s){var n,a=s(9670),o=s(6048),r=s(748),i=s(3501),c=s(490),l=s(317),u=s(6200),h=">",d="<",f="prototype",g="script",p=u("IE_PROTO"),m=function(){},w=function(t){return d+g+h+t+d+"/"+g+h},b=function(t){t.write(w("")),t.close();var e=t.parentWindow.Object;return t=null,e},M=function(){var t,e=l("iframe"),s="java"+g+":";return e.style.display="none",c.appendChild(e),e.src=String(s),t=e.contentWindow.document,t.open(),t.write(w("document.F=Object")),t.close(),t.F},v=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}v="undefined"!=typeof document?document.domain&&n?b(n):M():b(n);var t=r.length;while(t--)delete v[f][r[t]];return v()};i[p]=!0,t.exports=Object.create||function(t,e){var s;return null!==t?(m[f]=a(t),s=new m,m[f]=null,s[p]=t):s=v(),void 0===e?s:o.f(s,e)}},6048:function(t,e,s){var n=s(9781),a=s(3353),o=s(3070),r=s(9670),i=s(5656),c=s(1956);e.f=n&&!a?Object.defineProperties:function(t,e){r(t);var s,n=i(e),a=c(e),l=a.length,u=0;while(l>u)o.f(t,s=a[u++],n[s]);return t}},1956:function(t,e,s){var n=s(6324),a=s(748);t.exports=Object.keys||function(t){return n(t,a)}},7066:function(t,e,s){"use strict";var n=s(9670);t.exports=function(){var t=n(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},2262:function(t,e,s){"use strict";var n=s(2109),a=s(7908),o=s(6244),r=s(9303),i=s(1223);n({target:"Array",proto:!0},{at:function(t){var e=a(this),s=o(e),n=r(t),i=n>=0?n:s+n;return i<0||i>=s?void 0:e[i]}}),i("at")},2087:function(t,e,s){var n=s(7854),a=s(9781),o=s(7045),r=s(7066),i=s(7293),c=n.RegExp,l=c.prototype,u=a&&i((function(){var t=!0;try{c(".","d")}catch(u){t=!1}var e={},s="",n=t?"dgimsy":"gimsy",a=function(t,n){Object.defineProperty(e,t,{get:function(){return s+=n,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var r in t&&(o.hasIndices="d"),o)a(r,o[r]);var i=Object.getOwnPropertyDescriptor(l,"flags").get.call(e);return i!==n||s!==n}));u&&o(l,"flags",{configurable:!0,get:r})},4506:function(t,e,s){"use strict";var n=s(2109),a=s(1702),o=s(4488),r=s(9303),i=s(1340),c=s(7293),l=a("".charAt),u=c((function(){return"\ud842"!=="𠮷".at(-2)}));n({target:"String",proto:!0,forced:u},{at:function(t){var e=i(o(this)),s=e.length,n=r(t),a=n>=0?n:s+n;return a<0||a>=s?void 0:l(e,a)}})},9065:function(t,e,s){"use strict";s(1703);class n{static hex2lab(t){const[e,s,a,o]=n.hex2rgba(t),[r,i,c]=n.rgb2xyz(e,s,a,o);return n.xyz2lab(r,i,c)}static rgba2lab(t,e,s,a=1){const[o,r,i]=n.rgb2xyz(t,e,s,a);return n.xyz2lab(o,r,i)}static lab2rgba(t,e,s){const[a,o,r]=n.lab2xyz(t,e,s);return n.xyz2rgba(a,o,r)}static hex2rgba(t){let e;if("#"===t.charAt(0)&&(e=t.substring(1).split("")),e.length>6||e.length<3)throw new Error(`HEX colour must be 3 or 6 values. You provided it ${e.length}`);3===e.length&&(e=[e[0],e[0],e[1],e[1],e[2],e[2]]),e="0x"+e.join("");let s=e>>16&255,n=e>>8&255,a=255&e,o=1;return[s,n,a,o]}static rgb2xyz(t,e,s,n=1){t>255?t=255:t<0&&(t=0),e>255?e=255:e<0&&(e=0),s>255?s=255:s<0&&(s=0),n>1?n=1:n<0&&(n=0),t/=255,e/=255,s/=255,t>.04045?t=Math.pow((t+.055)/1.055,2.4):t/=12.92,e>.04045?e=Math.pow((e+.055)/1.055,2.4):e/=12.92,s>.04045?s=Math.pow((s+.055)/1.055,2.4):s/=12.92,t*=100,e*=100,s*=100;const a=.4124564*t+.3575761*e+.1804375*s,o=.2126729*t+.7151522*e+.072175*s,r=.0193339*t+.119192*e+.9503041*s;return[a,o,r]}static xyz2rgba(t,e,s){let n=t/100,a=e/100,o=s/100,r=3.2404542*n+-1.5371385*a+-.4985314*o,i=-.969266*n+1.8760108*a+.041556*o,c=.0556434*n+-.2040259*a+1.0572252*o;r>.0031308?r=1.055*Math.pow(r,1/2.4)-.055:r*=12.92,i>.0031308?i=1.055*Math.pow(i,1/2.4)-.055:i*=12.92,c>.0031308?c=1.055*Math.pow(c,1/2.4)-.055:c*=12.92;let l=Math.round(255*r),u=Math.round(255*i),h=Math.round(255*c);return[l,u,h,1]}static xyz2lab(t,e,s){const n=94.811,a=100,o=107.304;t/=n,e/=a,s/=o,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116;const r=116*e-16,i=500*(t-e),c=200*(e-s);return[r,i,c]}static lab2xyz(t,e,s){const n=94.811,a=100,o=107.304;let r=(t+16)/116,i=e/500+r,c=r-s/200;r=Math.pow(r,3)>.008856?Math.pow(r,3):(r-16/116)/7.787,i=Math.pow(i,3)>.008856?Math.pow(i,3):(i-16/116)/7.787,c=Math.pow(c,3)>.008856?Math.pow(c,3):(c-16/116)/7.787;let l=i*n,u=r*a,h=c*o;return[l,u,h]}static deltaE00(t,e,s,n,a,o){Math.rad2deg=function(t){return 360*t/(2*Math.PI)},Math.deg2rad=function(t){return 2*Math.PI*t/360};const r=(t+n)/2,i=Math.sqrt(Math.pow(e,2)+Math.pow(s,2)),c=Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),l=(i+c)/2,u=(1-Math.sqrt(Math.pow(l,7)/(Math.pow(l,7)+Math.pow(25,7))))/2,h=e*(1+u),d=a*(1+u),f=Math.sqrt(Math.pow(h,2)+Math.pow(s,2)),g=Math.sqrt(Math.pow(d,2)+Math.pow(o,2)),p=(f+g)/2;let m=Math.rad2deg(Math.atan2(s,h));m<0&&(m+=360);let w=Math.rad2deg(Math.atan2(o,d));w<0&&(w+=360);const b=Math.abs(m-w)>180?(m+w+360)/2:(m+w)/2,M=1-.17*Math.cos(Math.deg2rad(b-30))+.24*Math.cos(Math.deg2rad(2*b))+.32*Math.cos(Math.deg2rad(3*b+6))-.2*Math.cos(Math.deg2rad(4*b-63));let v=w-m;Math.abs(v)>180&&(w<=m?v+=360:v-=360);const y=n-t,C=g-f;v=2*Math.sqrt(f*g)*Math.sin(Math.deg2rad(v)/2);const I=1+.015*Math.pow(r-50,2)/Math.sqrt(20+Math.pow(r-50,2)),T=1+.045*p,O=1+.015*p*M,E=30*Math.exp(-Math.pow((b-275)/25,2)),k=2*Math.sqrt(Math.pow(p,7)/(Math.pow(p,7)+Math.pow(25,7))),x=-k*Math.sin(2*Math.deg2rad(E)),j=1,D=1,P=1,F=Math.sqrt(Math.pow(y/(j*I),2)+Math.pow(C/(D*T),2)+Math.pow(v/(P*O),2)+x*(C/(D*T))*(v/(P*O)));return F}static getDarkerColour(t,e,s,a=1,o=.05){let[r,i,c]=n.rgba2lab(t,e,s,a);return r-=r*o,r<0&&(r=0),n.lab2rgba(r,i,c)}static getBrighterColour(t,e,s,a=1,o=.05){let[r,i,c]=n.rgba2lab(t,e,s,a);return r+=r*o,r>100&&(r=100),n.lab2rgba(r,i,c)}}e["Z"]=n},7662:function(t,e,s){"use strict";s(1703);function n(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function a(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}var o={textToMessageObject(t){let e=[];for(const s of t.split(" ")){let t=s.trim();""!=t&&e.push({Type:"text",Text:t+" "})}return e},getEmote(t,e){for(const s of t)if(s.Name==e)return[!0,s];return[!1,{}]},getEmoteTwitch(t,e){for(const s in t)if(s==e)return[!0,t[s]];return[!1,{}]},magnitude(t){let e=0;for(let s=0;s<t.length;s++)e+=t[s]*t[s];return Math.sqrt(e)},dot_product(t,e){if(t.length!==e.length)throw new Error("Vectors must have the same length");let s=0;for(let n=0;n<t.length;n++)s+=t[n]*e[n];return s},DecimalToStringRGBA(t){const e=t>>>24&255,s=t>>>16&255,n=t>>>8&255,a=255&t;return`rgba(${e}, ${s}, ${n}, ${(a/255).toFixed(3)})`},toGray(t){let e=a(t);return e[0]/255*.2126+e[1]/255*.7152+e[2]/255*.0722},pSBC(t,e,s,n){let a,o,r,i,c,l,u,h=parseInt,d=Math.round,f="string"==typeof s;return"number"!=typeof t||t<-1||t>1||"string"!=typeof e||"r"!=e[0]&&"#"!=e[0]||s&&!f?null:(this.pSBCr||(this.pSBCr=t=>{let e=t.length,s={};if(e>9){if([a,o,r,f]=t=t.split(","),e=t.length,e<3||e>4)return null;s.r=h("a"==a[3]?a.slice(5):a.slice(4)),s.g=h(o),s.b=h(r),s.a=f?parseFloat(f):-1}else{if(8==e||6==e||e<4)return null;e<6&&(t="#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+(e>4?t[4]+t[4]:"")),t=h(t.slice(1),16),9==e||5==e?(s.r=t>>24&255,s.g=t>>16&255,s.b=t>>8&255,s.a=d((255&t)/.255)/1e3):(s.r=t>>16,s.g=t>>8&255,s.b=255&t,s.a=-1)}return s}),u=e.length>9,u=f?s.length>9||"c"==s&&!u:u,c=this.pSBCr(e),i=t<0,l=s&&"c"!=s?this.pSBCr(s):i?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},t=i?-1*t:t,i=1-t,c&&l?(n?(a=d(i*c.r+t*l.r),o=d(i*c.g+t*l.g),r=d(i*c.b+t*l.b)):(a=d((i*c.r**2+t*l.r**2)**.5),o=d((i*c.g**2+t*l.g**2)**.5),r=d((i*c.b**2+t*l.b**2)**.5)),f=c.a,l=l.a,c=f>=0||l>=0,f=c?f<0?l:l<0?f:f*i+l*t:0,u?"rgb"+(c?"a(":"(")+a+","+o+","+r+(c?","+d(1e3*f)/1e3:"")+")":"#"+(4294967296+16777216*a+65536*o+256*r+(c?d(255*f):0)).toString(16).slice(1,c?void 0:-2)):null)},hexToRgb(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:null},rgbToHex(t,e,s){return"#"+n(t)+n(e)+n(s)},parse_smiles(t,e){let s={};t=t.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"a");for(const[n,a]of Object.entries(e)){let e;e=parseInt(a[0]["endPosition"])-a[0]["startPosition"]==1?t.substring(a[0]["startPosition"],parseInt(a[0]["endPosition"])+2).trim():t.substring(parseInt(a[0]["startPosition"]),parseInt(a[0]["endPosition"])+2).trim(),e=e.split(" ")[0],e in s||(s[e]=`https://static-cdn.jtvnw.net/emoticons/v2/${n}/default/light/2.0`)}return s}};e["Z"]=o},7167:function(t,e,s){"use strict";s(2087);var n={async get7tvEmoteSet(t){const e=await fetch(`https://7tv.io/v3/emote-sets/${t}`);if(e.ok){let t=[];const s=await e.json();if(void 0!=s.emotes){for(const n of s.emotes)t.push({Name:n.name,ID:n.id,Type:"7TV",ZeroWidth:1==n.flags});let e=s.owner.username;return[t,e]}return[void 0,void 0]}throw"failed to fetch 7tv emote set"},async wait(t){return new Promise((e=>{setTimeout(e,t)}))},async RetryOnError(t,e,s){for(let a=0;a<s;a++)try{return await t(...e)}catch(n){console.log("Attemption failed, retrying in 1s"),await this.wait(1e3);continue}return console.log("Failed to fetch func"),[]},async getUserID(t){const e=await fetch(`https://api.ivr.fi/v2/twitch/user?login=${t}`);if(e.ok){console.log("IVR API successful, getting user-id...");const t=await e.json();return t[0].id}throw"Unable to get user id from ivr API!"},async getGlobalBadges(){let t={};const e=await fetch("https://badges.twitch.tv/v1/badges/global/display?language=en");if(e.ok){const s=await e.json();for(const[e,n]of Object.entries(s["badge_sets"])){let s=n["versions"],a={};for(const[t,e]of Object.entries(s))a[t]=e["image_url_2x"];t[e]=a}return t}if(404!=e.status)throw"not loaded";return{}},async getSubscriberBadges(t){let e={};const s=await fetch(`https://badges.twitch.tv/v1/badges/channels/${t}/display`),n=await s.json();if(s.ok&&Object.keys(n.badge_sets).length>0){let t=n["badge_sets"]["subscriber"]["versions"],s={};for(const[e,n]of Object.entries(t))s[e]=n["image_url_2x"];return e=s,e}if(404!=s.status&&Object.keys(n.badge_sets).length>0)throw"not loaded";return{}},async get7tvBadgesPaints(){let t=[],e=[];const s=await fetch("https://api.7tv.app/v2/badges?user_identifier=twitch_id");if(s.ok){const n=await s.json();for(const e of n["badges"])t.push({Users:e.users,Url:e.urls[1][1],Type:"7TV"});for(const t of n["paints"])e.push(t);return[t,e]}if(404!=s.status)throw"not loaded";return[]},async get7tvEmotes(t){let e={};const s=await fetch(`https://7tv.io/v3/users/twitch/${t}`);if(s.ok){const t=await s.json();for(const s of t["emote_set"]["emotes"])e[s.name]={ID:s.id,Type:"7TV",ZeroWidth:1==s.flags};return[e,t["emote_set"]["id"]]}if(404!=s.status)throw"7tv not loaded";return{}},async get7tvGlobalEmotes(){let t={};const e=await fetch("https://7tv.io/v3/emote-sets/62cdd34e72a832540de95857");if(e.ok){const s=await e.json();for(const e of s["emotes"])t[e.name]={ID:e.id,Type:"7TV",ZeroWidth:1==e.flags};return t}if(404!=e.status)throw"not loaded";return{}},async getBttvEmotes(t){let e={};const s=await fetch(`https://api.betterttv.net/3/cached/users/twitch/${t}`);if(s.ok){const t=await s.json();if(t["sharedEmotes"])for(const s of t["sharedEmotes"])e[s.code]={ID:s.id,Type:"BTTV"};if(t["channelEmotes"])for(const s of t["channelEmotes"])e[s.code]={ID:s.id,Type:"BTTV"};return e}if(404!=s.status)throw"not loaded";return{}},async getBttvGlobalEmotes(){let t={};const e=await fetch("https://api.betterttv.net/3/cached/emotes/global");if(e.ok){const s=await e.json();for(const e of s)t[e.code]={ID:e.id,Type:"BTTV"};return t}if(404!=e.status)throw"not loaded";return{}},async getFfzEmotes(t){let e={};const s=await fetch(`https://api.frankerfacez.com/v1/room/${t}`);if(s.ok){const t=await s.json();for(const s of t["sets"][t["room"]["set"].toString()]["emoticons"])e[s.name]={ID:s.id,Type:"FFZ"};let n,a;return console.log(t.room.mod_urls),void 0!=t.room.mod_urls&&(n=t.room.mod_urls["2"]),console.log(t.vip_badge),void 0!=t.room.vip_badge&&(a=t.room.vip_badge["2"]),[e,n,a]}if(404!=s.status)throw"not loaded";return[]},async getFfzGlobalEmotes(){let t={};const e=await fetch("https://api.frankerfacez.com/v1/set/global");if(e.ok){const s=await e.json();for(const e of s["sets"]["3"]["emoticons"])t[e.name]={ID:e.id,Type:"FFZ"};return t}if(404!=e.status)throw"not loaded";return{}}};e["Z"]=n},4598:function(t,e,s){"use strict";function n(t){const e={"client-nonce":null,flags:null};let s={},n=t.split(";");return n.forEach((t=>{let n=t.split("="),a=""===n[1]?null:n[1];switch(n[0]){case"badges":case"badge-info":if(a){let t={},e=a.split(",");e.forEach((e=>{let s=e.split("/");t[s[0]]=s[1]})),s[n[0]]=t}else s[n[0]]=null;break;case"emotes":if(a){let t={},e=a.split("/");e.forEach((e=>{let s=e.split(":"),n=[],a=s[1].split(",");a.forEach((t=>{let e=t.split("-");n.push({startPosition:e[0],endPosition:e[1]})})),t[s[0]]=n})),s[n[0]]=t}else s[n[0]]=null;break;case"emote-sets":{let t=a.split(",");s[n[0]]=t;break}default:Object.prototype.hasOwnProperty.call(e,n[0])||(s[n[0]]=a)}})),s}function a(t){let e=null,s=t.split(" ");switch(s[0]){case"JOIN":case"PART":case"NOTICE":case"CLEARCHAT":case"CLEARMSG":case"HOSTTARGET":case"PRIVMSG":e={command:s[0],channel:s[1]};break;case"PING":e={command:s[0]};break;case"CAP":e={command:s[0],isCapRequestEnabled:"ACK"===s[2]};break;case"GLOBALUSERSTATE":e={command:s[0]};break;case"USERSTATE":case"ROOMSTATE":e={command:s[0],channel:s[1]};break;case"RECONNECT":e={command:s[0]};break;case"421":return null;case"001":e={command:s[0],channel:s[1]};break;case"002":case"003":case"004":case"353":case"366":case"372":case"375":case"376":return null;default:return null}return e}function o(t){if(null==t)return null;{let e=t.split("!");return{nick:2==e.length?e[0]:null,host:2==e.length?e[1]:e[0]}}}function r(t,e){let s=0,n=t.slice(s+1).trim(),a=n.indexOf(" ");return-1==a?e.botCommand=n.slice(0):(e.botCommand=n.slice(0,a),e.botCommandParams=n.slice(a).trim()),e}s.d(e,{Z:function(){return l}});var i={parseMessage(t){let e={tags:null,source:null,command:null,parameters:null,action:!1},s=0,i=null,c=null,l=null,u=null;if("@"===t[s]){let e=t.indexOf(" ");i=t.slice(1,e),s=e+1}if(":"===t[s]){s+=1;let e=t.indexOf(" ",s);c=t.slice(s,e),s=e+1}let h=t.indexOf(":",s);return-1==h&&(h=t.length),l=t.slice(s,h).trim(),h!=t.length&&(s=h+1,u=t.slice(s)),e.command=a(l),null==e.command?null:(null!=i&&(e.tags=n(i)),e.source=o(c),e.parameters=u,u&&"!"===u[0]&&(e.command=r(u,e.command)),e.parameters&&("ACTION"==e.parameters.split(" ")[0]&&(e.action=!0),e.parameters=e.parameters.replace("ACTION",""),e.parameters=e.parameters.replace("","")),e)}},c=i;class l{constructor(t){this.ws=null,this.IsDisconnected=!0,this.ManuallyClosed=!1,this.channel=t,this.channelID=null,this.OnUserId=null,this.OnPrivateMessage=null,this.OnClearChat=null,this.OnClearMessage=null}connect(){this.IsDisconnected&&(this.ws=new WebSocket("wss://irc-ws.chat.twitch.tv:443"),this.ws.onmessage=t=>this.onMessage(t),this.ws.onopen=()=>this.onOpen(),this.ws.onerror=()=>this.onError(),this.ws.onclose=()=>this.onClose())}part(t){this.ws.send(`PART #${t}`)}join(t){this.ws.send(`PART #${t}`)}disconnect(){null!=this.ws&&(this.ManuallyClosed=!0,this.ws.close())}Disconnect(){this.ws.close()}async onError(){this.ManuallyClosed||(console.log("Connection error occured, disconnecting..."),this.ws.close())}async onClose(){this.ManuallyClosed||(console.log("Disconnected, attempting to reconnect..."),["t2x2","shampan0v","rj_st","redfeed_sa"].includes(this.channel)&&this.OnPrivateMessage({tags:{"badge-info":null,badges:{},color:"#FFFFFF","display-name":"System",emotes:null,"first-msg":"0",id:"4e9b10fb-7e80-46b5-9652-efc894188334",mod:"0","returning-chatter":"0","room-id":"22484632",subscriber:"0","tmi-sent-ts":"1680165804876",turbo:"0","user-id":"407046453","user-type":null},source:{nick:"System",host:"rj_st@rj_st.tmi.twitch.tv"},command:{command:"PRIVMSG",channel:"#forsen"},parameters:"[TWITCH] Disconnected",BG:"0"}),this.IsDisconnected=!0,setTimeout((()=>{this.connect()}),1e3))}async onOpen(){console.log("1232132312"),this.IsDisconnected=!1,this.ws.send("NICK justinfan1337"),this.ws.send("JOIN #"+this.channel.toLowerCase()),this.ws.send("CAP REQ :twitch.tv/tags twitch.tv/commands")}async onMessage(t){let e=t.data.split("\r\n");e.forEach((t=>{let e=c.parseMessage(t);if(e)switch(e.command.command){case"CLEARCHAT":this.OnClearChat(e);break;case"CLEARMSG":this.OnClearMessage(e);break;case"PRIVMSG":null==this.channelID&&(this.channelID=e.tags["room-id"],this.OnUserId(e.tags["room-id"])),this.OnPrivateMessage(e);break;case"PING":this.ws.send(`PONG ${e.message}`)}}))}}}}]);
//# sourceMappingURL=141.5cc4c45f.js.map