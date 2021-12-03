(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[138,3642],{"+hG6":function(e,t,a){!function(t,r){e.exports=r(a("q1tI"),a("17x9"),a("PIgI"))}(window,(function(e,t,a){return function(e){var t={}
function a(r){if(t[r])return t[r].exports
var i=t[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(r,i,function(t){return e[t]}.bind(null,i))
return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=8)}([function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t){e.exports=a},function(e,t,a){var r=a(4)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
a(6)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,a){(e.exports=a(5)(!1)).push([e.i,".Cropper {\n  position: relative;\n  display: inline-block;\n  max-width:100%;\n  max-height:100%;\n}\n\n.box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.Cropper-box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  cursor: move;\n  border: #fff solid 1px;\n}\n\n.Cropper-canvas {\n  visibility: hidden;\n  position: absolute;\n}\n\n.Cropper-image {\n  vertical-align: middle;\n  max-width: 100%;\n  position: relative;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\n\n.resize-handle {\n  position: absolute;\n  background-color: #ECEEEF;\n  border: #8295AB solid 1px;\n  width: 13px;\n  height: 13px;\n  z-index: 1;\n}\n\n.resize-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: nwse-resize;\n  transform: translate(50%, 50%);\n}\n.resize-handle-ne {\n  right: 0;\n  top: 0;\n  cursor: nesw-resize;\n  transform: translate(50%, -50%);\n}\n.resize-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: nesw-resize;\n  transform: translate(-50%, 50%);\n}\n.resize-handle-nw {\n  top: 0;\n  bottom: 0;\n  cursor: nwse-resize;\n  transform: translate(-50%, -50%);\n}\n\n.DraggableResizable {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.DraggableResizable-controls {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.DraggableResizable-top,\n.DraggableResizable-left,\n.DraggableResizable-bottom,\n.DraggableResizable-right {\n  position: absolute;\n  background-color: rgba(0,0,0,.7);\n}\n\n.DraggableResizable-top {\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.DraggableResizable-bottom {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.DraggableResizable-left {\n  left: 0;\n}\n.DraggableResizable-right {\n  right: 0;\n}\n",""])},function(e,t){e.exports=function(e){var t=[]
return t.toString=function(){return this.map((function(t){var a=function(e,t){var a=e[1]||"",r=e[3]
if(!r)return a
if(t&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),n=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}))
return[a].concat(n).concat([i]).join("\n")}return[a].join("\n")}(t,e)
return t[2]?"@media "+t[2]+"{"+a+"}":a})).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]])
for(var r={},i=0;i<this.length;i++){var n=this[i][0]
"number"==typeof n&&(r[n]=!0)}for(i=0;i<e.length;i++){var o=e[i]
"number"==typeof o[0]&&r[o[0]]||(a&&!o[2]?o[2]=a:a&&(o[2]="("+o[2]+") and ("+a+")"),t.push(o))}},t}},function(e,t,a){var r={},i=function(e){var t
return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}((function(){return window&&document&&document.all&&!window.atob})),n=function(e){var t={}
return function(e,a){if("function"==typeof e)return e()
if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,a)
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),o=null,s=0,l=[],c=a(7)
function u(e,t){for(var a=0;a<e.length;a++){var i=e[a],n=r[i.id]
if(n){n.refs++
for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o])
for(;o<i.parts.length;o++)n.parts.push(v(i.parts[o],t))}else{var s=[]
for(o=0;o<i.parts.length;o++)s.push(v(i.parts[o],t))
r[i.id]={id:i.id,refs:1,parts:s}}}}function p(e,t){for(var a=[],r={},i=0;i<e.length;i++){var n=e[i],o=t.base?n[0]+t.base:n[0],s={css:n[1],media:n[2],sourceMap:n[3]}
r[o]?r[o].parts.push(s):a.push(r[o]={id:o,parts:[s]})}return a}function _(e,t){var a=n(e.insertInto)
if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.")
var r=l[l.length-1]
if("top"===e.insertAt)r?r.nextSibling?a.insertBefore(t,r.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),l.push(t)
else if("bottom"===e.insertAt)a.appendChild(t)
else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n")
var i=n(e.insertAt.before,a)
a.insertBefore(t,i)}}function d(e){if(null===e.parentNode)return!1
e.parentNode.removeChild(e)
var t=l.indexOf(e)
t>=0&&l.splice(t,1)}function h(e){var t=document.createElement("style")
if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=a.nc
r&&(e.attrs.nonce=r)}return f(t,e.attrs),_(e,t),t}function f(e,t){Object.keys(t).forEach((function(a){e.setAttribute(a,t[a])}))}function v(e,t){var a,r,i,n
if(t.transform&&e.css){if(!(n=t.transform(e.css)))return function(){}
e.css=n}if(t.singleton){var l=s++
a=o||(o=h(t)),r=g.bind(null,a,l,!1),i=g.bind(null,a,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=function(e){var t=document.createElement("link")
return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",f(t,e.attrs),_(e,t),t}(t),r=function(e,t,a){var r=a.css,i=a.sourceMap,n=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||n)&&(r=c(r))
i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */")
var o=new Blob([r],{type:"text/css"}),s=e.href
e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,a,t),i=function(){d(a),a.href&&URL.revokeObjectURL(a.href)}):(a=h(t),r=function(e,t){var a=t.css,r=t.media
r&&e.setAttribute("media",r)
if(e.styleSheet)e.styleSheet.cssText=a
else{for(;e.firstChild;)e.removeChild(e.firstChild)
e.appendChild(document.createTextNode(a))}}.bind(null,a),i=function(){d(a)})
return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return
r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom")
var a=p(e,t)
return u(a,t),function(e){for(var i=[],n=0;n<a.length;n++){var o=a[n];(s=r[o.id]).refs--,i.push(s)}e&&u(p(e,t),t)
for(n=0;n<i.length;n++){var s
if(0===(s=i[n]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]()
delete r[s.id]}}}}
var m=function(){var e=[]
return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()
function g(e,t,a,r){var i=a?"":r.css
if(e.styleSheet)e.styleSheet.cssText=m(t,i)
else{var n=document.createTextNode(i),o=e.childNodes
o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(n,o[t]):e.appendChild(n)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location
if(!t)throw new Error("fixUrls requires window.location")
if(!e||"string"!=typeof e)return e
var a=t.protocol+"//"+t.host,r=a+t.pathname.replace(/\/[^\/]*$/,"/")
return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,n=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}))
return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(n)?e:(i=0===n.indexOf("//")?n:0===n.indexOf("/")?a+n:r+n.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(e,t,a){"use strict"
a.r(t)
var r=a(1),i=a.n(r),n=a(0),o=a.n(n)
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,i=!1,n=void 0
try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){i=!0,n=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw n}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){for(var a=0;a<t.length;a++){var r=t[a]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=function(e){function t(e,a){var r
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(_(_(r=function(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?_(e):t}(this,u(t).call(this,e,a)))),"calculateDimensions",(function(e){var t=e.top,a=e.left,i=e.bottom,n=e.right
return{width:r.props.width-a-n,height:r.props.height-t-i}})),d(_(_(r)),"preserveAspectRatio",(function(e,t){r.props.minConstraints&&(e=Math.max(e,r.props.minConstraints[0]),t=Math.max(t,r.props.minConstraints[1]))
var a=e/t
return a<r.props.aspectRatio?[e,e/r.props.aspectRatio]:a>r.props.aspectRatio?[t*r.props.aspectRatio,t]:[e,t]})),d(_(_(r)),"constrainBoundary",(function(e){return e<0?0:e})),d(_(_(r)),"getClientCoordinates",(function(e){return e.touches?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}})),d(_(_(r)),"eventMove",(function(e){r.state.resizing?r.onResize(e):r.state.moving&&r.eventMoveBox(e)})),d(_(_(r)),"eventEnd",(function(e){r.state.resizing?r.stopResize(e):r.state.moving&&r.stopMove(e)})),d(_(_(r)),"startResize",(function(e,t){t.stopPropagation(),t.preventDefault(),r.setState({resizing:!0,corner:e})})),d(_(_(r)),"stopResize",(function(){r.setState({resizing:!1})})),d(_(_(r)),"nw",(function(e,t){var a=Object.assign({},r.state,{top:r.constrainBoundary(e.clientY-t.top),left:r.constrainBoundary(e.clientX-t.left)}),i=r.calculateDimensions(a),n=l(r.preserveAspectRatio(i.width,i.height),2),o=n[0],s=n[1]
return a.top=r.props.height-a.bottom-s,a.left=r.props.width-a.right-o,a})),d(_(_(r)),"ne",(function(e,t){var a=Object.assign({},r.state,{top:r.constrainBoundary(e.clientY-t.top),right:r.constrainBoundary(t.right-e.clientX)}),i=r.calculateDimensions(a),n=l(r.preserveAspectRatio(i.width,i.height),2),o=n[0],s=n[1]
return a.top=r.props.height-a.bottom-s,a.right=r.props.width-a.left-o,a})),d(_(_(r)),"se",(function(e,t){var a=Object.assign({},r.state,{bottom:r.constrainBoundary(t.bottom-e.clientY),right:r.constrainBoundary(t.right-e.clientX)}),i=r.calculateDimensions(a),n=l(r.preserveAspectRatio(i.width,i.height),2),o=n[0],s=n[1]
return a.bottom=r.props.height-a.top-s,a.right=r.props.width-a.left-o,a})),d(_(_(r)),"sw",(function(e,t){var a=Object.assign({},r.state,{bottom:r.constrainBoundary(t.bottom-e.clientY),left:r.constrainBoundary(e.clientX-t.left)}),i=r.calculateDimensions(a),n=l(r.preserveAspectRatio(i.width,i.height),2),o=n[0],s=n[1]
return a.bottom=r.props.height-a.top-s,a.left=r.props.width-a.right-o,a})),d(_(_(r)),"onResize",(function(e){var t=r.box.parentElement.parentElement.getBoundingClientRect(),a=r.getClientCoordinates(e),i=r[r.state.corner](a,t)
r.resize(i,a)})),d(_(_(r)),"controlsResize",(function(e){var t=r.box.parentElement.parentElement.getBoundingClientRect(),a="width"===e.target.name?+e.target.value:+e.target.value*r.props.aspectRatio,i="height"===e.target.name?+e.target.value:+e.target.value/r.props.aspectRatio,n=r.preserveAspectRatio(a,i)
if(a=n[0],i=n[1],!(a>t.width-r.state.left||i>t.height-r.state.top)){var o=r.state.width-a,s=r.state.height-i,l=Object.assign({},r.state,{right:r.state.right+o,bottom:r.state.bottom+s}),c={clientX:t.right-l.right,clientY:t.bottom-l.bottom}
r.resize(l,c)}})),d(_(_(r)),"resize",(function(e,t){var a=r.calculateDimensions(e),i=a.width!==r.state.width,n=a.height!==r.state.height;(i||n)&&r.setState(Object.assign({},t,e,a),(function(){r.props.onChange({top:e.top,left:e.left},a)}))})),d(_(_(r)),"startMove",(function(e){var t=r.getClientCoordinates(e),a=t.clientX,i=t.clientY
r.setState({moving:!0,clientX:a,clientY:i})})),d(_(_(r)),"stopMove",(function(e){r.setState({moving:!1})})),d(_(_(r)),"eventMoveBox",(function(e){e.preventDefault()
var t=r.getClientCoordinates(e),a=t.clientX,i=t.clientY,n=a-r.state.clientX,o=i-r.state.clientY
r.moveBox(a,i,n,o)})),d(_(_(r)),"controlsMoveBox",(function(e){var t="x"===e.target.name?e.target.value-r.state.left:0,a="y"===e.target.name?e.target.value-r.state.top:0
r.moveBox(0,0,t,a)})),d(_(_(r)),"moveBox",(function(e,t,a,i){var n={top:r.constrainBoundary(r.state.top+i),left:r.constrainBoundary(r.state.left+a),bottom:r.constrainBoundary(r.state.bottom-i),right:r.constrainBoundary(r.state.right-a)}
n.top||(n.bottom=r.props.height-r.state.height),n.bottom||(n.top=r.props.height-r.state.height),n.left||(n.right=r.props.width-r.state.width),n.right||(n.left=r.props.width-r.state.width),r.setState(Object.assign({},{clientX:e,clientY:t},n),(function(){r.props.onChange({top:n.top,left:n.left},r.calculateDimensions(n))}))})),d(_(_(r)),"keyboardResize",(function(e){if(!(r.state.right-e<0||r.state.bottom-e<0)){var t=l(r.preserveAspectRatio(r.state.width+e,r.state.height+e),2),a=t[0],i=t[1],n=a-r.state.width,o=i-r.state.height
r.setState({bottom:r.state.bottom-o,right:r.state.right-n,width:a,height:i})}})),d(_(_(r)),"handleKey",(function(e){e.shiftKey?"ArrowUp"===e.key||38===e.keyCode?(r.keyboardResize(-10),e.preventDefault()):"ArrowDown"===e.key||40===e.keyCode?(r.keyboardResize(10),e.preventDefault()):"ArrowLeft"===e.key||37===e.keyCode?(r.keyboardResize(-10),e.preventDefault()):"ArrowRight"!==e.key&&39!==e.keyCode||(r.keyboardResize(10),e.preventDefault()):"ArrowUp"===e.key||38===e.keyCode?(r.moveBox(r.state.clientX,r.state.clientY,0,-10),e.preventDefault()):"ArrowDown"===e.key||40===e.keyCode?(r.moveBox(r.state.clientX,r.state.clientY,0,10),e.preventDefault()):"ArrowLeft"===e.key||37===e.keyCode?(r.moveBox(r.state.clientX,r.state.clientY,-10,0),e.preventDefault()):"ArrowRight"!==e.key&&39!==e.keyCode||(r.moveBox(r.state.clientX,r.state.clientY,10,0),e.preventDefault())}))
var i=l(r.preserveAspectRatio(e.width,e.height),2),n=i[0],o=i[1],c=(e.height-o)/2,p=(e.width-n)/2
return r.state={top:c,left:p,bottom:c,right:p,width:n,height:o},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),function(e,t,a){t&&c(e.prototype,t),a&&c(e,a)}(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousemove",this.eventMove),document.addEventListener("mouseup",this.eventEnd),document.addEventListener("touchmove",this.eventMove),document.addEventListener("touchend",this.eventEnd),document.addEventListener("keydown",this.handleKey),this.props.onChange({top:this.state.top,left:this.state.left},{width:this.state.width,height:this.state.height})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.eventMove),document.removeEventListener("mouseup",this.eventEnd),document.removeEventListener("touchmove",this.eventMove),document.removeEventListener("touchend",this.eventEnd),document.removeEventListener("keydown",this.handleKey)}},{key:"render",value:function(){var e=this,t={position:"absolute",top:this.state.top,left:this.state.left,right:this.state.right,bottom:this.state.bottom},a=this.calculateDimensions(this.state),r=a.width,i=a.height,n={height:this.state.top},s={height:this.state.bottom},l={top:this.state.top,right:r+this.state.right,bottom:this.state.bottom},c={top:this.state.top,left:r+this.state.left,bottom:this.state.bottom}
return o.a.createElement("div",{ref:function(t){return e.box=t},className:"DraggableResizable"},o.a.createElement("div",{className:"DraggableResizable-controls"},o.a.createElement("label",null,this.props.offsetXLabel,o.a.createElement("input",{name:"x",value:Math.round(this.state.left),onChange:this.controlsMoveBox,tabIndex:"-1",type:"number"})),o.a.createElement("label",null,this.props.offsetYLabel,o.a.createElement("input",{name:"y",value:Math.round(this.state.top),onChange:this.controlsMoveBox,tabIndex:"-1",type:"number"})),o.a.createElement("label",null,this.props.widthLabel,o.a.createElement("input",{name:"width",value:Math.round(r),type:"number",tabIndex:"-1",onChange:this.controlsResize})),o.a.createElement("label",null,this.props.heightLabel,o.a.createElement("input",{value:Math.round(i),type:"number",name:"height",tabIndex:"-1",onChange:this.controlsResize}))),o.a.createElement("div",{className:"DraggableResizable-top",style:n}),o.a.createElement("div",{className:"DraggableResizable-left",style:l}),o.a.createElement("div",{style:t,onMouseDown:this.startMove,onTouchStart:this.startMove},this.props.children,o.a.createElement("div",{className:"resize-handle resize-handle-se",onMouseDown:this.startResize.bind(null,"se"),onTouchStart:this.startResize.bind(null,"se")}),o.a.createElement("div",{className:"resize-handle resize-handle-ne",onMouseDown:this.startResize.bind(null,"ne"),onTouchStart:this.startResize.bind(null,"ne")}),o.a.createElement("div",{className:"resize-handle resize-handle-sw",onMouseDown:this.startResize.bind(null,"sw"),onTouchStart:this.startResize.bind(null,"sw")}),o.a.createElement("div",{className:"resize-handle resize-handle-nw",onMouseDown:this.startResize.bind(null,"nw"),onTouchStart:this.startResize.bind(null,"nw")})),o.a.createElement("div",{className:"DraggableResizable-right",style:c}),o.a.createElement("div",{className:"DraggableResizable-bottom",style:s}))}}]),t}()
d(h,"propTypes",{aspectRatio:i.a.number.isRequired,width:i.a.number.isRequired,height:i.a.number.isRequired,onChange:i.a.func,offset:i.a.array,minConstraints:i.a.array,children:i.a.node,widthLabel:i.a.string,heightLabel:i.a.string,offsetXLabel:i.a.string,offsetYLabel:i.a.string}),d(h,"defaultProps",{widthLabel:"Width",heightLabel:"Height",offsetXLabel:"Offset X",offsetYLabel:"Offset Y"})
var f=a(2),v=a.n(f)
a(3)
function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var a=0;a<t.length;a++){var r=t[a]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"default",(function(){return C}))
var C=function(e){function t(){var e,a
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n]
return y(k(k(a=function(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?k(e):t}(this,(e=b(t)).call.apply(e,[this].concat(i))))),"state",{imageLoaded:!1,width:a.props.width,height:a.props.height,url:window.URL.createObjectURL(a.props.image)}),y(k(k(a)),"onLoad",(function(e){var t=a.box.getBoundingClientRect()
a.setState({imageLoaded:!0,width:t.width,height:t.height},(function(){var e=a.image
a.props.onImageLoaded&&a.props.onImageLoaded(e)}))})),y(k(k(a)),"cropImage",(function(){return new Promise((function(e,t){var r=new Image
r.onload=function(){var t=a.canvas,r=a.image,i=t.getContext("2d"),n=r.naturalWidth/a.state.width,o=r.naturalHeight/a.state.height,s=n<1?0:a.state.offset.left*n,l=o<1?0:a.state.offset.top*o,c=n<1?r.naturalWidth:a.state.dimensions.width*n,u=o<1?r.naturalHeight:a.state.dimensions.height*o,p=n<1?Math.floor((a.state.dimensions.width-r.naturalWidth)/2):0,_=o<1?Math.floor((a.state.dimensions.height-r.naturalHeight)/2):0,d=n<1?r.naturalWidth:a.props.width,h=o<1?r.naturalHeight:a.props.height
i.clearRect(0,0,a.props.width,a.props.height),i.drawImage(r,s,l,c,u,p,_,d,h),e(v()(t.toDataURL()))},r.src=window.URL.createObjectURL(a.props.image)}))})),y(k(k(a)),"onChange",(function(e,t){a.setState({offset:e,dimensions:t})})),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,o.a.Component),function(e,t,a){t&&g(e.prototype,t),a&&g(e,a)}(t,[{key:"componentWillReceiveProps",value:function(e){this.props.image!==e.image&&this.setState({url:window.URL.createObjectURL(e.image),imageLoaded:!1})}},{key:"shouldComponentUpdate",value:function(e,t){var a=this.props.image
return e.image.size!==a.size||e.image.name!==a.name||e.image.type!==a.type||t.imageLoaded!==this.state.imageLoaded}},{key:"render",value:function(){var e=this
return o.a.createElement("div",{ref:function(t){return e.box=t},className:"Cropper",style:{minWidth:this.props.width,minHeight:this.props.height}},o.a.createElement("canvas",{className:"Cropper-canvas",ref:function(t){return e.canvas=t},width:this.props.width,height:this.props.height}),o.a.createElement("img",{ref:function(t){return e.image=t},src:this.state.url,className:"Cropper-image",onLoad:this.onLoad,style:{top:this.state.height/2}}),this.state.imageLoaded&&o.a.createElement("div",{className:"box"},o.a.createElement(h,{aspectRatio:this.props.width/this.props.height,width:this.state.width,height:this.state.height,minConstraints:this.props.minConstraints,onChange:this.onChange,widthLabel:this.props.widthLabel,heightLabel:this.props.heightLabel,offsetXLabel:this.props.offsetXLabel,offsetYLabel:this.props.offsetYLabel},o.a.createElement("div",{className:"Cropper-box"}))))}}]),t}()
y(C,"propTypes",{width:i.a.number.isRequired,height:i.a.number.isRequired,center:i.a.bool,image:i.a.any,widthLabel:i.a.string,heightLabel:i.a.string,offsetXLabel:i.a.string,offsetYLabel:i.a.string,onImageLoaded:i.a.func,minConstraints:i.a.arrayOf(i.a.number)}),y(C,"defaultProps",{center:!1,width:"Width",height:"Height",offsetXLabel:"Offset X",offsetYLabel:"Offset Y"})}])}))},"0NOZ":function(e,t,a){"use strict"
a.d(t,"a",(function(){return ae}))
var r=a("ouhR")
var i=a.n(r)
var n=a("UGcc")
var o=a("Y/W1")
var s=a.n(o)
var l=a("KIYd")
var c=a("mX+G")
var u=a.n(c)
class p extends u.a.View{setup(){}teardown(){}render(){super.render(...arguments)
this.$el.data("view",this)
return this}}var _=a("3O+N")
var d=a.n(_)
var h=a("HGxv")
var f=a("8WeW")
Object(f["a"])(JSON.parse('{"ar":{"profiles":{"upload_file_view":{"choose_a_picture":"اختيار صورة","crop_instructions":"لقص الصورة، قم بسحب التحديد بالماوس أو استخدم مفاتيح الأسهم لنقل التحديد ومفاتيح shift+الأسهم لتعديل حجم التحديد. ثم انقر فوق زر \\"حفظ\\" أدناه."}}},"ca":{"profiles":{"upload_file_view":{"choose_a_picture":"tria una imatge","crop_instructions":"Per retallar la imatge, arrossegueu la selecció amb el ratolí o feu servir les tecles de fletxa per moure la selecció i les tecles Maj+fletxa per canviar la mida de la selecció. Després, feu clic al botó \\"Desa\\" següent."}}},"cy":{"profiles":{"upload_file_view":{"choose_a_picture":"dewis llun","crop_instructions":"I docio’r ddelwedd, llusgwch y dewis gyda’r llygoden neu defnyddiwch y bysellau saeth i symud y dewis a shift + bysellau saeth i newid maint y dewis. Yna cliciwch y botwm \\"Cadw\\" isod."}}},"da":{"profiles":{"upload_file_view":{"choose_a_picture":"vælg et billede","crop_instructions":"For at beskære billedet skal du trække markeringen med musen eller bruge piletasterne til at flytte markeringen og shift+piletasterne for at ændre størrelsen på markeringen. Klik derefter på \\"Gem\\"-knappen nedenfor."}}},"da-x-k12":{"profiles":{"upload_file_view":{"choose_a_picture":"vælg et billede","crop_instructions":"For at beskære billedet skal du trække markeringen med musen eller bruge piletasterne til at flytte markeringen og shift+piletasterne for at ændre størrelsen på markeringen. Klik derefter på \\"Gem\\"-knappen nedenfor."}}},"de":{"profiles":{"upload_file_view":{"choose_a_picture":"Bild auswählen","crop_instructions":"Um das Bild zuzuschneiden, ziehen Sie die Auswahl mit der Maus oder verwenden Sie die Pfeiltasten zum Verschieben der Auswahl und Umschalt+Pfeiltasten, um die Größe der Auswahl anzupassen. Klicken Sie dann unten auf die Schaltfläche „Speichern“."}}},"el":{"profiles":{"upload_file_view":{"choose_a_picture":"επιλέξτε μια φωτογραφία","crop_instructions":"Για να κόψετε την εικόνα, σύρετε την επιλογή και μετά κάντε κλικ στο κουμπί «Αποθήκευση» παρακάτω."}}},"en-AU":{"profiles":{"upload_file_view":{"choose_a_picture":"choose a picture","crop_instructions":"To crop the image, drag the selection with the mouse or use the arrow keys to move the selection and shift+arrow keys to resize the selection. Then click the \\"Save\\" button below."}}},"en-AU-x-unimelb":{"profiles":{"upload_file_view":{"choose_a_picture":"choose a picture","crop_instructions":"To crop the image, drag the selection with the mouse or use the arrow keys to move the selection and shift+arrow keys to resize the selection. Then click the \\"Save\\" button below."}}},"en-CA":{"profiles":{"upload_file_view":{"choose_a_picture":"choose a picture","crop_instructions":"To crop the image, drag the selection with the mouse or use the arrow keys to move the selection and shift+arrow keys to resize the selection. Then click the \\"Save\\" button below."}}},"en-GB":{"profiles":{"upload_file_view":{"choose_a_picture":"choose a picture","crop_instructions":"To crop the image, drag the selection with the mouse or use the arrow keys to move the selection and shift+arrow keys to resize the selection. Then click the \\"save\\" button below."}}},"en-GB-x-lbs":{"profiles":{"upload_file_view":{"choose_a_picture":"choose a picture","crop_instructions":"To crop the image, drag the selection with the mouse or use the arrow keys to move the selection and shift+arrow keys to resize the selection. Then click the \\"save\\" button below."}}},"en-GB-x-ukhe":{"profiles":{"upload_file_view":{"choose_a_picture":"choose a picture","crop_instructions":"To crop the image, drag the selection with the mouse or use the arrow keys to move the selection and shift+arrow keys to resize the selection. Then click the \\"save\\" button below."}}},"es":{"profiles":{"upload_file_view":{"choose_a_picture":"elegir una imagen","crop_instructions":"Para recortar la imagen, arrastre la selección con el mouse o utilice las flechas de dirección para mover la selección y las teclas shift+flecha para cambiar el tamaño de la selección. Luego haga clic en el botón “Guardar” más abajo."}}},"es-ES":{"profiles":{"upload_file_view":{"choose_a_picture":"elegir una imagen","crop_instructions":"Para recortar la imagen, arrastre la selección con el ratón o utilice las flechas de dirección para mover la selección y las teclas shift+flecha para cambiar el tamaño de la selección. A continuación, haga clic en el botón “Guardar” siguiente."}}},"fa":{"profiles":{"upload_file_view":{"choose_a_picture":"انتخاب عکس","crop_instructions":"برای برش تصویر، انتخاب شده را درگ کرده یا از کلیدهای جهتی به منظور جابجایی انتخاب شده استفاده کنید و جهت نغییر اندازه انتخاب شده از کلیدهای شیفت و جهتی کیبورد استفاده کنید. سپس جهت ذخیره روی کلید \\"ذخیره\\" کلیک کنید. "}}},"fi":{"profiles":{"upload_file_view":{"choose_a_picture":"valitse kuva","crop_instructions":"Jos haluat rajata kuvan, vedä valintaa hiirellä tai siirrä valintaa nuolinäppäimillä ja muuta valinnan kokoa shift+nuolinäppäimillä. Napsauta sitten allaolevaa ”Tallenna”-painiketta."}}},"fr":{"profiles":{"upload_file_view":{"choose_a_picture":"choisir une image","crop_instructions":"Pour recadrer l\'image, faites glisser la sélection avec la souris ou utilisez les touches fléchées pour déplacer la sélection et les touches majuscules+flèches pour redimensionner la sélection. Cliquez ensuite sur le bouton \\"Enregistrer\\" ci-dessous."}}},"fr-CA":{"profiles":{"upload_file_view":{"choose_a_picture":"choisir une image","crop_instructions":"Pour recadrer l\'image, faites glisser la sélection avec la souris ou utilisez les touches directionnelles pour déplacer la sélection et les touches Maj + flèches directionnelles pour redimensionner la sélection. Cliquez ensuite sur le bouton « Enregistrer » ci-dessous."}}},"he":{"profiles":{"upload_file_view":{"choose_a_picture":"בחירת תמונה","crop_instructions":"כדי לקצץ תמונה, יש לגרור את הבחירה ואז להקליק על כפתור ה\\"שמירה\\" שבהמשך"}}},"ht":{"profiles":{"upload_file_view":{"choose_a_picture":"chwazi yon foto","crop_instructions":"Pou rekadre imaj la, deplase seleksyon an ak souri a oswa itilize touch flèch yo pou deplase li, epi shift+flèch pou ka redimansyone seleksyon an. Apre sa klike sou bouton \\"Anrejistre\\" ki pi ba a."}}},"hu":{"profiles":{"upload_file_view":{"choose_a_picture":"Kép kiválasztása","crop_instructions":"A kép széleinek levágásához ragadja meg a kijelölést, majd kattintson a \\"Mentés\\" gombra!"}}},"hy":{"profiles":{"upload_file_view":{"choose_a_picture":"ընտրել պատկերը","crop_instructions":"Պատկերը կտրելու համար քաշեք ընտրված մասը և հետո սեղմեք ներքևի \\"Պահպանել\\" կոճակը:"}}},"is":{"profiles":{"upload_file_view":{"choose_a_picture":"velja mynd","crop_instructions":"Til að skera af myndinni skaltu draga valið með músinni eða nota örvalyklana til að færa valið til og shift+örvalyklana til að breyta stærð valsins. Smelltu síðan á „vista“ hnappinn hér að neðan."}}},"it":{"profiles":{"upload_file_view":{"choose_a_picture":"scegli un\'immagine","crop_instructions":"Per ritagliare l’immagine, trascina la sezione con il mouse o utilizza i tasti freccia per spostare la sezione e Maiusc+tasti freccia per ridimensionare la selezione. Quindi fai clic sul pulsante \\"Salva\\" riportato sotto."}}},"ja":{"profiles":{"upload_file_view":{"choose_a_picture":"画像の選択","crop_instructions":"画像をトリミングするには、マウスで選択範囲をドラッグするか、矢印キーを使用して選択範囲を移動し、Shift +矢印キーを使用して選択範囲のサイズを変更します。次に、下の[保存]ボタンをクリックします。"}}},"ko":{"profiles":{"upload_file_view":{"choose_a_picture":"사진 선택하기"}}},"mi":{"profiles":{"upload_file_view":{"choose_a_picture":"whiriwhiri i te pikitia","crop_instructions":"Hei motu i te āhua, toia te tīpakonga me te kiore ka whakamahi i ngā pere kī hei neke i te tīpakonga me te neke + ngā pere hei whakahou i te tīpakonga. Ka pāwhiri te \\"Tiaki\\" patene i raro"}}},"nb":{"profiles":{"upload_file_view":{"choose_a_picture":"velg et bilde","crop_instructions":"For å beskjære bildet må delen dras med musen eller bruk piltastene for å flytte delen og shift+piltast for å gå tilbake til utgangspunktet. Klikk deretter på knappen \'Lagre\' under."}}},"nb-x-k12":{"profiles":{"upload_file_view":{"choose_a_picture":"velg et bilde","crop_instructions":"For å beskjære bildet, dra valget med musen eller bruk piltastene til å flytte valget og shift+piltastene til å endre størrelsen. Klikk så på «Lagre» nedenfor."}}},"nl":{"profiles":{"upload_file_view":{"choose_a_picture":"een foto kiezen","crop_instructions":"Je kunt de afbeelding bijsnijden door de selectie met de muisaanwijzer te slepen of door de selectie te verplaatsen met de pijltoetsen en de selectie kleiner te maken met Shift+pijltoetsen. Klik vervolgens op de knop \\"Opslaan\\" hieronder."}}},"nn":{"profiles":{"upload_file_view":{"choose_a_picture":"vel eit bilde","crop_instructions":"Du kan skjere til bildet ved å dra utsnittet med musepeikaren eller bruke piltastane for å flytte det. Bruk shift+piltastar for å endre storleik på utsnittet. Trykk så på Lagre-knappen nedanfor.  "}}},"pl":{"profiles":{"upload_file_view":{"choose_a_picture":"wybierz zdjęcie","crop_instructions":"Aby przyciąć obraz, przeciągnij zaznaczenie myszą lub użyj klawiszy strzałek w celu przeniesienia zaznaczenia oraz kombinacji klawiszy strzałek+Shift, aby zmienić rozmiar zaznaczenia. Następnie kliknij przycisk Zapisz poniżej."}}},"pt":{"profiles":{"upload_file_view":{"choose_a_picture":"escolher uma imagem","crop_instructions":"Para cortar a imagem, arraste a seleção com o rato ou use as teclas de seta para mover a seleção e as teclas de seta + de deslocamento para redimensionar a seleção. Em seguida, clique no botão \\"Salvar\\" abaixo."}}},"pt-BR":{"profiles":{"upload_file_view":{"choose_a_picture":"escolher uma imagem","crop_instructions":"Para cortar a imagem, arraste a seleção com o mouse ou use as teclas de setas para mover a seleção e as teclas shift+setas para redimensionar a seleção. Depois clique no botão \\"Salvar\\" abaixo."}}},"ru":{"profiles":{"upload_file_view":{"choose_a_picture":"выбрать изображение","crop_instructions":"Чтобы обрезать изображение, перетащите мышью выбранное изображение или используйте клавиши со стрелками для перемещения выбранного изображения и сочетание Shift + клавиши со стрелками для изменения размера выбранного изображения. Затем нажмите кнопку «Сохранить» ниже."}}},"sl":{"profiles":{"upload_file_view":{"choose_a_picture":"izberi sliko","crop_instructions":"Če želite obrezati sliko, povlecite izbiro z miško, premikajte jo s puščičnima tipkama, velikost pa ji spremenite s tipko Shift + puščično tipko. Nato kliknite spodnji gumb »Save«."}}},"sv":{"profiles":{"upload_file_view":{"choose_a_picture":"välj en bild","crop_instructions":"Du kan beskära bilden genom att dra urvalet med musen eller använda piltangenterna för att flytta urvalet. Använd skift+piltangenten för att ändra storlek på urvalet. Klicka sedan på knappen Spara nedan."}}},"sv-x-k12":{"profiles":{"upload_file_view":{"choose_a_picture":"välj en bild","crop_instructions":"Du kan beskära bilden genom att dra urvalet med musen eller använda piltangenterna för att flytta urvalet. Använd skift+piltangenten för att ändra storlek på urvalet. Klicka sedan på knappen Spara nedan."}}},"th":{"profiles":{"upload_file_view":{"choose_a_picture":"เลือกภาพ","crop_instructions":"ครอปภาพโดยลากรายการที่เลือกโดยใช้เมาส์หรือใช้ปุ่มลูกศรเพื่อย้ายรายการที่เลือก และปุ่ม shift+ลูกศร เพื่อปรับขนาดรายการที่เลือก จากนั้นคลิกที่ปุ่ม “บันทึก” ด้านล่าง"}}},"tr":{"profiles":{"upload_file_view":{"choose_a_picture":"bir resim seçin","crop_instructions":"Resmi kırpmak için seçimi sürükleyin ve aşağıdaki \'\'Kaydet\'\' butonuna tıklayın."}}},"uk":{"profiles":{"upload_file_view":{"choose_a_picture":"виберіть зображення","crop_instructions":"Для того, щоб обрізати зображення, перетягніть виділену область, а потім натисніть кнопку \\"Зберегти\\", розташовану нижче."}}},"zh-Hans":{"profiles":{"upload_file_view":{"choose_a_picture":"选择图片","crop_instructions":"要剪裁图像，请使用鼠标拖放选择项或使用箭头键移动选择项并使用shift+箭头键重新调整选择项的大小。然后点击下方的“保存”按钮。"}}},"zh-Hant":{"profiles":{"upload_file_view":{"choose_a_picture":"選擇圖片","crop_instructions":"要剪裁圖像，使用滑鼠拖曳選擇範圍，或使用箭頭鍵移動選擇範圍，然後按 shift+ 箭頭鍵以調校選擇範圍大小。之後點按下方的「儲存」按鈕。"}}}}'))
a("jQeR")
a("0sPK")
h["default"].scoped("profiles.upload_file_view")
a("BGrI")
var v=d.a.default
var m=v.template,g=v.templates=v.templates||{}
var b="/work/canvas-deploy/generated/ui/shared/avatar-dialog-view/jst/uploadFileView"
g[b]=m((function(e,t,a,r,i){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
i=i||{}
var n,o="",s=a.helperMissing,l=this.escapeExpression,c=this
function u(e,t){var r,i,n=""
n+='\n  <div class="row-fluid">\n    <div class="span6">\n      <p>\n        '+l((r=a.t||e&&e.t,i={hash:{scope:"profiles.upload_file_view"},data:t},r?r.call(e,"crop_instructions",'To crop the image, drag the selection with the mouse or use the arrow keys to move the selection and shift+arrow keys to resize the selection. Then click the "Save" button below.',i):s.call(e,"t","crop_instructions",'To crop the image, drag the selection with the mouse or use the arrow keys to move the selection and shift+arrow keys to resize the selection. Then click the "Save" button below.',i)))+'\n      </p>\n    </div>\n    <div class="span6 text-center avatar-preview-wrapper">\n      <div class="avatar-preview" />\n    </div>\n  </div>\n'
return n}function p(e,t){var r,i,n=""
n+='\n  <a class="select-photo-link" href="#">\n    <i class="icon-image icon-select-photo"></i>\n    '+l((r=a.t||e&&e.t,i={hash:{scope:"profiles.upload_file_view"},data:t},r?r.call(e,"choose_a_picture","choose a picture",i):s.call(e,"t","choose_a_picture","choose a picture",i)))+'\n  </a>\n\n  <input id="selected-photo" type="file" class="hidden" accept="image/*" />\n'
return n}n=a["if"].call(t,t&&t.hasPreview,{hash:{},inverse:c.program(3,p,i),fn:c.program(1,u,i),data:i});(n||0===n)&&(o+=n)
o+="\n"
return o}))
var w=g[b]
var k=a("q1tI")
var y=a.n(k)
var C=a("i8i4")
var z=a.n(C)
var j=a("An8g")
a("17x9")
var x=a("+hG6")
var A=a.n(x)
class R extends y.a.Component{constructor(){super()
this.onImageLoaded=this.imageLoaded.bind(this)
this.wrapper=null
this.cropper=null}componentDidMount(){this.wrapper&&this.wrapper.focus()}imageLoaded(e){"function"===typeof this.props.onImageLoaded&&this.props.onImageLoaded(e)}crop(){return this.cropper.cropImage()}render(){return y.a.createElement("div",{className:"CanvasCropper",ref:e=>{this.wrapper=e},tabIndex:"0"},this.props.imgFile&&Object(j["a"])("div",{},void 0,y.a.createElement(A.a,{ref:e=>{this.cropper=e},image:this.props.imgFile,width:this.props.width,height:this.props.height,minConstraints:[16,16],onImageLoaded:this.onImageLoaded})))}}R.defaultProps={imgFile:null,width:270,height:270,onImageLoaded:null}
var E=R
class S{constructor(e,t){this.root=e
this.imgFile=t.imgFile
this.onImageLoaded=t.onImageLoaded
this.width=t.width||128
this.height=t.height||128
this.cropper=null}unmount(){z.a.unmountComponentAtNode(this.root)}render(){z.a.render(y.a.createElement(E,{height:this.height,imgFile:this.imgFile,onImageLoaded:this.onImageLoaded,ref:e=>{this.cropper=e},width:this.width}),this.root)}crop(){return this.cropper?this.cropper.crop():null}}var U=S
class P extends p{constructor(...e){super(...e)
this.loadPreview=e=>{if(!e.type.match(/^image/)){alert("Invalid file type.")
return false}return this.showPreview(e)}}static initClass(){this.optionProperty("avatarSize")
this.prototype.template=w
this.prototype.events={"click .select-photo-link":"onChooseAvatar","change #selected-photo":"onSelectAvatar","dragover .select-photo-link":"onDragOver","dragleave .select-photo-link":"onDragLeave","drop .select-photo-link":"onFileDrop"}}onChooseAvatar(e){e.preventDefault()
return this.openFileDialog()}onSelectAvatar(e){e.preventDefault()
return this.loadPreview(e.target.files[0])}onDragLeave(e){return this.toggleOverStyle(false)}onDragOver(e){e.stopPropagation()
e.preventDefault()
e.originalEvent.dataTransfer.dropEffect="copy"
return this.toggleOverStyle(true)}onFileDrop(e){e.stopPropagation()
e.preventDefault()
return this.loadPreview(e.originalEvent.dataTransfer.files[0])}openFileDialog(){return this.$("#selected-photo").click()}toggleOverStyle(e){return this.$(".select-photo-link").toggleClass("over",e)}showPreview(e){this.file=e
this.render()
return this.initCropping()}hidePreview(){delete this.file
if(this.cropper){this.cropper.unmount()
delete this.cropper}return this.render()}render(){this.revokeURLObjects()
return super.render(...arguments)}teardown(){this.hidePreview()
return this.revokeURLObjects()}revokeURLObjects(){return this.$("img").each((function(){const e=i()(this).attr("src")
if(e.match(/^data/))return"function"===typeof window.URL.revokeObjectURL?window.URL.revokeObjectURL(e):void 0}))}imageDimensions(e,t){const a=t.height()/e.height()
const r=t.width()/e.width()
return{heightRatio:a,widthRatio:r,x:Math.floor(this.currentCoords.x*r),y:Math.floor(this.currentCoords.y*a),w:Math.floor(this.currentCoords.w*r),h:Math.floor(this.currentCoords.h*a)}}getImage(){const e=i.a.Deferred()
this.cropper.crop().then(t=>e.resolve(t))
return e}initCropping(){this.cropper||(this.cropper=new U(this.$(".avatar-preview")[0],{imgFile:this.file,onImageLoaded:this.options.onImageLoaded,width:this.avatarSize.w,height:this.avatarSize.h}))
this.cropper.render()
return this.trigger("ready")}toJSON(){return{hasPreview:!!this.file}}}P.initClass()
Object(f["a"])(JSON.parse('{"ar":{"profiles":{"take_picture_view":{"retry":"إعادة المحاولة","take_picture":"التقاط صورة"}}},"ca":{"profiles":{"take_picture_view":{"retry":"Torna-ho a provar","take_picture":"Fes una foto"}}},"cy":{"profiles":{"take_picture_view":{"retry":"Ailgynnig","take_picture":"Tynnu Llun"}}},"da":{"profiles":{"take_picture_view":{"retry":"Prøv igen","take_picture":"Tag billede"}}},"da-x-k12":{"profiles":{"take_picture_view":{"retry":"Prøv igen","take_picture":"Tag billede"}}},"de":{"profiles":{"take_picture_view":{"retry":"Erneut versuchen","take_picture":"Foto machen"}}},"el":{"profiles":{"take_picture_view":{"retry":"Δοκιμάστε ξανά","take_picture":"Λήψη Φωτογραφίας"}}},"en-AU":{"profiles":{"take_picture_view":{"retry":"Retry","take_picture":"Take Picture"}}},"en-AU-x-unimelb":{"profiles":{"take_picture_view":{"retry":"Retry","take_picture":"Take Picture"}}},"en-CA":{"profiles":{"take_picture_view":{"retry":"Retry","take_picture":"Take Picture"}}},"en-GB":{"profiles":{"take_picture_view":{"retry":"Retry","take_picture":"Take picture"}}},"en-GB-x-lbs":{"profiles":{"take_picture_view":{"retry":"Retry","take_picture":"Take picture"}}},"en-GB-x-ukhe":{"profiles":{"take_picture_view":{"retry":"Retry","take_picture":"Take picture"}}},"es":{"profiles":{"take_picture_view":{"retry":"Reintentar","take_picture":"Hacer foto"}}},"es-ES":{"profiles":{"take_picture_view":{"retry":"Reintentar","take_picture":"Hacer foto"}}},"fa":{"profiles":{"take_picture_view":{"retry":"تلاش دوباره","take_picture":"گرفتن عکس"}}},"fi":{"profiles":{"take_picture_view":{"retry":"Yritä uudelleen","take_picture":"Ota kuva"}}},"fr":{"profiles":{"take_picture_view":{"retry":"Réessayer","take_picture":"Prendre une photo"}}},"fr-CA":{"profiles":{"take_picture_view":{"retry":"Réessayer","take_picture":"Prendre une photo"}}},"he":{"profiles":{"take_picture_view":{"retry":"נסה/י שוב","take_picture":"צילום תמונה"}}},"ht":{"profiles":{"take_picture_view":{"retry":"Re eseye","take_picture":"Pran Foto"}}},"hu":{"profiles":{"take_picture_view":{"retry":"Újra","take_picture":"Fotó készítése"}}},"hy":{"profiles":{"take_picture_view":{"retry":"Փորձել կրկին","take_picture":"Օգտագործել պատկերը"}}},"is":{"profiles":{"take_picture_view":{"retry":"Reyna aftur","take_picture":"Taka mynd"}}},"it":{"profiles":{"take_picture_view":{"retry":"Riprova","take_picture":"Acquisisci immagine"}}},"ja":{"profiles":{"take_picture_view":{"retry":"再試行","take_picture":"写真を撮影"}}},"ko":{"profiles":{"take_picture_view":{"take_picture":"사진 촬영"}}},"mi":{"profiles":{"take_picture_view":{"retry":"Ngana anō","take_picture":"Tangohia Pikitia"}}},"nb":{"profiles":{"take_picture_view":{"retry":"Forsøk igjen","take_picture":"Ta bilde"}}},"nb-x-k12":{"profiles":{"take_picture_view":{"retry":"Forsøk igjen","take_picture":"Ta bilde"}}},"nl":{"profiles":{"take_picture_view":{"retry":"Opnieuw proberen","take_picture":"Een foto nemen"}}},"nn":{"profiles":{"take_picture_view":{"retry":"Prøv på nytt","take_picture":"Ta eit bile"}}},"pl":{"profiles":{"take_picture_view":{"retry":"Ponów próbę","take_picture":"Zrób zdjęcie"}}},"pt":{"profiles":{"take_picture_view":{"retry":"Tentar novamente","take_picture":"Tirar fotografia"}}},"pt-BR":{"profiles":{"take_picture_view":{"retry":"Tentar novamente","take_picture":"Tirar uma foto"}}},"ru":{"profiles":{"take_picture_view":{"retry":"Повторите попытку","take_picture":"Использовать изображение"}}},"sl":{"profiles":{"take_picture_view":{"retry":"Ponovno poskusi","take_picture":"Fotografiraj"}}},"sv":{"profiles":{"take_picture_view":{"retry":"Försök igen","take_picture":"Ta bild"}}},"sv-x-k12":{"profiles":{"take_picture_view":{"retry":"Försök igen","take_picture":"Ta bild"}}},"th":{"profiles":{"take_picture_view":{"retry":"ลองใหม่","take_picture":"ถ่ายภาพ"}}},"tr":{"profiles":{"take_picture_view":{"retry":"Tekrar","take_picture":"Bilgisayardan Fotoğraf Çek"}}},"uk":{"profiles":{"take_picture_view":{"retry":"Спробувати","take_picture":"Взяти зображення"}}},"zh-Hans":{"profiles":{"take_picture_view":{"retry":"重试","take_picture":"拍照"}}},"zh-Hant":{"profiles":{"take_picture_view":{"retry":"重試","take_picture":"拍照"}}}}'))
h["default"].scoped("profiles.take_picture_view")
var T=d.a.default
var G=T.template,L=T.templates=T.templates||{}
var B="/work/canvas-deploy/generated/ui/shared/avatar-dialog-view/jst/takePictureView"
L[B]=G((function(e,t,a,r,i){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
i=i||{}
var n,o,s,l="",c="function",u=this.escapeExpression,p=a.helperMissing
l+='<div class="webcam-preview-wrapper">\n  <img src="'
if(o=a.previewURL)n=o.call(t,{hash:{},data:i})
else{o=t&&t.previewURL
n=typeof o===c?o.call(t,{hash:{},data:i}):o}l+=u(n)+'" alt="" class="webcam-preview" />\n\n  <button type="button" class="btn retry-snapshot-btn">\n    '+u((o=a.t||t&&t.t,s={hash:{scope:"profiles.take_picture_view"},data:i},o?o.call(t,"retry","Retry",s):p.call(t,"t","retry","Retry",s)))+'\n  </button>\n</div>\n\n<div class="webcam-capture-wrapper">\n  <div class="webcam-clip">\n    <video autoplay class="webcam-live-preview pending"></video>\n  </div>\n\n  <button type="button" class="btn take-snapshot-btn">\n    '+u((o=a.t||t&&t.t,s={hash:{scope:"profiles.take_picture_view"},data:i},o?o.call(t,"take_picture","Take Picture",s):p.call(t,"t","take_picture","Take Picture",s)))+'\n  </button>\n</div>\n\n<canvas class="webcam-preview-staging-area hidden"></canvas>\n'
return l}))
var O=L[B]
var I={fromCanvas(e,t="image/jpeg"){const a=e.toDataURL(t)
const r=atob(a.split(",")[1])
const i=s.a.map(r,e=>e.charCodeAt(0))
const n=new Uint8Array(i)
return this._newBlob(n,t)},fromXHR(e,t="image/jpeg"){return this._newBlob(e,t)},_newBlob(e,t){const a=this._blobBuilder()
if(a){a.append(e)
return a.getBlob(t)}return new Blob([e],{type:t})},_blobBuilder(){if("function"===typeof window.Blob)return null
window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder
if("undefined"===typeof window.BlobBuilder)return null
return new window.BlobBuilder}}
class D extends p{static initClass(){this.optionProperty("avatarSize")
this.prototype.template=O
this.prototype.events={"click .take-snapshot-btn":"onSnapshot","click .retry-snapshot-btn":"onRetry"}
this.prototype.els={".webcam-live-preview":"$video",".webcam-clip":"$clip",".webcam-preview":"$preview",".webcam-capture-wrapper":"$captureWrapper",".webcam-preview-wrapper":"$previewWrapper",".webcam-preview-staging-area":"$canvas"}
this.prototype.getUserMedia=(navigator.getUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.webkitGetUserMedia||i.a.noop).bind(navigator)}setup(){return this.startMedia()}teardown(){delete this.img
delete this.preview
if(null!=this.stream?this.stream.stop:void 0)return null!=this.stream?this.stream.stop():void 0
if(null!=this.stream?this.stream.getTracks:void 0)return null!=this.stream?this.stream.getTracks().forEach(e=>e.stop()):void 0}startMedia(){return this.getUserMedia({video:true},this.displayMedia.bind(this),i.a.noop)}displayMedia(e){this.stream=e
this.$video.removeClass("pending")
try{this.$video.get(0).srcObject=this.stream}catch(e){this.$video.attr("src",window.URL.createObjectURL(this.stream))}return this.$video.on("onloadedmetadata loadedmetadata",s.a.once(this.onMediaMetadata).bind(this))}onMediaMetadata(e){let t
return t=window.setInterval(()=>{if(0===this.$video[0].videoHeight)return
window.clearInterval(t)
const e=s.a.min([this.$video.height(),this.$video.width()])
this.$clip.height(e).width(e)
if(this.$video.width()>e){const t=(this.$video.width()-e)/2*-1
return this.$video.css("left",t)}},100)}toggleView(){this.$captureWrapper.toggle()
this.$previewWrapper.toggle()
return this.trigger("ready",!!this.preview)}getImage(){const e=i.a.Deferred()
return e.resolve(this.img)}onSnapshot(){const e=this.$canvas[0]
const t=this.$video[0]
const a=new Image
const r=e.getContext("2d")
e.height=t.clientHeight
e.width=t.clientWidth
r.drawImage(t,0,0,e.width,e.height)
const i=e.toDataURL()
a.onload=i=>{const n=(t.clientWidth-this.$clip.width())/2
const o=(t.clientHeight-this.$clip.height())/2
e.height=this.$clip.height()
e.width=this.$clip.width()
r.drawImage(a,n,o,this.$clip.width(),this.$clip.height(),0,0,this.$clip.width(),this.$clip.height())
this.preview=e.toDataURL()
this.toggleView()
this.$preview.attr("src",this.preview)
return this.img=I.fromCanvas(e)}
return a.src=i}onRetry(e){return this.resetSnapshot()}resetSnapshot(){delete this.preview
delete this.img
return this.toggleView()}previewSrc(){if(!this.preview)return""
return this.preview.split(",")[1]}toJSON(){return{hasPreview:!!this.preview,previewURL:this.preview}}}D.initClass()
Object(f["a"])(JSON.parse('{"ar":{"profiles":{"gravatar_view":{"button":{"preview":"معاينة"},"enter_gravatar_email_below":"يرجى إدخال عنوان البريد الإلكتروني لـ *Gravatar* أدناه"}}},"ca":{"profiles":{"gravatar_view":{"button":{"preview":"Visualització prèvia"},"enter_gravatar_email_below":"introduïu la vostra adreça electrònica de *Gravatar* a continuació"}}},"cy":{"profiles":{"gravatar_view":{"button":{"preview":"Rhagolwg"},"enter_gravatar_email_below":"rhowch eich cyfeiriad e-bost *Gravatar* isod"}}},"da":{"profiles":{"gravatar_view":{"button":{"preview":"Eksempel"},"enter_gravatar_email_below":"indtast din *Gravatar* e-mailadresse nedenfor"}}},"da-x-k12":{"profiles":{"gravatar_view":{"button":{"preview":"Eksempel"},"enter_gravatar_email_below":"indtast din *Gravatar* e-mailadresse nedenfor"}}},"de":{"profiles":{"gravatar_view":{"button":{"preview":"Vorschau"},"enter_gravatar_email_below":"Geben Sie unten Ihre E-Mail-Adresse für *Gravatar* ein."}}},"el":{"profiles":{"gravatar_view":{"button":{"preview":"Προεπισκόπηση"},"enter_gravatar_email_below":"εισαγάγετε την ηλεκτρονική σας διεύθυνση *Gravatar* παρακάτω"}}},"en-AU":{"profiles":{"gravatar_view":{"button":{"preview":"Preview"},"enter_gravatar_email_below":"enter your *Gravatar* email address below"}}},"en-AU-x-unimelb":{"profiles":{"gravatar_view":{"button":{"preview":"Preview"},"enter_gravatar_email_below":"enter your *Gravatar* email address below"}}},"en-CA":{"profiles":{"gravatar_view":{"button":{"preview":"Preview"},"enter_gravatar_email_below":"enter your *Gravatar* email address below"}}},"en-GB":{"profiles":{"gravatar_view":{"button":{"preview":"Preview"},"enter_gravatar_email_below":"enter your *Gravatar* email address below"}}},"en-GB-x-lbs":{"profiles":{"gravatar_view":{"button":{"preview":"Preview"},"enter_gravatar_email_below":"enter your *Gravatar* email address below"}}},"en-GB-x-ukhe":{"profiles":{"gravatar_view":{"button":{"preview":"Preview"},"enter_gravatar_email_below":"enter your *Gravatar* email address below"}}},"es":{"profiles":{"gravatar_view":{"button":{"preview":"Vista previa"},"enter_gravatar_email_below":"Ingrese su dirección de correo electrónico de *Gravatar* a continuación"}}},"es-ES":{"profiles":{"gravatar_view":{"button":{"preview":"Vista previa"},"enter_gravatar_email_below":"Escriba su dirección de correo electrónico de *Gravatar* a continuación"}}},"fa":{"profiles":{"gravatar_view":{"button":{"preview":"پیش‌نمایش"},"enter_gravatar_email_below":"نشانی پست الکترونیکی *گرآواتار* خود را در قسمت زیر وارد کنید"}}},"fi":{"profiles":{"gravatar_view":{"button":{"preview":"Esikatsele"},"enter_gravatar_email_below":"syötä *Gravatar*-sähköpostiosoitteesi alle"}}},"fr":{"profiles":{"gravatar_view":{"button":{"preview":"Aperçu"},"enter_gravatar_email_below":"Indiquez votre adresse e-mail *Gravatar* ci-dessous"}}},"fr-CA":{"profiles":{"gravatar_view":{"button":{"preview":"Afficher un aperçu"},"enter_gravatar_email_below":"Indiquez votre adresse courriel *Gravatar* ci-dessous"}}},"he":{"profiles":{"gravatar_view":{"button":{"preview":"תצוגה מקדימה"},"enter_gravatar_email_below":"הזנת כתובת הדוא\\"ל *Gravatar* שלך מתחת"}}},"ht":{"profiles":{"gravatar_view":{"button":{"preview":"Apèsi"},"enter_gravatar_email_below":"antre yon adrès imèl *Gravatar* pi ba a"}}},"hu":{"profiles":{"gravatar_view":{"button":{"preview":"Előnézet"},"enter_gravatar_email_below":"Adja meg a *Gravatar* e-mail címét!"}}},"hy":{"profiles":{"gravatar_view":{"button":{"preview":"Նախնական դիտում "},"enter_gravatar_email_below":"Ստորև մուտքագրեք *Gravatar* էլեկտրոնային փոստի ձեր հասցեն"}}},"is":{"profiles":{"gravatar_view":{"button":{"preview":"Forskoðun"},"enter_gravatar_email_below":"Skráðu *Gravatar* netfangið þitt fyrir neðan"}}},"it":{"profiles":{"gravatar_view":{"button":{"preview":"Anteprima"},"enter_gravatar_email_below":"inserisci il tuo indirizzo email *Gravatar* di seguito"}}},"ja":{"profiles":{"gravatar_view":{"button":{"preview":"プレビュー"},"enter_gravatar_email_below":"以下に *Gravatar* の電子メール アドレスを入力してください"}}},"ko":{"profiles":{"gravatar_view":{"button":{"preview":"미리 보기"},"enter_gravatar_email_below":"*Gravatar* 이메일 주소를 입력하십시오"}}},"mi":{"profiles":{"gravatar_view":{"button":{"preview":"Arokite"},"enter_gravatar_email_below":"whakauru tō * Gravatar * wāhitau īmēra i raro"}}},"nb":{"profiles":{"gravatar_view":{"button":{"preview":"Forhåndsvisning"},"enter_gravatar_email_below":"legg inn din *Gravatar* e-postadresse nedenfor:"}}},"nb-x-k12":{"profiles":{"gravatar_view":{"button":{"preview":"Forhåndsvisning"},"enter_gravatar_email_below":"legg inn din *Gravatar* e-postadresse nedenfor:"}}},"nl":{"profiles":{"gravatar_view":{"button":{"preview":"Voorbeeld"},"enter_gravatar_email_below":"jouw *Gravatar* e-mailadres hieronder invoeren"}}},"nn":{"profiles":{"gravatar_view":{"button":{"preview":"Førehandsvising"},"enter_gravatar_email_below":"skriv inn *Gravatar*-e-postadressa nedanfor"}}},"pl":{"profiles":{"gravatar_view":{"button":{"preview":"Podgląd"},"enter_gravatar_email_below":"Podaj adres email *Gravatara* poniżej"}}},"pt":{"profiles":{"gravatar_view":{"button":{"preview":"Pré-visualizar"},"enter_gravatar_email_below":"introduza o endereço de e-mail do seu *Gravatar* abaixo"}}},"pt-BR":{"profiles":{"gravatar_view":{"button":{"preview":"Pré-visualização"},"enter_gravatar_email_below":"insira seu endereço de e-mail *Gravatar* abaixo"}}},"ru":{"profiles":{"gravatar_view":{"button":{"preview":"Предварительный просмотр"},"enter_gravatar_email_below":"введите адрес электронной почты *Gravatar* ниже"}}},"sl":{"profiles":{"gravatar_view":{"button":{"preview":"Predogled"},"enter_gravatar_email_below":"spodaj vnesite svoj e-poštni naslov *Gravatar*"}}},"sv":{"profiles":{"gravatar_view":{"button":{"preview":"Förhandsgranska"},"enter_gravatar_email_below":"ange din *Gravatar*-e-postadress nedan"}}},"sv-x-k12":{"profiles":{"gravatar_view":{"button":{"preview":"Förhandsgranska"},"enter_gravatar_email_below":"ange din *Gravatar*-e-postadress nedan"}}},"th":{"profiles":{"gravatar_view":{"button":{"preview":"แสดงตัวอย่าง"},"enter_gravatar_email_below":"กรอกอีเมลแอดเดรส *Gravatar* ของคุณด้านล่าง"}}},"tr":{"profiles":{"gravatar_view":{"button":{"preview":"Ön İzleme"},"enter_gravatar_email_below":"*Gravatar* eposta adresinizi aşağıya girin"}}},"uk":{"profiles":{"gravatar_view":{"button":{"preview":"Попередній перегляд"},"enter_gravatar_email_below":"уведіть ваш *Gravatar* email адресу нижче"}}},"zh-Hans":{"profiles":{"gravatar_view":{"button":{"preview":"预览"},"enter_gravatar_email_below":"在下面输入您的 *Gravatar* 电子邮件地址"}}},"zh-Hant":{"profiles":{"gravatar_view":{"button":{"preview":"預覽"},"enter_gravatar_email_below":"在下面輸入您的*Gravatar*電郵地址"}}}}'))
h["default"].scoped("profiles.gravatar_view")
var M=d.a.default
var F=M.template,$=M.templates=M.templates||{}
var N="/work/canvas-deploy/generated/ui/shared/avatar-dialog-view/jst/gravatarView"
$[N]=F((function(e,t,a,r,i){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
i=i||{}
var n,o,s="",l=a.helperMissing,c=this.escapeExpression
s+='<img class="content-box gravatar-preview-image" aria-label="gravatar"></img>\n<div class="content-box-mini gravatar-label">\n  <label for="gravatar-preview-input">\n    '+c((n=a.t||t&&t.t,o={hash:{w0:'<a href="http://gravatar.com/" target="_blank">$1</a>',scope:"profiles.gravatar_view"},data:i},n?n.call(t,"enter_gravatar_email_below","enter your *Gravatar* email address below",o):l.call(t,"t","enter_gravatar_email_below","enter your *Gravatar* email address below",o)))+'\n  </label>\n</div>\n<div class="input-append">\n  <input type="text" class="gravatar-preview-input" id="gravatar-preview-input" />\n  <button class="btn gravatar-preview-btn">\n    '+c((n=a.t||t&&t.t,o={hash:{scope:"profiles.gravatar_view"},data:i},n?n.call(t,"button.preview","Preview",o):l.call(t,"t","button.preview","Preview",o)))+"\n  </button>\n</div>\n"
return s}))
var H=$[N]
var V=a("aCH8")
var K=a.n(V)
a("dhbk")
class Y extends p{static initClass(){this.optionProperty("avatarSize")
this.prototype.template=H
this.prototype.events={"click .gravatar-preview-btn":"onPreview","keydown .gravatar-preview-input":"onInputKeyDown"}
this.prototype.els={".gravatar-preview-image":"$gravatarPreviewImage",".gravatar-preview-input":"$gravatarPreviewInput"}}onPreview(e){e.preventDefault()
return this._updatePreviewFromInput()}onInputKeyDown(e){if(13===e.keyCode){e.preventDefault()
return this._updatePreviewFromInput()}}setup(){const e=null!=ENV.PROFILE?ENV.PROFILE.primary_email:void 0
if(e){this.$gravatarPreviewInput.val(e)
return this._updatePreviewFromInput()}}updateAvatar(){const e="/api/v1/users/self"
const t={"user[avatar][url]":this._gravatarUrl(this._gravatarHashFromInput(),this.avatarSize.w)}
return i.a.ajaxJSON(e,"PUT",t)}getImage(){throw"GravatarView does not support getImage()"}_updatePreviewFromInput(){const e=this._gravatarHashFromInput()
return this._setGravatarPreview(this._gravatarUrl(e))}_gravatarHashFromInput(){const e=this._prepareEmail(this.$gravatarPreviewInput.val())
return K()(e)}_gravatarUrl(e,t=200,a="identicon"){return`https://secure.gravatar.com/avatar/${e}?s=${t}&d=${a}`}_setGravatarPreview(e){this.$gravatarPreviewImage.attr("src",e)
return this.trigger("ready")}_prepareEmail(e){return e.trim().toLowerCase()}}Y.initClass()
var W=a("EyBU")
Object(f["a"])(JSON.parse('{"ar":{"from_gravatar_58372d5a":"من Gravatar","take_a_picture_d582acf1":"التقاط صورة","upload_a_picture_9f5f6e3c":"تحميل ملف"},"ca":{"from_gravatar_58372d5a":"Del Gravatar","take_a_picture_d582acf1":"Fes una foto","upload_a_picture_9f5f6e3c":"Carrega una imatge"},"cy":{"from_gravatar_58372d5a":"O Gravatar","take_a_picture_d582acf1":"Tynnu Llun","upload_a_picture_9f5f6e3c":"Llwytho llun i fyny"},"da":{"from_gravatar_58372d5a":"Fra Gravatar","take_a_picture_d582acf1":"Tag et billede","upload_a_picture_9f5f6e3c":"Upload et billede"},"da-x-k12":{"from_gravatar_58372d5a":"Fra Gravatar","take_a_picture_d582acf1":"Tag et billede","upload_a_picture_9f5f6e3c":"Upload et billede"},"de":{"from_gravatar_58372d5a":"Von Gravatar","take_a_picture_d582acf1":"Ein Foto machen","upload_a_picture_9f5f6e3c":"Ein Bild hochladen"},"el":{"from_gravatar_58372d5a":"Από Gravatar","take_a_picture_d582acf1":"Λήψη Φωτογραφίας","upload_a_picture_9f5f6e3c":"Μεταφόρτωση Φωτογραφίας"},"en-AU":{"from_gravatar_58372d5a":"From Gravatar","take_a_picture_d582acf1":"Take a Picture","upload_a_picture_9f5f6e3c":"Upload a Picture"},"en-AU-x-unimelb":{"from_gravatar_58372d5a":"From Gravatar","take_a_picture_d582acf1":"Take a Picture","upload_a_picture_9f5f6e3c":"Upload a Picture"},"en-CA":{"from_gravatar_58372d5a":"From Gravatar","take_a_picture_d582acf1":"Take a Picture","upload_a_picture_9f5f6e3c":"Upload a Picture"},"en-GB":{"from_gravatar_58372d5a":"From Gravatar","take_a_picture_d582acf1":"Take a picture","upload_a_picture_9f5f6e3c":"Upload a picture"},"en-GB-x-lbs":{"from_gravatar_58372d5a":"From Gravatar","take_a_picture_d582acf1":"Take a picture","upload_a_picture_9f5f6e3c":"Upload a picture"},"en-GB-x-ukhe":{"from_gravatar_58372d5a":"From Gravatar","take_a_picture_d582acf1":"Take a picture","upload_a_picture_9f5f6e3c":"Upload a picture"},"es":{"from_gravatar_58372d5a":"Desde Gravatar","take_a_picture_d582acf1":"Hacer una foto","upload_a_picture_9f5f6e3c":"Cargar una imagen"},"es-ES":{"from_gravatar_58372d5a":"Desde Gravatar","take_a_picture_d582acf1":"Realizar una foto","upload_a_picture_9f5f6e3c":"Cargar una imagen"},"fa":{"from_gravatar_58372d5a":"از گرآواتار","take_a_picture_d582acf1":"گرفتن عکس","upload_a_picture_9f5f6e3c":"بارگذاری عکس"},"fi":{"from_gravatar_58372d5a":"Gravatar-sovelluksesta","take_a_picture_d582acf1":"Ota kuva","upload_a_picture_9f5f6e3c":"Lataa kuva"},"fr":{"from_gravatar_58372d5a":"Depuis Gravatar","take_a_picture_d582acf1":"Prendre une photo","upload_a_picture_9f5f6e3c":"Fournir une image"},"fr-CA":{"from_gravatar_58372d5a":"Depuis Gravatar","take_a_picture_d582acf1":"Prendre une photo","upload_a_picture_9f5f6e3c":"Fournir une image"},"he":{"from_gravatar_58372d5a":"מ Gravatar","take_a_picture_d582acf1":"צילום תמונה","upload_a_picture_9f5f6e3c":"העלאת תמונה"},"ht":{"from_gravatar_58372d5a":"De Gravatar","take_a_picture_d582acf1":"Pran yon Foto","upload_a_picture_9f5f6e3c":"Transfere yon Foto"},"hu":{"from_gravatar_58372d5a":"Gravatarról származó","take_a_picture_d582acf1":"Fotó készítése","upload_a_picture_9f5f6e3c":"Fotó feltöltése"},"hy":{"from_gravatar_58372d5a":"Gravatar-ից","take_a_picture_d582acf1":"Օգտագործել պատկերը","upload_a_picture_9f5f6e3c":"Բեռնել պատկերը"},"is":{"from_gravatar_58372d5a":"Frá Gravatar","take_a_picture_d582acf1":"Taka mynd","upload_a_picture_9f5f6e3c":"Hlaða upp mynd"},"it":{"from_gravatar_58372d5a":"Da Gravatar","take_a_picture_d582acf1":"Acquisisci un\'immagine","upload_a_picture_9f5f6e3c":"Carica un\'immagine"},"ja":{"from_gravatar_58372d5a":"Gravatar から","take_a_picture_d582acf1":"写真を撮影","upload_a_picture_9f5f6e3c":"画像をアップロード"},"ko":{"from_gravatar_58372d5a":"Gravatar 사용","take_a_picture_d582acf1":"사진 촬영","upload_a_picture_9f5f6e3c":"사진 업로드"},"mi":{"from_gravatar_58372d5a":"Mai i Gravatar","take_a_picture_d582acf1":"Tango he Pikitia","upload_a_picture_9f5f6e3c":"Tukuake he Pikitia"},"nb":{"from_gravatar_58372d5a":"Fra Gravatar","take_a_picture_d582acf1":"Ta et bilde","upload_a_picture_9f5f6e3c":"Last opp et bilde"},"nb-x-k12":{"from_gravatar_58372d5a":"Fra Gravatar","take_a_picture_d582acf1":"Ta et bilde","upload_a_picture_9f5f6e3c":"Last opp et bilde"},"nl":{"from_gravatar_58372d5a":"Van Gravatar","take_a_picture_d582acf1":"Een afbeelding nemen","upload_a_picture_9f5f6e3c":"Een afbeelding uploaden"},"nn":{"from_gravatar_58372d5a":"Frå Gravatar","take_a_picture_d582acf1":"Ta eit bilde","upload_a_picture_9f5f6e3c":"Last opp eit bilde"},"pl":{"from_gravatar_58372d5a":"Z grawatara","take_a_picture_d582acf1":"Zrób zdjęcie","upload_a_picture_9f5f6e3c":"Prześlij zdjęcie"},"pt":{"from_gravatar_58372d5a":"Do Gravatar","take_a_picture_d582acf1":"Tirar uma fotografia","upload_a_picture_9f5f6e3c":"Carregar uma fotografia"},"pt-BR":{"from_gravatar_58372d5a":"A partir de Gravatar","take_a_picture_d582acf1":"Tirar uma foto","upload_a_picture_9f5f6e3c":"Enviar uma foto"},"ru":{"from_gravatar_58372d5a":"Из Gravatar","take_a_picture_d582acf1":"Использовать изображение","upload_a_picture_9f5f6e3c":"Загрузить изображение"},"sl":{"from_gravatar_58372d5a":"Iz profila Gravatar","take_a_picture_d582acf1":"Fotografiraj","upload_a_picture_9f5f6e3c":"Naloži sliko"},"sv":{"from_gravatar_58372d5a":"Från Gravatar","take_a_picture_d582acf1":"Ta en bild","upload_a_picture_9f5f6e3c":"Ladda upp en bild"},"sv-x-k12":{"from_gravatar_58372d5a":"Från Gravatar","take_a_picture_d582acf1":"Ta en bild","upload_a_picture_9f5f6e3c":"Ladda upp en bild"},"th":{"from_gravatar_58372d5a":"จาก Gravatar","take_a_picture_d582acf1":"ถ่ายภาพ","upload_a_picture_9f5f6e3c":"อัพโหลดภาพ"},"tr":{"from_gravatar_58372d5a":"Gravatar\'dan al","take_a_picture_d582acf1":"Bilgisayardan Fotoğraf Çek","upload_a_picture_9f5f6e3c":"Fotoğraf yükle"},"uk":{"from_gravatar_58372d5a":"З Gravatar","take_a_picture_d582acf1":"Вибрати зображення","upload_a_picture_9f5f6e3c":"Завантажити зображення"},"zh-Hans":{"from_gravatar_58372d5a":"来自 Gravatar","take_a_picture_d582acf1":"拍照","upload_a_picture_9f5f6e3c":"上传图片"},"zh-Hant":{"from_gravatar_58372d5a":"來自 Gravatar","take_a_picture_d582acf1":"拍照","upload_a_picture_9f5f6e3c":"上傳圖片"}}'))
h["default"].scoped("profiles.avatar_dialog")
var q=d.a.default
var X=q.template,J=q.templates=q.templates||{}
var Z="/work/canvas-deploy/generated/ui/shared/avatar-dialog-view/jst/avatarDialog"
J[Z]=X((function(e,t,a,r,i){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
i=i||{}
var n,o="",s=a.helperMissing,l=this.escapeExpression,c=this
function u(e,t){var r,i,n=""
n+='\n      <li class="active">\n        <a href="#upload-picture">'+l((r=a.t||e&&e.t,i={hash:{i18n_inferred_key:true},data:t},r?r.call(e,"upload_a_picture_9f5f6e3c","Upload a Picture",i):s.call(e,"t","upload_a_picture_9f5f6e3c","Upload a Picture",i)))+"</a>\n      </li>\n    "
return n}function p(e,t){var r,i,n=""
n+='\n      <li>\n        <a href="#take-picture">'+l((r=a.t||e&&e.t,i={hash:{i18n_inferred_key:true},data:t},r?r.call(e,"take_a_picture_d582acf1","Take a Picture",i):s.call(e,"t","take_a_picture_d582acf1","Take a Picture",i)))+"</a>\n      </li>\n    "
return n}function _(e,t){var r,i,n=""
n+='\n      <li>\n        <a href="#from-gravatar">'+l((r=a.t||e&&e.t,i={hash:{i18n_inferred_key:true},data:t},r?r.call(e,"from_gravatar_58372d5a","From Gravatar",i):s.call(e,"t","from_gravatar_58372d5a","From Gravatar",i)))+"</a>\n      </li>\n    "
return n}o+='<div class="avatar-nav">\n  <ul class="nav nav-pills">\n    '
n=a["if"].call(t,t&&t.hasFileReader,{hash:{},inverse:c.noop,fn:c.program(1,u,i),data:i});(n||0===n)&&(o+=n)
o+="\n    "
n=a["if"].call(t,t&&t.hasGetUserMedia,{hash:{},inverse:c.noop,fn:c.program(3,p,i),data:i});(n||0===n)&&(o+=n)
o+="\n    "
n=a["if"].call(t,t&&t.enableGravatar,{hash:{},inverse:c.noop,fn:c.program(5,_,i),data:i});(n||0===n)&&(o+=n)
o+='\n  </ul>\n</div>\n\n<div class="avatar-content">\n  <div class="active" id="upload-picture"></div>\n  <div id="take-picture" class="text-center"></div>\n  <div id="from-gravatar" class="text-center"></div>\n</div>\n'
return o}))
var Q=J[Z]
class ee extends l["a"]{constructor(...e){super(...e)
this.updateDomAvatar=e=>{i()(".profile_pic_link, .profile-link").css("background-image",`url('${e}')`)
return this.close()}
this.checkFocusDeferred=()=>{i.a.contains(this.$el[0],document.activeElement)&&i()(document.activeElement).is(":visible")||i()(".ui-dialog-titlebar-close").focus()}}static initClass(){this.prototype.template=Q
this.prototype.AVATAR_SIZE={h:128,w:128}
this.child("uploadFileView","#upload-picture")
this.child("takePictureView","#take-picture")
this.child("gravatarView","#from-gravatar")
this.prototype.messages={selectAvatar:n["a"].t("buttons.select_profile_picture","Select Profile Picture"),cancel:n["a"].t("#buttons.cancel","Cancel"),selectImage:n["a"].t("buttons.save","Save"),selectingImage:n["a"].t("buttons.selecting_image","Selecting Image...")}
this.prototype.events={"click .nav-pills a":"onNav","click .select-photo-link":"onUploadClick","change #selected-photo":"onSelectAvatar"}}dialogOptions(){return{title:this.messages.selectAvatar,buttons:[{text:this.messages.cancel,click:(...e)=>this.cancel(...e)},{text:this.messages.selectImage,class:"btn-primary select_button",click:()=>this.updateAvatar()}],height:500,width:600}}initialize(){this.uploadFileView=new P({avatarSize:this.AVATAR_SIZE})
this.takePictureView=new D({avatarSize:this.AVATAR_SIZE})
this.gravatarView=new Y({avatarSize:this.AVATAR_SIZE})
return super.initialize(...arguments)}show(){this.render()
s.a.each(this.children,e=>this.listenTo(e,"ready",this.onReady))
this.togglePane(this.$(".nav-pills a")[0])
return super.show(...arguments)}cancel(){this.teardown()
return super.cancel(...arguments)}close(){this.teardown()
this.enableSelectButton()
return super.close(...arguments)}getImage(){return(this.currentView||this.$(".avatar-content > div:first-child").data("view")).getImage()}updateAvatar(){this.disableSelectButton()
return this.currentView&&this.currentView.updateAvatar?this.viewUpdateAvatar():this.imageUpdateAvatar()}enableSelectButton(){i()(".select_button").prop("disabled",false).removeClass("ui-state-hover").text(this.messages.selectImage)}disableSelectButton(){i()(".select_button").prop("disabled",true).text(this.messages.selectingImage)}viewUpdateAvatar(){return this.currentView.updateAvatar().then(e=>this.updateDomAvatar(e.avatar_url))}imageUpdateAvatar(){return i.a.when(this.getImage(),this.preflightRequest()).then(this.onPreflight.bind(this))}handleErrorUpdating(e){if(e){const t=(()=>{try{return JSON.parse(e).errors}catch(e){return}})()
if(t){const e=(e,t)=>e+t.message
const a=s.a.isString(t.base)?t.base:s.a.isArray(t.base)?t.base.reduce(e,""):n["a"].t("Your profile photo could not be uploaded. You may have exceeded your upload limit.")
i.a.flashError(a)
return this.enableSelectButton()}}}preflightRequest(){return i.a.post("/files/pending",{name:"profile.jpg",format:"text",no_redirect:true,"attachment[on_duplicate]":"overwrite","attachment[folder_id]":ENV.folder_id,"attachment[filename]":"profile.jpg","attachment[context_code]":"user_"+ENV.current_user_id}).fail(e=>this.handleErrorUpdating(e.responseText))}onPreflight(e,t){const a=t[0]
return Object(W["completeUpload"])(a,e,{filename:"profile.jpg",includeAvatar:true}).then(e=>this.onUploadSuccess(e)).catch(e=>this.handleErrorUpdating(e.responseText))}onUploadSuccess(e){return this.waitAndSaveUserAvatar(e.avatar.token,e.avatar.url,0)}waitAndSaveUserAvatar(e,t,a){return i.a.getJSON("/api/v1/users/self/avatars").then(r=>{const i=s.a.find(r,t=>t.token===e)
return i?this.saveUserAvatar(e,t):a<50?window.setTimeout(()=>this.waitAndSaveUserAvatar(e,t,a+1),100):this.handleErrorUpdating(JSON.stringify({errors:{base:n["a"].t("Profile photo save failed too many times")}}))})}saveUserAvatar(e,t){return i.a.ajax("/api/v1/users/self",{data:{"user[avatar][token]":e},dataType:"json",type:"PUT"}).then(s.a.partial(this.updateDomAvatar,t))}onNav(e){e.preventDefault()
return this.togglePane(e.target)}togglePane(e){const t=this.$(e).parent()
const a=this.$(e.getAttribute("href"))
t.siblings().removeClass("active")
t.addClass("active")
this.teardown()
i()(".select_button").prop("disabled",true)
this.$(".avatar-content div").removeClass("active")
te(a.addClass("active").data("view"),e=>e.setup())
return this.currentView=a.data("view")}onReady(e=true){i()(".select_button").prop("disabled",!e)
return this.checkFocus()}checkFocus(){return s.a.defer(this.checkFocusDeferred)}teardown(){return s.a.each(this.children,e=>e.teardown())}toJSON(){const e=!!window.FileReader
const t=!!(navigator.getUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.webkitGetUserMedia)
return{hasFileReader:e,hasGetUserMedia:t,enableGravatar:ENV.enable_gravatar}}}ee.initClass()
function te(e,t){return"undefined"!==typeof e&&null!==e?t(e):void 0}class ae{constructor(e){this._openAvatarDialog=e=>{null!=e&&e.preventDefault()
this.avatarDialog||(this.avatarDialog=new ee)
return this.avatarDialog.show()}
this.$el=i()(e)
this._attachEvents()}_attachEvents(){return this.$el.on("click",this._openAvatarDialog)}}},ANhw:function(e,t){a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24)
for(var t=0;t<e.length;t++)e[t]=r.endian(e[t])
return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()))
return t},bytesToWords:function(e){for(var t=[],a=0,r=0;a<e.length;a++,r+=8)t[r>>>5]|=e[a]<<24-r%32
return t},wordsToBytes:function(e){for(var t=[],a=0;a<32*e.length;a+=8)t.push(e[a>>>5]>>>24-a%32&255)
return t},bytesToHex:function(e){for(var t=[],a=0;a<e.length;a++){t.push((e[a]>>>4).toString(16))
t.push((15&e[a]).toString(16))}return t.join("")},hexToBytes:function(e){for(var t=[],a=0;a<e.length;a+=2)t.push(parseInt(e.substr(a,2),16))
return t},bytesToBase64:function(e){for(var t=[],r=0;r<e.length;r+=3){var i=e[r]<<16|e[r+1]<<8|e[r+2]
for(var n=0;n<4;n++)8*r+6*n<=8*e.length?t.push(a.charAt(i>>>6*(3-n)&63)):t.push("=")}return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"")
for(var t=[],r=0,i=0;r<e.length;i=++r%4){if(0==i)continue
t.push((a.indexOf(e.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|a.indexOf(e.charAt(r))>>>6-2*i)}return t}},e.exports=r
var a,r},BEtg:function(e,t){e.exports=function(e){return null!=e&&(a(e)||r(e)||!!e._isBuffer)}
function a(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&a(e.slice(0,0))}},EyBU:function(e,t,a){"use strict"
a.r(t)
a.d(t,"uploadFile",(function(){return h}))
a.d(t,"completeUpload",(function(){return f}))
a.d(t,"submissionCommentAttachmentsUpload",(function(){return v}))
a.d(t,"uploadFiles",(function(){return m}))
var r=a("VTBJ")
var i=a("BrAc")
var n=a("Qyje")
var o=a.n(n)
var s=a("HGxv")
var l=a("8WeW")
Object(l["a"])(JSON.parse('{"ar":{"canvas_failed_to_complete_the_upload_864a4c0f":"فشل Canvas في إكمال التحميل.","canvas_failed_to_initiate_the_upload_8e3824d5":"فشل Canvas في بدء التحميل.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"يتعذر نقل الملف إلى خدمة التخزين. قد تكون الخدمة معطلة أو قد تحتاج إلى إعادة تسجيل الدخول إلى Canvas."},"ca":{"canvas_failed_to_complete_the_upload_864a4c0f":"El Canvas no ha pogut completar la càrrega.","canvas_failed_to_initiate_the_upload_8e3824d5":"El Canvas no ha pogut iniciar la càrrega.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"No es pot transmetre el fitxer al servei d\'emmagatzematge. Pot ser que el servei no funcioni o que hàgiu de tornar a iniciar la sessió al Canvas."},"cy":{"canvas_failed_to_complete_the_upload_864a4c0f":"Mae Canvas wedi methu cwblhau’r broses llwytho i fyny.","canvas_failed_to_initiate_the_upload_8e3824d5":"Mae Canvas wedi methu rhoi’r broses llwytho i fyny ar waith.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Doedd dim modd trosglwyddo ffeil i’r gwasanaeth storio. Efallai nad yw’r gwasanaeth ar gael ar hyn o bryd, neu efallai y bydd angen i chi fewngofnodi eto i Canvas."},"da":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikke afslutte uploaden.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke påbegynde uploaden.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kunne ikke overføre filen til lagertjenesten. Tjenesten kan være nede, eller du skal måske logge ind på Canvas igen."},"da-x-k12":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikke fuldføre uploaden.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke påbegynde uploaden.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kunne ikke overføre filen til lagertjenesten. Tjenesten kan være nede, eller du skal måske logge ind på Canvas igen."},"de":{"canvas_failed_to_complete_the_upload_864a4c0f":"Upload fehlgeschlagen","canvas_failed_to_initiate_the_upload_8e3824d5":"Initialisierung des Upload fehlgeschlagen","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Übertragung der Datei in den Speicher-Service ist fehlgeschlagen. Entweder ist der Service heruntergefahren oder Sie müssen sich erneut bei Canvas anmelden."},"en-AU":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-AU-x-unimelb":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-CA":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB-x-lbs":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB-x-ukhe":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"es":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas no pudo completar la carga.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas no pudo iniciar la carga.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"No se pudo transmitir el archivo al servicio de almacenamiento. Es posible que el servicio no esté funcionando o que tenga que volver a iniciar sesión en Canvas."},"es-ES":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas no ha podido completar la carga.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas no ha podido iniciar la carga.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"No se ha podido transmitir el archivo al servicio de almacenamiento. Es posible que el servicio no esté funcionando o que tenga que volver a iniciar sesión en Canvas."},"fa":{"canvas_failed_to_complete_the_upload_864a4c0f":"کانواس نتوانست بارگذاری را انجام دهد.","canvas_failed_to_initiate_the_upload_8e3824d5":"کانواس موفق به آپلود نشد","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"انتقال فایل به سرویس ذخیره سازی امکان پذیر نیست. ممکن است سرویس از کار افتاده باشد و یا لازم باشد دوباره وارد کانواس شوید."},"fi":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas ei onnistunut suorittamaan latausta loppuun.","canvas_failed_to_initiate_the_upload_8e3824d5":"Latauksen aloittaminen epäonnistui.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Tiedoston siirto tallennuspalveluun epäonnistui. Palvelu saattaa olla alhaalla tai sinun täytyy ehkä kirjautua uudelleen Canvasiin."},"fr":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas n\'a pas réussi à terminer le téléchargement.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas n\'a pas réussi à lancer le téléchargement.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Impossible de transmettre le fichier au service de stockage. Le service peut être en panne ou vous devez peut-être vous reconnecter à Canvas."},"fr-CA":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas a échoué de conclure le téléversement.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas n\'a pu commencer le téléversement.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Impossible d’envoyer le fichier au service de stockage. Le service peut être inactif ou vous pourriez avoir besoin de vous connecter de nouveau à Canvas."},"ht":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas pa reyisi fini telechajman an.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas pa reyisi lanse telechajman an.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Enposib pou transmèt fichye nan sèvis estokaj la. Petèt ke sèvis la an pàn oswa ou ka bezwen rekonekte sou Canvas."},"hu":{"canvas_failed_to_complete_the_upload_864a4c0f":"A Canvas nem tudta a feltöltést feldolgozni","canvas_failed_to_initiate_the_upload_8e3824d5":"A Canvas nem tudta elindítani a feltöltést.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Nem sikerült elküldeni a fájlt a tár szolgáltatásnak. Lehet, hogy a szolgáltatás nem működik, vagy újra be kell lépnie a Canvas-ba."},"is":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas tókst ekki að klára upphalið","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas gat ekki byrjað upphalið.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Ekki tókst að senda skjal í geymslu. Annaðhvort liggur þjónustan niðri eða þú þarft að endurinnskrá þig á Canvas."},"it":{"canvas_failed_to_complete_the_upload_864a4c0f":"Impossibile completare il caricamento in Canvas.","canvas_failed_to_initiate_the_upload_8e3824d5":"Impossibile inizializzare il caricamento in Canvas.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Impossibile trasmettere il file al servizio di archiviazione. Il servizio potrebbe essere inattivo o potrebbe essere necessario effettuare nuovamente l\'accesso a Canvas."},"ja":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas はアップロードを完了できませんでした。","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas はアップロードを開始できませんでした。","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"ストレージサービスにファイルを送信できません。サービスが停止しているか、Canvas に再度ログインする必要があるかもしれません。"},"mi":{"canvas_failed_to_complete_the_upload_864a4c0f":"I rahua a Canvas ki te whakaoti i te tukuake.","canvas_failed_to_initiate_the_upload_8e3824d5":"I rahua a Canvas ki te tīmata i te tukuake.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kāore e taea te tuku kōnae ki te ratonga rokiroki. Ka mutu te ratonga, ka hiahia pea koe ki te whakauru atu anō ki Canvas."},"nb":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kan ikke fullføre opplastingen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke starte opplastingen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kan ikke overføre fil til lagringsenhet. Denne tjeneste kan være nede eller du må kanskje logge på Canvas på nytt."},"nb-x-k12":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikke fullføre opplastingen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke starte opplastingen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kunne ikke overføre fil til lagringsenhet. Tjeneste kan være nede eller du må kanskje logge på Canvas på nytt."},"nl":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kan de upload niet uitvoeren.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kan de upload niet initiëren.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kan bestand niet overzetten naar de opslagservice. Misschien is de service niet geactiveerd of moet je je opnieuw aanmelden bij Canvas."},"nn":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikkje fullføre opplastinga.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikkje starte opplastinga.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kan ikkje overføre fil til lagringsteneste. Tenesta kan vere nede eller du må logge inn i Canvas på nytt."},"pl":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas nie może ukończyć przesyłania.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas nie może rozpocząć przesyłania.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Nie można przesłać pliku do usługi przechowywania. Usługa może być niedostępna lub wymagane jest ponowne zalogowanie w Canvas."},"pt":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas falhou ao concluir o carregamento.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas falhou ao iniciar o carregamento.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Não é possível transmitir o ficheiro para o serviço de armazenamento. O serviço pode estar inativo ou você pode precisar fazer o login novamente no Canvas."},"pt-BR":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas falhou em importar o carregamento.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas falhou em iniciar o carregamento.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Incapaz de transmitir o arquivo para o serviço de armazenamento. O serviço pode estar interrompido ou você precisa fazer login novamente no Canvas."},"ru":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas не удается завершить отправку.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas не удается запустить отправку.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Невозможно передать файл на устройство хранения. Сервис может быть отключен, или вам может быть необходимо выйти и снова войти в Canvas."},"sl":{"canvas_failed_to_complete_the_upload_864a4c0f":"Zaključevanje nalaganja v sistemu Canvas ni uspelo.","canvas_failed_to_initiate_the_upload_8e3824d5":"Zagon nalaganja v sistemu Canvas ni uspel.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Datoteke ni mogoče prenesti v storitev shranjevanja. Storitev morda ne deluje ali pa se morate znova prijaviti v sistem Canvas."},"sv":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunde inte slutföra uppladdningen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunde inte initiera uppladdningen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Det går inte att överföra filen till lagringstjänsten. Tjänsten kan ligga nere, eller kan du behöva logga in till Canvas på nytt."},"sv-x-k12":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunde inte slutföra uppladdningen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunde inte initiera uppladdningen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Det går inte att överföra filen till lagringstjänsten. Tjänsten kan ligga nere, eller kan du behöva logga in till Canvas på nytt."},"th":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas ไม่สามารถทำการอัพโหลดให้เสร็จสิ้น","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas ไม่สามารถเริ่มการอัพโหลดได้","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"ไม่สามารถส่งไฟล์ไปยังบริการจัดเก็บข้อมูล บริการอาจไม่พร้อมใช้งานหรือคุณอาจต้องล็อกอินไปยัง Canvas ใหม่"},"zh-Hans":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas 无法完成上传。","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas 无法启动上传。","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"无法将文件传输到存储服务。服务可能中断，或者您可能需要重新登录到 Canvas。"},"zh-Hant":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas 無法完成上傳。","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas 無法啟動上傳。","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"無法將檔案傳輸到儲存空間服務。該服務可能已關閉，或者您可能需要重新登入 Canvas。"}}'))
a("jQeR")
a("0sPK")
var c=s["default"].scoped("upload_file")
var u=a("gBVS")
function p(e){if("Network Error"===e.message){const t=new Error(c.t("Canvas failed to initiate the upload."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function _(e){if("Network Error"===e.message){const t=new Error(c.t("Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function d(e){if("Network Error"===e.message){const t=new Error(c.t("Canvas failed to complete the upload."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function h(e,t,a,r=i["a"],n){if(!a&&!t.url)throw new Error("expected either a file to upload or a url to clone",{file:a,preflightData:t})
if(a&&t.url)throw new Error("can't upload with both a file object and a url to clone",{file:a,preflightData:t})
t.no_redirect=true
t["attachment[context_code]"]&&(t=o.a.stringify(t))
return r.post(e,t).catch(p).then(e=>f(e.data,a,{ajaxLib:r,onProgress:n}))}function f(e,t,a={}){const n=a.ajaxLib||i["a"]
const s=a.ajaxLibOptions||{}
e&&e.attachments&&e.attachments[0]&&(e=e.attachments[0])
if(!e)throw new Error("expected a preflightResponse")
if(t&&!e.upload_url)throw new Error("expected a preflightResponse with an upload_url",{preflightResponse:e})
if(!t&&!e.progress)throw new Error("expected a preflightResponse with a progress",{preflightResponse:e})
const l=e,c=l.upload_url,p=l.progress
if(!c)return Object(u["a"])(p,{ajaxLib:n}).catch(d)
let h=e,f=h.file_param,v=h.upload_params,m=h.success_url
f=f||"file"
v=v||{}
m=m||v.success_url
const g=!!m
const b=new FormData
Object.entries(v).forEach(([e,t])=>b.append(e,t))
t&&b.append(f,t,a.filename)
const w=n.post(c,b,Object(r["a"])({responseType:g?"document":"json",onUploadProgress:a.onProgress,withCredentials:!g},s))
return w.catch(_).then(e=>{if(p)return Object(u["a"])(p,{ajaxLib:n}).catch(d)
let t,r={}
if(m){const a=e.data,i=a.Bucket,n=a.Key,o=a.ETag
t=m
r={bucket:i,key:n,etag:o}}else if(201===e.status&&!a.ignoreResult){t=e.data.location
r={}}if(t){a.includeAvatar&&(r.include="avatar")
r=o.a.stringify(r)
r&&(t=-1!==t.indexOf("?")?`${t}&${r}`:`${t}?${r}`)
return n.get(t).then(({data:e})=>e).catch(d)}return e.data})}function v(e,t,a){const r=`/api/v1/courses/${t}/assignments/${a}/submissions/self/comments/files`
const i=e.map(e=>{const t={name:e.name,content_type:e.type}
return h(r,t,e)})
return Promise.all(i)}function m(e,t){const a=e.map(e=>e.url?h(t,{url:e.url,name:e.title,content_type:e.mediaType,submit_assignment:false}):h(t,{name:e.name,content_type:e.type},e))
return Promise.all(a)}},KIYd:function(e,t,a){"use strict"
var r=a("HGxv")
var i=a("8WeW")
Object(i["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","update":"تحديث"}},"ca":{"buttons":{"cancel":"Cancel·la","update":"Actualitza"}},"cy":{"buttons":{"cancel":"Canslo","update":"Diweddaru"}},"da":{"buttons":{"cancel":"Annullér","update":"Opdatering"}},"da-x-k12":{"buttons":{"cancel":"Annullér","update":"Opdatering"}},"de":{"buttons":{"cancel":"Abbrechen","update":"Aktualisieren"}},"el":{"buttons":{"cancel":"Ακύρωση","update":"Ενημέρωση"}},"en-AU":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-CA":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","update":"Update"}},"es":{"buttons":{"cancel":"Cancelar","update":"Actualizar"}},"es-ES":{"buttons":{"cancel":"Cancelar","update":"Actualizar"}},"fa":{"buttons":{"cancel":"لغو","update":"بهنگام سازی"}},"fi":{"buttons":{"cancel":"Peruuta","update":"Päivitä"}},"fr":{"buttons":{"cancel":"Annuler","update":"Mettre à jour"}},"fr-CA":{"buttons":{"cancel":"Annuler","update":"Mettre à jour"}},"he":{"buttons":{"cancel":"ביטול","update":"עדכון"}},"ht":{"buttons":{"cancel":"Anile","update":"Aktyalize"}},"hu":{"buttons":{"cancel":"Mégse","update":"Frissítés"}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","update":"Թարմացնել"}},"is":{"buttons":{"cancel":"Hætta við","update":"Uppfæra"}},"it":{"buttons":{"cancel":"Annulla","update":"Aggiorna"}},"ja":{"buttons":{"cancel":"キャンセル","update":"更新"}},"ko":{"buttons":{"cancel":"취소","update":"업데이트"}},"mi":{"buttons":{"cancel":"Whakakore","update":"Whakahōu"}},"nb":{"buttons":{"cancel":"Avbryt","update":"Oppdater"}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","update":"Oppdater"}},"nl":{"buttons":{"cancel":"Annuleren","update":"Bijwerken"}},"nn":{"buttons":{"cancel":"Avbryt","update":"Oppdatering"}},"pl":{"buttons":{"cancel":"Anuluj","update":"Zaktualizuj"}},"pt":{"buttons":{"cancel":"Cancelar","update":"Atualizar"}},"pt-BR":{"buttons":{"cancel":"Cancelar","update":"Atualizar"}},"ru":{"buttons":{"cancel":"Отменить","update":"Обновить"}},"sl":{"buttons":{"cancel":"Prekliči","update":"Posodobi"}},"sv":{"buttons":{"cancel":"Avbryt","update":"Uppdatera"}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","update":"Uppdatera"}},"th":{"buttons":{"cancel":"ยกเลิก","update":"อัพเดต"}},"tr":{"buttons":{"cancel":"İptal","update":"Güncelle"}},"uk":{"buttons":{"cancel":"Скасувати","update":"Оновлення"}},"zh-Hans":{"buttons":{"cancel":"取消","update":"更新"}},"zh-Hant":{"buttons":{"cancel":"取消","update":"更新"}}}'))
a("jQeR")
a("0sPK")
var n=r["default"].scoped("dialog")
var o=a("ouhR")
var s=a.n(o)
var l=a("Y/W1")
var c=a.n(l)
var u=a("mX+G")
var p=a.n(u)
a("ESjL")
var _=function(e,t){return function(){return e.apply(t,arguments)}},d=function(e,t){for(var a in t)h.call(t,a)&&(e[a]=t[a])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},h={}.hasOwnProperty
t["a"]=function(e){d(t,e)
function t(){this.cancel=_(this.cancel,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.initDialog()
return this.setElement(this.dialog)}
t.prototype.defaultOptions=function(){return{autoOpen:false,width:420,resizable:false,buttons:[],destroy:false}}
t.prototype.initDialog=function(){var e
e=c.a.extend({},this.defaultOptions(),{buttons:[{text:n.t("#buttons.cancel","Cancel"),class:"cancel_button",click:(t=this,function(e){return t.cancel(e)})},{text:n.t("#buttons.update","Update"),class:"btn-primary",click:function(e){return function(t){return e.update(t)}}(this)}]},c.a.result(this,"dialogOptions"))
var t
this.dialog=s()('<div id="'+e.id+'"></div>').appendTo("body").dialog(e)
e.containerId&&this.dialog.parent().attr("id",e.containerId)
s()(".ui-resizable-handle").attr("aria-hidden",true)
return this.dialog}
t.prototype.show=function(){return this.dialog.dialog("open")}
t.prototype.close=function(){return this.options.destroy?this.dialog.dialog("destroy"):this.dialog.dialog("close")}
t.prototype.update=function(e){throw"Not yet implemented"}
t.prototype.cancel=function(e){e.preventDefault()
return this.close()}
return t}(p.a.View)},PIgI:function(e,t){var a=window.Blob
var r=100==new a([new Uint8Array(100)]).size
e.exports=function(e){var t=e.split(",")[1]
var n=atob(t)
var o=new ArrayBuffer(n.length)
var s=new Uint8Array(o)
for(var l=0;l<n.length;l++)s[l]=n.charCodeAt(l)
r||(s=o)
var c=new a([s],{type:i(e)})
c.slice=c.slice||c.webkitSlice
return c}
function i(e){return e.split(";")[0].slice(5)}},aCH8:function(e,t,a){(function(){var t=a("ANhw"),r=a("mmNF").utf8,i=a("BEtg"),n=a("mmNF").bin,o=function(e,a){e.constructor==String?e=a&&"binary"===a.encoding?n.stringToBytes(e):r.stringToBytes(e):i(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString())
var s=t.bytesToWords(e),l=8*e.length,c=1732584193,u=-271733879,p=-1732584194,_=271733878
for(var d=0;d<s.length;d++)s[d]=16711935&(s[d]<<8|s[d]>>>24)|4278255360&(s[d]<<24|s[d]>>>8)
s[l>>>5]|=128<<l%32
s[14+(l+64>>>9<<4)]=l
var h=o._ff,f=o._gg,v=o._hh,m=o._ii
for(d=0;d<s.length;d+=16){var g=c,b=u,w=p,k=_
c=h(c,u,p,_,s[d+0],7,-680876936)
_=h(_,c,u,p,s[d+1],12,-389564586)
p=h(p,_,c,u,s[d+2],17,606105819)
u=h(u,p,_,c,s[d+3],22,-1044525330)
c=h(c,u,p,_,s[d+4],7,-176418897)
_=h(_,c,u,p,s[d+5],12,1200080426)
p=h(p,_,c,u,s[d+6],17,-1473231341)
u=h(u,p,_,c,s[d+7],22,-45705983)
c=h(c,u,p,_,s[d+8],7,1770035416)
_=h(_,c,u,p,s[d+9],12,-1958414417)
p=h(p,_,c,u,s[d+10],17,-42063)
u=h(u,p,_,c,s[d+11],22,-1990404162)
c=h(c,u,p,_,s[d+12],7,1804603682)
_=h(_,c,u,p,s[d+13],12,-40341101)
p=h(p,_,c,u,s[d+14],17,-1502002290)
u=h(u,p,_,c,s[d+15],22,1236535329)
c=f(c,u,p,_,s[d+1],5,-165796510)
_=f(_,c,u,p,s[d+6],9,-1069501632)
p=f(p,_,c,u,s[d+11],14,643717713)
u=f(u,p,_,c,s[d+0],20,-373897302)
c=f(c,u,p,_,s[d+5],5,-701558691)
_=f(_,c,u,p,s[d+10],9,38016083)
p=f(p,_,c,u,s[d+15],14,-660478335)
u=f(u,p,_,c,s[d+4],20,-405537848)
c=f(c,u,p,_,s[d+9],5,568446438)
_=f(_,c,u,p,s[d+14],9,-1019803690)
p=f(p,_,c,u,s[d+3],14,-187363961)
u=f(u,p,_,c,s[d+8],20,1163531501)
c=f(c,u,p,_,s[d+13],5,-1444681467)
_=f(_,c,u,p,s[d+2],9,-51403784)
p=f(p,_,c,u,s[d+7],14,1735328473)
u=f(u,p,_,c,s[d+12],20,-1926607734)
c=v(c,u,p,_,s[d+5],4,-378558)
_=v(_,c,u,p,s[d+8],11,-2022574463)
p=v(p,_,c,u,s[d+11],16,1839030562)
u=v(u,p,_,c,s[d+14],23,-35309556)
c=v(c,u,p,_,s[d+1],4,-1530992060)
_=v(_,c,u,p,s[d+4],11,1272893353)
p=v(p,_,c,u,s[d+7],16,-155497632)
u=v(u,p,_,c,s[d+10],23,-1094730640)
c=v(c,u,p,_,s[d+13],4,681279174)
_=v(_,c,u,p,s[d+0],11,-358537222)
p=v(p,_,c,u,s[d+3],16,-722521979)
u=v(u,p,_,c,s[d+6],23,76029189)
c=v(c,u,p,_,s[d+9],4,-640364487)
_=v(_,c,u,p,s[d+12],11,-421815835)
p=v(p,_,c,u,s[d+15],16,530742520)
u=v(u,p,_,c,s[d+2],23,-995338651)
c=m(c,u,p,_,s[d+0],6,-198630844)
_=m(_,c,u,p,s[d+7],10,1126891415)
p=m(p,_,c,u,s[d+14],15,-1416354905)
u=m(u,p,_,c,s[d+5],21,-57434055)
c=m(c,u,p,_,s[d+12],6,1700485571)
_=m(_,c,u,p,s[d+3],10,-1894986606)
p=m(p,_,c,u,s[d+10],15,-1051523)
u=m(u,p,_,c,s[d+1],21,-2054922799)
c=m(c,u,p,_,s[d+8],6,1873313359)
_=m(_,c,u,p,s[d+15],10,-30611744)
p=m(p,_,c,u,s[d+6],15,-1560198380)
u=m(u,p,_,c,s[d+13],21,1309151649)
c=m(c,u,p,_,s[d+4],6,-145523070)
_=m(_,c,u,p,s[d+11],10,-1120210379)
p=m(p,_,c,u,s[d+2],15,718787259)
u=m(u,p,_,c,s[d+9],21,-343485551)
c=c+g>>>0
u=u+b>>>0
p=p+w>>>0
_=_+k>>>0}return t.endian([c,u,p,_])}
o._ff=function(e,t,a,r,i,n,o){var s=e+(t&a|~t&r)+(i>>>0)+o
return(s<<n|s>>>32-n)+t}
o._gg=function(e,t,a,r,i,n,o){var s=e+(t&r|a&~r)+(i>>>0)+o
return(s<<n|s>>>32-n)+t}
o._hh=function(e,t,a,r,i,n,o){var s=e+(t^a^r)+(i>>>0)+o
return(s<<n|s>>>32-n)+t}
o._ii=function(e,t,a,r,i,n,o){var s=e+(a^(t|~r))+(i>>>0)+o
return(s<<n|s>>>32-n)+t}
o._blocksize=16
o._digestsize=16
e.exports=function(e,a){if(void 0===e||null===e)throw new Error("Illegal argument "+e)
var r=t.wordsToBytes(o(e,a))
return a&&a.asBytes?r:a&&a.asString?n.bytesToString(r):t.bytesToHex(r)}})()},gBVS:function(e,t,a){"use strict"
a.d(t,"a",(function(){return n}))
var r=a("BrAc")
function i(e){return new Promise(t=>{setTimeout(t,e)})}function n(e,t={}){const a=t.ajaxLib||r["a"]
const o=e.url,s=e.workflow_state,l=e.results,c=e.message
if("queued"===s||"running"===s){let e=t.interval
e||(e=1e3)
e<100&&(e=100)
return i(e).then(()=>a.get(o)).then(e=>{const a=e.data
return n(a,t)})}return"completed"===s?Promise.resolve(l):Promise.reject(c)}},mmNF:function(e,t){var a={utf8:{stringToBytes:function(e){return a.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(a.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],a=0;a<e.length;a++)t.push(255&e.charCodeAt(a))
return t},bytesToString:function(e){for(var t=[],a=0;a<e.length;a++)t.push(String.fromCharCode(e[a]))
return t.join("")}}}
e.exports=a},msTH:function(e,t,a){"use strict"
var r=a("ouhR")
var i=a.n(r)
var n=a("Y/W1")
var o=a.n(n)
var s=a("gI0r")
var l=a("HGxv")
var c=a("8WeW")
Object(c["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"ca":{"user_content_aaf0fb5a":"Contingut de l\'usuari"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"es-ES":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"th":{"user_content_aaf0fb5a":"เนื้อหาของผู้ใช้"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
a("jQeR")
a("0sPK")
var u=l["default"].scoped("user_content")
const p={translateMathmlForScreenreaders(e){var t,a
if(!(null!==(t=ENV)&&void 0!==t&&null!==(a=t.FEATURES)&&void 0!==a&&a.new_math_equation_handling)){const t=i()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const a=i()('<span class="hidden-readable"></span>')
a.html(t)
return a}},toMediaCommentLink(e){const t=i()(`<a\n        id='media_comment_${Object(s["a"])(i()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(s["a"])(i()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(s["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(s["a"])(i()(e).attr("data-alt"))}'\n      />`)
t.html(i()(e).html())
return t},convert(e,t={}){const a=i()("<div />").html(e)
a.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return p.toMediaCommentLink(this)}))
a.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){a.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=i()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=o.a.uniqueId("uc_")
let a="/object_snippet"
ENV.files_domain&&(a=`//${ENV.files_domain}${a}`)
const r=i()(`<form\n            action='${Object(s["a"])(a)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(s["a"])(t)}'\n            id='form-${Object(s["a"])(t)}'\n          />`)
r.append(i()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
r.append(i()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
i()("body").append(r)
setTimeout(()=>r.submit(),0)
return i()(`<iframe\n            class='user_content_iframe'\n            name='${Object(s["a"])(t)}'\n            style='width: ${Object(s["a"])(e.data("uc_width"))}; height: ${Object(s["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(s["a"])(u.t("User Content"))}'\n          />`)}))
a.find("img.equation_image").each((e,t)=>{const a=i()(t)
const r=p.translateMathmlForScreenreaders(a)
a.removeAttr("x-canvaslms-safe-mathml")
a.after(r)})}return a.html()}}
t["a"]=p}}])

//# sourceMappingURL=138-c-8478a41149.js.map