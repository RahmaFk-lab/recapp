(this.webpackJsonpapplication=this.webpackJsonpapplication||[]).push([[0],{134:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(25),r=a.n(n),l=(a(134),a(2)),o=(a.p,a(43),a(13)),i=a.n(o),j=a(20),b=a(3),d=a(12),m=a(29),p=a.n(m),u=a(263),h=(a(81),a(82),a.p+"static/media/uploading.09d784b7.png"),f=a(1);function O(e){if(""!==e){e.type.split(".").pop();var t="application/pdf"===e.type;t||u.b.error("Vous ne pouvez importer que des fichiers PDF !");var a=e.size/1024/1024<3;return a||u.b.error("PDF must smaller than 3MB!"),t&&a}return u.b.warning("S\xe9lection votre CV svp!"),!1}var v=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)("Coisir un fichier"),r=Object(b.a)(n,2),l=(r[0],r[1]),o=Object(c.useState)(!1),m=Object(b.a)(o,2),u=m[0],v=m[1],x=Object(c.useState)(!1),g=Object(b.a)(x,2),N=g[0],y=g[1],C=Object(c.useState)(""),w=Object(b.a)(C,2),S=w[0],k=w[1],F=(Object(d.f)(),function(){var e=Object(j.a)(i.a.mark((function e(t){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(c=new FormData).append("file",a),console.log(c),s=O(a),console.log(a),console.log(s),!s){e.next=18;break}return e.prev=8,y(!0),e.next=12,p.a.post("https://backendofmatchingapp.herokuapp.com/uploadcv",c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){alert(e.data.msg),k(e.data.cv),v(!0)})).catch((function(e){console.log(e)}));case 12:e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t){return e.apply(this,arguments)}}());return Object(f.jsxs)("div",{className:"App",children:[u&&Object(f.jsx)(d.a,{to:{pathname:"/formCv",state:{datacv:S}}}),Object(f.jsx)("h2",{children:"Importer votre CV! "}),Object(f.jsx)("div",{className:"upload-container","align-items":"center",children:Object(f.jsxs)("div",{className:"border-container",children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:h,alt:"",width:"50px"})}),Object(f.jsxs)("form",{action:"/uploadcv",method:"post",onSubmit:F,children:[Object(f.jsx)("div",{class:"input-group mb-3",children:Object(f.jsx)("input",{class:"form-control form-control-lg",id:"formFileLg",type:"file",onChange:function(e){s(e.target.files[0]),l(e.target.files[0].name)}})}),Object(f.jsx)("div",{className:"button",children:Object(f.jsx)("button",{id:"btn",type:"submit",value:"Upload",className:"btn btn-primary btn-block mt-4 col-lg-4",children:" Analyser mon CV"})})," "]})]})}),N&&Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Traitement en cours ..."}),Object(f.jsx)("div",{class:"spinner-border m-5",role:"status"})]})]})};function x(e){if(""!==e){e.type.split(".").pop();var t="application/pdf"===e.type;t||u.b.error("Vous ne pouvez importer que des fichiers PDF !");var a=e.size/1024/1024<3;return a||u.b.error("PDF must smaller than 3MB!"),t&&a}return u.b.warning("S\xe9lection votre Offre svp!"),!1}var g=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)("Coisir un fichier"),r=Object(b.a)(n,2),l=(r[0],r[1]),o=Object(c.useState)(!1),m=Object(b.a)(o,2),u=m[0],O=m[1],v=Object(c.useState)(!1),g=Object(b.a)(v,2),N=g[0],y=g[1],C=Object(c.useState)(""),w=Object(b.a)(C,2),S=w[0],k=w[1],F=function(){var e=Object(j.a)(i.a.mark((function e(t){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(c=new FormData).append("file",a),console.log(c),s=x(a),console.log(a),console.log(s),!s){e.next=18;break}return e.prev=8,y(!0),e.next=12,p.a.post("https://backendofmatchingapp.herokuapp.com/uploadoffre",c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){alert(e.data.msg),k(e.data.offre),O(!0)})).catch((function(e){console.log(e)}));case 12:e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"App",children:[u&&Object(f.jsx)(d.a,{to:{pathname:"/formOffre",state:{dataoffre:S}}}),Object(f.jsx)("h2",{children:"Importer votre Offre! "}),Object(f.jsx)("div",{className:"upload-container","align-items":"center",children:Object(f.jsxs)("div",{className:"border-container",children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:h,alt:"",width:"50px"})}),Object(f.jsxs)("form",{action:"uploadoffre",method:"post",onSubmit:F,children:[Object(f.jsx)("div",{class:"input-group mb-3",children:Object(f.jsx)("input",{class:"form-control form-control-lg",id:"formFileLg",type:"file",onChange:function(e){s(e.target.files[0]),l(e.target.files[0].name)}})}),Object(f.jsx)("div",{className:"button",children:Object(f.jsx)("button",{id:"btn",type:"submit",value:"Upload",className:"btn btn-primary btn-block mt-4 col-lg-4",children:" Analyser mon Offre"})})]})]})}),N&&Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Traitement en cours ..."}),Object(f.jsx)("div",{class:"spinner-border m-5",role:"status"})]})]})},N=(a(84),a.p+"static/media/recin-transparent.e8e80ebe.png");a(260);var y=function(e){console.log("dataCV",e.location.state.datacv);var t=JSON.parse(e.location.state.datacv),a=Object(c.useState)(t.Name),s=Object(b.a)(a,2),n=s[0],r=s[1],l=Object(c.useState)(t.Email),o=Object(b.a)(l,2),d=o[0],m=o[1],u=Object(c.useState)(t.Phone),h=Object(b.a)(u,2),O=h[0],v=h[1],x=Object(c.useState)(t.Adresse),g=Object(b.a)(x,2),y=g[0],C=g[1],w=Object(c.useState)(t.Competences),S=Object(b.a)(w,2),k=S[0],F=S[1],D=function(){var e=Object(j.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("Form submitted:"),a={name:n,email:d,phone:O,addr:y,skill:k},p.a.post("https://backendofmatchingapp.herokuapp.com/addcv",a).then((function(e){alert(e.data.msg),console.log(e.data.CV)})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{classNameName:"App",children:Object(f.jsx)("div",{className:"container register",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-md-3 register-left",children:[Object(f.jsx)("img",{src:N,alt:""}),Object(f.jsx)("h3",{children:"Welcome"}),Object(f.jsx)("p",{children:"You have to modify your own informations now!"})]}),Object(f.jsxs)("div",{className:"col-md-9 register-right",children:[Object(f.jsx)("ul",{className:"nav nav-tabs nav-justified",id:"myTab",role:"tablist"}),Object(f.jsx)("div",{className:"tab-content",id:"myTabContent",children:Object(f.jsx)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:Object(f.jsxs)("form",{onSubmit:D,children:[Object(f.jsx)("h3",{className:"register-heading",children:"Modify Your Informations :"}),Object(f.jsxs)("div",{className:"row register-form",children:[Object(f.jsxs)("div",{className:"col-md-12",children:[Object(f.jsx)("label",{className:"form-label",children:"Nom et pr\xe9nom :"}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",value:n,onChange:function(e){r(e.target.value)}}),Object(f.jsx)("div",{class:"invalid-feedback",children:"Please choose a username."})]}),Object(f.jsx)("label",{className:"form-label",children:"Adresse email :"}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",value:d,onChange:function(e){m(e.target.value)}})}),Object(f.jsx)("label",{className:"form-label",children:"Numero de t\xe9l\xe9phone :"}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",value:O,onChange:function(e){v(e.target.value)}})}),Object(f.jsx)("label",{className:"form-label",children:"Ville :"}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"Ville",value:y,onChange:function(e){C(e.target.value)}})}),Object(f.jsx)("label",{className:"form-label","margin-left":"0.5px",children:"Comp\xe9tences :"}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"Competences *",value:k,onChange:function(e){F(e.target.value)}})})]}),Object(f.jsx)("input",{type:"submit",className:"btnRegister",value:"Register"})]})]})})})]})]})})})};var C=function(e){console.log("dataOffre",e.location.state.dataoffre);var t=JSON.parse(e.location.state.dataoffre),a=Object(c.useState)(t.Email),s=Object(b.a)(a,2),n=s[0],r=s[1],l=Object(c.useState)(t.Adresse),o=Object(b.a)(l,2),d=o[0],m=o[1],u=Object(c.useState)(t.Competences),h=Object(b.a)(u,2),O=h[0],v=h[1],x=Object(c.useState)(t.Mission),g=Object(b.a)(x,2),y=g[0],C=g[1],w=Object(c.useState)(""),S=Object(b.a)(w,2),k=S[0],F=S[1],D=function(){var e=Object(j.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("Form submitted:"),a={name:k,email:n,addr:d,skill:O,mission:y},p.a.post("https://backendofmatchingapp.herokuapp.com/addoffre",a).then((function(e){alert(e.data.msg),console.log(e.data.OFFRE)})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{classNameName:"App",children:Object(f.jsx)("div",{className:"container register",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-md-3 register-left",children:[Object(f.jsx)("img",{src:N,alt:""}),Object(f.jsx)("h3",{children:"Welcome"}),Object(f.jsx)("p",{children:"You have to modify your own informations now!"})]}),Object(f.jsxs)("div",{className:"col-md-9 register-right",children:[Object(f.jsx)("ul",{className:"nav nav-tabs nav-justified",id:"myTab",role:"tablist"}),Object(f.jsx)("div",{className:"tab-content",id:"myTabContent",children:Object(f.jsx)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:Object(f.jsxs)("form",{onSubmit:D,children:[Object(f.jsx)("h3",{className:"register-heading",children:"Modify Your Informations :"}),Object(f.jsxs)("div",{className:"row register-form",children:[Object(f.jsxs)("div",{className:"col-md-12",children:[Object(f.jsx)("label",{className:"form-label",children:"Nom de la soci\xe9t\xe9 :"}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",value:k,onChange:function(e){F(e.target.value)}})}),Object(f.jsx)("label",{className:"form-label",children:"Adresse email :"}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",value:n,onChange:function(e){r(e.target.value)}})}),Object(f.jsx)("label",{className:"form-label",children:"Adresse :"}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"Ville",value:d,onChange:function(e){m(e.target.value)}})}),Object(f.jsx)("label",{className:"form-label",children:"Description de l'offre :"}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3",value:y,onChange:function(e){C(e.target.value)}})}),Object(f.jsx)("label",{className:"form-label","margin-left":"0.5px",children:"Comp\xe9tences :"}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"Competences *",value:O,onChange:function(e){v(e.target.value)}})})]}),Object(f.jsx)("input",{type:"submit",className:"btnRegister",value:"Register"})]})]})})})]})]})})})},w=a(28);var S=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(w.a,{children:[Object(f.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(f.jsxs)("div",{class:"container-fluid",children:[Object(f.jsx)("a",{class:"navbar-brand",href:"#",children:"REC-INOV"}),Object(f.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)("span",{class:"navbar-toggler-icon"})}),Object(f.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(f.jsxs)("ul",{class:"navbar-nav",children:[Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)("a",{class:"nav-link ","aria-current":"page",href:"/",children:"Espace Candidat"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)("a",{class:"nav-link",href:"/importoffre",children:"Espace Entreprise"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)("a",{class:"nav-link",href:"#",children:"A propos"})})]})})]})}),Object(f.jsx)(d.b,{path:"/formOffre",render:function(e){return Object(f.jsx)(C,Object(l.a)({},e))}}),Object(f.jsx)(d.b,{path:"/formCv",render:function(e){return Object(f.jsx)(y,Object(l.a)({},e))}}),Object(f.jsx)(d.b,{path:"/",exact:!0,component:v}),Object(f.jsx)(d.b,{path:"/importoffre",exact:!0,component:g})]})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,264)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};a(259);r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root")),k()},43:function(e,t,a){},84:function(e,t,a){}},[[261,1,2]]]);
//# sourceMappingURL=main.1bad0fe4.chunk.js.map