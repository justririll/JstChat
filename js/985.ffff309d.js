(self["webpackChunkchat"]=self["webpackChunkchat"]||[]).push([[985],{1223:function(t,r,e){var a=e(5112),n=e(30),o=e(3070).f,s=a("unscopables"),u=Array.prototype;void 0==u[s]&&o(u,s,{configurable:!0,value:n(null)}),t.exports=function(t){u[s][t]=!0}},490:function(t,r,e){var a=e(5005);t.exports=a("document","documentElement")},30:function(t,r,e){var a,n=e(9670),o=e(6048),s=e(748),u=e(3501),i=e(490),h=e(317),c=e(6200),l=">",p="<",g="prototype",M="script",d=c("IE_PROTO"),f=function(){},b=function(t){return p+M+l+t+p+"/"+M+l},w=function(t){t.write(b("")),t.close();var r=t.parentWindow.Object;return t=null,r},v=function(){var t,r=h("iframe"),e="java"+M+":";return r.style.display="none",i.appendChild(r),r.src=String(e),t=r.contentWindow.document,t.open(),t.write(b("document.F=Object")),t.close(),t.F},x=function(){try{a=new ActiveXObject("htmlfile")}catch(r){}x="undefined"!=typeof document?document.domain&&a?w(a):v():w(a);var t=s.length;while(t--)delete x[g][s[t]];return x()};u[d]=!0,t.exports=Object.create||function(t,r){var e;return null!==t?(f[g]=n(t),e=new f,f[g]=null,e[d]=t):e=x(),void 0===r?e:o.f(e,r)}},6048:function(t,r,e){var a=e(9781),n=e(3353),o=e(3070),s=e(9670),u=e(5656),i=e(1956);r.f=a&&!n?Object.defineProperties:function(t,r){s(t);var e,a=u(r),n=i(r),h=n.length,c=0;while(h>c)o.f(t,e=n[c++],a[e]);return t}},1956:function(t,r,e){var a=e(6324),n=e(748);t.exports=Object.keys||function(t){return a(t,n)}},2262:function(t,r,e){"use strict";var a=e(2109),n=e(7908),o=e(6244),s=e(9303),u=e(1223);a({target:"Array",proto:!0},{at:function(t){var r=n(this),e=o(r),a=s(t),u=a>=0?a:e+a;return u<0||u>=e?void 0:r[u]}}),u("at")},4506:function(t,r,e){"use strict";var a=e(2109),n=e(1702),o=e(4488),s=e(9303),u=e(1340),i=e(7293),h=n("".charAt),c=i((function(){return"\ud842"!=="𠮷".at(-2)}));a({target:"String",proto:!0,forced:c},{at:function(t){var r=u(o(this)),e=r.length,a=s(t),n=a>=0?a:e+a;return n<0||n>=e?void 0:h(r,n)}})},7167:function(t,r,e){"use strict";e(1703);class a{static hex2lab(t){const[r,e,n,o]=a.hex2rgba(t),[s,u,i]=a.rgb2xyz(r,e,n,o);return a.xyz2lab(s,u,i)}static rgba2lab(t,r,e,n=1){const[o,s,u]=a.rgb2xyz(t,r,e,n);return a.xyz2lab(o,s,u)}static lab2rgba(t,r,e){const[n,o,s]=a.lab2xyz(t,r,e);return a.xyz2rgba(n,o,s)}static hex2rgba(t){let r;if("#"===t.charAt(0)&&(r=t.substring(1).split("")),r.length>6||r.length<3)throw new Error(`HEX colour must be 3 or 6 values. You provided it ${r.length}`);3===r.length&&(r=[r[0],r[0],r[1],r[1],r[2],r[2]]),r="0x"+r.join("");let e=r>>16&255,a=r>>8&255,n=255&r,o=1;return[e,a,n,o]}static rgb2xyz(t,r,e,a=1){t>255?t=255:t<0&&(t=0),r>255?r=255:r<0&&(r=0),e>255?e=255:e<0&&(e=0),a>1?a=1:a<0&&(a=0),t/=255,r/=255,e/=255,t>.04045?t=Math.pow((t+.055)/1.055,2.4):t/=12.92,r>.04045?r=Math.pow((r+.055)/1.055,2.4):r/=12.92,e>.04045?e=Math.pow((e+.055)/1.055,2.4):e/=12.92,t*=100,r*=100,e*=100;const n=.4124564*t+.3575761*r+.1804375*e,o=.2126729*t+.7151522*r+.072175*e,s=.0193339*t+.119192*r+.9503041*e;return[n,o,s]}static xyz2rgba(t,r,e){let a=t/100,n=r/100,o=e/100,s=3.2404542*a+-1.5371385*n+-.4985314*o,u=-.969266*a+1.8760108*n+.041556*o,i=.0556434*a+-.2040259*n+1.0572252*o;s>.0031308?s=1.055*Math.pow(s,1/2.4)-.055:s*=12.92,u>.0031308?u=1.055*Math.pow(u,1/2.4)-.055:u*=12.92,i>.0031308?i=1.055*Math.pow(i,1/2.4)-.055:i*=12.92;let h=Math.round(255*s),c=Math.round(255*u),l=Math.round(255*i);return[h,c,l,1]}static xyz2lab(t,r,e){const a=94.811,n=100,o=107.304;t/=a,r/=n,e/=o,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116;const s=116*r-16,u=500*(t-r),i=200*(r-e);return[s,u,i]}static lab2xyz(t,r,e){const a=94.811,n=100,o=107.304;let s=(t+16)/116,u=r/500+s,i=s-e/200;s=Math.pow(s,3)>.008856?Math.pow(s,3):(s-16/116)/7.787,u=Math.pow(u,3)>.008856?Math.pow(u,3):(u-16/116)/7.787,i=Math.pow(i,3)>.008856?Math.pow(i,3):(i-16/116)/7.787;let h=u*a,c=s*n,l=i*o;return[h,c,l]}static deltaE00(t,r,e,a,n,o){Math.rad2deg=function(t){return 360*t/(2*Math.PI)},Math.deg2rad=function(t){return 2*Math.PI*t/360};const s=(t+a)/2,u=Math.sqrt(Math.pow(r,2)+Math.pow(e,2)),i=Math.sqrt(Math.pow(n,2)+Math.pow(o,2)),h=(u+i)/2,c=(1-Math.sqrt(Math.pow(h,7)/(Math.pow(h,7)+Math.pow(25,7))))/2,l=r*(1+c),p=n*(1+c),g=Math.sqrt(Math.pow(l,2)+Math.pow(e,2)),M=Math.sqrt(Math.pow(p,2)+Math.pow(o,2)),d=(g+M)/2;let f=Math.rad2deg(Math.atan2(e,l));f<0&&(f+=360);let b=Math.rad2deg(Math.atan2(o,p));b<0&&(b+=360);const w=Math.abs(f-b)>180?(f+b+360)/2:(f+b)/2,v=1-.17*Math.cos(Math.deg2rad(w-30))+.24*Math.cos(Math.deg2rad(2*w))+.32*Math.cos(Math.deg2rad(3*w+6))-.2*Math.cos(Math.deg2rad(4*w-63));let x=b-f;Math.abs(x)>180&&(b<=f?x+=360:x-=360);const m=a-t,y=M-g;x=2*Math.sqrt(g*M)*Math.sin(Math.deg2rad(x)/2);const F=1+.015*Math.pow(s-50,2)/Math.sqrt(20+Math.pow(s-50,2)),D=1+.045*d,I=1+.015*d*v,C=30*Math.exp(-Math.pow((w-275)/25,2)),j=2*Math.sqrt(Math.pow(d,7)/(Math.pow(d,7)+Math.pow(25,7))),q=-j*Math.sin(2*Math.deg2rad(C)),z=1,E=1,O=1,P=Math.sqrt(Math.pow(m/(z*F),2)+Math.pow(y/(E*D),2)+Math.pow(x/(O*I),2)+q*(y/(E*D))*(x/(O*I)));return P}static getDarkerColour(t,r,e,n=1,o=.05){let[s,u,i]=a.rgba2lab(t,r,e,n);return s-=s*o,s<0&&(s=0),a.lab2rgba(s,u,i)}static getBrighterColour(t,r,e,n=1,o=.05){let[s,u,i]=a.rgba2lab(t,r,e,n);return s+=s*o,s>100&&(s=100),a.lab2rgba(s,u,i)}}r["Z"]=a},3636:function(t,r,e){"use strict";e(1703);function a(t){var r=t.toString(16);return 1==r.length?"0"+r:r}function n(t){var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]:null}var o={textToMessageObject(t){let r=[];for(const e of t.split(" ")){let t=e.trim();""!=t&&r.push({Type:"text",Text:t+" "})}return r},getEmote(t,r){for(const e of t)if(e.Name==r)return[!0,e];return[!1,{}]},getEmoteTwitch(t,r){for(const e in t)if(e==r)return[!0,t[e]];return[!1,{}]},magnitude(t){let r=0;for(let e=0;e<t.length;e++)r+=t[e]*t[e];return Math.sqrt(r)},dot_product(t,r){if(t.length!==r.length)throw new Error("Vectors must have the same length");let e=0;for(let a=0;a<t.length;a++)e+=t[a]*r[a];return e},DecimalToStringRGBA(t){const r=t>>>24&255,e=t>>>16&255,a=t>>>8&255,n=255&t;return`rgba(${r}, ${e}, ${a}, ${(n/255).toFixed(3)})`},toGray(t){let r=n(t);return r[0]/255*.2126+r[1]/255*.7152+r[2]/255*.0722},pSBC(t,r,e,a){let n,o,s,u,i,h,c,l=parseInt,p=Math.round,g="string"==typeof e;return"number"!=typeof t||t<-1||t>1||"string"!=typeof r||"r"!=r[0]&&"#"!=r[0]||e&&!g?null:(this.pSBCr||(this.pSBCr=t=>{let r=t.length,e={};if(r>9){if([n,o,s,g]=t=t.split(","),r=t.length,r<3||r>4)return null;e.r=l("a"==n[3]?n.slice(5):n.slice(4)),e.g=l(o),e.b=l(s),e.a=g?parseFloat(g):-1}else{if(8==r||6==r||r<4)return null;r<6&&(t="#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+(r>4?t[4]+t[4]:"")),t=l(t.slice(1),16),9==r||5==r?(e.r=t>>24&255,e.g=t>>16&255,e.b=t>>8&255,e.a=p((255&t)/.255)/1e3):(e.r=t>>16,e.g=t>>8&255,e.b=255&t,e.a=-1)}return e}),c=r.length>9,c=g?e.length>9||"c"==e&&!c:c,i=this.pSBCr(r),u=t<0,h=e&&"c"!=e?this.pSBCr(e):u?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},t=u?-1*t:t,u=1-t,i&&h?(a?(n=p(u*i.r+t*h.r),o=p(u*i.g+t*h.g),s=p(u*i.b+t*h.b)):(n=p((u*i.r**2+t*h.r**2)**.5),o=p((u*i.g**2+t*h.g**2)**.5),s=p((u*i.b**2+t*h.b**2)**.5)),g=i.a,h=h.a,i=g>=0||h>=0,g=i?g<0?h:h<0?g:g*u+h*t:0,c?"rgb"+(i?"a(":"(")+n+","+o+","+s+(i?","+p(1e3*g)/1e3:"")+")":"#"+(4294967296+16777216*n+65536*o+256*s+(i?p(255*g):0)).toString(16).slice(1,i?void 0:-2)):null)},hexToRgb(t){var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?[parseInt(r[1],16)/255,parseInt(r[2],16)/255,parseInt(r[3],16)/255]:null},rgbToHex(t,r,e){return"#"+a(t)+a(r)+a(e)},parse_smiles(t,r){let e={};t=t.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"a");for(const[a,n]of Object.entries(r)){let r;r=parseInt(n[0]["endPosition"])-n[0]["startPosition"]==1?t.substring(n[0]["startPosition"],parseInt(n[0]["endPosition"])+2).trim():t.substring(parseInt(n[0]["startPosition"]),parseInt(n[0]["endPosition"])+2).trim(),r=r.split(" ")[0],r in e||(e[r]=`https://static-cdn.jtvnw.net/emoticons/v2/${a}/default/light/2.0`)}return e}};r["Z"]=o}}]);
//# sourceMappingURL=985.ffff309d.js.map