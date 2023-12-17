import{s as ys,c as ws,u as Cs,g as ks,d as Ms}from"../chunks/scheduler.1f6706a1.js";import{S as _s,i as Fs,g as t,s as o,m as p,h as n,j as f,x as i,c as r,n as g,f as m,l as w,k as C,a as St,y as e,d as Ps,t as Ts}from"../chunks/index.2d48075f.js";const Rs=""+new URL("../assets/passBy.52308f62.png",import.meta.url).href,qs=""+new URL("../assets/object.b2d12053.png",import.meta.url).href;function Hs(l){let d,_,Tt="Recursive Closures",K,F,Rt=`Closures defined by letting m = M(x) for some variable &quot;m&quot; and any value &quot;x&quot; (see below)  are recursive in the sense that: <br/>
    (A) the inner function, named &quot;go&quot;, repeatedly calls itself, and <br/>
    (B) go repeatedly modifies &quot;x&quot; by means of varying functions &quot;func&quot; which are:<br/>
        (1) currently queued in front of the copy of go named &quot;m&quot;, <br/>
        (2) provided later if the current value of &quot;x&quot; is still alive
    in memory; i.e., if the program in which &quot;m&quot; is defined is still running. or <br/>
        (3) the current value of x is preserved in permanent storage.`,Ke,R,qt="Regarding the last item and x retrieved from storage: If m is defined, then <span>`m(()=&gt;x)(newFunc1)(newFunc2)</span> ... Otherwise, redefine m with &quot;m = M(x) using the most recent value of x.",Xe,q,Ye,X,H,Ze,Qe,E,et,tt,P,nt="Anonymous Computation:",ot,z,rt,st,Y,Lt,y,Z,Do="Encapsulated State:",It,at,Dt,zt,it,jt,Ot,Q,zo="Sometime later (the garbage collector ignores closures):",At,lt,Nt,Ut,ct,Bt,Wt,dt,Vt,$t,ht,Gt,Jt,j,jo="Rubik's Cube Simulation",Kt,O,Oo=`***********************************************************************
    <br/> 
    Case 1 -- Clicking on the three visible sides of the cube.`,Xt,ee,Ao="The visible cube interface gives access to all six sides. Clicking the center of each face causes rotation of the whole cube around the axis perpendicular to that center. Everything moves except for clicked center and its counterpart on the opposite side",Yt,te,No=`x in the Rubik's cube application is an array of six nine-member arrays of references to the strings "blue, green, red, orange, yellow, and white." These strings correspond to the names of CSS selectors, and the "background-color" properties of each. Here's what I mean:
    
`,ut,Zt,Qt,ne,Uo='The 54 divs that combine to represent the cube in the DOM are shown below. The visual representation that appears in the browser is on the next page, <a href="./cube7">Rubik&#39;s cube</a>',en,oe,Bo='Notice that the front, top, and right side representations contain buttons. Go to <a href="./cube7">Rubik&#39;s cube</a>, click the &quot;Start&quot; button or press the &#39;V&#39; key to restore the cube to it to the &quot;solved&quot; configuration, then click the upper left corner of the right side of the cube. The right face rotates counterclockwise 90 degrees pursuant to the &quot;on:click&quot; instruction seen in the DOM representation (below). &quot;m = m(Rz)&quot; executes. &quot;m(Rz)&quot; updates x in the m-M(x) closure; the &quot;m =&quot; part triggers reactivity, causing the update to immediately appear in the browser.&quot;',tn,re,Wo="Now click on the top center three times. The right side should be green now. Rotate the right side counterclockwise by clicking on its upper left corner. Now click the top center once to restore the cube to its original orientation.",nn,s,on,se,Vo='This section is about clicking on cube image, but when we get to it later, you will see that pressing the "R" key or clicking the button labeled "R" rotates whatever face happens to be on the right when the "R" key is pressed.or the "R" button is clicked.',rn,ae,$o="",sn,mt,an,ln,A,Go=`***********************************************************************
    <br/> 
    Case 2 -- Clicking on the buttons.`,cn,ie,Jo='Similar to clicking on parts of the cube, the callback specified in buttons that rotate faces, middle sections, and the entire cube do so by calling m(func) for some function "func" that rearranges arrays of six nine-element arrays. This results in x mutating into fu on  the same functions that are invoked when the the click is on a section of the cube. For example,',dn,ft,hn,un,N,Ko=`***********************************************************************
    <br/> 
    Case 3 -- Key presses.`,mn,le,Xo='Pressing keys invokes eventHandler(e) where "e" is the key-press event and eventHandler is defined as follows:',fn,vt,vn,pn,ce,Yo='"svelte:window on:keypress =  {  handleEvent } " routes keyPress event objects to handleEvent.',gn,de,Zo=`The <a href="./cube7">Rubik&#39;s Cube simulation</a> features a m-M(x) closure
    whose x values are always arrays of six nine-member arrays of the strings
    &quot;blue, green, red, orange, yellow, and white&quot;. Callbacks stemming from mouse
    clicks have the form &quot;m = m(Foo),  where Foo is one of several functions that
    use the elements of x to construct and return new arrays of six nine-member arrays.
    The resulting transformation of x in the m-M(x) closure automatically
    transforms the cube displayed in the browser because x&#39;s elements (references to strings) are references to classes in the DOM. m(dF3x)[0] is always the first element of m(dF3x). In the solved cube, it&#39;s a nine-member array, each element of which is corresponds to a CSS class with the element &quot;background-color: blue&quot;. m(dF3x)[0][0] === &quot;blue&quot; returns &quot;true&quot;, as do m(dF3x)[0][v] for the other eight elements of m(dF3x)[0]. 
    
    
    
    automatically responds
    because to arrays to and return create arrays of six nine-member arrays that
    &quot; are operated upon by m that respond only to DOM events, and whose side
    effects are felt only in the DOM rearrangements of six CSS classes on the 54
    divs of the cube. Other than background colors, those classes are all
    identical. modifications of the DOM, encapsulate transformations of x in a
    manner reminiscent of Haskel monads. <a href="./cube7">Here</a>, you can
    click on an edge or corner of the upper cube and see it rotate. The
    JavaScript in the script section provides function definitions, and nothing
    more.`,bn,U,Qo="***********************************************************************",xn,c,T,er="Background:",yn,B,tr=`Indiana University awarded me a bachelor of science degree in chemistry, a
      master's degree in mathematics, and a doctor of jurisprudence degree in
      law. Sun Microsysystems certified me as a Java Programmer and Java Website
      Developer, which qualified me for a job I took at Indiana University,
      working on a project as a Programmer/Systems Analyst. I had been told I
      needed the insurance I.U. provided to cover an expensive operation. I
      didn't know about Indiana's high risk insurance program, which I could
      afford and which provided, essentially, universal health care for the
      middle class and people with benefactors to pay the premiums.`,wn,W,nr=`I'll never again get involved in a Java project and I can't imagine ever
      again needing React. After developing an elaborate online multi-player
      game in the Haskel programming language, still using React for the user
      interface, I decided to stick with JavaScript and simple frameworks. This
      is a SvelteKit application.`,Cn,V,or=`While it makes sense to develop web applications with a few elaborate
      functions in conjunction with reusable small ones, I decided to try the
      opposite approach. What I discovered is worth sharing, to say the least,
      so here it is.`,kn,he,rr=`The code samples at the top of this page shows that function composition
      using M can&#39;t be more transparent, concise, and maintainable. Going beyond
      numerical computations, M holds the ever-changing state of play in the<a href="./score">Game of Score</a>, but that application relies too heavily on the functions that transform
      x in the m-M(x) closure. A modified version of M will make the code more
      efficient and understandable after I refactor the application.`,Mn,ue,sr=`A few additional lines of code in M can facilitate nesting of mixed
      synchronous and asynchronous functions handled by m, and can help avoid
      mutations by providing an array, let&#39;s call it &quot;ar&quot;, into which f(x)
      (which runds after m(f)) can be pushed, and having dF3x prompt the return
      of ar.slice(-1)[0] when f === dF3x. But enough of the small stuff, now
      it&#39;s time to show m-M(x) closures in all their glory, deftly making
      complex applications work while they do nothing but allow the function m
      to transform them by means of the functions m fetches. The <a href="./cube7">Simulated Rubik&#39;s cube</a> is a case in point.`,_n,me,ar=`The array x in the m-M(x) Rubik's cube array is an array consisting of six
      nine-member arrays of references to the strings "blue, green, red, orange,
      yellow and white." Functions called in response to DOM key presses and
      mouse clicks rearrange these strings, which are the names of CSS classes
      whose "background-color" properties match the names of the selectors that
      contain them. For example, the CSS class "blue" contains the line,
      "background-color: "blue".`,Fn,$,ir=`To understand the interface between the m-M(x) representation of the cube
      with the 54 colored divs in the DOM, we first need to know how x in the
      closure is defined. Here it is:`,Pn,pt,Tn,Rn,fe,lr=`m(dF3x)[0][0] on the solved cube representation in the DOM is a div with
      class = "blue". Here's blue's definition:`,qn,gt,Hn,En,ve,cr=`Below is the cube representation in the DOM. Notice how the colors
      corresponds with the image in the monitor -- orange in front m(dF3x)[3],
      blue on the side m(dF3x)[0], and yellow on top (m(dF3x)[4]).`,Sn,bt,Ln,In,pe,dr=`<a href="./cube7#cow8">This link</a> takes you to a demonstration driving home the point that the mere rearrangement of x in the m-M(x) closure, along with a self-reference of m to m, is sufficient to trigger reactivity in Svelte. It also shows that the only heavy lifting, such that it is, consists of rearranging references to strings. The 54 divs that constitute the DOM representation remain stationary.       
    `,ge,hr=`When you press "r", click the "R" button, or click the upper leift corner
      of the right side of the cube representation, the function 'R' is called
      on the array of six arrays of references to strings in the m-M(x) closure.
      The current configuration of x in the closure is of no concern to 'R'. It
      rearranges the strings based solely on their positions -- 54 positions,
      ranging from m(dF3x)[0][0] to m(dF3)[5][8].`,Dn,be,ur=`R specifies that whatever string reference happens to be in position
      m(dF3x)[3][2] changes to whatever string reference happens to be in
      position m(dF3x)[5][2]. If the cube is in its starting configuration
      (solved, prior to scrambling), the upper right front corner will go from
      orange to white. Beyond that, we know nothing about the color of the front
      upper right corner before or after m(R) runs. The class will change to the
      whatever the class of the div in the front upper right corner
      (m(dF3x)(5)(2)) happens to be, but the background-color of that class
      might be whatever the background color of m(dF3x)(3)(2) happens to be.
      Here's the definition of R:`,zn,xt,jn,On,xe,mr="When R returns temp, the transformation of x completes. It's new value is temp since x = Func(x) and Func is R in this instance.",An,ye,fr="STOP",Nn,we,vr="This is where the revision ends.",Un,Ce,pr=`The <a href="./cube7">Simulated Rubik&#39;s cube</a> page has gone through improvements,
      including code refactoring, that render much of its text incorrect -- but the
      cube itself works like a charm. Here&#39;s an explanation of the code, beginning
      with the interface between the closure holding the array of six nine-member
      arrays of references to the strings &quot;blue, green, red, orange, yellow, and
      white&quot; and the div containing six nine-member arrays of divs. The strings in
      the representation are the names of CSS classes with background-color entries
      corresponding to their names.`,Bn,ke,gr=`The code samples at the top of this page show that function composition
      using M can&#39;t be more transparent, concise, and maintainable. When I get
      around to it, I&#39;ll show how slight modification of M facilitate nesting of
      mixed synchronous and asynchronous handled by m, and how, when x is an
      array, pushing modifications onto it can avoid mutations. The code is
      tested and good to to, but it&#39;s time now to show m-M(x) closures handling
      larger applications. There&#39;s the <a href="./score">Game of Score</a> and
      my current project, <a href="./cube7">Simulated Rubik&#39;s cube</a>.`,Wn,Me,br=`Key press and mouse click events call eventHandler(e) where e is an object
      containing an integer named keyCode. If eventHandler contains an object
      with a keyCode number matching keyCode in e, m(f) is called where f is a
      function that rearranges resides response to events initiated in the DOM.`,Vn,_e,xr=`Events initiated by user key presses and clicks cause eventHandler() to
      call m on functions that operate on arrays of six nine-member arrays.`,$n,Fe,yr=`The following discussion centers around the function M (defined below),
    along with closures of the form m-M(x), where m = M(x) and x can be any
    JavaScript value.`,Gn,Pe,wr=`M can, of course, be modified to include try-catch blocks, objects, or
    anything else. Modification of M in this presentation are small. The
    functions provided to m are responsible for turning the six sides and three
    middle sections of the cube.`,Jn,Te,Cr=`The simulated Rubik's cube example follows the convention of creating an
    application's main closure by calling "m = M(x)", where x can be any value,
    and r-erring to the result as "the m-M(x) closure." "x" is encapsulated,
    sequestered from everything outside the closure's scope. As is apparent from
    the definition of M (below_), 'x' can be modified by calling m(func) for
    some function "func". In the simplest version of "M", calling m(func)
    mutates "x," changing it from x to func(x).`,Kn,Re,kr=`<span style="color:yellow; font-weight:bold">CAUTION</span> as will be
    extensively discussed on this page, m(dF3x) is a reference to &#39;x&#39; in the
    closure unless the line in M,
    <span class="O svelte-o3odnn">if (func === dF3x) return x;</span>
    is changed to <span class="O svelte-o3odnn">if (func === dF3x) return clone(x)</span> for some
    function &quot;clone&quot; that returns a perfect duplicate of &#39;x&#39; with an address in memory
    different from that of &#39;x&#39;. More about that later. First, here&#39;s the definition
    M and some examples of m-M(x) closures:`,Xn,qe,Mr=`The <a href="./score#mDef">Solitaire Game of Score</a> involves using two six-sided,
    one twelve-sided, and one twenty-sided die along with arithmetic and concatenation
    to arrive at the number 20 in two or more moves. The initial value of &quot;x&quot; in
    the m-M(x) closure is shown in the definition of m2:`,Yn,He,_r=`m2 = M([ 
    [Math.floor(Math.random() * 6)   + 1, Math.floor(Math.random() * 6) + 1,
     Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
     [], ['+'], [], [0], [], [0], [] 
]);`,Zn,Ee,Fr="The Simulated Rubik's Cube",Qn,Se,Pr=`The <a href="./cube7">simulated Rubik&#39;s cube</a> is another example of a fairly
    complex application whose state is maintained in a tiny closure. The bare bones
    M shown above can handle the transformations of the cube, from keystroke or button
    click to the result seen in the browser. But, in order to facilitate taking back
    a series of moves, an array of references to every argument provided to m was
    added.`,eo,G,Tr="The Code Directly Responsible for the Browser Display",to,Le,Rr=`In the DOM, the simulated Rubik's cube consists of 6 groups of 9 Div
    elements. User moves rearrange classes. Cubies change color when they are
    assigned a class with a different background`,no,Ie,qr=`Those arguments are functions that operate on x in the m-M(x) closure; i.e.,
    that operate on <span style="color: orange">[ bb, gg, rr, oo, yy, ww ]</span>, the array that determines the background colors of the 54 divs in the
    DOM, thereby controling the configuration of the cube displayed in the
    browser. When an array was added to the definition of M, the original M was
    renamed M2. Here&#39;s the complete definition of m in the m-M(x) closure,
    beginning with the revised definition of M:`,oo,yt,ro,so,wt,ao,io,De,Hr=`As the line &quot;else x = func(x);&quot; in the definition of M indicates, m(func)
    causes func(x) to replace x in the m-M(x) closure unless func is dF3x or
    dF3ar. Pressing the &quot;r&quot; key or clicking on the &quot;R&quot; rotates the right side of
    the cube clockwise a quarter turn. See how it uses the elements of the
    current configuration (named &quot;ar&quot;) of <span style="color: orange">[ bb, gg, rr, oo, yy, ww ]</span> as a source of building blocks to assemble the updated configuration, named
    &quot;temp.&quot;`,lo,Ct,co,ho,ze,Er=`The functions that manipulate the cube have numerous lines of code, but they
    are as simple as they could possibly be. They don't rely on procedures to
    determine what goes where during the construction of "temp", they are just
    instructions specifying the new locations of the elements of the array held
    in the m-M(x) closure. While not organized in tabular form, they are
    essentially items in a lookup table.`,uo,je,Sr=`If the meanings of passing by value and passing by reference is clear, as
    I'm sure it is for many of you, reading the rest of this section on the
    Rubik's cube simulator might be tedious. For those who are still a little
    unsure, I hope reading this will be the breakthrough that clarifies it once
    and for all.`,mo,Oe,Lr=`With moves stored in ar, setting the cube configuration back to where it was
    prior to the most recent move requires nothing more than the three short
    lines of code in the function "reverse". When m(dF3ar) is modified in
    reverse, 'x' is simultaneously modified in the m-M(x) closure. This is
    because both 'x' and m(dF3ar) are references to the same address in memory.
    Change what is stored at that address with either one, and that will be the
    value of both 'x' and 'm(dF3ar) and any other variable that happens to point
    to that location.`,fo,kt,vo,po,Ae,Ir=`m(dF3ar) is a reference to ar in the m-M(x) closure, so reverse() shortens
    the length of ar inside the closure. Very little browser memory is needed to
    store the information necessary to reverse hundreds of moves. Making moves
    is not resource intensive either. A move doesn't rearrange the div elements
    of the cube or rotate numerous little cubits, as is the case with many
    Rubik's cube simulators. All it does is rearrange the placement of the
    strings (names of colors) referring to some CSS classes.`,go,Ne,Dr=`The reverse function is oblivious to precisely which functions were
    responsible for the transformations being reversed. Whatever the function at
    the top of the list happens to be, it runs three more times. After foo
    executes, it and the function that was reversed are discarded, making the
    list one item shorter than it was.`,bo,S,zr=`<img class="display_image svelte-o3odnn" src="${Rs}"/>`,xo,L,jr=`<p>Distinguishing between passing by value (primitives) and passing by
      reference (objects) is a stumbling block for people new to JavaScript.
      It&#39;s important to know that string, number, bigint, boolean, undefined,
      symbol, and null are the primitive values. All other values are down the
      prototype chain from Object and are, therefore, objects. Here&#39;s
      verification that a simple function is an object:</p>`,yo,I,Or=`<img class="display_image svelte-o3odnn" src="${qs}"/>`,wo,v,Ue,Ar='See "prototype: Object" at the bottom of the right side.',Co,Mt,ko,Be,Nr="Elementary Facts and Examples",Mo,We,Ur=`M can serve as the outer scope for multiple orthogonal (non-interacting)
      functions, with structures identical to M's "go()". For example:`,_o,_t,Fo,Po,J,Br='"M" facilitates function composition.',To,Ve,Wr="Garbage collectors should delete this.",Ro,Ft,qo,Ho,$e,Vr=`The value "x" in the m-M(x) closure persists until m is redefined or
      deleted.`,Eo,Pt,So,Lo,Ge,$r='Recommended Reading: <a href="https://www.youtube.com/playlist?list=PLillGF-Rfqbars4vKNtpcWVDUpVOVTlgB">Javascript Under the Hood</a>',Ht,D,Gr="Go to cow7",Et,Je;const Io=l[22].default,M=ws(Io,l,l[21],null);return{c(){d=t("div"),_=t("h1"),_.textContent=Tt,K=o(),F=t("span"),F.innerHTML=Rt,Ke=o(),R=t("p"),R.innerHTML=qt,Xe=o(),q=t("pre"),Ye=p(l[0]),X=o(),H=t("pre"),Ze=p(l[1]),Qe=o(),E=t("pre"),et=p(l[2]),tt=o(),P=t("dist"),P.textContent=nt,ot=o(),z=t("pre"),rt=p(l[10]),st=o(),Y=t("br"),Lt=o(),y=t("div"),Z=t("span"),Z.textContent=Do,It=o(),at=t("pre"),Dt=p(l[11]),zt=o(),it=t("pre"),jt=p(xs),Ot=o(),Q=t("span"),Q.textContent=zo,At=o(),lt=t("pre"),Nt=p(l[12]),Ut=o(),ct=t("pre"),Bt=p(l[13]),Wt=o(),dt=t("pre"),Vt=p(l[14]),$t=o(),ht=t("pre"),Gt=p(l[15]),Jt=o(),j=t("span"),j.textContent=jo,Kt=o(),O=t("span"),O.innerHTML=Oo,Xt=o(),ee=t("p"),ee.textContent=Ao,Yt=o(),te=t("p"),te.textContent=No,ut=t("pre"),Zt=p(l[17]),Qt=o(),ne=t("p"),ne.innerHTML=Uo,en=o(),oe=t("p"),oe.innerHTML=Bo,tn=o(),re=t("p"),re.textContent=Wo,nn=o(),s=t("span"),on=p("Digression: "),se=t("p"),se.textContent=Vo,rn=o(),ae=t("p"),ae.innerHTML=$o,sn=o(),mt=t("pre"),an=p(l[18]),ln=o(),A=t("span"),A.innerHTML=Go,cn=o(),ie=t("p"),ie.textContent=Jo,dn=o(),ft=t("pre"),hn=p(l[19]),un=o(),N=t("span"),N.innerHTML=Ko,mn=o(),le=t("p"),le.textContent=Xo,fn=o(),vt=t("pre"),vn=p(l[20]),pn=o(),ce=t("p"),ce.textContent=Yo,gn=o(),de=t("p"),de.innerHTML=Zo,bn=o(),U=t("span"),U.textContent=Qo,xn=o(),c=t("div"),T=t("p"),T.textContent=er,yn=o(),B=t("p"),B.textContent=tr,wn=o(),W=t("p"),W.textContent=nr,Cn=o(),V=t("p"),V.textContent=or,kn=o(),he=t("p"),he.innerHTML=rr,Mn=o(),ue=t("p"),ue.innerHTML=sr,_n=o(),me=t("p"),me.textContent=ar,Fn=o(),$=t("p"),$.textContent=ir,Pn=o(),pt=t("pre"),Tn=p(l[9]),Rn=o(),fe=t("p"),fe.textContent=lr,qn=o(),gt=t("pre"),Hn=p(l[16]),En=o(),ve=t("p"),ve.textContent=cr,Sn=o(),bt=t("pre"),Ln=p(l[18]),In=o(),pe=t("p"),pe.innerHTML=dr,ge=t("p"),ge.textContent=hr,Dn=o(),be=t("p"),be.textContent=ur,zn=o(),xt=t("pre"),jn=p(l[6]),On=o(),xe=t("p"),xe.textContent=mr,An=o(),ye=t("h1"),ye.textContent=fr,Nn=o(),we=t("p"),we.textContent=vr,Un=p(`
paypal card denominations

    `),Ce=t("p"),Ce.innerHTML=pr,Bn=o(),ke=t("p"),ke.innerHTML=gr,Wn=o(),Me=t("p"),Me.textContent=br,Vn=o(),_e=t("p"),_e.textContent=xr,$n=o(),Fe=t("p"),Fe.textContent=yr,Gn=o(),Pe=t("p"),Pe.textContent=wr,Jn=o(),Te=t("p"),Te.textContent=Cr,Kn=o(),Re=t("p"),Re.innerHTML=kr,Xn=o(),qe=t("p"),qe.innerHTML=Mr,Yn=o(),He=t("pre"),He.textContent=_r,Zn=o(),Ee=t("h2"),Ee.textContent=Fr,Qn=o(),Se=t("p"),Se.innerHTML=Pr,eo=o(),G=t("h3"),G.textContent=Tr,to=o(),Le=t("p"),Le.textContent=Rr,no=o(),Ie=t("p"),Ie.innerHTML=qr,oo=o(),yt=t("pre"),ro=p(l[8]),so=o(),wt=t("pre"),ao=p(l[9]),io=o(),De=t("p"),De.innerHTML=Hr,lo=o(),Ct=t("pre"),co=p(l[6]),ho=o(),ze=t("p"),ze.textContent=Er,uo=o(),je=t("p"),je.textContent=Sr,mo=o(),Oe=t("p"),Oe.textContent=Lr,fo=o(),kt=t("pre"),vo=p(l[7]),po=o(),Ae=t("p"),Ae.textContent=Ir,go=o(),Ne=t("p"),Ne.textContent=Dr,bo=o(),S=t("div"),S.innerHTML=zr,xo=o(),L=t("div"),L.innerHTML=jr,yo=o(),I=t("div"),I.innerHTML=Or,wo=o(),v=t("div"),Ue=t("p"),Ue.textContent=Ar,Co=o(),Mt=t("a"),ko=o(),Be=t("h1"),Be.textContent=Nr,Mo=o(),We=t("p"),We.textContent=Ur,_o=o(),_t=t("pre"),Fo=p(l[3]),Po=o(),J=t("h3"),J.textContent=Br,To=o(),Ve=t("p"),Ve.textContent=Wr,Ro=o(),Ft=t("pre"),qo=p(l[4]),Ho=o(),$e=t("p"),$e.textContent=Vr,Eo=o(),Pt=t("pre"),So=p(l[5]),Lo=o(),Ge=t("p"),Ge.innerHTML=$r,Ht=o(),D=t("a"),D.textContent=Gr,Et=o(),M&&M.c(),this.h()},l(b){d=n(b,"DIV",{style:!0});var u=f(d);_=n(u,"H1",{style:!0,"data-svelte-h":!0}),i(_)!=="svelte-mpxol8"&&(_.textContent=Tt),K=r(u),F=n(u,"SPAN",{class:!0,"data-svelte-h":!0}),i(F)!=="svelte-u5vrx4"&&(F.innerHTML=Rt),Ke=r(u),R=n(u,"P",{"data-svelte-h":!0}),i(R)!=="svelte-1dhkfnv"&&(R.innerHTML=qt),Xe=r(u),q=n(u,"PRE",{class:!0});var Jr=f(q);Ye=g(Jr,l[0]),Jr.forEach(m),X=r(u),H=n(u,"PRE",{class:!0});var Kr=f(H);Ze=g(Kr,l[1]),Kr.forEach(m),Qe=r(u),E=n(u,"PRE",{class:!0});var Xr=f(E);et=g(Xr,l[2]),Xr.forEach(m),tt=r(u),P=n(u,"DIST",{class:!0,"data-svelte-h":!0}),i(P)!=="svelte-1mq2aot"&&(P.textContent=nt),ot=r(u),z=n(u,"PRE",{});var Yr=f(z);rt=g(Yr,l[10]),Yr.forEach(m),st=r(u),Y=n(u,"BR",{}),Lt=r(u),y=n(u,"DIV",{class:!0});var k=f(y);Z=n(k,"SPAN",{"data-svelte-h":!0}),i(Z)!=="svelte-1xp33cu"&&(Z.textContent=Do),It=r(k),at=n(k,"PRE",{});var Zr=f(at);Dt=g(Zr,l[11]),Zr.forEach(m),zt=r(k),it=n(k,"PRE",{});var Qr=f(it);jt=g(Qr,xs),Qr.forEach(m),Ot=r(k),Q=n(k,"SPAN",{"data-svelte-h":!0}),i(Q)!=="svelte-krlx4g"&&(Q.textContent=zo),At=r(k),lt=n(k,"PRE",{});var es=f(lt);Nt=g(es,l[12]),es.forEach(m),Ut=r(k),ct=n(k,"PRE",{});var ts=f(ct);Bt=g(ts,l[13]),ts.forEach(m),Wt=r(k),dt=n(k,"PRE",{});var ns=f(dt);Vt=g(ns,l[14]),ns.forEach(m),$t=r(k),ht=n(k,"PRE",{});var os=f(ht);Gt=g(os,l[15]),os.forEach(m),k.forEach(m),Jt=r(u),j=n(u,"SPAN",{class:!0,"data-svelte-h":!0}),i(j)!=="svelte-1kemneu"&&(j.textContent=jo),Kt=r(u),O=n(u,"SPAN",{class:!0,"data-svelte-h":!0}),i(O)!=="svelte-1sr0i8d"&&(O.innerHTML=Oo),Xt=r(u),ee=n(u,"P",{"data-svelte-h":!0}),i(ee)!=="svelte-19ei5s9"&&(ee.textContent=Ao),Yt=r(u),te=n(u,"P",{"data-svelte-h":!0}),i(te)!=="svelte-c99tkb"&&(te.textContent=No),ut=n(u,"PRE",{});var rs=f(ut);Zt=g(rs,l[17]),rs.forEach(m),Qt=r(u),ne=n(u,"P",{"data-svelte-h":!0}),i(ne)!=="svelte-m9uii0"&&(ne.innerHTML=Uo),en=r(u),oe=n(u,"P",{"data-svelte-h":!0}),i(oe)!=="svelte-udd6qf"&&(oe.innerHTML=Bo),tn=r(u),re=n(u,"P",{"data-svelte-h":!0}),i(re)!=="svelte-1pphbh7"&&(re.textContent=Wo),nn=r(u),s=n(u,"SPAN",{style:!0});var a=f(s);on=g(a,"Digression: "),se=n(a,"P",{"data-svelte-h":!0}),i(se)!=="svelte-1mbpdc0"&&(se.textContent=Vo),rn=r(a),ae=n(a,"P",{"data-svelte-h":!0}),i(ae)!=="svelte-1cfqa3s"&&(ae.innerHTML=$o),sn=r(a),mt=n(a,"PRE",{});var ss=f(mt);an=g(ss,l[18]),ss.forEach(m),ln=r(a),A=n(a,"SPAN",{class:!0,"data-svelte-h":!0}),i(A)!=="svelte-1nmr6k4"&&(A.innerHTML=Go),cn=r(a),ie=n(a,"P",{"data-svelte-h":!0}),i(ie)!=="svelte-1wavtu7"&&(ie.textContent=Jo),dn=r(a),ft=n(a,"PRE",{});var as=f(ft);hn=g(as,l[19]),as.forEach(m),un=r(a),N=n(a,"SPAN",{class:!0,"data-svelte-h":!0}),i(N)!=="svelte-7xc3x6"&&(N.innerHTML=Ko),mn=r(a),le=n(a,"P",{"data-svelte-h":!0}),i(le)!=="svelte-1wvqrjo"&&(le.textContent=Xo),fn=r(a),vt=n(a,"PRE",{});var is=f(vt);vn=g(is,l[20]),is.forEach(m),pn=r(a),ce=n(a,"P",{"data-svelte-h":!0}),i(ce)!=="svelte-k2cbfw"&&(ce.textContent=Yo),gn=r(a),de=n(a,"P",{"data-svelte-h":!0}),i(de)!=="svelte-5xte7n"&&(de.innerHTML=Zo),bn=r(a),U=n(a,"SPAN",{class:!0,"data-svelte-h":!0}),i(U)!=="svelte-1dwc765"&&(U.textContent=Qo),xn=r(a),c=n(a,"DIV",{class:!0});var h=f(c);T=n(h,"P",{style:!0,"data-svelte-h":!0}),i(T)!=="svelte-iarnj8"&&(T.textContent=er),yn=r(h),B=n(h,"P",{style:!0,"data-svelte-h":!0}),i(B)!=="svelte-2qwheb"&&(B.textContent=tr),wn=r(h),W=n(h,"P",{style:!0,"data-svelte-h":!0}),i(W)!=="svelte-16r78o3"&&(W.textContent=nr),Cn=r(h),V=n(h,"P",{style:!0,"data-svelte-h":!0}),i(V)!=="svelte-t7bt27"&&(V.textContent=or),kn=r(h),he=n(h,"P",{"data-svelte-h":!0}),i(he)!=="svelte-1qpiqg5"&&(he.innerHTML=rr),Mn=r(h),ue=n(h,"P",{"data-svelte-h":!0}),i(ue)!=="svelte-vdewvm"&&(ue.innerHTML=sr),_n=r(h),me=n(h,"P",{"data-svelte-h":!0}),i(me)!=="svelte-1g63h9e"&&(me.textContent=ar),Fn=r(h),$=n(h,"P",{id:!0,"data-svelte-h":!0}),i($)!=="svelte-ramrkb"&&($.textContent=ir),Pn=r(h),pt=n(h,"PRE",{});var ls=f(pt);Tn=g(ls,l[9]),ls.forEach(m),Rn=r(h),fe=n(h,"P",{"data-svelte-h":!0}),i(fe)!=="svelte-1x0koyy"&&(fe.textContent=lr),qn=r(h),gt=n(h,"PRE",{});var cs=f(gt);Hn=g(cs,l[16]),cs.forEach(m),En=r(h),ve=n(h,"P",{"data-svelte-h":!0}),i(ve)!=="svelte-1sf3ic2"&&(ve.textContent=cr),Sn=r(h),bt=n(h,"PRE",{});var ds=f(bt);Ln=g(ds,l[18]),ds.forEach(m),In=r(h),pe=n(h,"P",{"data-svelte-h":!0}),i(pe)!=="svelte-1e81lm3"&&(pe.innerHTML=dr),ge=n(h,"P",{"data-svelte-h":!0}),i(ge)!=="svelte-1c4e03k"&&(ge.textContent=hr),Dn=r(h),be=n(h,"P",{"data-svelte-h":!0}),i(be)!=="svelte-csqzbd"&&(be.textContent=ur),zn=r(h),xt=n(h,"PRE",{});var hs=f(xt);jn=g(hs,l[6]),hs.forEach(m),On=r(h),xe=n(h,"P",{"data-svelte-h":!0}),i(xe)!=="svelte-152w053"&&(xe.textContent=mr),An=r(h),ye=n(h,"H1",{"data-svelte-h":!0}),i(ye)!=="svelte-squptw"&&(ye.textContent=fr),Nn=r(h),we=n(h,"P",{"data-svelte-h":!0}),i(we)!=="svelte-1wdccrv"&&(we.textContent=vr),Un=g(h,`
paypal card denominations

    `),Ce=n(h,"P",{"data-svelte-h":!0}),i(Ce)!=="svelte-xy1izh"&&(Ce.innerHTML=pr),Bn=r(h),ke=n(h,"P",{"data-svelte-h":!0}),i(ke)!=="svelte-1dn2a6g"&&(ke.innerHTML=gr),Wn=r(h),Me=n(h,"P",{"data-svelte-h":!0}),i(Me)!=="svelte-xrgggz"&&(Me.textContent=br),Vn=r(h),_e=n(h,"P",{"data-svelte-h":!0}),i(_e)!=="svelte-ml65fe"&&(_e.textContent=xr),h.forEach(m),$n=r(a),Fe=n(a,"P",{"data-svelte-h":!0}),i(Fe)!=="svelte-n2nco"&&(Fe.textContent=yr),Gn=r(a),Pe=n(a,"P",{"data-svelte-h":!0}),i(Pe)!=="svelte-1tk6gl2"&&(Pe.textContent=wr),Jn=r(a),Te=n(a,"P",{"data-svelte-h":!0}),i(Te)!=="svelte-1joi75d"&&(Te.textContent=Cr),Kn=r(a),Re=n(a,"P",{"data-svelte-h":!0}),i(Re)!=="svelte-jkay3e"&&(Re.innerHTML=kr),Xn=r(a),qe=n(a,"P",{"data-svelte-h":!0}),i(qe)!=="svelte-1oped0i"&&(qe.innerHTML=Mr),Yn=r(a),He=n(a,"PRE",{"data-svelte-h":!0}),i(He)!=="svelte-1fbr1ln"&&(He.textContent=_r),Zn=r(a),Ee=n(a,"H2",{"data-svelte-h":!0}),i(Ee)!=="svelte-ej0cvp"&&(Ee.textContent=Fr),Qn=r(a),Se=n(a,"P",{"data-svelte-h":!0}),i(Se)!=="svelte-138e9lf"&&(Se.innerHTML=Pr),eo=r(a),G=n(a,"H3",{class:!0,"data-svelte-h":!0}),i(G)!=="svelte-1we8piy"&&(G.textContent=Tr),to=r(a),Le=n(a,"P",{"data-svelte-h":!0}),i(Le)!=="svelte-7ps1qz"&&(Le.textContent=Rr),no=r(a),Ie=n(a,"P",{"data-svelte-h":!0}),i(Ie)!=="svelte-jdvg52"&&(Ie.innerHTML=qr),oo=r(a),yt=n(a,"PRE",{});var us=f(yt);ro=g(us,l[8]),us.forEach(m),so=r(a),wt=n(a,"PRE",{});var ms=f(wt);ao=g(ms,l[9]),ms.forEach(m),io=r(a),De=n(a,"P",{"data-svelte-h":!0}),i(De)!=="svelte-1xk0402"&&(De.innerHTML=Hr),lo=r(a),Ct=n(a,"PRE",{});var fs=f(Ct);co=g(fs,l[6]),fs.forEach(m),ho=r(a),ze=n(a,"P",{"data-svelte-h":!0}),i(ze)!=="svelte-rcfcmp"&&(ze.textContent=Er),uo=r(a),je=n(a,"P",{"data-svelte-h":!0}),i(je)!=="svelte-kq7rna"&&(je.textContent=Sr),mo=r(a),Oe=n(a,"P",{"data-svelte-h":!0}),i(Oe)!=="svelte-1n2vlow"&&(Oe.textContent=Lr),fo=r(a),kt=n(a,"PRE",{});var vs=f(kt);vo=g(vs,l[7]),vs.forEach(m),po=r(a),Ae=n(a,"P",{"data-svelte-h":!0}),i(Ae)!=="svelte-34qah4"&&(Ae.textContent=Ir),go=r(a),Ne=n(a,"P",{"data-svelte-h":!0}),i(Ne)!=="svelte-1uj0cdu"&&(Ne.textContent=Dr),bo=r(a),S=n(a,"DIV",{style:!0,"data-svelte-h":!0}),i(S)!=="svelte-9bb2pd"&&(S.innerHTML=zr),xo=r(a),L=n(a,"DIV",{style:!0,"data-svelte-h":!0}),i(L)!=="svelte-2ppmia"&&(L.innerHTML=jr),yo=r(a),I=n(a,"DIV",{style:!0,"data-svelte-h":!0}),i(I)!=="svelte-mbtod2"&&(I.innerHTML=Or),wo=r(a),v=n(a,"DIV",{style:!0});var x=f(v);Ue=n(x,"P",{"data-svelte-h":!0}),i(Ue)!=="svelte-1gtcic2"&&(Ue.textContent=Ar),Co=r(x),Mt=n(x,"A",{id:!0}),f(Mt).forEach(m),ko=r(x),Be=n(x,"H1",{"data-svelte-h":!0}),i(Be)!=="svelte-12xuzxf"&&(Be.textContent=Nr),Mo=r(x),We=n(x,"P",{"data-svelte-h":!0}),i(We)!=="svelte-c7e6gl"&&(We.textContent=Ur),_o=r(x),_t=n(x,"PRE",{});var ps=f(_t);Fo=g(ps,l[3]),ps.forEach(m),Po=r(x),J=n(x,"H3",{class:!0,"data-svelte-h":!0}),i(J)!=="svelte-1kuwr40"&&(J.textContent=Br),To=r(x),Ve=n(x,"P",{"data-svelte-h":!0}),i(Ve)!=="svelte-1wgygkn"&&(Ve.textContent=Wr),Ro=r(x),Ft=n(x,"PRE",{});var gs=f(Ft);qo=g(gs,l[4]),gs.forEach(m),Ho=r(x),$e=n(x,"P",{"data-svelte-h":!0}),i($e)!=="svelte-mb1d5t"&&($e.textContent=Vr),Eo=r(x),Pt=n(x,"PRE",{});var bs=f(Pt);So=g(bs,l[5]),bs.forEach(m),Lo=r(x),Ge=n(x,"P",{"data-svelte-h":!0}),i(Ge)!=="svelte-1n49deb"&&(Ge.innerHTML=$r),x.forEach(m),a.forEach(m),u.forEach(m),Ht=r(b),D=n(b,"A",{href:!0,"data-svelte-h":!0}),i(D)!=="svelte-z78alu"&&(D.textContent=Gr),Et=r(b),M&&M.l(b),this.h()},h(){w(_,"text-align","center"),C(F,"class","light svelte-o3odnn"),C(q,"class","dis svelte-o3odnn"),C(H,"class","play svelte-o3odnn"),C(E,"class","dis svelte-o3odnn"),C(P,"class","light svelte-o3odnn"),C(y,"class","light svelte-o3odnn"),C(j,"class","teaser svelte-o3odnn"),C(O,"class","teaser svelte-o3odnn"),C(A,"class","teaser svelte-o3odnn"),C(N,"class","teaser svelte-o3odnn"),C(U,"class","teaser svelte-o3odnn"),w(T,"color","lightgreen"),w(T,"font-size","28px"),w(T,"font-weight","bold "),w(B,"color","lightgreen"),w(W,"color","lightgreen"),w(V,"color","lightgreen"),C($,"id","cow7"),C(c,"class","background"),C(G,"class","svelte-o3odnn"),w(S,"margin-left","2%"),w(S,"margin-right","2%"),w(L,"margin-left","12%"),w(L,"margin-right","12%"),w(I,"margin-left","2%"),w(I,"margin-right","2%"),C(Mt,"id","examples"),C(J,"class","svelte-o3odnn"),w(v,"margin-left","12%"),w(v,"margin-right","12%"),w(d,"margin-left","8%"),w(d,"margin-right","8%"),C(D,"href","#cow7")},m(b,u){St(b,d,u),e(d,_),e(d,K),e(d,F),e(d,Ke),e(d,R),e(d,Xe),e(d,q),e(q,Ye),e(d,X),e(d,H),e(H,Ze),e(d,Qe),e(d,E),e(E,et),e(d,tt),e(d,P),e(d,ot),e(d,z),e(z,rt),e(d,st),e(d,Y),e(d,Lt),e(d,y),e(y,Z),e(y,It),e(y,at),e(at,Dt),e(y,zt),e(y,it),e(it,jt),e(y,Ot),e(y,Q),e(y,At),e(y,lt),e(lt,Nt),e(y,Ut),e(y,ct),e(ct,Bt),e(y,Wt),e(y,dt),e(dt,Vt),e(y,$t),e(y,ht),e(ht,Gt),e(d,Jt),e(d,j),e(d,Kt),e(d,O),e(d,Xt),e(d,ee),e(d,Yt),e(d,te),e(d,ut),e(ut,Zt),e(d,Qt),e(d,ne),e(d,en),e(d,oe),e(d,tn),e(d,re),e(d,nn),e(d,s),e(s,on),e(s,se),e(s,rn),e(s,ae),e(s,sn),e(s,mt),e(mt,an),e(s,ln),e(s,A),e(s,cn),e(s,ie),e(s,dn),e(s,ft),e(ft,hn),e(s,un),e(s,N),e(s,mn),e(s,le),e(s,fn),e(s,vt),e(vt,vn),e(s,pn),e(s,ce),e(s,gn),e(s,de),e(s,bn),e(s,U),e(s,xn),e(s,c),e(c,T),e(c,yn),e(c,B),e(c,wn),e(c,W),e(c,Cn),e(c,V),e(c,kn),e(c,he),e(c,Mn),e(c,ue),e(c,_n),e(c,me),e(c,Fn),e(c,$),e(c,Pn),e(c,pt),e(pt,Tn),e(c,Rn),e(c,fe),e(c,qn),e(c,gt),e(gt,Hn),e(c,En),e(c,ve),e(c,Sn),e(c,bt),e(bt,Ln),e(c,In),e(c,pe),e(c,ge),e(c,Dn),e(c,be),e(c,zn),e(c,xt),e(xt,jn),e(c,On),e(c,xe),e(c,An),e(c,ye),e(c,Nn),e(c,we),e(c,Un),e(c,Ce),e(c,Bn),e(c,ke),e(c,Wn),e(c,Me),e(c,Vn),e(c,_e),e(s,$n),e(s,Fe),e(s,Gn),e(s,Pe),e(s,Jn),e(s,Te),e(s,Kn),e(s,Re),e(s,Xn),e(s,qe),e(s,Yn),e(s,He),e(s,Zn),e(s,Ee),e(s,Qn),e(s,Se),e(s,eo),e(s,G),e(s,to),e(s,Le),e(s,no),e(s,Ie),e(s,oo),e(s,yt),e(yt,ro),e(s,so),e(s,wt),e(wt,ao),e(s,io),e(s,De),e(s,lo),e(s,Ct),e(Ct,co),e(s,ho),e(s,ze),e(s,uo),e(s,je),e(s,mo),e(s,Oe),e(s,fo),e(s,kt),e(kt,vo),e(s,po),e(s,Ae),e(s,go),e(s,Ne),e(s,bo),e(s,S),e(s,xo),e(s,L),e(s,yo),e(s,I),e(s,wo),e(s,v),e(v,Ue),e(v,Co),e(v,Mt),e(v,ko),e(v,Be),e(v,Mo),e(v,We),e(v,_o),e(v,_t),e(_t,Fo),e(v,Po),e(v,J),e(v,To),e(v,Ve),e(v,Ro),e(v,Ft),e(Ft,qo),e(v,Ho),e(v,$e),e(v,Eo),e(v,Pt),e(Pt,So),e(v,Lo),e(v,Ge),St(b,Ht,u),St(b,D,u),St(b,Et,u),M&&M.m(b,u),Je=!0},p(b,u){M&&M.p&&(!Je||u[0]&2097152)&&Cs(M,Io,b,b[21],Je?Ms(Io,b[21],u,null):ks(b[21]),null)},i(b){Je||(Ps(M,b),Je=!0)},o(b){Ts(M,b),Je=!1},d(b){b&&(m(d),m(Ht),m(D),m(Et)),M&&M.d(b)}}}var xs="m(dF3x)  // 3";function Es(l,d,_){let{$$slots:Tt={},$$scope:K}=d;var F=`    function M (x) {
      return function go (func)`,Rt=`      {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }`,Ke=`    }
    Where dF3x = () => {}; `,R=`var demo1 = M(3);
var demo2 = M(3);
demo1(v=>v**3);
demo2(v=>v - 1);
console.log(demo1(dF3x)); // 27
console.log(demo2(dF3x)); // 2`,qt=`var m = M(3);
log(M(3)(v=>v**3)(v=>v*3)(Math.sqrt)(dF3x)); // 9`,Xe=`m(()=>4);  // Sets x in the m-M(x) closure to 4.
m(v=>v**4)(v=>v**(1/2))(v=>v-7)
log(m(dF3x))                             // 42

var add = a => b => a + b;
var mult = a => b => a * b;
var exp = a => b => b**a;

m(()=>3)(add(4))(exp(4))(Math.sqrt)(add(-7));
log(m(dF3x))                             // 42

// NOTE: ()=>3 (above) resets the value in the m-M(x) closure to 3.

log(M(2)(add(4))(mult(7))(dF3x))`,nt=`  const R = function R(ar) {
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

`,q=`function reverse () { 
  let fu = m(dF3ar).pop(); 
  // discards the function being reversed.
    
  let foo = x => fu(fu(fu(x))); 
  // Three more turns reverses the first one.
    
  m(foo)(dF3ar).pop();     
  // uses foo, then discards it, returning the cube to where it was.
}; `;const Ye=`function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  };
    Where const dF3x = () => {}
          const dF3ar = () => {};`;var X=`const b0 = 'blue';
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

  var m = M([bb, gg, rr, oo, yy, ww]);`,X=`const b0 = 'blue';
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

  var m = M([bb, gg, rr, oo, yy, ww]);`,H="M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10",Ze="m = M(3)",Qe="m(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)",E="m(dF3x)  // 10",et="m(v=>v+4)(v=>v*3)  // Now x in the m-M(x) closure is 42",tt="m(dF3x) // 42",P=`      .blue {
          height: 60px;
          width: 60px;
          background-color: lightblue;
          display: inline;
          border-radius: 10px;
      }`,nt=` function R(ar) {
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
  }`,ot=`.blue {
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
  }`,z=`<div id="steady">
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
</div>`,rt=`<button on:click={() => m = m(R)}>R</button>
<div><button class={m(dF3x)[0][2]} on:click = {() => {m = m(R)}} /> </div> `,st=`function handleEvent(e) { 
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
  }`;return l.$$set=Y=>{"$$scope"in Y&&_(21,K=Y.$$scope)},[F,Rt,Ke,R,qt,Xe,nt,q,Ye,X,H,Ze,Qe,E,et,tt,P,ot,z,rt,st,K,Tt]}class Is extends _s{constructor(d){super(),Fs(this,d,Es,Hs,ys,{},null,[-1,-1])}}export{Is as component};
