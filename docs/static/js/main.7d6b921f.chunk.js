(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),i=(n(16),n(2)),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],u=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(s.a)(e))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:a,onChange:function(e){u(e.target.value)}})})};d.protoTypes={setCategories:o.a.func.isRequired};var p=n(11),f=n(6),b=n.n(f),l=n(9),O=function(){var e=Object(l.a)(b.a.mark((function e(t){var n,r,c,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?limit=10&q=".concat(encodeURI(t),"&api_key=0dZmFKN8eVpDfa6kFeHnW8WOWJSZciWM"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,i=a.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:n,alt:t}),Object(j.jsxs)("p",{children:[" ",t]})]})},x=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){O(e).then((function(e){a({data:e,loading:!1})}))}),[e]),c}(t),c=n.data;n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(j.jsx)(h,Object(p.a)({},e),e.id)}))})]})},g=function(){var e=Object(r.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(d,{setCategories:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e){return Object(j.jsx)(x,{category:e},e)}))})]})};a.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7d6b921f.chunk.js.map