(this.webpackJsonptappen=this.webpackJsonptappen||[]).push([[4],{64:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return p}));var a=n(28);var r="REQUIRE",i="MINLENGTH",s="MAXLENGTH",u="EMAIL",c=function(){return{type:r}},o=function(e){return{type:i,val:e}},l=function(e){return{type:s,val:e}},p=function(e,t){var n,c=!0,o=function(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,u=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,s=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw s}}}}(t);try{for(o.s();!(n=o.n()).done;){var l=n.value;l.type===r&&(c=c&&e.trim().length>0),l.type===i&&(c=c&&e.trim().length>=l.val),l.type===s&&(c=c&&e.trim().length<=l.val),"MIN"===l.type&&(c=c&&+e>=l.val),"MAX"===l.type&&(c=c&&+e<=l.val),l.type===u&&(c=c&&/^\S+@\S+\.\S+$/.test(e))}}catch(p){o.e(p)}finally{o.f()}return c}},65:function(e,t,n){"use strict";var a=n(9),r=n(25),i=n(1),s=n(64),u=(n(66),n(0)),c=function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(s.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}};t.a=function(e){var t=Object(i.useReducer)(c,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(a.a)(t,2),r=n[0],s=n[1],o=e.id,l=e.onInput,p=r.value,d=r.isValid;Object(i.useEffect)((function(){l(o,p,d)}),[o,p,d,l]);var b=function(t){s({type:"CHANGE",val:t.target.value,validators:e.validators})},f=function(){s({type:"TOUCH"})},v="input"===e.element?Object(u.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:b,onBlur:f,value:r.value}):Object(u.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:b,onBlur:f,value:r.value});return Object(u.jsxs)("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid"),children:[Object(u.jsx)("label",{htmlFor:e.id,children:e.label}),v,!r.isValid&&r.isTouched&&Object(u.jsx)("p",{children:e.errorText})]})}},66:function(e,t,n){},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(9),r=n(27),i=n(25),s=n(1),u=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},c=function(e,t){var n=Object(s.useReducer)(u,{inputs:e,isValid:t}),r=Object(a.a)(n,2),i=r[0],c=r[1];return[i,Object(s.useCallback)((function(e,t,n){c({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(s.useCallback)((function(e,t){c({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},72:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),i=n(15),s=n(25),u=n(9),c=n(1),o=n.n(c),l=n(14),p=n(65),d=n(13),b=n(24),f=n(16),v=n(64),j=n(67),O=n(26),h=n(17),y=(n(72),n(0));t.default=function(){var e=Object(c.useContext)(h.a),t=Object(c.useState)(!0),n=Object(u.a)(t,2),a=n[0],m=n[1],x=Object(O.a)(),T=x.isLoading,I=x.error,V=x.sendRequest,w=x.clearError,S=Object(j.a)({name:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),g=Object(u.a)(S,3),N=g[0],C=g[1],k=g[2],E=function(){var t=Object(i.a)(r.a.mark((function t(n){var i,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!a){t.next=13;break}return t.prev=2,t.next=5,V("https://tappen.herokuapp.com/api/users/login","POST",JSON.stringify({name:N.inputs.name.value,password:N.inputs.password.value}),{"Content-Type":"application/json"});case 5:i=t.sent,e.login(i.userId,i.token),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:t.next=22;break;case 13:return t.prev=13,t.next=16,V("https://tappen.herokuapp.com/api/users/signup","POST",JSON.stringify({name:N.inputs.name.value,password:N.inputs.password.value}),{"Content-Type":"application/json"});case 16:s=t.sent,e.login(s.userId,s.token),t.next=22;break;case 20:t.prev=20,t.t1=t.catch(13);case 22:case"end":return t.stop()}}),t,null,[[2,9],[13,20]])})));return function(e){return t.apply(this,arguments)}}();return Object(y.jsxs)(o.a.Fragment,{children:[Object(y.jsx)(b.a,{error:I,onClear:w}),Object(y.jsxs)(l.a,{className:"authentication",children:[T&&Object(y.jsx)(f.a,{asOverlay:!0}),Object(y.jsxs)("h2",{children:[a?"Login ":"Signup ","Required"]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("form",{onSubmit:E,children:[Object(y.jsx)(p.a,{element:"input",id:"name",type:"text",label:"Username",validators:[Object(v.c)()],errorText:"Please enter a name.",onInput:C}),Object(y.jsx)(p.a,{element:"input",id:"password",type:"password",label:"Password",validators:[Object(v.b)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:C}),Object(y.jsx)(d.a,{type:"submit",disabled:!N.isValid,children:a?"LOGIN":"SIGNUP"})]}),Object(y.jsxs)(d.a,{inverse:!0,onClick:function(){a?k(Object(s.a)(Object(s.a)({},N.inputs),{},{name:{value:"",isValid:!1}}),!1):k(Object(s.a)(Object(s.a)({},N.inputs),{},{name:void 0}),N.inputs.name.isValid&&N.inputs.password.isValid),m((function(e){return!e}))},children:["SWITCH TO ",a?"SIGNUP":"LOGIN"]})]})]})}}}]);
//# sourceMappingURL=4.96ba643f.chunk.js.map