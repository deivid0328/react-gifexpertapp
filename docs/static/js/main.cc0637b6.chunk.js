(this.webpackJsonpprops=this.webpackJsonpprops||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(7),i=n.n(a),s=n(2),u=n(9),o=n(0),j=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),a=r[0],i=r[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(u.a)(t))})),i(t.target.value=""))},children:Object(o.jsx)("input",{type:"text",value:a,onChange:function(t){i(t.target.value),console.log(a)}})})},d=n(10),l=n(6),b=n.n(l),f=n(8),p=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,c,r,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=waKAr0SDoB9n4nRtgZhjizpwvVQjHBEx"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.title,n=t.url;return console.log(e,n),Object(o.jsxs)("div",{className:"card animate__animated animate__backInLeft ",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),3e3)}))}),[t]),r}(e),r=n.data,a=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"animate__animated animate__backInLeft",children:e}),a&&Object(o.jsx)("p",{children:"Loading"}),Object(o.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(o.jsx)(O,Object(d.a)({},t),t.id)}))})]})},m=function(){var t=Object(c.useState)(["One Punch"]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(j,{setCategories:r}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(h,{category:t},t)}))})]})},x=(n(17),function(){return Object(o.jsx)("div",{children:Object(o.jsx)(m,{})})});i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.cc0637b6.chunk.js.map