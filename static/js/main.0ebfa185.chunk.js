(this.webpackJsonpphoto=this.webpackJsonpphoto||[]).push([[0],{56:function(t,e,n){},57:function(t,e,n){},84:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),s=n(8),a=n.n(s),l=(n(56),n(17)),r=(n.p,n(57),n(36)),i=n.n(r);var u=n(9),j=function(t){return Object(u.jsx)("div",{className:"image_div",children:Object(u.jsx)("img",{src:t.url,alt:"",className:"photo"})})},b=n(118),g=n(47),h=n.n(g);var d=function(){var t=Object(c.useState)(),e=Object(l.a)(t,2),n=e[0],o=e[1],s=Object(c.useState)(),a=Object(l.a)(s,2),r=a[0],g=a[1],d=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1];return Object(c.useEffect)((function(){i.a.get("https://api.unsplash.com/photos?client_id=rn-Xcg68L98GwEs8E4dakEJgtGfBoqXcFRKzLS9NcjU").then((function(t){o(t.data),console.log(t)}))}),[1]),n}();console.log("The data is"+d),console.log(r);var f=Object(c.useState)(1),O=Object(l.a)(f,2),p=O[0],v=O[1];console.log(p);var m=function(t,e){console.log(e);var n=Object(c.useState)([]),o=Object(l.a)(n,2),s=o[0],a=o[1];return Object(c.useEffect)((function(){i.a.get("https://api.unsplash.com/search/photos?query=".concat(t,"&page=").concat(e,"&per_page=30&client_id=rn-Xcg68L98GwEs8E4dakEJgtGfBoqXcFRKzLS9NcjU")).then((function(t){a(t.data.results),console.log(t.data.results)}))}),[t,e]),s}(r,p);return console.log(m),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Photos"}),Object(u.jsxs)("div",{className:"Search",children:[Object(u.jsx)("button",{className:"page_btn",onClick:function(){p>1&&(v(p-1),console.log(p))},children:"Prev"}),Object(u.jsx)("button",{onClick:function(){console.log(n),g(n),v(1)},children:Object(u.jsx)(h.a,{color:"secondary"})}),Object(u.jsx)(b.a,{fullWidth:"true",id:"filled-basic",variant:"filled",onChange:function(t){console.log(t.target.value);var e=t.target.value;o(e)}}),Object(u.jsx)("button",{className:"page_btn",onClick:function(){return v(p+1),console.log(p),p},children:"Next"})]}),Object(u.jsx)("div",{className:"container",children:""===r?(console.log(r),d.map((function(t){return Object(u.jsx)(j,{url:t.urls.small})}))):m.map((function(t){return console.log(r),Object(u.jsx)(j,{url:t.urls.small})}))})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),s(t),a(t)}))};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),f()}},[[84,1,2]]]);
//# sourceMappingURL=main.0ebfa185.chunk.js.map