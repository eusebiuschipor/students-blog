(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var l=c(1),r=c.n(l),n=c(6),i=c.n(n),o=(c(12),c(13),c(7)),a=c(2),s=c(0),j=function(e){return Object(s.jsx)("button",{onClick:e.click,children:e.text})},u=function(e){var t=Object(l.useState)(e.title),c=Object(a.a)(t,2),r=c[0],n=c[1];return Object(s.jsxs)("div",{className:"card full-width",children:[Object(s.jsx)("h1",{onClick:e.titleClick,style:{color:e.color},children:r}),Object(s.jsx)("p",{children:e.children}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"You can change the article title here:"})}),Object(s.jsx)("input",{type:"text",value:r,onChange:function(e){n(e.target.value)}}),Object(s.jsx)(j,{click:e.deleteHandler,text:"Delete article"})]})},d=[{id:1,text:"Pharagraph 1",title:"Title 1",color:"green"},{id:2,text:"Pharagraph 2",title:"Title 2",color:"yellow"},{id:3,text:"Pharagraph 3",title:"Title 3",color:"purple"},{id:4,text:"Pharagraph 4",title:"Title 4",color:"red"}],h=function(){var e=Object(l.useState)("black"),t=Object(a.a)(e,2),c=t[0],r=t[1],n=Object(l.useState)(d),i=Object(a.a)(n,2),h=i[0],b=i[1],m=function(e){r(e)};return Object(s.jsxs)("div",{className:"articles",children:[Object(s.jsx)(j,{click:function(){return m("red")},text:"Change color to red"}),h.map((function(e,t){return Object(s.jsx)(u,{title:e.title,color:c,titleClick:function(){return m(e.color)},deleteHandler:function(){return function(e){var t=Object(o.a)(h);t.splice(e,1),b(t)}(t)},children:e.text},e.id)}))]})},b=function(e){return Object(s.jsx)("div",{className:"title",children:e.text})},m=function(e){var t,c;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsxs)("h1",{style:{color:e.color},children:[e.firstName," ",e.lastName]}),Object(s.jsxs)("h3",{children:[Object(s.jsx)("strong",{children:"Course:"})," ",e.course]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Age:"})," ",(t=18,c=99,t=Math.ceil(t),c=Math.floor(c),Math.floor(Math.random()*(c-t+1)+t))]}),Object(s.jsx)(j,{click:e.toggleColorClick,text:"Trigger color"})]})},x=[{id:1,firstName:"Martin",lastName:"Randolph",course:"Frontend",email:"martin.randolph@gmail.com",color:"green"},{id:2,firstName:"Kieron",lastName:"Dotson",course:"Frontend",email:"Kieron.Dotson@gmail.com",color:"red"},{id:3,firstName:"Martin",lastName:"Randolph",course:"Frontend",email:"martin.randolph@gmail.com",color:"green"},{id:4,firstName:"Zack",lastName:"John",course:"Backend",email:"Zack.John@gmail.com",color:"yellow"},{id:5,firstName:"Maximillian",lastName:"Jacobson",course:"Backend",email:"Maximillian.Jacobson@gmail.com",color:"purple"},{id:6,firstName:"Popescu",lastName:"Gheorghe",course:"Backend",email:"gheorghe@yahoo.com",color:"lightblue"}],g=function(){var e=Object(l.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],n=Object(l.useState)(!1),i=Object(a.a)(n,2),o=i[0],u=i[1],d=null,h=function(){r(!c)};return d=o?x.map((function(e){return Object(s.jsx)(m,{firstName:e.firstName,lastName:e.lastName,course:e.course,email:e.email,color:c?"black":e.color,toggleColorClick:h},e.id)})):null,Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j,{click:h,text:"Trigger color"}),Object(s.jsx)(j,{click:function(){u(!o)},text:o?"Hide students":"Show students"}),d]})},O=function(e){return Object(s.jsxs)("div",{className:"title sub-title",children:[e.text," ",e.lengthValue]})},f=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{text:"Students"}),Object(s.jsx)(O,{text:"Number of students:",lengthValue:x.length}),Object(s.jsx)(g,{}),Object(s.jsx)(b,{text:"Blog articles"}),Object(s.jsx)(h,{})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,l=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),l(e),r(e),n(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.bbe1157c.chunk.js.map