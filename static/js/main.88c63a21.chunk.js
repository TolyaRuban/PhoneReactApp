(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),i=a(6),o=a(7),s=a(1),m=a(2),d=a(4),u=a(3),h=a(5);var p=function(e){var t=e.id,a=e.name,n=e.image,l=e.snippet,c=e.onLinkClicked,i=e.onAddClick;return r.a.createElement("li",{className:"phone","data-element":"phone-element","data-phone-id":t},r.a.createElement("div",{className:"phone-wrapper"},r.a.createElement("div",{className:"phone__item"},r.a.createElement("a",{onClick:c,href:"#!/phones/"+a,className:"thumb","data-element":"details-link"},r.a.createElement("img",{alt:a,src:n}))),r.a.createElement("div",{className:"phone__item"},r.a.createElement("a",{className:"link",onClick:c,href:"#!/phones/"+a,"data-element":"details-link"},a),r.a.createElement("p",null,l)),r.a.createElement("div",{className:"phone__item"},r.a.createElement("a",{className:"btn btn-success","data-element":"add-to-cart",onClick:i},"Add"))))},f=function(e){function t(e){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderPhones",value:function(){var e=this.props,t=e.onPhoneClicked,a=e.onAddClicked;return e.phones.map(function(e){return r.a.createElement(p,{id:e.id,key:"phone-"+e.age,name:e.name,image:e.imageUrl,snippet:e.snippet,onLinkClicked:function(){t(e.id)},onAddClick:function(){a(e.name)}})})}},{key:"render",value:function(){return r.a.createElement("ul",{className:"catalog"},this.renderPhones())}}]),t}(r.a.Component),g=a(8),k=a.n(g),v=a(11),E="https://mate-academy.github.io/phone-catalogue-static/api",b={getAll:function(){var e=Object(v.a)(k.a.mark(function e(){var t,a,n,r,l,c,i,o,s=arguments;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:{},a=t.query,n=void 0===a?"":a,r=t.order,l=void 0===r?"":r,e.prev=1,e.next=4,window.fetch(E+"/phones.json");case 4:return i=e.sent,e.next=7,i.json();case 7:c=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),c=[];case 13:o=c.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())}),e.t1=l,e.next="age"===e.t1?17:"name"===e.t1?19:20;break;case 17:return o.sort(function(e,t){return e.age-t.age}),e.abrupt("break",20);case 19:o.sort(function(e,t){return e.name.localeCompare(t.name)});case 20:return e.abrupt("return",o);case 22:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),getById:function(e){return window.fetch(E+"/phones/"+e+".json").then(function(e){return e.json()})}},C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={phone:{id:"",images:[],name:"",description:""},mainImage:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"selectImage",value:function(e){this.setState({mainImage:e})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.id;t&&b.getById(t).then(function(t){e.setState({phone:t,mainImage:t.images[0]})})}},{key:"renderImgs",value:function(){var e=this;return this.state.phone.images.map(function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("img",{src:t,alt:"image-small","data-element":"small-preview",key:"img"+e.state.phoneId,onClick:function(){e.selectImage(t)}}))})}},{key:"render",value:function(){var e=this.state.phone,t=e.id,a=e.name,n=e.description,l=this.props,c=l.onBackClicked,i=l.onAddClicked;return r.a.createElement("div",{className:"phoneViewer"},r.a.createElement("img",{alt:a,className:"phoneDetail mainImage",src:this.state.mainImage,"data-element":"big-preview"}),r.a.createElement("div",{className:"phoneViewer__info"},r.a.createElement("div",{"data-element":"phone-element","data-phone-id":t,className:"buttons"},r.a.createElement("a",{href:"#",className:"btn","data-element":"back-button",onClick:c},"Back"),r.a.createElement("a",{className:"btn","data-element":"add-to-cart",onClick:function(){i(a)}},"Add to basket")),r.a.createElement("h1",null,a),r.a.createElement("p",null,n),r.a.createElement("ul",{className:"phone-thumbs"},this.renderImgs())))}}]),t}(r.a.Component),y=a(12),j=function(e){return r.a.createElement("div",{className:"cart"},r.a.createElement("h2",null,"Shoping Cart"),r.a.createElement("ul",{className:"cart__ul"},Object.entries(e.name).map(function(t){var a=Object(y.a)(t,2),n=a[0],l=a[1];return r.a.createElement("li",{key:n+l,className:"cart__item"},r.a.createElement("button",{className:"btn cart__btn",onClick:function(){e.onDeletePhone(n)}},"x"),n," - ",l)})))};var A=function(e){var t=e.queryChange,a=e.orderChange;return r.a.createElement("div",{className:"filter"},r.a.createElement("p",null,"Search :",r.a.createElement("input",{"data-element":"query-field",onChange:t})),r.a.createElement("p",null,"Sort by :",r.a.createElement("select",{"data-element":"order-field",onChange:function(e){return a(e)}},r.a.createElement("option",{value:"name"},"Alphabetical"),r.a.createElement("option",{value:"age"},"Newest"))))},O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).handleClick=function(t){e.setState({phoneSelected:t})},e.handleBackClick=function(){e.setState({phoneSelected:""})},e.addItem=function(t){var a=e.state.phoneAdded[t];e.state.phoneAdded.hasOwnProperty(t)||(a=0),++a,e.setState({phoneAdded:Object(o.a)({},e.state.phoneAdded,Object(i.a)({},t,a))})},e.removeItem=function(t){var a=e.state.phoneAdded[t];--a,e.state.phoneAdded.hasOwnProperty(t)&&e.setState({phoneAdded:Object(o.a)({},e.state.phoneAdded,Object(i.a)({},t,a))}),0===a&&(delete e.state.phoneAdded[t],e.setState(e.state))},e.queryChange=function(){e.getAll()},e.orderChange=function(t){e.setState({filter:Object(o.a)({},e.state.filter,{order:t.target.value})}),e.getAll(),console.log(e.state.filter)},e.state={phoneSelected:null,phoneAdded:{},filter:{query:"",order:"name"},phones:[]},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.getAll()}},{key:"getAll",value:function(){var e=this;b.getAll(this.state.filter).then(function(t){e.setState({phones:t})}),console.log(this.state.phones)}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(A,{queryChange:this.queryChange,orderChange:this.orderChange}),r.a.createElement(j,{name:this.state.phoneAdded,onDeletePhone:this.removeItem})),this.state.phoneSelected?r.a.createElement(C,{id:this.state.phoneSelected,onBackClicked:this.handleBackClick,onAddClicked:this.addItem}):r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{onPhoneClicked:this.handleClick,onAddClicked:this.addItem,phones:this.state.phones})))}}]),t}(r.a.Component);var N=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Phone Catalog"))};a(20);var w=function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(O,null))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.88c63a21.chunk.js.map