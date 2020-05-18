(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{16:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),a=t(10),c=t.n(a),o=t(3),u=function(){var n=window.localStorage,e=n.getItem("theme")||"light",t=Object(r.useState)(e),i=Object(o.a)(t,2),a=i[0],c=i[1];Object(r.useEffect)((function(){"light"===a?n.setItem("theme","light"):n.setItem("theme","dark")}),[n,a]);return[a,function(){return c("light"===a?"dark":"light")}]},l={primary:"#23395b",secondary:"#d81e5b",primaryDark:"#1c2e50",secondaryDark:"#bc1849",active:"#b1c4ce",bg:"#f9f8f4",text:"#1c1d1e",grey:"#d6d2d2",gradient:"linear-gradient(135deg, rgba(242, 246, 248, 1) 0%, rgba(216, 225, 231, 0.89) 22%, rgba(181, 198, 208, 0.89) 51%, rgba(216, 225, 231, 0.89) 56%, rgba(177, 196, 206, 0.89) 100%)"},d={primary:"#85E0D9",secondary:"#E6CA51",primaryDark:"#6ab7b0",secondaryDark:"#c5ae4e",active:"#d1ebe9",bg:"#34353a",text:"#fff8f0",grey:"#707275",gradient:"linear-gradient(135deg, rgba(76,76,76,1) 0%, rgba(28,28,28,1) 48%, rgba(28,29,30,1) 55%, rgba(52,53,58,1) 100%);"},m=t(14),f=t(25),s=Object(r.createContext)();var h=function(n){var e=n.children,t=window.localStorage,a=JSON.parse(t.getItem("list"))||[{title:"bread",checked:!1,id:"1"},{title:"butter",checked:!1,id:"2"},{title:"cheese",checked:!1,id:"3"}],c=Object(r.useState)(a),u=Object(o.a)(c,2),l=u[0],d=u[1],h=Object(r.useState)(null),b=Object(o.a)(h,2),p=b[0],g=b[1];return Object(r.useEffect)((function(){t.setItem("list",JSON.stringify(l))}),[t,l]),i.a.createElement(s.Provider,{value:{list:l,addItem:function(n){d([].concat(Object(m.a)(l),[{title:n,checked:!1,id:Object(f.a)()}]))},removeItem:function(n){d(l.filter((function(e){return e.id!==n})))},checkItem:function(n){var e=l.map((function(e){return e.id===n&&(e.checked=!e.checked),e}));d(e)},findItem:function(n){var e=l.find((function(e){return e.id===n}));g(e)},editedEl:p,editItem:function(n,e){var t=l.map((function(t){return t.id===e&&(t.title=n),t}));d(t),g(null)},clearChecked:function(){d(l.filter((function(n){return!1===n.checked})))},clearAll:function(){d([])}}},e)},b=t(1),p=t(2);function g(){var n=Object(p.a)(["\n    button {\n      :first-child{\n        margin-right: 0.25em;\n        position: relative;\n        :after {\n          content: 'or';\n          height: 20px;\n          width: 20px;\n          background-color: ",";\n          color: ",";\n          padding: 0.2em;\n          border-radius: 50%;\n          position: absolute;\n          top: 4.5px;\n          right: -17px;\n          pointer-events: none;\n          cursor: default;\n        }\n      }  \n    }\n  "]);return g=function(){return n},n}function x(){var n=Object(p.a)(["\n  width: fit-content;\n  \n  button {\n    border-radius: 0;\n    margin: 0;\n    :first-child {\n      border-radius: 4px 0 0 4px;\n      border-right: none; \n    }\n    :last-child {\n      border-radius: 0 4px 4px 0;   \n    } \n  }\n\n  ","\n"]);return x=function(){return n},n}function v(){var n=Object(p.a)(["\n  background-color: transparent;\n  color: ",";\n  :hover {\n    background-color: ",";\n    i {\n      color: ",";\n    }\n  }\n  :disabled {\n    cursor: default;\n    background-color: transparent;\n    border-color: ",";\n    i {\n      color: ",";\n    }\n  }\n"]);return v=function(){return n},n}function k(){var n=Object(p.a)(["\n    i {\n      color: ",";\n    }\n  "]);return k=function(){return n},n}function y(){var n=Object(p.a)(["\n  cursor: pointer;\n  background:  ",";\n  font-size: 1em;\n  color: ",";\n  border: 2px solid ",";\n  border-radius: 4px;\n  margin: 0.5em;\n  padding: ",";\n  transition: 0.2s all ease-out;\n  \n  ","\n\n  :hover {\n    background-color: ",";\n    border-color: ",";\n  }\n\n  :disabled {\n    cursor: default;\n    background-color: ",";\n    border-color: ",";\n  }\n"]);return y=function(){return n},n}var j=function(n){var e=n.theme;return n.secondary?e.secondary:e.primary},O=function(n){var e=n.theme;return n.secondary?e.secondaryDark:e.primaryDark},E=b.e.button(y(),(function(n){return j(n)}),(function(n){return n.theme.bg}),(function(n){return j(n)}),(function(n){return n.icon?"0.25em":"0.5em 1em"}),(function(n){return n.icon&&Object(b.d)(k(),(function(n){return j(n)}))}),(function(n){return O(n)}),(function(n){return O(n)}),(function(n){return n.theme.grey}),(function(n){return n.theme.grey})),w=Object(b.e)(E)(v(),(function(n){return j(n)}),(function(n){return j(n)}),(function(n){return n.theme.bg}),(function(n){return n.theme.grey}),(function(n){return n.theme.grey})),I=b.e.div(x(),(function(n){return n.choose&&Object(b.d)(g(),(function(n){return n.theme.bg}),(function(n){return n.theme.secondary}))}));function C(){var n=Object(p.a)(["\n    width: 32px;\n    height: 32px;\n    line-height: 32px;\n    border-width: 2px;\n    "]);return C=function(){return n},n}function S(){var n=Object(p.a)(["\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n    border: 3px solid ",";\n    border-radius: 50%;\n  "]);return S=function(){return n},n}function z(){var n=Object(p.a)(["\n  color: ",";\n  margin: 5px;\n  text-align: center;\n  display: inline-block;\n  ","\n\n  @media screen and (max-width: 480px) {\n    font-size: 1.25rem;\n     ","\n    \n  }\n"]);return z=function(){return n},n}var A=b.e.i(z(),(function(n){return n.theme.primary}),(function(n){return n.circular&&Object(b.d)(S(),(function(n){return n.theme.active}))}),(function(n){return n.circular&&Object(b.d)(C())}));function D(){var n=Object(p.a)(["\n  position: relative;\n  height: 97%;\n  width: 97%;\n  max-width: 600px;\n  background-color: ",";\n  border-radius: 4px;\n  box-shadow: 6px 4px 33px -9px ",";\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (max-width: 480px) {\n    height: 99%;\n  }\n\n  h4 {\n    font-family: 'Advent Pro', sans-serif;\n    color: ",";\n    text-align: center;\n    font-size: 1.25em;\n    margin: 2em 0;\n  }\n"]);return D=function(){return n},n}var N=b.e.div(D(),(function(n){return n.theme.bg}),(function(n){return n.theme.text}),(function(n){return n.theme.active}));function J(){var n=Object(p.a)(["\n    i {\n      display: block\n      }"]);return J=function(){return n},n}function P(){var n=Object(p.a)(["\n  text-align: center;\n  font-family: 'Advent Pro', sans-serif;\n  color: ",";\n  padding: 0.3rem;\n\n  h1 {\n    margin-top: 0.5rem;\n    display: inline-block;\n    font-weight: 500;\n    @media screen and (max-width: 480px) {\n    font-size: 1.25rem;\n    }\n  }\n  \n  ","\n"]);return P=function(){return n},n}var F=b.e.div(P(),(function(n){return n.theme.primary}),(function(n){return n.icon&&Object(b.d)(J())}));function M(){var n=Object(p.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-device-width: 799px) and (orientation: landscape) {\n    height: auto;\n  }\n"]);return M=function(){return n},n}function X(){var n=Object(p.a)(["\n  \n\n  * {\n    margin: 0;\n    padding: 0;\n    transition: all 0.25s linear;\n  }\n\n  body {\n  font-family: 'Montserrat', sans- serif;\n  color: ",";\n  }\n"]);return X=function(){return n},n}var q=Object(b.c)(X(),(function(n){return n.theme.text})),B=b.e.div(M(),(function(n){return n.theme.gradient})),L=function(n){var e=n.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(q,null),i.a.createElement(B,null,e))};function G(){var n=Object(p.a)(["\n  background: transparent;\n  font-size: 1em;\n  color: ",";\n  border: 1.2px solid ",";\n  border-radius: 4px;\n  margin: 0.5em;\n  padding: 0.32em 0.5em;\n  transition: 0.2s all ease-out;\n  outline: none;\n  box-sizing: content-box;\n\n  :focus, :hover {\n    border-color: ",";\n    \n  }\n"]);return G=function(){return n},n}var H=b.e.input(G(),(function(n){return n.theme.text}),(function(n){return n.theme.primary}),(function(n){return n.theme.active}));function K(){var n=Object(p.a)(["\n  padding: 0.7em;\n  margin-bottom: 0.7em;\n  display: flex;\n\n  input {\n    flex-grow: 1;\n    margin-right: 0;\n  }\n\n  @media screen and (max-width: 360px) {\n    padding: 0.3em;\n    button {\n      padding: 0.5em;\n      margin-right: 0;\n    }\n    input {\n      padding: 0.32em 0.2em;\n      margin-left: 0;\n    }  \n  }\n"]);return K=function(){return n},n}var Q=b.e.form(K());function R(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0.7em 1.25em;\n\n  @media screen and (max-device-width: 480px) {\n    margin-left: 0;\n    margin-right: 0.5em;\n  }\n"]);return R=function(){return n},n}function T(){var n=Object(p.a)([" \n  list-style: none;\n  font-size: 1.15em;\n"]);return T=function(){return n},n}function U(){var n=Object(p.a)(["\n  flex-grow: 1;\n  overflow: hidden;\n  overflow-y: scroll;\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  \n  ::-webkit-scrollbar {\n    width: 0.5em;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: ",";\n  }\n  ::-webkit-scrollbar-thumb {\n  background-color: ",";\n  outline: 1px solid ",";\n  border-radius: 4px;\n  height: 50px;\n  }\n\n  @media screen and (max-device-width: 600px) and (orientation: landscape) {\n    overflow: visible;\n  }\n"]);return U=function(){return n},n}var V=b.e.div(U(),(function(n){return n.theme.primary}),(function(n){return n.theme.primary}),(function(n){return n.theme.bg}),(function(n){return n.theme.primary}),(function(n){return n.theme.active})),W=b.e.ul(T()),Y=b.e.li(R());function Z(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin: 0.7em 1em;\n  height: 45px;\n"]);return Z=function(){return n},n}var $=b.e.div(Z()),_=t(15);function nn(){var n=Object(p.a)(["\n  position: absolute;\n  opacity: 0;\n  \n  ","\n\n  "," \n"]);return nn=function(){return n},n}function en(){var n=Object(p.a)(["\n  :checked + "," {\n    "," {\n      transform: translateX(14px); \n      @media screen and (max-width: 480px){\n        transform: translateX(12px);\n      }   \n    }\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(p.a)(["\n  :checked + "," {\n    color: ",";\n    text-decoration: line-through;\n    "," {\n    background-color: ",";    \n    }\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(p.a)(["\n  position: relative;\n  margin: 0.5em;\n  display: inline-block;\n  color: ",";\n\n  ","\n"]);return rn=function(){return n},n}function an(){var n=Object(p.a)(["\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 30px;\n  height: 16px;\n  border: 2px solid ",";\n  background-color: ",";\n  border-radius: 1em;\n\n  @media screen and (max-width: 480px) {\n    height:12px;\n    width: 24px;\n    top: -2px;\n    right: -2px;\n  }\n"]);return an=function(){return n},n}function cn(){var n=Object(p.a)(["\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  font-size: 0.7em;\n  text-align: center;\n  line-height: 14px;\n  padding: 0.12em;\n  font-weight: 900;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background-color: ",";\n  color: ",";\n  transition: all .3s linear;\n  @media screen and (max-width: 480px) {\n    height: 12px;\n    width: 12px;\n    line-height: 12px;\n    font-size: 0.5rem;\n  }\n"]);return cn=function(){return n},n}function on(){var n=Object(p.a)(["\n  font-size:0.9em;\n  line-height: 1.15em;\n  padding: 2px;\n  margin-right: 0.7em;\n  color: ",";\n  border: solid 2px ",";\n  border-radius: 4px;\n"]);return on=function(){return n},n}var un=b.e.i(on(),(function(n){return n.theme.bg}),(function(n){return n.theme.primary})),ln=b.e.i(cn(),(function(n){return n.theme.bg}),(function(n){return n.theme.secondary})),dn=Object(b.d)(an(),(function(n){return n.theme.primary}),(function(n){return n.theme.primary})),mn=b.e.label.attrs((function(n){return{htmlFor:n.checkId||"checkbox"}}))(rn(),(function(n){return n.theme.text}),(function(n){return n.toggle&&dn})),fn=Object(b.d)(tn(),mn,(function(n){return n.theme.grey}),un,(function(n){return n.theme.primary})),sn=Object(b.d)(en(),mn,ln),hn=b.e.input.attrs((function(n){return{type:"checkbox",id:n.checkId||"checkbox"}}))(nn(),(function(n){return n.basic&&fn}),(function(n){return n.toggle&&sn})),bn=function(n){var e=n.label,t=Object(_.a)(n,["label"]),a=Object(r.useContext)(b.a);return i.a.createElement("div",null,i.a.createElement(hn,t),i.a.createElement(mn,t,t.basic&&i.a.createElement(un,{className:"fas fa-check"}),t.toggle&&i.a.createElement(ln,{className:a===l?"fas fa-sun":"fas fa-moon"}),e))},pn=function(){return i.a.createElement(F,null,i.a.createElement(A,{circular:!0,className:"fas fa-shopping-bag"}),i.a.createElement("h1",null,"Shopping List"))},gn=function(n){var e=n.item,t=n.edit,a=Object(r.useContext)(s),c=a.removeItem,o=a.findItem,u=a.checkItem;return i.a.createElement(Y,null,i.a.createElement(bn,{checkId:e.id,label:e.title,onChange:function(){return function(n){u(n.id)}(e)},checked:e.checked,basic:!0}),i.a.createElement(I,null,i.a.createElement(w,{disabled:"disabled"===t,onClick:function(){return o(e.id)},icon:!0},i.a.createElement(A,{className:"fas fa-pencil-alt"})),i.a.createElement(w,{secondary:!0,icon:!0,onClick:function(){return c(e.id)}},i.a.createElement(A,{className:"fas fa-trash-alt"}))))},xn=function(){var n=Object(r.useContext)(s).list;return i.a.createElement(V,null,n.length>0?i.a.createElement(W,null,n.map((function(n){return!n.checked&&i.a.createElement(gn,{key:n.id,item:n})})),n.map((function(n){return n.checked&&i.a.createElement(gn,{key:n.id,item:n,edit:"disabled"})}))):i.a.createElement("h4",null,"Shopping list is empty!"))},vn=function(){var n=Object(r.useContext)(s),e=n.addItem,t=n.editedEl,a=n.editItem,c=n.list,u=Object(r.useState)(""),l=Object(o.a)(u,2),d=l[0],m=l[1];Object(r.useEffect)((function(){null!==t?(m(t.title),console.log(t)):m("")}),[t]);return i.a.createElement(Q,{onSubmit:function(n){return function(n){n.preventDefault(),null===t?(e(d),m("")):(a(d,t.id),console.log(c))}(n)}},i.a.createElement(H,{type:"text",onChange:function(n){return function(n){m(n.target.value)}(n)},value:d,placeholder:"Add new item...",required:!0}),i.a.createElement(E,{disabled:!d,type:"submit"},t?"Edit":"Add"))},kn=function(){var n=Object(r.useContext)(s),e=n.clearAll,t=n.clearChecked;return i.a.createElement($,null,i.a.createElement(I,{choose:!0},i.a.createElement(E,{secondary:!0,onClick:e},"Clear All"),i.a.createElement(E,{secondary:!0,onClick:t},"Checked")))};var yn=function(){var n=u(),e=Object(o.a)(n,2),t=e[0],r=e[1];return i.a.createElement(b.b,{theme:"light"===t?l:d},i.a.createElement(L,null,i.a.createElement(h,null,i.a.createElement(N,null,i.a.createElement(bn,{toggle:!0,onChange:r,checked:"dark"===t}),i.a.createElement(pn,null),i.a.createElement(vn,null),i.a.createElement(xn,null),i.a.createElement(kn,null)))))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(yn,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0dedcb50.chunk.js.map