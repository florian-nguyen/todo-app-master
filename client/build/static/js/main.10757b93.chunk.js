(this["webpackJsonptodo-app-master"]=this["webpackJsonptodo-app-master"]||[]).push([[0],{47:function(t,n,e){},48:function(t,n,e){},71:function(t,n,e){"use strict";e.r(n);var r,c,a,i,o,s,d,l,u,p,b,j,h,f=e(1),x=e.n(f),m=e(38),O=e.n(m),g=(e(47),e(5)),v=(e(48),e(14)),w=e.n(v),y=e(21),k=e(20),C=e(25),A=e(6),S=e(73),z=e(74),F=e(39),I=e.n(F).a.create({baseURL:"https://fng-dc-todo-list.herokuapp.com/api/v1/todo"}),R=e(24),E=e(2),L=A.a.div(r||(r=Object(g.a)(["\n\twidth: 60%;\n\theight: 60%;\n\tmin-width: 300px;\n\tmin-height: 400px;\n\tmax-width: 600px;\n\tmax-height: 700px;\n\tmargin: auto;\n"]))),U=A.a.div(c||(c=Object(g.a)(["\n\twidth: 100%;\n\tpadding: 1rem 0 1.5rem;\n"]))),B=A.a.div(a||(a=Object(g.a)(['\n\twidth: 100%;\n\ttext-align: center;\n\tfont-family: "Raleway", sans-serif;\n\tfont-weight: 700;\n\tfont-size: 1.5rem;\n']))),D=A.a.div(i||(i=Object(g.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: flex-end;\n\tgap: 2rem;\n\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 1rem 2rem;\n\n\tfont-size: 0.8rem;\n\tfont-weight: 500;\n\n\tborder-bottom: 1px solid #bdbdbd;\n\tborder-radius: 1px;\n"]))),J=Object(A.a)(S.a.label)(o||(o=Object(g.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\theight: 35px;\n\twidth: 100%;\n\tlist-style: none;\n\n\tcursor: pointer;\n\n\t& > input {\n\t\tdisplay: none;\n\t}\n\n\tinput + span {\n\t\ttransition: all 0.2s ease-in-out;\n\t\tborder: 3px solid transparent;\n\t}\n\n\tinput:checked + span {\n\t\tdisplay: block;\n\t\theight: 100%;\n\t\twidth: 100%;\n\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\n\t\tfont-weight: 600;\n\t\tcolor: #2f80ed;\n\n\t\tborder-bottom: 3px solid #2f80ed;\n\n\t\ttransform: translateY(-2px);\n\t}\n"]))),M=A.a.form(s||(s=Object(g.a)(["\n\twidth: 100%;\n\theight: 35px;\n\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 1.5rem;\n"]))),P=Object(A.a)(S.a.input)(d||(d=Object(g.a)(["\n\tpadding: 0.5rem 1rem;\n\tflex: 1;\n\tborder: 1px solid #bdbdbd;\n\tborder-radius: 8px;\n\ttransition: all 0.3s ease-in-out;\n\n\t&:focus {\n\t\toutline: none;\n\t\tborder: 1px solid #333;\n\t}\n"]))),T=A.a.input(l||(l=Object(g.a)(["\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\n\tpadding: 0 1.5rem;\n\tborder-radius: 8px;\n\n\tcolor: white;\n\tbackground-color: #2f80ed;\n\t/* display: flex;\n\talign-items: center;\n\tjustify-content: center; */\n"]))),q=A.a.div(u||(u=Object(g.a)(["\n\twidth: 100%;\n"]))),Y=Object(A.a)(S.a.label)(p||(p=Object(g.a)(["\n\t/* width: 100%; */\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tmargin: 1rem 0;\n\tmargin-right: auto;\n\n\t& span {\n\t\tfont-weight: 500;\n\t\tfont-size: 1rem;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t}\n"]))),G=A.a.input(b||(b=Object(g.a)(["\n\twidth: 30px;\n\theight: 30px;\n\tbackground-color: red;\n\tdisplay: none;\n"]))),H=Object(A.a)(S.a.div)(j||(j=Object(g.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\t& :nth-child(1) {\n\t\theight: 30px;\n\t\twidth: 30px;\n\t\ttransition: all 0.2s ease-in-out;\n\t\tcursor: pointer;\n\t\tbox-sizing: border-box;\n\t\tpadding: 2px;\n\n\t\t&:hover {\n\t\t\tcolor: ",";\n\t\t\tbackground-color: ",";\n\t\t\tborder-radius: 2px;\n\t\t\topacity: 0.7;\n\t\t}\n\n\t\t&:hover * {\n\t\t\tcolor: ",";\n\t\t\tborder: 1px solid black;\n\t\t}\n\t}\n"])),(function(t){return t.color||"black"}),(function(t){return t.color||"black"}),(function(t){t.color;return"white"}));function K(){var t=Object(f.useState)([]),n=Object(C.a)(t,2),e=n[0],r=n[1],c=Object(f.useState)("All"),a=Object(C.a)(c,2),i=a[0],o=a[1],s=Object(f.useState)(""),d=Object(C.a)(s,2),l=d[0],u=d[1],p=function(){var t=Object(k.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.get("/");case 3:n=t.sent,r(Object(y.a)(n.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(k.a)(w.a.mark((function t(n){var c,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=encodeURI("/update/status/".concat(n)),t.next=4,I.get(c);case 4:a=t.sent,r(Object(y.a)(e.map((function(t){return t.id===n?a.data:t})))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),j=function(){var t=Object(k.a)(w.a.mark((function t(n){var c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=encodeURI("/delete/".concat(n)),t.next=4,I.get(c);case 4:r(Object(y.a)(e.filter((function(t){return t.id!==n})))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=Object(k.a)(w.a.mark((function t(n){var c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,console.log("clicked"),t.next=5,I.post("/add",{name:l});case 5:c=t.sent,console.log(c.data),r([].concat(Object(y.a)(e),[c.data])),u(""),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(n){return t.apply(this,arguments)}}();return Object(f.useEffect)((function(){o("All"),p()}),[]),Object(E.jsxs)(L,{onSubmit:h,children:[Object(E.jsxs)(U,{children:[Object(E.jsx)(B,{children:"#todo"}),Object(E.jsxs)(D,{children:[Object(E.jsxs)(J,{onClick:function(){o("All")},children:[Object(E.jsx)("input",{type:"radio",name:"mode",value:"all",defaultChecked:"All"===i}),Object(E.jsx)("span",{children:"All"})]}),Object(E.jsxs)(J,{onClick:function(){o("Active")},children:[Object(E.jsx)("input",{type:"radio",name:"mode",value:"active",defaultChecked:"Active"===i}),Object(E.jsx)("span",{children:"Active"})]}),Object(E.jsxs)(J,{onClick:function(){o("Completed")},children:[Object(E.jsx)("input",{type:"radio",name:"mode",value:"completed",defaultChecked:"Completed"===i}),Object(E.jsx)("span",{children:"Completed"})]})]})]}),Object(E.jsxs)(M,{children:[Object(E.jsx)(P,{type:"text",required:!0,placeholder:"Enter a new task here...",onChange:function(t){return u(t.target.value)},value:l}),Object(E.jsx)(T,{type:"submit",value:"Send"})]}),Object(E.jsx)(q,{children:Object(E.jsx)(z.a,{children:e.filter((function(t){switch(i){case"Completed":return!0===t.completed;case"Active":return!1===t.completed;default:return!0}})).map((function(t){return Object(E.jsxs)(Y,{children:[Object(E.jsx)(H,{color:!0===t.completed?"green":"orange",children:!0===t.completed?Object(E.jsx)(R.a,{color:"green",id:t.id,onClick:function(){return b(t.id)}},"fi-check-circle"):Object(E.jsx)(R.b,{color:"orange",id:t.id,onClick:function(){return b(t.id)}},"fi-circle")}),Object(E.jsx)(G,{type:"checkbox"}),Object(E.jsx)("span",{children:t.content}),"Completed"===i&&Object(E.jsx)(H,{color:"tomato",children:Object(E.jsx)(R.c,{color:"tomato",id:t.id,onClick:function(){return j(t.id)}})})]},t.id)}))})})]})}var N=A.a.div(h||(h=Object(g.a)(['\n\twidth: 100%;\n\theight: 100%;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\tfont-family: "Montserrat", sans-serif;\n'])));var Q=function(){return Object(E.jsx)(N,{children:Object(E.jsx)(K,{})})},V=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,75)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;e(t),r(t),c(t),a(t),i(t)}))};O.a.render(Object(E.jsx)(x.a.StrictMode,{children:Object(E.jsx)(Q,{})}),document.getElementById("root")),V()}},[[71,1,2]]]);
//# sourceMappingURL=main.10757b93.chunk.js.map