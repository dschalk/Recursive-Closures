import{s as X,n as W}from"../chunks/scheduler.1f6706a1.js";import{S as Y,i as Z,g as i,s as o,h as l,x as s,c as r,k as L,a,f as n}from"../chunks/index.2d48075f.js";function $(V){let u,N="Functional Programming",b,f,F="FUNCTIONAL PROGRAMMING",k,p,R=`"Functional programming" means different things to different people. Applied to JavaScript, I wish
	it meant making good use JavaScript functions.`,_,d,j=`Mimicking features of the Haskell programming language vaguely hoping Haskell's reliability, ease
	of maintenance, and other conveniences will come your way reminds me of the cargo cults. "The name
	derives from the belief which began among Melanesians in the late 19th and early 20th centuries
	that various ritualistic acts such as the building of an airplane runway will result in the
	appearance of material wealth, particularly highly desirable Western goods (i.e., "cargo"), via
	Western airplanes."`,I,h,z="Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture",S,g,B="Cargo Cult",H,v,U=`According to the Wikipedia article &quot;Cargo Cult&quot;, &quot;a cargo cult is a belief system among members of
	a relatively undeveloped society in which adherents practice superstitious rituals hoping to bring
	modern goods supplied by a more technologically advanced society. <a href="https://en.wikipedia.org/wiki/Cargo_cult">Cargo Cult</a> The article goes on to say, &quot;The name derives from the belief which began among Melanesians in the
	late 19th and early 20th centuries that various ritualistic acts such as the building of an airplane
	runway will result in the appearance of material wealth, particularly highly desirable Western goods
	(i.e., &quot;cargo&quot;), via Western airplanes.&quot; citing Burridge, Kenelm (1969). New Heaven, New Earth: A study
	of Millenarian Activities. London: Basil Blackwell. p. 48 and Lindstrom, Lamont (1993). Cargo Cult:
	Strange Stories of desire from Melanesia and beyond. Honolulu: University of Hawaii Press.`,q,y,G=`Haskell programming language code has, in my experience, been wonderfully reliable and
	maintainable. The WebSockets server supporting two games and one of the monad demonstrations is a
	good example. Hoping to bring some of this Haskell goodness into my JavaScript code, I toyed with
	what I call "cargo cult functional JavaScript" for a time. Without thinking things through
	intelligently, I imposed strict type checking, referential transparency, and immutability on my
	JavaScript code in situations where these things needlessly caused clutter, inefficiency, code
	bloat, and obfuscation. I invented all sorts of "monads" along with monad transformers and
	mechanisms for lifting values into composite monadic types.`,A,C,O=`Now that I have abandoned the folly of mindlessly mimicking features of functional programming
	languages, I can console myself with the thought that I wasn't the first and I wasn't the last
	JavaScript programmer to got lost in this manner. Strict typing where it serves no useful purpose
	and insisting on immutability where all it does is polute memory with useless intermediate values
	is trendy these days.`,P,w,E="Code where functions might collide over mutable global variables leads programmers to religeously avoid mutable global variables. I'm using the Svelte framework for this project, and I try to keep my modules small. Mutable global variables can't cause problems because I have no modules or hierarchies of nested modules in which clashes might occur. I don't hesitate to mutate variables withing the scope of functions, or within the scope of my reasonably sized svelte modules.",M,x,K="References",J,m,D="Cargo Cult Programming video presentation",T,c,Q="Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture";return{c(){u=i("h1"),u.textContent=N,b=o(),f=i("h3"),f.textContent=F,k=o(),p=i("p"),p.textContent=R,_=o(),d=i("p"),d.textContent=j,I=o(),h=i("a"),h.textContent=z,S=o(),g=i("h4"),g.textContent=B,H=o(),v=i("p"),v.innerHTML=U,q=o(),y=i("p"),y.textContent=G,A=o(),C=i("p"),C.textContent=O,P=o(),w=i("p"),w.textContent=E,M=o(),x=i("h4"),x.textContent=K,J=o(),m=i("a"),m.textContent=D,T=o(),c=i("a"),c.textContent=Q,this.h()},l(t){u=l(t,"H1",{"data-svelte-h":!0}),s(u)!=="svelte-3beg8g"&&(u.textContent=N),b=r(t),f=l(t,"H3",{"data-svelte-h":!0}),s(f)!=="svelte-j9f1i4"&&(f.textContent=F),k=r(t),p=l(t,"P",{"data-svelte-h":!0}),s(p)!=="svelte-2ei7fv"&&(p.textContent=R),_=r(t),d=l(t,"P",{"data-svelte-h":!0}),s(d)!=="svelte-1inxiqk"&&(d.textContent=j),I=r(t),h=l(t,"A",{href:!0,"data-svelte-h":!0}),s(h)!=="svelte-gywew"&&(h.textContent=z),S=r(t),g=l(t,"H4",{"data-svelte-h":!0}),s(g)!=="svelte-b951yi"&&(g.textContent=B),H=r(t),v=l(t,"P",{"data-svelte-h":!0}),s(v)!=="svelte-6v62el"&&(v.innerHTML=U),q=r(t),y=l(t,"P",{"data-svelte-h":!0}),s(y)!=="svelte-1owqqlu"&&(y.textContent=G),A=r(t),C=l(t,"P",{"data-svelte-h":!0}),s(C)!=="svelte-5kr312"&&(C.textContent=O),P=r(t),w=l(t,"P",{"data-svelte-h":!0}),s(w)!=="svelte-1oqars7"&&(w.textContent=E),M=r(t),x=l(t,"H4",{"data-svelte-h":!0}),s(x)!=="svelte-sk55zo"&&(x.textContent=K),J=r(t),m=l(t,"A",{href:!0,"data-svelte-h":!0}),s(m)!=="svelte-dkxzs1"&&(m.textContent=D),T=r(t),c=l(t,"A",{href:!0,"data-svelte-h":!0}),s(c)!=="svelte-gywew"&&(c.textContent=Q),this.h()},h(){L(h,"href","https://www.youtube.com/watch?v=yvfAtIJbatg"),L(m,"href","https://www.youtube.com/watch?v=nm22duia0jU"),L(c,"href","https://www.youtube.com/watch?v=yvfAtIJbatg")},m(t,e){a(t,u,e),a(t,b,e),a(t,f,e),a(t,k,e),a(t,p,e),a(t,_,e),a(t,d,e),a(t,I,e),a(t,h,e),a(t,S,e),a(t,g,e),a(t,H,e),a(t,v,e),a(t,q,e),a(t,y,e),a(t,A,e),a(t,C,e),a(t,P,e),a(t,w,e),a(t,M,e),a(t,x,e),a(t,J,e),a(t,m,e),a(t,T,e),a(t,c,e)},p:W,i:W,o:W,d(t){t&&(n(u),n(b),n(f),n(k),n(p),n(_),n(d),n(I),n(h),n(S),n(g),n(H),n(v),n(q),n(y),n(A),n(C),n(P),n(w),n(M),n(x),n(J),n(m),n(T),n(c))}}}class at extends Y{constructor(u){super(),Z(this,u,null,$,X,{})}}export{at as component};
