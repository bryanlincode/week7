import{m,e as _,_ as f,u as d,o as c,c as i,F as g,f as h,n as u,b as l,t as p,g as b}from"./index.098ad6c4.js";function v(e){return{all:e=e||new Map,on:function(s,o){var t=e.get(s);t?t.push(o):e.set(s,[o])},off:function(s,o){var t=e.get(s);t&&(o?t.splice(t.indexOf(o)>>>0,1):e.set(s,[]))},emit:function(s,o){var t=e.get(s);t&&t.slice().map(function(a){a(o)}),(t=e.get("*"))&&t.slice().map(function(a){a(s,o)})}}}const z=v(),$={computed:{...m(d,["messages"])},methods:{..._(d,["clearToast"])}},k={class:"toast-container position-fixed pe-3 top-0 end-0",style:{"z-index":"1500"}},y={class:"toast-header"},C={class:"me-auto"},T=["onClick"],x={key:0,class:"toast-body"};function B(e,s,o,t,a,M){return c(),i("div",k,[(c(!0),i(g,null,h(e.messages,(n,r)=>(c(),i("div",{key:r,class:u(["toast show",`toast${r}`]),role:"alert"},[l("div",y,[l("span",{class:u([`bg-${n.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),l("strong",C,p(n.title),1),l("button",{type:"button",class:"btn-close",onClick:S=>e.clearToast(r),"aria-label":"Close"},null,8,T)]),n.content?(c(),i("div",x,p(n.content),1)):b("",!0)],2))),128))])}const F=f($,[["render",B]]);export{F as T,z as e};
