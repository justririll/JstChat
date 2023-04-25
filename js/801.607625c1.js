"use strict";(self["webpackChunkchat"]=self["webpackChunkchat"]||[]).push([[801],{801:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var a=s(3396),o=s(9242);const i={id:"chat"};function n(e,t,s,n,r,h){const l=(0,a.up)("ChatMessage");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(o.W3,{name:"mes"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.Messages,(e=>((0,a.wg)(),(0,a.j4)(l,{key:e,PersonalEmotes:r.PersonalEmotes[e.source.nick],Emotes:r.Emotes,GlobalBadges:r.GlobalBadges,Paints:r.Paints,OtherBadges:r.OtherBadges,defaultColors:r.defaultColors,payload:e,BG:e.BG},null,8,["PersonalEmotes","Emotes","GlobalBadges","Paints","OtherBadges","defaultColors","payload","BG"])))),128))])),_:1})])}var r=s(7139);const h={class:"ChatMessage"},l=["src"],c=["HavePaints"],d=["HavePaints"],g={class:"message-text"},u=["src","ZeroWidth"];function p(e,t,s,o,i,n){return(0,a.wg)(),(0,a.iD)("div",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.Badges,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"Badge"},[(0,a._)("img",{src:e.Url},null,8,l)])))),128)),(0,a._)("span",null,[i.displayName.toLowerCase()==this.payload.source.nick?((0,a.wg)(),(0,a.iD)("span",{key:0,HavePaints:i.HavePaints,class:"message-nick",style:(0,r.j5)({color:n.color,backgroundImage:n.bgImage})},(0,r.zw)(i.displayName)+": ",13,c)):(0,a.kq)("",!0),i.displayName.toLowerCase()!=this.payload.source.nick?((0,a.wg)(),(0,a.iD)("span",{key:1,HavePaints:i.HavePaints,class:"message-nick",style:(0,r.j5)({color:n.color,backgroundImage:n.bgImage})},(0,r.zw)(this.payload.source.nick)+" ("+(0,r.zw)(i.displayName)+"): ",13,d)):(0,a.kq)("",!0),(0,a._)("span",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.FinalMessage,(e=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e},["emote"==e.Type?((0,a.wg)(),(0,a.iD)("img",{key:0,src:e.Text,ZeroWidth:e.ZeroWidth},null,8,u)):(0,a.kq)("",!0),"text"==e.Type?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)((0,r.zw)(e.Text),1)],64)):(0,a.kq)("",!0)],64)))),128))])])])}s(2262),s(4506);var m=s(7662),f=s(9065);const b={name:"ChatMessage",data(){return{EmotesBaseUrl:{"7TV":"https://cdn.7tv.app/emote/{0}/2x.webp",BTTV:"https://cdn.betterttv.net/emote/{0}/2x",FFZ:"https://cdn.frankerfacez.com/emote/{0}/2",TWITCH:""},Paint:null,HavePaints:!1,displayName:"",dot:0,Badges:[],smoothColors:this.$route.query.smoothcolor||"1",paintsEnabled:this.$route.query.paints||"1",shadowText:this.$route.query.shadowtext||"0",font_size:this.$route.query.font_size||"18",interpolateSize:"0"!=this.$route.query.interpbs,border:this.$route.query.border||"2"}},props:{PersonalEmotes:Array,Emotes:Array,OtherBadges:Array,GlobalBadges:Object,Paints:Array,defaultColors:Array,payload:Object,BG:String},created:async function(){if("PRIVMSG"!=this.payload.command.command)return{};if(this.displayName=this.payload.tags["display-name"],void 0==this.payload.tags["display-name"]&&(this.displayName=this.payload.user),this.payload.tags.badges)for(const[e,t]of Object.entries(this.payload.tags["badges"]))this.GlobalBadges[e]&&this.Badges.push({Url:this.GlobalBadges[e][t]});if(this.OtherBadges)for(const e of this.OtherBadges)e.Users.includes(this.payload.tags["user-id"])&&this.Badges.push({Url:e.Url});if("1"==this.paintsEnabled)for(const e of this.Paints)if(e.users.includes(this.payload.tags["user-id"])){this.HavePaints=!0,this.Paint=e;break}},computed:{color(){let e=this.payload.tags.color;if(this.payload.tags.color||(e=this.defaultColors[Math.floor(Math.random()*this.defaultColors.length)]),"transparent"!=this.BG&&"1"==this.smoothColors){let t=m.Z.hexToRgb(e),s=m.Z.hexToRgb(this.BG),a=f.Z.rgb2xyz(t[0],t[1],t[2]),o=f.Z.rgb2xyz(s[0],s[1],s[2]),i=10*f.Z.deltaE00(a[0],a[1],a[2],o[0],o[1],o[2]);if(0==i&&(i=1e-4),i<.3){let t=m.Z.pSBC(.25,e);return t}}return e},FinalMessage(){let e=`${this.payload.parameters}`,t=m.Z.textToMessageObject(e);if(this.payload.tags.emotes){let s=m.Z.parse_smiles(e,this.payload.tags["emotes"]);for(const[e,a]of Object.entries(s))for(const s in t)t[s].Text.slice(0,-1)==e&&(t[s].Type="emote",t[s].Text=a,t[s].ZeroWidth=!1)}for(const s of this.Emotes)for(const e in t)t[e].Text.slice(0,-1)==s.Name&&(t[e].Type="emote",t[e].Text=this.EmotesBaseUrl[s.Type].replace("{0}",s.ID),t[e].ZeroWidth=s.ZeroWidth);if(void 0!==this.PersonalEmotes)for(const s of this.PersonalEmotes)for(const e in t)t[e].Text.slice(0,-1)==s.Name&&(t[e].Type="emote",t[e].Text=this.EmotesBaseUrl[s.Type].replace("{0}",s.ID),t[e].ZeroWidth=s.ZeroWidth);return t},bgImage(){if(!this.Paint)return"";const e=this.Paint.function,t=[];switch(this.Paint.function){case"linear-gradient":t.push(`${this.Paint.angle}deg`);break;case"radial-graient":t.push(this.Paint.shape??"circle");break;case"url":t.push(this.Paint.image_url??"");break}let s="";"URL"!==this.Paint.function&&(s=this.Paint.repeat?"repeating-":"");for(const a of this.Paint.stops){const e=m.Z.DecimalToStringRGBA(a.color);t.push(`${e} ${100*a.at}%`)}return`${s}${e}(${t.join(", ")})`},filterText(){return"1"==this.shadowText?"drop-shadow(1px 2px 1px #2b2b2b)":""},filter(){try{return this.Paint.drop_shadows.map((e=>`drop-shadow(${e.x_offset}px ${e.y_offset}px ${e.radius}px ${m.Z.DecimalToStringRGBA(e.color)})`)).join(" ")}catch(e){return""}},paintColor(){return this.Paint?m.Z.DecimalToStringRGBA(this.Paint.color):""},badgeSize(){return this.interpolateSize&&parseInt(this.font_size)?Math.round(.8*parseInt(this.font_size)+4.4).toString()+"px":"18px"},emoteSize(){return this.interpolateSize&&parseInt(this.font_size)?(parseInt(this.font_size)+14).toString()+"px":"32px"},messageSize(){return this.interpolateSize&&parseInt(this.font_size)?Math.round(1.33*parseInt(this.font_size)+7).toString()+"px":"31px"},Font_Size(){return`${this.font_size}px`},Border(){return`${this.border}px solid black`}}},y=()=>{(0,o.sj)((e=>({"1dc158da":e.badgeSize,"3a60ce37":e.messageSize,e2673180:e.Font_Size,"2975e5d6":e.BG,"102c0d5d":e.Border,d30c7554:e.filterText,"2ee37230":e.emoteSize,"4d437889":e.filter,"213a8e36":e.paintColor})))},E=b.setup;b.setup=E?(e,t)=>(y(),E(e,t)):y;var B=b,v=s(89);const w=(0,v.Z)(B,[["render",p]]);var G=w,P=s(7167);class I{constructor(e,t){this.ws=null,this.set_id=e,this.user_id=t,this.onDelete=void 0,this.onAdd=void 0,this.onRename=void 0,this.onPersonalEmotes=void 0,this.IsDisconnected=!0,this.IsReconnecting=!1,this.Timeout=1e3,this.attemps=0}Connect(){this.IsDisconnected&&(this.ws=new WebSocket("wss://events.7tv.io/v3"),this.ws.onmessage=e=>this.onMessage(e),this.ws.onclose=()=>this.onClose(),this.ws.onopen=()=>this.onOpen(),this.ws.onerror=()=>{this.ws.close()},this.IsReconnecting=!1)}async onOpen(){this.IsDisconnected=!1,console.log("EVENT API connected")}async onClose(){this.IsReconnecting||(this.IsReconnecting=!0,console.log("EVENT API disconnected"),this.IsDisconnected=!0,this.attemps++,setTimeout((()=>{this.Connect()}),this.Timeout*this.attemps))}subscribeToEvent(e,t){let s={op:35,d:{type:e,condition:t}};this.ws.send(JSON.stringify(s))}async onMessage(e){let t=JSON.parse(e.data);switch(t.op){case 4011:console.log(t),this.ws.close(),this.Connect();break;case 1:{this.subscribeToEvent("emote_set.*",{object_id:this.set_id});const e={id:this.user_id,ctx:"channel",platform:"TWITCH"};this.subscribeToEvent("emote_set.*",e),this.subscribeToEvent("cosmetic.*",e),this.subscribeToEvent("entitlement.*",e);break}case 0:switch(t.d.type){case"emote_set.update":if(t.d.body.pulled)for(const e of t.d.body.pulled){this.onDelete(e);break}if(t.d.body.pushed)for(const e of t.d.body.pushed){this.onAdd(e);break}if(t.d.body.updated)for(const e of t.d.body.updated){this.onRename(e);break}break;case"emote_set.create":{if("Personal Emotes"!=t.d.body.object.name)break;let e=t.d.body.object.id;this.onPersonalEmotes(...await P.Z.get7tvEmoteSet(e));break}}}}}var T=I,Z=s(4598),k=s(6007);const D={name:"chat-page",components:{ChatMessage:G},data(){return{EventApi:null,paintsEnabled:this.$route.query.paints||"1",font_size:this.$route.query.font_size||"18",altBG:"0"!=this.$route.query.altbg,BG:this.$route.query.background||"#2b2b2b",BG2:"",useEventAPI:"0"!=this.$route.query.eventapi,pEmotesEnabled:"0"!=this.$route.query.pemotes,deleteAfter:this.$route.query.deleteafter||"0",fontName:this.$route.query.fontname||"roboto",PersonalEmotes:{},channel:this.$route.query.channel,currBG:!0,IsDisconnected:!1,Emotes:[],GlobalBadges:[],OtherBadges:[],Paints:[],channelID:null,client:null,Messages:[],defaultColors:["#4242f7","#ff7f50","#1e90ff","#00ff7f","#9acd32","#008000","#ff4500","#ff0000","#daa520","#ff69b4","#5f9ea0","#2e8b57","#d2691e","#a065d7","#b22222"]}},updated(){this.Messages.length>5&&this.Messages.shift()},methods:{onEmoteDelete(e){this.Emotes=this.Emotes.filter((t=>t.ID!==e.old_value.id))},onEmoteAdd(e){this.Emotes.push({Name:e.value.name,ID:e.value.id,Type:"7TV"})},onEmoteRename(e){for(let t of this.Emotes)t.ID==e.value.id&&(t.Name=e.value.name);this.Emotes.push({Name:e.value.name,ID:e.value.id,Type:"7TV"})},onPersonalEmotes(e,t){void 0!=e&&void 0!=t&&this.pEmotesEnabled&&(this.PersonalEmotes[t]=e)},async get7tvchannel(){let e=await P.Z.RetryOnError(P.Z.get7tvEmotes,[this.channelID],3);e.length>0&&(console.log("loaded seventv channel"),this.Emotes=this.Emotes.concat(e[0]),this.useEventAPI&&(this.EventApi=new T(e[1],this.channelID,this.onEmoteAdd,this.onEmoteRename),this.EventApi.onDelete=this.onEmoteDelete,this.EventApi.onAdd=this.onEmoteAdd,this.EventApi.onRename=this.onEmoteRename,this.EventApi.onPersonalEmotes=this.onPersonalEmotes,this.EventApi.Connect()))},async getbttvchannel(){this.Emotes=this.Emotes.concat(await await P.Z.RetryOnError(P.Z.getBttvEmotes,[this.channelID],3))},async getsubscriberbadges(){let e=await P.Z.RetryOnError(P.Z.getSubscriberBadges,[this.channelID],3);e&&(this.GlobalBadges["subscriber"]=e,console.log("loaded sub badges"))},async onUserID(e){console.log(this.channelID),null==this.channelID&&(this.channelID=e,await this.getbttvchannel(),await this.get7tvchannel(),await this.getsubscriberbadges())}},created:async function(){if((0,k.u)({link:[{href:`https://fonts.googleapis.com/css2?family=${this.$route.query.fontname||"Roboto"}&display=swap`,rel:"stylesheet"}]}),"#2b2b2b"!=this.BG&&"transparent"!=this.BG&&(this.BG="#"+this.BG),this.altBG&&"transparent"!=this.BG){let e=1,t=m.Z.toGray(this.BG);t>.38&&(e=-30/t),this.BG2=m.Z.pSBC(.01*e,this.BG)}else"transparent"==this.BG&&(this.BG2="transparent");this.client=new Z.Z(this.channel),this.client.OnUserId=this.onUserID,this.client.OnPrivateMessage=async e=>{e.BG=this.BG,this.altBG&&(e.BG=this.currBG?this.BG:this.BG2,this.currBG=!this.currBG),this.Messages.push(e),"0"!=this.deleteAfter&&setTimeout((()=>{let t=this.Messages.indexOf(e);t>-1&&this.Messages.splice(t,1)}),1e3*parseInt(this.deleteAfter))},this.client.OnClearChat=async e=>{this.Messages=this.Messages.filter((t=>t.source.nick!==e.parameters))},this.client.OnClearMessage=async e=>{this.Messages=this.Messages.filter((t=>t.tags["id"]!==e.tags["target-msg-id"]))},this.client.connect();try{let e=await P.Z.getUserID(this.channel);console.log(e),await this.onUserID(e)}catch(s){}this.Emotes=this.Emotes.concat(await P.Z.RetryOnError(P.Z.get7tvGlobalEmotes,[],3)),console.log("loaded 7tv global emotes"),this.Emotes=this.Emotes.concat(await P.Z.RetryOnError(P.Z.getBttvGlobalEmotes,[],3)),console.log("loaded bttv global emotes"),this.Emotes=this.Emotes.concat(await P.Z.RetryOnError(P.Z.getFfzEmotes,[this.channel],3)),console.log("loaded ffz channel emotes"),this.Emotes=this.Emotes.concat(await P.Z.RetryOnError(P.Z.getFfzGlobalEmotes,[],3)),console.log("loaded ffz global emotes");let e=await P.Z.RetryOnError(P.Z.getGlobalBadges,[],3);this.GlobalBadges["subscriber"]&&(e["subscriber"]=this.GlobalBadges["subscriber"]),this.GlobalBadges=e;let t=await P.Z.RetryOnError(P.Z.get7tvBadgesPaints,[],3);this.OtherBadges=t[0],this.OtherBadges.unshift({Users:["407046453"],Url:"https://i.imgur.com/qgO1Y7A.png"}),this.OtherBadges.unshift({Users:["521810742"],Url:"https://cdn.7tv.app/emote/63d6ed00349f81ba10452fdd/2x.webp"}),this.OtherBadges.unshift({Users:["69078167"],Url:"https://i.imgur.com/nIm3MvW.gif"}),this.OtherBadges.unshift({Users:["489131898"],Url:"https://i.imgur.com/Kg7X4ga.gif"}),this.Paints=t[1]}},x=()=>{(0,o.sj)((e=>({"4037860e":e.fontName})))},O=D.setup;D.setup=O?(e,t)=>(x(),O(e,t)):x;var z=D;const C=(0,v.Z)(z,[["render",n]]);var _=C}}]);
//# sourceMappingURL=801.607625c1.js.map