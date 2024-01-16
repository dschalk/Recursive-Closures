import{s as A,n as g}from"../chunks/scheduler.41143b43.js";import{S as q,i as w,g as u,s as _,m as F,h as v,x as P,c as y,j as H,n as M,f as s,l as R,k as $,a,y as S}from"../chunks/index.8cc052f2.js";function j(r){let e,f="Asynchronous Transformations",x,l,I="GOAL: Handle both Synchronous and Asynchronous Functions in a Simple Closure",p,i,d,h,o,b="If some value x is not a Promise, asyncId(x) creates a promise that resolves to x. asyncId(x) has no effect on x if x is a Promise. Using the basic definition of M, the following computation would return the number 10. Here, it returns a promise that resolves to 10",m,c,C;return{c(){e=u("h1"),e.textContent=f,x=_(),l=u("h3"),l.textContent=I,p=_(),i=u("pre"),d=F(r[0]),h=_(),o=u("p"),o.textContent=b,m=_(),c=u("pre"),C=F(r[1]),this.h()},l(t){e=v(t,"H1",{style:!0,"data-svelte-h":!0}),P(e)!=="svelte-z7nlbi"&&(e.textContent=f),x=y(t),l=v(t,"H3",{class:!0,"data-svelte-h":!0}),P(l)!=="svelte-cmiygg"&&(l.textContent=I),p=y(t),i=v(t,"PRE",{});var n=H(i);d=M(n,r[0]),n.forEach(s),h=y(t),o=v(t,"P",{"data-svelte-h":!0}),P(o)!=="svelte-1a82hpg"&&(o.textContent=b),m=y(t),c=v(t,"PRE",{});var E=H(c);C=M(E,r[1]),E.forEach(s),this.h()},h(){R(e,"text-align","center"),$(l,"class","svelte-xvyccl")},m(t,n){a(t,e,n),a(t,x,n),a(t,l,n),a(t,p,n),a(t,i,n),S(i,d),a(t,h,n),a(t,o,n),a(t,m,n),a(t,c,n),S(c,C)},p:g,i:g,o:g,d(t){t&&(s(e),s(x),s(l),s(p),s(i),s(h),s(o),s(m),s(c))}}}function k(r){var e=`function dF3x () {};
var log = console.log;
async function asyncId (x) {return x};

function M (x) {
  return function go (func) {
      if (func === dF3x) return clone(x);
      else x = asyncId(x).then(v => func(v));
      return go;
  }
}`,f=`var m = M(3);
m(v=>v**3)(v=>3*v)(v=>v+19)(Math.sqrt)(dF3x).then(v => log(v)); // 10 `;return[e,f]}class L extends q{constructor(e){super(),w(this,e,k,j,A,{})}}export{L as component};
