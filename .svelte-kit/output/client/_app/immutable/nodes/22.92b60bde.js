import{s as de,h as be,r as Ce}from"../chunks/scheduler.41143b43.js";import{S as ye,i as xe,g as u,s as h,m as X,h as v,x,c as m,j as Y,n as Z,f as l,l as se,k as p,a as s,y as g,A as he,o as me,E as ce}from"../chunks/index.8cc052f2.js";import{f as _e}from"../chunks/index.9abb7534.js";function we(f){let i,C=`<br/>
       Two Factorization Algorithms`,r,d,b,z="Efficient Algorithm",q,c,L='Enter a number between 2 and a few <span class="big svelte-1rld2h7">quadrillion</span><span>.</span>',R,y,U,o,_,a,n,k="Inefficient Algorithm",B,w,ie='Just for fun, I tried finding factors using bitwise operators instead of "%", the modulo operater. The Google Chrome engine processed it very slowly.',S,N,re='Enter a number between 2 and not much greater than a <span class="big svelte-1rld2h7">billion</span><span>.</span>',G,E,$,D,F,A,J,V,M,ae="Here's the code for the more efficient, modulo-operator algorithm:",K,H,ee,O,P,ne="This is the code for the bitwise-operator algorithm:",Q,j,te,W,T,fe="Game of Score",I,le,ue;return{c(){i=u("div"),i.innerHTML=C,d=h(),b=u("p"),b.textContent=z,q=h(),c=u("p"),c.innerHTML=L,R=h(),y=u("input"),U=h(),o=u("h3"),_=X(f[1]),a=h(),n=u("p"),n.textContent=k,B=h(),w=u("p"),w.textContent=ie,S=h(),N=u("p"),N.innerHTML=re,G=h(),E=u("input"),$=h(),D=u("br"),F=h(),A=u("h3"),J=X(f[0]),V=h(),M=u("p"),M.textContent=ae,K=h(),H=u("pre"),ee=X(f[5]),O=h(),P=u("p"),P.textContent=ne,Q=h(),j=u("pre"),te=X(f[3]),W=h(),T=u("a"),T.textContent=fe,this.h()},l(e){i=v(e,"DIV",{style:!0,"data-svelte-h":!0}),x(i)!=="svelte-1qcx4le"&&(i.innerHTML=C),d=m(e),b=v(e,"P",{class:!0,"data-svelte-h":!0}),x(b)!=="svelte-qrbugj"&&(b.textContent=z),q=m(e),c=v(e,"P",{class:!0,"data-svelte-h":!0}),x(c)!=="svelte-zcyupp"&&(c.innerHTML=L),R=m(e),y=v(e,"INPUT",{type:!0,class:!0}),U=m(e),o=v(e,"H3",{class:!0});var t=Y(o);_=Z(t,f[1]),t.forEach(l),a=m(e),n=v(e,"P",{class:!0,"data-svelte-h":!0}),x(n)!=="svelte-rb5daq"&&(n.textContent=k),B=m(e),w=v(e,"P",{class:!0,"data-svelte-h":!0}),x(w)!=="svelte-pk8e92"&&(w.textContent=ie),S=m(e),N=v(e,"P",{class:!0,"data-svelte-h":!0}),x(N)!=="svelte-5ey14x"&&(N.innerHTML=re),G=m(e),E=v(e,"INPUT",{type:!0,class:!0}),$=m(e),D=v(e,"BR",{}),F=m(e),A=v(e,"H3",{class:!0});var ve=Y(A);J=Z(ve,f[0]),ve.forEach(l),V=m(e),M=v(e,"P",{class:!0,"data-svelte-h":!0}),x(M)!=="svelte-13ug16w"&&(M.textContent=ae),K=m(e),H=v(e,"PRE",{class:!0});var pe=Y(H);ee=Z(pe,f[5]),pe.forEach(l),O=m(e),P=v(e,"P",{class:!0,"data-svelte-h":!0}),x(P)!=="svelte-m44qop"&&(P.textContent=ne),Q=m(e),j=v(e,"PRE",{class:!0});var oe=Y(j);te=Z(oe,f[3]),oe.forEach(l),W=m(e),T=v(e,"A",{href:!0,"data-svelte-h":!0}),x(T)!=="svelte-1ruktk0"&&(T.textContent=fe),this.h()},h(){se(i,"font-family","Times New Roman"),se(i,"text-align","center"),se(i,"font-size","38px"),p(b,"class","big svelte-1rld2h7"),p(c,"class","svelte-1rld2h7"),p(y,"type","text"),p(y,"class","svelte-1rld2h7"),p(o,"class","marg svelte-1rld2h7"),p(n,"class","big svelte-1rld2h7"),p(w,"class","svelte-1rld2h7"),p(N,"class","svelte-1rld2h7"),p(E,"type","text"),p(E,"class","svelte-1rld2h7"),p(A,"class","marg svelte-1rld2h7"),p(M,"class","svelte-1rld2h7"),p(H,"class","svelte-1rld2h7"),p(P,"class","svelte-1rld2h7"),p(j,"class","svelte-1rld2h7"),p(T,"href","http://score.schalk.net")},m(e,t){s(e,i,t),s(e,d,t),s(e,b,t),s(e,q,t),s(e,c,t),s(e,R,t),s(e,y,t),s(e,U,t),s(e,o,t),g(o,_),s(e,a,t),s(e,n,t),s(e,B,t),s(e,w,t),s(e,S,t),s(e,N,t),s(e,G,t),s(e,E,t),s(e,$,t),s(e,D,t),s(e,F,t),s(e,A,t),g(A,J),s(e,V,t),s(e,M,t),s(e,K,t),s(e,H,t),g(H,ee),s(e,O,t),s(e,P,t),s(e,Q,t),s(e,j,t),g(j,te),s(e,W,t),s(e,T,t),I=!0,le||(ue=[he(y,"keydown",f[4]),he(E,"keydown",f[2])],le=!0)},p(e,[t]){(!I||t&2)&&me(_,e[1]),(!I||t&1)&&me(J,e[0])},i(e){I||(e&&be(()=>{I&&(r||(r=ce(i,_e,{},!0)),r.run(1))}),I=!0)},o(e){e&&(r||(r=ce(i,_e,{},!1)),r.run(0)),I=!1},d(e){e&&(l(i),l(d),l(b),l(q),l(c),l(R),l(y),l(U),l(o),l(a),l(n),l(B),l(w),l(S),l(N),l(G),l(E),l($),l(D),l(F),l(A),l(V),l(M),l(K),l(H),l(O),l(P),l(Q),l(j),l(W),l(T)),e&&r&&r.end(),le=!1,Ce(ue)}}}function Ne(f,i){var C=Math.floor(i/8),r=i%8;f[C]|=1<<r}function Me(f,i){var C=Math.floor(i/8),r=i%8,d=f[C]&1<<r;return d===0}function Pe(f,i,C){let r=1,d=[];var b=function(_){if(C(0,d=[]),_.keyCode==13){let a=parseInt(_.target.value);z(a)}};function z(o){if(o===1)return;r=o;var _=new ArrayBuffer(Math.ceil(r/8)),a=new Uint8Array(_);let n=2;for(n;n<=r;n+=1)if(Me(a,n))for(let k=n;k<=r;k+=n)Ne(a,k),k===r&&(d.push(" "+n),r=r/n,z(r))}var q=`function main (n) {
        if (n === 1) return;
        N = n;
        var buf = new ArrayBuffer(Math.ceil(N/8));
        var view = new Uint8Array(buf); 
        var top = Math.ceil(Math.sqrt(N));
        let i = 2;
        for(i; i <= N; i+=1){
            if(test(view, i)) {
                for(let j = i; j <= N; j+=i) {
                    set(view, j);
                    if (j === N) {
                        ar.push(" " + i);
                        N = N / i;
                        main(N);
                    }
                }
            }
        }
    };
    
    function set(ar,i) {
      var a = Math.floor(i / 8)
      var b = i % 8
      ar[a] |= (1 << b)
    };
    
    function test (ar,i) {
      var a = Math.floor(i / 8);
      var b = i % 8;
      var value = ar[a] & (1 << b);
      return value === 0;
    }`;let c=1,L=[];var R=function(_){if(C(1,L=[]),_.keyCode==13){let a=parseInt(_.target.value);y(a)}};function y(o){c=o;var _=o+1;for(let a=2;a<_;a+=1)for(;c%a===0;)if(L.push(" "+a),c=c/a,c==1)return}var U=`let N2 = 1;
    let ar2 = [];
    
    var first2 = function first (e) {
        ar2 = [];
        if (e.keyCode == 13) {
            let num = parseInt(e.target.value);
            main2(num);
        };
    };
    
    function main2 (n) {
        N2 = n;
        for(let i = 2; i <= N2; i+=1){
            while (N2 % i === 0) {
                ar2.push(" " + i);
                N2 = N2 / i;
                if (N2 == 1) return
            }
        }
    }`;return[d,L,b,q,R,U]}class Ae extends ye{constructor(i){super(),xe(this,i,Pe,we,de,{})}}export{Ae as component};
