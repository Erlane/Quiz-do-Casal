(this["webpackJsonptrabalhos-kraken"]=this["webpackJsonptrabalhos-kraken"]||[]).push([[0],{10:function(n,e,t){n.exports=t.p+"static/media/heart.bd7c134f.png"},16:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(7),i=t.n(o),s=t(8),u=t(9),c=t(14),l=t(15),d=t(1),m=t(2),f=t(10),p=t.n(f);function h(){var n=Object(d.a)(["\n  color: red;\n  font-size: 2rem;\n  text-align: center;\n  margin-top: 5rem;\n  font-family: 'Lora', serif;\n\n  @media(max-width: 475px){\n    font-size: 1.3rem;\n    margin-top: 3rem;\n  }\n"]);return h=function(){return n},n}function g(){var n=Object(d.a)(["\n  width: 20%;\n  background-color: red;\n  border: 2px solid #8A0808;\n  color: #FFFFFF;\n  font-size: 1rem;\n  font-style: italic;\n  font-weight: bold;\n  padding: 0.5rem 0;\n  margin-top: 2rem;\n  outline: none;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return g=function(){return n},n}function b(){var n=Object(d.a)(["\n  margin-right: 0.5rem;\n"]);return b=function(){return n},n}function v(){var n=Object(d.a)(["\n  width: 100%;\n  background-color: transparent;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n  color: #151515;\n  font-size: 1.09rem;\n  font-family: 'Lora', serif;\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n  padding: 0.5rem 0.4rem;\n\n  &:hover {\n    background-color: #ECEEF0;\n  }\n"]);return v=function(){return n},n}function w(){var n=Object(d.a)(["\n  color: #424242;\n  font-size: 1.1rem;\n  font-family: 'Lora', serif;\n  text-align: center;\n"]);return w=function(){return n},n}function x(){var n=Object(d.a)(["\n  width: 100%;\n"]);return x=function(){return n},n}function E(){var n=Object(d.a)(["\n  width: 90%;\n  display: flex;\n  justify-content: center;\n"]);return E=function(){return n},n}function j(){var n=Object(d.a)(["\n  height: 6vh;\n  transform: rotate(55deg);\n"]);return j=function(){return n},n}function y(){var n=Object(d.a)(["\n  color: red;\n  font-size: 2.5rem;\n  font-family: 'Dancing Script', cursive;\n  padding: 0 1rem 1.2rem 0;\n"]);return y=function(){return n},n}function O(){var n=Object(d.a)(["\n  display: flex;\n"]);return O=function(){return n},n}function F(){var n=Object(d.a)(["\n  width: 40%;\n  height: 70vh;\n  background-color: #FFFFFF;\n  border-radius: 5px;\n  padding: 1.6rem 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  @media(max-width: 1024px){\n    width: 50%;\n  }\n\n  @media(max-width: 768px){\n    width: 65%;\n  }\n\n  @media(max-width: 475px){\n    width: 90%;\n  }\n"]);return F=function(){return n},n}function k(){var n=Object(d.a)(["\n  width: 100%;\n  height: 100vh;\n  background-image: linear-gradient(to right, red, transparent, #4a1a10fa); \n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return k=function(){return n},n}var C=m.a.div(k()),z=m.a.div(F()),Q=m.a.div(O()),R=m.a.h1(y()),q=m.a.img(j()),S=m.a.div(E()),A=m.a.div(x()),P=m.a.p(w()),L=m.a.span(v()),V=m.a.input(b()),B=m.a.button(g()),J=m.a.p(h()),W=function(n){Object(l.a)(t,n);var e=Object(c.a)(t);function t(){var n;return Object(s.a)(this,t),(n=e.call(this)).handleChange=function(e){n.setState({userResponse:e,respondeu:!0})},n.nextQuestion=function(){var e=n.state,t=e.currentQuestion,r=e.result,a=e.userResponse,o=e.listQuestion,i=o[t].answer===a,s=o.length-1===t;i&&(r+=1),n.setState({currentQuestion:t+1,result:r,respondeu:!1,userResponse:"",lastAnswer:s})},n.state={myAnswer:null,currentQuestion:0,userResponse:"",result:0,respondeu:!1,lastAnswer:void 0,listQuestion:[{id:0,question:"Onde conhe\xe7aram a se falar ?",options:["Rede Social","Praia","Trabalho"],answer:"Rede Social"},{id:1,question:"Primeira vez que ficaram ?",options:["Shopping","Casar\xe3o","Praia"],answer:"Casar\xe3o"},{id:2,question:"Primeiro filme assistido no cinema foi ?",options:["Extraordin\xe1rio","Velozes & Furiosos 6","O Rastro"],answer:"O Rastro"},{id:3,question:"O que gostam de fazer juntos ?",options:["Sair","Comer","Ver Filmes"],answer:"Comer"},{id:4,question:"A primeira viagem juntos foi para ?",options:["Cabo Frio","Chapada dos Veadeiros","Recife"],answer:"Cabo Frio"},{id:5,question:"Est\xe3o juntos h\xe1 ... ?",options:["1.7meses","2 anos","2.8meses"],answer:"2.8meses"}]},n}return Object(u.a)(t,[{key:"render",value:function(){var n=this,e=this.state,t=e.listQuestion,r=e.currentQuestion,o=e.userResponse,i=e.respondeu,s=e.lastAnswer,u=e.result;return a.a.createElement(C,null,a.a.createElement(z,null,a.a.createElement(Q,null,a.a.createElement(R,null,"Quiz do Casal")," ",a.a.createElement(q,{src:p.a,alt:"heart"})),a.a.createElement(S,null,t.filter((function(n){return n.id===r})).map((function(e){return a.a.createElement(A,{key:e.id},console.log(),a.a.createElement(P,null,e.question),e.options.map((function(e){return a.a.createElement(L,null,a.a.createElement("label",null,a.a.createElement(V,{type:"radio",name:"answer",value:o,onChange:function(){return n.handleChange(e)}}),e))})))}))),!s&&a.a.createElement(B,{disabled:!i,onClick:this.nextQuestion},"Next"),s&&a.a.createElement(J,null,"Parab\xe9ns por terminar o Quiz =)"),s&&a.a.createElement(J,null,"Sua pontua\xe7\xe3o \xe9 ",u," de ",t.length," !")))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.2eb33dad.chunk.js.map