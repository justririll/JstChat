"use strict";(self["webpackChunkchat"]=self["webpackChunkchat"]||[]).push([[398],{5398:function(t,e,s){s.r(e),s.d(e,{default:function(){return Tt}});var a=s(3396),n=s(9242);const i={id:"main"},o={style:{"background-color":"rgb(64 64 64)"},class:"chat",ref:"chat"},l={class:"chat-box"},r=(0,a._)("div",{style:{"background-color":"#3a3a3a"},class:"author"},[(0,a._)("div",{class:"author-name"},[(0,a.Uk)(" Made by JustRirill (rj_st) "),(0,a._)("br"),(0,a.Uk)(" Github link "),(0,a._)("a",{href:"https://github.com/justririll/JstChat",target:"_blank"},"here"),(0,a.Uk)(),(0,a._)("br"),(0,a.Uk)(" This application is not affiliated with Twitch ")])],-1),h={class:"quick-settings"},d={class:"setting",id:"channel-select"},c=(0,a._)("div",{class:"setting-name"},"Channel name",-1),g=["value"],p=["onClick"],u={class:"setting",id:"style-select"},m=(0,a._)("div",{class:"setting-name"},"Style",-1),b=(0,a._)("option",{value:"1"},"1",-1),f=(0,a._)("option",{value:"2"},"2",-1),v=[b,f],B={class:"settings"},_={class:"nsetting"},y=(0,a._)("div",{class:"nsetting-name"},"Font size",-1),C=["value"],S={class:"nsetting"},G=(0,a._)("div",{class:"nsetting-name"},[(0,a.Uk)("Background color "),(0,a._)("br"),(0,a.Uk)(),(0,a._)("span",{class:"small-desc"},"(in hex)")],-1),k=["value"],w={class:"nsetting"},E=(0,a._)("div",{class:"nsetting-name"},[(0,a.Uk)("Ignore list"),(0,a._)("br"),(0,a.Uk)(),(0,a._)("span",{class:"small-desc"},"(separate nicks by space; will not affect chat on the left)")],-1),x=["value"],z={class:"nsetting"},P=(0,a._)("div",{class:"nsetting-name"},[(0,a.Uk)("Font name from "),(0,a._)("a",{target:"_blank",href:"https://fonts.google.com/"},"here"),(0,a.Uk)(),(0,a._)("br"),(0,a.Uk)(),(0,a._)("span",{class:"small-desc"},'(e.g. "Castoro Titling"; CASE SENSITIVE!)')],-1),T=["value"],I={class:"nsetting"},Z=(0,a._)("div",{class:"nsetting-name"},[(0,a.Uk)("Fade after (0 = disable) "),(0,a._)("br"),(0,a.Uk)(),(0,a._)("span",{class:"small-desc"},"(will not affect chat on the left)")],-1),O=["value"],j={class:"nsetting"},F=(0,a._)("div",{class:"nsetting-name"},"7TV paints",-1),U=["value"],M={class:"nsetting"},$=(0,a._)("div",{class:"nsetting-name"},"Space between messages",-1),A=["value"],R={class:"nsetting"},D=(0,a._)("div",{class:"nsetting-name"},"Text shadow",-1),N=["value"],H={class:"nsetting"},V=(0,a._)("div",{class:"nsetting-name"},[(0,a.Uk)("Smooth colors "),(0,a._)("br"),(0,a.Uk)(),(0,a._)("span",{class:"small-desc"},"(works with non-transparent background only)")],-1),L=["value"],W={class:"nsetting"},Y=(0,a._)("div",{class:"nsetting-name"},"Border",-1),q=["value"],K={class:"nsetting"},J=(0,a._)("div",{class:"nsetting-name"},[(0,a.Uk)("7TV personal emotes "),(0,a._)("br"),(0,a.Uk)(),(0,a._)("span",{class:"small-desc"},"(works with EventAPI only)")],-1),Q=["value"],X={class:"nsetting"},tt=(0,a._)("div",{class:"nsetting-name"},"7TV event api",-1),et=["value"],st={class:"url"},at={class:"setting",id:"out"},nt=(0,a._)("div",{class:"setting-name"},"Your URL:",-1),it=["value"];function ot(t,e,s,b,f,ot){const lt=(0,a.up)("ChatMessage"),rt=(0,a.up)("center");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",o,[(0,a._)("div",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.Messages,(t=>((0,a.wg)(),(0,a.j4)(lt,{class:"mes",key:t.tags.id,Emotes:f.Emotes,Paints:f.Paints,GlobalBadges:f.GlobalBadges,payload:t,BG:f.BG,BG2:f.BG2,paintsEnabled:f.paintsEnabled,font_size:f.fontSize,interpolateSize:f.interpolateSize,OtherBadges:f.OtherBadges,defaultColors:f.defaultColors,SmoothColors:f.SmoothColors,border:f.Border,shadowText:f.textShadow,padding:f.padding,overridedBadges:f.overridedBadges},null,8,["Emotes","Paints","GlobalBadges","payload","BG","BG2","paintsEnabled","font_size","interpolateSize","OtherBadges","defaultColors","SmoothColors","border","shadowText","padding","overridedBadges"])))),128))])],512),r,(0,a._)("div",h,[(0,a.Wm)(rt,null,{default:(0,a.w5)((()=>[(0,a._)("div",d,[c,(0,a._)("input",{type:"text",value:f.selectedChannel,onInput:e[0]||(e[0]=(...t)=>ot.onChangeChannel&&ot.onChangeChannel(...t))},null,40,g)]),(0,a._)("button",{onClick:ot.join},"Try it!",8,p),(0,a._)("div",u,[m,(0,a._)("select",{onChange:e[1]||(e[1]=(...t)=>ot.changeStyle&&ot.changeStyle(...t))},v,32)])])),_:1})]),(0,a._)("div",B,[(0,a._)("div",_,[y,(0,a._)("input",{class:"nsetting-input",type:"number",value:f.fontSize,min:"4",max:"150",onInput:e[2]||(e[2]=(...t)=>ot.onChangeFontSize&&ot.onChangeFontSize(...t))},null,40,C)]),(0,a._)("div",S,[G,(0,a._)("input",{class:"nsetting-input",onclick:"this.select();",type:"text",value:f.BG,onInput:e[3]||(e[3]=(...t)=>ot.onChangeBG&&ot.onChangeBG(...t))},null,40,k)]),(0,a._)("div",w,[E,(0,a._)("input",{id:"ignore-list",class:"nsetting-input",type:"text",value:f.ignoreList,onInput:e[4]||(e[4]=(...t)=>ot.onChangeIgnore&&ot.onChangeIgnore(...t))},null,40,x)]),(0,a._)("div",z,[P,(0,a._)("input",{class:"nsetting-input",onclick:"this.select();",type:"text",value:f.fontName,onChange:e[5]||(e[5]=(...t)=>ot.onChangeFont&&ot.onChangeFont(...t))},null,40,T)]),(0,a._)("div",I,[Z,(0,a._)("input",{class:"nsetting-input",onclick:"this.select();",type:"text",value:f.deleteAfter,onInput:e[6]||(e[6]=(...t)=>ot.onChangeFade&&ot.onChangeFade(...t))},null,40,O)]),(0,a._)("div",j,[F,(0,a._)("input",{class:"nsetting-input",type:"checkbox",value:f.paintsEnabled,onInput:e[7]||(e[7]=(...t)=>ot.onChangePaints&&ot.onChangePaints(...t)),checked:""},null,40,U)]),(0,a._)("div",M,[$,(0,a._)("input",{class:"nsetting-input",type:"checkbox",value:f.padding,onInput:e[8]||(e[8]=(...t)=>ot.onChangePadding&&ot.onChangePadding(...t)),checked:""},null,40,A)]),(0,a._)("div",R,[D,(0,a.wy)((0,a._)("input",{class:"nsetting-input",type:"checkbox","onUpdate:modelValue":e[9]||(e[9]=t=>f.textShadow=t),"true-value":"1","false-value":"0",value:f.textShadow,onInput:e[10]||(e[10]=(...t)=>ot.onChangeShadow&&ot.onChangeShadow(...t))},null,40,N),[[n.e8,f.textShadow]])]),(0,a._)("div",H,[V,(0,a._)("input",{class:"nsetting-input",type:"checkbox",value:f.SmoothColors,onInput:e[11]||(e[11]=(...t)=>ot.onChangeSmooth&&ot.onChangeSmooth(...t)),checked:""},null,40,L)]),(0,a._)("div",W,[Y,(0,a._)("input",{class:"nsetting-input",type:"checkbox",value:f.Border,onInput:e[12]||(e[12]=(...t)=>ot.onChangeBorder&&ot.onChangeBorder(...t)),checked:""},null,40,q)]),(0,a._)("div",K,[J,(0,a._)("input",{class:"nsetting-input",type:"checkbox",value:f.pEmotes,onInput:e[13]||(e[13]=(...t)=>ot.onChangepEmotes&&ot.onChangepEmotes(...t)),checked:""},null,40,Q)]),(0,a._)("div",X,[tt,(0,a._)("input",{class:"nsetting-input",type:"checkbox",value:f.eventApi,onInput:e[14]||(e[14]=(...t)=>ot.onChangeEventApi&&ot.onChangeEventApi(...t)),checked:""},null,40,et)])]),(0,a._)("div",st,[(0,a._)("div",at,[nt,(0,a._)("input",{onclick:"this.select(); navigator.clipboard.writeText(this.value);",class:"out_url",type:"text",value:ot.out_url,readonly:""},null,8,it)])])])}var lt=s(7139);const rt=["bg"],ht=["provider","src"],dt=["HavePaints"],ct=["action","HavePaints"],gt=["src","ZeroWidth"];function pt(t,e,s,n,i,o){return(0,a.wg)(),(0,a.iD)("div",{class:"ChatMessage",bg:s.payload.BG},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.Badges,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:"Badge"},[(0,a._)("img",{provider:t.provider,src:t.Url},null,8,ht)])))),128)),(0,a._)("span",null,[(0,a._)("span",{HavePaints:i.HavePaints,class:"message-nick",style:(0,lt.j5)({color:o.color})},(0,lt.zw)(o.nick)+": ",13,dt),(0,a._)("span",{class:"message-text",action:this.payload.action,HavePaints:i.HavePaints},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.FinalMessage,(t=>((0,a.wg)(),(0,a.iD)(a.HY,{key:t},["emote"==t.Type?((0,a.wg)(),(0,a.iD)("img",{key:0,src:t.Text,ZeroWidth:t.ZeroWidth},null,8,gt)):(0,a.kq)("",!0),"text"==t.Type?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)((0,lt.zw)(t.Text),1)],64)):(0,a.kq)("",!0)],64)))),128))],8,ct)])],8,rt)}s(2262),s(4506);var ut=s(7662),mt=s(9065);const bt={name:"ChatMessage",data(){return{EmotesBaseUrl:{"7TV":"https://cdn.7tv.app/emote/{0}/2x.webp",BTTV:"https://cdn.betterttv.net/emote/{0}/2x",FFZ:"https://cdn.frankerfacez.com/emote/{0}/2",TWITCH:""},Paint:null,HavePaints:!1,displayName:"",dot:0,mes_BG:"",Badges:[]}},props:{Emotes:Object,OtherBadges:Array,GlobalBadges:Object,Paints:Array,font_size:String,shadowText:String,paintsEnabled:String,interpolateSize:String,overridedBadges:Boolean,padding:String,SmoothColors:String,defaultColors:Array,payload:Object,BG:String,BG2:String,border:String},created:async function(){if("PRIVMSG"!=this.payload.command.command)return{};if(this.displayName=this.payload.tags["display-name"],void 0==this.payload.tags["display-name"]&&(this.displayName=this.payload.user),this.payload.tags.badges)for(const[e,s]of Object.entries(this.payload.tags["badges"]))if(this.GlobalBadges[e]){let t="Twitch";this.overridedBadges&&"moderator"==e&&(t="ffz-mod-badge"),this.Badges.push({Url:this.GlobalBadges[e][s],provider:t})}if(this.OtherBadges)for(const e of this.OtherBadges)e.Users.includes(this.payload.tags["user-id"])&&this.Badges.push({Url:e.Url,provider:e.Type});try{if("1"==this.paintsEnabled)for(const t of this.Paints)if(t.users.includes(this.payload.tags["user-id"])){this.HavePaints=!0,this.Paint=t;break}}catch(t){console.log(t)}},computed:{color(){let t="0"==this.payload.BG?this.BG:this.BG2,e=this.payload.tags.color;if(this.payload.tags.color||(e=this.defaultColors[Math.floor(Math.random()*this.defaultColors.length)]),"transparent"!=t&&"1"==this.SmoothColors){let s=ut.Z.hexToRgb(e),a=ut.Z.hexToRgb(t),n=mt.Z.rgb2xyz(s[0],s[1],s[2]),i=mt.Z.rgb2xyz(a[0],a[1],a[2]),o=10*mt.Z.deltaE00(n[0],n[1],n[2],i[0],i[1],i[2]);if(0==o&&(o=1e-4),o<.3){let t=ut.Z.pSBC(.25,e);return t}}return e},FinalMessage(){let t=`${this.payload.parameters}`,e=ut.Z.textToMessageObject(t);if(this.payload.tags.emotes){let s=ut.Z.parse_smiles(t,this.payload.tags["emotes"]);for(const[t,a]of Object.entries(s))for(const s in e)e[s].Text.slice(0,-1)==t&&(e[s].Type="emote",e[s].Text=a,e[s].ZeroWidth=!1)}for(const s in e)if(this.Emotes[e[s].Text.slice(0,-1)]){let t=this.Emotes[e[s].Text.slice(0,-1)];e[s].Type="emote",e[s].Text=this.EmotesBaseUrl[t.Type].replace("{0}",t.ID),e[s].ZeroWidth=t.ZeroWidth}return e},nick(){return this.displayName.toLowerCase()!=this.payload.source.nick?`${this.payload.source.nick} (${this.displayName})`:this.displayName},bgImage(){if(!this.Paint||"0"==this.paintsEnabled)return"";const t=this.Paint.function,e=[];switch(this.Paint.function){case"linear-gradient":e.push(`${this.Paint.angle}deg`);break;case"radial-graient":e.push(this.Paint.shape??"circle");break;case"url":e.push(this.Paint.image_url??"");break}let s="";"URL"!==this.Paint.function&&(s=this.Paint.repeat?"repeating-":"");for(const a of this.Paint.stops){const t=ut.Z.DecimalToStringRGBA(a.color);e.push(`${t} ${100*a.at}%`)}return`${s}${t}(${e.join(", ")})`},filterText(){return"1"==this.shadowText?"drop-shadow(-1px 2px 1px #2b2b2b)":""},filter(){try{if("0"==this.paintsEnabled)throw"paints disabled";return this.Paint.drop_shadows.map((t=>`drop-shadow(${t.x_offset}px ${t.y_offset}px ${t.radius}px ${ut.Z.DecimalToStringRGBA(t.color)})`)).join(" ")}catch(t){return"1"==this.shadowText?"drop-shadow(-1px 2px 1px #2b2b2b)":""}},paintColor(){return this.Paint&&"0"!=this.paintsEnabled?ut.Z.DecimalToStringRGBA(this.Paint.color):""},badgeSize(){return"1"==this.interpolateSize&&parseInt(this.font_size)?Math.round(.8*parseInt(this.font_size)+4.4).toString()+"px":"18px"},emoteSize(){return"1"==this.interpolateSize&&parseInt(this.font_size)?(parseInt(this.font_size)+14).toString()+"px":"32px"},messageSize(){return this.interpolateSize&&parseInt(this.font_size)?Math.round(1.33*parseInt(this.font_size)+7).toString()+"px":"31px"},Font_Size(){return`${this.font_size}px`},Border(){return`${this.border}px solid black`},Padding(){return"1"==this.padding?"3px":"0px"}}},ft=()=>{(0,n.sj)((t=>({"59a6431a":t.BG,db221fc2:t.BG2,"318c3f54":t.badgeSize,"11deaafa":t.Padding,"140b363a":t.messageSize,f63217fa:t.Font_Size,c369210c:t.Border,"63b0d0f3":t.filterText,"42ae58aa":t.emoteSize,"493a4ab4":t.filter,"231ccc5a":t.paintColor,"8ff532b0":t.bgImage,"9750fb16":t.color})))},vt=bt.setup;bt.setup=vt?(t,e)=>(ft(),vt(t,e)):ft;var Bt=bt,_t=s(89);const yt=(0,_t.Z)(Bt,[["render",pt]]);var Ct=yt,St=s(4598),Gt=s(7167),kt=s(6007);const wt={name:"main-page",components:{ChatMessage:Ct},data(){return{paintsEnabled:"1",fontSize:"18",interpolateSize:"1",SmoothColors:"1",Border:"2",pEmotes:"1",eventApi:"1",textShadow:"0",deleteAfter:"0",fromBottom:"0",padding:"1",ignoreList:"",fontName:"Roboto",altBG:!0,BG:"#2b2b2b",BG2:"",PersonalEmotes:{},GlobalBadges:[],OtherBadges:[],Messages:{},Emotes:{},Badges:{},Paints:[],currBG:!0,channel:"",selectedChannel:"",client:null,evenapi:null,overridedBadges:!1,defaultColors:["#4242f7","#ff7f50","#1e90ff","#00ff7f","#9acd32","#008000","#ff4500","#ff0000","#daa520","#ff69b4","#5f9ea0","#2e8b57","#d2691e","#a065d7","#b22222"]}},updated(){this.$refs.chat.scrollTo(0,this.$refs.chat.scrollHeight),this.Messages.length>25&&this.Messages.shift()},created:async function(){if("#2b2b2b"!=this.BG&&"transparent"!=this.BG&&(this.BG="#"+this.BG),this.altBG&&"transparent"!=this.BG){let t=1,e=ut.Z.toGray(this.BG);e>.38&&(t=-30/e),this.BG2=ut.Z.pSBC(.01*t,this.BG)}else"transparent"==this.BG&&(this.BG2="transparent");await this.create_client()},methods:{changeStyle(t){switch(t.target.value.trim()){case"1":this.Border="2",this.BG="#2b2b2b",this.BG2="#323232",this.SmoothColors="1",this.textShadow="0";break;case"2":this.Border="0",this.BG="transparent",this.BG2="transparent",this.SmoothColors="0",this.textShadow="1";break}},onChangeChannel(t){this.selectedChannel=t.target.value.trim().toLowerCase()},onChangeIgnore(t){this.ignoreList=t.target.value},onChangeFontSize(t){let e=parseInt(t.target.value.trim());e>0&&e<=150&&(this.fontSize=t.target.value.trim())},onChangepEmotes(){this.pEmotes="1"==this.pEmotes.trim()?"0":"1"},onChangePadding(){this.padding="1"==this.padding.trim()?"0":"1"},onChangeShadow(){this.textShadow="0"==this.textShadow.trim()?"1":"0"},onChangeBorder(){this.Border="2"==this.Border.trim()?"0":"2"},onChangeBG(t){let e=t.target.value.trim();if("transparent"==e||"none"==e||""==e)this.BG="transparent",this.BG2="transparent";else if(7==e.length&&"#"==e.substring(0,1))try{this.BG=e;let t=1,s=ut.Z.toGray(this.BG);s>.38&&(t=-30/s),this.BG2=ut.Z.pSBC(.01*t,this.BG)}catch(s){}},onChangeFade(t){const e=parseInt(t.target.value.trim());isNaN(e)?this.deleteAfter="0":this.deleteAfter=t.target.value.trim()},onChangeFont(t){let e=t.target.value.trim();this.fontName=e,(0,kt.u)({link:[{href:`https://fonts.googleapis.com/css2?family=${e}&display=swap`,rel:"stylesheet"}]})},onChangePaints(){this.paintsEnabled="1"==this.paintsEnabled.trim()?"0":"1"},onChangeBottom(){this.fromBottom="1"==this.fromBottom.trim()?"0":"1"},onChangeInterpolate(){this.interpolateSize="1"==this.interpolateSize.trim()?"0":"1"},onChangeSmooth(){this.SmoothColors="1"==this.SmoothColors.trim()?"0":"1"},onChangeEventApi(){this.eventApi="1"==this.eventApi.trim()?"0":"1"},async join(){""!=this.selectedChannel&&this.selectedChannel!=this.channel&&(this.channel=this.selectedChannel,await this.create_client())},async create_client(){this.Emotes={},this.Messages=[],this.Badges=[],null!=this.client&&this.client.disconnect(),this.channelID=null,this.client=new St.Z(this.channel),this.client.OnUserId=this.onUserID,this.client.OnPrivateMessage=async t=>{t.BG=0,this.altBG&&(t.BG=this.currBG?0:1,this.currBG=!this.currBG),t.PersonalEmotes=void 0,t.source.nick in this.PersonalEmotes&&(t.PersonalEmotes=this.PersonalEmotes[t.source.nick]),this.Messages.push(t)},this.client.OnClearChat=async t=>{this.Messages=this.Messages.filter((e=>e.source.nick!==t.parameters))},this.client.OnClearMessage=async t=>{this.Messages=this.Messages.filter((e=>e.tags["id"]!==t.tags["target-msg-id"]))};let t=await Gt.Z.RetryOnError(Gt.Z.getGlobalBadges,[],3);this.GlobalBadges["subscriber"]&&(t["subscriber"]=this.GlobalBadges["subscriber"]),this.GlobalBadges=t;let e=await Gt.Z.RetryOnError(Gt.Z.get7tvBadgesPaints,[],3);if(this.OtherBadges=e[0],this.Paints=e[1],""!=this.channel){this.client.connect(),this.Emotes=Object.assign(this.Emotes,await Gt.Z.RetryOnError(Gt.Z.get7tvGlobalEmotes,[],3)),console.log("loaded 7tv global emotes"),this.Emotes=Object.assign(this.Emotes,await Gt.Z.RetryOnError(Gt.Z.getBttvGlobalEmotes,[],3)),console.log("loaded bttv global emotes");let t=await Gt.Z.RetryOnError(Gt.Z.getFfzEmotes,[this.channel],3);this.Emotes=Object.assign(this.Emotes,t[0]),console.log("loaded ffz channel emotes"),void 0!=t[1]&&(this.GlobalBadges["moderator"]["1"]=t[1],this.overridedBadges=!0),void 0!=t[2]&&(this.GlobalBadges["vip"]["1"]=t[2]),this.Emotes=Object.assign(this.Emotes,await Gt.Z.RetryOnError(Gt.Z.getFfzGlobalEmotes,[],3)),console.log("loaded ffz global emotes")}else this.Emotes=Object.assign(this.Emotes,await Gt.Z.RetryOnError(Gt.Z.get7tvGlobalEmotes,[],3)),this.Messages.push({tags:{"badge-info":null,badges:{"game-developer":"1"},color:"#FFFFFF","display-name":"rj_st",emotes:null,"first-msg":"0",id:"4e9b10fb-7e80-46b5-9652-efc894188334",mod:"0","returning-chatter":"0","room-id":"22484632",subscriber:"0","tmi-sent-ts":"1680165804876",turbo:"0","user-id":"407046453","user-type":null},source:{nick:"rj_st",host:"rj_st@rj_st.tmi.twitch.tv"},command:{command:"PRIVMSG",channel:"#forsen"},parameters:"ApuApustaja TeaTime",BG:"0"}),this.Messages.push({tags:{"badge-info":null,badges:{"game-developer":"1"},color:"#FFFFFF","display-name":"rj_st",emotes:null,"first-msg":"0",id:"4e9b10fb-7e80-46b5-9652-efc894188334",mod:"0","returning-chatter":"0","room-id":"22484632",subscriber:"0","tmi-sent-ts":"1680165804876",turbo:"0","user-id":"407046453","user-type":null},source:{nick:"rj_st",host:"rj_st@rj_st.tmi.twitch.tv"},command:{command:"PRIVMSG",channel:"#forsen"},parameters:"ApuApustaja TeaTime",BG:"1"})},async get7tvchannel(){let t=await Gt.Z.RetryOnError(Gt.Z.get7tvEmotes,[this.channelID],3);t.length>0&&(console.log("loaded seventv channel"),this.Emotes=Object.assign(this.Emotes,t[0]))},async getbttvchannel(){this.Emotes=Object.assign(this.Emotes,await Gt.Z.RetryOnError(Gt.Z.getBttvEmotes,[this.channelID],3))},async getsubscriberbadges(){let t=await Gt.Z.RetryOnError(Gt.Z.getSubscriberBadges,[this.channelID],3);t&&(this.GlobalBadges["subscriber"]=t,console.log("loaded sub badges"))},async onUserID(t){console.log(this.channelID),null==this.channelID&&(this.channelID=t,await this.getbttvchannel(),await this.get7tvchannel(),await this.getsubscriberbadges())}},computed:{out_url(){let t="";return""!=this.selectedChannel?(18!=this.fontSize&&(t+=`&font_size=${this.fontSize}`),"#2b2b2b"!=this.BG&&(t+=`&background=${"transparent"!=this.BG?this.BG.substring(1):this.BG}`),"1"!=this.paintsEnabled&&(t+="&paints=0"),"1"!=this.SmoothColors&&(t+="&smoothcolor=0"),"2"!=this.Border&&(t+="&border=0"),"1"!=this.pEmotes&&(t+="&pemotes=0"),"1"!=this.eventApi&&(t+="&eventapi=0"),"0"!=this.textShadow&&(t+="&shadowtext=1"),"Roboto"!=this.fontName&&(t+=`&fontname=${this.fontName}`),"0"!=this.deleteAfter&&(t+=`&deleteafter=${this.deleteAfter}`),""!=this.ignoreList&&(t+=`&ignore=${this.ignoreList.trim()}`),"1"!=this.padding&&(t+=`&padding=${this.padding.trim()}`),`${location.toString()}chat?channel=${this.selectedChannel}${t}`):"No channel!"}}},Et=()=>{(0,n.sj)((t=>({"13b613c9":t.fontName})))},xt=wt.setup;wt.setup=xt?(t,e)=>(Et(),xt(t,e)):Et;var zt=wt;const Pt=(0,_t.Z)(zt,[["render",ot]]);var Tt=Pt}}]);
//# sourceMappingURL=398.a69d777e.js.map