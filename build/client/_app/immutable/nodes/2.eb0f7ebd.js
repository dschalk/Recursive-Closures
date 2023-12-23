import{s as So,c as jo,f as Ao,u as Do,g as Io,d as Lo}from"../chunks/scheduler.1f6706a1.js";import{S as Bo,i as Xo,g as o,s,m as v,h as r,j as u,x as c,c as a,n as p,f as h,l as w,k as g,a as Ve,y as e,d as Oo,t as Uo}from"../chunks/index.2d48075f.js";const Jo="data:image/png;base64,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";function Wo(i){let t,k,We="Recursive Closures",U,F,Ne=`<h3 class="svelte-11ad9vo">Why &quot;recursive&quot;</h3>
    Closures defined by letting m = M(x) (M is defined below) for some variable &quot;m&quot; and any value &quot;x&quot;
    (see below) are recursive in the sense that: <br/>
    (A) the inner function, named &quot;go&quot;, repeatedly calls itself, and <br/>
    (B) go repeatedly modifies &quot;x&quot; by means of varying functions &quot;func&quot; which are:<br/>
        (1) currently queued in front of the copy of go named &quot;m&quot;,
    <br/>
        (2) provided later if the current value of &quot;x&quot; is still alive
    in memory; i.e., if the program in which &quot;m&quot; is defined is still running, or the current value of x is retrieved from permanent storage.`,Ce,R,Qe="Regarding the value of x (m(dF3x)) retrieved from storage: If m is already defined, you could run <span>`m(()=&gt;x)(newFunc1)(newFunc2)</span> . Defining m with &quot;m = M(x)&quot; is another option.",J,T,ke,Fe,H,Pe,Me,E,W,qe,P,Ge="Anonymous Computation:",N,Re,Ye,$e,et,tt,f,Q,Pn="Encapsulated State:",nt,Te,ot,rt,He,st,at,G,Mn="Sometime later (the garbage collector ignores closures):",it,Ee,lt,ct,_e,dt,ht,ze,ut,mt,Se,vt,pt,z,qn="Rubik's Cube Simulation",ft,y,gt,bt,yt,Z,Rn="In the Rubik's cube application, the m-M(x) closure is defined as follows:",xt,je,wt,Ct,K,Tn="The visual representation in the browser is constructed so that bb, gg, rr, oo, yy, and ww correspond to its right, left, back, front, top, and bottom faces respectively. The fact that x[3] represents the front face of the cube is especially relevant in the discussion that follows.",kt,Ft,V,Hn=`The value held in the m-M(x) closure in the Rubik's cube application, "x", is always an array of six nine-member
    references to the strings "blue, green, red, orange, yellow, and white." The nine front-facing squares seen in the browser are all colored according to the nine strings referenced in xk[3]. In the starting cube, also known as the "solved cube," x[3] is the array "oo", the array of all nine references to "orange." Here's the first of the six parts of the 54 div representation of the Rubik's cube in the DOM:`,Pt,Ae,Mt,qt,Y,En="Here are the definitions of the classes that get reassigned to divs during the course of manipulating it with key presses and mouse clicks:",Rt,De,Tt,Ht,$,_n='The third button down from the top and the final button of the front face (see above) contain the statement "m = m(F)". These correspond to the upper right and lower right corners of the cube representation in the browser. Clicking the upper right or lower right corners of the cube, therefore, mutates x in the m=M(x) closure into the value returned by F(x), which is named "temp".',Et,Ie,_t,zt,ee,zn=`Clicking on the cube representation in the browser isn't the only way to call m on F; i.e., run "m(F)" and mutate x into the return value of F(x). Pressing the "F" key and clicking on the "F" button do the same thing. The "m =" part of the statement m = m(F) triggers reactivity in this Sveltekit application, giving users almost instantaneous feedback from their key presses and mouse clicks.`,St,te,Sn=`Examining the function "F", we see that the front face of the cube, temp[3], remains solid orange after class reassignments that make it appear to rotate. Evidence of rotation can be seen on the top (temp[4]) and on the right (temp[0]) sides of the cube. Here's what the cube looks like in the browser after running "m = m(F)" on the solved cube:`,jt,M,jn,At,ne,An='The changes to the top face, with three classes reassigned from x[4] (previously all white), and the changes to the right face, three classes reassigned from x[1] (previously all green), demonstrated the correspondence between the function "F" and the visual representation in the browser. And, of course, the observed changes are what you get when you turn the front face of a solved cube.',Dt,oe,Dn=`These strings correspond to the names of CSS selectors with corresponding "background-color" elements. Here's what I mean:`,It,re,In='Clicking the center of each face rearranges x in the m-M(x) closure, thereby automatically rearranging some of the class assignments of the 54 dives in the DOM. In the browser, this creates the appearance of 90 degree clockwise rotation of the entire cube around the axes perpendicular to the clicked centers. Pressing the x, y, OR z Keys has the same effect. Holding down SHIFT while pressing these keys creates the appearance of counterclockwise rotation. There are also buttons (above) for clockwise rotations, and "back" buttons for counterclockwise rotation.',Lt,se,Ln=`The 54 divs that combine to represent the cube in the DOM are shown below.
    The visual representation that appears in the browser is on the next page, <a href="./cube7">Rubik&#39;s cube</a>`,Bt,Le,Xt,Ot,ae,Bn=`If you click on the top center of a solved cube three times, the green side will face you.
    Clicking the upper right corner and then clicking the top center again to restore the cube to its previous orientation confirms that you have rotated the left side clockwise by by 90 degrees.`,Ut,S,Xn=`***********************************************************************
      <br/>
      Case 2 -- Clicking on the buttons.`,Jt,ie,On=`Similar to clicking on parts of the cube, the callback specified in
      buttons that rotate faces, middle sections, and the entire cube do so by
      calling m(func) for some function &quot;func&quot; that rearranges some of the six nine-element arrays constituting the array &quot;x&quot; in the m-M(x) closure. This causes the automatic reassignment of classes in the DOM representation of the cube and the appearance in the browser that something has rotated. The functions used in the <a href="./cube7#yes">button section</a> are identical to the ones in the top, front, and right divs in the 54-div cube representation in the DOM.`,Wt,le,Un=`Pressing the &quot;F&quot; key, clicking the &quot;F&quot; button, or clicking the right upper or lower corners of the forward-facing side all cause the function &quot;m(F)&quot; to execute. When the orange front of a solved cube rotates 90 degrees clockwise, the right column of the green left side migrates to the lower row of the top. on a solved cube, the lower part of the top changes. Here&#39;s how this affects the m-M(x) closure and the upper right corner of the right side of the cube:<br/>



             x mutates to R(x) in the closure,`,Nt,j,Jn=`***********************************************************************
      <br/>
      Case 3 -- Key presses.`,Qt,ce,Wn=`Pressing keys invokes eventHandler(e) where "e" is the key-press event and
      eventHandler is defined as follows:`,Gt,Be,Zt,Kt,de,Nn=`"svelte:window on:keypress = { handleEvent } " routes keyPress
      event objects to handleEvent.`,Vt,he,Qn=`The <a href="./cube7">Rubik&#39;s Cube simulation</a> features a m-M(x)
      closure whose x values are always arrays of six nine-member arrays of the
      strings &quot;blue, green, red, orange, yellow, and white&quot;. Callbacks stemming
      from mouse clicks have the form &quot;m = m(Foo), where Foo is one of several
      functions that use the elements of x to construct and return new arrays of
      six nine-member arrays. The resulting transformation of x in the m-M(x)
      closure automatically transforms the cube displayed in the browser because
      x&#39;s elements (references to strings) are references to classes in the DOM.
      m(dF3x)[0] is always the first element of m(dF3x). In the solved cube,
      it&#39;s a nine-member array, each element of which is corresponds to a CSS
      class with the element &quot;background-color: blue&quot;. m(dF3x)[0][0] === &quot;blue&quot;
      returns &quot;true&quot;, as do m(dF3x)[0][v] for the other eight elements of
      m(dF3x)[0]. automatically responds because to arrays to and return create
      arrays of six nine-member arrays that &quot; are operated upon by m that
      respond only to DOM events, and whose side effects are felt only in the
      DOM rearrangements of six CSS classes on the 54 divs of the cube. Other
      than background colors, those classes are all identical. modifications of
      the DOM, encapsulate transformations of x in a manner reminiscent of
      Haskel monads. <a href="./cube7">Here</a>, you can click on an edge or
      corner of the upper cube and see it rotate. The JavaScript in the script
      section provides function definitions, and nothing more.`,Yt,A,Gn="***********************************************************************",$t,l,q,Zn="Biographical Background:",en,D,Kn=`Indiana University awarded me a bachelor of science degree in chemistry,
        a master's degree in mathematics, and a doctor of jurisprudence degree
        in law. Sun Microsysystems certified me as a Java Programmer and Java
        Website Developer, which qualified me for a job I took at Indiana
        University, working on a project as a Programmer/Systems Analyst. I got the certifications and entry-level position at I.U. because I believed my doctor when he told me he couldn't refer me to the liver transplant clinic in Indianapolis unless I got "good" insurance coverage, the kind provided by Indiana University to its employees. I didn't know about Indiana's high risk insurance program, which I could have afforded continuing to practice law. The cost was around $1000.00 per month. It was Indiana's way of guaranteeing health care for the middle class and less affluent people with benefactors willing to pay their premiums.`,tn,I,Vn="Back in the 1980s, I learned to contact online bulletin boards over the telephone. In 1995, I learned some JavaScript playing around with the amazing Netscape Navigator browser. Then I learned to use some web application frameworks for my law practice website. Programming fascinated me, and over the years I learned to write simple programs in numerous languages. My very first language was Fortran, which I learned in college while working on my bachelor's degree in chemistry.",nn,L,Yn='My son, Alexander, enjoyed a dice game called &quot;score&quot; that he learned in school, so I developed an online, multi-player version in the Haskell programming language. Users can modify the game and prompt it to display any and all possible solutions. I found a binary version I compiled with the Glasgow Haskell Compiler (GHC) in 2014. It runs online at http://schalk2:3055. There isn&#39;t a working secure version. https://score.schalk2.com loads the login screen, but goes no further than that. Here&#39;s a link: <a href="http://schalk2.com:3055" target="_blank">Game of score</a>. The code is at <a href="https://github.com/dschalk/score2">https://github.com/dschalk/score2</a>',on,B,$n=`I'll never again get involved in a Java project and I can't imagine ever
        again needing React. After developing an elaborate online multi-player
        game in the Haskel programming language, still using React for the user
        interface, I decided to stick with JavaScript and simple frameworks.
        This is a SvelteKit application.`,rn,X,eo=`While it makes sense to develop web applications with a few elaborate
        functions in conjunction with reusable small ones, I decided to try the
        opposite approach. What I discovered is worth sharing, to say the least,
        so here it is.`,sn,ue,to=`The code samples at the top of this page shows that function composition
        using M can&#39;t be more transparent, concise, and maintainable. Going
        beyond numerical computations, M holds the ever-changing state of play
        in the<a href="./score">Game of Score</a>. That application functions properly, but the code needs to be refactored and cleaned up. The simulated Rubik&#39;s cube is a simple m-M(x) closure where x is an array of six nine-member arrays of strings. A slightly modified version of M is introduced to facilitate reversing a series of moves.`,an,me,no=`A few additional lines of code in M can facilitate nesting of mixed
        synchronous and asynchronous functions handled by m, and can help avoid
        mutations by providing an array, let&#39;s call it &quot;ar&quot;, into which f(x)
        (which runds after m(f)) can be pushed, and having dF3x prompt the
        return of ar.slice(-1)[0] when f === dF3x. But enough of the small
        stuff, now it&#39;s time to show m-M(x) closures in all their glory, deftly
        making complex applications work while they do nothing but allow the
        function m to transform them by means of the functions m fetches. The <a href="./cube7">Simulated Rubik&#39;s cube</a> is a case in point.`,ln,ve,oo=`The array x in the m-M(x) Rubik's cube array is an array consisting of
        six nine-member arrays of references to the strings "blue, green, red,
        orange, yellow and white." Functions called in response to DOM key
        presses and mouse clicks rearrange these strings, which are the names of
        CSS classes whose "background-color" properties match the names of the
        selectors that contain them. For example, the CSS class "blue" contains
        the line, "background-color: "blue".`,cn,O,ro=`To understand the interface between the m-M(x) representation of the
        cube with the 54 colored divs in the DOM, we first need to know how x in
        the closure is defined. Here it is:`,dn,Xe,hn,un,pe,so=`m(dF3x)[0][0] on the solved cube representation in the DOM is a div with
        class = "blue". Here's blue's definition:`,mn,Oe,vn,pn,fe,ao=`Below is the cube representation in the DOM. Notice how the colors
        corresponds with the image in the monitor -- orange in front m(dF3x)[3],
        blue on the side m(dF3x)[0], and yellow on top (m(dF3x)[4]).`,fn,Ue,gn,bn,ge,io=`<a href="./cube7#cow8">This link</a> takes you to a demonstration driving
        home the point that the mere rearrangement of x in the m-M(x) closure, along
        with a self-reference of m to m, is sufficient to trigger reactivity in Svelte.
        It also shows that the only heavy lifting, such that it is, consists of rearranging
        references to strings. The 54 divs that constitute the DOM representation
        remain stationary.`,yn,be,lo=`When you press "r", click the "R" button, or click the upper leift
        corner of the right side of the cube representation, the function 'R' is
        called on the array of six arrays of references to strings in the m-M(x)
        closure. The current configuration of x in the closure is of no concern
        to 'R'. It rearranges the strings based solely on their positions -- 54
        positions, ranging from m(dF3x)[0][0] to m(dF3)[5][8].`,xn,ye,co=`The function "R" specifies that whatever string reference happens to be in position
        m(dF3x)[3][2] changes to whatever string reference happens to be in
        position m(dF3x)[5][2]. If the cube is in its starting configuration
        (solved, prior to scrambling), the upper right front corner will go from
        orange to white. Beyond that, we know nothing about the color of the
        front upper right corner before or after m(R) runs. The class will
        change to the whatever the class of the div in the front upper right
        corner (m(dF3x)(5)(2)) happens to be, but the background-color of that
        class might be whatever the background color of m(dF3x)(3)(2) happens to
        be. Here's the definition of R:`,wn,Je,Cn,kn,xe,ho=`When R returns temp, the transformation of x completes. It's new value
        is temp since x = Func(x) and Func is R in this instance.`,Ze,_,uo="Back to the top",Ke,we;const Fn=i[18].default,x=jo(Fn,i,i[17],null);return{c(){t=o("div"),k=o("h1"),k.textContent=We,U=s(),F=o("span"),F.innerHTML=Ne,Ce=s(),R=o("p"),R.innerHTML=Qe,J=s(),T=o("pre"),ke=v(i[0]),Fe=s(),H=o("pre"),Pe=v(i[1]),Me=s(),E=o("pre"),W=v(i[2]),qe=s(),P=o("dist"),P.textContent=Ge,N=s(),Re=o("pre"),Ye=v(i[7]),$e=s(),et=o("br"),tt=s(),f=o("div"),Q=o("span"),Q.textContent=Pn,nt=s(),Te=o("pre"),ot=v(i[8]),rt=s(),He=o("pre"),st=v(zo),at=s(),G=o("span"),G.textContent=Mn,it=s(),Ee=o("pre"),lt=v(i[9]),ct=s(),_e=o("pre"),dt=v(i[10]),ht=s(),ze=o("pre"),ut=v(i[11]),mt=s(),Se=o("pre"),vt=v(i[12]),pt=s(),z=o("span"),z.textContent=qn,ft=s(),y=o("span"),gt=v(`***********************************************************************
    `),bt=o("br"),yt=s(),Z=o("p"),Z.textContent=Rn,xt=s(),je=o("pre"),wt=v(i[5]),Ct=s(),K=o("p"),K.textContent=Tn,kt=v(`

    Case 1 -- Clicking on the three visible sides of the cube.`),Ft=s(),V=o("p"),V.textContent=Hn,Pt=s(),Ae=o("pre"),Mt=v(i[6]),qt=s(),Y=o("p"),Y.textContent=En,Rt=s(),De=o("pre"),Tt=v(i[14]),Ht=s(),$=o("p"),$.textContent=_n,Et=s(),Ie=o("pre"),_t=v(i[4]),zt=s(),ee=o("p"),ee.textContent=zn,St=s(),te=o("p"),te.textContent=Sn,jt=s(),M=o("img"),At=s(),ne=o("p"),ne.textContent=An,Dt=s(),oe=o("p"),oe.textContent=Dn,It=s(),re=o("p"),re.textContent=In,Lt=s(),se=o("p"),se.innerHTML=Ln,Bt=s(),Le=o("pre"),Xt=v(i[15]),Ot=s(),ae=o("p"),ae.textContent=Bn,Ut=s(),S=o("span"),S.innerHTML=Xn,Jt=s(),ie=o("p"),ie.innerHTML=On,Wt=s(),le=o("p"),le.innerHTML=Un,Nt=s(),j=o("span"),j.innerHTML=Jn,Qt=s(),ce=o("p"),ce.textContent=Wn,Gt=s(),Be=o("pre"),Zt=v(i[16]),Kt=s(),de=o("p"),de.textContent=Nn,Vt=s(),he=o("p"),he.innerHTML=Qn,Yt=s(),A=o("span"),A.textContent=Gn,$t=s(),l=o("div"),q=o("p"),q.textContent=Zn,en=s(),D=o("p"),D.textContent=Kn,tn=s(),I=o("p"),I.textContent=Vn,nn=s(),L=o("p"),L.innerHTML=Yn,on=s(),B=o("p"),B.textContent=$n,rn=s(),X=o("p"),X.textContent=eo,sn=s(),ue=o("p"),ue.innerHTML=to,an=s(),me=o("p"),me.innerHTML=no,ln=s(),ve=o("p"),ve.textContent=oo,cn=s(),O=o("p"),O.textContent=ro,dn=s(),Xe=o("pre"),hn=v(i[5]),un=s(),pe=o("p"),pe.textContent=so,mn=s(),Oe=o("pre"),vn=v(i[13]),pn=s(),fe=o("p"),fe.textContent=ao,fn=s(),Ue=o("pre"),gn=v(i[15]),bn=s(),ge=o("p"),ge.innerHTML=io,yn=s(),be=o("p"),be.textContent=lo,xn=s(),ye=o("p"),ye.textContent=co,wn=s(),Je=o("pre"),Cn=v(i[3]),kn=s(),xe=o("p"),xe.textContent=ho,Ze=s(),_=o("a"),_.textContent=uo,Ke=s(),x&&x.c(),this.h()},l(m){t=r(m,"DIV",{style:!0,id:!0});var n=u(t);k=r(n,"H1",{style:!0,"data-svelte-h":!0}),c(k)!=="svelte-mpxol8"&&(k.textContent=We),U=a(n),F=r(n,"SPAN",{class:!0,"data-svelte-h":!0}),c(F)!=="svelte-moxoaq"&&(F.innerHTML=Ne),Ce=a(n),R=r(n,"P",{"data-svelte-h":!0}),c(R)!=="svelte-1s39ydw"&&(R.innerHTML=Qe),J=a(n),T=r(n,"PRE",{class:!0});var mo=u(T);ke=p(mo,i[0]),mo.forEach(h),Fe=a(n),H=r(n,"PRE",{class:!0});var vo=u(H);Pe=p(vo,i[1]),vo.forEach(h),Me=a(n),E=r(n,"PRE",{class:!0});var po=u(E);W=p(po,i[2]),po.forEach(h),qe=a(n),P=r(n,"DIST",{class:!0,"data-svelte-h":!0}),c(P)!=="svelte-1mq2aot"&&(P.textContent=Ge),N=a(n),Re=r(n,"PRE",{});var fo=u(Re);Ye=p(fo,i[7]),fo.forEach(h),$e=a(n),et=r(n,"BR",{}),tt=a(n),f=r(n,"DIV",{class:!0});var b=u(f);Q=r(b,"SPAN",{"data-svelte-h":!0}),c(Q)!=="svelte-1xp33cu"&&(Q.textContent=Pn),nt=a(b),Te=r(b,"PRE",{});var go=u(Te);ot=p(go,i[8]),go.forEach(h),rt=a(b),He=r(b,"PRE",{});var bo=u(He);st=p(bo,zo),bo.forEach(h),at=a(b),G=r(b,"SPAN",{"data-svelte-h":!0}),c(G)!=="svelte-krlx4g"&&(G.textContent=Mn),it=a(b),Ee=r(b,"PRE",{});var yo=u(Ee);lt=p(yo,i[9]),yo.forEach(h),ct=a(b),_e=r(b,"PRE",{});var xo=u(_e);dt=p(xo,i[10]),xo.forEach(h),ht=a(b),ze=r(b,"PRE",{});var wo=u(ze);ut=p(wo,i[11]),wo.forEach(h),mt=a(b),Se=r(b,"PRE",{});var Co=u(Se);vt=p(Co,i[12]),Co.forEach(h),b.forEach(h),pt=a(n),z=r(n,"SPAN",{class:!0,"data-svelte-h":!0}),c(z)!=="svelte-1kemneu"&&(z.textContent=qn),ft=a(n),y=r(n,"SPAN",{class:!0});var C=u(y);gt=p(C,`***********************************************************************
    `),bt=r(C,"BR",{}),yt=a(C),Z=r(C,"P",{"data-svelte-h":!0}),c(Z)!=="svelte-88wzaf"&&(Z.textContent=Rn),xt=a(C),je=r(C,"PRE",{});var ko=u(je);wt=p(ko,i[5]),ko.forEach(h),Ct=a(C),K=r(C,"P",{"data-svelte-h":!0}),c(K)!=="svelte-v6dtpa"&&(K.textContent=Tn),kt=p(C,`

    Case 1 -- Clicking on the three visible sides of the cube.`),C.forEach(h),Ft=a(n),V=r(n,"P",{"data-svelte-h":!0}),c(V)!=="svelte-1ponxwm"&&(V.textContent=Hn),Pt=a(n),Ae=r(n,"PRE",{});var Fo=u(Ae);Mt=p(Fo,i[6]),Fo.forEach(h),qt=a(n),Y=r(n,"P",{"data-svelte-h":!0}),c(Y)!=="svelte-1bez429"&&(Y.textContent=En),Rt=a(n),De=r(n,"PRE",{});var Po=u(De);Tt=p(Po,i[14]),Po.forEach(h),Ht=a(n),$=r(n,"P",{"data-svelte-h":!0}),c($)!=="svelte-t7rbwi"&&($.textContent=_n),Et=a(n),Ie=r(n,"PRE",{});var Mo=u(Ie);_t=p(Mo,i[4]),Mo.forEach(h),zt=a(n),ee=r(n,"P",{"data-svelte-h":!0}),c(ee)!=="svelte-15cd0b5"&&(ee.textContent=zn),St=a(n),te=r(n,"P",{"data-svelte-h":!0}),c(te)!=="svelte-1ctcuyd"&&(te.textContent=Sn),jt=a(n),M=r(n,"IMG",{src:!0,alt:!0,style:!0,class:!0}),At=a(n),ne=r(n,"P",{"data-svelte-h":!0}),c(ne)!=="svelte-1i9u8gv"&&(ne.textContent=An),Dt=a(n),oe=r(n,"P",{"data-svelte-h":!0}),c(oe)!=="svelte-1snyp56"&&(oe.textContent=Dn),It=a(n),re=r(n,"P",{"data-svelte-h":!0}),c(re)!=="svelte-19celf"&&(re.textContent=In),Lt=a(n),se=r(n,"P",{"data-svelte-h":!0}),c(se)!=="svelte-8cvcfg"&&(se.innerHTML=Ln),Bt=a(n),Le=r(n,"PRE",{});var qo=u(Le);Xt=p(qo,i[15]),qo.forEach(h),Ot=a(n),ae=r(n,"P",{"data-svelte-h":!0}),c(ae)!=="svelte-ok96u4"&&(ae.textContent=Bn),Ut=a(n),S=r(n,"SPAN",{class:!0,"data-svelte-h":!0}),c(S)!=="svelte-1aqmcih"&&(S.innerHTML=Xn),Jt=a(n),ie=r(n,"P",{"data-svelte-h":!0}),c(ie)!=="svelte-1yd0h21"&&(ie.innerHTML=On),Wt=a(n),le=r(n,"P",{"data-svelte-h":!0}),c(le)!=="svelte-1khkki9"&&(le.innerHTML=Un),Nt=a(n),j=r(n,"SPAN",{class:!0,"data-svelte-h":!0}),c(j)!=="svelte-kozoi1"&&(j.innerHTML=Jn),Qt=a(n),ce=r(n,"P",{"data-svelte-h":!0}),c(ce)!=="svelte-115h0va"&&(ce.textContent=Wn),Gt=a(n),Be=r(n,"PRE",{});var Ro=u(Be);Zt=p(Ro,i[16]),Ro.forEach(h),Kt=a(n),de=r(n,"P",{"data-svelte-h":!0}),c(de)!=="svelte-16gky82"&&(de.textContent=Nn),Vt=a(n),he=r(n,"P",{"data-svelte-h":!0}),c(he)!=="svelte-zzj0dz"&&(he.innerHTML=Qn),Yt=a(n),A=r(n,"SPAN",{class:!0,"data-svelte-h":!0}),c(A)!=="svelte-p8qgwr"&&(A.textContent=Gn),$t=a(n),l=r(n,"DIV",{class:!0});var d=u(l);q=r(d,"P",{style:!0,"data-svelte-h":!0}),c(q)!=="svelte-1us81ah"&&(q.textContent=Zn),en=a(d),D=r(d,"P",{style:!0,"data-svelte-h":!0}),c(D)!=="svelte-19kfnrq"&&(D.textContent=Kn),tn=a(d),I=r(d,"P",{style:!0,"data-svelte-h":!0}),c(I)!=="svelte-1kc4x8w"&&(I.textContent=Vn),nn=a(d),L=r(d,"P",{style:!0,"data-svelte-h":!0}),c(L)!=="svelte-17nb89f"&&(L.innerHTML=Yn),on=a(d),B=r(d,"P",{style:!0,"data-svelte-h":!0}),c(B)!=="svelte-13i7vub"&&(B.textContent=$n),rn=a(d),X=r(d,"P",{style:!0,"data-svelte-h":!0}),c(X)!=="svelte-1n4pi73"&&(X.textContent=eo),sn=a(d),ue=r(d,"P",{"data-svelte-h":!0}),c(ue)!=="svelte-1tk55n4"&&(ue.innerHTML=to),an=a(d),me=r(d,"P",{"data-svelte-h":!0}),c(me)!=="svelte-2y9he2"&&(me.innerHTML=no),ln=a(d),ve=r(d,"P",{"data-svelte-h":!0}),c(ve)!=="svelte-14wboki"&&(ve.textContent=oo),cn=a(d),O=r(d,"P",{id:!0,"data-svelte-h":!0}),c(O)!=="svelte-1jc3qmd"&&(O.textContent=ro),dn=a(d),Xe=r(d,"PRE",{});var To=u(Xe);hn=p(To,i[5]),To.forEach(h),un=a(d),pe=r(d,"P",{"data-svelte-h":!0}),c(pe)!=="svelte-r2a6lm"&&(pe.textContent=so),mn=a(d),Oe=r(d,"PRE",{});var Ho=u(Oe);vn=p(Ho,i[13]),Ho.forEach(h),pn=a(d),fe=r(d,"P",{"data-svelte-h":!0}),c(fe)!=="svelte-1n05fgy"&&(fe.textContent=ao),fn=a(d),Ue=r(d,"PRE",{});var Eo=u(Ue);gn=p(Eo,i[15]),Eo.forEach(h),bn=a(d),ge=r(d,"P",{"data-svelte-h":!0}),c(ge)!=="svelte-10k2eny"&&(ge.innerHTML=io),yn=a(d),be=r(d,"P",{"data-svelte-h":!0}),c(be)!=="svelte-yp0kv4"&&(be.textContent=lo),xn=a(d),ye=r(d,"P",{"data-svelte-h":!0}),c(ye)!=="svelte-1ra0he2"&&(ye.textContent=co),wn=a(d),Je=r(d,"PRE",{});var _o=u(Je);Cn=p(_o,i[3]),_o.forEach(h),kn=a(d),xe=r(d,"P",{"data-svelte-h":!0}),c(xe)!=="svelte-1n96bqf"&&(xe.textContent=ho),d.forEach(h),n.forEach(h),Ze=a(m),_=r(m,"A",{href:!0,"data-svelte-h":!0}),c(_)!=="svelte-1887boa"&&(_.textContent=uo),Ke=a(m),x&&x.l(m),this.h()},h(){w(k,"text-align","center"),g(F,"class","light svelte-11ad9vo"),g(T,"class","dis svelte-11ad9vo"),g(H,"class","play svelte-11ad9vo"),g(E,"class","dis svelte-11ad9vo"),g(P,"class","light svelte-11ad9vo"),g(f,"class","light svelte-11ad9vo"),g(z,"class","teaser svelte-11ad9vo"),g(y,"class","teaser svelte-11ad9vo"),Ao(M.src,jn=Jo)||g(M,"src",jn),g(M,"alt","Image of the Rubik's cube "),w(M,"width","200px"),w(M,"height","210px"),g(M,"class","svelte-11ad9vo"),g(S,"class","teaser svelte-11ad9vo"),g(j,"class","teaser svelte-11ad9vo"),g(A,"class","teaser svelte-11ad9vo"),w(q,"color","lightgreen"),w(q,"font-size","28px"),w(q,"font-weight","bold "),w(D,"color","lightgreen"),w(I,"color","lightgreen"),w(L,"color","lightgreen"),w(B,"color","lightgreen"),w(X,"color","lightgreen"),g(O,"id","cow7"),g(l,"class","background"),w(t,"margin-left","8%"),w(t,"margin-right","8%"),g(t,"id","top"),g(_,"href","#top")},m(m,n){Ve(m,t,n),e(t,k),e(t,U),e(t,F),e(t,Ce),e(t,R),e(t,J),e(t,T),e(T,ke),e(t,Fe),e(t,H),e(H,Pe),e(t,Me),e(t,E),e(E,W),e(t,qe),e(t,P),e(t,N),e(t,Re),e(Re,Ye),e(t,$e),e(t,et),e(t,tt),e(t,f),e(f,Q),e(f,nt),e(f,Te),e(Te,ot),e(f,rt),e(f,He),e(He,st),e(f,at),e(f,G),e(f,it),e(f,Ee),e(Ee,lt),e(f,ct),e(f,_e),e(_e,dt),e(f,ht),e(f,ze),e(ze,ut),e(f,mt),e(f,Se),e(Se,vt),e(t,pt),e(t,z),e(t,ft),e(t,y),e(y,gt),e(y,bt),e(y,yt),e(y,Z),e(y,xt),e(y,je),e(je,wt),e(y,Ct),e(y,K),e(y,kt),e(t,Ft),e(t,V),e(t,Pt),e(t,Ae),e(Ae,Mt),e(t,qt),e(t,Y),e(t,Rt),e(t,De),e(De,Tt),e(t,Ht),e(t,$),e(t,Et),e(t,Ie),e(Ie,_t),e(t,zt),e(t,ee),e(t,St),e(t,te),e(t,jt),e(t,M),e(t,At),e(t,ne),e(t,Dt),e(t,oe),e(t,It),e(t,re),e(t,Lt),e(t,se),e(t,Bt),e(t,Le),e(Le,Xt),e(t,Ot),e(t,ae),e(t,Ut),e(t,S),e(t,Jt),e(t,ie),e(t,Wt),e(t,le),e(t,Nt),e(t,j),e(t,Qt),e(t,ce),e(t,Gt),e(t,Be),e(Be,Zt),e(t,Kt),e(t,de),e(t,Vt),e(t,he),e(t,Yt),e(t,A),e(t,$t),e(t,l),e(l,q),e(l,en),e(l,D),e(l,tn),e(l,I),e(l,nn),e(l,L),e(l,on),e(l,B),e(l,rn),e(l,X),e(l,sn),e(l,ue),e(l,an),e(l,me),e(l,ln),e(l,ve),e(l,cn),e(l,O),e(l,dn),e(l,Xe),e(Xe,hn),e(l,un),e(l,pe),e(l,mn),e(l,Oe),e(Oe,vn),e(l,pn),e(l,fe),e(l,fn),e(l,Ue),e(Ue,gn),e(l,bn),e(l,ge),e(l,yn),e(l,be),e(l,xn),e(l,ye),e(l,wn),e(l,Je),e(Je,Cn),e(l,kn),e(l,xe),Ve(m,Ze,n),Ve(m,_,n),Ve(m,Ke,n),x&&x.m(m,n),we=!0},p(m,n){x&&x.p&&(!we||n[0]&131072)&&Do(x,Fn,m,m[17],we?Lo(Fn,m[17],n,null):Io(m[17]),null)},i(m){we||(Oo(x,m),we=!0)},o(m){Uo(x,m),we=!1},d(m){m&&(h(t),h(Ze),h(_),h(Ke)),x&&x.d(m)}}}var zo="m(dF3x)  // 3";function No(i,t,k){let{$$slots:We={},$$scope:U}=t;var F=`    function M (x) {
      return function go (func)`,Ne=`      {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }`,Ce=`    }
    Where dF3x = () => {}; `,W=`  const R = function R(ar) {
    let temp = [];
    temp[0] = [
      ar[0][6],
      ar[0][3],
      ar[0][0],
      ar[0][7],
      ar[0][4],
      ar[0][1],
      ar[0][8],
      ar[0][5],
      ar[0][2],
    ];

    temp[1] = ar[1];

    temp[2] = [
      ar[4][8],
      ar[2][1],
      ar[2][2],
      ar[4][5],
      ar[2][4],
      ar[2][5],
      ar[4][2],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[5][2],
      ar[3][3],
      ar[3][4],
      ar[5][5],
      ar[3][6],
      ar[3][7],
      ar[5][8],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[3][2],
      ar[4][3],
      ar[4][4],
      ar[3][5],
      ar[4][6],
      ar[4][7],
      ar[3][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[2][6],
      ar[5][3],
      ar[5][4],
      ar[2][3],
      ar[5][6],
      ar[5][7],
      ar[2][0],
    ];
    return temp;
  }

`;let R=`  function F(ar) {
    let temp = [];
    temp[0] = [
      ar[4][6],
      ar[0][1],
      ar[0][2],
      ar[4][7],
      ar[0][4],
      ar[0][5],
      ar[4][8],
      ar[0][7],
      ar[0][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[5][0],
      ar[1][3],
      ar[1][4],
      ar[5][1],
      ar[1][6],
      ar[1][7],
      ar[5][2],
    ];

    temp[2] = ar[2];

    temp[3] = [
      ar[3][6],
      ar[3][3],
      ar[3][0],
      ar[3][7],
      ar[3][4],
      ar[3][1],
      ar[3][8],
      ar[3][5],
      ar[3][2],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[4][2],
      ar[4][3],
      ar[4][4],
      ar[4][5],
      ar[1][8],
      ar[1][5],
      ar[1][2],
    ];

    temp[5] = [
      ar[0][6],
      ar[0][3],
      ar[0][0],
      ar[5][3],
      ar[5][4],
      ar[5][5],
      ar[5][6],
      ar[5][7],
      ar[5][8],
    ];
    return temp;
  } `;var J=`const b0 = 'blue';
  const b1 = 'blue';
  const b2 = 'blue';
  const b3 = 'blue';
  const b4 = 'blue';
  const b5 = 'blue';
  const b6 = 'blue';
  const b7 = 'blue';
  const b8 = "blue";

  const g0 = 'green';
  const g1 = 'green';
  const g2 = 'green';
  const g3 = 'green';
  const g4 = 'green';
  const g5 = 'green';
  const g6 = 'green';
  const g7 = 'green';
  const g8 = "green";

  const r0 = 'red';
  const r1 = 'red';
  const r2 = 'red';
  const r3 = 'red';
  const r4 = 'red';
  const r5 = 'red';
  const r6 = 'red';
  const r7 = 'red';
  const r8 = "red";

  const o0 = 'orange';
  const o1 = 'orange';
  const o2 = 'orange';
  const o3 = 'orange';
  const o4 = 'orange';
  const o5 = 'orange';
  const o6 = 'orange';
  const o7 = 'orange';
  const o8 = "orange";

  const y0 = 'yellow';
  const y1 = 'yellow';
  const y2 = 'yellow';
  const y3 = 'yellow';
  const y4 = 'yellow';
  const y5 = 'yellow';
  const y6 = 'yellow';
  const y7 = 'yellow';
  const y8 = "yellow";

  const w0 = 'white';
  const w1 = 'white';
  const w2 = 'white';
  const w3 = 'white';
  const w4 = 'white';
  const w5 = 'white';
  const w6 = 'white';
  const w7 = 'white';
  const w8 = 'white';

  var bb = [b0, b1, b2, b3, b4, b5, b6, b7, b8];
  var gg = [g0, g1, g2, g3, g4, g5, g6, g7, g8];
  var rr = [r0, r1, r2, r3, r4, r5, r6, r7, r8];
  var oo = [o0, o1, o2, o3, o4, o5, o6, o7, o8];
  var yy = [y0, y1, y2, y3, y4, y5, y6, y7, y8];
  var ww = [w0, w1, w2, w3, w4, w5, w6, w7, w8];

  var m = M([bb, gg, rr, oo, yy, ww]);`;const Qe=`      <div class="face front">
        <div class="grid" >
          <div> <button class={m(dF3x)[3][0]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div> <button class={m(dF3x)[3][1]} on:click = {() => {m = m(Cx)}} /> </div> 
          <div> <button class={m(dF3x)[3][2]} on:click = {() => {m = m(F)}} /> </div>  
          <div> <button class={m(dF3x)[3][3]} on:click = {() => {m = m(Cy)}} /> </div> 
          <div> <button class={m(dF3x)[3][4]} on:click = {() => {m = m(Zro)}} /> </div>
          <div><button class={m(dF3x)[3][5]} on:click = {() => {m = m(Cyr)}} /> </div> 
          <div><button class={m(dF3x)[3][6]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div><button class={m(dF3x)[3][7]} on:click = {() => {m = m(Cxr)}} /> </div> 
          <div><button class={m(dF3x)[3][8]} on:click = {() => {m = m(F)}} /> </div> 
        </div>
      </div>`;var J=`const b0 = 'blue';
  const b1 = 'blue';
  const b2 = 'blue';
  const b3 = 'blue';
  const b4 = 'blue';
  const b5 = 'blue';
  const b6 = 'blue';
  const b7 = 'blue';
  const b8 = "blue";

  const g0 = 'green';
  const g1 = 'green';
  const g2 = 'green';
  const g3 = 'green';
  const g4 = 'green';
  const g5 = 'green';
  const g6 = 'green';
  const g7 = 'green';
  const g8 = "green";

  const r0 = 'red';
  const r1 = 'red';
  const r2 = 'red';
  const r3 = 'red';
  const r4 = 'red';
  const r5 = 'red';
  const r6 = 'red';
  const r7 = 'red';
  const r8 = "red";

  const o0 = 'orange';
  const o1 = 'orange';
  const o2 = 'orange';
  const o3 = 'orange';
  const o4 = 'orange';
  const o5 = 'orange';
  const o6 = 'orange';
  const o7 = 'orange';
  const o8 = "orange";

  const y0 = 'yellow';
  const y1 = 'yellow';
  const y2 = 'yellow';
  const y3 = 'yellow';
  const y4 = 'yellow';
  const y5 = 'yellow';
  const y6 = 'yellow';
  const y7 = 'yellow';
  const y8 = "yellow";

  const w0 = 'white';
  const w1 = 'white';
  const w2 = 'white';
  const w3 = 'white';
  const w4 = 'white';
  const w5 = 'white';
  const w6 = 'white';
  const w7 = 'white';
  const w8 = 'white';

  var bb = [b0, b1, b2, b3, b4, b5, b6, b7, b8];
  var gg = [g0, g1, g2, g3, g4, g5, g6, g7, g8];
  var rr = [r0, r1, r2, r3, r4, r5, r6, r7, r8];
  var oo = [o0, o1, o2, o3, o4, o5, o6, o7, o8];
  var yy = [y0, y1, y2, y3, y4, y5, y6, y7, y8];
  var ww = [w0, w1, w2, w3, w4, w5, w6, w7, w8];

  var m = M([bb, gg, rr, oo, yy, ww]);`,T="M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10",ke="m = M(3)",Fe="m(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)",H="m(dF3x)  // 10",Pe="m(v=>v+4)(v=>v*3)  // Now x in the m-M(x) closure is 42",Me="m(dF3x) // 42",E=`      .blue {
          height: 60px;
          width: 60px;
          background-color: lightblue;
          display: inline;
          border-radius: 10px;
      }`,W=` function R(ar) {
    let temp = [];
    temp[0] = [
      ar[0][6],
      ar[0][3],
      ar[0][0],
      ar[0][7],
      ar[0][4],
      ar[0][1],
      ar[0][8],
      ar[0][5],
      ar[0][2],
    ];

    temp[1] = ar[1];

    temp[2] = [
      ar[4][8],
      ar[2][1],
      ar[2][2],
      ar[4][5],
      ar[2][4],
      ar[2][5],
      ar[4][2],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[5][2],
      ar[3][3],
      ar[3][4],
      ar[5][5],
      ar[3][6],
      ar[3][7],
      ar[5][8],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[3][2],
      ar[4][3],
      ar[4][4],
      ar[3][5],
      ar[4][6],
      ar[4][7],
      ar[3][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[2][6],
      ar[5][3],
      ar[5][4],
      ar[2][3],
      ar[5][6],
      ar[5][7],
      ar[2][0],
    ];
    return temp;
  }`,qe=`.blue {
    height: 60px;
    width: 60px;
    background-color: lightblue;
    display: inline;
    border-radius: 10px;
  }
  .green {
    height: 60px;
    width: 60px;
    background-color: lightgreen;
    display: inline;
    border-radius: 10px;
  }
  .red {
    height: 60px;
    width: 60px;
    background-color: rgb(252, 97, 97);
    border-radius: 10px;
  }
  .orange {
    height: 60px;
    width: 60px;
    background-color: orange;
    border-radius: 10px;
  }
  .yellow {
    height: 60px;
    width: 60px;
    background-color: yellow;
    display: inline;
    border-radius: 10px;
  }
  .white { 
    height: 60px;
    width: 60px;
    background-color: white;
    border-radius: 10px;
  }`,P=`<div id="steady">
  <div class="container">
    <div class={cu}>
      <div class="face front">
        <div class="grid" >
          <div> <button class={m(dF3x)[3][0]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div> <button class={m(dF3x)[3][1]} on:click = {() => {m = m(Cx)}} /> </div> 
          <div> <button class={m(dF3x)[3][2]} on:click = {() => {m = m(F)}} /> </div>  
          <div> <button class={m(dF3x)[3][3]} on:click = {() => {m = m(Cy)}} /> </div> 
          <div> <button class={m(dF3x)[3][4]} on:click = {() => {m = m(Zro)}} /> </div>
          <div><button class={m(dF3x)[3][5]} on:click = {() => {m = m(Cyr)}} /> </div> 
          <div><button class={m(dF3x)[3][6]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div><button class={m(dF3x)[3][7]} on:click = {() => {m = m(Cxr)}} /> </div> 
          <div><button class={m(dF3x)[3][8]} on:click = {() => {m = m(F)}} /> </div> 
        </div>
      </div>

      <div class="face back">
        <div class="grid">
          <div class={m(dF3x)[2][8]} />
          <div class={m(dF3x)[2][7]} />
          <div class={m(dF3x)[2][6]} />
          <div class={m(dF3x)[2][5]} />
          <div class={m(dF3x)[2][4]} />
          <div class={m(dF3x)[2][3]} />
          <div class={m(dF3x)[2][2]} />
          <div class={m(dF3x)[2][1]} />
          <div class={m(dF3x)[2][0]} />
        </div>
      </div>

      <div class="face right">
        <div class="grid">
         <div><button class={m(dF3x)[0][0]} on:click = {() => {m = m(Rz)}} /> </div> 
          <div><button class={m(dF3x)[0][1]} on:click = {() => {m = m(Cz)}} /> </div> 
         <div><button class={m(dF3x)[0][2]} on:click = {() => {m = m(R)}} /> </div> 
          <div><button class={m(dF3x)[0][3]} on:click = {() => {m = m(Cy)}} /> </div> 
          <div> <button class={m(dF3x)[0][4]} on:click = {() => {m = m(Xro)}} /> </div>
          <div><button class={m(dF3x)[0][5]} on:click = {() => {m = m(Cyr)}} /> </div> 
          <div><button class={m(dF3x)[0][6]} on:click = {() => {m = m(Rz)}} /> </div> 
          <div><button class={m(dF3x)[0][7]} on:click = {() => {m = m(Czr)}} /> </div> 
          <div><button class={m(dF3x)[0][8]} on:click = {() => {m = m(R)}} /> </div> 
        </div>
      </div>

      <div class="face left">
        <div class="grid">
          <div class={m(dF3x)[1][0]} />
          <div class={m(dF3x)[1][1]} />
          <div class={m(dF3x)[1][2]} />
          <div class={m(dF3x)[1][3]} />
          <div class={m(dF3x)[1][4]} />
          <div class={m(dF3x)[1][5]} />
          <div class={m(dF3x)[1][6]} />
          <div class={m(dF3x)[1][7]} />
          <div class={m(dF3x)[1][8]} />
        </div>
      </div>

      <div class="face top">
        <div class="grid">
          <div><button class={m(dF3x)[4][0]} on:click = {() => {m = m(Uz)}} /> </div> 
          <div><button class={m(dF3x)[4][1]} on:click = {() => {m = m(Cx)}} /> </div> 
          <div><button class={m(dF3x)[4][2]} on:click = {() => {m = m(U)}} /> </div> 
          <div><button class={m(dF3x)[4][3]} on:click = {() => {m = m(Cz)}} /> </div> 
          <div> <button class={m(dF3x)[4][4]} on:click = {() => {m = m(Yro)}} /> </div>
          <div><button class={m(dF3x)[4][5]} on:click = {() => {m = m(Czr)}} /> </div> 
          <div><button class={m(dF3x)[4][6]} on:click = {() => {m = m(Uz)}} /> </div> 
          <div><button class={m(dF3x)[4][7]} on:click = {() => {m = m(Cxr)}} /> </div> 
          <div><button class={m(dF3x)[4][8]} on:click = {() => {m = m(U)}} /> </div> 
        </div>
      </div>

      <div class="face bottom">
        <div class="grid">
          <div class={m(dF3x)[5][0]} />
          <div class={m(dF3x)[5][1]} />
          <div class={m(dF3x)[5][2]} />
          <div class={m(dF3x)[5][3]} />
          <div class={m(dF3x)[5][4]} />
          <div class={m(dF3x)[5][5]} />
          <div class={m(dF3x)[5][6]} />
          <div class={m(dF3x)[5][7]} />
          <div class={m(dF3x)[5][8]} />
        </div>
      </div>
    </div>
  </div>
</div>`,Ge=`function handleEvent(e) { 
    console.log(e.keyCode);
         if (e.keyCode === 85)  m(Uz);
    else if (e.keyCode === 117) m(U);
    else if (e.keyCode === 68)  m(Dz);
    else if (e.keyCode === 100) m(D);
    else if (e.keyCode === 82)  m(Rz);
    else if (e.keyCode === 114) m(R);
    else if (e.keyCode === 76)  m(Lz);
    else if (e.keyCode === 108) m(L);
    else if (e.keyCode === 70)  m(Fz);
    else if (e.keyCode === 102) m(F);
    else if (e.keyCode === 66)  m(Bz);
    else if (e.keyCode === 98)  m(B);
    else if (e.keyCode === 77)  m(Cxr);
    else if (e.keyCode === 109) m(Cx);
    else if (e.keyCode === 69)  m(Cyr);
    else if (e.keyCode === 101) m(Cy);
    else if (e.keyCode === 83)  m(Czr);
    else if (e.keyCode === 115) m(Cz);
    else if (e.keyCode === 120) m(Xro);
    else if (e.keyCode === 88)  m(Xror);  
    else if (e.keyCode === 121) m(Yro);
    else if (e.keyCode === 89)  m(Yror);
    else if (e.keyCode === 122) m(Zro);
    else if (e.keyCode === 90)  m(Zror);
    else if (e.keyCode === 119) shu();
    else if (e.keyCode === 118) Start();
    else if (e.keyCode === 113) reverse();
    else if (e.keyCode === 105) previous();
    else if (e.keyCode === 73) getSaved();
    else if (e.keyCode === 111) save();
    // else if (e.keyCode === 116) rotate(); 
    m = m;  // In Svelte, this updates the DOM
  }`;return i.$$set=N=>{"$$scope"in N&&k(17,U=N.$$scope)},[F,Ne,Ce,W,R,J,Qe,T,ke,Fe,H,Pe,Me,E,qe,P,Ge,U,We]}class Zo extends Bo{constructor(t){super(),Xo(this,t,No,Wo,So,{},null,[-1,-1])}}export{Zo as component};
