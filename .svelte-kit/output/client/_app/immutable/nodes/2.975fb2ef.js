import{s as fs,c as ps,f as ms,u as gs,g as bs,d as xs}from"../chunks/scheduler.41143b43.js";import{S as ys,i as ws,g as o,s as r,m as u,h as s,j as v,x as c,c as a,n as m,f as h,l as x,k as p,a as lt,y as e,d as Cs,t as ks}from"../chunks/index.a9e5b95b.js";const Fs="data:image/png;base64,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",Ps=""+new URL("../assets/CubeshotR.cd72fc2c.png",import.meta.url).href;function Ms(d){let t,k,nt="Recursive Closures",G,F,ot=`<h3 class="svelte-11ad9vo">Why &quot;recursive&quot;</h3>
    Closures defined by letting m = M(x) (M is defined below) for some variable &quot;m&quot; and any value &quot;x&quot;
    (see below) are recursive in the sense that: <br/>
    (A) the inner function, named &quot;go&quot;, repeatedly calls itself, and <br/>
    (B) go repeatedly modifies &quot;x&quot; by means of varying functions &quot;func&quot; which are:<br/>
        (1) currently queued in front of the copy of go named &quot;m&quot;,
    <br/>
        (2) provided later if the current value of &quot;x&quot; is still alive
    in memory; i.e., if the program in which &quot;m&quot; is defined is still running, or the current value of x is retrieved from permanent storage.`,He,T,st="Regarding the value of x (m(dF3x)) retrieved from storage: If m is already defined, you could run <span>`m(()=&gt;x)(newFunc1)(newFunc2)</span> . Defining m with &quot;m = M(x)&quot; is another option.",Q,_,Ee,ze,H,Ae,Se,E,je,De,P,rt="Anonymous Closures Performs Anonymous Computations:",Ie,z,ct,dt,W,Wn='Composing function this way is elegant, transparent, and efficient. Scrambling the Rubik&#39;s cube involves calling a random sequence of 40 functions that rotate faces and middle sections of the Simulated Rubik&#39;s cube. Running this application on localhost:5173, my desktop computer can scramble the cube 1,000 times in less than 300 milliseconds. <a href="./cube7#test">Try it here</a>',ht,Z,Zn="The statement resolves to 10. No variable points to the transient closure, which is transient because it is not assigned to a variable and is, therefore, ripe for removal by the garbage collector immediately upon resolution to 10.",ut,K,Kn="M(3) at the beginning of the above computation returns go. The function go operates on v=>v**3, v=>v*4, v=>v-8, Math.sqrt, and dF3x. Then, being unreachable by any variable assignment, disappears from memory whenever the garbage collector gets around to removing it.",mt,vt,ft,V,Vn="",pt,g,Y,Yn="Encapsulated State:",gt,Le,bt,xt,Be,yt,wt,$,$n="Sometime later (the garbage collector ignores closures):",Ct,Ue,kt,Ft,Xe,Pt,Mt,Oe,qt,Rt,Je,Tt,_t,S,eo="Rubik's Cube Simulation",Ht,y,Et,zt,At,ee,to="In the Rubik's cube application, the m-M(x) closure is defined as follows:",St,Ne,jt,Dt,te,no="The visual representation in the browser is constructed so that bb, gg, rr, oo, yy, and ww correspond to its right, left, back, front, top, and bottom faces respectively. The fact that x[3] represents the front face of the cube is especially relevant in the discussion that follows.",It,Lt,ne,oo=`The value held in the m-M(x) closure in the Rubik's cube application, "x", is always an array of six nine-member
    references to the strings "blue, green, red, orange, yellow, and white." The nine front-facing squares seen in the browser are all colored according to the nine strings referenced in xk[3]. In the starting cube, also known as the "solved cube," x[3] is the array "oo", the array of all nine references to "orange." Here's the first of the six parts of the 54 div representation of the Rubik's cube in the DOM:`,Bt,Ge,Ut,Xt,oe,so="Here are the definitions of the classes that get reassigned to divs during the course of manipulating it with key presses and mouse clicks:",Ot,Qe,Jt,Nt,se,ro='The third button down from the top and the final button of the front face (see above) contain the statement "m = m(F)". These correspond to the upper right and lower right corners of the cube representation in the browser. Clicking the upper right or lower right corners of the cube, therefore, mutates x in the m=M(x) closure into the value returned by F(x), which is named "temp".',Gt,We,Qt,Wt,re,ao='Pressing the "F" key and clicking on the "F" button are other ways of rotating the front face clockwise 90 degrees. All three methods rely on the statement, "m = m(F)". The "m =" part of the statement m = m(F) triggers reactivity in this Sveltekit application, giving users almost instantaneous feedback from their key presses and mouse clicks.',Zt,ae,io=`Examining the function "F", we see that the front face of the cube, temp[3], remains solid orange after class reassignments create the illusion that the front face rotated. Evidence of rotation can be seen on the top (temp[4]) and on the right (temp[0]) sides of the cube. Here's what the cube looks like in the browser after running "m = m(F)" on the solved cube:`,Kt,M,lo,Vt,ie,co='The changes to the top face, with three classes reassigned from x[1] (previously all green), and the changes to the right face, three classes reassigned from x[4] (previously all yellow), demonstrate the correspondence between the function "F" and the visual representation in the browser. And, of course, the observed changes are what you get when you turn the front face of your own solved cube, assuming you have one.',Yt,le,ho='Clicking the center of each face rearranges x in the m-M(x) closure, thereby automatically rearranging some of the class assignments of the 54 dives in the DOM. In the browser, this creates the appearance of 90 degree clockwise rotation of the entire cube around the axes perpendicular to the clicked centers. Pressing the x, y, and z Keys has the same effects. Holding down SHIFT while pressing these keys creates the appearance of counterclockwise rotation. There are also buttons for clockwise rotations, and "back" buttons for counterclockwise rotation.',$t,ce,uo=`The 54 divs that combine to represent the cube in the DOM are shown below.
    The visual representation that appears in the browser is on the next page, <a href="./cube7">Rubik&#39;s cube</a>`,en,Ze,tn,nn,de,mo=`If you click on the top center of a solved cube three times, the green side will face you.
    Clicking the upper right corner and then clicking the top center again to restore the cube to its previous orientation confirms that you have rotated the left side clockwise by by 90 degrees.`,on,j,vo=`***********************************************************************
      <br/>
      Case 2 -- Clicking on the buttons.`,sn,he,fo=`Similar to clicking on parts of the cube, the callback specified in
      buttons that rotate faces, middle sections, and the entire cube do so by
      calling m(func) for for the same functions &quot;func&quot; involved in clicking on parts of the simulated Rubik&#39;s cube.  Each function &quot;func&quot; rearranges some of the six nine-element arrays constituting the array &quot;x&quot; in the m-M(x) closure. This causes the automatic reassignment of classes in the DOM representation of the cube and the illusion in the browser that the cube or some part of it has rotated. You can try out the buttons in the <a href="./cube7#yes">button section</a> of the Rubik&#39;s cube page.`,rn,ue,po='Pressing the "F" key, clicking the "F" button, or clicking the right upper or lower corners of the forward-facing side all cause the function "m(F)" to execute. When the orange front of a solved cube rotates 90 degrees clockwise, the right column of the green left side migrates to the lower row of the top and the lowest row of the yellow top to move into the left column of the right side of the cube.',an,D,go=`***********************************************************************
      <br/>
      Case 3 -- Key presses.`,ln,me,bo=`Pressing keys invokes eventHandler(e) where "e" is the key-press event object and
      eventHandler is defined as follows:`,cn,Ke,dn,hn,ve,xo=`"svelte:window on:keypress = { handleEvent } " routes keyPress
      event objects to handleEvent.`,un,fe,yo=`The <a href="./cube7">Rubik&#39;s Cube simulation</a> features an m-M(x)
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
      section provides function definitions, and nothing more.`,mn,I,wo="***********************************************************************",vn,i,q,Co="Biographical Background:",fn,L,ko=`Indiana University awarded me a bachelor of science degree in chemistry,
        a master's degree in mathematics, and a doctor of jurisprudence degree
        in law. Sun Microsysystems certified me as a Java Programmer and Java
        Website Developer, which qualified me for a job I took at Indiana
        University, working on a project as a Programmer/Systems Analyst. I got the certifications and entry-level position at I.U. because I believed my doctor when he told me he couldn't refer me to the liver transplant clinic in Indianapolis unless I got "good" insurance coverage, the kind provided by Indiana University to its employees. I didn't know about Indiana's high risk insurance program, which I could have afforded continuing to practice law. The cost was around $1000.00 per month. It was Indiana's way of guaranteeing health care for the middle class and less affluent people with benefactors willing to pay their premiums.`,pn,B,Fo="Back in the 1980s, I learned to contact online bulletin boards over the telephone. In 1995, I learned some JavaScript playing around with the amazing Netscape Navigator browser. Then I learned to use some web application frameworks for my law practice website. Programming fascinated me, and over the years I learned to write simple programs in numerous languages. My very first language was Fortran, which I learned in college while working on my bachelor's degree in chemistry.",gn,U,Po='My son, Alexander, enjoyed a dice game called &quot;score&quot; that he learned in school, so I developed an online, multi-player version in the Haskell programming language. Users can modify the game and prompt it to display any and all possible solutions. I found a binary version I compiled with the Glasgow Haskell Compiler (GHC) in 2014. It runs online at http://schalk2:3055. There isn&#39;t a working secure version. https://score.schalk2.com loads the login screen, but goes no further than that. Here&#39;s a link: <a href="http://schalk2.com:3055" target="_blank">Game of score</a>. The code is at <a href="https://github.com/dschalk/score2">https://github.com/dschalk/score2</a>',bn,X,Mo=`I'll never again get involved in a Java project and I can't imagine ever
        again needing React. After developing an elaborate online multi-player
        game in the Haskel programming language, still using React for the user
        interface, I decided to stick with JavaScript and simple frameworks.
        This is a SvelteKit application.`,xn,O,qo=`While it makes sense to develop web applications with a few elaborate
        functions in conjunction with reusable small ones, I decided to try the
        opposite approach. What I discovered is worth sharing, to say the least,
        so here it is.`,yn,pe,Ro=`The code samples at the top of this page shows that function composition
        using M can&#39;t be more transparent, concise, and maintainable. Going
        beyond numerical computations, M holds the ever-changing state of play
        in the<a href="./score">Game of Score</a>. That application functions properly, but the code needs to be refactored and cleaned up. The simulated Rubik&#39;s cube is a simple m-M(x) closure where x is an array of six nine-member arrays of strings. A slightly modified version of M is introduced to facilitate reversing a series of moves.`,wn,ge,To=`A few additional lines of code in M can facilitate nesting of mixed
        synchronous and asynchronous functions handled by m, and can help avoid
        mutations by providing an array, let&#39;s call it &quot;ar&quot;, into which f(x)
        (which runds after m(f)) can be pushed, and having dF3x prompt the
        return of ar.slice(-1)[0] when f === dF3x. But enough of the small
        stuff, now it&#39;s time to show m-M(x) closures in all their glory, deftly
        making complex applications work while they do nothing but allow the
        function m to transform them by means of the functions m fetches. The <a href="./cube7">Simulated Rubik&#39;s cube</a> is a case in point.`,Cn,be,_o=`The array x in the m-M(x) Rubik's cube array is an array consisting of
        six nine-member arrays of references to the strings "blue, green, red,
        orange, yellow and white." Functions called in response to DOM key
        presses and mouse clicks rearrange these strings, which are the names of
        CSS classes whose "background-color" properties match the names of the
        selectors that contain them. For example, the CSS class "blue" contains
        the line, "background-color: "blue".`,kn,J,Ho=`To understand the interface between the m-M(x) representation of the
        cube with the 54 colored divs in the DOM, we first need to know how x in
        the closure is defined. Here it is:`,Fn,Ve,Pn,Mn,xe,Eo=`m(dF3x)[0][0] on the solved cube representation in the DOM is a div with
        class = "blue". Here's blue's definition:`,qn,Ye,Rn,Tn,ye,zo=`Below is the cube representation in the DOM. Notice how the colors
        corresponds with the image in the monitor -- orange in front m(dF3x)[3],
        blue on the side m(dF3x)[0], and yellow on top (m(dF3x)[4]).`,_n,$e,Hn,En,we,Ao=`<a href="./cube7#cow8">This link</a> takes you to a demonstration driving
        home the point that the mere rearrangement of x in the m-M(x) closure, along
        with a self-reference of m to m, is sufficient to trigger reactivity in Svelte.
        It also shows that the only heavy lifting, such that it is, consists of rearranging
        references to strings. The 54 divs that constitute the DOM representation
        remain stationary; only their class assignments change.`,zn,Ce,So=`When you press "R", click the "R" button, or click the upper right or lower right
        corner of the right side of the cube representation, m = m(R) executes. This runs R on x and by the definition of M, x mutates to R(x) = temp as defined in the function R.`,An,et,Sn,jn,ke,jo="The current configuration of x in the closure is of no concern to R. R rearranges the strings based solely on their locations in whatever the configuration of x happens to be.",Dn,Fe,Do=`For example, the third line down in temp[3] in the function "R" specifies that whatever string reference happens to be in position m(dF3x)[3][2] changes to whatever string reference happens to be in
        position m(dF3x)[5][2]. If the cube is in its starting configuration
        (solved, prior to scrambling), the upper right front corner will go from
        orange to white, as shown below.`,In,R,Io,Ln,Pe,Lo="Handling Intermittant Promises",Bn,tt,Un,Xn,N,Bo="Async",On,Me,Uo="m(addP(3)) (squareP) (v => v - 7) (dF3x).then(v => (D = v)) = 42",Jn,qe,Xo="m(v => v / 42) (multP(6)) (v=>v * 7) (dF3x).then(v => (A = v)) = 42",Nn,Re,Oo="m(addP(7)) (Math.sqrt) (v => v * 6) (dF3x).then(a => (C = a)) = 42",Gn,Te,Jo="m(divP(14)) (v => v**3) (addP(5)) (dF3x).then(v => (D = v)) = 42",at,A,No="Back to the top",it,_e;const Qn=d[19].default,w=ps(Qn,d,d[18],null);return{c(){t=o("div"),k=o("h1"),k.textContent=nt,G=r(),F=o("span"),F.innerHTML=ot,He=r(),T=o("p"),T.innerHTML=st,Q=r(),_=o("pre"),Ee=u(d[0]),ze=r(),H=o("pre"),Ae=u(d[1]),Se=r(),E=o("pre"),je=u(d[2]),De=r(),P=o("div"),P.textContent=rt,Ie=r(),z=o("pre"),ct=u(d[6]),dt=r(),W=o("p"),W.innerHTML=Wn,ht=r(),Z=o("p"),Z.textContent=Zn,ut=r(),K=o("p"),K.textContent=Kn,mt=r(),vt=o("br"),ft=r(),V=o("p"),V.innerHTML=Vn,pt=r(),g=o("div"),Y=o("span"),Y.textContent=Yn,gt=r(),Le=o("pre"),bt=u(d[7]),xt=r(),Be=o("pre"),yt=u(vs),wt=r(),$=o("span"),$.textContent=$n,Ct=r(),Ue=o("pre"),kt=u(d[8]),Ft=r(),Xe=o("pre"),Pt=u(d[9]),Mt=r(),Oe=o("pre"),qt=u(d[10]),Rt=r(),Je=o("pre"),Tt=u(d[11]),_t=r(),S=o("span"),S.textContent=eo,Ht=r(),y=o("span"),Et=u(`***********************************************************************
    `),zt=o("br"),At=r(),ee=o("p"),ee.textContent=to,St=r(),Ne=o("pre"),jt=u(d[4]),Dt=r(),te=o("p"),te.textContent=no,It=u(`

    Case 1 -- Clicking on the three visible sides of the cube.`),Lt=r(),ne=o("p"),ne.textContent=oo,Bt=r(),Ge=o("pre"),Ut=u(d[5]),Xt=r(),oe=o("p"),oe.textContent=so,Ot=r(),Qe=o("pre"),Jt=u(d[14]),Nt=r(),se=o("p"),se.textContent=ro,Gt=r(),We=o("pre"),Qt=u(d[3]),Wt=r(),re=o("p"),re.textContent=ao,Zt=r(),ae=o("p"),ae.textContent=io,Kt=r(),M=o("img"),Vt=r(),ie=o("p"),ie.textContent=co,Yt=r(),le=o("p"),le.textContent=ho,$t=r(),ce=o("p"),ce.innerHTML=uo,en=r(),Ze=o("pre"),tn=u(d[15]),nn=r(),de=o("p"),de.textContent=mo,on=r(),j=o("span"),j.innerHTML=vo,sn=r(),he=o("p"),he.innerHTML=fo,rn=r(),ue=o("p"),ue.textContent=po,an=r(),D=o("span"),D.innerHTML=go,ln=r(),me=o("p"),me.textContent=bo,cn=r(),Ke=o("pre"),dn=u(d[16]),hn=r(),ve=o("p"),ve.textContent=xo,un=r(),fe=o("p"),fe.innerHTML=yo,mn=r(),I=o("span"),I.textContent=wo,vn=r(),i=o("div"),q=o("p"),q.textContent=Co,fn=r(),L=o("p"),L.textContent=ko,pn=r(),B=o("p"),B.textContent=Fo,gn=r(),U=o("p"),U.innerHTML=Po,bn=r(),X=o("p"),X.textContent=Mo,xn=r(),O=o("p"),O.textContent=qo,yn=r(),pe=o("p"),pe.innerHTML=Ro,wn=r(),ge=o("p"),ge.innerHTML=To,Cn=r(),be=o("p"),be.textContent=_o,kn=r(),J=o("p"),J.textContent=Ho,Fn=r(),Ve=o("pre"),Pn=u(d[4]),Mn=r(),xe=o("p"),xe.textContent=Eo,qn=r(),Ye=o("pre"),Rn=u(d[12]),Tn=r(),ye=o("p"),ye.textContent=zo,_n=r(),$e=o("pre"),Hn=u(d[15]),En=r(),we=o("p"),we.innerHTML=Ao,zn=r(),Ce=o("p"),Ce.textContent=So,An=r(),et=o("pre"),Sn=u(d[13]),jn=r(),ke=o("p"),ke.textContent=jo,Dn=r(),Fe=o("p"),Fe.textContent=Do,In=r(),R=o("img"),Ln=r(),Pe=o("h2"),Pe.textContent=Lo,Bn=u(`

      This slightly modified version of M can handle both ordinary data and promises:
      
        `),tt=o("pre"),Un=u(d[17]),Xn=u(`

      A real time demonstration of m(dF3x) delivering promises, one by one, along with definitions of the asynchronous functions used, can be found here: `),N=o("a"),N.textContent=Bo,On=u(` These are the composite 
funtions used in the demonstration:
    `),Me=o("p"),Me.textContent=Uo,Jn=r(),qe=o("p"),qe.textContent=Xo,Nn=r(),Re=o("p"),Re.textContent=Oo,Gn=r(),Te=o("p"),Te.textContent=Jo,at=r(),A=o("a"),A.textContent=No,it=r(),w&&w.c(),this.h()},l(f){t=s(f,"DIV",{style:!0,id:!0});var n=v(t);k=s(n,"H1",{style:!0,"data-svelte-h":!0}),c(k)!=="svelte-mpxol8"&&(k.textContent=nt),G=a(n),F=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),c(F)!=="svelte-moxoaq"&&(F.innerHTML=ot),He=a(n),T=s(n,"P",{"data-svelte-h":!0}),c(T)!=="svelte-1s39ydw"&&(T.innerHTML=st),Q=a(n),_=s(n,"PRE",{class:!0});var Go=v(_);Ee=m(Go,d[0]),Go.forEach(h),ze=a(n),H=s(n,"PRE",{class:!0});var Qo=v(H);Ae=m(Qo,d[1]),Qo.forEach(h),Se=a(n),E=s(n,"PRE",{class:!0});var Wo=v(E);je=m(Wo,d[2]),Wo.forEach(h),De=a(n),P=s(n,"DIV",{class:!0,"data-svelte-h":!0}),c(P)!=="svelte-19agv3x"&&(P.textContent=rt),Ie=a(n),z=s(n,"PRE",{});var Zo=v(z);ct=m(Zo,d[6]),Zo.forEach(h),dt=a(n),W=s(n,"P",{"data-svelte-h":!0}),c(W)!=="svelte-bb71i5"&&(W.innerHTML=Wn),ht=a(n),Z=s(n,"P",{"data-svelte-h":!0}),c(Z)!=="svelte-192x6hp"&&(Z.textContent=Zn),ut=a(n),K=s(n,"P",{"data-svelte-h":!0}),c(K)!=="svelte-uw280o"&&(K.textContent=Kn),mt=a(n),vt=s(n,"BR",{}),ft=a(n),V=s(n,"P",{"data-svelte-h":!0}),c(V)!=="svelte-9wn1h0"&&(V.innerHTML=Vn),pt=a(n),g=s(n,"DIV",{class:!0});var b=v(g);Y=s(b,"SPAN",{"data-svelte-h":!0}),c(Y)!=="svelte-1xp33cu"&&(Y.textContent=Yn),gt=a(b),Le=s(b,"PRE",{});var Ko=v(Le);bt=m(Ko,d[7]),Ko.forEach(h),xt=a(b),Be=s(b,"PRE",{});var Vo=v(Be);yt=m(Vo,vs),Vo.forEach(h),wt=a(b),$=s(b,"SPAN",{"data-svelte-h":!0}),c($)!=="svelte-krlx4g"&&($.textContent=$n),Ct=a(b),Ue=s(b,"PRE",{});var Yo=v(Ue);kt=m(Yo,d[8]),Yo.forEach(h),Ft=a(b),Xe=s(b,"PRE",{});var $o=v(Xe);Pt=m($o,d[9]),$o.forEach(h),Mt=a(b),Oe=s(b,"PRE",{});var es=v(Oe);qt=m(es,d[10]),es.forEach(h),Rt=a(b),Je=s(b,"PRE",{});var ts=v(Je);Tt=m(ts,d[11]),ts.forEach(h),b.forEach(h),_t=a(n),S=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),c(S)!=="svelte-1kemneu"&&(S.textContent=eo),Ht=a(n),y=s(n,"SPAN",{class:!0});var C=v(y);Et=m(C,`***********************************************************************
    `),zt=s(C,"BR",{}),At=a(C),ee=s(C,"P",{"data-svelte-h":!0}),c(ee)!=="svelte-88wzaf"&&(ee.textContent=to),St=a(C),Ne=s(C,"PRE",{});var ns=v(Ne);jt=m(ns,d[4]),ns.forEach(h),Dt=a(C),te=s(C,"P",{"data-svelte-h":!0}),c(te)!=="svelte-v6dtpa"&&(te.textContent=no),It=m(C,`

    Case 1 -- Clicking on the three visible sides of the cube.`),C.forEach(h),Lt=a(n),ne=s(n,"P",{"data-svelte-h":!0}),c(ne)!=="svelte-1ponxwm"&&(ne.textContent=oo),Bt=a(n),Ge=s(n,"PRE",{});var os=v(Ge);Ut=m(os,d[5]),os.forEach(h),Xt=a(n),oe=s(n,"P",{"data-svelte-h":!0}),c(oe)!=="svelte-1bez429"&&(oe.textContent=so),Ot=a(n),Qe=s(n,"PRE",{});var ss=v(Qe);Jt=m(ss,d[14]),ss.forEach(h),Nt=a(n),se=s(n,"P",{"data-svelte-h":!0}),c(se)!=="svelte-t7rbwi"&&(se.textContent=ro),Gt=a(n),We=s(n,"PRE",{});var rs=v(We);Qt=m(rs,d[3]),rs.forEach(h),Wt=a(n),re=s(n,"P",{"data-svelte-h":!0}),c(re)!=="svelte-7peipo"&&(re.textContent=ao),Zt=a(n),ae=s(n,"P",{"data-svelte-h":!0}),c(ae)!=="svelte-1665qyz"&&(ae.textContent=io),Kt=a(n),M=s(n,"IMG",{src:!0,alt:!0,style:!0,class:!0}),Vt=a(n),ie=s(n,"P",{"data-svelte-h":!0}),c(ie)!=="svelte-17tb0r2"&&(ie.textContent=co),Yt=a(n),le=s(n,"P",{"data-svelte-h":!0}),c(le)!=="svelte-x3eeug"&&(le.textContent=ho),$t=a(n),ce=s(n,"P",{"data-svelte-h":!0}),c(ce)!=="svelte-8cvcfg"&&(ce.innerHTML=uo),en=a(n),Ze=s(n,"PRE",{});var as=v(Ze);tn=m(as,d[15]),as.forEach(h),nn=a(n),de=s(n,"P",{"data-svelte-h":!0}),c(de)!=="svelte-ok96u4"&&(de.textContent=mo),on=a(n),j=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),c(j)!=="svelte-1aqmcih"&&(j.innerHTML=vo),sn=a(n),he=s(n,"P",{"data-svelte-h":!0}),c(he)!=="svelte-1ytqx6g"&&(he.innerHTML=fo),rn=a(n),ue=s(n,"P",{"data-svelte-h":!0}),c(ue)!=="svelte-1yl9urz"&&(ue.textContent=po),an=a(n),D=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),c(D)!=="svelte-kozoi1"&&(D.innerHTML=go),ln=a(n),me=s(n,"P",{"data-svelte-h":!0}),c(me)!=="svelte-cxnf2r"&&(me.textContent=bo),cn=a(n),Ke=s(n,"PRE",{});var is=v(Ke);dn=m(is,d[16]),is.forEach(h),hn=a(n),ve=s(n,"P",{"data-svelte-h":!0}),c(ve)!=="svelte-16gky82"&&(ve.textContent=xo),un=a(n),fe=s(n,"P",{"data-svelte-h":!0}),c(fe)!=="svelte-lw9xvr"&&(fe.innerHTML=yo),mn=a(n),I=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),c(I)!=="svelte-p8qgwr"&&(I.textContent=wo),vn=a(n),i=s(n,"DIV",{class:!0});var l=v(i);q=s(l,"P",{style:!0,"data-svelte-h":!0}),c(q)!=="svelte-1us81ah"&&(q.textContent=Co),fn=a(l),L=s(l,"P",{style:!0,"data-svelte-h":!0}),c(L)!=="svelte-19kfnrq"&&(L.textContent=ko),pn=a(l),B=s(l,"P",{style:!0,"data-svelte-h":!0}),c(B)!=="svelte-1kc4x8w"&&(B.textContent=Fo),gn=a(l),U=s(l,"P",{style:!0,"data-svelte-h":!0}),c(U)!=="svelte-17nb89f"&&(U.innerHTML=Po),bn=a(l),X=s(l,"P",{style:!0,"data-svelte-h":!0}),c(X)!=="svelte-13i7vub"&&(X.textContent=Mo),xn=a(l),O=s(l,"P",{style:!0,"data-svelte-h":!0}),c(O)!=="svelte-1n4pi73"&&(O.textContent=qo),yn=a(l),pe=s(l,"P",{"data-svelte-h":!0}),c(pe)!=="svelte-1tk55n4"&&(pe.innerHTML=Ro),wn=a(l),ge=s(l,"P",{"data-svelte-h":!0}),c(ge)!=="svelte-2y9he2"&&(ge.innerHTML=To),Cn=a(l),be=s(l,"P",{"data-svelte-h":!0}),c(be)!=="svelte-14wboki"&&(be.textContent=_o),kn=a(l),J=s(l,"P",{id:!0,"data-svelte-h":!0}),c(J)!=="svelte-1jc3qmd"&&(J.textContent=Ho),Fn=a(l),Ve=s(l,"PRE",{});var ls=v(Ve);Pn=m(ls,d[4]),ls.forEach(h),Mn=a(l),xe=s(l,"P",{"data-svelte-h":!0}),c(xe)!=="svelte-r2a6lm"&&(xe.textContent=Eo),qn=a(l),Ye=s(l,"PRE",{});var cs=v(Ye);Rn=m(cs,d[12]),cs.forEach(h),Tn=a(l),ye=s(l,"P",{"data-svelte-h":!0}),c(ye)!=="svelte-1n05fgy"&&(ye.textContent=zo),_n=a(l),$e=s(l,"PRE",{});var ds=v($e);Hn=m(ds,d[15]),ds.forEach(h),En=a(l),we=s(l,"P",{"data-svelte-h":!0}),c(we)!=="svelte-16bl1cl"&&(we.innerHTML=Ao),zn=a(l),Ce=s(l,"P",{"data-svelte-h":!0}),c(Ce)!=="svelte-dqomyr"&&(Ce.textContent=So),An=a(l),et=s(l,"PRE",{});var hs=v(et);Sn=m(hs,d[13]),hs.forEach(h),jn=a(l),ke=s(l,"P",{"data-svelte-h":!0}),c(ke)!=="svelte-1ormilq"&&(ke.textContent=jo),Dn=a(l),Fe=s(l,"P",{"data-svelte-h":!0}),c(Fe)!=="svelte-1rappih"&&(Fe.textContent=Do),In=a(l),R=s(l,"IMG",{src:!0,alt:!0,style:!0,class:!0}),Ln=a(l),Pe=s(l,"H2",{"data-svelte-h":!0}),c(Pe)!=="svelte-1q8yqdi"&&(Pe.textContent=Lo),Bn=m(l,`

      This slightly modified version of M can handle both ordinary data and promises:
      
        `),tt=s(l,"PRE",{});var us=v(tt);Un=m(us,d[17]),us.forEach(h),Xn=m(l,`

      A real time demonstration of m(dF3x) delivering promises, one by one, along with definitions of the asynchronous functions used, can be found here: `),N=s(l,"A",{href:!0,"data-svelte-h":!0}),c(N)!=="svelte-1p0qbt8"&&(N.textContent=Bo),On=m(l,` These are the composite 
funtions used in the demonstration:
    `),Me=s(l,"P",{"data-svelte-h":!0}),c(Me)!=="svelte-1jpsdpt"&&(Me.textContent=Uo),Jn=a(l),qe=s(l,"P",{"data-svelte-h":!0}),c(qe)!=="svelte-1ob2yrm"&&(qe.textContent=Xo),Nn=a(l),Re=s(l,"P",{"data-svelte-h":!0}),c(Re)!=="svelte-1mmc001"&&(Re.textContent=Oo),Gn=a(l),Te=s(l,"P",{"data-svelte-h":!0}),c(Te)!=="svelte-1k5gx0c"&&(Te.textContent=Jo),l.forEach(h),n.forEach(h),at=a(f),A=s(f,"A",{href:!0,"data-svelte-h":!0}),c(A)!=="svelte-1887boa"&&(A.textContent=No),it=a(f),w&&w.l(f),this.h()},h(){x(k,"text-align","center"),p(F,"class","light svelte-11ad9vo"),p(_,"class","dis svelte-11ad9vo"),p(H,"class","play svelte-11ad9vo"),p(E,"class","dis svelte-11ad9vo"),p(P,"class","light svelte-11ad9vo"),p(g,"class","light svelte-11ad9vo"),p(S,"class","teaser svelte-11ad9vo"),p(y,"class","teaser svelte-11ad9vo"),ms(M.src,lo=Fs)||p(M,"src",lo),p(M,"alt","Image of the Rubik's cube "),x(M,"width","200px"),x(M,"height","210px"),p(M,"class","svelte-11ad9vo"),p(j,"class","teaser svelte-11ad9vo"),p(D,"class","teaser svelte-11ad9vo"),p(I,"class","teaser svelte-11ad9vo"),x(q,"color","lightgreen"),x(q,"font-size","28px"),x(q,"font-weight","bold "),x(L,"color","lightgreen"),x(B,"color","lightgreen"),x(U,"color","lightgreen"),x(X,"color","lightgreen"),x(O,"color","lightgreen"),p(J,"id","cow7"),ms(R.src,Io=Ps)||p(R,"src",Io),p(R,"alt","Image of the Rubik's cube "),x(R,"width","200px"),x(R,"height","210px"),p(R,"class","svelte-11ad9vo"),p(N,"href","./async5"),p(i,"class","background"),x(t,"margin-left","8%"),x(t,"margin-right","8%"),p(t,"id","top"),p(A,"href","#top")},m(f,n){lt(f,t,n),e(t,k),e(t,G),e(t,F),e(t,He),e(t,T),e(t,Q),e(t,_),e(_,Ee),e(t,ze),e(t,H),e(H,Ae),e(t,Se),e(t,E),e(E,je),e(t,De),e(t,P),e(t,Ie),e(t,z),e(z,ct),e(t,dt),e(t,W),e(t,ht),e(t,Z),e(t,ut),e(t,K),e(t,mt),e(t,vt),e(t,ft),e(t,V),e(t,pt),e(t,g),e(g,Y),e(g,gt),e(g,Le),e(Le,bt),e(g,xt),e(g,Be),e(Be,yt),e(g,wt),e(g,$),e(g,Ct),e(g,Ue),e(Ue,kt),e(g,Ft),e(g,Xe),e(Xe,Pt),e(g,Mt),e(g,Oe),e(Oe,qt),e(g,Rt),e(g,Je),e(Je,Tt),e(t,_t),e(t,S),e(t,Ht),e(t,y),e(y,Et),e(y,zt),e(y,At),e(y,ee),e(y,St),e(y,Ne),e(Ne,jt),e(y,Dt),e(y,te),e(y,It),e(t,Lt),e(t,ne),e(t,Bt),e(t,Ge),e(Ge,Ut),e(t,Xt),e(t,oe),e(t,Ot),e(t,Qe),e(Qe,Jt),e(t,Nt),e(t,se),e(t,Gt),e(t,We),e(We,Qt),e(t,Wt),e(t,re),e(t,Zt),e(t,ae),e(t,Kt),e(t,M),e(t,Vt),e(t,ie),e(t,Yt),e(t,le),e(t,$t),e(t,ce),e(t,en),e(t,Ze),e(Ze,tn),e(t,nn),e(t,de),e(t,on),e(t,j),e(t,sn),e(t,he),e(t,rn),e(t,ue),e(t,an),e(t,D),e(t,ln),e(t,me),e(t,cn),e(t,Ke),e(Ke,dn),e(t,hn),e(t,ve),e(t,un),e(t,fe),e(t,mn),e(t,I),e(t,vn),e(t,i),e(i,q),e(i,fn),e(i,L),e(i,pn),e(i,B),e(i,gn),e(i,U),e(i,bn),e(i,X),e(i,xn),e(i,O),e(i,yn),e(i,pe),e(i,wn),e(i,ge),e(i,Cn),e(i,be),e(i,kn),e(i,J),e(i,Fn),e(i,Ve),e(Ve,Pn),e(i,Mn),e(i,xe),e(i,qn),e(i,Ye),e(Ye,Rn),e(i,Tn),e(i,ye),e(i,_n),e(i,$e),e($e,Hn),e(i,En),e(i,we),e(i,zn),e(i,Ce),e(i,An),e(i,et),e(et,Sn),e(i,jn),e(i,ke),e(i,Dn),e(i,Fe),e(i,In),e(i,R),e(i,Ln),e(i,Pe),e(i,Bn),e(i,tt),e(tt,Un),e(i,Xn),e(i,N),e(i,On),e(i,Me),e(i,Jn),e(i,qe),e(i,Nn),e(i,Re),e(i,Gn),e(i,Te),lt(f,at,n),lt(f,A,n),lt(f,it,n),w&&w.m(f,n),_e=!0},p(f,n){w&&w.p&&(!_e||n[0]&262144)&&gs(w,Qn,f,f[18],_e?xs(Qn,f[18],n,null):bs(f[18]),null)},i(f){_e||(Cs(w,f),_e=!0)},o(f){ks(w,f),_e=!1},d(f){f&&(h(t),h(at),h(A),h(it)),w&&w.d(f)}}}var vs="m(dF3x)  // 3";function qs(d,t,k){let{$$slots:nt={},$$scope:G}=t;var F=`    function M (x) {
      return function go (func)`,ot=`      {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }`,He=`    }
    Where dF3x = () => {}; `;let T=`  function F(ar) {
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
  } `;var Q=`const b0 = 'blue';
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

  var m = M([bb, gg, rr, oo, yy, ww]);`;const st=`      <div class="face front">
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
      </div>`;var Q=`const b0 = 'blue';
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

  var m = M([bb, gg, rr, oo, yy, ww]);`,_="M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10",Ee="m = M(3)",ze="m(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)",H="m(dF3x)  // 10",Ae="m(v=>v+4)(v=>v*3)  // Now x in the m-M(x) closure is 42",Se="m(dF3x) // 42",E=`      .blue {
          height: 60px;
          width: 60px;
          background-color: lightblue;
          display: inline;
          border-radius: 10px;
      }`,je=`  const R = function R(ar) {
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
  }`,De=`.blue {
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
</div>`,rt=`function handleEvent(e) { 
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
  }`,Ie=`function M (x) {
          return function go (func){
            if (func === dF3x) return x;
            else x = idP(x).then(v => func(v));
            return go;
          }
        }`;return d.$$set=z=>{"$$scope"in z&&k(18,G=z.$$scope)},[F,ot,He,T,Q,st,_,Ee,ze,H,Ae,Se,E,je,De,P,rt,Ie,G,nt]}class _s extends ys{constructor(t){super(),ws(this,t,qs,Ms,fs,{},null,[-1,-1])}}export{_s as component};
