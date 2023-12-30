import{s as lt,n as it}from"../chunks/scheduler.41143b43.js";import{S as ut,i as ot,g as d,s as m,m as c,h as p,x as J,c as P,j as E,n as h,f as n,k as rt,l as K,a as i,y,B as vt,o as Q}from"../chunks/index.a9e5b95b.js";function dt(s){let l,b="This modified version of M can handle both ordinary data and promises together in composite functions:",f,w,A,_,x,L='In the demonstration below, functions composed of mixtures of ordinary functions and promises eventually resolve as expected. &quot;x&quot; in the m-M(x) closure begins with the number 4: <span style="color:aqua">m = M(4) </span>.',T,r,B="Restart",M,o,D,e,u,v,R,S,j,q,W,N,O,C,X,U,V,F,at="The asynchronous functions used above are in this list:",z,I,Y,G,k,Z,nt;return{c(){l=d("p"),l.textContent=b,f=m(),w=d("pre"),A=c(s[4]),_=m(),x=d("p"),x.innerHTML=L,T=m(),r=d("button"),r.textContent=B,M=m(),o=d("p"),D=c("m(addP(3)) (squareP) (v => v - 7) (dF3x).then(v => (D = v)) = "),e=c(s[0]),u=m(),v=d("p"),R=c("m(v => v / 42) (multP(6)) (v=>v * 7) (dF3x).then(v => (A = v)) = "),S=c(s[1]),j=m(),q=d("p"),W=c("m(addP(7)) (Math.sqrt) (v => v * 6) (dF3x).then(a => (C = a)) = "),N=c(s[2]),O=m(),C=d("p"),X=c("m(divP(14)) (v => v**3) (addP(5)) (dF3x).then(v => (D = v)) = "),U=c(s[3]),V=m(),F=d("p"),F.textContent=at,z=m(),I=d("pre"),Y=c(s[5]),G=m(),k=d("div"),this.h()},l(t){l=p(t,"P",{"data-svelte-h":!0}),J(l)!=="svelte-8qhkoy"&&(l.textContent=b),f=P(t),w=p(t,"PRE",{});var a=E(w);A=h(a,s[4]),a.forEach(n),_=P(t),x=p(t,"P",{"data-svelte-h":!0}),J(x)!=="svelte-vugchc"&&(x.innerHTML=L),T=P(t),r=p(t,"BUTTON",{"data.sveltekit.reload":!0,"data-svelte-h":!0}),J(r)!=="svelte-7mhl08"&&(r.textContent=B),M=P(t),o=p(t,"P",{style:!0});var $=E(o);D=h($,"m(addP(3)) (squareP) (v => v - 7) (dF3x).then(v => (D = v)) = "),e=h($,s[0]),$.forEach(n),u=P(t),v=p(t,"P",{style:!0});var g=E(v);R=h(g,"m(v => v / 42) (multP(6)) (v=>v * 7) (dF3x).then(v => (A = v)) = "),S=h(g,s[1]),g.forEach(n),j=P(t),q=p(t,"P",{style:!0});var tt=E(q);W=h(tt,"m(addP(7)) (Math.sqrt) (v => v * 6) (dF3x).then(a => (C = a)) = "),N=h(tt,s[2]),tt.forEach(n),O=P(t),C=p(t,"P",{style:!0});var et=E(C);X=h(et,"m(divP(14)) (v => v**3) (addP(5)) (dF3x).then(v => (D = v)) = "),U=h(et,s[3]),et.forEach(n),V=P(t),F=p(t,"P",{"data-svelte-h":!0}),J(F)!=="svelte-1omp1e7"&&(F.textContent=at),z=P(t),I=p(t,"PRE",{});var st=E(I);Y=h(st,s[5]),st.forEach(n),G=P(t),k=p(t,"DIV",{id:!0}),E(k).forEach(n),this.h()},h(){rt(r,"data.sveltekit.reload",""),K(o,"color","aqua"),K(v,"color","aqua"),K(q,"color","aqua"),K(C,"color","aqua"),rt(k,"id","six")},m(t,a){i(t,l,a),i(t,f,a),i(t,w,a),y(w,A),i(t,_,a),i(t,x,a),i(t,T,a),i(t,r,a),i(t,M,a),i(t,o,a),y(o,D),y(o,e),i(t,u,a),i(t,v,a),y(v,R),y(v,S),i(t,j,a),i(t,q,a),y(q,W),y(q,N),i(t,O,a),i(t,C,a),y(C,X),y(C,U),i(t,V,a),i(t,F,a),i(t,z,a),i(t,I,a),y(I,Y),i(t,G,a),i(t,k,a),Z||(nt=vt(r,"click",mt),Z=!0)},p(t,[a]){a&1&&Q(e,t[0]),a&2&&Q(S,t[1]),a&4&&Q(N,t[2]),a&8&&Q(U,t[3])},i:it,o:it,d(t){t&&(n(l),n(f),n(w),n(_),n(x),n(T),n(r),n(M),n(o),n(u),n(v),n(j),n(q),n(O),n(C),n(V),n(F),n(z),n(I),n(G),n(k)),Z=!1,nt()}}}function H(s){return new Promise(l=>setTimeout(l,s))}async function pt(s){return await H(300),s*s}async function ft(s){return await H(500),s}function mt(){location.reload()}function ct(s,l,b){var f=()=>{};function w(e){return function u(v){return v===f?e:(e=ft(e).then(R=>v(R)),u)}}var A=`    function M (x) {
            return function go (func){
            if (func === dF3x) return x;
            else x = idP(x).then(v => func(v));
            return go;
          }
        }`;let _=e=>async u=>(await H(500),parseInt(e,10)+parseInt(u,10)),x=e=>async u=>(await H(600),e*u),L=e=>async u=>(await H(300),u/e);var T=`    function wait(ms) {
      return new Promise(r => setTimeout(r, ms));
    }
    
    async function squareP (x) {
      await wait(300)
      return x*x;
    }
    
    async function pause (t) {
      await wait(100 * t)
      return;
    }
    
    let divPinverse = a => async b => {
      await wait (300)
      return a/b;
    }
    
    
    let addP =  x => async y => {
      await wait(500)
      return parseInt(x,10) + parseInt(y,10);
    }
    
    let doubleP = async y => {
      await wait(600)
      return 2 * parseInt(y,10) 
    }
    
    let multP = x => async y => {
      await wait(600)
      return x * y;
    }
    
    let divP = a => async b => {
      await wait (300)
      return b/a;
    }
    
    async function idP (x) {
      await wait(500)
      return x;
    }
    
    async function cubeP (x) {
      await wait(600)
      return x*x*x;
    } `,r=w(4),B="A",M="B",o="C",D="D";return r(_(3))(pt)(e=>e-7)(f).then(e=>b(0,B=e)),r(e=>e/42)(x(6))(e=>e*7)(f).then(e=>b(1,M=e)),r(_(7))(Math.sqrt)(e=>e*6)(f).then(e=>b(2,o=e)),r(L(14))(e=>e*3)(_(5))(e=>e*3)(f).then(e=>b(3,D=e)),[B,M,o,D,A,T]}class yt extends ut{constructor(l){super(),ot(this,l,ct,dt,lt,{})}}export{yt as component};
