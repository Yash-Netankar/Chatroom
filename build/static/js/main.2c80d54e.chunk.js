(this.webpackJsonpadvanced=this.webpackJsonpadvanced||[]).push([[0],{151:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(10),r=n.n(s),i=n(34),o=n(11),l=n(65),u=n.n(l),d=n(88),m=n(53),j=n(66),h=n(19),b=n(184),p=n(2),O=function(){var e=Object(o.f)(),t=Object(c.useState)({name:"",age:18,location:""}),n=Object(h.a)(t,2),a=n[0],s=n[1],r=function(e){var t=e.target,n=t.name,c=t.value;s((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(m.a)({},n,c))}))},i=function(){var t=Object(d.a)(u.a.mark((function t(n){var c,s,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),c=document.querySelector(".error_div"),s=/^[\d]{2}$/,r=/^[a-zA-Z]{2,20}$/,/^[a-zA-Z]{2,8}([0-9]?){2}$/.test(a.name)?s.exec(a.age)?r.exec(a.location)?e.push("/chatroom/".concat(a.name)):c.innerHTML="Invalid Location!!<br>Can't be greater than 20 and no spaces or special characters allowed.":c.innerHTML="Invalid Age!!<br>Should be greater than 18 and less than 100.":c.innerHTML="Invalid Name!!<br>Spaces, more than 2 digits, special characters, starting with digit not allowed.";case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"login_container",children:[Object(p.jsx)("h1",{children:"Sign In For Free"}),Object(p.jsxs)("div",{className:"login_form",children:[Object(p.jsx)("div",{className:"error_div"}),Object(p.jsxs)("form",{onSubmit:i,children:[Object(p.jsx)("input",{type:"text",name:"name",onChange:r,value:a.name,placeholder:"Enter Username"}),Object(p.jsx)("input",{type:"number",name:"age",min:18,onChange:r,value:a.age,placeholder:"Enter Age"}),Object(p.jsx)("input",{type:"text",name:"location",onChange:r,value:a.location,placeholder:"Enter Location"}),Object(p.jsx)(b.a,{type:"submit",children:"Enter Chatroom"})]})]})]})})},x=n(188),g=n(102),v=n(190),f=n(97),y=n.n(f),_=function(e){var t=e.options,n=(e.setSidebar,a.a.useState(null)),c=Object(h.a)(n,2),s=c[0],r=c[1],i=Boolean(s),o=function(){r(null)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},children:Object(p.jsx)(y.a,{})}),Object(p.jsx)(g.a,{id:"long-menu",anchorEl:s,keepMounted:!0,open:i,onClose:o,PaperProps:{style:{maxHeight:216,width:"20ch"}},children:t.map((function(e){return Object(p.jsx)(v.a,{selected:"Close"===e,onClick:o,children:e},e)}))})]})},S=n(189),N=n(57),C=n.n(N),T=n(101),E=n.n(T),k=n(98),L=n.n(k),q=function(e){return Object(p.jsxs)("div",{className:e.uinfo?"user_info show":"user_info",children:[Object(p.jsx)(b.a,{onClick:function(){return e.setUinfo(!1)},children:Object(p.jsx)(L.a,{})}),Object(p.jsx)("h1",{children:"Built By: Yash Netankar"}),Object(p.jsx)("h1",{children:"Pune"})]})},w=n(100),M=n.n(w),P=n(99),I=n.n(P).a.connect("/"),A=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(h.a)(s,2),i=r[0],l=r[1],u=Object(c.useState)(""),d=Object(h.a)(u,2),m=d[0],j=d[1],O=Object(c.useState)(""),x=Object(h.a)(O,2),g=x[0],v=x[1],f=[Object(p.jsx)(b.a,{onClick:function(){return l(!1)},children:"Close"}),"In Progress1","In Progress2"],y=Object(o.g)().name;Object(c.useEffect)((function(){I.emit("new_user_joined",y),I.on("user_joined",(function(e){var t=document.querySelector(".chat_screen"),n=document.createElement("div");n.classList.add("msg"),n.classList.add("joined"),n.innerText="".concat(e," joined the chat"),t.append(n)})),I.on("receive",(function(e){T(e.msg,e.name,"they")})),I.on("left",(function(e){var t=document.querySelector(".chat_screen"),n=document.createElement("div");n.classList.add("msg"),n.classList.add("joined"),n.innerText="".concat(e.name," Left the chat"),t.append(n),I.emit("user_left",e.name)})),I.on("pvt_msg_emit",(function(e){T(e.msg,e.name,"their_privateMSG",!0)})),I.on("list_of_users",(function(e){N(e)}));var e=null;I.on("typing",(function(t){var n,c;document.querySelector(".typing")&&(document.querySelector(".typing").innerText=t.msg),n=function(){document.querySelector(".typing").innerText=""},c=1e3,e&&clearTimeout(e),e=setTimeout((function(){n()}),c)})),document.getElementById("msg_input").addEventListener("keyup",(function(e){I.emit("typing",{name:y})}))}),[]);var N=function(e){document.querySelector(".users_div").innerHTML="\n        ".concat(e.map((function(e){return'\n            <li className="ulist_uname">'.concat(e,"</li>")})))},T=function(e,t,n){var c=document.querySelector(".chat_screen"),a=document.createElement("div");a.classList.add("msg"),a.classList.add(n);var s=document.createElement("span");s.innerText=t,s.addEventListener("click",(function(e){return v(e.target.innerText)})),a.append(s);var r=document.createElement("p");r.innerText=e,a.append(r),c.append(a),c.scrollTop=c.scrollHeight};return Object(p.jsxs)("div",{className:"chatroom_container",children:[Object(p.jsxs)("section",{className:i?"sec1 show":"sec1",children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("h1",{children:"Ny chatroom"}),Object(p.jsx)(_,{options:f,setSidebar:l})]}),Object(p.jsx)("ul",{className:"users_div"})]}),Object(p.jsxs)("section",{className:"sec2",children:[Object(p.jsxs)("header",{children:[Object(p.jsxs)("h1",{children:[Object(p.jsx)(b.a,{className:"arrow_btn",onClick:function(){return l(!0)},children:Object(p.jsx)(M.a,{})}),"All Chat"]}),Object(p.jsx)(q,{setUinfo:a,uinfo:n}),Object(p.jsx)("p",{className:"typing"}),Object(p.jsx)(_,{options:["In Progress3","In Progress4"]})]}),Object(p.jsx)("div",{className:"chat_screen",children:Object(p.jsxs)("div",{className:"msg me",children:[Object(p.jsx)("span",{onClick:function(){return a(!n)},children:"Owner"}),"Welcome To The Ny's Chatroom!!"]})}),Object(p.jsxs)("form",{className:"msg_box",onSubmit:function(e){e.preventDefault(),T(m,"You","me"),I.emit("send",m),j(""),document.querySelector("#msg_input").focus()},children:[Object(p.jsx)(S.a,{id:"msg_input",label:"Your Message",placeholder:"Message",onChange:function(e){return j(e.target.value)},value:m,multiline:!0}),Object(p.jsx)(b.a,{className:"send_btn",type:"button",onClick:function(){if(""!==g)I.emit("pvt_msg",{msg:m,pvt_uname:g}),T(m,"You","my_privateMSG"),j(""),document.querySelector("#msg_input").focus();else{var e=prompt("Please Select A username by clicking on the names you can see in chatscreen to send a private message OR enter a name here");""!==e?(I.emit("pvt_msg",{msg:m,pvt_uname:e}),T(m,"You","my_privateMSG"),j(""),document.querySelector("#msg_input").focus()):alert("Please Select A username by clicking on the names you can see in chatscreen to send a private message")}},title:"Private Message",children:Object(p.jsx)(E.a,{})}),Object(p.jsx)(b.a,{className:"send_btn",type:"submit",title:"Send to All",children:Object(p.jsx)(C.a,{})})]})]})]})},H=["Exit","Delete All"],Y={margin:"0 auto",border:"2px solid black",width:"100%"},B=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(o.g)().name;Object(c.useEffect)((function(){document.querySelector(".uname").innerText="Chatting Privately With ".concat(s)}),[]);return Object(p.jsx)("div",{className:"chatroom_container",children:Object(p.jsxs)("section",{className:"sec2",style:Y,children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("h1",{children:"Private Chat"}),Object(p.jsx)("p",{className:"typing"}),Object(p.jsx)(_,{options:H})]}),Object(p.jsx)("div",{className:"chat_screen",children:Object(p.jsxs)("div",{className:"msg me",children:[Object(p.jsx)("span",{children:"Private Chat"}),Object(p.jsx)("p",{className:"uname"}),Object(p.jsx)("h1",{style:{color:"red",fontSize:"2rem"},children:"This page is under Development"})]})}),Object(p.jsxs)("form",{className:"msg_box",onSubmit:function(e){e.preventDefault(),function(e,t,n){var c=document.querySelector(".chat_screen"),a=document.createElement("div");a.classList.add("msg"),a.classList.add(n);var s=document.createElement("span");s.innerText=t,a.append(s);var r=document.createElement("p");r.innerText=e,a.append(r),c.append(a),c.scrollTop=c.scrollHeight}(n,"You","me"),a(""),document.querySelector("#msg_input").focus()},children:[Object(p.jsx)(S.a,{id:"msg_input",label:"Your Message",placeholder:"Message",onChange:function(e){return a(e.target.value)},value:n,multiline:!0}),Object(p.jsx)(b.a,{className:"send_btn",type:"submit",children:Object(p.jsx)(C.a,{})})]})]})})};n(151);var D=function(){return Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/",exact:!0,render:function(){return Object(p.jsx)(O,{})}}),Object(p.jsx)(o.a,{path:"/chatroom/:name",exact:!0,render:function(){return Object(p.jsx)(A,{})}}),Object(p.jsx)(o.a,{path:"/chatroom/privateroom/:name",exact:!0,render:function(){return Object(p.jsx)(B,{})}})]})};r.a.render(Object(p.jsx)(i.a,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.2c80d54e.chunk.js.map