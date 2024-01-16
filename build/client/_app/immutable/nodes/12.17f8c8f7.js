import{s as dt,n as ot}from"../chunks/scheduler.41143b43.js";import{S as ft,i as mt,g as p,s as P,m as h,h as d,x as N,c,j as T,n as x,f as a,k as Pt,l as W,a as r,y,A as ht,o as X}from"../chunks/index.8cc052f2.js";function ct(s){let o,u="This modified version of M can handle both ordinary data and promises together in composite functions:",i,_,S,f,w,j='In the demonstration below, functions composed of mixtures of ordinary functions and promises eventually resolve as expected. &quot;x&quot; in the m-M(x) closure begins with the number 4: <span style="color:aqua">m = M(4) </span>.',B,l,M="Restart",C,v,q,I,k,t,m,D,R,F,Y,U,z,b,Z,G,J,E,rt="The asynchronous functions used above are in this list:",K,H,g,Q,A,lt="Here's the restart code:",V,L,$,tt,ut;return{c(){o=p("p"),o.textContent=u,i=P(),_=p("pre"),S=h(s[4]),f=P(),w=p("p"),w.innerHTML=j,B=P(),l=p("button"),l.textContent=M,C=P(),v=p("p"),q=h("m(addP(3)) (squareP) (v => v - 7) (dF3x).then(v => (D = v)) = "),I=h(s[0]),k=P(),t=p("p"),m=h("m(v => v / 42) (multP(6)) (v=>v * 7) (dF3x).then(v => (A = v)) = "),D=h(s[1]),R=P(),F=p("p"),Y=h("m(addP(7)) (Math.sqrt) (v => v * 6) (dF3x).then(a => (C = a)) = "),U=h(s[2]),z=P(),b=p("p"),Z=h("m(divP(14)) (v => v**3) (addP(5)) (dF3x).then(v => (D = v)) = "),G=h(s[3]),J=P(),E=p("p"),E.textContent=rt,K=P(),H=p("pre"),g=h(s[5]),Q=P(),A=p("p"),A.textContent=lt,V=P(),L=p("pre"),$=h(s[7]),this.h()},l(e){o=d(e,"P",{"data-svelte-h":!0}),N(o)!=="svelte-8qhkoy"&&(o.textContent=u),i=c(e),_=d(e,"PRE",{});var n=T(_);S=x(n,s[4]),n.forEach(a),f=c(e),w=d(e,"P",{"data-svelte-h":!0}),N(w)!=="svelte-vugchc"&&(w.innerHTML=j),B=c(e),l=d(e,"BUTTON",{"data.sveltekit.reload":!0,"data-svelte-h":!0}),N(l)!=="svelte-7mhl08"&&(l.textContent=M),C=c(e),v=d(e,"P",{style:!0});var et=T(v);q=x(et,"m(addP(3)) (squareP) (v => v - 7) (dF3x).then(v => (D = v)) = "),I=x(et,s[0]),et.forEach(a),k=c(e),t=d(e,"P",{style:!0});var nt=T(t);m=x(nt,"m(v => v / 42) (multP(6)) (v=>v * 7) (dF3x).then(v => (A = v)) = "),D=x(nt,s[1]),nt.forEach(a),R=c(e),F=d(e,"P",{style:!0});var at=T(F);Y=x(at,"m(addP(7)) (Math.sqrt) (v => v * 6) (dF3x).then(a => (C = a)) = "),U=x(at,s[2]),at.forEach(a),z=c(e),b=d(e,"P",{style:!0});var st=T(b);Z=x(st,"m(divP(14)) (v => v**3) (addP(5)) (dF3x).then(v => (D = v)) = "),G=x(st,s[3]),st.forEach(a),J=c(e),E=d(e,"P",{"data-svelte-h":!0}),N(E)!=="svelte-1omp1e7"&&(E.textContent=rt),K=c(e),H=d(e,"PRE",{});var it=T(H);g=x(it,s[5]),it.forEach(a),Q=c(e),A=d(e,"P",{"data-svelte-h":!0}),N(A)!=="svelte-15mm6ld"&&(A.textContent=lt),V=c(e),L=d(e,"PRE",{});var vt=T(L);$=x(vt,s[7]),vt.forEach(a),this.h()},h(){Pt(l,"data.sveltekit.reload",""),W(v,"color","aqua"),W(t,"color","aqua"),W(F,"color","aqua"),W(b,"color","aqua")},m(e,n){r(e,o,n),r(e,i,n),r(e,_,n),y(_,S),r(e,f,n),r(e,w,n),r(e,B,n),r(e,l,n),r(e,C,n),r(e,v,n),y(v,q),y(v,I),r(e,k,n),r(e,t,n),y(t,m),y(t,D),r(e,R,n),r(e,F,n),y(F,Y),y(F,U),r(e,z,n),r(e,b,n),y(b,Z),y(b,G),r(e,J,n),r(e,E,n),r(e,K,n),r(e,H,n),y(H,g),r(e,Q,n),r(e,A,n),r(e,V,n),r(e,L,n),y(L,$),tt||(ut=ht(l,"click",s[6]),tt=!0)},p(e,[n]){n&1&&X(I,e[0]),n&2&&X(D,e[1]),n&4&&X(U,e[2]),n&8&&X(G,e[3])},i:ot,o:ot,d(e){e&&(a(o),a(i),a(_),a(f),a(w),a(B),a(l),a(C),a(v),a(k),a(t),a(R),a(F),a(z),a(b),a(J),a(E),a(K),a(H),a(Q),a(A),a(V),a(L)),tt=!1,ut()}}}function O(s){return new Promise(o=>setTimeout(o,s))}async function pt(s){return await O(300),s*s}async function xt(s){return await O(500),s}function yt(s,o,u){var i=()=>{};function _(t){return function m(D){return D===i?t:(t=xt(t).then(R=>D(R)),m)}}var S=`    function M (x) {
            return function go (func){
            if (func === dF3x) return x;
            else x = idP(x).then(v => func(v));
            return go;
          }
        }`;let f=t=>async m=>(await O(500),parseInt(t,10)+parseInt(m,10)),w=t=>async m=>(await O(600),t*m),j=t=>async m=>(await O(300),m/t);var B=`    function wait(ms) {
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
    } `,l=_(4),M="A",C="B",v="C",q="D";function I(){u(0,M="A"),u(1,C="B"),u(2,v="C"),u(3,q="D"),l(()=>4)(f(3))(pt)(t=>t-7)(i).then(t=>u(0,M=t)),l(t=>t/42)(w(6))(t=>t*7)(i).then(t=>u(1,C=t)),l(f(7))(Math.sqrt)(t=>t*6)(i).then(t=>u(2,v=t)),l(j(14))(t=>t*3)(f(5))(t=>t*3)(i).then(t=>u(3,q=t))}var k=`    function restart () {
      A = "A"
      B = "B"
      C = "C"
      D = "D"
      m(() => 4)(addP(3)) (squareP) (v => v-7)(dF3x).then(v => (A = v));
      m(v => v/42)(multP(6))(v=>v*7)(dF3x).then(v => (B = v));
      m(addP(7))(Math.sqrt)(v => v*6)(dF3x).then(a => (C = a));
      m(divP(14))(v => v * 3)(addP(5))(v=> v * 3)(dF3x).then(v => (D = v)); 
    }`;return l(f(3))(pt)(t=>t-7)(i).then(t=>u(0,M=t)),l(t=>t/42)(w(6))(t=>t*7)(i).then(t=>u(1,C=t)),l(f(7))(Math.sqrt)(t=>t*6)(i).then(t=>u(2,v=t)),l(j(14))(t=>t*3)(f(5))(t=>t*3)(i).then(t=>u(3,q=t)),[M,C,v,q,S,B,I,k]}class _t extends ft{constructor(o){super(),mt(this,o,yt,ct,dt,{})}}export{_t as component};
