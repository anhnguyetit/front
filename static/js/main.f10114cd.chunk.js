(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(t,e,n){},105:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(11),u=n.n(c),i=(n(56),n(7)),o=n(3),l=n.n(o),s=n(43),f=n(44),p=n.n(f).a.create({baseURL:"https://backend-nguyet.herokuapp.com/"});p.interceptors.request.use(function(){var t=Object(s.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),p.interceptors.response.use((function(t){return t&&t.data?t.data:t}),(function(t){throw t}));var m=p,d={getList:function(){return m.get("/products")}},g=(n(75),{postProduct:function(t){if(t!=={}){return m.post("/product",t)}}}),b=function(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],u=Object(a.useState)(0),o=Object(i.a)(u,2),l=o[0],s=o[1],f=Object(a.useState)(0),p=Object(i.a)(f,2),m=p[0],d=p[1],b=Object(a.useState)(""),h=Object(i.a)(b,2),v=h[0],O=h[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),""===n||l<=0||m<=0||""===v?alert("Lost info"):(g.postProduct({name:n,quantity:l,priceUnit:m,img:v}).then((function(t){return console.log(t.some)})).catch((function(t){return console.log(t.data)})),c(""),d(0),O(""),s(0))}},r.a.createElement("input",{type:"text",value:n,onChange:function(t){return c(t.target.value)}}),r.a.createElement("input",{type:"text",value:l,onChange:function(t){return s(parseInt(t.target.value))}}),r.a.createElement("input",{type:"text",value:m,onChange:function(t){return d(parseInt(t.target.value))}}),r.a.createElement("input",{type:"text",value:v,onChange:function(t){return O(t.target.value)}}),r.a.createElement("button",{type:"submit"},"Add"))},h=n(23),v=n(50),O={deleteProduct:function(t){if(t!=={}){var e="/delete/:".concat(JSON.stringify(t));return m.delete(e)}}},j=(n(101),function(t){var e=Object(a.useState)({columns:[{label:"Name",field:"name",width:50,attributes:{"aria-controls":"DataTable","aria-label":"Name"}},{label:"Quantity",field:"quantity",width:50},{label:"Price Unit",field:"priceUnit",width:50},{label:"Image",field:"img",width:300,sort:"disabled"},{label:"Action",field:"action",width:100,sort:"disabled"}],rows:[]}),n=Object(i.a)(e,2),c=n[0],u=n[1],o=t.list,l=t.isShow;return Object(a.useEffect)((function(){var t=o.map((function(t){return t.action=r.a.createElement("div",null,r.a.createElement("img",{height:"15px",width:"15px",onClick:function(){return e={id:t._id,name:t.name,quantity:t.quantity,unitPrice:t.priceUnit,img:t.img},void l(e);var e},src:"https://www.flaticon.com/svg/static/icons/svg/1159/1159633.svg",alt:"icon"}),r.a.createElement("img",{onClick:function(){return e=t.name,void O.deleteProduct(e).then((function(t){return console.log(t.some)})).catch((function(t){return console.log(t.data)}));var e},height:"15px",width:"15px",src:"https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg",alt:"icon"})),t.img=r.a.createElement("img",{src:t.img,alt:"icon",className:"product__img"}),t}));u(Object(h.a)(Object(h.a)({},c),{},{rows:t}))}),[o]),r.a.createElement(v.c,{hover:!0,entriesOptions:[5,20,25],entries:5,pagesAmount:4,data:c})});j.defaultProps={list:[],isShow:null};var w=j,E={updateProduct:function(t){if(t!=={}){return m.put("/updateproduct/",t)}}},y=function(t){var e=Object(a.useState)(""),n=Object(i.a)(e,2),c=n[0],u=n[1],o=Object(a.useState)(0),l=Object(i.a)(o,2),s=l[0],f=l[1],p=Object(a.useState)(0),m=Object(i.a)(p,2),d=m[0],g=m[1],b=Object(a.useState)(""),h=Object(i.a)(b,2),v=h[0],O=h[1],j=t.id,w=t.isShow;Object(a.useEffect)((function(){return u(j.name),f(j.quantity),g(j.unitPrice),O(j.img.props.src),function(){u(""),f(0),g(0),O("")}}),[]);return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),""===c||s<=0||d<=0||""===v?alert("Lost info"):(w(),E.updateProduct({id:j.id,name:c,quantity:s,priceUnit:d,img:v}).then((function(t){return console.log(t.some)})).catch((function(t){return console.log(t)})))}},r.a.createElement("input",{type:"text",value:c,onChange:function(t){return u(t.target.value)}}),r.a.createElement("input",{type:"text",value:s,onChange:function(t){return f(parseInt(t.target.value))}}),r.a.createElement("input",{type:"text",value:d,onChange:function(t){return g(parseInt(t.target.value))}}),r.a.createElement("input",{type:"text",value:v,onChange:function(t){return O(t.target.value)}}),r.a.createElement("button",{type:"submit"},"Edit"))};y.defaultProps={id:{},isShow:null};var S=y,C=n(51);var x=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],u=Object(a.useState)(!1),o=Object(i.a)(u,2),l=o[0],s=o[1],f=Object(a.useState)(""),p=Object(i.a)(f,2),m=p[0],g=p[1];Object(a.useEffect)((function(){d.getList().then((function(t){t&&c(t)})).catch((function(t){return console.log(t)}))}));var h=function(t){s(!l),g(t)};return r.a.createElement("div",{id:"img"},r.a.createElement(b,null),r.a.createElement("button",{onClick:function(){return function(){var t=document.getElementById("img");C.a(t).then((function(t){var e=new Image;e.src=t,document.body.appendChild(e)})).catch((function(t){console.error("oops, something went wrong!",t)}))}()}},"Share"),l&&r.a.createElement(S,{id:m,isShow:h}),n!==[]&&r.a.createElement(w,{list:n,isShow:h}))},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,u=e.getTTFB;n(t),a(t),r(t),c(t),u(t)}))};n(102),n(103),n(104);u.a.render(r.a.createElement(x,null),document.getElementById("root")),P()},56:function(t,e,n){},75:function(t,e,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.f10114cd.chunk.js.map