"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{5851:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(1883);var r=()=>{const e=(0,l.useStaticQuery)("3917570659").allItemsJson.nodes,{0:t,1:a}=(0,n.useState)(""),{0:r,1:c}=(0,n.useState)([]);return n.createElement("div",{className:"search-bar"},n.createElement("input",{type:"text",placeholder:"Search items...",value:t,onChange:t=>{const n=t.target.value;a(n);const l=e.filter((e=>e.name.toLowerCase().includes(n.toLowerCase())));c(l)}}),t&&n.createElement("ul",{className:"suggestions"},r.map((e=>n.createElement("li",{key:e.id},n.createElement(l.Link,{to:"/item/"+e.entityID.replace("minecraft:","")},e.name))))))};var c=e=>{let{siteTitle:t}=e;return n.createElement("header",{className:"header"},n.createElement(l.Link,{to:"/",style:{fontSize:"var(--font-sm)",textDecoration:"none"}},t),n.createElement(r,null))};a(9357);var m=e=>{var t;let{children:a,className:r}=e;const m=(0,l.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement(c,{siteTitle:(null===(t=m.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("div",{className:r},n.createElement("main",null,a),n.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)",textAlign:"center"}},n.createElement("p",null,"© ",(new Date).getFullYear()," · Built with 💜 by JackJackSlaps"),n.createElement("small",null,"All Images, Names, and whatever else belong to whoever owns them."))))}},9357:function(e,t,a){var n=a(7294),l=a(1883);t.Z=function(e){var t,a;let{description:r,title:c,children:m}=e;const{site:s}=(0,l.useStaticQuery)("63159454"),i=r||s.siteMetadata.description,o=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,o?c+" | "+o:c),n.createElement("meta",{name:"description",content:i}),n.createElement("meta",{property:"og:title",content:c}),n.createElement("meta",{property:"og:description",content:i}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=s.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:c}),n.createElement("meta",{name:"twitter:description",content:i}),m)}},6558:function(e,t,a){a.r(t);var n=a(7294),l=a(1883),r=a(5851),c=a(9357);t.default=e=>{let{data:t}=e;const a=t.allPlotsJson.nodes,m=[[3317,-1933],[3721,-1502]],s=(m[0][0]+m[1][0])/2,i=(m[0][1]+m[1][1])/2;return n.createElement(r.Z,null,n.createElement(c.Z,{title:"Welcome"}),n.createElement("div",{class:"grid grid--2 grid--mobile-1"},n.createElement("div",{className:"map"},n.createElement("iframe",{src:"http://homesteadcraft.mcserver.us:8123/#homesteadcraft:"+s+":76:"+i+":348:0:0:0:1:flat"})),n.createElement("div",{className:"sd-info"},n.createElement("h1",null,"Shopping District"),n.createElement("ul",{className:"plots-index"},a.map((e=>n.createElement("li",{key:e.plotNumber},n.createElement(l.Link,{to:"/plot/"+e.plotNumber},e.shopName?e.shopName:"Plot #"+e.plotNumber)," - ",e.owner)))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f6947d941c12bc140a0c.js.map