(this["webpackJsonpproject6-react"]=this["webpackJsonpproject6-react"]||[]).push([[0],{26:function(e,t,n){e.exports=n(39)},31:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(11),i=n.n(a),c=(n(31),n(32),n(6)),s=n(7),l=n(9),p=n(8),u=n(10),h=n(17),b=n(15);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={cursor:"pointer",stroke:"none"},m=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.size,n=void 0===t?20:t,o=e.onClick;return r.a.createElement("svg",{height:n,viewBox:"0 0 24 24",style:d({},g),onClick:o},r.a.createElement("circle",{cx:n/2,cy:n/2,r:n/2,stroke:"none",fill:"".concat(this.props.positive?"rgba(72, 175, 8, 0.5)":"rgba(255, 0, 0, 0.5)")}))}}]),t}(o.PureComponent),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.info;return r.a.createElement("div",null,e.type)}}]),t}(o.PureComponent),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={viewport:{width:"100%",height:"100%",latitude:49.989698,longitude:36.221784,zoom:15},popupInfo:null},n._onViewportChange=function(e){return n.setState({viewport:e})},n.markerClick=function(e){n.setState({popupInfo:e})},n._renderMarker=function(e,t){return r.a.createElement(h.a,{key:e.id,latitude:e.coordinates[0],longitude:e.coordinates[1]},r.a.createElement(m,{size:20,positive:e.positive,onClick:function(){return n.markerClick(e)}}))},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"_renderPopup",value:function(){var e=this,t=this.state.popupInfo;return t&&r.a.createElement(h.b,{tipSize:5,anchor:"top",latitude:t.coordinates[0],longitude:t.coordinates[1],closeOnClick:!0,onClose:function(){return e.setState({popupInfo:null})}},r.a.createElement(O,{info:t}))}},{key:"render",value:function(){var e=this;return r.a.createElement(h.c,Object.assign({mapboxApiAccessToken:"pk.eyJ1Ijoicm9tYW5ib3JvZGF0b3YiLCJhIjoiY2sxa2w3N3Y1MDdvZjNibzNveXFidWpuaSJ9.h9858JVC3HbU02hxED68eg"},this.state.viewport,{mapStyle:"mapbox://styles/mapbox/streets-v11",onViewportChange:this._onViewportChange}),this.props.points.map((function(t){return e._renderMarker(t)})),this._renderPopup())}}]),t}(o.Component),v=(n(36),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"reportButton ".concat(this.props.position),onClick:this.props.clickHandler,style:{backgroundColor:this.props.color}},r.a.createElement("span",null,"+"))}}]),t}(o.Component)),j=n(25);n(37);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var k={container:function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{width:"100%"})}},w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={selectedProblemValue:null,error:"",locating:!1},n.handleSelect=function(e){n.setState({selectedProblemValue:e.value})},n.error=function(){n.setState({error:"Unable to retrieve your location"})},n.success=function(e){var t=e.coords.latitude,o=e.coords.longitude,r=n.state.selectedProblemValue,a=localStorage.getItem("userId")&&void 0!==localStorage.getItem("userId")?localStorage.getItem("userId"):null;fetch("https://neolabs-api.zpoken.ai/problems",{method:"POST",headers:{"Content-Type":"application/json",userId:a},body:JSON.stringify({lng:o,lat:t,type:parseInt(r)})}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("userId",e.userId),n.setState({locating:!1}),n.props.getMapPoints(),n.props.handleClose()}))},n.handleSubmit=function(){navigator.geolocation?(n.setState({locating:!0}),navigator.geolocation.getCurrentPosition(n.success,n.error)):n.setState({error:"Geolocation is not supported by your browser"})},n.getOptions=function(){return n.props.options.map((function(e){return{value:e.id,label:e.text}}))},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"report ".concat(this.props.active?"active":"")},r.a.createElement("div",{className:"close-button",onClick:this.props.handleClose},r.a.createElement("span",null,"x")),r.a.createElement(j.a,{styles:k,options:this.getOptions(),onChange:this.handleSelect}),r.a.createElement("button",{className:"button",onClick:this.handleSubmit,disabled:!this.state.selectedProblemValue},r.a.createElement("span",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))}}]),t}(o.Component),C=n(24),E=(n(38),Object(C.a)({version:8,sources:{points:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[-122.45,37.78]}}]}}},layers:[{id:"my-layer",type:"circle",source:"points",paint:{"circle-color":"#f00","circle-radius":4}}]})),S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={reportOpened:!1,problemOptions:[],positiveOptions:[],loadingPoints:!0,points:[],reportProblem:"bad"},n.getProblemTypes=function(){fetch("https://neolabs-api.zpoken.ai/problems/types",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.filter((function(e){return!1===e.positive})),o=e.filter((function(e){return!0===e.positive}));n.setState({problemOptions:t,positiveOptions:o})}))},n.getMapPoints=function(){fetch("https://neolabs-api.zpoken.ai/problems",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n.setState({points:e,loadingPoints:!1})}))},n.toggleReport=function(e){console.log("togle"),n.setState({reportOpened:!n.state.reportOpened,reportProblem:e})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getMapPoints(),this.getProblemTypes()}},{key:"render",value:function(){var e=this;return this.state.loadingPoints?null:r.a.createElement("div",{className:"App"},r.a.createElement(y,{points:this.state.points,mapStyle:E}),r.a.createElement(v,{clickHandler:function(){return e.toggleReport("good")},color:"green",position:"left"}),r.a.createElement(v,{clickHandler:function(){return e.toggleReport("bad")},color:"#ff9800",position:"right"}),"bad"===this.state.reportProblem?r.a.createElement(w,{active:this.state.reportOpened,options:this.state.problemOptions,handleClose:this.toggleReport,getMapPoints:this.getMapPoints}):r.a.createElement(w,{active:this.state.reportOpened,options:this.state.positiveOptions,handleClose:this.toggleReport,getMapPoints:this.getMapPoints}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.107327c4.chunk.js.map