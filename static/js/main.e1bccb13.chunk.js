(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{25:function(e,a,t){e.exports={message:"Message_message__Rsm2j",avatarArea:"Message_avatarArea__2cyS5",avatarArea2:"Message_avatarArea2__2HzUw",avatar:"Message_avatar__2yhL0",messageArea:"Message_messageArea__1Jy3A",nameOfSender:"Message_nameOfSender__JhYK3",textData:"Message_textData__tBjOm",textArea:"Message_textArea__2pRKG",timeArea:"Message_timeArea__2teID"}},31:function(e,a,t){e.exports={affairGrid:"Affairs_affairGrid__1joyk",buttonDiv:"Affairs_buttonDiv__3ZqsJ",deleteButton:"Affairs_deleteButton__2smbD",highTask:"Affairs_highTask__2q65N",middleTask:"Affairs_middleTask___sxG4",lowTask:"Affairs_lowTask__1wsXj"}},32:function(e,a,t){e.exports={inputContainer:"Greeting_inputContainer__3wo8c",input:"Greeting_input__1zMKO",error:"Greeting_error__1_yiW",errorMessage:"Greeting_errorMessage__Z4Xhz",btn:"Greeting_btn__1vKtg",info:"Greeting_info__2gOCx"}},33:function(e,a,t){e.exports={inputArea:"UniversalInputArea_inputArea__2m2FH",btn0:"UniversalInputArea_btn0__1_Hlx",btn1:"UniversalInputArea_btn1__1CMzd",btn2input:"UniversalInputArea_btn2input__1bJYx",btn2textarea:"UniversalInputArea_btn2textarea__37wRV",buttonArea:"UniversalInputArea_buttonArea__2HqkA",buttonAreaBtn2textarea:"UniversalInputArea_buttonAreaBtn2textarea__1wKF9",cancelButton:"UniversalInputArea_cancelButton__lc5l1"}},39:function(e,a,t){e.exports={mySidenav:"Header_mySidenav___eO81",menu:"Header_menu__Auzs-"}},45:function(e,a,t){e.exports={superInput:"SuperInputText_superInput__SLMTT",errorInput:"SuperInputText_errorInput__3xYsR",error:"SuperInputText_error__3NFmd"}},53:function(e,a,t){e.exports={blue:"HW4_blue__2hflB",column:"HW4_column__1TZx6",testSpanError:"HW4_testSpanError__bH9wa"}},54:function(e,a,t){e.exports={default:"SuperButton_default__JJW4c",red:"SuperButton_red__7zbD0"}},55:function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Sleps",spanClassName:"SuperCheckbox_spanClassName__1kQ25"}},60:function(e,a,t){e.exports={App:"App_App__3SIOJ"}},66:function(e,a,t){e.exports={affairGrid:"HW8_affairGrid__1if3z"}},82:function(e,a,t){e.exports=t(92)},87:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),c=t.n(l),o=(t(87),t(60)),u=t.n(o),i=t(30),s=t(13);var m=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},d=t(25),p=t.n(d);var E=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("div",{className:p.a.avatarArea},r.a.createElement("div",{className:p.a.avatarArea2},r.a.createElement("img",{className:p.a.avatar,src:e.avatar}))),r.a.createElement("div",{className:p.a.messageArea},r.a.createElement("div",{className:p.a.nameOfSender},e.name),r.a.createElement("div",{className:p.a.textData},r.a.createElement("span",{className:p.a.textArea},e.message),r.a.createElement("span",{className:p.a.timeArea},e.time))))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",v="some text",h="22:00";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(E,{avatar:f,name:_,message:v,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},g=t(7),k=t(31),C=t.n(k);var y=function(e){return r.a.createElement("div",{className:C.a.affairGrid},r.a.createElement("div",{className:C.a[e.affair.priority+"Task"]},e.affair.priority),r.a.createElement("div",{className:C.a[e.affair.priority+"Task"]},e.affair.name),r.a.createElement("button",{className:C.a.deleteButton,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var x=function(e){var a=e.data.map((function(a){return r.a.createElement(y,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("div",{className:C.a.buttonDiv},r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low")))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(n.useState)(O),a=Object(g.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(g.a)(c,2),u=o[0],i=o[1],s=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(x,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(15),A=t(32),S=t.n(A),w=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o="empty"===l?S.a.error:"";return r.a.createElement("div",{className:S.a.inputContainer},r.a.createElement("input",{value:a,onChange:t,className:S.a.input+" "+o}),r.a.createElement("span",{className:S.a.errorMessage},l),r.a.createElement("button",{className:S.a.btn,onClick:n},"add"),r.a.createElement("span",{className:S.a.info},"Total number of users: ",c))},T=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(g.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(g.a)(i,2),m=s[0],d=s[1],p=a.length;return r.a.createElement(w,{name:o,setNameCallback:function(e){u(e.currentTarget.value),d("")},addUser:function(){t(o),o?alert("Hello  ! ".concat(o)):d("empty"),u("")},error:m,totalUsers:p})},B=t(131);var F=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(T,{users:t,addUserCallback:function(e){e&&l([].concat(Object(j.a)(t),[{_id:Object(B.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=t(22),M=t(45),G=t.n(M),U=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],H=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(I.a)(e,U),s="".concat(G.a.error," ").concat(u||""),m="".concat(G.a.errorInput," ").concat(o||G.a.superInput," ");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},D=t(53),J=t.n(D),P=t(54),K=t.n(P),W=["red","className"],R=function(e){var a=e.red,t=e.className,n=Object(I.a)(e,W),l="".concat(a?K.a.red:K.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},z=t(55),q=t.n(z),X=["type","onChange","onChangeChecked","className","spanClassName","children"],Y=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(I.a)(e,X),o="".concat(q.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(!c.checked)||a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:q.a.spanClassName},l))};var Z=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1],c=t?"":"empty text",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(g.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(H,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(H,{className:J.a.blue}),"-------------------",r.a.createElement(R,null,"default"),r.a.createElement(R,{red:!0,onClick:o},"delete "),r.a.createElement(R,{disabled:!0},"disabled"),r.a.createElement(Y,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(Y,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},L=["autoFocus","onBlur","onEnter","spanProps"],Q=["children","onDoubleClick","className"],V=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(I.a)(e,L),o=Object(n.useState)(!1),u=Object(g.a)(o,2),i=u[0],s=u[1],m=l||{},d=m.children,p=m.onDoubleClick,E=m.className,f=Object(I.a)(m,Q),_="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",E);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(H,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),p&&p(e)},className:_},f),d||c.value))};function $(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ee(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var ae=t(33),te=t.n(ae),ne=t(133),re=t(129),le=t(134),ce=t(135),oe=t(128),ue=t(127),ie=function(e){var a=e.type,t=e.onEntityFunction,l=e.placeholders,c=e.placeholder,o=e.initText,u=void 0===o?"":o,i=e.autoFocus,s=void 0!==i&&i,m=e.forbidEmptyInput,d=void 0===m||m,p=e.minRows,E=void 0===p?2:p,f=e.maxRows,_=void 0===f?4:f,v=e.onBlurFunction,h=e.addButtonText,b=void 0===h?"":h,k=e.showCancelButton,C=void 0!==k&&k,y=e.cancelButtonText,x=void 0===y?"":y,O=e.keyPressMode,N=e.showErrorMessage,j=void 0===N||N,A=Object(n.useState)(l?l[Math.floor(Math.random()*l.length)]:c),S=Object(g.a)(A,1)[0],w=void 0===v,T=O||("textarea"===a?"ctrlEnter":"both"),B=[w,C].filter(Boolean).length,F="".concat(te.a.inputArea," ").concat(te.a["btn"+(B>1?B+a:B)]," ").concat(j?te.a.inputAreaShowError:""),I=2===B&&"textarea"===a?te.a.buttonAreaBtn2textarea:te.a.buttonArea,M=te.a.cancelButton,G=Object(n.useState)(u),U=Object(g.a)(G,2),H=U[0],D=U[1],J=function(e){R(""),D(e.currentTarget.value)},P=Object(n.useState)(""),K=Object(g.a)(P,2),W=K[0],R=K[1],z=function(){!d||H?(H&&t(H),void 0!==v?v():D("")):function(e){R(e)}("No empty values are allowed")},q=function(e){("\n"!==e.key||"both"!==T&&"ctrlEnter"!==T)&&("Enter"!==e.key||"both"!==T&&"enter"!==T)||z()},X=function(){return D(u)},Y=function(){return!v||z()};return r.a.createElement(ne.a,{className:F},"input"===a&&r.a.createElement(re.a,{variant:"standard",value:H,autoFocus:s,placeholder:S,error:!!W,helperText:W,onChange:J,onKeyPress:q,onBlur:Y}),"textarea"===a&&r.a.createElement(re.a,{variant:"standard",value:H,autoFocus:s,placeholder:S,error:!!W,helperText:W,onChange:J,onKeyPress:q,onBlur:Y,multiline:!0,minRows:E,maxRows:_}),r.a.createElement(ne.a,{className:I},w&&(b&&x?r.a.createElement(le.a,{variant:"outlined",startIcon:r.a.createElement(ue.a,null),onClick:z},b):r.a.createElement(ce.a,{"aria-label":"delete",onClick:z},r.a.createElement(ue.a,null))),C&&(b&&x?r.a.createElement(le.a,{variant:"outlined",startIcon:r.a.createElement(oe.a,null),className:M,onClick:X},x):r.a.createElement(ce.a,{className:M,onClick:X},r.a.createElement(oe.a,null)))))};function se(e){var a=Object(n.useState)(!1),t=Object(g.a)(a,2),l=t[0],c=t[1],o=function(){return c(!l)};return l?r.a.createElement(ie,{type:"input",onEntityFunction:function(a){e.onEntityFunction(a)},initText:e.text,autoFocus:!0,onBlurFunction:function(){o()},placeholder:e.placeholder}):r.a.createElement(ne.a,{component:"div",sx:{display:"inline"},onDoubleClick:o},e.text?e.text:e.placeholder)}var me=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(V,{autoFocus:!0,value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(R,{onClick:function(){$("editable-span-value",t)}},"save"),r.a.createElement(R,{onClick:function(){l(ee("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement(se,{text:t,onEntityFunction:function(e){l(e)},placeholder:"type something"}),r.a.createElement("hr",null))};var de=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(N,null),r.a.createElement(F,null),r.a.createElement(Z,null),r.a.createElement(me,null))},pe=["options","onChange","onChangeOption"],Ee=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(I.a)(e,pe),c=a.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}));return r.a.createElement("select",Object.assign({onChange:function(e){n&&n(e.currentTarget.value),n||t&&t(e)}},l),c)},fe=["type","name","options","value","onChange","onChangeOption"],_e=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(I.a)(e,fe),function(e){c&&c(e.currentTarget.value),c||l&&l(e)}),u=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{onChange:o,type:"radio",value:e,checked:e===n,name:e}),e)})):[];return r.a.createElement(r.a.Fragment,null,u)},ve=["x","y","z"];var he=function(){var e=Object(n.useState)(ve[1]),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(Ee,{options:ve,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(_e,{name:"radio",options:ve,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},be=function(e,a){switch(a.type){case"sort":return"up"===a.payload?Object(j.a)(e).sort((function(e,a){return e.age-a.age})):Object(j.a)(e).sort((function(e,a){return a.age-e.age}));case"check":return Object(j.a)(e).filter((function(e){return e.age>=a.payload}));default:return e}},ge=t(66),ke=t.n(ge),Ce=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ye=function(){var e=Object(n.useState)(Ce),a=Object(g.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{className:ke.a.affairGrid,key:e._id},r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){return l(be(Ce,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){return l(be(Ce,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){return l(be(Ce,{type:"check",payload:18}))}},"18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var xe=function(){return r.a.createElement("div",null,r.a.createElement(he,null),r.a.createElement(ye,null))},Oe="/pre-junior",Ne="/junior",je="/junior_plus";var Ae=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",element:r.a.createElement(s.a,{to:Oe})}),r.a.createElement(s.b,{path:Oe,element:r.a.createElement(de,null)}),r.a.createElement(s.b,{path:Ne,element:r.a.createElement(xe,null)}),"// add routes",r.a.createElement(s.b,{path:"/*",element:r.a.createElement(m,null)})))},Se=t(39),we=t.n(Se);var Te=function(){return r.a.createElement("div",{className:we.a.mySidenav},r.a.createElement("span",null,r.a.createElement(i.b,{className:we.a.menu,to:Oe},"pre_junior"),r.a.createElement(i.b,{className:we.a.menu,to:Ne},"junior"),r.a.createElement(i.b,{className:we.a.menu,to:je},"junior+")))};var Be=function(){return r.a.createElement("div",null,r.a.createElement(Te,null),r.a.createElement(Ae,null))};var Fe=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Be,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[82,1,2]]]);
//# sourceMappingURL=main.e1bccb13.chunk.js.map