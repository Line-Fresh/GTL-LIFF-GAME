(this["webpackJsonpGTL-LIFF"]=this["webpackJsonpGTL-LIFF"]||[]).push([[0],{175:function(e,n){},177:function(e,n){},187:function(e,n){},189:function(e,n){},213:function(e,n){},214:function(e,n){},219:function(e,n){},221:function(e,n){},228:function(e,n){},247:function(e,n){},310:function(e,n,t){},311:function(e,n,t){},312:function(e,n,t){"use strict";t.r(n);var c=t(15),i=t.n(c),o=t(141),r=t.n(o),s=t(46),a=(t(310),t(36)),u=t.n(a),f=t(143),j=t(144),d=(t(311),t(6)),l=function(){var e=Object(c.useState)(""),n=Object(j.a)(e,2),t=n[0],i=n[1],o=Object(s.useLiff)(),r=o.error,a=o.liff,l=o.isLoggedIn,b=o.ready;Object(c.useEffect)((function(){l&&Object(f.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getProfile();case 2:n=e.sent,i(n.displayName);case 4:case"end":return e.stop()}}),e)})))()}),[a,l]);return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("header",{className:"App-header",children:r?Object(d.jsx)("p",{children:"Something is wrong."}):b?l?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:["Welcome to the react-liff demo app, ",t,"!"]}),Object(d.jsx)("button",{className:"App-button",onClick:a.logout,children:"Logout"})]}):Object(d.jsx)("button",{className:"App-button",onClick:a.login,children:"Login"}):Object(d.jsx)("p",{children:"Loading..."})})})};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(s.LiffProvider,{liffId:"",stubEnabled:!1,children:Object(d.jsx)(l,{})})}),document.getElementById("root"))}},[[312,1,2]]]);
//# sourceMappingURL=main.35b81c34.chunk.js.map