import{s as Js,c as Ns,f as Us,u as Gs,g as Qs,d as Ws}from"../chunks/scheduler.41143b43.js";import{S as Zs,i as Ks,g as o,s as r,m as u,h as s,j as v,x as l,c as a,n as m,f as h,l as b,k as p,a as bt,y as e,d as Vs,t as Ys}from"../chunks/index.8cc052f2.js";const $s="data:image/png;base64,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",er=""+new URL("../assets/CubeshotR.cd72fc2c.png",import.meta.url).href;function tr(d){let t,k,ht="Recursive Closures",Z,F,ut='The inner function "m" ( defined as "go" in the outer function ) is recursive',Be,_,mt="Where m = M(x),",K,T,vt="x can be any value,",Oe,q,ft="M is",Ue,H,Xe,Je,E,Ne,Ge,z,V,xt,Y,yt,S,wt,Ct,$,go='The usefulness of dF3x in the <a style="font-size: 28px" href="./cube7">simulated Rubik&#39;s cube</a>',kt,ee,bo=`In the  m-M(x) closure representing the Rubik's cube, x is an array of six nine-member arrays of strings with the names of colors. In the solved cube, the arrays in x are, moving sequentially from x[0] to x[5], entirely "blue, green, red, orange, yellow, and white."`,Ft,te,xo=`Classes with the names of colors, each specifying corresponding CSS "background-color" designations, are specified in the six groups of nine div elements that constitute the simulated Rubik's cube in the DOM. So, the statement, "class = m(dF3x)[j][k], where a is an integer between 0 and 5, and b is an integer between 0 and 8, determines the color of one of the squares on one of the faces of the Rubik's cube representation in the DOM."`,Pt,ne,yo='Likewise, the statement &quot;style = &#39;background-color: m(dF3x)[j][k]&#39;&quot; can specify the color of one of the 54 squares that constitute the simulated Rubik&#39;s cube in the DOM. Here&#39;s a demonstration on the Rubik&#39;s cube page: <a href="./cube7#coolcow"><span style="font-weight:bold; color:#ff99dd;">Demonstration</span></a>. Don&#39;t just repeatedly click &quot;Scramble&quot;. Also, read the definitions that precede it. Tell me what you think.',Mt,A,wo="End of Chapter One",Rt,_t,D,Co="Anonymous Closures Performs Anonymous Computations:",Tt,Qe,qt,Ht,oe,ko='Composing function this way is elegant, transparent, and efficient. Scrambling the Rubik&#39;s cube involves calling a random sequence of 40 functions that rotate faces and middle sections of the Simulated Rubik&#39;s cube. Running this application on localhost:5173, my desktop computer can scramble the cube 1,000 times in less than 300 milliseconds. <a href="./cube7#test">Try it here</a>',Et,se,Fo="The statement resolves to 10. No variable points to the transient closure, which is transient because it is not assigned to a variable and is, therefore, ripe for removal by the garbage collector immediately upon resolution to 10.",zt,re,Po="M(3) at the beginning of the above computation returns go. The function go operates on v=>v**3, v=>v*4, v=>v-8, Math.sqrt, and dF3x. Then, being unreachable by any variable assignment, disappears from memory whenever the garbage collector gets around to removing it.",St,jt,At,ae,Mo="",Dt,g,ie,Ro="Encapsulated State:",It,We,Lt,Bt,Ze,Ot,Ut,le,_o="Sometime later (the garbage collector ignores closures):",Xt,Ke,Jt,Nt,Ve,Gt,Qt,Ye,Wt,Zt,$e,Kt,Vt,I,To="Rubik's Cube Simulation",Yt,y,$t,en,tn,ce,qo="In the Rubik's cube application, the m-M(x) closure is defined as follows:",nn,et,on,sn,de,Ho="The visual representation in the browser is constructed so that bb, gg, rr, oo, yy, and ww correspond to its right, left, back, front, top, and bottom faces respectively. The fact that x[3] represents the front face of the cube is especially relevant in the discussion that follows.",rn,an,he,Eo=`The value held in the m-M(x) closure in the Rubik's cube application, "x", is always an array of six nine-member
    references to the strings "blue, green, red, orange, yellow, and white." The nine front-facing squares seen in the browser are all colored according to the nine strings referenced in xk[3]. In the starting cube, also known as the "solved cube," x[3] is the array "oo", the array of all nine references to "orange." Here's the first of the six parts of the 54 div representation of the Rubik's cube in the DOM:`,ln,tt,cn,dn,ue,zo="Here are the definitions of the classes that get reassigned to divs during the course of manipulating it with key presses and mouse clicks:",hn,nt,un,mn,me,So='The third button down from the top and the final button of the front face (see above) contain the statement "m = m(F)". These correspond to the upper right and lower right corners of the cube representation in the browser. Clicking the upper right or lower right corners of the cube, therefore, mutates x in the m=M(x) closure into the value returned by F(x), which is named "temp".',vn,ot,fn,pn,ve,jo='Pressing the "F" key and clicking on the "F" button are other ways of rotating the front face clockwise 90 degrees. All three methods rely on the statement, "m = m(F)". The "m =" part of the statement m = m(F) triggers reactivity in this Sveltekit application, giving users almost instantaneous feedback from their key presses and mouse clicks.',gn,fe,Ao=`Examining the function "F", we see that the front face of the cube, temp[3], remains solid orange after class reassignments create the illusion that the front face rotated. Evidence of rotation can be seen on the top (temp[4]) and on the right (temp[0]) sides of the cube. Here's what the cube looks like in the browser after running "m = m(F)" on the solved cube:`,bn,P,Do,xn,pe,Io='The changes to the top face, with three classes reassigned from x[1] (previously all green), and the changes to the right face, three classes reassigned from x[4] (previously all yellow), demonstrate the correspondence between the function "F" and the visual representation in the browser. And, of course, the observed changes are what you get when you turn the front face of your own solved cube, assuming you have one.',yn,ge,Lo='Clicking the center of each face rearranges x in the m-M(x) closure, thereby automatically rearranging some of the class assignments of the 54 dives in the DOM. In the browser, this creates the appearance of 90 degree clockwise rotation of the entire cube around the axes perpendicular to the clicked centers. Pressing the x, y, and z Keys has the same effects. Holding down SHIFT while pressing these keys creates the appearance of counterclockwise rotation. There are also buttons for clockwise rotations, and "back" buttons for counterclockwise rotation.',wn,be,Bo=`The 54 divs that combine to represent the cube in the DOM are shown below.
    The visual representation that appears in the browser is on the next page, <a href="./cube7">Rubik&#39;s cube</a>`,Cn,st,kn,Fn,xe,Oo=`If you click on the top center of a solved cube three times, the green side will face you.
    Clicking the upper right corner and then clicking the top center again to restore the cube to its previous orientation confirms that you have rotated the left side clockwise by by 90 degrees.`,Pn,L,Uo=`***********************************************************************
      <br/>
      Case 2 -- Clicking on the buttons.`,Mn,ye,Xo=`Similar to clicking on parts of the cube, the callback specified in
      buttons that rotate faces, middle sections, and the entire cube do so by
      calling m(func) for for the same functions &quot;func&quot; involved in clicking on parts of the simulated Rubik&#39;s cube.  Each function &quot;func&quot; rearranges some of the six nine-element arrays constituting the array &quot;x&quot; in the m-M(x) closure. This causes the automatic reassignment of classes in the DOM representation of the cube and the illusion in the browser that the cube or some part of it has rotated. You can try out the buttons in the <a href="./cube7#yes">button section</a> of the Rubik&#39;s cube page.`,Rn,we,Jo='Pressing the "F" key, clicking the "F" button, or clicking the right upper or lower corners of the forward-facing side all cause the function "m(F)" to execute. When the orange front of a solved cube rotates 90 degrees clockwise, the right column of the green left side migrates to the lower row of the top and the lowest row of the yellow top to move into the left column of the right side of the cube.',_n,B,No=`***********************************************************************
      <br/>
      Case 3 -- Key presses.`,Tn,Ce,Go=`Pressing keys invokes eventHandler(e) where "e" is the key-press event object and
      eventHandler is defined as follows:`,qn,rt,Hn,En,ke,Qo=`"svelte:window on:keypress = { handleEvent } " routes keyPress
      event objects to handleEvent.`,zn,Fe,Wo=`The <a href="./cube7">Rubik&#39;s Cube simulation</a> features an m-M(x)
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
      section provides function definitions, and nothing more.`,Sn,O,Zo="***********************************************************************",jn,i,M,Ko="Biographical Background:",An,U,Vo=`Indiana University awarded me a bachelor of science degree in chemistry,
        a master's degree in mathematics, and a doctor of jurisprudence degree
        in law. Sun Microsysystems certified me as a Java Programmer and Java
        Website Developer, which qualified me for a job I took at Indiana
        University, working on a project as a Programmer/Systems Analyst. I got the certifications and entry-level position at I.U. because I believed my doctor when he told me he couldn't refer me to the liver transplant clinic in Indianapolis unless I got "good" insurance coverage, the kind provided by Indiana University to its employees. I didn't know about Indiana's high risk insurance program, which I could have afforded continuing to practice law. The cost was around $1000.00 per month. It was Indiana's way of guaranteeing health care for the middle class and less affluent people with benefactors willing to pay their premiums.`,Dn,X,Yo="Back in the 1980s, I learned to contact online bulletin boards over the telephone. In 1995, I learned some JavaScript playing around with the amazing Netscape Navigator browser. Then I learned to use some web application frameworks for my law practice website. Programming fascinated me, and over the years I learned to write simple programs in numerous languages. My very first language was Fortran, which I learned in college while working on my bachelor's degree in chemistry.",In,J,$o='My son, Alexander, enjoyed a dice game called &quot;score&quot; that he learned in school, so I developed an online, multi-player version in the Haskell programming language. Users can modify the game and prompt it to display any and all possible solutions. I found a binary version I compiled with the Glasgow Haskell Compiler (GHC) in 2014. It runs online at http://schalk2:3055. There isn&#39;t a working secure version. https://score.schalk2.com loads the login screen, but goes no further than that. Here&#39;s a link: <a href="http://schalk2.com:3055" target="_blank">Game of score</a>. The code is at <a href="https://github.com/dschalk/score2">https://github.com/dschalk/score2</a>',Ln,N,es=`I'll never again get involved in a Java project and I can't imagine ever
        again needing React. After developing an elaborate online multi-player
        game in the Haskel programming language, still using React for the user
        interface, I decided to stick with JavaScript and simple frameworks.
        This is a SvelteKit application.`,Bn,G,ts=`While it makes sense to develop web applications with a few elaborate
        functions in conjunction with reusable small ones, I decided to try the
        opposite approach. What I discovered is worth sharing, to say the least,
        so here it is.`,On,Pe,ns=`The code samples at the top of this page shows that function composition
        using M can&#39;t be more transparent, concise, and maintainable. Going
        beyond numerical computations, M holds the ever-changing state of play
        in the<a href="./score">Game of Score</a>. That application functions properly, but the code needs to be refactored and cleaned up. The simulated Rubik&#39;s cube is a simple m-M(x) closure where x is an array of six nine-member arrays of strings. A slightly modified version of M is introduced to facilitate reversing a series of moves.`,Un,Me,os=`A few additional lines of code in M can facilitate nesting of mixed
        synchronous and asynchronous functions handled by m, and can help avoid
        mutations by providing an array, let&#39;s call it &quot;ar&quot;, into which f(x)
        (which runds after m(f)) can be pushed, and having dF3x prompt the
        return of ar.slice(-1)[0] when f === dF3x. But enough of the small
        stuff, now it&#39;s time to show m-M(x) closures in all their glory, deftly
        making complex applications work while they do nothing but allow the
        function m to transform them by means of the functions m fetches. The <a href="./cube7">Simulated Rubik&#39;s cube</a> is a case in point.`,Xn,Re,ss=`The array x in the m-M(x) Rubik's cube array is an array consisting of
        six nine-member arrays of references to the strings "blue, green, red,
        orange, yellow and white." Functions called in response to DOM key
        presses and mouse clicks rearrange these strings, which are the names of
        CSS classes whose "background-color" properties match the names of the
        selectors that contain them. For example, the CSS class "blue" contains
        the line, "background-color: "blue".`,Jn,Q,rs=`To understand the interface between the m-M(x) representation of the
        cube with the 54 colored divs in the DOM, we first need to know how x in
        the closure is defined. Here it is:`,Nn,at,Gn,Qn,_e,as=`m(dF3x)[0][0] on the solved cube representation in the DOM is a div with
        class = "blue". Here's blue's definition:`,Wn,it,Zn,Kn,Te,is=`Below is the cube representation in the DOM. Notice how the colors
        corresponds with the image in the monitor -- orange in front m(dF3x)[3],
        blue on the side m(dF3x)[0], and yellow on top (m(dF3x)[4]).`,Vn,lt,Yn,$n,qe,ls=`<a href="./cube7#cow8">This link</a> takes you to a demonstration driving
        home the point that the mere rearrangement of x in the m-M(x) closure, along
        with a self-reference of m to m, is sufficient to trigger reactivity in Svelte.
        It also shows that the only heavy lifting, such that it is, consists of rearranging
        references to strings. The 54 divs that constitute the DOM representation
        remain stationary; only their class assignments change.`,eo,He,cs=`When you press "R", click the "R" button, or click the upper right or lower right
        corner of the right side of the cube representation, m = m(R) executes. This runs R on x and by the definition of M, x mutates to R(x) = temp as defined in the function R.`,to,ct,no,oo,Ee,ds="The current configuration of x in the closure is of no concern to R. R rearranges the strings based solely on their locations in whatever the configuration of x happens to be.",so,ze,hs=`For example, the third line down in temp[3] in the function "R" specifies that whatever string reference happens to be in position m(dF3x)[3][2] changes to whatever string reference happens to be in
        position m(dF3x)[5][2]. If the cube is in its starting configuration
        (solved, prior to scrambling), the upper right front corner will go from
        orange to white, as shown below.`,ro,R,us,ao,Se,ms="Handling Intermittant Promises",io,dt,lo,co,W,vs="Async",ho,je,fs="m(addP(3)) (squareP) (v => v - 7) (dF3x).then(v => (D = v)) = 42",uo,Ae,ps="m(v => v / 42) (multP(6)) (v=>v * 7) (dF3x).then(v => (A = v)) = 42",mo,De,gs="m(addP(7)) (Math.sqrt) (v => v * 6) (dF3x).then(a => (C = a)) = 42",vo,Ie,bs="m(divP(14)) (v => v**3) (addP(5)) (dF3x).then(v => (D = v)) = 42",pt,j,xs="Back to the top",gt,Le;const fo=d[20].default,w=Ns(fo,d,d[19],null);return{c(){t=o("div"),k=o("h1"),k.textContent=ht,Z=r(),F=o("h3"),F.textContent=ut,Be=r(),_=o("p"),_.textContent=mt,K=r(),T=o("p"),T.textContent=vt,Oe=r(),q=o("p"),q.textContent=ft,Ue=r(),H=o("pre"),Xe=u(d[0]),Je=r(),E=o("pre"),Ne=u(d[1]),Ge=r(),z=o("pre"),V=u(d[2]),xt=r(),Y=o("p"),yt=u('and the flag dF3x can be any value; including null, an image, or a function. In order to facilitate future type-checking, "func" is defined here as a function; namely, '),S=o("span"),wt=u(d[18]),Ct=r(),$=o("h2"),$.innerHTML=go,kt=r(),ee=o("p"),ee.textContent=bo,Ft=r(),te=o("p"),te.textContent=xo,Pt=r(),ne=o("p"),ne.innerHTML=yo,Mt=r(),A=o("h3"),A.textContent=wo,Rt=o("br"),_t=r(),D=o("div"),D.textContent=Co,Tt=r(),Qe=o("pre"),qt=u(d[6]),Ht=r(),oe=o("p"),oe.innerHTML=ko,Et=r(),se=o("p"),se.textContent=Fo,zt=r(),re=o("p"),re.textContent=Po,St=r(),jt=o("br"),At=r(),ae=o("p"),ae.innerHTML=Mo,Dt=r(),g=o("div"),ie=o("span"),ie.textContent=Ro,It=r(),We=o("pre"),Lt=u(d[7]),Bt=r(),Ze=o("pre"),Ot=u(Xs),Ut=r(),le=o("span"),le.textContent=_o,Xt=r(),Ke=o("pre"),Jt=u(d[8]),Nt=r(),Ve=o("pre"),Gt=u(d[9]),Qt=r(),Ye=o("pre"),Wt=u(d[10]),Zt=r(),$e=o("pre"),Kt=u(d[11]),Vt=r(),I=o("span"),I.textContent=To,Yt=r(),y=o("span"),$t=u(`***********************************************************************
    `),en=o("br"),tn=r(),ce=o("p"),ce.textContent=qo,nn=r(),et=o("pre"),on=u(d[4]),sn=r(),de=o("p"),de.textContent=Ho,rn=u(`

    Case 1 -- Clicking on the three visible sides of the cube.`),an=r(),he=o("p"),he.textContent=Eo,ln=r(),tt=o("pre"),cn=u(d[5]),dn=r(),ue=o("p"),ue.textContent=zo,hn=r(),nt=o("pre"),un=u(d[14]),mn=r(),me=o("p"),me.textContent=So,vn=r(),ot=o("pre"),fn=u(d[3]),pn=r(),ve=o("p"),ve.textContent=jo,gn=r(),fe=o("p"),fe.textContent=Ao,bn=r(),P=o("img"),xn=r(),pe=o("p"),pe.textContent=Io,yn=r(),ge=o("p"),ge.textContent=Lo,wn=r(),be=o("p"),be.innerHTML=Bo,Cn=r(),st=o("pre"),kn=u(d[15]),Fn=r(),xe=o("p"),xe.textContent=Oo,Pn=r(),L=o("span"),L.innerHTML=Uo,Mn=r(),ye=o("p"),ye.innerHTML=Xo,Rn=r(),we=o("p"),we.textContent=Jo,_n=r(),B=o("span"),B.innerHTML=No,Tn=r(),Ce=o("p"),Ce.textContent=Go,qn=r(),rt=o("pre"),Hn=u(d[16]),En=r(),ke=o("p"),ke.textContent=Qo,zn=r(),Fe=o("p"),Fe.innerHTML=Wo,Sn=r(),O=o("span"),O.textContent=Zo,jn=r(),i=o("div"),M=o("p"),M.textContent=Ko,An=r(),U=o("p"),U.textContent=Vo,Dn=r(),X=o("p"),X.textContent=Yo,In=r(),J=o("p"),J.innerHTML=$o,Ln=r(),N=o("p"),N.textContent=es,Bn=r(),G=o("p"),G.textContent=ts,On=r(),Pe=o("p"),Pe.innerHTML=ns,Un=r(),Me=o("p"),Me.innerHTML=os,Xn=r(),Re=o("p"),Re.textContent=ss,Jn=r(),Q=o("p"),Q.textContent=rs,Nn=r(),at=o("pre"),Gn=u(d[4]),Qn=r(),_e=o("p"),_e.textContent=as,Wn=r(),it=o("pre"),Zn=u(d[12]),Kn=r(),Te=o("p"),Te.textContent=is,Vn=r(),lt=o("pre"),Yn=u(d[15]),$n=r(),qe=o("p"),qe.innerHTML=ls,eo=r(),He=o("p"),He.textContent=cs,to=r(),ct=o("pre"),no=u(d[13]),oo=r(),Ee=o("p"),Ee.textContent=ds,so=r(),ze=o("p"),ze.textContent=hs,ro=r(),R=o("img"),ao=r(),Se=o("h2"),Se.textContent=ms,io=u(`

      This slightly modified version of M can handle both ordinary data and promises:
      
        `),dt=o("pre"),lo=u(d[17]),co=u(`

      A real time demonstration of m(dF3x) delivering promises, one by one, along with definitions of the asynchronous functions used, can be found here: `),W=o("a"),W.textContent=vs,ho=u(` These are the composite 
funtions used in the demonstration:
    `),je=o("p"),je.textContent=fs,uo=r(),Ae=o("p"),Ae.textContent=ps,mo=r(),De=o("p"),De.textContent=gs,vo=r(),Ie=o("p"),Ie.textContent=bs,pt=r(),j=o("a"),j.textContent=xs,gt=r(),w&&w.c(),this.h()},l(f){t=s(f,"DIV",{style:!0,id:!0});var n=v(t);k=s(n,"H1",{style:!0,"data-svelte-h":!0}),l(k)!=="svelte-mpxol8"&&(k.textContent=ht),Z=a(n),F=s(n,"H3",{class:!0,"data-svelte-h":!0}),l(F)!=="svelte-1gksf7z"&&(F.textContent=ut),Be=a(n),_=s(n,"P",{"data-svelte-h":!0}),l(_)!=="svelte-au98q5"&&(_.textContent=mt),K=a(n),T=s(n,"P",{"data-svelte-h":!0}),l(T)!=="svelte-gua8jo"&&(T.textContent=vt),Oe=a(n),q=s(n,"P",{"data-svelte-h":!0}),l(q)!=="svelte-1x6yfpf"&&(q.textContent=ft),Ue=a(n),H=s(n,"PRE",{class:!0});var ys=v(H);Xe=m(ys,d[0]),ys.forEach(h),Je=a(n),E=s(n,"PRE",{class:!0});var ws=v(E);Ne=m(ws,d[1]),ws.forEach(h),Ge=a(n),z=s(n,"PRE",{class:!0});var Cs=v(z);V=m(Cs,d[2]),Cs.forEach(h),xt=a(n),Y=s(n,"P",{});var po=v(Y);yt=m(po,'and the flag dF3x can be any value; including null, an image, or a function. In order to facilitate future type-checking, "func" is defined here as a function; namely, '),S=s(po,"SPAN",{style:!0});var ks=v(S);wt=m(ks,d[18]),ks.forEach(h),po.forEach(h),Ct=a(n),$=s(n,"H2",{"data-svelte-h":!0}),l($)!=="svelte-92anep"&&($.innerHTML=go),kt=a(n),ee=s(n,"P",{"data-svelte-h":!0}),l(ee)!=="svelte-1cpqqbb"&&(ee.textContent=bo),Ft=a(n),te=s(n,"P",{"data-svelte-h":!0}),l(te)!=="svelte-keppx1"&&(te.textContent=xo),Pt=a(n),ne=s(n,"P",{"data-svelte-h":!0}),l(ne)!=="svelte-7ix5nl"&&(ne.innerHTML=yo),Mt=a(n),A=s(n,"H3",{class:!0,"data-svelte-h":!0}),l(A)!=="svelte-1c3xntz"&&(A.textContent=wo),Rt=s(n,"BR",{}),_t=a(n),D=s(n,"DIV",{class:!0,"data-svelte-h":!0}),l(D)!=="svelte-19agv3x"&&(D.textContent=Co),Tt=a(n),Qe=s(n,"PRE",{});var Fs=v(Qe);qt=m(Fs,d[6]),Fs.forEach(h),Ht=a(n),oe=s(n,"P",{"data-svelte-h":!0}),l(oe)!=="svelte-bb71i5"&&(oe.innerHTML=ko),Et=a(n),se=s(n,"P",{"data-svelte-h":!0}),l(se)!=="svelte-192x6hp"&&(se.textContent=Fo),zt=a(n),re=s(n,"P",{"data-svelte-h":!0}),l(re)!=="svelte-uw280o"&&(re.textContent=Po),St=a(n),jt=s(n,"BR",{}),At=a(n),ae=s(n,"P",{"data-svelte-h":!0}),l(ae)!=="svelte-9wn1h0"&&(ae.innerHTML=Mo),Dt=a(n),g=s(n,"DIV",{class:!0});var x=v(g);ie=s(x,"SPAN",{"data-svelte-h":!0}),l(ie)!=="svelte-1xp33cu"&&(ie.textContent=Ro),It=a(x),We=s(x,"PRE",{});var Ps=v(We);Lt=m(Ps,d[7]),Ps.forEach(h),Bt=a(x),Ze=s(x,"PRE",{});var Ms=v(Ze);Ot=m(Ms,Xs),Ms.forEach(h),Ut=a(x),le=s(x,"SPAN",{"data-svelte-h":!0}),l(le)!=="svelte-krlx4g"&&(le.textContent=_o),Xt=a(x),Ke=s(x,"PRE",{});var Rs=v(Ke);Jt=m(Rs,d[8]),Rs.forEach(h),Nt=a(x),Ve=s(x,"PRE",{});var _s=v(Ve);Gt=m(_s,d[9]),_s.forEach(h),Qt=a(x),Ye=s(x,"PRE",{});var Ts=v(Ye);Wt=m(Ts,d[10]),Ts.forEach(h),Zt=a(x),$e=s(x,"PRE",{});var qs=v($e);Kt=m(qs,d[11]),qs.forEach(h),x.forEach(h),Vt=a(n),I=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),l(I)!=="svelte-1kemneu"&&(I.textContent=To),Yt=a(n),y=s(n,"SPAN",{class:!0});var C=v(y);$t=m(C,`***********************************************************************
    `),en=s(C,"BR",{}),tn=a(C),ce=s(C,"P",{"data-svelte-h":!0}),l(ce)!=="svelte-88wzaf"&&(ce.textContent=qo),nn=a(C),et=s(C,"PRE",{});var Hs=v(et);on=m(Hs,d[4]),Hs.forEach(h),sn=a(C),de=s(C,"P",{"data-svelte-h":!0}),l(de)!=="svelte-v6dtpa"&&(de.textContent=Ho),rn=m(C,`

    Case 1 -- Clicking on the three visible sides of the cube.`),C.forEach(h),an=a(n),he=s(n,"P",{"data-svelte-h":!0}),l(he)!=="svelte-1ponxwm"&&(he.textContent=Eo),ln=a(n),tt=s(n,"PRE",{});var Es=v(tt);cn=m(Es,d[5]),Es.forEach(h),dn=a(n),ue=s(n,"P",{"data-svelte-h":!0}),l(ue)!=="svelte-1bez429"&&(ue.textContent=zo),hn=a(n),nt=s(n,"PRE",{});var zs=v(nt);un=m(zs,d[14]),zs.forEach(h),mn=a(n),me=s(n,"P",{"data-svelte-h":!0}),l(me)!=="svelte-t7rbwi"&&(me.textContent=So),vn=a(n),ot=s(n,"PRE",{});var Ss=v(ot);fn=m(Ss,d[3]),Ss.forEach(h),pn=a(n),ve=s(n,"P",{"data-svelte-h":!0}),l(ve)!=="svelte-7peipo"&&(ve.textContent=jo),gn=a(n),fe=s(n,"P",{"data-svelte-h":!0}),l(fe)!=="svelte-1665qyz"&&(fe.textContent=Ao),bn=a(n),P=s(n,"IMG",{src:!0,alt:!0,style:!0,class:!0}),xn=a(n),pe=s(n,"P",{"data-svelte-h":!0}),l(pe)!=="svelte-17tb0r2"&&(pe.textContent=Io),yn=a(n),ge=s(n,"P",{"data-svelte-h":!0}),l(ge)!=="svelte-x3eeug"&&(ge.textContent=Lo),wn=a(n),be=s(n,"P",{"data-svelte-h":!0}),l(be)!=="svelte-8cvcfg"&&(be.innerHTML=Bo),Cn=a(n),st=s(n,"PRE",{});var js=v(st);kn=m(js,d[15]),js.forEach(h),Fn=a(n),xe=s(n,"P",{"data-svelte-h":!0}),l(xe)!=="svelte-ok96u4"&&(xe.textContent=Oo),Pn=a(n),L=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),l(L)!=="svelte-1aqmcih"&&(L.innerHTML=Uo),Mn=a(n),ye=s(n,"P",{"data-svelte-h":!0}),l(ye)!=="svelte-1ytqx6g"&&(ye.innerHTML=Xo),Rn=a(n),we=s(n,"P",{"data-svelte-h":!0}),l(we)!=="svelte-1yl9urz"&&(we.textContent=Jo),_n=a(n),B=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),l(B)!=="svelte-kozoi1"&&(B.innerHTML=No),Tn=a(n),Ce=s(n,"P",{"data-svelte-h":!0}),l(Ce)!=="svelte-cxnf2r"&&(Ce.textContent=Go),qn=a(n),rt=s(n,"PRE",{});var As=v(rt);Hn=m(As,d[16]),As.forEach(h),En=a(n),ke=s(n,"P",{"data-svelte-h":!0}),l(ke)!=="svelte-16gky82"&&(ke.textContent=Qo),zn=a(n),Fe=s(n,"P",{"data-svelte-h":!0}),l(Fe)!=="svelte-lw9xvr"&&(Fe.innerHTML=Wo),Sn=a(n),O=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),l(O)!=="svelte-p8qgwr"&&(O.textContent=Zo),jn=a(n),i=s(n,"DIV",{class:!0});var c=v(i);M=s(c,"P",{style:!0,"data-svelte-h":!0}),l(M)!=="svelte-1us81ah"&&(M.textContent=Ko),An=a(c),U=s(c,"P",{style:!0,"data-svelte-h":!0}),l(U)!=="svelte-19kfnrq"&&(U.textContent=Vo),Dn=a(c),X=s(c,"P",{style:!0,"data-svelte-h":!0}),l(X)!=="svelte-1kc4x8w"&&(X.textContent=Yo),In=a(c),J=s(c,"P",{style:!0,"data-svelte-h":!0}),l(J)!=="svelte-17nb89f"&&(J.innerHTML=$o),Ln=a(c),N=s(c,"P",{style:!0,"data-svelte-h":!0}),l(N)!=="svelte-13i7vub"&&(N.textContent=es),Bn=a(c),G=s(c,"P",{style:!0,"data-svelte-h":!0}),l(G)!=="svelte-1n4pi73"&&(G.textContent=ts),On=a(c),Pe=s(c,"P",{"data-svelte-h":!0}),l(Pe)!=="svelte-1tk55n4"&&(Pe.innerHTML=ns),Un=a(c),Me=s(c,"P",{"data-svelte-h":!0}),l(Me)!=="svelte-2y9he2"&&(Me.innerHTML=os),Xn=a(c),Re=s(c,"P",{"data-svelte-h":!0}),l(Re)!=="svelte-14wboki"&&(Re.textContent=ss),Jn=a(c),Q=s(c,"P",{id:!0,"data-svelte-h":!0}),l(Q)!=="svelte-1jc3qmd"&&(Q.textContent=rs),Nn=a(c),at=s(c,"PRE",{});var Ds=v(at);Gn=m(Ds,d[4]),Ds.forEach(h),Qn=a(c),_e=s(c,"P",{"data-svelte-h":!0}),l(_e)!=="svelte-r2a6lm"&&(_e.textContent=as),Wn=a(c),it=s(c,"PRE",{});var Is=v(it);Zn=m(Is,d[12]),Is.forEach(h),Kn=a(c),Te=s(c,"P",{"data-svelte-h":!0}),l(Te)!=="svelte-1n05fgy"&&(Te.textContent=is),Vn=a(c),lt=s(c,"PRE",{});var Ls=v(lt);Yn=m(Ls,d[15]),Ls.forEach(h),$n=a(c),qe=s(c,"P",{"data-svelte-h":!0}),l(qe)!=="svelte-16bl1cl"&&(qe.innerHTML=ls),eo=a(c),He=s(c,"P",{"data-svelte-h":!0}),l(He)!=="svelte-dqomyr"&&(He.textContent=cs),to=a(c),ct=s(c,"PRE",{});var Bs=v(ct);no=m(Bs,d[13]),Bs.forEach(h),oo=a(c),Ee=s(c,"P",{"data-svelte-h":!0}),l(Ee)!=="svelte-1ormilq"&&(Ee.textContent=ds),so=a(c),ze=s(c,"P",{"data-svelte-h":!0}),l(ze)!=="svelte-1rappih"&&(ze.textContent=hs),ro=a(c),R=s(c,"IMG",{src:!0,alt:!0,style:!0,class:!0}),ao=a(c),Se=s(c,"H2",{"data-svelte-h":!0}),l(Se)!=="svelte-1q8yqdi"&&(Se.textContent=ms),io=m(c,`

      This slightly modified version of M can handle both ordinary data and promises:
      
        `),dt=s(c,"PRE",{});var Os=v(dt);lo=m(Os,d[17]),Os.forEach(h),co=m(c,`

      A real time demonstration of m(dF3x) delivering promises, one by one, along with definitions of the asynchronous functions used, can be found here: `),W=s(c,"A",{href:!0,"data-svelte-h":!0}),l(W)!=="svelte-1p0qbt8"&&(W.textContent=vs),ho=m(c,` These are the composite 
funtions used in the demonstration:
    `),je=s(c,"P",{"data-svelte-h":!0}),l(je)!=="svelte-1jpsdpt"&&(je.textContent=fs),uo=a(c),Ae=s(c,"P",{"data-svelte-h":!0}),l(Ae)!=="svelte-1ob2yrm"&&(Ae.textContent=ps),mo=a(c),De=s(c,"P",{"data-svelte-h":!0}),l(De)!=="svelte-1mmc001"&&(De.textContent=gs),vo=a(c),Ie=s(c,"P",{"data-svelte-h":!0}),l(Ie)!=="svelte-1k5gx0c"&&(Ie.textContent=bs),c.forEach(h),n.forEach(h),pt=a(f),j=s(f,"A",{href:!0,"data-svelte-h":!0}),l(j)!=="svelte-1887boa"&&(j.textContent=xs),gt=a(f),w&&w.l(f),this.h()},h(){b(k,"text-align","center"),p(F,"class","svelte-11ad9vo"),p(H,"class","dis svelte-11ad9vo"),p(E,"class","play svelte-11ad9vo"),p(z,"class","dis svelte-11ad9vo"),b(S,"color","gold"),b(S,"font-size","24px"),b(S,"font-weight","bold"),p(A,"class","svelte-11ad9vo"),p(D,"class","light svelte-11ad9vo"),p(g,"class","light svelte-11ad9vo"),p(I,"class","teaser svelte-11ad9vo"),p(y,"class","teaser svelte-11ad9vo"),Us(P.src,Do=$s)||p(P,"src",Do),p(P,"alt","Image of the Rubik's cube "),b(P,"width","200px"),b(P,"height","210px"),p(P,"class","svelte-11ad9vo"),p(L,"class","teaser svelte-11ad9vo"),p(B,"class","teaser svelte-11ad9vo"),p(O,"class","teaser svelte-11ad9vo"),b(M,"color","lightgreen"),b(M,"font-size","28px"),b(M,"font-weight","bold "),b(U,"color","lightgreen"),b(X,"color","lightgreen"),b(J,"color","lightgreen"),b(N,"color","lightgreen"),b(G,"color","lightgreen"),p(Q,"id","cow7"),Us(R.src,us=er)||p(R,"src",us),p(R,"alt","Image of the Rubik's cube "),b(R,"width","200px"),b(R,"height","210px"),p(R,"class","svelte-11ad9vo"),p(W,"href","./async5"),p(i,"class","background"),b(t,"margin-left","8%"),b(t,"margin-right","8%"),p(t,"id","top"),p(j,"href","#top")},m(f,n){bt(f,t,n),e(t,k),e(t,Z),e(t,F),e(t,Be),e(t,_),e(t,K),e(t,T),e(t,Oe),e(t,q),e(t,Ue),e(t,H),e(H,Xe),e(t,Je),e(t,E),e(E,Ne),e(t,Ge),e(t,z),e(z,V),e(t,xt),e(t,Y),e(Y,yt),e(Y,S),e(S,wt),e(t,Ct),e(t,$),e(t,kt),e(t,ee),e(t,Ft),e(t,te),e(t,Pt),e(t,ne),e(t,Mt),e(t,A),e(t,Rt),e(t,_t),e(t,D),e(t,Tt),e(t,Qe),e(Qe,qt),e(t,Ht),e(t,oe),e(t,Et),e(t,se),e(t,zt),e(t,re),e(t,St),e(t,jt),e(t,At),e(t,ae),e(t,Dt),e(t,g),e(g,ie),e(g,It),e(g,We),e(We,Lt),e(g,Bt),e(g,Ze),e(Ze,Ot),e(g,Ut),e(g,le),e(g,Xt),e(g,Ke),e(Ke,Jt),e(g,Nt),e(g,Ve),e(Ve,Gt),e(g,Qt),e(g,Ye),e(Ye,Wt),e(g,Zt),e(g,$e),e($e,Kt),e(t,Vt),e(t,I),e(t,Yt),e(t,y),e(y,$t),e(y,en),e(y,tn),e(y,ce),e(y,nn),e(y,et),e(et,on),e(y,sn),e(y,de),e(y,rn),e(t,an),e(t,he),e(t,ln),e(t,tt),e(tt,cn),e(t,dn),e(t,ue),e(t,hn),e(t,nt),e(nt,un),e(t,mn),e(t,me),e(t,vn),e(t,ot),e(ot,fn),e(t,pn),e(t,ve),e(t,gn),e(t,fe),e(t,bn),e(t,P),e(t,xn),e(t,pe),e(t,yn),e(t,ge),e(t,wn),e(t,be),e(t,Cn),e(t,st),e(st,kn),e(t,Fn),e(t,xe),e(t,Pn),e(t,L),e(t,Mn),e(t,ye),e(t,Rn),e(t,we),e(t,_n),e(t,B),e(t,Tn),e(t,Ce),e(t,qn),e(t,rt),e(rt,Hn),e(t,En),e(t,ke),e(t,zn),e(t,Fe),e(t,Sn),e(t,O),e(t,jn),e(t,i),e(i,M),e(i,An),e(i,U),e(i,Dn),e(i,X),e(i,In),e(i,J),e(i,Ln),e(i,N),e(i,Bn),e(i,G),e(i,On),e(i,Pe),e(i,Un),e(i,Me),e(i,Xn),e(i,Re),e(i,Jn),e(i,Q),e(i,Nn),e(i,at),e(at,Gn),e(i,Qn),e(i,_e),e(i,Wn),e(i,it),e(it,Zn),e(i,Kn),e(i,Te),e(i,Vn),e(i,lt),e(lt,Yn),e(i,$n),e(i,qe),e(i,eo),e(i,He),e(i,to),e(i,ct),e(ct,no),e(i,oo),e(i,Ee),e(i,so),e(i,ze),e(i,ro),e(i,R),e(i,ao),e(i,Se),e(i,io),e(i,dt),e(dt,lo),e(i,co),e(i,W),e(i,ho),e(i,je),e(i,uo),e(i,Ae),e(i,mo),e(i,De),e(i,vo),e(i,Ie),bt(f,pt,n),bt(f,j,n),bt(f,gt,n),w&&w.m(f,n),Le=!0},p(f,n){w&&w.p&&(!Le||n[0]&524288)&&Gs(w,fo,f,f[19],Le?Ws(fo,f[19],n,null):Qs(f[19]),null)},i(f){Le||(Vs(w,f),Le=!0)},o(f){Ys(w,f),Le=!1},d(f){f&&(h(t),h(pt),h(j),h(gt)),w&&w.d(f)}}}var Xs="m(dF3x)  // 3";function nr(d,t,k){let{$$slots:ht={},$$scope:Z}=t;var F=`    function M (x) {
      return function go (func)`,ut=`      {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }`,Be="    }";let _=`  function F(ar) {
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
  } `;var K=`const b0 = 'blue';
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

  var m = M([bb, gg, rr, oo, yy, ww]);`;const mt=`      <div class="face front">
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
      </div>`;var K=`const b0 = 'blue';
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

  var m = M([bb, gg, rr, oo, yy, ww]);`,T="M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10",vt="m = M(3)",Oe="m(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)",q="m(dF3x)  // 10",ft="m(v=>v+4)(v=>v*3)  // Now x in the m-M(x) closure is 42",Ue="m(dF3x) // 42",H=`      .blue {
          height: 60px;
          width: 60px;
          background-color: lightblue;
          display: inline;
          border-radius: 10px;
      }`,Xe=`  const R = function R(ar) {
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
  }`,Je=`.blue {
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
  }`,E=`<div id="steady">
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
</div>`,Ne=`function handleEvent(e) { 
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
  }`,Ge=`function M (x) {
          return function go (func){
            if (func === dF3x) return x;
            else x = idP(x).then(v => func(v));
            return go;
          }
        }`,z="dF3x = () => {}";return d.$$set=V=>{"$$scope"in V&&k(19,Z=V.$$scope)},[F,ut,Be,_,K,mt,T,vt,Oe,q,ft,Ue,H,Xe,Je,E,Ne,Ge,z,Z,ht]}class rr extends Zs{constructor(t){super(),Ks(this,t,nr,tr,Js,{},null,[-1,-1])}}export{rr as component};
