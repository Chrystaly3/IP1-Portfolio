(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4076],{"08kA":function(n,e,t){"use strict"
var r=t("s4NR"),o=t("CxY0"),i=t("U6jy")
function a(n){return n&&n.rel}function c(n,e){function t(t){n[t]=i(e,{rel:t})}e.rel.split(/\s+/).forEach(t)
return n}function l(n,e){var t=e.match(/\s*(.+)\s*=\s*"?([^"]+)"?/)
t&&(n[t[1]]=t[2])
return n}function s(n){try{var e=n.match(/<?([^>]*)>(.*)/),t=e[1],a=e[2].split(";"),c=o.parse(t),s=r.parse(c.query)
a.shift()
var b=a.reduce(l,{})
b=i(s,b)
b.url=t
return b}catch(n){return null}}n.exports=function(n){if(!n)return null
return n.split(/,\s*</).map(s).filter(a).reduce(c,{})}},"8t0o":function(n,e,t){"use strict"
t.d(e,"a",(function(){return W}))
var r=t("rePB")
var o=t("Ff2n")
var i=t("1OyB")
var a=t("vuIU")
var c=t("JX7q")
var l=t("Ji7U")
var s=t("LK+K")
t("DEX3")
var b=t("q1tI")
var u=t.n(b)
var f=t("17x9")
var d=t.n(f)
var h=t("TSYQ")
var p=t.n(h)
var g=t("n12J")
var v=t("J2CL")
var y=t("rW8M")
var m=t("/UXv")
var _=t("kR0I")
var H=t("nAyT")
var k=t("E+IV")
var R=t("jtGx")
var O=t("4Awi")
var B=t("tCl5")
var x=t("KgFQ")
var w=t("oXx0")
var G=t("o4+2")
function j(n){var e=n.colors,t=n.typography,r=n.borders,o=n.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,color:e.textLink,textDecorationWithinText:"underline",hoverTextDecorationWithinText:"none",textDecorationOutsideText:"none",hoverTextDecorationOutsideText:"underline",focusOutlineWidth:r.widthMedium,focusOutlineColor:e.borderBrand,focusOutlineStyle:r.style,hoverColor:Object(G["a"])(e.textLink,10),colorInverse:e.textLight,focusInverseOutlineColor:e.borderLightest,focusInverseIconOutlineColor:e.borderLightest,iconSize:"1.125em",iconPlusTextMargin:o.xxSmall}}j["canvas"]=function(n){return{color:n["ic-link-color"],focusOutlineColor:n["ic-brand-primary"],hoverColor:Object(G["a"])(n["ic-link-color"],10)}}
j["canvas-high-contrast"]=function(n){return{textDecorationOutsideText:"underline",hoverTextDecorationOutsideText:"none"}}
var C,F,T,S,z,Q
var I={componentId:"fbyHH",template:function(n){return"\n\n.fbyHH_bGBk,a.fbyHH_bGBk,button.fbyHH_bGBk{box-sizing:border-box;font-family:".concat(n.fontFamily||"inherit",";font-weight:").concat(n.fontWeight||"inherit",";outline-color:transparent;outline-offset:0.25rem;outline-style:").concat(n.focusOutlineStyle||"inherit",";outline-width:").concat(n.focusOutlineWidth||"inherit",";transition:outline-color 0.2s;vertical-align:baseline}\n\n.fbyHH_bGBk:focus,a.fbyHH_bGBk:focus,button.fbyHH_bGBk:focus{outline-color:").concat(n.focusOutlineColor||"inherit","}\n\n.fbyHH_bGBk[aria-disabled],a.fbyHH_bGBk[aria-disabled],button.fbyHH_bGBk[aria-disabled]{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.fbyHH_bGBk::-moz-focus-inner,a.fbyHH_bGBk::-moz-focus-inner,button.fbyHH_bGBk::-moz-focus-inner{border:0}\n\na.fbyHH_bGBk,button.fbyHH_bGBk{color:").concat(n.color||"inherit",";cursor:pointer}\n\na.fbyHH_bGBk.fbyHH_vIby,button.fbyHH_bGBk.fbyHH_vIby{-webkit-text-decoration:").concat(n.textDecorationWithinText||"inherit",";text-decoration:").concat(n.textDecorationWithinText||"inherit","}\n\na.fbyHH_bGBk.fbyHH_bSMN,button.fbyHH_bGBk.fbyHH_bSMN{-webkit-text-decoration:").concat(n.textDecorationOutsideText||"inherit",";text-decoration:").concat(n.textDecorationOutsideText||"inherit","}\n\na.fbyHH_bGBk:focus,button.fbyHH_bGBk:focus{color:").concat(n.color||"inherit","}\n\na.fbyHH_bGBk:active,a.fbyHH_bGBk:hover,button.fbyHH_bGBk:active,button.fbyHH_bGBk:hover{color:").concat(n.hoverColor||"inherit","}\n\na.fbyHH_bGBk:active.fbyHH_vIby,a.fbyHH_bGBk:hover.fbyHH_vIby,button.fbyHH_bGBk:active.fbyHH_vIby,button.fbyHH_bGBk:hover.fbyHH_vIby{-webkit-text-decoration:").concat(n.hoverTextDecorationWithinText||"inherit",";text-decoration:").concat(n.hoverTextDecorationWithinText||"inherit","}\n\na.fbyHH_bGBk:active.fbyHH_bSMN,a.fbyHH_bGBk:hover.fbyHH_bSMN,button.fbyHH_bGBk:active.fbyHH_bSMN,button.fbyHH_bGBk:hover.fbyHH_bSMN{-webkit-text-decoration:").concat(n.hoverTextDecorationOutsideText||"inherit",";text-decoration:").concat(n.hoverTextDecorationOutsideText||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH,a.fbyHH_bGBk.fbyHH_dQmH:link,a.fbyHH_bGBk.fbyHH_dQmH:visited,button.fbyHH_bGBk.fbyHH_dQmH{color:").concat(n.colorInverse||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH:focus,a.fbyHH_bGBk.fbyHH_dQmH:link:focus,a.fbyHH_bGBk.fbyHH_dQmH:visited:focus,button.fbyHH_bGBk.fbyHH_dQmH:focus{outline-color:").concat(n.focusInverseOutlineColor||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH:active,.fbyHH_bGBk.fbyHH_dQmH:focus,.fbyHH_bGBk.fbyHH_dQmH:hover,a.fbyHH_bGBk.fbyHH_dQmH:link:active,a.fbyHH_bGBk.fbyHH_dQmH:link:focus,a.fbyHH_bGBk.fbyHH_dQmH:link:hover,a.fbyHH_bGBk.fbyHH_dQmH:visited:active,a.fbyHH_bGBk.fbyHH_dQmH:visited:focus,a.fbyHH_bGBk.fbyHH_dQmH:visited:hover,button.fbyHH_bGBk.fbyHH_dQmH:active,button.fbyHH_bGBk.fbyHH_dQmH:focus,button.fbyHH_bGBk.fbyHH_dQmH:hover{color:").concat(n.colorInverse||"inherit","}\n\nbutton.fbyHH_bGBk{-moz-appearance:none;-ms-user-select:text;-webkit-appearance:none;-webkit-user-select:text;appearance:none;background:none;border:none;cursor:pointer;font-size:1em;margin:0;padding:0;text-align:inherit;user-select:text}\n\n[dir=ltr] button.fbyHH_bGBk,[dir=rtl] button.fbyHH_bGBk{text-align:inherit}\n\n.fbyHH_dnnz{box-sizing:border-box;font-size:").concat(n.iconSize||"inherit","}\n\n.fbyHH_ddMx .fbyHH_dnnz{-webkit-padding-end:").concat(n.iconPlusTextMargin||"inherit",";-webkit-padding-start:0;padding-inline-end:").concat(n.iconPlusTextMargin||"inherit",";padding-inline-start:0}\n\n[dir=ltr] .fbyHH_ddMx .fbyHH_dnnz{padding-left:0;padding-right:").concat(n.iconPlusTextMargin||"inherit","}\n\n[dir=rtl] .fbyHH_ddMx .fbyHH_dnnz{padding-left:").concat(n.iconPlusTextMargin||"inherit",";padding-right:0}\n\n.fbyHH_bkXt .fbyHH_dnnz{-webkit-padding-end:0;-webkit-padding-start:").concat(n.iconPlusTextMargin||"inherit",";padding-inline-end:0;padding-inline-start:").concat(n.iconPlusTextMargin||"inherit","}\n\n[dir=ltr] .fbyHH_bkXt .fbyHH_dnnz{padding-left:").concat(n.iconPlusTextMargin||"inherit",";padding-right:0}\n\n[dir=rtl] .fbyHH_bkXt .fbyHH_dnnz{padding-left:0;padding-right:").concat(n.iconPlusTextMargin||"inherit","}\n\n.fbyHH_FcDy.fbyHH_bkXt,.fbyHH_FcDy.fbyHH_ddMx{align-items:center}")},root:"fbyHH_bGBk",isWithinText:"fbyHH_vIby",isOutsideText:"fbyHH_bSMN","color--link-inverse":"fbyHH_dQmH",icon:"fbyHH_dnnz","iconPlacement--start":"fbyHH_ddMx","iconPlacement--end":"fbyHH_bkXt",truncates:"fbyHH_FcDy"}
var W=(C=Object(H["a"])("8.0.0",{linkRef:"elementRef",variant:"color"}),F=Object(w["a"])(),T=Object(v["l"])(j,I),C(S=F(S=T(S=(Q=z=function(n){Object(l["a"])(t,n)
var e=Object(s["a"])(t)
function t(){var n
Object(i["a"])(this,t)
for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a]
n=e.call.apply(e,[this].concat(o))
n.state={hasFocus:false}
n.handleElementRef=function(e){var t=n.props,r=t.elementRef,o=t.linkRef
n._link=e
"function"===typeof o&&o(e)
"function"===typeof r&&r(e)}
n.handleClick=function(e){var t=n.props.onClick
var r=Object(c["a"])(n),o=r.interaction
if("disabled"===o){e.preventDefault()
e.stopPropagation()}else"function"===typeof t&&t(e)}
n.handleFocus=function(e){n.setState({hasFocus:true})
"function"===typeof n.props.onFocus&&n.props.onFocus(e)}
n.handleBlur=function(e){n.setState({hasFocus:false})
"function"===typeof n.props.onBlur&&n.props.onBlur(e)}
return n}Object(a["a"])(t,[{key:"focus",value:function(){this._link&&this._link.focus()}},{key:"renderIcon",value:function(){this.props.display
return u.a.createElement("span",{className:I.icon},Object(k["a"])(this.props.renderIcon))}},{key:"render",value:function(){var n
var e=this.props,t=e.children,i=e.onClick,a=e.color,c=e.href,l=e.margin,s=e.renderIcon,b=e.iconPlacement,f=e.isWithinText,d=e.variant,h=Object(o["a"])(e,["children","onClick","color","href","margin","renderIcon","iconPlacement","isWithinText","variant"])
var v=(n={},Object(r["a"])(n,I.root,true),Object(r["a"])(n,I["color--link-inverse"],"inverse"===d||"link-inverse"===a),Object(r["a"])(n,I["iconPlacement--".concat(b)],s&&this.hasVisibleChildren),Object(r["a"])(n,I.truncates,this.containsTruncateText),Object(r["a"])(n,I["is".concat(f?"Within":"Outside","Text")],true),n)
var y=this.interaction
var m="disabled"===y
var _=i&&"button"!==this.element?"button":null
var H="button"===this.element||"input"===this.element?"button":null
var k="button"!==_||m?null:"0"
return u.a.createElement(g["a"],Object.assign({},Object(R["b"])(h),{elementRef:this.handleElementRef,as:this.element,display:this.display,margin:l,href:c,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,"aria-disabled":m?"true":null,role:_,type:H,tabIndex:k,className:p()(v)}),s&&"start"===b&&this.renderIcon(),t,s&&"end"===b&&this.renderIcon())}},{key:"containsTruncateText",get:function(){var n=false
u.a.Children.forEach(this.props.children,(function(e){e&&Object(O["a"])(e,["TruncateText"])&&(n=true)}))
!n||this.props.display
return n}},{key:"display",get:function(){if(this.props.display)return this.props.display
var n=this.containsTruncateText
return this.props.renderIcon?n?"inline-flex":"inline-block":n?"block":"auto"}},{key:"interaction",get:function(){return Object(B["a"])({props:this.props,interactionTypes:["disabled"]})}},{key:"element",get:function(){return Object(x["a"])(t,this.props)}},{key:"focused",get:function(){return Object(m["a"])(this._link)}},{key:"focusable",get:function(){return Object(_["a"])(this._link)}},{key:"hasVisibleChildren",get:function(){return Object(y["a"])(this.props.children)}}])
t.displayName="Link"
return t}(b["Component"]),z.propTypes={children:d.a.node.isRequired,href:d.a.string,color:d.a.oneOf(["link","link-inverse"]),elementRef:d.a.func,as:d.a.elementType,interaction:d.a.oneOf(["enabled","disabled"]),margin:v["c"].spacing,renderIcon:d.a.oneOfType([d.a.func,d.a.node]),iconPlacement:d.a.oneOf(["start","end"]),display:d.a.oneOf(["auto","block","inline-block","flex","inline-flex"]),isWithinText:d.a.bool,onClick:d.a.func,onFocus:d.a.func,onBlur:d.a.func,linkRef:d.a.func,variant:d.a.oneOf(["default","inverse"])},z.defaultProps={href:void 0,elementRef:void 0,interaction:void 0,margin:void 0,renderIcon:void 0,display:void 0,color:"link",as:void 0,iconPlacement:"start",isWithinText:true,onClick:void 0,onFocus:void 0,onBlur:void 0},Q))||S)||S)||S)},HMVb:function(n,e,t){"use strict"
t.d(e,"a",(function(){return b}))
var r=t("ODXe")
var o=t("i/8D")
var i=t("DUTp")
var a=t("IPIv")
var c={}
function l(n,e){if(!o["a"])return 16
var t=n||Object(i["a"])(n).documentElement
if(!e&&c[t])return c[t]
var r=parseInt(Object(a["a"])(t).getPropertyValue("font-size"))
c[t]=r
return r}var s=t("CyAq")
function b(n,e){var t=e||document.body
if(!n||"number"===typeof n)return n
var o=Object(s["a"])(n),i=Object(r["a"])(o,2),a=i[0],c=i[1]
return"rem"===c?a*l():"em"===c?a*l(t):a}},Ipg6:function(n,e,t){"use strict"
t.d(e,"a",(function(){return u}))
var r=t("VTBJ")
var o=t("ouhR")
var i=t.n(o)
var a=t("FOCd")
var c=t("08kA")
var l=t.n(c)
var s=t("etQE")
function b({path:n,params:e}){const t=i.a.param(e)
if(!t.length)return n
return`${n}?${t}`}async function u({path:n,method:e="GET",headers:t={},params:o={},body:i,fetchOpts:c={}}){const u=Object(r["a"])({},s["e"])
u.headers["X-CSRF-Token"]=Object(a["a"])("_csrf_token")
if(i&&"string"!==typeof i){i=JSON.stringify(i)
u.headers["Content-Type"]="application/json"}Object.assign(u.headers,t)
Object.assign(u,c)
const f=b({path:n,params:o})
const d=await fetch(f,Object(r["a"])({body:i,method:e},u))
if(!d.ok){const n=new Error(`doFetchApi received a bad response: ${d.status} ${d.statusText}`)
Object.assign(n,{response:d})
throw n}const h=d.headers.get("Link")
const p=h&&l()(h)||void 0
const g=await d.text()
const v=g.length>0?JSON.parse(g):void 0
return{json:v,response:d,link:p}}},U6jy:function(n,e){n.exports=r
var t=Object.prototype.hasOwnProperty
function r(){var n={}
for(var e=0;e<arguments.length;e++){var r=arguments[e]
for(var o in r)t.call(r,o)&&(n[o]=r[o])}return n}},ZbFs:function(n,e,t){"use strict"
t.d(e,"a",(function(){return f}))
var r=t("VTBJ")
var o=t("1OyB")
var i=t("vuIU")
var a=t("Ji7U")
var c=t("LK+K")
var l=t("q1tI")
var s=t.n(l)
var b=t("hPGw")
var u=s.a.createElement("path",{d:"M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(n){Object(a["a"])(t,n)
var e=Object(c["a"])(t)
function t(){Object(o["a"])(this,t)
return e.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){return s.a.createElement(b["a"],Object.assign({},this.props,{name:"IconCheck",viewBox:"0 0 1920 1920"}),u)}}])
t.displayName="IconCheckSolid"
return t}(l["Component"])
f.glyphName="check"
f.variant="Solid"
f.propTypes=Object(r["a"])({},b["a"].propTypes)},ZbPE:function(n,e,t){"use strict"
t.d(e,"a",(function(){return B}))
var r=t("rePB")
var o=t("1OyB")
var i=t("vuIU")
var a=t("Ji7U")
var c=t("LK+K")
var l=t("q1tI")
var s=t.n(l)
var b=t("17x9")
var u=t.n(b)
var f=t("TSYQ")
var d=t.n(f)
var h=t("J2CL")
var p=t("KgFQ")
var g=t("jtGx")
var v=t("nAyT")
var y=t("VTBJ")
function m(n){var e=n.typography,t=n.colors,r=n.spacing
return Object(y["a"])({},e,{primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,warningColor:t.textWarning,brandColor:t.textBrand,errorColor:t.textDanger,dangerColor:t.textDanger,successColor:t.textSuccess,alertColor:t.textAlert,paragraphMargin:"".concat(r.medium," 0")})}m.canvas=function(n){return{primaryColor:n["ic-brand-font-color-dark"],brandColor:n["ic-brand-primary"]}}
var _,H,k,R
var O={componentId:"enRcg",template:function(n){return"\n\n.enRcg_bGBk{font-family:".concat(n.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(n.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(n.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(n.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(n.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(n.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(n.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(n.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(n.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(n.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(n.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(n.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(n.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(n.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(n.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(n.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(n.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(n.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(n.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(n.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(n.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(n.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(n.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(n.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(n.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(n.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(n.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(n.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(n.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(n.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var B=(_=Object(h["l"])(m,O),_(H=(R=k=function(n){Object(a["a"])(t,n)
var e=Object(c["a"])(t)
function t(){Object(o["a"])(this,t)
return e.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){var n
var e=this.props,o=e.wrap,i=e.weight,a=e.fontStyle,c=e.size,l=e.lineHeight,b=e.letterSpacing,u=e.transform,f=e.color,h=e.children
var v=Object(p["a"])(t,this.props)
return s.a.createElement(v,Object.assign({},Object(g["b"])(this.props),{className:d()((n={},Object(r["a"])(n,O.root,true),Object(r["a"])(n,O[c],c),Object(r["a"])(n,O["wrap-".concat(o)],o),Object(r["a"])(n,O["weight-".concat(i)],i),Object(r["a"])(n,O["style-".concat(a)],a),Object(r["a"])(n,O["transform-".concat(u)],u),Object(r["a"])(n,O["lineHeight-".concat(l)],l),Object(r["a"])(n,O["letterSpacing-".concat(b)],b),Object(r["a"])(n,O["color-".concat(f)],f),n)),ref:this.props.elementRef}),h)}}])
t.displayName="Text"
return t}(l["Component"]),k.propTypes={as:u.a.elementType,children:u.a.node,color:v["a"].deprecatePropValues(u.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:u.a.func,fontStyle:u.a.oneOf(["italic","normal"]),letterSpacing:u.a.oneOf(["normal","condensed","expanded"]),lineHeight:u.a.oneOf(["default","fit","condensed","double"]),size:u.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:u.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:u.a.oneOf(["normal","light","bold"]),wrap:u.a.oneOf(["normal","break-word"])},k.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},R))||H)},bZJi:function(n,e,t){"use strict"
t.d(e,"a",(function(){return T}))
var r=t("Ff2n")
var o=t("VTBJ")
var i=t("1OyB")
var a=t("vuIU")
var c=t("Ji7U")
var l=t("LK+K")
var s=t("q1tI")
var b=t.n(s)
var u=t("17x9")
var f=t.n(u)
var d=t("nAyT")
var h=t("KgFQ")
var p=t("jtGx")
var g=t("sQ3t")
var v=t("E+IV")
var y=t("UCAh")
var m=t("BTe1")
var _=t("J2CL")
var H=t("oXx0")
var k=t("jsCG")
var R=t("AdN2")
var O=function(n){var e=n.typography,t=n.spacing
return{fontFamily:e.fontFamily,fontWeight:e.fontWeightNormal,fontSize:e.fontSizeSmall,padding:t.small}}
var B,x,w,G,j,C
var F={componentId:"eZLSb",template:function(n){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(n.fontFamily||"inherit",";font-size:").concat(n.fontSize||"inherit",";font-weight:").concat(n.fontWeight||"inherit",";padding:").concat(n.padding||"inherit","}")},root:"eZLSb_bGBk"}
var T=(B=Object(d["a"])("8.0.0",{tip:"renderTip",variant:"color"}),x=Object(H["a"])(),w=Object(_["l"])(O,F),B(G=x(G=w(G=(C=j=function(n){Object(c["a"])(t,n)
var e=Object(l["a"])(t)
function t(){var n
Object(i["a"])(this,t)
for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a]
n=e.call.apply(e,[this].concat(o))
n._id=Object(m["a"])("Tooltip")
n.state={hasFocus:false}
n.handleFocus=function(e){n.setState({hasFocus:true})}
n.handleBlur=function(e){n.setState({hasFocus:false})}
return n}Object(a["a"])(t,[{key:"renderTrigger",value:function(){var n=this.props,e=n.children,r=n.as
var i=this.state.hasFocus
var a={"aria-describedby":this._id}
if(r){var c=Object(h["a"])(t,this.props)
var l=Object(p["a"])(this.props,t.propTypes)
return b.a.createElement(c,Object.assign({},l,a),e)}return"function"===typeof e?e({focused:i,getTriggerProps:function(n){return Object(o["a"])({},a,{},n)}}):Object(g["a"])(this.props.children,a)}},{key:"render",value:function(){var n=this
var e=this.props,t=e.renderTip,o=e.isShowingContent,i=e.defaultIsShowingContent,a=e.on,c=e.placement,l=e.mountNode,s=e.constrain,u=e.offsetX,f=e.offsetY,d=e.positionTarget,h=e.onShowContent,g=e.onHideContent,y=e.tip,m=(e.variant,Object(r["a"])(e,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var _=this.props.variant
_=_?"default"===_?"primary-inverse":"primary":this.props.color
return b.a.createElement(k["a"],Object.assign({},Object(p["b"])(m),{isShowingContent:o,defaultIsShowingContent:i,on:a,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:c,color:"primary"===_?"primary-inverse":"primary",mountNode:l,constrain:s,shadow:"none",offsetX:u,offsetY:f,positionTarget:d,renderTrigger:function(){return n.renderTrigger()},onShowContent:h,onHideContent:g,onFocus:this.handleFocus,onBlur:this.handleBlur}),b.a.createElement("span",{id:this._id,className:F.root,role:"tooltip"},t?Object(v["a"])(t):y))}}])
t.displayName="Tooltip"
return t}(s["Component"]),j.propTypes={children:f.a.oneOfType([f.a.node,f.a.func]).isRequired,renderTip:f.a.oneOfType([f.a.node,f.a.func]),isShowingContent:f.a.bool,defaultIsShowingContent:f.a.bool,as:f.a.elementType,on:f.a.oneOfType([f.a.oneOf(["click","hover","focus"]),f.a.arrayOf(f.a.oneOf(["click","hover","focus"]))]),color:f.a.oneOf(["primary","primary-inverse"]),placement:y["a"].placement,mountNode:y["a"].mountNode,constrain:y["a"].constrain,offsetX:f.a.oneOfType([f.a.string,f.a.number]),offsetY:f.a.oneOfType([f.a.string,f.a.number]),positionTarget:f.a.oneOfType([R["a"],f.a.func]),onShowContent:f.a.func,onHideContent:f.a.func,tip:f.a.node,variant:f.a.oneOf(["default","inverse"])},j.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(n){},onHideContent:function(n,e){e.documentClick}},C))||G)||G)||G)},cClk:function(n,e,t){"use strict"
t.d(e,"a",(function(){return r}))
function r(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(r,o,i){var a=n.apply(null,arguments)
if(a)return a
if(r[o]&&"function"!==typeof r[e])return new Error(["You provided a '".concat(o,"' prop without an '").concat(e,"' handler on '").concat(i,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(t,"'. Otherwise, set '").concat(e,"'.")].join(""))}}},eGSd:function(n,e,t){"use strict"
t.d(e,"a",(function(){return r}))
function r(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var r,o,i,a
var c=0
var l=[]
var s=false
if("function"!==typeof n)throw new TypeError("Expected a function")
var b=!!t.leading
var u="maxWait"in t
var f=!("trailing"in t)||!!t.trailing
var d=u?Math.max(+t.maxWait||0,e):0
function h(e){var t=r
var a=o
r=o=void 0
c=e
if(true!==s){i=n.apply(a,t)
return i}}function p(n){c=n
l.push(setTimeout(y,e))
return b?h(n):i}function g(n){var t=n-a
var r=n-c
var o=e-t
return u?Math.min(o,d-r):o}function v(n){var t=n-a
var r=n-c
return"undefined"===typeof a||t>=e||t<0||u&&r>=d}function y(){var n=Date.now()
if(v(n))return m(n)
l.push(setTimeout(y,g(n)))}function m(n){k()
if(f&&r)return h(n)
r=o=void 0
return i}function _(){s=true
k()
c=0
r=a=o=void 0}function H(){return 0===l.length?i:m(Date.now())}function k(){l.forEach((function(n){return clearTimeout(n)}))
l=[]}function R(){var n=Date.now()
var t=v(n)
for(var c=arguments.length,s=new Array(c),b=0;b<c;b++)s[b]=arguments[b]
r=s
o=this
a=n
if(t){if(0===l.length)return p(a)
if(u){l.push(setTimeout(y,e))
return h(a)}}0===l.length&&l.push(setTimeout(y,e))
return i}R.cancel=_
R.flush=H
return R}},gCYW:function(n,e,t){"use strict"
t.d(e,"a",(function(){return c}))
var r=t("QF4Q")
var o=t("i/8D")
var i=t("EgqM")
var a=t("DUTp")
function c(n){var e={top:0,left:0,height:0,width:0}
if(!o["a"])return e
var t=Object(r["a"])(n)
if(!t)return e
if(t===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var l=n===document?document:Object(a["a"])(t)
var s=l&&l.documentElement
if(!s||!Object(i["a"])(s,t))return e
var b=t.getBoundingClientRect()
var u
for(u in b)e[u]=b[u]
if(l!==document){var f=l.defaultView.frameElement
if(f){var d=c(f)
e.top+=d.top
e.bottom+=d.top
e.left+=d.left
e.right+=d.left}}return{top:e.top+(window.pageYOffset||s.scrollTop)-(s.clientTop||0),left:e.left+(window.pageXOffset||s.scrollLeft)-(s.clientLeft||0),width:(null==e.width?t.offsetWidth:e.width)||0,height:(null==e.height?t.offsetHeight:e.height)||0,right:l.body.clientWidth-e.width-e.left,bottom:l.body.clientHeight-e.height-e.top}}},l9BP:function(n,e,t){"use strict"
t.d(e,"a",(function(){return g}))
var r=t("Ff2n")
var o=t("1OyB")
var i=t("vuIU")
var a=t("Ji7U")
var c=t("LK+K")
var l=t("q1tI")
var s=t.n(l)
var b=t("17x9")
var u=t.n(b)
var f=t("KgFQ")
var d=t("jtGx")
var h=t("CO+y")
var p=t("6SzX")
var g=function(n){Object(a["a"])(t,n)
var e=Object(c["a"])(t)
function t(){Object(o["a"])(this,t)
return e.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){var n=this.props,e=n.alt,o=n.children,i=Object(r["a"])(n,["alt","children"])
var a=Object(f["a"])(t,this.props)
return s.a.createElement(a,Object(d["b"])(i),s.a.createElement(p["a"],null,e),s.a.createElement(h["a"],null,o))}}])
t.displayName="AccessibleContent"
return t}(l["Component"])
g.propTypes={alt:u.a.string,as:u.a.elementType,children:u.a.node}
g.defaultProps={alt:void 0,as:"span",children:null}},msMH:function(n,e,t){"use strict"
t.d(e,"a",(function(){return T}))
var r=t("rePB")
var o=t("Ff2n")
var i=t("1OyB")
var a=t("vuIU")
var c=t("Ji7U")
var l=t("LK+K")
var s=t("q1tI")
var b=t.n(s)
var u=t("17x9")
var f=t.n(u)
var d=t("TSYQ")
var h=t.n(d)
var p=t("n12J")
var g=t("J2CL")
function v(n,e,t){if("input"===n.as){if("children"===e&&n.children||void 0==n.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(t,' as="input"`'))}else{if("value"===e&&void 0!=n.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(t,' as="input"`'))
if(!n.children)return new Error("Prop `children` should be supplied unless `".concat(t,' as="input"`.'))}return}var y=t("nAyT")
var m=t("KgFQ")
var _=t("jtGx")
var H=t("oXx0")
function k(n){var e=n.borders,t=n.colors,r=n.spacing,o=n.typography
return{lineHeight:o.lineHeightFit,h1FontSize:o.fontSizeXXLarge,h1FontWeight:o.fontWeightLight,h1FontFamily:o.fontFamily,h2FontSize:o.fontSizeXLarge,h2FontWeight:o.fontWeightNormal,h2FontFamily:o.fontFamily,h3FontSize:o.fontSizeLarge,h3FontWeight:o.fontWeightBold,h3FontFamily:o.fontFamily,h4FontSize:o.fontSizeMedium,h4FontWeight:o.fontWeightBold,h4FontFamily:o.fontFamily,h5FontSize:o.fontSizeSmall,h5FontWeight:o.fontWeightNormal,h5FontFamily:o.fontFamily,primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,borderPadding:r.xxxSmall,borderColor:t.borderMedium,borderWidth:e.widthSmall,borderStyle:e.style}}k.canvas=function(n){return{primaryColor:n["ic-brand-font-color-dark"]}}
k["instructure"]=function(n){var e=n.typography
return{h1FontFamily:e.fontFamilyHeading,h2FontFamily:e.fontFamilyHeading,h3FontWeight:e.fontWeightBold,h3FontSize:"2.125rem",h4FontWeight:e.fontWeightBold,h4FontSize:e.fontSizeLarge,h5FontWeight:e.fontWeightBold,h5FontSize:e.fontSizeMedium}}
var R={fontFamily:["h1FontFamily","h2FontFamily","h3FontFamily","h4FontFamily","h5FontFamily"]}
var O=Object(g["e"])({map:R,version:"8.0.0"})
var B,x,w,G,j,C
var F={componentId:"blnAQ",template:function(n){return"\n\n.blnAQ_bGBk{line-height:".concat(n.lineHeight||"inherit",";margin:0}\n\ninput.blnAQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.blnAQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.blnAQ_bGBk[type]{text-align:right}\n\ninput.blnAQ_bGBk[type]:focus{outline:none}\n\n.blnAQ_fCtg{font-family:").concat(n.h1FontFamily||"inherit",";font-size:").concat(n.h1FontSize||"inherit",";font-weight:").concat(n.h1FontWeight||"inherit","}\n\n.blnAQ_cVrl{font-family:").concat(n.h2FontFamily||"inherit",";font-size:").concat(n.h2FontSize||"inherit",";font-weight:").concat(n.h2FontWeight||"inherit","}\n\n.blnAQ_dnfM{font-family:").concat(n.h3FontFamily||"inherit",";font-size:").concat(n.h3FontSize||"inherit",";font-weight:").concat(n.h3FontWeight||"inherit","}\n\n.blnAQ_KGwv{font-family:").concat(n.h4FontFamily||"inherit",";font-size:").concat(n.h4FontSize||"inherit",";font-weight:").concat(n.h4FontWeight||"inherit","}\n\n.blnAQ_eYKA{font-family:").concat(n.h5FontFamily||"inherit",";font-size:").concat(n.h5FontSize||"inherit",";font-weight:").concat(n.h5FontWeight||"inherit","}\n\n.blnAQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.blnAQ_bACI{border-top:").concat(n.borderWidth||"inherit"," ").concat(n.borderStyle||"inherit"," ").concat(n.borderColor||"inherit",";padding-top:").concat(n.borderPadding||"inherit","}\n\n.blnAQ_kWwi{border-bottom:").concat(n.borderWidth||"inherit"," ").concat(n.borderStyle||"inherit"," ").concat(n.borderColor||"inherit",";padding-bottom:").concat(n.borderPadding||"inherit","}\n\n.blnAQ_drOs{color:inherit}\n\n.blnAQ_eCSh{color:").concat(n.primaryColor||"inherit","}\n\n.blnAQ_buuG{color:").concat(n.secondaryColor||"inherit","}\n\n.blnAQ_bFtJ{color:").concat(n.primaryInverseColor||"inherit","}\n\n.blnAQ_dsSB{color:").concat(n.secondaryInverseColor||"inherit","}\n\n.blnAQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"blnAQ_bGBk","level--h1":"blnAQ_fCtg","level--h2":"blnAQ_cVrl","level--h3":"blnAQ_dnfM","level--h4":"blnAQ_KGwv","level--h5":"blnAQ_eYKA","level--reset":"blnAQ_dbSc","border--top":"blnAQ_bACI","border--bottom":"blnAQ_kWwi","color--inherit":"blnAQ_drOs","color--primary":"blnAQ_eCSh","color--secondary":"blnAQ_buuG","color--primary-inverse":"blnAQ_bFtJ","color--secondary-inverse":"blnAQ_dsSB",ellipsis:"blnAQ_bOQC"}
var T=(B=Object(y["a"])("8.0.0",{ellipsis:"<TruncateText />"}),x=Object(H["a"])(),w=Object(g["l"])(k,F,O),B(G=x(G=w(G=(C=j=function(n){Object(c["a"])(t,n)
var e=Object(l["a"])(t)
function t(){Object(i["a"])(this,t)
return e.apply(this,arguments)}Object(a["a"])(t,[{key:"render",value:function(){var n
var e=this.props,i=e.border,a=e.children,c=e.color,l=e.level,s=e.margin,u=e.elementRef,f=e.ellipsis,d=Object(o["a"])(e,["border","children","color","level","margin","elementRef","ellipsis"])
var g=Object(m["a"])(t,this.props,(function(){return"reset"===l?"span":l}))
return b.a.createElement(p["a"],Object.assign({},Object(_["b"])(d),{className:h()((n={},Object(r["a"])(n,F.root,true),Object(r["a"])(n,F["level--".concat(l)],true),Object(r["a"])(n,F["color--".concat(c)],c),Object(r["a"])(n,F["border--".concat(i)],"none"!==i),Object(r["a"])(n,F.ellipsis,f),n)),as:g,margin:s,elementRef:u}),a)}}])
t.displayName="Heading"
return t}(s["Component"]),j.propTypes={border:f.a.oneOf(["none","top","bottom"]),children:v,color:f.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:f.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:f.a.elementType,margin:g["c"].spacing,elementRef:f.a.func,ellipsis:f.a.bool},j.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},C))||G)||G)||G)},yU3J:function(n,e,t){"use strict"
t.r(e)
t.d(e,"default",(function(){return x}))
var r=t("An8g")
var o=t("zx1e")
var i=t("q1tI")
var a=t.n(i)
t("17x9")
var c=t("ZbPE")
var l=t("lxh4")
var s=t("msMH")
var b=t("sULQ")
var u=t("uNh2")
var f=t("uSnb")
var d=t("8t0o")
var h=t("n12J")
var p=t("Xijr")
var g=t("HwDD")
var v=t("l9BP")
var y,m,_,H,k
const R=[{id:"content_shares",countName:"unreadShares"}]
const O=n=>Object(r["a"])(v["a"],{alt:o["a"].t("%{count} unread.",{count:n})},void 0,n)
function B({id:n,html_url:e,label:t,counts:o}){function i(){const e=R.filter(e=>e.id===n)
if(0===e.length)return null
const t=o[e[0].countName]
if(0===t)return null
return Object(r["a"])(b["a"],{count:t,standalone:true,margin:"0 0 xxx-small small",formatOutput:O})}return Object(r["a"])(l["a"].Item,{},n,Object(r["a"])(h["a"],{className:"profile-tab-"+n,as:"div",margin:"small 0"},void 0,Object(r["a"])(d["a"],{isWithinText:false,href:e},void 0,t,i())))}function x(n){const e=n.userDisplayName,t=n.userAvatarURL,i=n.loaded,b=n.userPronouns,d=n.tabs,v=n.counts
return Object(r["a"])(h["a"],{as:"div",padding:"medium"},void 0,Object(r["a"])(h["a"],{textAlign:"center"},void 0,Object(r["a"])(u["a"],{name:e,src:t,alt:o["a"].t("User profile picture"),size:"x-large",inline:false,margin:"auto","data-fs-exclude":true}),Object(r["a"])("div",{style:{wordBreak:"break-word"}},void 0,Object(r["a"])(s["a"],{level:"h3",as:"h2"},void 0,e,b&&Object(r["a"])(c["a"],{size:"large",fontStyle:"italic"},void 0," (",b,")"))),y||(y=Object(r["a"])(p["a"],{size:"small",margin:"medium 0 x-small 0"}))),m||(m=Object(r["a"])("hr",{role:"presentation"})),Object(r["a"])(l["a"],{variant:"unstyled",margin:"none",itemSpacing:"small"},void 0,i?d.map(n=>a.a.createElement(B,Object.assign({key:n.id},n,{counts:v}))):Object(r["a"])(l["a"].Item,{},"loading",Object(r["a"])("div",{style:{textAlign:"center"}},void 0,_||(_=Object(r["a"])(f["a"],{margin:"medium",renderTitle:"Loading"}))))),H||(H=Object(r["a"])("hr",{role:"presentation"})),k||(k=Object(r["a"])(g["a"],{})))}}}])

//# sourceMappingURL=4076-c-ed677743e9.js.map