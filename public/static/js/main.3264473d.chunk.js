(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(31),r=n.n(a),i=(n(41),n(15)),s=(n(42),n(11)),o=n(6),l=n(13),j=n(70),u=n(71),b=n(33),h=n(72),d=n(73),p=n(32),O=n(14),x=n.n(O),f=function e(){var t=this;Object(p.a)(this,e),this.loggeduser=function(){return t.app.get("/auth/logged-user")},this.login=function(e,n){return t.app.post("/auth/login",{username:e,password:n})},this.signup=function(e,n){return t.app.post("/auth/signup",{username:e,password:n})},this.app=x.a.create({baseURL:"https://prueba-deploy-back.herokuapp.com/sv/",withCredentials:!0}),this.axios=x.a},g=n(2);function m(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),o=Object(l.a)(i,2),p=o[0],O=o[1],x=new f;return Object(g.jsxs)(j.a,{children:[Object(g.jsx)("h1",{children:"LOGIN"}),Object(g.jsx)(u.a,{children:Object(g.jsxs)(b.a,{md:{span:10,offset:1},className:"pb-4",children:[Object(g.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),x.login(a,p).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:[Object(g.jsxs)(h.a.Group,{controlId:"email",children:[Object(g.jsx)(h.a.Label,{children:"E-mail"}),Object(g.jsx)(h.a.Control,{type:"email",value:a,onChange:function(e){return r(e.target.value)},name:"email"})]}),Object(g.jsxs)(h.a.Group,{controlId:"pwd",children:[Object(g.jsx)(h.a.Label,{children:"Password"}),Object(g.jsx)(h.a.Control,{type:"password",value:p,onChange:function(e){return O(e.target.value)},name:"pwd"})]}),Object(g.jsx)(d.a,{style:{marginTop:"20px",width:"100%"},bsPrefix:"btn-flat",variant:"primary",type:"submit",children:"Login"})]}),Object(g.jsx)("hr",{}),Object(g.jsx)(d.a,{bsPrefix:"btn-flat",variant:"primary",style:{marginTop:"20px",width:"100%"},onClick:function(){},children:"Cancel"}),Object(g.jsx)("hr",{}),Object(g.jsx)("p",{align:"center",children:Object(g.jsxs)("small",{children:["If you have not yet registered you can do so by clicking on the following link:"," ",Object(g.jsxs)(s.b,{to:"/signup/n",onClick:function(){},children:[" ","I'm not registered yet."," "]})]})})]})})]})}function v(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),o=Object(l.a)(i,2),p=o[0],O=o[1],x=new f;return Object(g.jsxs)(j.a,{children:[Object(g.jsx)("h1",{children:"SIGNUP"}),Object(g.jsx)(u.a,{children:Object(g.jsxs)(b.a,{md:{span:10,offset:1},className:"pb-4",children:[Object(g.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),x.signup(a,p).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:[Object(g.jsxs)(h.a.Group,{controlId:"email",children:[Object(g.jsx)(h.a.Label,{children:"E-mail"}),Object(g.jsx)(h.a.Control,{type:"email",value:a,onChange:function(e){return r(e.target.value)},name:"email"})]}),Object(g.jsxs)(h.a.Group,{controlId:"pwd",children:[Object(g.jsx)(h.a.Label,{children:"Password"}),Object(g.jsx)(h.a.Control,{type:"password",value:p,onChange:function(e){return O(e.target.value)},name:"pwd"})]}),Object(g.jsx)(d.a,{style:{marginTop:"20px",width:"100%"},bsPrefix:"btn-flat",variant:"primary",type:"submit",children:"Login"})]}),Object(g.jsx)("hr",{}),Object(g.jsx)(d.a,{bsPrefix:"btn-flat",variant:"primary",style:{marginTop:"20px",width:"100%"},onClick:function(){},children:"Cancel"}),Object(g.jsx)("hr",{}),Object(g.jsx)("p",{align:"center",children:Object(g.jsxs)("small",{children:["If you have not yet registered you can do so by clicking on the following link:"," ",Object(g.jsxs)(s.b,{to:"/signup/n",onClick:function(){},children:[" ","I'm not registered yet."," "]})]})})]})})]})}var y=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){x()({method:"get",url:"https://prueba-deploy-back.herokuapp.com/sv/auth/logged-user",withCredentials:!0}).then((function(e){return a(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(g.jsxs)("h1",{children:["my name is ",null===n||void 0===n?void 0:n.username]})};var w=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(s.b,{to:"/login",children:"login"}),Object(g.jsx)(s.b,{to:"/signup",children:"signup"}),Object(g.jsx)(s.b,{to:"/profile",children:"profile"})]}),Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"/login",render:function(e){return Object(g.jsx)(m,Object(i.a)({},e))}}),Object(g.jsx)(o.a,{path:"/signup",render:function(e){return Object(g.jsx)(v,Object(i.a)({},e))}}),Object(g.jsx)(o.a,{path:"/profile",render:function(e){return Object(g.jsx)(y,Object(i.a)({},e))}})]})]})};r.a.render(Object(g.jsx)(s.a,{children:Object(g.jsx)(w,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.3264473d.chunk.js.map