(this.webpackJsonptappen=this.webpackJsonptappen||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){"use strict";n(1);var c=n(6),a=(n(57),n(0));t.a=function(e){return e.href?Object(a.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?Object(a.jsx)(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):Object(a.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}},function(e,t,n){"use strict";n(1),n(44);var c=n(0);t.a=function(e){return Object(c.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:Object(c.jsx)("div",{className:"card-inner ".concat(e.innerCardClass),style:e.innerCardStyle,children:e.children})})}},,function(e,t,n){"use strict";n(1),n(54);var c=n(0);t.a=function(e){return Object(c.jsx)("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay"),children:Object(c.jsx)("div",{className:"lds-dual-ring"})})}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(1),a=Object(c.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})},,function(e,t,n){"use strict";n(1);var c=n(7),a=n.n(c),r=(n(55),n(0));t.a=function(e){return a.a.createPortal(Object(r.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},,,,,function(e,t,n){"use strict";n(1);var c=n(30),a=n(13),r=n(0);t.a=function(e){return Object(r.jsx)(c.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:Object(r.jsx)(a.a,{onClick:e.onClear,children:"Okay"}),children:Object(r.jsx)("p",{children:e.error})})}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(11),a=n.n(c),r=n(15),s=n(9),i=n(1),o=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)(),l=Object(s.a)(o,2),j=l[0],d=l[1];return{isLoading:n,error:j,sendRequest:Object(i.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,r,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{},c(!0),e.prev=4,e.next=7,fetch(t,{method:n,body:r,headers:s});case 7:return i=e.sent,e.next=10,i.json();case 10:if(o=e.sent,i.ok){e.next=13;break}throw new Error(o.message);case 13:return c(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),d(e.t0.message),c(!1),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:function(){d(null)}}}},,,function(e,t,n){"use strict";t.a=n.p+"static/media/flag.494ff71e.svg"},function(e,t,n){"use strict";var c=n(25),a=n(1),r=n.n(a),s=n(7),i=n.n(s),o=n(64),l=n(19),j=(n(56),n(0)),d=function(e){var t=Object(j.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[Object(j.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:Object(j.jsx)("h2",{children:e.header})}),Object(j.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),Object(j.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return i.a.createPortal(t,document.getElementById("modal-hook"))};t.a=function(e){return Object(j.jsxs)(r.a.Fragment,{children:[e.show&&Object(j.jsx)(l.a,{onClick:e.onCancel}),Object(j.jsx)(o.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:Object(j.jsx)(d,Object(c.a)({},e))})]})}},,,,,,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),s=n(7),i=n.n(s),o=(n(39),n(2)),l=n(6),j=n.p+"static/media/tappen-app-icon.dc1eb25c.svg",d=(n(40),n(18)),u=n.n(d),b=n(14),h=(n(46),n(0)),O=function(){var e=Object(o.g)();return Object(h.jsx)("div",{className:"card-container",children:Object(h.jsx)(u.a,{className:"swipe",onSwipe:function(t){try{e.push("/game")}catch(n){}},children:Object(h.jsxs)(b.a,{className:"home-card",children:[Object(h.jsx)("h2",{children:"2 Rules!"}),Object(h.jsxs)("ul",{style:{fontFamily:"'Nunito',sans-serif",paddingLeft:"1.2rem"},children:[Object(h.jsx)("li",{children:"Tell the truth"}),Object(h.jsx)("li",{children:"or take a sip!"})]}),Object(h.jsx)("h2",{style:{textAlign:"center",marginTop:"4rem"},children:"Swipe to start!"})]})})})},x=n(11),f=n.n(x),m=n(15),p=n(9),g=(n(52),n(29)),v=(n(53),function(e){return Object(h.jsx)("div",{className:"card-container",children:e.items.sort((function(){return.5-Math.random()})).slice(0,50).map((function(t,n){return Object(h.jsx)(u.a,{className:"swipe",children:Object(h.jsxs)(b.a,{className:"game-card",children:[Object(h.jsx)("div",{className:"game-card__content",children:Object(h.jsx)("p",{children:t.content})}),Object(h.jsxs)("div",{className:"game-card__footer",children:[Object(h.jsxs)("div",{className:"game-card__footer_left",children:["@",t.creator.name]}),Object(h.jsx)("div",{onClick:e.onReport,className:"game-card__footer_right",children:Object(h.jsx)("img",{src:g.a,alt:"flag",width:"15px"})})]})]})},n)}))})}),N=n.p+"static/media/rewind.4c6aca2c.svg",k=n(16),C=n(24),w=n(13),y=n(26),I=function(){var e=Object(a.useState)(),t=Object(p.a)(e,2),n=t[0],c=t[1],s=Object(y.a)(),i=s.isLoading,o=s.error,l=s.sendRequest,j=s.clearError;Object(a.useEffect)((function(){(function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("https://tappen.herokuapp.com/api/cards/published-cards");case 3:t=e.sent,c(t.cards),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[l]);return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)(C.a,{error:o,onClear:j}),i&&Object(h.jsx)("div",{className:"center",children:Object(h.jsx)(k.a,{asOverlay:!0})}),Object(h.jsxs)("div",{className:"empty-screen",children:[Object(h.jsxs)("p",{children:["Game Over ",":("]}),Object(h.jsxs)(w.a,{danger:!0,to:"/",children:[Object(h.jsx)("img",{src:N,width:"12px",alt:"restart"})," Restart"]})]}),!i&&n&&Object(h.jsx)(v,{items:n,onReport:function(){console.log("reported!")}})]})},_=(n(58),function(e){return Object(h.jsx)("header",{className:"main-header",children:e.children})}),S=n(17),E=(n(59),function(e){var t=Object(a.useContext)(S.a);return Object(h.jsxs)("ul",{className:"nav-links",children:[t.isLoggedIn&&Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/api/cards",children:"ALL CARDS"})}),t.isLoggedIn&&Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/api/".concat(t.userId,"/cards"),children:"MY CARDS"})}),t.isLoggedIn&&Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/api/cards/new",children:"ADD CARDS"})}),!t.isLoggedIn&&Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/api/auth",children:"AUTHENTICATE"})}),t.isLoggedIn&&Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:t.logout,children:"LOGOUT"})})]})}),D=n(64),L=(n(60),function(e){var t=Object(h.jsx)(D.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0,children:Object(h.jsx)("aside",{className:"side-drawer",onClick:e.onClick,children:e.children})});return i.a.createPortal(t,document.getElementById("drawer-hook"))}),T=n(19),A=(n(61),function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),c=n[0],s=n[1],i=function(){s(!1)};return Object(h.jsxs)(r.a.Fragment,{children:[c&&Object(h.jsx)(T.a,{onClick:i}),Object(h.jsx)(L,{show:c,onClick:i,children:Object(h.jsx)("nav",{className:"main-navigation__drawer-nav",children:Object(h.jsx)(E,{})})}),Object(h.jsxs)(_,{children:[Object(h.jsxs)("button",{className:"main-navigation__menu-btn",onClick:function(){s(!0)},children:[Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{})]}),Object(h.jsx)("h1",{className:"main-navigation__title",children:Object(h.jsx)(l.b,{to:"/",children:"TAPPEN API"})}),Object(h.jsx)("nav",{className:"main-navigation__header-nav",children:Object(h.jsx)(E,{})})]})]})}),R=(n(62),function(){return Object(h.jsx)("div",{children:Object(h.jsx)("footer",{children:Object(h.jsx)("p",{children:Object(h.jsx)("a",{style:{color:"#ffffff",textDecoration:"none"},href:"https://vcard.miomideal.com",children:"\xa9 Mio Mideal"})})})})}),z=r.a.lazy((function(){return n.e(6).then(n.bind(null,74))})),P=r.a.lazy((function(){return n.e(3).then(n.bind(null,75))})),M=r.a.lazy((function(){return n.e(7).then(n.bind(null,76))})),B=r.a.lazy((function(){return n.e(5).then(n.bind(null,77))})),F=r.a.lazy((function(){return n.e(4).then(n.bind(null,78))}));var J=function(){var e,t=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(),i=Object(p.a)(s,2),o=i[0],l=i[1],j=Object(a.useState)(!1),d=Object(p.a)(j,2),u=d[0],b=d[1],h=Object(a.useCallback)((function(e,t,n){r(t);var c=n||new Date((new Date).getTime()+36e5);l(c),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:c.toISOString()})),b(e)}),[]),O=Object(a.useCallback)((function(){r(null),l(null),b(null),localStorage.removeItem("userData")}),[]);return Object(a.useEffect)((function(){if(n&&o){var e=o.getTime()-(new Date).getTime();c=setTimeout(O,e)}else clearTimeout(c)}),[n,O,o]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&h(e.userId,e.token)}),[h]),{token:n,login:h,logout:O,userId:u}}(),n=t.token,r=t.login,s=t.logout,i=t.userId;return e=n?Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{path:"/",exact:!0,children:Object(h.jsx)(B,{})}),Object(h.jsx)(o.b,{path:"/api/:userId/cards",exact:!0,children:Object(h.jsx)(z,{})}),Object(h.jsx)(o.b,{path:"/api/cards/",exact:!0,children:Object(h.jsx)(B,{})}),Object(h.jsx)(o.b,{path:"/api/cards/new",exact:!0,children:Object(h.jsx)(P,{})}),Object(h.jsx)(o.b,{path:"/cards/:cardId",children:Object(h.jsx)(M,{})}),Object(h.jsx)(o.a,{to:"/"})]}):Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{path:"/",exact:!0,children:Object(h.jsx)(O,{})}),Object(h.jsx)(o.b,{path:"/game",exact:!0,children:Object(h.jsx)(I,{})}),Object(h.jsx)(o.b,{path:"/api/auth",children:Object(h.jsx)(F,{})}),Object(h.jsx)(o.a,{to:"/"})]}),Object(h.jsx)(S.a.Provider,{value:{isLoggedIn:!!n,token:n,userId:i,login:r,logout:s},children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)(l.a,{children:[n&&Object(h.jsx)(A,{}),!n&&Object(h.jsx)(w.a,{to:"/",children:Object(h.jsx)("img",{className:"logo",width:"50",src:j,alt:"tappen-logo"})}),Object(h.jsx)("main",{children:Object(h.jsx)(a.Suspense,{fallback:Object(h.jsx)("div",{className:"center",children:Object(h.jsx)(k.a,{})}),children:e})})]}),Object(h.jsx)(R,{})]})})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root"))}],[[63,1,2]]]);
//# sourceMappingURL=main.b03cd8f3.chunk.js.map