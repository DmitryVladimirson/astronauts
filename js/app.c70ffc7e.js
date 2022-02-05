(function(t){function e(e){for(var n,o,c=e[0],i=e[1],u=e[2],b=0,f=[];b<c.length;b++)o=c[b],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==s[i]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/astronauts/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),s=r("5502"),a={getAstros:function(t){return t.astros}},o=r("5530"),c=r("1da1"),i=(r("96cf"),r("d3b7"),r("b0c0"),{registerAstro:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://astronauts-48830-default-rtdb.europe-west1.firebasedatabase.app/astros.json",{method:"POST",body:JSON.stringify(e)});case 2:return n=r.sent,r.next=5,n.json();case 5:s=r.sent,e=Object(o["a"])(Object(o["a"])({},e),{},{id:s.name}),t.commit("registerAstro",e);case 8:case"end":return r.stop()}}),r)})))()},setAstros:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.commit("setAstros",e);case 1:case"end":return r.stop()}}),r)})))()},loadAstros:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://astronauts-48830-default-rtdb.europe-west1.firebasedatabase.app/astros.json");case 2:return r=e.sent,e.next=5,r.json();case 5:for(a in n=e.sent,s=[],n)s.unshift({id:a,firstName:n[a].firstName,lastName:n[a].lastName,birthDate:n[a].birthDate,superpower:n[a].superpower,descr:n[a].descr});t.commit("setAstros",s);case 9:case"end":return e.stop()}}),e)})))()},deleteAstro:function(t,e){fetch("https://astronauts-48830-default-rtdb.europe-west1.firebasedatabase.app/astros/".concat(e,".json"),{method:"DELETE"}),t.commit("deleteAstro",e)}}),u=(r("c740"),r("fb6a"),{registerAstro:function(t,e){t.astros.unshift(e)},setAstros:function(t,e){t.astros=e},deleteAstro:function(t,e){var r=t.astros.findIndex((function(t){return t.id===e}));t.astros.slice(r,1)}}),l={state:function(){return{astros:[]}},actions:i,getters:a,mutations:u},b=Object(s["a"])({modules:{astros:l}}),f=b,d=r("6c02"),p={class:"astro-list__btns btns-list "},j=Object(n["e"])("Create new astro"),O={class:"astro-list"};function m(t,e,r,s,a,o){var c=Object(n["t"])("router-link"),i=Object(n["t"])("the-astro");return Object(n["o"])(),Object(n["d"])(n["a"],null,[Object(n["f"])("div",p,[Object(n["f"])("button",{class:"btn",onClick:e[1]||(e[1]=function(t){return s.loadAstros()})},"Reload"),Object(n["f"])(c,{class:"btn",to:"/astronauts/new-astro"},{default:Object(n["z"])((function(){return[j]})),_:1})]),Object(n["f"])("ul",O,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["s"])(s.astros.list,(function(t){return Object(n["o"])(),Object(n["d"])(i,{key:t.id,class:"astro",firstName:t.firstName,lastName:t.lastName,birthDate:t.birthDate,id:t.id,onDeleteAstro:s.deleteAstro},null,8,["firstName","lastName","birthDate","id","onDeleteAstro"])})),128))])],64)}r("4de4");var v={class:"astro"},h={class:"astro__title title"},A={class:"astro__btns btns-list"},w=Object(n["e"])("See more");function g(t,e,r,s,a,o){var c=Object(n["t"])("router-link");return Object(n["o"])(),Object(n["d"])("li",v,[Object(n["f"])("div",h,Object(n["v"])(r.firstName)+" "+Object(n["v"])(r.lastName),1),Object(n["f"])("div",A,[Object(n["f"])(c,{class:"btn",to:s.astroDetailLink},{default:Object(n["z"])((function(){return[w]})),_:1},8,["to"]),Object(n["f"])("button",{class:"btn btn_red",onClick:e[1]||(e[1]=function(t){return s.deleteAstro()})},"Delete")])])}var y={props:["firstName","lastName","birthDate","superpower","id"],setup:function(t,e){var r=Object(d["c"])();function s(){e.emit("deleteAstro",t.id)}var a=Object(n["b"])((function(){return r.path+t.id}));return{deleteAstro:s,astroDetailLink:a}}},N=r("d959"),x=r.n(N);const D=x()(y,[["render",g]]);var _=D,S={components:{TheAstro:_},setup:function(){var t=Object(s["b"])(),e=Object(n["q"])({list:[]});function r(r){e.list=e.list.filter((function(t){return t.id!=r})),t.dispatch("deleteAstro",r)}function a(){return o.apply(this,arguments)}function o(){return o=Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.dispatch("loadAstros");case 2:e.list=t.getters.getAstros;case 3:case"end":return r.stop()}}),r)}))),o.apply(this,arguments)}return a(),e.list=t.getters.getAstros,{astros:e,deleteAstro:r,store:t,loadAstros:a}},beforeUnmount:function(){this.store.dispatch("setAstros",this.astros.list)}};const k=x()(S,[["render",m]]);var R=k,P={class:"astro-page"},T={class:"astro-page__title title"},U={class:"astro-page__descr descr"},V=Object(n["f"])("p",null,"Description:",-1);function C(t,e,r,s,a,o){return Object(n["o"])(),Object(n["d"])("div",P,[Object(n["f"])("h2",T,Object(n["v"])(s.selectedAstro.firstName)+" "+Object(n["v"])(s.selectedAstro.lastName),1),Object(n["f"])("div",U,[Object(n["f"])("p",null,"Date of birth: "+Object(n["v"])(s.selectedAstro.birthDate),1),Object(n["f"])("p",null,"Superpower: "+Object(n["v"])(s.selectedAstro.superpower),1),V,Object(n["f"])("p",null,Object(n["v"])(s.selectedAstro.descr),1)])])}r("7db0");var L={props:["id"],setup:function(t){var e=Object(s["b"])(),r=e.getters.getAstros.find((function(e){return e.id===t.id}));return{selectedAstro:r}}};const M=x()(L,[["render",C]]);var z=M,E={class:"new-astro"},J=Object(n["f"])("h2",{class:"nt__title title"},"Create New Astro",-1);function F(t,e,r,s,a,o){var c=Object(n["t"])("astro-form");return Object(n["o"])(),Object(n["d"])("section",E,[J,Object(n["f"])(c,{onSaveData:s.saveData},null,8,["onSaveData"])])}r("ac1f"),r("5319");var q=Object(n["f"])("button",{class:"btn"},"Submit",-1);function B(t,e,r,s,a,o){return Object(n["o"])(),Object(n["d"])("form",{action:"#",class:"astro-form",onSubmit:e[6]||(e[6]=Object(n["B"])((function(){return s.emmitSubmit&&s.emmitSubmit.apply(s,arguments)}),["prevent"]))},[Object(n["A"])(Object(n["f"])("input",{type:"text",class:"input",placeholder:"First Name","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.firstName=t})},null,512),[[n["x"],s.firstName]]),Object(n["A"])(Object(n["f"])("input",{type:"text",class:"input",placeholder:"Last Name","onUpdate:modelValue":e[2]||(e[2]=function(t){return s.lastName=t})},null,512),[[n["x"],s.lastName]]),Object(n["A"])(Object(n["f"])("input",{type:"date",class:"input",placeholder:"Date of birth","onUpdate:modelValue":e[3]||(e[3]=function(t){return s.birthDate=t})},null,512),[[n["x"],s.birthDate]]),Object(n["A"])(Object(n["f"])("input",{type:"text",class:"input",placeholder:"Superpower","onUpdate:modelValue":e[4]||(e[4]=function(t){return s.superpower=t})},null,512),[[n["x"],s.superpower]]),Object(n["A"])(Object(n["f"])("textarea",{cols:"1",rows:"5",class:"input",placeholder:"Description","onUpdate:modelValue":e[5]||(e[5]=function(t){return s.descr=t})},null,512),[[n["x"],s.descr]]),q],32)}var H={emits:["save-data"],setup:function(t,e){var r=Object(n["r"])(""),s=Object(n["r"])(""),a=Object(n["r"])(""),o=Object(n["r"])(""),c=Object(n["r"])("");function i(){var t={firstName:r.value,descr:s.value,lastName:a.value,superpower:c.value,birthDate:o.value};e.emit("save-data",t)}return{firstName:r,descr:s,emmitSubmit:i,lastName:a,birthDate:o,superpower:c}}};const I=x()(H,[["render",B]]);var G=I,K={components:{AstroForm:G},setup:function(){var t=Object(s["b"])(),e=Object(d["d"])();function r(r){t.dispatch("registerAstro",r),e.replace("/astronauts")}return{saveData:r}}};const Q=x()(K,[["render",F]]);var W=Q,X=Object(d["a"])({history:Object(d["b"])(),routes:[{path:"/astronauts",component:R},{path:"/astronauts/:id",props:!0,component:z},{path:"/astronauts/new-astro",component:W}]}),Y=X,Z={class:"section-1 section-padding"},$={class:"fixed"};function tt(t,e,r,s,a,o){var c=Object(n["t"])("the-header"),i=Object(n["t"])("router-view");return Object(n["o"])(),Object(n["d"])(n["a"],null,[Object(n["f"])(c),Object(n["f"])("section",Z,[Object(n["f"])("div",$,[Object(n["f"])(i)])])],64)}var et={class:"header"},rt={class:"fixed"},nt=Object(n["e"])("Astronauts");function st(t,e){var r=Object(n["t"])("router-link");return Object(n["o"])(),Object(n["d"])("header",et,[Object(n["f"])("div",rt,[Object(n["f"])(r,{to:"/",class:"header__logo"},{default:Object(n["z"])((function(){return[nt]})),_:1})])])}const at={},ot=x()(at,[["render",st]]);var ct=ot,it={components:{TheHeader:ct}};const ut=x()(it,[["render",tt]]);var lt=ut,bt=Object(n["c"])(lt);bt.use(f),bt.use(Y),bt.mount("#app")}});
//# sourceMappingURL=app.c70ffc7e.js.map