import{s as ce,f as fe,n as ee}from"../chunks/scheduler.1f6706a1.js";import{S as me,i as ve,s as a,g as u,m as x,z as he,f as t,c as o,h as p,x as E,j as V,n as _,k as I,a as n,y}from"../chunks/index.2d48075f.js";const de=""+new URL("../assets/Screenshot_async.d10e0e78.png",import.meta.url).href;function xe(r){let i,c,S,v,H="**************************************************************************",j,m,l="Arrays in Monads",f,w,te=`The simple monads used in this section are returned by M1(x) where x can be any valid JavaScript value, including primitive values, functions, promises, etc. It differs from M(x) in that the monads it spawns use the function ret() rather than the string "stop" to trigger the return of the values they hold. M1 monads don't test for types although arguments must be functions. It is up to users to use Typescript, catch errors, or just be careful.`,R,C,K,g,b,se="m1 consumes the functions shown above as follows: m1(mpow(10))(msqrt)(madd(10))(ret)",U,h,N,ne=r[0](F).join(", ")+"",O,Q,k,M,le="This is an excercize in using very small monads with specialized functions. Usually, it's better to use a specialized monad with generally useful functions. For example, monads spawned by M2 (below) must start with non-empty arrays but after that, generic functions, even elementary lambdas, can facilitate computations.",A,P,W,D,d,X,re=r[1](F).join(", ")+"",Y,Z,$,q,ie="The state of the solitaire  game of Score is maintined in m2 = M(x) where x is an array of seven arrays.",B,z,ae="The functions shown on this page were tested in Firefox Developer Tools, which is loaded in the Firefox browser by pressing F12. Here's a screenshot:",G,T,ue;return{c(){i=a(),c=u("br"),S=a(),v=u("div"),v.textContent=H,j=a(),m=u("h3"),m.textContent=l,f=a(),w=u("p"),w.textContent=te,R=a(),C=u("pre"),K=x(r[2]),g=a(),b=u("p"),b.textContent=se,U=a(),h=u("p"),N=x("The result, as expected, is [ "),O=x(ne),Q=x(" ]."),k=a(),M=u("p"),M.textContent=le,A=a(),P=u("pre"),W=x(r[3]),D=a(),d=u("p"),X=x("Here's the result of m4(v=>v**3)(v=>v+v)(v=>v-12)(ret): ["),Y=x(re),Z=x("]."),$=a(),q=u("p"),q.textContent=ie,B=a(),z=u("p"),z.textContent=ae,G=a(),T=u("img"),this.h()},l(e){he("svelte-8uqoua",document.head).forEach(t),i=o(e),c=p(e,"BR",{}),S=o(e),v=p(e,"DIV",{"data-svelte-h":!0}),E(v)!=="svelte-9ovhf0"&&(v.textContent=H),j=o(e),m=p(e,"H3",{class:!0,"data-svelte-h":!0}),E(m)!=="svelte-1acbbz"&&(m.textContent=l),f=o(e),w=p(e,"P",{"data-svelte-h":!0}),E(w)!=="svelte-u91ddh"&&(w.textContent=te),R=o(e),C=p(e,"PRE",{class:!0});var oe=V(C);K=_(oe,r[2]),oe.forEach(t),g=o(e),b=p(e,"P",{"data-svelte-h":!0}),E(b)!=="svelte-i1l6ok"&&(b.textContent=se),U=o(e),h=p(e,"P",{});var J=V(h);N=_(J,"The result, as expected, is [ "),O=_(J,ne),Q=_(J," ]."),J.forEach(t),k=o(e),M=p(e,"P",{"data-svelte-h":!0}),E(M)!=="svelte-2lc6pn"&&(M.textContent=le),A=o(e),P=p(e,"PRE",{class:!0});var pe=V(P);W=_(pe,r[3]),pe.forEach(t),D=o(e),d=p(e,"P",{});var L=V(d);X=_(L,"Here's the result of m4(v=>v**3)(v=>v+v)(v=>v-12)(ret): ["),Y=_(L,re),Z=_(L,"]."),L.forEach(t),$=o(e),q=p(e,"P",{"data-svelte-h":!0}),E(q)!=="svelte-8cn1la"&&(q.textContent=ie),B=o(e),z=p(e,"P",{"data-svelte-h":!0}),E(z)!=="svelte-y2a7tl"&&(z.textContent=ae),G=o(e),T=p(e,"IMG",{src:!0,class:!0}),this.h()},h(){document.title="Arrys in monads",I(m,"class","h3b"),I(C,"class","svelte-1o6tzw9"),I(P,"class","svelte-1o6tzw9"),fe(T.src,ue=de)||I(T,"src",ue),I(T,"class","svelte-1o6tzw9")},m(e,s){n(e,i,s),n(e,c,s),n(e,S,s),n(e,v,s),n(e,j,s),n(e,m,s),n(e,f,s),n(e,w,s),n(e,R,s),n(e,C,s),y(C,K),n(e,g,s),n(e,b,s),n(e,U,s),n(e,h,s),y(h,N),y(h,O),y(h,Q),n(e,k,s),n(e,M,s),n(e,A,s),n(e,P,s),y(P,W),n(e,D,s),n(e,d,s),y(d,X),y(d,Y),y(d,Z),n(e,$,s),n(e,q,s),n(e,B,s),n(e,z,s),n(e,G,s),n(e,T,s)},p:ee,i:ee,o:ee,d(e){e&&(t(i),t(c),t(S),t(v),t(j),t(m),t(f),t(w),t(R),t(C),t(g),t(b),t(U),t(h),t(k),t(M),t(A),t(P),t(D),t(d),t($),t(q),t(B),t(z),t(G),t(T))}}}function F(){}function _e(r){return function i(c){return c===F?r:(r=c(r),i)}}function ye(r=[0]){return function i(c){return c===F?r:(r.push(c(r.slice(-1)[0])),i)}}function we(r){var i=_e([2]),c=l=>f=>(f.push(f.slice(-1)**l),f),S=l=>(l.push(Math.sqrt(l.slice(-1))),l),v=l=>f=>(f.push(f.slice(-1)*1+1*l),f);i(c(10))(S)(v(10))(F);var H=ye([3]);H(l=>l**3)(l=>l+l)(l=>l-12)(F);var j=`function ret () {};  // Used in M1 (below).

function M1 (x) {
    return function go (func) {
        if (func === ret) return x;
        else x = func(x);
        return go;
    }
}

var m1 = M1([2]);

var mpow = y => x => {x.push((x.slice(-1))**y); return x}
var msqrt = x => {x.push(Math.sqrt(x.slice(-1))); return x}
var madd = y => x => {x.push(x.slice(-1)+1*y); return x}

m1(mpow(3))(mpow(3))(mdouble)(msqrt)(madd(10))(ret)`,m=`function M2 (x) {
    return function go (func) {
        if (func === ret) return x;
        else {
            x.push(func(x.slice(-1)[0]));
            return go;
        }
    }
}

var m4 = M2([3]);`;return[i,H,j,m]}class Me extends me{constructor(i){super(),ve(this,i,we,xe,ce,{})}}export{Me as component};
