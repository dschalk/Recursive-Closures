import{s as h,n as l}from"../chunks/scheduler.1f6706a1.js";import{S as x,i as p,g,m as _,h as d,x as C,n as v,a as m,f}from"../chunks/index.2d48075f.js";function k(c){let e,n="Here we go!",s;return{c(){e=g("h2"),e.textContent=n,s=_(`
>
>`)},l(t){e=d(t,"H2",{"data-svelte-h":!0}),C(e)!=="svelte-ckifmr"&&(e.textContent=n),s=v(t,`
>
>`)},m(t,a){m(t,e,a),m(t,s,a)},p:l,i:l,o:l,d(t){t&&(f(e),f(s))}}}function H(c){const e=s(7),n=()=>{};function s(t){let a=t,i=[];function r(o){return o===n?a:(a=o(a),i.forEach(u=>u(a)),r)}return r.onChange=o=>{i.push(o)},r}return e(()=>3)(t=>t**3)(n).onChange(t=>console.log(t)),e(()=>3)(t=>t**3)(n),e(n),e(t=>t*4)(t=>t-8),[]}class b extends x{constructor(e){super(),p(this,e,H,k,h,{})}}export{b as component};
