(function(t){function e(e){for(var r,o,a=e[0],s=e[1],l=e[2],b=0,p=[];b<a.length;b++)o=a[b],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/projects/instagram-dots/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"04fb":function(t,e,n){"use strict";n("d2be")},"3d47":function(t,e,n){"use strict";n("956e")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i=["src"];function c(t,e,n,c,o,a){var s=Object(r["r"])("Carousel");return Object(r["l"])(),Object(r["e"])(s,{itemList:c.imageList,height:"400px",width:"400px",style:{width:"900px"}},{item:Object(r["t"])((function(t){var e=t.item;return[Object(r["h"])("div",{style:Object(r["k"])([{height:"100%",display:"flex","align-items":"center","backdrop-filter":"blur(10px)"},{backgroundImage:"url(".concat(e,")")}])},[Object(r["h"])("img",{src:e,style:{width:"100%"}},null,8,i)],4)]})),_:1},8,["itemList"])}var o={class:"carousel"},a={class:"carousel-inner"},s={key:0,class:"carousel-inner--control control__prev"},l={class:"default"},u=["disabled"],b={key:1,class:"carousel-inner--control control__next"},p={class:"default"},f=["disabled"];function x(t,e,n,i,c,x){var d=Object(r["r"])("CarouseIndicator");return Object(r["l"])(),Object(r["g"])("div",o,[Object(r["h"])("div",a,[i.hideControl?Object(r["f"])("",!0):(Object(r["l"])(),Object(r["g"])("div",s,[Object(r["q"])(t.$slots,"prev-control",{prev:i.decrement,disabled:!i.allowDecrement},(function(){return[Object(r["h"])("div",l,[Object(r["h"])("button",{class:"value",onClick:e[0]||(e[0]=function(){return i.decrement&&i.decrement.apply(i,arguments)}),disabled:!i.allowDecrement},"◄",8,u)])]}),!0)])),Object(r["i"])(r["b"],{class:"carousel-inner--container",tag:"div",name:"carousel-slide"+(i.backDirection?"back":""),style:Object(r["k"])({height:n.height,width:n.width})},{default:Object(r["t"])((function(){return[(Object(r["l"])(!0),Object(r["g"])(r["a"],null,Object(r["p"])([i.current],(function(e){return Object(r["l"])(),Object(r["g"])("div",{class:"carousel-inner--container__item",key:e,style:Object(r["k"])({height:n.height,width:n.width})},[e===i.current?Object(r["q"])(t.$slots,"item",{key:0,item:n.itemList[e]},void 0,!0):Object(r["f"])("",!0)],4)})),128))]})),_:3},8,["name","style"]),i.hideControl?Object(r["f"])("",!0):(Object(r["l"])(),Object(r["g"])("div",b,[Object(r["q"])(t.$slots,"next-control",{next:i.increment,disabled:!i.allowIncrement},(function(){return[Object(r["h"])("div",p,[Object(r["h"])("button",{onClick:e[1]||(e[1]=function(){return i.increment&&i.increment.apply(i,arguments)}),disabled:!i.allowIncrement},"►",8,f)])]}),!0)]))]),i.hideControl?Object(r["f"])("",!0):(Object(r["l"])(),Object(r["e"])(d,{key:0,current:i.current,length:i.length,maxVisibleIndicatorsProp:n.maxVisibleIndicatorsProp-1},null,8,["current","length","maxVisibleIndicatorsProp"]))])}n("a9e3");var d={class:"indicators-wrapper"},m=["data-id"];function h(t,e,n,i,c,o){return Object(r["l"])(),Object(r["g"])("div",d,[(Object(r["l"])(!0),Object(r["g"])(r["a"],null,Object(r["p"])(i.indicators,(function(t){return Object(r["l"])(),Object(r["g"])("span",{key:t,class:Object(r["j"])([i.getIndicatorClass(t)]),"data-id":t},null,10,m)})),128))])}n("a630"),n("3ca3");var g={props:{length:{type:Number,required:!0},current:{type:Number,required:!0},maxVisibleIndicators:{type:Number,default:4,validator:function(t){return t>=3}}},setup:function(t){var e=Object(r["o"])(Array.from({length:t.length},(function(t,e){return e}))),n=Object(r["o"])(0),i=Object(r["o"])(t.maxVisibleIndicators),c=function(e){return e===t.current?"active":e===n.value&&e-1>=0||e===i.value&&e+1<t.length?"micro":e===n.value+1&&e-2>=0||e===i.value-1&&e+2<t.length?"small":e>=n.value&&e<=i.value?"std":"hidden"},o=function(){n.value-1>=0&&(t.current===n.value&&(n.value=t.current-1,i.value=n.value+t.maxVisibleIndicators),t.current===n.value+1&&(n.value=t.current-2,i.value=n.value+t.maxVisibleIndicators),i.value>t.length&&(i.value=t.length-1)),i.value+1<t.length&&(t.current===i.value&&(i.value=t.current+1,n.value=i.value-t.maxVisibleIndicators),t.current===i.value-1&&(i.value=t.current+2,n.value=i.value-t.maxVisibleIndicators),n.value<0&&(n.value=0))};return Object(r["s"])((function(){return t.current}),o),Object(r["s"])((function(){return t.maxVisibleIndicators}),o),{indicators:e,getIndicatorClass:c}}},y=(n("3d47"),n("d959")),O=n.n(y);const j=O()(g,[["render",h],["__scopeId","data-v-51ce7ce6"]]);var v=j,M={props:{itemList:{type:Array,default:function(){return[]}},width:{type:String,default:"100%"},height:{type:String,default:"100px"},maxVisibleIndicatorsProp:{type:Number,default:5,validator:function(t){return t>3}},activeItemIndexProp:{type:Number,default:0}},setup:function(t){var e=Object(r["c"])((function(){return t.itemList.length})),n=Object(r["o"])(0),i=Object(r["o"])(!1),c=Object(r["c"])((function(){return 1===e.value})),o=function(){i.value=!1,n.value+=1},a=function(){i.value=!0,n.value-=1},s=Object(r["c"])((function(){return n.value<e.value-1})),l=Object(r["c"])((function(){return n.value>0}));return{length:e,current:n,increment:o,decrement:a,hideControl:c,allowIncrement:s,allowDecrement:l,backDirection:i}},components:{CarouseIndicator:v}};n("88ed");const w=O()(M,[["render",x],["__scopeId","data-v-430937d6"]]);var T=w,H={name:"App",components:{Carousel:T},setup:function(){return{imageList:["https://images.unsplash.com/photo-1632529800649-faf2f6e7dff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5Njk1Ng&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1632769092277-83b8c526a673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTI4OA&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1633005619804-8b6124945cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTI4Nw&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1632725514221-b1c217475d92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTI4NQ&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1627562369448-bc40100a959b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTI4NA&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1632715413694-0842be6fa2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTI4Mw&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1634150872460-b97af031c991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTI4MQ&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1634151296702-962d96fe5a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTI3OQ&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1632504102499-7dc472b50653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTM1Nw&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1633760538186-c239ab18f545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTM1Ng&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1634571798961-bf45f97a78e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTM1NQ&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1633102575634-dc72edadd467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTM1NA&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1633793545207-bd5a09c3e4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTM1MQ&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1634938971687-1082b4cb018c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTM1MA&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1633176036492-706dd11c57b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTM0OQ&ixlib=rb-1.2.1&q=80&w=1080","https://images.unsplash.com/photo-1632830025073-3da7ac07402b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE5OTM0Nw&ixlib=rb-1.2.1&q=80&w=1080"]}}};n("04fb");const k=O()(H,[["render",c]]);var Y=k;Object(r["d"])(Y).mount("#app")},"88ed":function(t,e,n){"use strict";n("ae15")},"956e":function(t,e,n){},ae15:function(t,e,n){},d2be:function(t,e,n){}});
//# sourceMappingURL=app.3865035c.js.map