(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={message:"Message_message__Rsm2j",avatarArea:"Message_avatarArea__2cyS5",avatarArea2:"Message_avatarArea2__2HzUw",avatar:"Message_avatar__2yhL0",messageArea:"Message_messageArea__1Jy3A",nameOfSender:"Message_nameOfSender__JhYK3",textData:"Message_textData__tBjOm",textArea:"Message_textArea__2pRKG",timeArea:"Message_timeArea__2teID"}},function(e,a,t){e.exports={affairGrid:"Affairs_affairGrid__1joyk",buttonDiv:"Affairs_buttonDiv__3ZqsJ",deleteButton:"Affairs_deleteButton__2smbD",highTask:"Affairs_highTask__2q65N",middleTask:"Affairs_middleTask___sxG4",lowTask:"Affairs_lowTask__1wsXj"}},function(e,a,t){e.exports={inputContainer:"Greeting_inputContainer__3wo8c",input:"Greeting_input__1zMKO",error:"Greeting_error__1_yiW",errorMessage:"Greeting_errorMessage__Z4Xhz",btn:"Greeting_btn__1vKtg",info:"Greeting_info__2gOCx"}},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__SLMTT",errorInput:"SuperInputText_errorInput__3xYsR",error:"SuperInputText_error__3NFmd"}},function(e,a,t){e.exports={blue:"HW4_blue__2hflB",column:"HW4_column__1TZx6",testSpanError:"HW4_testSpanError__bH9wa"}},function(e,a,t){e.exports={default:"SuperButton_default__JJW4c",red:"SuperButton_red__7zbD0"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Sleps",spanClassName:"SuperCheckbox_spanClassName__1kQ25"}},,,function(e,a,t){e.exports={App:"App_App__3SIOJ"}},,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),s=(t(21),t(14)),o=t.n(s),i=t(2),m=t.n(i);var u=function(e){return r.a.createElement("div",{className:m.a.message},r.a.createElement("div",{className:m.a.avatarArea},r.a.createElement("div",{className:m.a.avatarArea2},r.a.createElement("img",{className:m.a.avatar,src:e.avatar}))),r.a.createElement("div",{className:m.a.messageArea},r.a.createElement("div",{className:m.a.nameOfSender},e.name),r.a.createElement("div",{className:m.a.textData},r.a.createElement("span",{className:m.a.textArea},e.message),r.a.createElement("span",{className:m.a.timeArea},e.time))))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",d="Some Name",f="some text",p="22:00";var E=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(u,{avatar:_,name:d,message:f,time:p}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=t(1),v=t(3),g=t.n(v);var b=function(e){return r.a.createElement("div",{className:g.a.affairGrid},r.a.createElement("div",{className:g.a[e.affair.priority+"Task"]},e.affair.priority),r.a.createElement("div",{className:g.a[e.affair.priority+"Task"]},e.affair.name),r.a.createElement("button",{className:g.a.deleteButton,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var k=function(e){var a=e.data.map((function(a){return r.a.createElement(b,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("div",{className:g.a.buttonDiv},r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low")))},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(n.useState)(N),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(h.a)(c,2),o=s[0],i=s[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(k,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(15),A=t(4),O=t.n(A),y=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s="empty"===l?O.a.error:"";return r.a.createElement("div",{className:O.a.inputContainer},r.a.createElement("input",{value:a,onChange:t,className:O.a.input+" "+s}),r.a.createElement("span",{className:O.a.errorMessage},l),r.a.createElement("button",{className:O.a.btn,onClick:n},"add"),r.a.createElement("span",{className:O.a.info},"Total number of users: ",c))},S=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),m=Object(h.a)(i,2),u=m[0],_=m[1],d=a.length;return r.a.createElement(y,{name:s,setNameCallback:function(e){o(e.currentTarget.value),_("")},addUser:function(){t(s),s?alert("Hello  ! ".concat(s)):_("empty"),o("")},error:u,totalUsers:d})},j=t(24);var w=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(S,{users:t,addUserCallback:function(e){e&&l([].concat(Object(x.a)(t),[{_id:Object(j.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(5),M=t(8),G=t.n(M),I=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],B=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(T.a)(e,I),m="".concat(G.a.error," ").concat(o||""),u="".concat(G.a.errorInput," ").concat(s||G.a.superInput," ");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},i)),c&&r.a.createElement("span",{className:m},c))},D=t(9),J=t.n(D),W=t(10),F=t.n(W),H=["red","className"],K=function(e){var a=e.red,t=e.className,n=Object(T.a)(e,H),l="".concat(a?F.a.red:F.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},U=t(11),z=t.n(U),L=["type","onChange","onChangeChecked","className","spanClassName","children"],P=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,L),s="".concat(z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(!c.checked)||a&&a(e)},className:s},c)),l&&r.a.createElement("span",{className:z.a.spanClassName},l))};var R=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t?"":"empty text",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),i=Object(h.a)(o,2),m=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(B,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(B,{className:J.a.blue}),"-------------------",r.a.createElement(K,null,"default"),r.a.createElement(K,{red:!0,onClick:s},"delete "),r.a.createElement(K,{disabled:!0},"disabled"),r.a.createElement(P,{checked:m,onChangeChecked:u},"some text "),r.a.createElement(P,{checked:m,onChange:function(e){return u(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var X=function(){return r.a.createElement("div",null,"// add NavLinks")};var Z=function(){return r.a.createElement("div",null,"// add routes")};var q=function(){return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(Z,null))};var Y=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(E,null),r.a.createElement(C,null),r.a.createElement(w,null),r.a.createElement(R,null),r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.31b89e0b.chunk.js.map