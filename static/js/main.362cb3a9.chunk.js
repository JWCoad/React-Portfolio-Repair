(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{63:function(e,t,a){},64:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),n=a(28),c=a.n(n),l=(a(63),a(9)),r=a(14),o=a(11),u=a(10),d=a(31),b=a(7),j=a(17),m=a(30),h=a(58),O=(a(64),a(20)),x=a(21),p=a(1);var f=function(){return Object(p.jsx)("footer",{className:"mt-5",children:Object(p.jsx)(j.a,{fluid:!0,children:Object(p.jsx)(O.a,{className:"border-top justify-content-between p-3",children:Object(p.jsx)(x.a,{className:"p-0",md:3,sm:12,children:"Created by JWC"})})})})},g=a(53);var v=function(e){return Object(p.jsx)(g.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(p.jsx)(j.a,{fluid:!0,children:Object(p.jsx)(O.a,{className:"justify-content-center py-5",children:Object(p.jsxs)(x.a,{md:8,sm:12,children:[e.title&&Object(p.jsx)("h1",{className:"display-1 font-weight-bolder",children:e.title}),e.subTitle&&Object(p.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.text&&Object(p.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})})})})},C=a(27),k=a(44);var N=function(e){var t=Object(k.b)({opacity:1,from:{opacity:0}});return Object(p.jsxs)(k.a.div,{className:"g-card-info",style:t,children:[Object(p.jsx)("p",{className:"g-card-title",children:e.title}),Object(p.jsx)("p",{className:"g-card-sub-title",children:e.subTitle}),Object(p.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})};var S=function(e){return Object(p.jsxs)("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)},children:[Object(p.jsx)("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(p.jsx)(N,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},y=a.p+"static/media/screenshot.12cf9811.JPG",T=a.p+"static/media/screenshot1.5913e41a.JPG",J=a.p+"static/media/screenshot2.a8b2517b.png",w=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).handleCardClick=function(e,t){var a=Object(C.a)(i.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),i.setState({items:a})},i.makeItems=function(e){return e.map((function(e){return Object(p.jsx)(S,{item:e,click:function(t){return i.handleCardClick(e.id,t)}},e.id)}))},i.state={items:[{id:0,title:"Gigtastic",subTitle:"Event finder application",imgSrc:T,link:"https://github.com/JWCoad/cool-event-app",selected:!1},{id:1,title:"Warhouse",subTitle:"An inventory management system",imgSrc:J,link:"https://github.com/JWCoad/WareHouse",selected:!1},{id:2,title:"Imbibe",subTitle:"Table reservation system",imgSrc:y,link:"https://github.com/JWCoad/Imbibe",selected:!1}]},i}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsx)(j.a,{fluid:!0,children:Object(p.jsx)(O.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),a}(s.a.Component);var E=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(v,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(p.jsx)(w,{})]})};var F=function(e){return Object(p.jsx)(j.a,{fluid:!0,children:Object(p.jsx)(O.a,{className:"justify-content-center",children:Object(p.jsx)(x.a,{md:8,children:e.children})})})};var q=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(v,{title:e.title}),Object(p.jsx)(F,{children:Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia quis libero sit amet accumsan. Curabitur tempor ornare erat, nec commodo lectus pellentesque vitae. Duis justo mauris, sodales vel urna sit amet, molestie tempus leo. Donec iaculis dolor sed felis porttitor varius. Duis gravida nisi nec quam lacinia tincidunt. Etiam id ullamcorper urna. Aliquam ornare consequat interdum. Quisque ornare est et molestie laoreet. Vestibulum congue in ex in faucibus. Suspendisse interdum massa hendrerit ultrices placerat. Aliquam erat volutpat. Etiam consectetur facilisis lectus, sit amet dictum ex auctor a."})})]})},L=a(26),W=a(16),A=a(55),D=a(54),G=a.n(D),I=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,s=t.name;i.setState(Object(L.a)({},s,a))},i.handleSubmit=function(e){e.preventDefault(),console.log(e.target),i.setState({disabled:!0}),G.a.post("http://localhost:3030/api/email",i.state).then((function(e){e.data.success?i.setState({disabled:!1,emailSent:!0}):i.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),i.setState({disabled:!1,emailSent:!1})}))},i.state={name:"",email:"",message:"",disabled:!1,emailSent:null},i}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(v,{title:this.props.title}),Object(p.jsx)(F,{children:Object(p.jsxs)(W.a,{onSubmit:this.handleSubmit,children:[Object(p.jsxs)(W.a.Group,{children:[Object(p.jsx)(W.a.Label,{htmlFor:"full-name",children:"Full Name"}),Object(p.jsx)(W.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)(W.a.Group,{children:[Object(p.jsx)(W.a.Label,{htmlFor:"email",children:"Email"}),Object(p.jsx)(W.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(p.jsxs)(W.a.Group,{children:[Object(p.jsx)(W.a.Label,{htmlFor:"message",children:"Message"}),Object(p.jsx)(W.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})]}),Object(p.jsx)(A.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled,children:"Send"}),!0===this.state.emailSent&&Object(p.jsx)("p",{className:"d-inline success-msg",children:"Email Sent"}),!1===this.state.emailSent&&Object(p.jsx)("p",{className:"d-inline err-msg",children:"Email Not Sent"})]})})]})}}]),a}(s.a.Component),P=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state={title:"Jesse Coad",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Web Devopler",subTitle:"React Portfolio",text:"Checkout my projects below"},about:{title:"About Me"},contact:{title:"Contact information"}},i}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)(d.a,{children:Object(p.jsxs)(j.a,{className:"p-0",fluid:!0,children:[Object(p.jsxs)(m.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(p.jsx)(m.a.Brand,{children:"Jesse Coad"}),Object(p.jsx)(m.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(p.jsx)(m.a.Collapse,{id:"navbar-toggle",children:Object(p.jsxs)(h.a,{className:"ml-auto",children:[Object(p.jsx)(d.b,{className:"nav-link",to:"/",children:"Home"}),Object(p.jsx)(d.b,{className:"nav-link",to:"/about",children:"About"}),Object(p.jsx)(d.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(p.jsx)(b.a,{path:"/",exact:!0,render:function(){return Object(p.jsx)(E,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(p.jsx)(b.a,{path:"/about",render:function(){return Object(p.jsx)(q,{title:e.state.about.title})}}),Object(p.jsx)(b.a,{path:"/contact",render:function(){return Object(p.jsx)(I,{title:e.state.contact.title})}}),Object(p.jsx)(f,{})]})})}}]),a}(s.a.Component),B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,97)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),i(e),s(e),n(e),c(e)}))};a(94);c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root")),B()}},[[95,1,2]]]);
//# sourceMappingURL=main.362cb3a9.chunk.js.map