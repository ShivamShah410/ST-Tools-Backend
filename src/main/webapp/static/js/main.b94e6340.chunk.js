(this["webpackJsonpst-accn-tools"]=this["webpackJsonpst-accn-tools"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(20),r=a.n(n),l=(a(27),a(28),a(11)),o=a.n(l),i=a(15),d=a(7),h=a(8),j=a(10),u=a(9),b=a(0),m=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleEnvChange=function(t){e.setState({env:t.target.value})},e.handleDataChange=function(t){e.setState({data:t.target.value})},e.fetchData=Object(i.a)(o.a.mark((function t(){var a,c,s,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.state.data),console.log(e.state.env),a="http://localhost:8080/getdata/".concat(e.state.data),console.log(a),t.next=6,fetch(a);case 6:return c=t.sent,t.next=9,c.json();case 9:s=t.sent,n=e.state.data,e.setState({out:s[n]});case 12:case"end":return t.stop()}}),t)}))),e.state={env:"",data:"",out:"",loading:!1},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({env:"",data:"",out:""});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container my-3 text-center",children:[Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h3",{children:"Welcome to data generator tool...!!"}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"mb-3",children:["Select environment :",Object(b.jsxs)("select",{className:"form-select form-select-sm","aria-label":"Default select example",style:{width:"150px",margin:"auto"},value:this.state.env,onChange:this.handleEnvChange,children:[Object(b.jsx)("option",{defaultValue:"Choose env",children:"Choose env"}),Object(b.jsx)("option",{value:"E2",children:"E2"}),Object(b.jsx)("option",{value:"E8",children:"E8"}),Object(b.jsx)("option",{value:"C4",children:"C4"})]})]}),Object(b.jsxs)("div",{className:"mb-3",children:["Select the tyoe of data :",Object(b.jsxs)("select",{className:"form-select form-select-sm","aria-label":"Default select example",style:{width:"150px",margin:"auto"},value:this.state.data,onChange:this.handleDataChange,children:[Object(b.jsx)("option",{defaultValue:"Choose env",children:"Choose data"}),Object(b.jsx)("option",{value:"msisdn",children:"msisdn"}),Object(b.jsx)("option",{value:"iccid",children:"iccid"}),Object(b.jsx)("option",{value:"router",children:"router"}),Object(b.jsx)("option",{value:"imei",children:"imei"})]})]}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary",style:{margin:"10px 10px"},onClick:this.fetchData,children:"Generate Data"}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Your Data :"}),Object(b.jsx)("textarea",{className:"form-control text-center",id:"outputData",rows:"1",style:{width:"300px",margin:"auto"},value:this.state.out,readOnly:!0})]})]})}}]),a}(c.Component),x=m,v=a(12),O=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(v.b,{className:"navbar-brand",to:"/",children:"ST-Tools"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(v.b,{className:"nav-link",to:"/datatool",children:"DataTool"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(v.b,{className:"nav-link",to:"/orderreserve",children:"Order-Reserve"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(v.b,{className:"nav-link",to:"/curresponse",children:"Cur-Response"})})]}),Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-success",type:"submit",children:"Search"})]})]})]})})})}}]),a}(c.Component),p=O,f=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:"This is Homepoage of ST tools"})}}]),a}(c.Component),C=f,g=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleEnvChange=function(t){e.setState({env:t.target.value})},e.ordNumChange=function(t){e.setState({ord_num:t.target.value})},e.msisdnSet=function(){e.setState({msisdnIsCheck:!e.state.msisdnIsCheck})},e.iccidSet=function(){e.setState({iccidIsCheck:!e.state.iccidIsCheck})},e.orderSet=function(){e.setState({orderIsCheck:!e.state.orderIsCheck})},e.reserveData=function(){e.setState({out:"Order reserved successfully"})},e.state={env:"",ord_num:"",out:"",msisdnIsCheck:!1,iccidIsCheck:!1,orderIsCheck:!1,loading:!1},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({env:"",ord_num:"",out:"",msisdnIsCheck:!1,iccidIsCheck:!1,orderIsCheck:!1,loading:!1});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"container my-3 text-center",children:[Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h3",{children:"Welcome to Order Reserve tool...!!"}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"mb-3",children:["Select environment :",Object(b.jsxs)("select",{className:"form-select form-select-sm","aria-label":"Default select example",style:{width:"150px",margin:"auto"},value:this.state.env,onChange:this.handleEnvChange,children:[Object(b.jsx)("option",{defaultValue:"Choose env",children:"Choose env"}),Object(b.jsx)("option",{value:"E2",children:"E2"}),Object(b.jsx)("option",{value:"E8",children:"E8"}),Object(b.jsx)("option",{value:"C4",children:"C4"})]})]}),Object(b.jsxs)("div",{className:"mb-3",children:["Enter your Order No. :",Object(b.jsx)("input",{className:"form-control",type:"text",style:{width:"300px",margin:"auto"},"aria-label":"default input example",value:this.state.ord_num,onChange:this.ordNumChange})]}),Object(b.jsxs)("div",{className:"mb-3",style:{width:"100px",margin:"auto"},children:[Object(b.jsxs)("div",{className:"form-check",children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault",checked:this.state.msisdnIsCheck,onChange:this.msisdnSet}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"msisdn"})]}),Object(b.jsxs)("div",{className:"form-check",children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckChecked",checked:this.state.iccidIsCheck,onChange:this.iccidSet}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckChecked",children:"iccid"})]}),Object(b.jsxs)("div",{className:"form-check",children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckChecked",checked:this.state.orderIsCheck,onChange:this.orderSet}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckChecked",children:"order"})]})]}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary",style:{margin:"10px 10px"},onClick:this.reserveData,children:"Reserve"}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Output :"}),Object(b.jsx)("textarea",{className:"form-control text-center",id:"outputData",rows:"1",style:{width:"300px",margin:"auto"},value:this.state.out,readOnly:!0})]})]})})}}]),a}(c.Component),N=g,k=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleEnvChange=function(t){e.setState({env:t.target.value})},e.ordNumChange=function(t){e.setState({ord_num:t.target.value})},e.postCur=function(){e.setState({out:"Cur Response posted successfully"})},e.state={env:"",ord_num:"",out:"",loading:!1},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"container my-3 text-center",children:[Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h3",{children:"Welcome to Order Reserve tool...!!"}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"mb-3",children:["Select environment :",Object(b.jsxs)("select",{className:"form-select form-select-sm","aria-label":"Default select example",style:{width:"150px",margin:"auto"},value:this.state.env,onChange:this.handleEnvChange,children:[Object(b.jsx)("option",{defaultValue:"Choose env",children:"Choose env"}),Object(b.jsx)("option",{value:"E2",children:"E2"}),Object(b.jsx)("option",{value:"E8",children:"E8"}),Object(b.jsx)("option",{value:"C4",children:"C4"})]})]}),Object(b.jsxs)("div",{className:"mb-3",children:["Enter your Order No. :",Object(b.jsx)("input",{className:"form-control",type:"text",style:{width:"300px",margin:"auto"},"aria-label":"default input example",value:this.state.ord_num,onChange:this.ordNumChange})]}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary",style:{margin:"10px 10px"},onClick:this.postCur,children:"Post Cur Response"}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Output :"}),Object(b.jsx)("textarea",{className:"form-control text-center",id:"outputData",rows:"1",style:{width:"300px",margin:"auto"},value:this.state.out,readOnly:!0})]})]})})}}]),a}(c.Component),y=a(2);var S=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(v.a,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)(y.c,{children:[Object(b.jsx)(y.a,{exact:!0,path:"/",children:Object(b.jsx)(C,{})}),Object(b.jsx)(y.a,{exact:!0,path:"/datatool",children:Object(b.jsx)(x,{})}),Object(b.jsx)(y.a,{exact:!0,path:"/orderreserve",children:Object(b.jsx)(N,{})}),Object(b.jsx)(y.a,{exact:!0,path:"/curresponse",children:Object(b.jsx)(k,{})})]})]})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),w()}},[[36,1,2]]]);
//# sourceMappingURL=main.b94e6340.chunk.js.map