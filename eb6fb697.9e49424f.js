(window.webpackJsonp=window.webpackJsonp||[]).push([[230,33],{404:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),c=a(326),o=a.n(c),s=a(351),i=a(313),m=a(314),f=a(51),u=a.n(f);function d({to:e,href:t,label:a,...r}){const c=Object(m.a)(e);return l.a.createElement(s.a,Object(n.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},r),a)}const E=({url:e,alt:t})=>l.a.createElement("img",{className:"footer__logo",alt:t,src:e});t.a=function(){const e=Object(i.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:r,links:c=[],logo:s={}}=n||{},f=Object(m.a)(s.src);return n?l.a.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===n.style})},l.a.createElement("div",{className:"container"},c&&c.length>0&&l.a.createElement("div",{className:"row footer__links"},c.map((e,t)=>l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?l.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(d,e)))):null))),(s||r)&&l.a.createElement("div",{className:"text--center"},s&&s.src&&l.a.createElement("div",{className:"margin-bottom--sm"},s.href?l.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:u.a.footerLogoLink},l.a.createElement(E,{alt:s.alt,url:f})):l.a.createElement(E,{alt:s.alt,url:f})),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))),l.a.createElement("div",{id:"codefund"}),l.a.createElement("script",{src:"https://codefund.io/properties/140/funder.js",async:"async"}),l.a.createElement("script",{dangerouslySetInnerHTML:{__html:"(function () {\n  document.querySelectorAll('.tabs .tabs-nav .nav-item a').forEach(function (t) {\n    t.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      t.closest('.tabs-nav').querySelectorAll('.nav-item a').forEach(function (i) {\n        i.classList.remove('active');\n      });\n\n      t.closest('.tabs').querySelectorAll('.tab-content .tab-pane').forEach(function (i) {\n        i.classList.remove('active');\n      });\n\n      t.classList.add('active');\n      document.getElementById(t.href.split('#')[1]).classList.add('active');\n      return false\n    });\n  });\n})();"}})):null}},431:function(e){e.exports=JSON.parse('["v0.4","v0.3","v0.2","v0.1"]')}}]);