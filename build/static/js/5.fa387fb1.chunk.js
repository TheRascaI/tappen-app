(this.webpackJsonptappen=this.webpackJsonptappen||[]).push([[5],{69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";var r=c(1),a=c.n(r),n=c(11),s=c.n(n),i=c(15),o=c(9),d=c(14),l=c(29),j=c.p+"static/media/edit.6b8f1c2a.svg",u=c.p+"static/media/delete.0a78461e.svg",b=(c(69),c(13)),h=c(30),p=c(24),O=c(16),x=c(17),m=c(26),f=c(0),v=function(e){var t=Object(r.useContext)(x.a),c=Object(r.useState)(!1),n=Object(o.a)(c,2),v=n[0],g=n[1],N=Object(m.a)(),C=N.isLoading,w=N.error,_=N.sendRequest,k=N.clearError,E=function(){g(!1)},y=function(){var c=Object(i.a)(s.a.mark((function c(){return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:g(!1);try{_("https://tappen.herokuapp.com/api"+"/cards/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+t.token}),e.onDelete(e.id)}catch(w){}case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(f.jsxs)(a.a.Fragment,{children:[Object(f.jsx)(p.a,{error:w,onClear:k}),C&&Object(f.jsx)(O.a,{asOverlay:!0}),Object(f.jsx)(h.a,{show:v,onCancel:E,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:Object(f.jsxs)(a.a.Fragment,{children:[Object(f.jsx)(b.a,{inverse:!0,onClick:E,children:"CANCEL"}),Object(f.jsx)(b.a,{danger:!0,onClick:y,children:"DELETE"})]}),children:Object(f.jsx)("p",{children:"Do you want to proceed and delete this place? Please note that it can't be undone thereafter."})}),Object(f.jsx)("li",{className:"card-item",children:Object(f.jsxs)(d.a,{className:"game-card",children:[Object(f.jsx)("div",{className:"card-item__content",children:Object(f.jsx)("p",{children:e.content})}),Object(f.jsxs)("div",{className:"card-item__footer",children:[Object(f.jsxs)("div",{className:"card-item__footer_top",children:["@",e.creatorName]}),Object(f.jsxs)("div",{className:"card-item__footer_bottom center",children:[Object(f.jsx)(b.a,{className:"button--small",to:"/cards/".concat(e.id),children:Object(f.jsx)("img",{src:j,alt:"edit",width:"14px"})}),Object(f.jsx)(b.a,{danger:!0,onClick:function(){g(!0)},children:Object(f.jsx)("img",{src:u,alt:"delete",width:"14px"})}),Object(f.jsxs)(b.a,{inverse:!0,children:[" ",e.reports," ",Object(f.jsx)("img",{src:l.a,alt:"flag",width:"10px"})]})]})]})]})})]})};c(70),t.a=function(e){return Object(f.jsxs)(a.a.Fragment,{children:[0===e.items.length&&Object(f.jsx)("div",{className:"cards-list center",children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)("h2",{children:"No cards found. Maybe create one?"}),Object(f.jsx)(b.a,{to:"/api/cards/new",children:"Create Card"})]})}),Object(f.jsx)("div",{className:"card-list-container center",children:Object(f.jsx)("ul",{className:"cards-list ",children:e.items.map((function(t){var c=t.createdAt.slice(0,10);return Object(f.jsx)(v,{id:t.id,content:t.content,creatorId:t.creator,reports:t.reports,creatorName:t.creator.name||c,onDelete:e.onDeleteCard},t.id)}))})})]})}},77:function(e,t,c){"use strict";c.r(t);var r=c(11),a=c.n(r),n=c(15),s=c(9),i=c(1),o=c.n(i),d=c(71),l=c(16),j=c(24),u=c(26),b=c(0);t.default=function(){var e=Object(i.useState)(),t=Object(s.a)(e,2),c=t[0],r=t[1],h=Object(u.a)(),p=h.isLoading,O=h.error,x=h.sendRequest,m=h.clearError;Object(i.useEffect)((function(){(function(){var e=Object(n.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("https://tappen.herokuapp.com/api/cards");case 3:t=e.sent,r(t.cards),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[x]),console.log(c);return Object(b.jsxs)(o.a.Fragment,{children:[Object(b.jsx)(j.a,{error:O,onClear:m}),p&&Object(b.jsx)("div",{className:"center",children:Object(b.jsx)(l.a,{asOverlay:!0})}),!p&&c&&Object(b.jsx)(d.a,{items:c,onDeleteCard:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}}}]);
//# sourceMappingURL=5.fa387fb1.chunk.js.map