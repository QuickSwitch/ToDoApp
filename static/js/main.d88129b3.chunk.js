(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{15:function(e,t,n){e.exports=n(28)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),o=n.n(i),c=(n(20),n(12)),l=n(7),s=n(8),u=n(2),m=n(14),d=n(13),h=(n(21),n(22),n(9)),f=n(10);var v=function(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,t.text,r.a.createElement("span",null,r.a.createElement(h.a,{className:"faicons",icon:"times",onClick:function(){return e.deleteItem(t.key)}}))))}));return r.a.createElement("div",null,r.a.createElement(f.a,{duration:100,easing:"ease-in-out"},t))},p=n(4),I=n(11);p.b.add(I.a);var b=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.addItem=a.addItem.bind(Object(u.a)(a)),a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(console.log(t),""!==t.text){var n=[].concat(Object(c.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"todoform",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"What needs to be done.",value:this.state.currentItem.text,onChange:this.handleInput}))),r.a.createElement(v,{items:this.state.items,deleteItem:this.deleteItem}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d88129b3.chunk.js.map