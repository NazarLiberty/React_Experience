(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,a,t){e.exports=t(42)},36:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(7),i=t.n(l),s=t(10),r=(t(36),t(65)),o=t(64);function d(e){return c.a.createElement(o.a,Object.assign({elevation:6,variant:"filled"},e))}function u(e){var a,t,n=c.a.useState(!1),l=Object(s.a)(n,2),i=l[0],o=l[1];e.open&&(o(!0),t="TEST");var u=function(e,a){"clickaway"!==a&&o(!1)};return e.del?(a="error",t="Day \u2116"+e.delDay+" have been deleted"):(a="success",t="Day \u2116"+e.addDay+" have been added"),c.a.createElement("div",{onClick:function(){o(!0)}},e.children,c.a.createElement(r.a,{open:i,autoHideDuration:1e3,onClose:u},c.a.createElement(d,{onClose:u,severity:a},t)))}function m(e){var a,t="",n="button";return"addDay"===e.type?(n+=" button--days",t=c.a.createElement(u,{del:!1,addDay:e.countDay}," ",c.a.createElement("i",{className:"far fa-plus-square"})," "),c.a.createElement("div",{className:n,onClick:e.action,title:"Add day"},t)):("addTask"===e.type&&(t=c.a.createElement("i",{className:"fas fa-marker"}),n+=" button--add_task"),"delDay"===e.type&&(a="Delete day",n+=" button--task_page",t=c.a.createElement("i",{className:"far fa-trash-alt"})),"delHash"===e.type&&(t=c.a.createElement("i",{className:"fas fa-ban"}),n="clear-hash__button"),"delTask"===e.type&&(t=c.a.createElement("i",{className:"far fa-trash-alt"}),n+=" button--task"),"editTask"===e.type&&(t=c.a.createElement("i",{className:"far fa-edit"}),n+=" button--task"),"editSave"===e.type&&(t="OK",n+=" button--task"),c.a.createElement("button",{className:n,onClick:e.action,title:a},t))}function y(e){var a;a=localStorage.length>0?JSON.parse(localStorage.getItem("days")):e.list;var t=Object(n.useState)(e.countDay),l=Object(s.a)(t,2),i=l[0],r=l[1],o=Object(n.useState)(1),d=Object(s.a)(o,2),u=d[0],m=d[1],y=Object(n.useState)(null),f=Object(s.a)(y,2),E=f[0],k=f[1],v=Object(n.useState)(a),b=Object(s.a)(v,2),D=b[0],S=b[1],O=Object(n.useState)(0),j=Object(s.a)(O,2),x=j[0],T=j[1],C=Object(n.useState)(D[x].page),w=Object(s.a)(C,2),I=w[0],A=w[1];return localStorage.setItem("days",JSON.stringify(D)),c.a.createElement("div",{className:"wrapper"},c.a.createElement(p,{page:D,addDay:function(){localStorage.countDay&&r(Number(localStorage.countDay)+2),_++,localStorage.setItem("countDay",_);var e={day:_+1,page:[]};D.push(e);var a=D.map((function(e){return e}));S(a)},setDay:function(e){var a;D.forEach((function(t){t.day===e&&(a=D.indexOf(t),A(t.page))})),T(a),m(e)},day:u,countDay:i}),c.a.createElement(g,{list:I,del:function(e){I.forEach((function(a){a.id===e&&D[x].page.splice(D[x].page.indexOf(a),1)})),A(D[x].page.map((function(e){return e})))},click:function(e){I.forEach((function(a){a.id===e&&(a.done=!a.done)})),A(I.map((function(e){return e})))},addTask:function(){if(0===N.length)alert("Type text of new task please");else{h++,localStorage.setItem("count",h);var e={text:N,done:!1,id:h};D[x].page.unshift(e);var a=D[x].page.map((function(e){return e}));A(a)}},delDay:function(){var e;k(u);var a=[];D.forEach((function(t){t.day!==u?a.push(t):e=D.indexOf(t)})),0===e&&2===D.length&&(S(a),T(0),m(D[1].day),A(D[1].page)),0===e&&D.length>2&&(S(a),T(1),m(D[1].day),A(D[1].page)),e===D.length-1&&D.length>1&&(T(e-1),S(a),m(D[e-1].day),A(D[e-1].page)),e>0&&e<D.length-1&&(T(e-1),S(a),m(D[e-1].day),A(D[e-1].page))},day:u,edit:function(e,a){D.forEach((function(t){t.page.forEach((function(t){t.id===e&&(t.text=a)}))}));var t=D.map((function(e){return e}));S(t)},deletedDay:E}))}function p(e){function a(a){e.setDay(a)}var t=e.page.map((function(t){return t.day===e.day?c.a.createElement(f,{text:t.day,key:t.day,day:t.day,setDay:a,active:!0}):c.a.createElement(f,{text:t.day,key:t.day,day:t.day,setDay:a})}));return c.a.createElement("div",{className:"day-list"},c.a.createElement(m,{type:"addDay",action:function(){e.addDay()},countDay:e.countDay}),t)}function f(e){var a="day";return e.active&&(a+=" day--active"),c.a.createElement("div",{className:a,onClick:function(a){e.setDay(e.day)}},c.a.createElement("div",{className:"day__line day__line--sub1"}),c.a.createElement("div",{className:"day__line day__line--sub2"}),c.a.createElement("div",{className:"day__line"}),e.text," ",c.a.createElement("span",{className:"day__sub"},"DAY"))}function g(e){return c.a.createElement("div",{className:"task-page"},c.a.createElement(u,{del:!0,delDay:e.deletedDay},c.a.createElement(m,{type:"delDay",action:function(){e.delDay(e.day)}})),c.a.createElement("div",{className:"task-page__inner"},c.a.createElement("h1",{className:"task-page__title"},"Day ",e.day,". Task list:"),c.a.createElement("div",null,c.a.createElement("input",{type:"text",className:"task-page__input",onChange:function(e){N=e.target.value},placeholder:"What is your focus today?"}),c.a.createElement(m,{type:"addTask",action:function(a){e.addTask(a)}})," "),c.a.createElement(E,{list:e.list,del:function(a){e.del(a)},click:function(a){e.click(a)},edit:function(a,t){e.edit(a,t)}}),c.a.createElement("div",{className:"clear-hash",onClick:function(){window.confirm("This action will remove your saved days and tasks after reload. Are you sure?")&&localStorage.clear()}},c.a.createElement(m,{type:"delHash"}),c.a.createElement("span",{className:"clear-hash__text"}," clear hash "))))}function E(e){function a(a){e.del(a)}function t(a){e.click(a)}function n(a,t){e.edit(a,t)}var l=e.list.map((function(e){return c.a.createElement(k,{text:e.text,done:e.done,key:e.id,del:a,id:e.id,click:t,edit:n})}));return 0===e.list.length?c.a.createElement("div",{className:"task-page__title"},"Add some tasks!"):c.a.createElement("div",{className:"task-page__task-list"},l)}function k(e){var a=Object(n.useState)(0),t=Object(s.a)(a,2),l=t[0],i=t[1],r=Object(n.useState)(e.text),o=Object(s.a)(r,2),d=o[0],u=o[1];function y(){e.edit(e.id,d),i(!l)}var p="task-page__check",f="task-page__task";return e.done&&(p+=" task-page__check--active"),e.done&&(f+=" task-page__task--active"),l&&!e.done?c.a.createElement("div",{className:"task-page__task-wrapper"},c.a.createElement("div",{className:f},c.a.createElement("div",{className:p}," "),c.a.createElement("input",{type:"text",onChange:function(e){u(e.target.value)},value:d,className:"task-page__task-input"})),c.a.createElement("div",{className:"button-block"},c.a.createElement(m,{type:"editSave",action:y}))):c.a.createElement("div",{className:"task-page__task-wrapper"},c.a.createElement("div",{className:f,onClick:function(){e.click(e.id)}},c.a.createElement("div",{className:p}," "),e.text),c.a.createElement("div",{className:"button-block"},c.a.createElement(m,{type:"editTask",action:y}),c.a.createElement(m,{type:"delTask",action:function(){e.del(e.id)}})))}function v(){return c.a.createElement(y,{list:b,countDay:_})}var h,_,b=[{day:1,page:[{text:"Complete application",done:!0,id:"d1_0"}]},{day:2,page:[]},{day:3,page:[]}],N="";h=null===localStorage.getItem("count")?2:Number(localStorage.getItem("count")),_=null===localStorage.getItem("countDay")?2:Number(localStorage.getItem("countDay"));t(41);i.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.807de4d9.chunk.js.map