import{s as Ts,c as Ps,u as qs,g as Rs,d as Hs}from"../chunks/scheduler.1f6706a1.js";import{S as Es,i as Is,g as t,s as o,m as v,h as n,j as f,x as i,c as r,n as g,f as m,l as w,k as C,a as Lt,y as e,d as Ss,t as Ls}from"../chunks/index.2d48075f.js";const zs=""+new URL("../assets/passBy.52308f62.png",import.meta.url).href,Ds=""+new URL("../assets/object.b2d12053.png",import.meta.url).href;function js(c){let h,_,qt="Recursive Closures",Y,F,Rt=`Closures defined by letting m = M(x) for some variable &quot;m&quot; and any value &quot;x&quot;
    (see below) are recursive in the sense that: <br/>
    (A) the inner function, named &quot;go&quot;, repeatedly calls itself, and <br/>
    (B) go repeatedly modifies &quot;x&quot; by means of varying functions &quot;func&quot; which are:<br/>
        (1) currently queued in front of the copy of go named &quot;m&quot;,
    <br/>
        (2) provided later if the current value of &quot;x&quot; is still alive
    in memory; i.e., if the program in which &quot;m&quot; is defined is still running. or
    <br/>
        (3) the current value of x is preserved in permanent storage.`,Xe,q,Ht="Regarding the last item and x retrieved from storage: If m is defined, then <span>`m(()=&gt;x)(newFunc1)(newFunc2)</span> ... Otherwise, redefine m with &quot;m = M(x) using the most recent value of x.",Ye,R,Ze,Z,H,Qe,et,E,tt,nt,T,ot="Anonymous Computation:",rt,D,st,at,Q,zt,y,ee,Uo="Encapsulated State:",Dt,it,jt,At,lt,Ot,Nt,te,Bo="Sometime later (the garbage collector ignores closures):",Ut,ct,Bt,Wt,dt,Vt,Gt,ht,$t,Jt,ut,Kt,Xt,j,Wo="Rubik's Cube Simulation",Yt,A,Vo=`***********************************************************************
    <br/>
    Case 1 -- Clicking on the three visible sides of the cube.`,Zt,ne,Go=`The visible cube interface gives access to all six sides. Clicking the
    center of each face causes rotation of the whole cube around the axis
    perpendicular to that center. Everything moves except for clicked center and
    its counterpart on the opposite side`,Qt,oe,$o=`x in the Rubik's cube application is an array of six nine-member arrays of
    references to the strings "blue, green, red, orange, yellow, and white."
    These strings correspond to the names of CSS selectors, and the
    "background-color" properties of each. Here's what I mean:`,en,mt,tn,nn,re,Jo=`The 54 divs that combine to represent the cube in the DOM are shown below.
    The visual representation that appears in the browser is on the next page, <a href="./cube7">Rubik&#39;s cube</a>`,on,se,Ko=`Notice that the front, top, and right side representations contain buttons.
    Go to <a href="./cube7">Rubik&#39;s cube</a>, click the &quot;Start&quot; button or press
    the &#39;V&#39; key to restore the cube to it to the &quot;solved&quot; configuration, then
    click the upper left corner of the right side of the cube. The right face
    rotates counterclockwise 90 degrees pursuant to the &quot;on:click&quot; instruction
    seen in the DOM representation (below). &quot;m = m(Rz)&quot; executes. &quot;m(Rz)&quot;
    updates x in the m-M(x) closure; the &quot;m =&quot; part triggers reactivity, causing
    the update to immediately appear in the browser.&quot;`,rn,ae,Xo=`Now click on the top center three times. The right side should be green now.
    Rotate the right side counterclockwise by clicking on its upper left corner.
    Now click the top center once to restore the cube to its original
    orientation.`,sn,s,an,ie,Yo=`This section is about clicking on cube image, but when we get to it later,
      you will see that pressing the "R" key or clicking the button labeled "R"
      rotates whatever face happens to be on the right when the "R" key is
      pressed.or the "R" button is clicked.`,ln,Et,cn,ft,dn,hn,O,Zo=`***********************************************************************
      <br/>
      Case 2 -- Clicking on the buttons.`,un,le,Qo=`Similar to clicking on parts of the cube, the callback specified in
      buttons that rotate faces, middle sections, and the entire cube do so by
      calling m(func) for some function "func" that rearranges arrays of six
      nine-element arrays. This results in x mutating into fu on the same
      functions that are invoked when the the click is on a section of the cube.
      For example,`,mn,pt,fn,pn,N,er=`***********************************************************************
      <br/>
      Case 3 -- Key presses.`,vn,ce,tr=`Pressing keys invokes eventHandler(e) where "e" is the key-press event and
      eventHandler is defined as follows:`,gn,vt,bn,xn,de,nr=`"svelte:window on:keypress = { handleEvent } " routes keyPress
      event objects to handleEvent.`,yn,he,or=`The <a href="./cube7">Rubik&#39;s Cube simulation</a> features a m-M(x)
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
      section provides function definitions, and nothing more.`,wn,U,rr="***********************************************************************",Cn,l,P,sr="Background:",kn,B,ar=`Indiana University awarded me a bachelor of science degree in chemistry,
        a master's degree in mathematics, and a doctor of jurisprudence degree
        in law. Sun Microsysystems certified me as a Java Programmer and Java
        Website Developer, which qualified me for a job I took at Indiana
        University, working on a project as a Programmer/Systems Analyst. I got the certifications and entry-level position at I.U. because I believed my doctor when he told me he couldn't refer me to the liver transplant clinic in Indianapolis unless I got "good" insurance coverage, the kind provided by Indiana University to its employees. I didn't know about Indiana's high risk insurance program, which I could have afforded continuing to practice law. The cost was around $1000.00 per month. It was Indiana's way of guaranteeing health care for the middle class and less affluent people with benefactors willing to pay their premiums.`,Mn,W,ir="Back in the 1980s, I learned to contact online bulletin boards over the telephone. In 1995, I learned some JavaScript playing around with the amazing Netscape Navigator browser. Then I learned to use some web application frameworks for my law practice website. Programming fascinated me, and over the years I learned to write simple programs in numerous languages. My very first language was Fortran, which I learned in college while working on my bachelor's degree in chemistry.",_n,V,lr='My son, Alexander, enjoyed a dice game called &quot;score&quot; that he learned in school, so I developed an online, multi-player version in the Haskell programming language. Users can modify the game and prompt it to display any and all possible solutions. I found a binary version I compiled with the Glasgow Haskell Compiler (GHC) in 2014. It runs online at http://schalk2:3055. There isn&#39;t a working secure version. https://score.schalk2.com loads the login screen, but goes no further than that. Here&#39;s a link: <a href="http://schalk2.com:3055" target="_blank">Game of score</a>. The code is at <a href="https://github.com/dschalk/score2">https://github.com/dschalk/score2</a>',Fn,G,cr=`I'll never again get involved in a Java project and I can't imagine ever
        again needing React. After developing an elaborate online multi-player
        game in the Haskel programming language, still using React for the user
        interface, I decided to stick with JavaScript and simple frameworks.
        This is a SvelteKit application.`,Tn,$,dr=`While it makes sense to develop web applications with a few elaborate
        functions in conjunction with reusable small ones, I decided to try the
        opposite approach. What I discovered is worth sharing, to say the least,
        so here it is.`,Pn,ue,hr=`The code samples at the top of this page shows that function composition
        using M can&#39;t be more transparent, concise, and maintainable. Going
        beyond numerical computations, M holds the ever-changing state of play
        in the<a href="./score">Game of Score</a>, but that application relies
        too heavily on the functions that transform x in the m-M(x) closure. A
        modified version of M will make the code more efficient and
        understandable after I refactor the application.`,qn,me,ur=`A few additional lines of code in M can facilitate nesting of mixed
        synchronous and asynchronous functions handled by m, and can help avoid
        mutations by providing an array, let&#39;s call it &quot;ar&quot;, into which f(x)
        (which runds after m(f)) can be pushed, and having dF3x prompt the
        return of ar.slice(-1)[0] when f === dF3x. But enough of the small
        stuff, now it&#39;s time to show m-M(x) closures in all their glory, deftly
        making complex applications work while they do nothing but allow the
        function m to transform them by means of the functions m fetches. The <a href="./cube7">Simulated Rubik&#39;s cube</a> is a case in point.`,Rn,fe,mr=`The array x in the m-M(x) Rubik's cube array is an array consisting of
        six nine-member arrays of references to the strings "blue, green, red,
        orange, yellow and white." Functions called in response to DOM key
        presses and mouse clicks rearrange these strings, which are the names of
        CSS classes whose "background-color" properties match the names of the
        selectors that contain them. For example, the CSS class "blue" contains
        the line, "background-color: "blue".`,Hn,J,fr=`To understand the interface between the m-M(x) representation of the
        cube with the 54 colored divs in the DOM, we first need to know how x in
        the closure is defined. Here it is:`,En,gt,In,Sn,pe,pr=`m(dF3x)[0][0] on the solved cube representation in the DOM is a div with
        class = "blue". Here's blue's definition:`,Ln,bt,zn,Dn,ve,vr=`Below is the cube representation in the DOM. Notice how the colors
        corresponds with the image in the monitor -- orange in front m(dF3x)[3],
        blue on the side m(dF3x)[0], and yellow on top (m(dF3x)[4]).`,jn,xt,An,On,ge,gr=`<a href="./cube7#cow8">This link</a> takes you to a demonstration driving
        home the point that the mere rearrangement of x in the m-M(x) closure, along
        with a self-reference of m to m, is sufficient to trigger reactivity in Svelte.
        It also shows that the only heavy lifting, such that it is, consists of rearranging
        references to strings. The 54 divs that constitute the DOM representation
        remain stationary.`,Nn,be,br=`When you press "r", click the "R" button, or click the upper leift
        corner of the right side of the cube representation, the function 'R' is
        called on the array of six arrays of references to strings in the m-M(x)
        closure. The current configuration of x in the closure is of no concern
        to 'R'. It rearranges the strings based solely on their positions -- 54
        positions, ranging from m(dF3x)[0][0] to m(dF3)[5][8].`,Un,xe,xr=`R specifies that whatever string reference happens to be in position
        m(dF3x)[3][2] changes to whatever string reference happens to be in
        position m(dF3x)[5][2]. If the cube is in its starting configuration
        (solved, prior to scrambling), the upper right front corner will go from
        orange to white. Beyond that, we know nothing about the color of the
        front upper right corner before or after m(R) runs. The class will
        change to the whatever the class of the div in the front upper right
        corner (m(dF3x)(5)(2)) happens to be, but the background-color of that
        class might be whatever the background color of m(dF3x)(3)(2) happens to
        be. Here's the definition of R:`,Bn,yt,Wn,Vn,ye,yr=`When R returns temp, the transformation of x completes. It's new value
        is temp since x = Func(x) and Func is R in this instance.`,Gn,we,wr="STOP",$n,Ce,Cr="This is where the revision ends.",Jn,ke,kr=`The <a href="./cube7">Simulated Rubik&#39;s cube</a> page has gone through improvements,
        including code refactoring, that render much of its text incorrect -- but
        the cube itself works like a charm. Here&#39;s an explanation of the code, beginning
        with the interface between the closure holding the array of six nine-member
        arrays of references to the strings &quot;blue, green, red, orange, yellow, and
        white&quot; and the div containing six nine-member arrays of divs. The strings
        in the representation are the names of CSS classes with background-color
        entries corresponding to their names.`,Kn,Me,Mr=`The code samples at the top of this page show that function composition
        using M can&#39;t be more transparent, concise, and maintainable. When I get
        around to it, I&#39;ll show how slight modification of M facilitate nesting
        of mixed synchronous and asynchronous handled by m, and how, when x is
        an array, pushing modifications onto it can avoid mutations. The code is
        tested and good to to, but it&#39;s time now to show m-M(x) closures
        handling larger applications. There&#39;s the <a href="./score">Game of Score</a>
        and my current project, <a href="./cube7">Simulated Rubik&#39;s cube</a>.`,Xn,_e,_r=`Key press and mouse click events call eventHandler(e) where e is an
        object containing an integer named keyCode. If eventHandler contains an
        object with a keyCode number matching keyCode in e, m(f) is called where
        f is a function that rearranges resides response to events initiated in
        the DOM.`,Yn,Fe,Fr=`Events initiated by user key presses and clicks cause eventHandler() to
        call m on functions that operate on arrays of six nine-member arrays.`,Zn,Te,Tr=`The following discussion centers around the function M (defined below),
      along with closures of the form m-M(x), where m = M(x) and x can be any
      JavaScript value.`,Qn,Pe,Pr=`M can, of course, be modified to include try-catch blocks, objects, or
      anything else. Modification of M in this presentation are small. The
      functions provided to m are responsible for turning the six sides and
      three middle sections of the cube.`,eo,qe,qr=`The simulated Rubik's cube example follows the convention of creating an
      application's main closure by calling "m = M(x)", where x can be any
      value, and r-erring to the result as "the m-M(x) closure." "x" is
      encapsulated, sequestered from everything outside the closure's scope. As
      is apparent from the definition of M (below_), 'x' can be modified by
      calling m(func) for some function "func". In the simplest version of "M",
      calling m(func) mutates "x," changing it from x to func(x).`,to,Re,Rr=`<span style="color:yellow; font-weight:bold">CAUTION</span> as will be
      extensively discussed on this page, m(dF3x) is a reference to &#39;x&#39; in the
      closure unless the line in M,
      <span class="O svelte-7c47tb">if (func === dF3x) return x;</span>
      is changed to <span class="O svelte-7c47tb">if (func === dF3x) return clone(x)</span> for
      some function &quot;clone&quot; that returns a perfect duplicate of &#39;x&#39; with an address
      in memory different from that of &#39;x&#39;. More about that later. First, here&#39;s
      the definition M and some examples of m-M(x) closures:`,no,He,Hr=`The <a href="./score#mDef">Solitaire Game of Score</a> involves using two six-sided,
      one twelve-sided, and one twenty-sided die along with arithmetic and concatenation
      to arrive at the number 20 in two or more moves. The initial value of &quot;x&quot; in
      the m-M(x) closure is shown in the definition of m2:`,oo,Ee,Er=`m2 = M([ 
    [Math.floor(Math.random() * 6)   + 1, Math.floor(Math.random() * 6) + 1,
     Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
     [], ['+'], [], [0], [], [0], [] 
]);`,ro,Ie,Ir="The Simulated Rubik's Cube",so,Se,Sr=`The <a href="./cube7">simulated Rubik&#39;s cube</a> is another example of a fairly
      complex application whose state is maintained in a tiny closure. The bare bones
      M shown above can handle the transformations of the cube, from keystroke or
      button click to the result seen in the browser. But, in order to facilitate
      taking back a series of moves, an array of references to every argument provided
      to m was added.`,ao,K,Lr="The Code Directly Responsible for the Browser Display",io,Le,zr=`In the DOM, the simulated Rubik's cube consists of 6 groups of 9 Div
      elements. User moves rearrange classes. Cubies change color when they are
      assigned a class with a different background`,lo,ze,Dr=`Those arguments are functions that operate on x in the m-M(x) closure;
      i.e., that operate on <span style="color: orange">[ bb, gg, rr, oo, yy, ww ]</span>, the array that determines the background colors of the 54 divs in the
      DOM, thereby controling the configuration of the cube displayed in the
      browser. When an array was added to the definition of M, the original M
      was renamed M2. Here&#39;s the complete definition of m in the m-M(x) closure,
      beginning with the revised definition of M:`,co,wt,ho,uo,Ct,mo,fo,De,jr=`As the line &quot;else x = func(x);&quot; in the definition of M indicates, m(func)
      causes func(x) to replace x in the m-M(x) closure unless func is dF3x or
      dF3ar. Pressing the &quot;r&quot; key or clicking on the &quot;R&quot; rotates the right side
      of the cube clockwise a quarter turn. See how it uses the elements of the
      current configuration (named &quot;ar&quot;) of <span style="color: orange">[ bb, gg, rr, oo, yy, ww ]</span> as a source of building blocks to assemble the updated configuration, named
      &quot;temp.&quot;`,po,kt,vo,go,je,Ar=`The functions that manipulate the cube have numerous lines of code, but
      they are as simple as they could possibly be. They don't rely on
      procedures to determine what goes where during the construction of "temp",
      they are just instructions specifying the new locations of the elements of
      the array held in the m-M(x) closure. While not organized in tabular form,
      they are essentially items in a lookup table.`,bo,Ae,Or=`If the meanings of passing by value and passing by reference is clear, as
      I'm sure it is for many of you, reading the rest of this section on the
      Rubik's cube simulator might be tedious. For those who are still a little
      unsure, I hope reading this will be the breakthrough that clarifies it
      once and for all.`,xo,Oe,Nr=`With moves stored in ar, setting the cube configuration back to where it
      was prior to the most recent move requires nothing more than the three
      short lines of code in the function "reverse". When m(dF3ar) is modified
      in reverse, 'x' is simultaneously modified in the m-M(x) closure. This is
      because both 'x' and m(dF3ar) are references to the same address in
      memory. Change what is stored at that address with either one, and that
      will be the value of both 'x' and 'm(dF3ar) and any other variable that
      happens to point to that location.`,yo,Mt,wo,Co,Ne,Ur=`m(dF3ar) is a reference to ar in the m-M(x) closure, so reverse() shortens
      the length of ar inside the closure. Very little browser memory is needed
      to store the information necessary to reverse hundreds of moves. Making
      moves is not resource intensive either. A move doesn't rearrange the div
      elements of the cube or rotate numerous little cubits, as is the case with
      many Rubik's cube simulators. All it does is rearrange the placement of
      the strings (names of colors) referring to some CSS classes.`,ko,Ue,Br=`The reverse function is oblivious to precisely which functions were
      responsible for the transformations being reversed. Whatever the function
      at the top of the list happens to be, it runs three more times. After foo
      executes, it and the function that was reversed are discarded, making the
      list one item shorter than it was.`,Mo,I,Wr=`<img class="display_image svelte-7c47tb" src="${zs}"/>`,_o,S,Vr=`<p>Distinguishing between passing by value (primitives) and passing by
        reference (objects) is a stumbling block for people new to JavaScript.
        It&#39;s important to know that string, number, bigint, boolean, undefined,
        symbol, and null are the primitive values. All other values are down the
        prototype chain from Object and are, therefore, objects. Here&#39;s
        verification that a simple function is an object:</p>`,Fo,L,Gr=`<img class="display_image svelte-7c47tb" src="${Ds}"/>`,To,p,Be,$r='See "prototype: Object" at the bottom of the right side.',Po,_t,qo,We,Jr="Elementary Facts and Examples",Ro,Ve,Kr=`M can serve as the outer scope for multiple orthogonal (non-interacting)
        functions, with structures identical to M's "go()". For example:`,Ho,Ft,Eo,Io,X,Xr='"M" facilitates function composition.',So,Ge,Yr="Garbage collectors should delete this.",Lo,Tt,zo,Do,$e,Zr=`The value "x" in the m-M(x) closure persists until m is redefined or
        deleted.`,jo,Pt,Ao,Oo,Je,Qr='Recommended Reading: <a href="https://www.youtube.com/playlist?list=PLillGF-Rfqbars4vKNtpcWVDUpVOVTlgB">Javascript Under the Hood</a>',It,z,es="Go to cow7",St,Ke;const No=c[22].default,M=Ps(No,c,c[21],null);return{c(){h=t("div"),_=t("h1"),_.textContent=qt,Y=o(),F=t("span"),F.innerHTML=Rt,Xe=o(),q=t("p"),q.innerHTML=Ht,Ye=o(),R=t("pre"),Ze=v(c[0]),Z=o(),H=t("pre"),Qe=v(c[1]),et=o(),E=t("pre"),tt=v(c[2]),nt=o(),T=t("dist"),T.textContent=ot,rt=o(),D=t("pre"),st=v(c[10]),at=o(),Q=t("br"),zt=o(),y=t("div"),ee=t("span"),ee.textContent=Uo,Dt=o(),it=t("pre"),jt=v(c[11]),At=o(),lt=t("pre"),Ot=v(Fs),Nt=o(),te=t("span"),te.textContent=Bo,Ut=o(),ct=t("pre"),Bt=v(c[12]),Wt=o(),dt=t("pre"),Vt=v(c[13]),Gt=o(),ht=t("pre"),$t=v(c[14]),Jt=o(),ut=t("pre"),Kt=v(c[15]),Xt=o(),j=t("span"),j.textContent=Wo,Yt=o(),A=t("span"),A.innerHTML=Vo,Zt=o(),ne=t("p"),ne.textContent=Go,Qt=o(),oe=t("p"),oe.textContent=$o,en=o(),mt=t("pre"),tn=v(c[17]),nn=o(),re=t("p"),re.innerHTML=Jo,on=o(),se=t("p"),se.innerHTML=Ko,rn=o(),ae=t("p"),ae.textContent=Xo,sn=o(),s=t("span"),an=v("Digression: "),ie=t("p"),ie.textContent=Yo,ln=o(),Et=t("p"),cn=o(),ft=t("pre"),dn=v(c[18]),hn=o(),O=t("span"),O.innerHTML=Zo,un=o(),le=t("p"),le.textContent=Qo,mn=o(),pt=t("pre"),fn=v(c[19]),pn=o(),N=t("span"),N.innerHTML=er,vn=o(),ce=t("p"),ce.textContent=tr,gn=o(),vt=t("pre"),bn=v(c[20]),xn=o(),de=t("p"),de.textContent=nr,yn=o(),he=t("p"),he.innerHTML=or,wn=o(),U=t("span"),U.textContent=rr,Cn=o(),l=t("div"),P=t("p"),P.textContent=sr,kn=o(),B=t("p"),B.textContent=ar,Mn=o(),W=t("p"),W.textContent=ir,_n=o(),V=t("p"),V.innerHTML=lr,Fn=o(),G=t("p"),G.textContent=cr,Tn=o(),$=t("p"),$.textContent=dr,Pn=o(),ue=t("p"),ue.innerHTML=hr,qn=o(),me=t("p"),me.innerHTML=ur,Rn=o(),fe=t("p"),fe.textContent=mr,Hn=o(),J=t("p"),J.textContent=fr,En=o(),gt=t("pre"),In=v(c[9]),Sn=o(),pe=t("p"),pe.textContent=pr,Ln=o(),bt=t("pre"),zn=v(c[16]),Dn=o(),ve=t("p"),ve.textContent=vr,jn=o(),xt=t("pre"),An=v(c[18]),On=o(),ge=t("p"),ge.innerHTML=gr,Nn=o(),be=t("p"),be.textContent=br,Un=o(),xe=t("p"),xe.textContent=xr,Bn=o(),yt=t("pre"),Wn=v(c[6]),Vn=o(),ye=t("p"),ye.textContent=yr,Gn=o(),we=t("h1"),we.textContent=wr,$n=o(),Ce=t("p"),Ce.textContent=Cr,Jn=v(`
      paypal card denominations

      `),ke=t("p"),ke.innerHTML=kr,Kn=o(),Me=t("p"),Me.innerHTML=Mr,Xn=o(),_e=t("p"),_e.textContent=_r,Yn=o(),Fe=t("p"),Fe.textContent=Fr,Zn=o(),Te=t("p"),Te.textContent=Tr,Qn=o(),Pe=t("p"),Pe.textContent=Pr,eo=o(),qe=t("p"),qe.textContent=qr,to=o(),Re=t("p"),Re.innerHTML=Rr,no=o(),He=t("p"),He.innerHTML=Hr,oo=o(),Ee=t("pre"),Ee.textContent=Er,ro=o(),Ie=t("h2"),Ie.textContent=Ir,so=o(),Se=t("p"),Se.innerHTML=Sr,ao=o(),K=t("h3"),K.textContent=Lr,io=o(),Le=t("p"),Le.textContent=zr,lo=o(),ze=t("p"),ze.innerHTML=Dr,co=o(),wt=t("pre"),ho=v(c[8]),uo=o(),Ct=t("pre"),mo=v(c[9]),fo=o(),De=t("p"),De.innerHTML=jr,po=o(),kt=t("pre"),vo=v(c[6]),go=o(),je=t("p"),je.textContent=Ar,bo=o(),Ae=t("p"),Ae.textContent=Or,xo=o(),Oe=t("p"),Oe.textContent=Nr,yo=o(),Mt=t("pre"),wo=v(c[7]),Co=o(),Ne=t("p"),Ne.textContent=Ur,ko=o(),Ue=t("p"),Ue.textContent=Br,Mo=o(),I=t("div"),I.innerHTML=Wr,_o=o(),S=t("div"),S.innerHTML=Vr,Fo=o(),L=t("div"),L.innerHTML=Gr,To=o(),p=t("div"),Be=t("p"),Be.textContent=$r,Po=o(),_t=t("a"),qo=o(),We=t("h1"),We.textContent=Jr,Ro=o(),Ve=t("p"),Ve.textContent=Kr,Ho=o(),Ft=t("pre"),Eo=v(c[3]),Io=o(),X=t("h3"),X.textContent=Xr,So=o(),Ge=t("p"),Ge.textContent=Yr,Lo=o(),Tt=t("pre"),zo=v(c[4]),Do=o(),$e=t("p"),$e.textContent=Zr,jo=o(),Pt=t("pre"),Ao=v(c[5]),Oo=o(),Je=t("p"),Je.innerHTML=Qr,It=o(),z=t("a"),z.textContent=es,St=o(),M&&M.c(),this.h()},l(b){h=n(b,"DIV",{style:!0});var u=f(h);_=n(u,"H1",{style:!0,"data-svelte-h":!0}),i(_)!=="svelte-mpxol8"&&(_.textContent=qt),Y=r(u),F=n(u,"SPAN",{class:!0,"data-svelte-h":!0}),i(F)!=="svelte-43ixzb"&&(F.innerHTML=Rt),Xe=r(u),q=n(u,"P",{"data-svelte-h":!0}),i(q)!=="svelte-1rd48nt"&&(q.innerHTML=Ht),Ye=r(u),R=n(u,"PRE",{class:!0});var ts=f(R);Ze=g(ts,c[0]),ts.forEach(m),Z=r(u),H=n(u,"PRE",{class:!0});var ns=f(H);Qe=g(ns,c[1]),ns.forEach(m),et=r(u),E=n(u,"PRE",{class:!0});var os=f(E);tt=g(os,c[2]),os.forEach(m),nt=r(u),T=n(u,"DIST",{class:!0,"data-svelte-h":!0}),i(T)!=="svelte-1mq2aot"&&(T.textContent=ot),rt=r(u),D=n(u,"PRE",{});var rs=f(D);st=g(rs,c[10]),rs.forEach(m),at=r(u),Q=n(u,"BR",{}),zt=r(u),y=n(u,"DIV",{class:!0});var k=f(y);ee=n(k,"SPAN",{"data-svelte-h":!0}),i(ee)!=="svelte-1xp33cu"&&(ee.textContent=Uo),Dt=r(k),it=n(k,"PRE",{});var ss=f(it);jt=g(ss,c[11]),ss.forEach(m),At=r(k),lt=n(k,"PRE",{});var as=f(lt);Ot=g(as,Fs),as.forEach(m),Nt=r(k),te=n(k,"SPAN",{"data-svelte-h":!0}),i(te)!=="svelte-krlx4g"&&(te.textContent=Bo),Ut=r(k),ct=n(k,"PRE",{});var is=f(ct);Bt=g(is,c[12]),is.forEach(m),Wt=r(k),dt=n(k,"PRE",{});var ls=f(dt);Vt=g(ls,c[13]),ls.forEach(m),Gt=r(k),ht=n(k,"PRE",{});var cs=f(ht);$t=g(cs,c[14]),cs.forEach(m),Jt=r(k),ut=n(k,"PRE",{});var ds=f(ut);Kt=g(ds,c[15]),ds.forEach(m),k.forEach(m),Xt=r(u),j=n(u,"SPAN",{class:!0,"data-svelte-h":!0}),i(j)!=="svelte-1kemneu"&&(j.textContent=Wo),Yt=r(u),A=n(u,"SPAN",{class:!0,"data-svelte-h":!0}),i(A)!=="svelte-1m5xeh6"&&(A.innerHTML=Vo),Zt=r(u),ne=n(u,"P",{"data-svelte-h":!0}),i(ne)!=="svelte-15jm8w5"&&(ne.textContent=Go),Qt=r(u),oe=n(u,"P",{"data-svelte-h":!0}),i(oe)!=="svelte-1dvpdqe"&&(oe.textContent=$o),en=r(u),mt=n(u,"PRE",{});var hs=f(mt);tn=g(hs,c[17]),hs.forEach(m),nn=r(u),re=n(u,"P",{"data-svelte-h":!0}),i(re)!=="svelte-8cvcfg"&&(re.innerHTML=Jo),on=r(u),se=n(u,"P",{"data-svelte-h":!0}),i(se)!=="svelte-8tet7v"&&(se.innerHTML=Ko),rn=r(u),ae=n(u,"P",{"data-svelte-h":!0}),i(ae)!=="svelte-1jp8yo9"&&(ae.textContent=Xo),sn=r(u),s=n(u,"SPAN",{style:!0});var a=f(s);an=g(a,"Digression: "),ie=n(a,"P",{"data-svelte-h":!0}),i(ie)!=="svelte-1jsuhqy"&&(ie.textContent=Yo),ln=r(a),Et=n(a,"P",{}),f(Et).forEach(m),cn=r(a),ft=n(a,"PRE",{});var us=f(ft);dn=g(us,c[18]),us.forEach(m),hn=r(a),O=n(a,"SPAN",{class:!0,"data-svelte-h":!0}),i(O)!=="svelte-7v2gj1"&&(O.innerHTML=Zo),un=r(a),le=n(a,"P",{"data-svelte-h":!0}),i(le)!=="svelte-d2x6fh"&&(le.textContent=Qo),mn=r(a),pt=n(a,"PRE",{});var ms=f(pt);fn=g(ms,c[19]),ms.forEach(m),pn=r(a),N=n(a,"SPAN",{class:!0,"data-svelte-h":!0}),i(N)!=="svelte-kozoi1"&&(N.innerHTML=er),vn=r(a),ce=n(a,"P",{"data-svelte-h":!0}),i(ce)!=="svelte-115h0va"&&(ce.textContent=tr),gn=r(a),vt=n(a,"PRE",{});var fs=f(vt);bn=g(fs,c[20]),fs.forEach(m),xn=r(a),de=n(a,"P",{"data-svelte-h":!0}),i(de)!=="svelte-16gky82"&&(de.textContent=nr),yn=r(a),he=n(a,"P",{"data-svelte-h":!0}),i(he)!=="svelte-zzj0dz"&&(he.innerHTML=or),wn=r(a),U=n(a,"SPAN",{class:!0,"data-svelte-h":!0}),i(U)!=="svelte-1a8jbkd"&&(U.textContent=rr),Cn=r(a),l=n(a,"DIV",{class:!0});var d=f(l);P=n(d,"P",{style:!0,"data-svelte-h":!0}),i(P)!=="svelte-deyoys"&&(P.textContent=sr),kn=r(d),B=n(d,"P",{style:!0,"data-svelte-h":!0}),i(B)!=="svelte-19kfnrq"&&(B.textContent=ar),Mn=r(d),W=n(d,"P",{style:!0,"data-svelte-h":!0}),i(W)!=="svelte-1kc4x8w"&&(W.textContent=ir),_n=r(d),V=n(d,"P",{style:!0,"data-svelte-h":!0}),i(V)!=="svelte-17nb89f"&&(V.innerHTML=lr),Fn=r(d),G=n(d,"P",{style:!0,"data-svelte-h":!0}),i(G)!=="svelte-13i7vub"&&(G.textContent=cr),Tn=r(d),$=n(d,"P",{style:!0,"data-svelte-h":!0}),i($)!=="svelte-1n4pi73"&&($.textContent=dr),Pn=r(d),ue=n(d,"P",{"data-svelte-h":!0}),i(ue)!=="svelte-11qf2a9"&&(ue.innerHTML=hr),qn=r(d),me=n(d,"P",{"data-svelte-h":!0}),i(me)!=="svelte-2y9he2"&&(me.innerHTML=ur),Rn=r(d),fe=n(d,"P",{"data-svelte-h":!0}),i(fe)!=="svelte-14wboki"&&(fe.textContent=mr),Hn=r(d),J=n(d,"P",{id:!0,"data-svelte-h":!0}),i(J)!=="svelte-1jc3qmd"&&(J.textContent=fr),En=r(d),gt=n(d,"PRE",{});var ps=f(gt);In=g(ps,c[9]),ps.forEach(m),Sn=r(d),pe=n(d,"P",{"data-svelte-h":!0}),i(pe)!=="svelte-r2a6lm"&&(pe.textContent=pr),Ln=r(d),bt=n(d,"PRE",{});var vs=f(bt);zn=g(vs,c[16]),vs.forEach(m),Dn=r(d),ve=n(d,"P",{"data-svelte-h":!0}),i(ve)!=="svelte-1n05fgy"&&(ve.textContent=vr),jn=r(d),xt=n(d,"PRE",{});var gs=f(xt);An=g(gs,c[18]),gs.forEach(m),On=r(d),ge=n(d,"P",{"data-svelte-h":!0}),i(ge)!=="svelte-10k2eny"&&(ge.innerHTML=gr),Nn=r(d),be=n(d,"P",{"data-svelte-h":!0}),i(be)!=="svelte-yp0kv4"&&(be.textContent=br),Un=r(d),xe=n(d,"P",{"data-svelte-h":!0}),i(xe)!=="svelte-1cuf12l"&&(xe.textContent=xr),Bn=r(d),yt=n(d,"PRE",{});var bs=f(yt);Wn=g(bs,c[6]),bs.forEach(m),Vn=r(d),ye=n(d,"P",{"data-svelte-h":!0}),i(ye)!=="svelte-1n96bqf"&&(ye.textContent=yr),Gn=r(d),we=n(d,"H1",{"data-svelte-h":!0}),i(we)!=="svelte-squptw"&&(we.textContent=wr),$n=r(d),Ce=n(d,"P",{"data-svelte-h":!0}),i(Ce)!=="svelte-1wdccrv"&&(Ce.textContent=Cr),Jn=g(d,`
      paypal card denominations

      `),ke=n(d,"P",{"data-svelte-h":!0}),i(ke)!=="svelte-tojbup"&&(ke.innerHTML=kr),Kn=r(d),Me=n(d,"P",{"data-svelte-h":!0}),i(Me)!=="svelte-15772xe"&&(Me.innerHTML=Mr),Xn=r(d),_e=n(d,"P",{"data-svelte-h":!0}),i(_e)!=="svelte-1mcz7i1"&&(_e.textContent=_r),Yn=r(d),Fe=n(d,"P",{"data-svelte-h":!0}),i(Fe)!=="svelte-1mggid6"&&(Fe.textContent=Fr),d.forEach(m),Zn=r(a),Te=n(a,"P",{"data-svelte-h":!0}),i(Te)!=="svelte-1bedmew"&&(Te.textContent=Tr),Qn=r(a),Pe=n(a,"P",{"data-svelte-h":!0}),i(Pe)!=="svelte-o0dycy"&&(Pe.textContent=Pr),eo=r(a),qe=n(a,"P",{"data-svelte-h":!0}),i(qe)!=="svelte-wxrfoh"&&(qe.textContent=qr),to=r(a),Re=n(a,"P",{"data-svelte-h":!0}),i(Re)!=="svelte-nio40q"&&(Re.innerHTML=Rr),no=r(a),He=n(a,"P",{"data-svelte-h":!0}),i(He)!=="svelte-sknn1e"&&(He.innerHTML=Hr),oo=r(a),Ee=n(a,"PRE",{"data-svelte-h":!0}),i(Ee)!=="svelte-1fbr1ln"&&(Ee.textContent=Er),ro=r(a),Ie=n(a,"H2",{"data-svelte-h":!0}),i(Ie)!=="svelte-ej0cvp"&&(Ie.textContent=Ir),so=r(a),Se=n(a,"P",{"data-svelte-h":!0}),i(Se)!=="svelte-1u4ms8j"&&(Se.innerHTML=Sr),ao=r(a),K=n(a,"H3",{class:!0,"data-svelte-h":!0}),i(K)!=="svelte-1we8piy"&&(K.textContent=Lr),io=r(a),Le=n(a,"P",{"data-svelte-h":!0}),i(Le)!=="svelte-1io4wrf"&&(Le.textContent=zr),lo=r(a),ze=n(a,"P",{"data-svelte-h":!0}),i(ze)!=="svelte-p7wnbe"&&(ze.innerHTML=Dr),co=r(a),wt=n(a,"PRE",{});var xs=f(wt);ho=g(xs,c[8]),xs.forEach(m),uo=r(a),Ct=n(a,"PRE",{});var ys=f(Ct);mo=g(ys,c[9]),ys.forEach(m),fo=r(a),De=n(a,"P",{"data-svelte-h":!0}),i(De)!=="svelte-19ldkaq"&&(De.innerHTML=jr),po=r(a),kt=n(a,"PRE",{});var ws=f(kt);vo=g(ws,c[6]),ws.forEach(m),go=r(a),je=n(a,"P",{"data-svelte-h":!0}),i(je)!=="svelte-fome7h"&&(je.textContent=Ar),bo=r(a),Ae=n(a,"P",{"data-svelte-h":!0}),i(Ae)!=="svelte-bzxsym"&&(Ae.textContent=Or),xo=r(a),Oe=n(a,"P",{"data-svelte-h":!0}),i(Oe)!=="svelte-1cs8rkg"&&(Oe.textContent=Nr),yo=r(a),Mt=n(a,"PRE",{});var Cs=f(Mt);wo=g(Cs,c[7]),Cs.forEach(m),Co=r(a),Ne=n(a,"P",{"data-svelte-h":!0}),i(Ne)!=="svelte-1odqlsk"&&(Ne.textContent=Ur),ko=r(a),Ue=n(a,"P",{"data-svelte-h":!0}),i(Ue)!=="svelte-zonyi"&&(Ue.textContent=Br),Mo=r(a),I=n(a,"DIV",{style:!0,"data-svelte-h":!0}),i(I)!=="svelte-oza92p"&&(I.innerHTML=Wr),_o=r(a),S=n(a,"DIV",{style:!0,"data-svelte-h":!0}),i(S)!=="svelte-1i0xasy"&&(S.innerHTML=Vr),Fo=r(a),L=n(a,"DIV",{style:!0,"data-svelte-h":!0}),i(L)!=="svelte-d1vbti"&&(L.innerHTML=Gr),To=r(a),p=n(a,"DIV",{style:!0});var x=f(p);Be=n(x,"P",{"data-svelte-h":!0}),i(Be)!=="svelte-1gtcic2"&&(Be.textContent=$r),Po=r(x),_t=n(x,"A",{id:!0}),f(_t).forEach(m),qo=r(x),We=n(x,"H1",{"data-svelte-h":!0}),i(We)!=="svelte-12xuzxf"&&(We.textContent=Jr),Ro=r(x),Ve=n(x,"P",{"data-svelte-h":!0}),i(Ve)!=="svelte-wi399x"&&(Ve.textContent=Kr),Ho=r(x),Ft=n(x,"PRE",{});var ks=f(Ft);Eo=g(ks,c[3]),ks.forEach(m),Io=r(x),X=n(x,"H3",{class:!0,"data-svelte-h":!0}),i(X)!=="svelte-1kuwr40"&&(X.textContent=Xr),So=r(x),Ge=n(x,"P",{"data-svelte-h":!0}),i(Ge)!=="svelte-1wgygkn"&&(Ge.textContent=Yr),Lo=r(x),Tt=n(x,"PRE",{});var Ms=f(Tt);zo=g(Ms,c[4]),Ms.forEach(m),Do=r(x),$e=n(x,"P",{"data-svelte-h":!0}),i($e)!=="svelte-1co65ep"&&($e.textContent=Zr),jo=r(x),Pt=n(x,"PRE",{});var _s=f(Pt);Ao=g(_s,c[5]),_s.forEach(m),Oo=r(x),Je=n(x,"P",{"data-svelte-h":!0}),i(Je)!=="svelte-16900b7"&&(Je.innerHTML=Qr),x.forEach(m),a.forEach(m),u.forEach(m),It=r(b),z=n(b,"A",{href:!0,"data-svelte-h":!0}),i(z)!=="svelte-z78alu"&&(z.textContent=es),St=r(b),M&&M.l(b),this.h()},h(){w(_,"text-align","center"),C(F,"class","light svelte-7c47tb"),C(R,"class","dis svelte-7c47tb"),C(H,"class","play svelte-7c47tb"),C(E,"class","dis svelte-7c47tb"),C(T,"class","light svelte-7c47tb"),C(y,"class","light svelte-7c47tb"),C(j,"class","teaser svelte-7c47tb"),C(A,"class","teaser svelte-7c47tb"),C(O,"class","teaser svelte-7c47tb"),C(N,"class","teaser svelte-7c47tb"),C(U,"class","teaser svelte-7c47tb"),w(P,"color","lightgreen"),w(P,"font-size","28px"),w(P,"font-weight","bold "),w(B,"color","lightgreen"),w(W,"color","lightgreen"),w(V,"color","lightgreen"),w(G,"color","lightgreen"),w($,"color","lightgreen"),C(J,"id","cow7"),C(l,"class","background"),C(K,"class","svelte-7c47tb"),w(I,"margin-left","2%"),w(I,"margin-right","2%"),w(S,"margin-left","12%"),w(S,"margin-right","12%"),w(L,"margin-left","2%"),w(L,"margin-right","2%"),C(_t,"id","examples"),C(X,"class","svelte-7c47tb"),w(p,"margin-left","12%"),w(p,"margin-right","12%"),w(h,"margin-left","8%"),w(h,"margin-right","8%"),C(z,"href","#cow7")},m(b,u){Lt(b,h,u),e(h,_),e(h,Y),e(h,F),e(h,Xe),e(h,q),e(h,Ye),e(h,R),e(R,Ze),e(h,Z),e(h,H),e(H,Qe),e(h,et),e(h,E),e(E,tt),e(h,nt),e(h,T),e(h,rt),e(h,D),e(D,st),e(h,at),e(h,Q),e(h,zt),e(h,y),e(y,ee),e(y,Dt),e(y,it),e(it,jt),e(y,At),e(y,lt),e(lt,Ot),e(y,Nt),e(y,te),e(y,Ut),e(y,ct),e(ct,Bt),e(y,Wt),e(y,dt),e(dt,Vt),e(y,Gt),e(y,ht),e(ht,$t),e(y,Jt),e(y,ut),e(ut,Kt),e(h,Xt),e(h,j),e(h,Yt),e(h,A),e(h,Zt),e(h,ne),e(h,Qt),e(h,oe),e(h,en),e(h,mt),e(mt,tn),e(h,nn),e(h,re),e(h,on),e(h,se),e(h,rn),e(h,ae),e(h,sn),e(h,s),e(s,an),e(s,ie),e(s,ln),e(s,Et),e(s,cn),e(s,ft),e(ft,dn),e(s,hn),e(s,O),e(s,un),e(s,le),e(s,mn),e(s,pt),e(pt,fn),e(s,pn),e(s,N),e(s,vn),e(s,ce),e(s,gn),e(s,vt),e(vt,bn),e(s,xn),e(s,de),e(s,yn),e(s,he),e(s,wn),e(s,U),e(s,Cn),e(s,l),e(l,P),e(l,kn),e(l,B),e(l,Mn),e(l,W),e(l,_n),e(l,V),e(l,Fn),e(l,G),e(l,Tn),e(l,$),e(l,Pn),e(l,ue),e(l,qn),e(l,me),e(l,Rn),e(l,fe),e(l,Hn),e(l,J),e(l,En),e(l,gt),e(gt,In),e(l,Sn),e(l,pe),e(l,Ln),e(l,bt),e(bt,zn),e(l,Dn),e(l,ve),e(l,jn),e(l,xt),e(xt,An),e(l,On),e(l,ge),e(l,Nn),e(l,be),e(l,Un),e(l,xe),e(l,Bn),e(l,yt),e(yt,Wn),e(l,Vn),e(l,ye),e(l,Gn),e(l,we),e(l,$n),e(l,Ce),e(l,Jn),e(l,ke),e(l,Kn),e(l,Me),e(l,Xn),e(l,_e),e(l,Yn),e(l,Fe),e(s,Zn),e(s,Te),e(s,Qn),e(s,Pe),e(s,eo),e(s,qe),e(s,to),e(s,Re),e(s,no),e(s,He),e(s,oo),e(s,Ee),e(s,ro),e(s,Ie),e(s,so),e(s,Se),e(s,ao),e(s,K),e(s,io),e(s,Le),e(s,lo),e(s,ze),e(s,co),e(s,wt),e(wt,ho),e(s,uo),e(s,Ct),e(Ct,mo),e(s,fo),e(s,De),e(s,po),e(s,kt),e(kt,vo),e(s,go),e(s,je),e(s,bo),e(s,Ae),e(s,xo),e(s,Oe),e(s,yo),e(s,Mt),e(Mt,wo),e(s,Co),e(s,Ne),e(s,ko),e(s,Ue),e(s,Mo),e(s,I),e(s,_o),e(s,S),e(s,Fo),e(s,L),e(s,To),e(s,p),e(p,Be),e(p,Po),e(p,_t),e(p,qo),e(p,We),e(p,Ro),e(p,Ve),e(p,Ho),e(p,Ft),e(Ft,Eo),e(p,Io),e(p,X),e(p,So),e(p,Ge),e(p,Lo),e(p,Tt),e(Tt,zo),e(p,Do),e(p,$e),e(p,jo),e(p,Pt),e(Pt,Ao),e(p,Oo),e(p,Je),Lt(b,It,u),Lt(b,z,u),Lt(b,St,u),M&&M.m(b,u),Ke=!0},p(b,u){M&&M.p&&(!Ke||u[0]&2097152)&&qs(M,No,b,b[21],Ke?Hs(No,b[21],u,null):Rs(b[21]),null)},i(b){Ke||(Ss(M,b),Ke=!0)},o(b){Ls(M,b),Ke=!1},d(b){b&&(m(h),m(It),m(z),m(St)),M&&M.d(b)}}}var Fs="m(dF3x)  // 3";function As(c,h,_){let{$$slots:qt={},$$scope:Y}=h;var F=`    function M (x) {
      return function go (func)`,Rt=`      {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }`,Xe=`    }
    Where dF3x = () => {}; `,q=`var demo1 = M(3);
var demo2 = M(3);
demo1(v=>v**3);
demo2(v=>v - 1);
console.log(demo1(dF3x)); // 27
console.log(demo2(dF3x)); // 2`,Ht=`var m = M(3);
log(M(3)(v=>v**3)(v=>v*3)(Math.sqrt)(dF3x)); // 9`,Ye=`m(()=>4);  // Sets x in the m-M(x) closure to 4.
m(v=>v**4)(v=>v**(1/2))(v=>v-7)
log(m(dF3x))                             // 42

var add = a => b => a + b;
var mult = a => b => a * b;
var exp = a => b => b**a;

m(()=>3)(add(4))(exp(4))(Math.sqrt)(add(-7));
log(m(dF3x))                             // 42

// NOTE: ()=>3 (above) resets the value in the m-M(x) closure to 3.

log(M(2)(add(4))(mult(7))(dF3x))`,ot=`  const R = function R(ar) {
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

`,R=`function reverse () { 
  let fu = m(dF3ar).pop(); 
  // discards the function being reversed.
    
  let foo = x => fu(fu(fu(x))); 
  // Three more turns reverses the first one.
    
  m(foo)(dF3ar).pop();     
  // uses foo, then discards it, returning the cube to where it was.
}; `;const Ze=`function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  };
    Where const dF3x = () => {}
          const dF3ar = () => {};`;var Z=`const b0 = 'blue';
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

  var m = M([bb, gg, rr, oo, yy, ww]);`,Z=`const b0 = 'blue';
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

  var m = M([bb, gg, rr, oo, yy, ww]);`,H="M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10",Qe="m = M(3)",et="m(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)",E="m(dF3x)  // 10",tt="m(v=>v+4)(v=>v*3)  // Now x in the m-M(x) closure is 42",nt="m(dF3x) // 42",T=`      .blue {
          height: 60px;
          width: 60px;
          background-color: lightblue;
          display: inline;
          border-radius: 10px;
      }`,ot=` function R(ar) {
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
  }`,rt=`.blue {
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
  }`,D=`<div id="steady">
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
</div>`,st=`<button on:click={() => m = m(R)}>R</button>
<div><button class={m(dF3x)[0][2]} on:click = {() => {m = m(R)}} /> </div> `,at=`function handleEvent(e) { 
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
  }`;return c.$$set=Q=>{"$$scope"in Q&&_(21,Y=Q.$$scope)},[F,Rt,Xe,q,Ht,Ye,ot,R,Ze,Z,H,Qe,et,E,tt,nt,T,rt,D,st,at,Y,qt]}class Us extends Es{constructor(h){super(),Is(this,h,As,js,Ts,{},null,[-1,-1])}}export{Us as component};
