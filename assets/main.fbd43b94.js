class E{constructor(e){this.properties=e!=null?e:[]}get(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(r!==void 0){if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const x="https://unpkg.com/@workadventure/scripting-api-extra@1.4.4/dist";class F{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new E(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function O(n){const e=n?"#"+n.join():"";WA.nav.openCoWebSite(x+"/configuration.html"+e)}async function ee(n,e){const t=await WA.room.getTiledMap(),r=new Map;return H(t.layers,r,n,e),r}function H(n,e,t,r){for(const o of n)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(!!t&&o.name!==t||!!r&&!r.includes(s.name))continue;e.set(s.name,new F(s))}}else o.type==="group"&&H(o.layers,e,t,r)}let D;async function k(){return D===void 0&&(D=te()),D}async function te(){return ne(await WA.room.getTiledMap())}function ne(n){const e=new Map;return X(n.layers,"",e),e}function X(n,e,t){for(const r of n)r.type==="group"?X(r.layers,e+r.name+"/",t):(r.name=e+r.name,t.set(r.name,r))}function re(n){let e=1/0,t=1/0,r=0,o=0;const s=n.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<n.height;i++)for(let a=0;a<n.width;a++)s[a+i*n.width]!==0&&(e=Math.min(e,a),o=Math.max(o,a),t=Math.min(t,i),r=Math.max(r,i));return{top:t,left:e,right:o+1,bottom:r+1}}function Y(n){let e=1/0,t=1/0,r=0,o=0;for(const s of n){const i=re(s);i.left<e&&(e=i.left),i.top<t&&(t=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:t,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var oe=Object.prototype.toString,W=Array.isArray||function(e){return oe.call(e)==="[object Array]"};function I(n){return typeof n=="function"}function se(n){return W(n)?"array":typeof n}function V(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function _(n,e){return n!=null&&typeof n=="object"&&e in n}function ie(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var ae=RegExp.prototype.test;function ue(n,e){return ae.call(n,e)}var ce=/\S/;function le(n){return!ue(ce,n)}var fe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function pe(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return fe[t]})}var ge=/\s*/,he=/\s+/,q=/\s*=/,de=/\s*\}/,ye=/#|\^|\/|>|\{|&|=|!/;function me(n,e){if(!n)return[];var t=!1,r=[],o=[],s=[],i=!1,a=!1,u="",l=0;function f(){if(i&&!a)for(;s.length;)delete o[s.pop()];else s=[];i=!1,a=!1}var d,m,T;function S(b){if(typeof b=="string"&&(b=b.split(he,2)),!W(b)||b.length!==2)throw new Error("Invalid tags: "+b);d=new RegExp(V(b[0])+"\\s*"),m=new RegExp("\\s*"+V(b[1])),T=new RegExp("\\s*"+V("}"+b[1]))}S(e||h.tags);for(var c=new M(n),v,g,y,L,R,A;!c.eos();){if(v=c.pos,y=c.scanUntil(d),y)for(var B=0,Q=y.length;B<Q;++B)L=y.charAt(B),le(L)?(s.push(o.length),u+=L):(a=!0,t=!0,u+=" "),o.push(["text",L,v,v+1]),v+=1,L===`
`&&(f(),u="",l=0,t=!1);if(!c.scan(d))break;if(i=!0,g=c.scan(ye)||"name",c.scan(ge),g==="="?(y=c.scanUntil(q),c.scan(q),c.scanUntil(m)):g==="{"?(y=c.scanUntil(T),c.scan(de),c.scanUntil(m),g="&"):y=c.scanUntil(m),!c.scan(m))throw new Error("Unclosed tag at "+c.pos);if(g==">"?R=[g,y,v,c.pos,u,l,t]:R=[g,y,v,c.pos],l++,o.push(R),g==="#"||g==="^")r.push(R);else if(g==="/"){if(A=r.pop(),!A)throw new Error('Unopened section "'+y+'" at '+v);if(A[1]!==y)throw new Error('Unclosed section "'+A[1]+'" at '+v)}else g==="name"||g==="{"||g==="&"?a=!0:g==="="&&S(y)}if(f(),A=r.pop(),A)throw new Error('Unclosed section "'+A[1]+'" at '+c.pos);return be(ve(o))}function ve(n){for(var e=[],t,r,o=0,s=n.length;o<s;++o)t=n[o],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function be(n){for(var e=[],t=e,r=[],o,s,i=0,a=n.length;i<a;++i)switch(o=n[i],o[0]){case"#":case"^":t.push(o),r.push(o),t=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(o)}return e}function M(n){this.string=n,this.tail=n,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};M.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function w(n,e){this.view=n,this.cache={".":this.view},this.parent=e}w.prototype.push=function(e){return new w(e,this)};w.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var o=this,s,i,a,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,i=e.split("."),a=0;s!=null&&a<i.length;)a===i.length-1&&(u=_(s,i[a])||ie(s,i[a])),s=s[i[a++]];else s=o.view[e],u=_(o.view,e);if(u){r=s;break}o=o.parent}t[e]=r}return I(r)&&(r=r.call(this.view)),r};function p(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}p.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};p.prototype.parse=function(e,t){var r=this.templateCache,o=e+":"+(t||h.tags).join(":"),s=typeof r!="undefined",i=s?r.get(o):void 0;return i==null&&(i=me(e,t),s&&r.set(o,i)),i};p.prototype.render=function(e,t,r,o){var s=this.getConfigTags(o),i=this.parse(e,s),a=t instanceof w?t:new w(t,void 0);return this.renderTokens(i,a,r,e,o)};p.prototype.renderTokens=function(e,t,r,o,s){for(var i="",a,u,l,f=0,d=e.length;f<d;++f)l=void 0,a=e[f],u=a[0],u==="#"?l=this.renderSection(a,t,r,o,s):u==="^"?l=this.renderInverted(a,t,r,o,s):u===">"?l=this.renderPartial(a,t,r,s):u==="&"?l=this.unescapedValue(a,t):u==="name"?l=this.escapedValue(a,t,s):u==="text"&&(l=this.rawValue(a)),l!==void 0&&(i+=l);return i};p.prototype.renderSection=function(e,t,r,o,s){var i=this,a="",u=t.lookup(e[1]);function l(m){return i.render(m,t,r,s)}if(!!u){if(W(u))for(var f=0,d=u.length;f<d;++f)a+=this.renderTokens(e[4],t.push(u[f]),r,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")a+=this.renderTokens(e[4],t.push(u),r,o,s);else if(I(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(t.view,o.slice(e[3],e[5]),l),u!=null&&(a+=u)}else a+=this.renderTokens(e[4],t,r,o,s);return a}};p.prototype.renderInverted=function(e,t,r,o,s){var i=t.lookup(e[1]);if(!i||W(i)&&i.length===0)return this.renderTokens(e[4],t,r,o,s)};p.prototype.indentPartial=function(e,t,r){for(var o=t.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!r)&&(s[i]=o+s[i]);return s.join(`
`)};p.prototype.renderPartial=function(e,t,r,o){if(!!r){var s=this.getConfigTags(o),i=I(r)?r(e[1]):r[e[1]];if(i!=null){var a=e[6],u=e[5],l=e[4],f=i;u==0&&l&&(f=this.indentPartial(i,l,a));var d=this.parse(f,s);return this.renderTokens(d,t,r,f,o)}}};p.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};p.prototype.escapedValue=function(e,t,r){var o=this.getConfigEscape(r)||h.escape,s=t.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===h.escape?String(s):o(s)};p.prototype.rawValue=function(e){return e[1]};p.prototype.getConfigTags=function(e){return W(e)?e:e&&typeof e=="object"?e.tags:void 0};p.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!W(e))return e.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){P.templateCache=n},get templateCache(){return P.templateCache}},P=new p;h.clearCache=function(){return P.clearCache()};h.parse=function(e,t){return P.parse(e,t)};h.render=function(e,t,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+se(e)+'" was given as the first argument for mustache#render(template, view, partials)');return P.render(e,t,r,o)};h.escape=pe;h.Scanner=M;h.Context=w;h.Writer=p;class Ae{constructor(e,t){this.template=e,this.state=t,this.ast=h.parse(e)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe(()=>{const o=h.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of t)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const o=r[0],s=r[1],i=r[4];["name","&","#","^"].includes(o)&&t.add(s),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,t)}}}async function we(){var n;const e=await k();for(const[t,r]of e.entries()){const o=(n=r.properties)!==null&&n!==void 0?n:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const i=new Ae(s.value,WA.state);if(i.isPureString())continue;const a=i.getValue();N(t,s.name,a),i.onChange(u=>{N(t,s.name,u)})}}}function N(n,e,t){WA.room.setProperty(n,e,t),e==="visible"&&(t?WA.room.showLayer(n):WA.room.hideLayer(n))}let G,U=0,j=0;function K(n){if(WA.state[n.name]){let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function We(n){const e=n.properties.getString("openSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=z(n.properties.mustGetString("openLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function Se(n){const e=n.properties.getString("closeSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=z(n.properties.mustGetString("closeLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function Z(n){return n.map(e=>G.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function z(n){const e=Z(n),t=Y(e),r=((t.right-t.left)/2+t.left)*32,o=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(U-r,2)+Math.pow(j-o,2))}function Le(n){WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]?We(n):Se(n),K(n)}),K(n)}function Ce(n,e,t,r){const o=n.name;let s,i,a=!1;const u=t.getString("tag");let l=!0;u&&!WA.player.tags.includes(u)&&(l=!1);const f=!!u;function d(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function T(c){const v=Y(Z(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+c,url:r+"/keypad.html#"+encodeURIComponent(c),position:{x:v.right*32,y:v.top*32,width:32*3,height:32*4},allowApi:!0})}function S(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(a=!0,t.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!l||!f)&&(t.getString("code")||t.getString("codeVariable"))){T(o);return}!l||(WA.state[e.name]?d():m())}),WA.room.onLeaveLayer(o).subscribe(()=>{a=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),S()}),WA.state.onVariableChange(e.name).subscribe(()=>{a&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),i&&WA.state[e.name]===!0&&S(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Ee(n){const e=n.properties.mustGetString("bellSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Math.sqrt(Math.pow(n.x-U,2)+Math.pow(n.y-j,2));if(o>t)return;r=1-o/t}WA.sound.loadSound(e).play({volume:r})}function Pe(n){WA.state[n.name]===void 0&&(WA.state[n.name]=0),WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]&&Ee(n)})}function Me(n,e,t){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[n]=WA.state[n]+1}}]):WA.state[n]=WA.state[n]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Te(n){n=n!=null?n:x;const e=await ee();G=await k();for(const t of e.values())t.properties.get("door")&&Le(t),t.properties.get("bell")&&Pe(t);for(const t of G.values()){const r=new E(t.properties),o=r.getString("doorVariable");if(o&&t.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');Ce(t,i,r,n)}const s=r.getString("bellVariable");s&&Me(s,r,t.name)}WA.player.onPlayerMove(t=>{U=t.x,j=t.y})}function Re(n,e){const t=n.getString("bindVariable");if(t){const r=n.get("enterValue"),o=n.get("leaveValue"),s=n.getString("triggerMessage"),i=n.getString("tag");ke(t,e,r,o,s,i)}}function ke(n,e,t,r,o,s){s&&!WA.player.tags.includes(s)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[n]=t)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[n]=r}))}async function Be(){const n=await k();for(const e of n.values()){const t=new E(e.properties);Re(t,e.name)}}let J;async function De(n){const e=await WA.room.getTiledMap();n=n!=null?n:x,J=await k();const t=e.layers.find(r=>r.name==="configuration");if(t){const o=new E(t.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(n+"/configuration.html",!0)});for(const s of J.values()){const i=new E(s.properties),a=i.getString("openConfig");a&&s.type==="tilelayer"&&Ve(a.split(","),s.name,i)}}}function Ve(n,e,t){let r;const o=t.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function i(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=t.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>O(n)})}function a(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=t.getString("openConfigTrigger");s&&(u&&u==="onaction"?i():O(n))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),a()})}function Ge(){return WA.onInit().then(()=>{Te().catch(n=>console.error(n)),Be().catch(n=>console.error(n)),De().catch(n=>console.error(n)),we().catch(n=>console.error(n))}).catch(n=>console.error(n))}console.log("Script started successfully");let C;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("doorSteps").subscribe(()=>{WA.room.showLayer("openDoors")}),WA.room.onLeaveLayer("doorSteps").subscribe(()=>{WA.room.hideLayer("openDoors")}),WA.room.area.onEnter("signLeft").subscribe(()=>{C=WA.ui.openPopup("signLeftPopup","Web3, Lifestyle",[])}),WA.room.area.onLeave("signLeft").subscribe($),WA.room.area.onEnter("signRight").subscribe(()=>{C=WA.ui.openPopup("signRightPopup","Innovation, Sant\xE9, Founders",[])}),WA.room.area.onLeave("signRight").subscribe($),WA.room.area.onEnter("doorStep").subscribe(()=>{WA.room.showLayer("openDoor")}),WA.room.area.onLeave("doorStep").subscribe(()=>{WA.room.hideLayer("openDoor")}),Ge().then(()=>{console.log("Scripting API Extra ready");const n=new Date().getDay(),e=["filmDuDimanche","filmDuLundi","filmDuMardi","filmDuMercredi","filmDuJeudi","filmDuVendredi","filmDuSamedi"];WA.room.area.onEnter("filmDuJourTrigger").subscribe(()=>{WA.state.filmDuJour=WA.state.loadVariable(e[n])})}).catch(n=>console.error(n))}).catch(n=>console.error(n));function $(){C!==void 0&&(C.close(),C=void 0)}