(this["webpackJsonpsms-sender-client"]=this["webpackJsonpsms-sender-client"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),i=c(13),a=c.n(i),r=c(3),l=c(14),o=c(15),j=c.n(o),u=new function e(){Object(l.a)(this,e),this.sendSMS=function(e,t){return new Promise((function(c,s){j.a.post("".concat("http://127.0.0.1:4000","/send-sms"),{phoneNumber:e,smsContent:t}).then((function(e){console.error(e.data),0===e.data.code?c(e.data):s(e.data.message)}),(function(e){s(e.message)}))}))}},d=(c(38),c(39),c(0)),b=function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(),a=Object(r.a)(i,2),l=a[0],o=a[1],j=Object(s.useState)(!1),b=Object(r.a)(j,2),p=b[0],x=b[1],O=Object(s.useState)(null),f=Object(r.a)(O,2),g=f[0],v=f[1],y=function(){return c&&l};return Object(d.jsxs)("div",{className:"root container",children:[Object(d.jsx)("nav",{className:"text-center pt-5 pb-3",children:Object(d.jsxs)("h5",{children:["  ",Object(d.jsx)("i",{className:"bi bi-chat-left-dots"})," SMS Sender Client   "]})}),Object(d.jsxs)("div",{className:"form-container p-3 col-md-4",style:{margin:"auto"},children:[Object(d.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),v(null),y()?(x(!0),u.sendSMS("+".concat(c),l).then((function(e){x(!1),v(Object(d.jsx)(h,{type:"success",icon:"check-circle",message:e.message,content:JSON.stringify(e.result)}))}),(function(e){x(!1),v(Object(d.jsx)(h,{type:"danger",icon:"x-circle",message:e}))}))):v(Object(d.jsx)(h,{type:"danger",icon:"x-circle",message:"Please to fill the form fields !"}))}(e)},children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"number",className:"form-control custom-input",placeholder:"Phone number",onChange:function(e){n(e.target.value),v(null)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("textarea",{type:"text",rows:3,className:"form-control custom-input",placeholder:"SMS Content",onChange:function(e){o(e.target.value),v(null)}})}),Object(d.jsx)("div",{className:"form-group",children:p?Object(d.jsx)(m,{}):Object(d.jsxs)("button",{type:"submit",className:"btn btn-primary form-control submit-btn",children:[Object(d.jsx)("i",{className:"bi bi-check2-circle"})," Submit"]})})]}),g&&Object(d.jsx)(d.Fragment,{children:g})]})]})},m=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",display:"block"},width:"60px",height:"60px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(d.jsx)("defs",{children:Object(d.jsxs)("clipPath",{id:"ldio-srn82rmralr-cp",children:[Object(d.jsxs)("rect",{x:"0",y:"0",width:"100",height:"50",children:[Object(d.jsx)("animate",{attributeName:"y",repeatCount:"indefinite",dur:"2.2222222222222223s",calcMode:"spline",values:"0;50;0;0;0",keyTimes:"0;0.4;0.5;0.9;1",keySplines:"0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"}),Object(d.jsx)("animate",{attributeName:"height",repeatCount:"indefinite",dur:"2.2222222222222223s",calcMode:"spline",values:"50;0;0;50;50",keyTimes:"0;0.4;0.5;0.9;1",keySplines:"0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"})]}),Object(d.jsxs)("rect",{x:"0",y:"50",width:"100",height:"50",children:[Object(d.jsx)("animate",{attributeName:"y",repeatCount:"indefinite",dur:"2.2222222222222223s",calcMode:"spline",values:"100;50;50;50;50",keyTimes:"0;0.4;0.5;0.9;1",keySplines:"0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"}),Object(d.jsx)("animate",{attributeName:"height",repeatCount:"indefinite",dur:"2.2222222222222223s",calcMode:"spline",values:"0;50;50;0;0",keyTimes:"0;0.4;0.5;0.9;1",keySplines:"0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"})]})]})}),Object(d.jsx)("g",{transform:"translate(50 50)",children:Object(d.jsx)("g",{transform:"scale(0.9)",children:Object(d.jsx)("g",{transform:"translate(-50 -50)",children:Object(d.jsxs)("g",{children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"rotate",dur:"2.2222222222222223s",repeatCount:"indefinite",values:"0 50 50;0 50 50;180 50 50;180 50 50;360 50 50",keyTimes:"0;0.4;0.5;0.9;1"}),Object(d.jsx)("path",{"clip-path":"url(#ldio-srn82rmralr-cp)",fill:"white",d:"M54.864 50L54.864 50c0-1.291 0.689-2.412 1.671-2.729c9.624-3.107 17.154-12.911 19.347-25.296 c0.681-3.844-1.698-7.475-4.791-7.475H28.908c-3.093 0-5.472 3.631-4.791 7.475c2.194 12.385 9.723 22.189 19.347 25.296 c0.982 0.317 1.671 1.438 1.671 2.729v0c0 1.291-0.689 2.412-1.671 2.729C33.84 55.836 26.311 65.64 24.117 78.025 c-0.681 3.844 1.698 7.475 4.791 7.475h42.184c3.093 0 5.472-3.631 4.791-7.475C73.689 65.64 66.16 55.836 56.536 52.729 C55.553 52.412 54.864 51.291 54.864 50z"}),Object(d.jsx)("path",{fill:"#0062cc",d:"M81 81.5h-2.724l0.091-0.578c0.178-1.122 0.17-2.243-0.022-3.333C76.013 64.42 68.103 54.033 57.703 50.483l-0.339-0.116 v-0.715l0.339-0.135c10.399-3.552 18.31-13.938 20.642-27.107c0.192-1.089 0.2-2.211 0.022-3.333L78.276 18.5H81 c2.481 0 4.5-2.019 4.5-4.5S83.481 9.5 81 9.5H19c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5h2.724l-0.092 0.578 c-0.178 1.122-0.17 2.243 0.023 3.333c2.333 13.168 10.242 23.555 20.642 27.107l0.338 0.116v0.715l-0.338 0.135 c-10.4 3.551-18.31 13.938-20.642 27.106c-0.193 1.09-0.201 2.211-0.023 3.333l0.092 0.578H19c-2.481 0-4.5 2.019-4.5 4.5 s2.019 4.5 4.5 4.5h62c2.481 0 4.5-2.019 4.5-4.5S83.481 81.5 81 81.5z M73.14 81.191L73.012 81.5H26.988l-0.128-0.309 c-0.244-0.588-0.491-1.538-0.28-2.729c2.014-11.375 8.944-20.542 17.654-23.354c2.035-0.658 3.402-2.711 3.402-5.108 c0-2.398-1.368-4.451-3.403-5.108c-8.71-2.812-15.639-11.979-17.653-23.353c-0.211-1.191 0.036-2.143 0.281-2.731l0.128-0.308 h46.024l0.128 0.308c0.244 0.589 0.492 1.541 0.281 2.731c-2.015 11.375-8.944 20.541-17.654 23.353 c-2.035 0.658-3.402 2.71-3.402 5.108c0 2.397 1.368 4.45 3.403 5.108c8.71 2.812 15.64 11.979 17.653 23.354 C73.632 79.651 73.384 80.604 73.14 81.191z"})]})})})})]})})},h=function(e){return Object(d.jsx)("div",{className:"",children:Object(d.jsxs)("div",{className:"alert alert-".concat(e.type),children:[Object(d.jsx)("i",{className:"bi bi-".concat(e.icon)}),"\xa0",e.message]})})};var p=function(){return Object(d.jsx)(b,{})};c(43),c(44);a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.eb4d907e.chunk.js.map