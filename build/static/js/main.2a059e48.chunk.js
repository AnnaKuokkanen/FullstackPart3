(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(14),c=t.n(r),o=t(4),l=t(2),i=t(3),m=t.n(i),s="/api/persons",f=function(){return m.a.get(s)},d=function(e){return m.a.post(s,e)},b=function(e){return m.a.delete("".concat(s,"/").concat(e))},v=function(e,n){return m.a.put("".concat(s,"/").concat(e),n)},h=function(e){var n=e.handler,t=e.value;return u.a.createElement("div",null,"filter shown with",u.a.createElement("input",{onChange:n,value:t}))},p=function(e){var n=e.people,t=e.onClick;return u.a.createElement("div",null,u.a.createElement("ul",null,n.map((function(e){return u.a.createElement("ul",{key:e.name},e.name," ",e.number,u.a.createElement("button",{onClick:function(){return t(e.id)}},"delete"))}))))},E=function(e){var n=e.onSubmit,t=e.nameHandler,a=e.nameValue,r=e.numberHandler,c=e.numberValue;return u.a.createElement("div",null,u.a.createElement("form",{onSubmit:n},"name:",u.a.createElement("input",{onChange:t,value:a}),u.a.createElement("br",null),"number:",u.a.createElement("input",{onChange:r,value:c}),u.a.createElement("br",null),u.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.message;return""===n?null:u.a.createElement("div",{className:"notification"},n)},j=function(e){var n=e.message;return""===n?null:u.a.createElement("div",{className:"error"},n)},O=(t(37),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),m=i[0],s=i[1],O=Object(a.useState)(""),w=Object(l.a)(O,2),k=w[0],S=w[1],y=Object(a.useState)(""),C=Object(l.a)(y,2),H=C[0],T=C[1],V=Object(a.useState)(""),N=Object(l.a)(V,2),D=N[0],J=N[1],L=Object(a.useState)(""),P=Object(l.a)(L,2),x=P[0],B=P[1];Object(a.useEffect)((function(){var e=[];f().then((function(n){r(e.concat(n.data))}))}),[]);var I=function(e){var n=t.find((function(n){return n.id===e})),a=window.confirm("".concat(n.name," is already in the phonebook. Replace ").concat(n.name,"?")),u=Object(o.a)(Object(o.a)({},n),{},{number:k});a&&v(e,u).then(r(t.map((function(n){return n.id!==e?n:u})))).then(J("".concat(n.name,"'s number is successfully updated"))).then(setTimeout((function(){J("")}),5e3)).catch((function(e){J(""),B("Person '".concat(n.name,"' was already removed from server")),setTimeout((function(){B("")}),5e3)}))},R=0===H.length?t:t.filter((function(e){return e.name.toLowerCase().includes(H.toLowerCase())}));return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(g,{message:D}),u.a.createElement(j,{message:x}),u.a.createElement(h,{handler:function(e){console.log(e.target.value),T(e.target.value)},value:H}),u.a.createElement("h2",null,"add a new"),u.a.createElement(E,{onSubmit:function(e){e.preventDefault();var n={name:m,number:k},a=t.concat(n);if(0===t.filter((function(e){return e.name===n.name})).length)d(n).then((function(e){console.log(e)})).then(r(a)).then(J("".concat(n.name," is successfully added to phonebook"))).then(setTimeout((function(){J("")}),5e3));else{var u=t.filter((function(e){return e.name===n.name}))[0];I(u.id)}s(""),S(""),T("")},nameHandler:function(e){console.log(e.target.value),s(e.target.value)},nameValue:m,numberHandler:function(e){console.log(e.target.value),S(e.target.value)},numberValue:k}),u.a.createElement("h2",null,"Numbers"),u.a.createElement(p,{people:R,onClick:function(e){var n=t.find((function(n){return n.id===e}));if(window.confirm("Delete ".concat(n.name,"?"))){b(e);var a=t.filter((function(n){return n.id!==e}));r(a),J("".concat(n.name," is successfully removed from phonebook")),setTimeout((function(){J("")}),5e3)}}}))});c.a.render(u.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2a059e48.chunk.js.map