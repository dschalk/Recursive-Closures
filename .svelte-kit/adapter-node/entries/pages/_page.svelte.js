import { c as create_ssr_component, e as escape, b as add_attribute } from "../../chunks/ssr.js";
const passBy = "/_app/immutable/assets/passBy.52308f62.png";
const object = "/_app/immutable/assets/object.b2d12053.png";
const _page_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".teaser.svelte-7c47tb{font-style:italic;font-size:32px;color:#ffccaa}h3.svelte-7c47tb{color:turquoise}img.svelte-7c47tb{display:block;margin:0 auto;width:100%}.O.svelte-7c47tb{color:orange}.dis.svelte-7c47tb{color:#fe0374;font-weight:bold;font-size:28px}.play.svelte-7c47tb{color:yellow;font-weight:bold;font-size:28px}.light.svelte-7c47tb{color:#ffeeaa;font-size:28px}",
  map: null
};
var v5 = "m(dF3x)  // 3";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var Mdis = `    function M (x) {
      return function go (func)`;
  var Mplay = `      {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }`;
  var Mend = `    }
    Where dF3x = () => {}; `;
  var orthoganal = `var demo1 = M(3);
var demo2 = M(3);
demo1(v=>v**3);
demo2(v=>v - 1);
console.log(demo1(dF3x)); // 27
console.log(demo2(dF3x)); // 2`;
  var compose1 = `var m = M(3);
log(M(3)(v=>v**3)(v=>v*3)(Math.sqrt)(dF3x)); // 9`;
  var compose2 = `m(()=>4);  // Sets x in the m-M(x) closure to 4.
m(v=>v**4)(v=>v**(1/2))(v=>v-7)
log(m(dF3x))                             // 42

var add = a => b => a + b;
var mult = a => b => a * b;
var exp = a => b => b**a;

m(()=>3)(add(4))(exp(4))(Math.sqrt)(add(-7));
log(m(dF3x))                             // 42

// NOTE: ()=>3 (above) resets the value in the m-M(x) closure to 3.

log(M(2)(add(4))(mult(7))(dF3x))`;
  var Rcode = `  const R = function R(ar) {
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

`;
  var reverseShow = `function reverse () { 
  let fu = m(dF3ar).pop(); 
  // discards the function being reversed.
    
  let foo = x => fu(fu(fu(x))); 
  // Three more turns reverses the first one.
    
  m(foo)(dF3ar).pop();     
  // uses foo, then discards it, returning the cube to where it was.
}; `;
  const Mcode = `function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  };
    Where const dF3x = () => {}
          const dF3ar = () => {};`;
  var classCode2 = `const b0 = 'blue';
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

  var m = M([bb, gg, rr, oo, yy, ww]);`;
  var classCode2 = `const b0 = 'blue';
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

  var m = M([bb, gg, rr, oo, yy, ww]);`;
  var v3 = `M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10`;
  var v4 = `m = M(3)`;
  var v6 = `m(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)`;
  var v7 = `m(dF3x)  // 10`;
  var v8 = `m(v=>v+4)(v=>v*3)  // Now x in the m-M(x) closure is 42`;
  var v9 = `m(dF3x) // 42`;
  var showBlue = `      .blue {
          height: 60px;
          width: 60px;
          background-color: lightblue;
          display: inline;
          border-radius: 10px;
      }`;
  var Rcode = ` function R(ar) {
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
  }`;
  var css = `.blue {
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
  }`;
  var dom = `<div id="steady">
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
</div>`;
  var example3 = `<button on:click={() => m = m(R)}>R</button>
<div><button class={m(dF3x)[0][2]} on:click = {() => {m = m(R)}} /> </div> `;
  var handleEventCode = `function handleEvent(e) { 
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
  }`;
  $$result.css.add(css$1);
  return `<div style="margin-left: 8%; margin-right: 8%"><h1 style="text-align: center" data-svelte-h="svelte-mpxol8">Recursive Closures</h1> <span class="light svelte-7c47tb" data-svelte-h="svelte-43ixzb">Closures defined by letting m = M(x) for some variable &quot;m&quot; and any value &quot;x&quot;
    (see below) are recursive in the sense that: <br>
    (A) the inner function, named &quot;go&quot;, repeatedly calls itself, and <br>
    (B) go repeatedly modifies &quot;x&quot; by means of varying functions &quot;func&quot; which are:<br>
        (1) currently queued in front of the copy of go named &quot;m&quot;,
    <br>
        (2) provided later if the current value of &quot;x&quot; is still alive
    in memory; i.e., if the program in which &quot;m&quot; is defined is still running. or
    <br>
        (3) the current value of x is preserved in permanent storage.</span> <p data-svelte-h="svelte-1rd48nt">Regarding the last item and x retrieved from storage: If m is defined, then <span>\`m(()=&gt;x)(newFunc1)(newFunc2)</span> ... Otherwise, redefine m with &quot;m = M(x) using the most recent value of x.</p> <pre class="dis svelte-7c47tb">${escape(Mdis)}</pre> <pre class="play svelte-7c47tb">${escape(Mplay)}</pre> <pre class="dis svelte-7c47tb">${escape(Mend)}</pre> <dist class="light svelte-7c47tb" data-svelte-h="svelte-1mq2aot">Anonymous Computation:</dist> <pre>${escape(v3)}</pre> <br> <div class="light svelte-7c47tb"><span data-svelte-h="svelte-1xp33cu">Encapsulated State:</span> <pre>${escape(v4)}</pre> <pre>${escape(v5)}</pre> <span data-svelte-h="svelte-krlx4g">Sometime later (the garbage collector ignores closures):</span> <pre>${escape(v6)}</pre> <pre>${escape(v7)}</pre> <pre>${escape(v8)}</pre> <pre>${escape(v9)}</pre></div> <span class="teaser svelte-7c47tb" data-svelte-h="svelte-1kemneu">Rubik&#39;s Cube Simulation</span> <span class="teaser svelte-7c47tb" data-svelte-h="svelte-1m5xeh6">***********************************************************************
    <br>
    Case 1 -- Clicking on the three visible sides of the cube.</span> <p data-svelte-h="svelte-15jm8w5">The visible cube interface gives access to all six sides. Clicking the
    center of each face causes rotation of the whole cube around the axis
    perpendicular to that center. Everything moves except for clicked center and
    its counterpart on the opposite side</p> <p data-svelte-h="svelte-1dvpdqe">x in the Rubik&#39;s cube application is an array of six nine-member arrays of
    references to the strings &quot;blue, green, red, orange, yellow, and white.&quot;
    These strings correspond to the names of CSS selectors, and the
    &quot;background-color&quot; properties of each. Here&#39;s what I mean:</p> <pre>${escape(css)}</pre> <p data-svelte-h="svelte-8cvcfg">The 54 divs that combine to represent the cube in the DOM are shown below.
    The visual representation that appears in the browser is on the next page, <a href="./cube7">Rubik&#39;s cube</a></p> <p data-svelte-h="svelte-8tet7v">Notice that the front, top, and right side representations contain buttons.
    Go to <a href="./cube7">Rubik&#39;s cube</a>, click the &quot;Start&quot; button or press
    the &#39;V&#39; key to restore the cube to it to the &quot;solved&quot; configuration, then
    click the upper left corner of the right side of the cube. The right face
    rotates counterclockwise 90 degrees pursuant to the &quot;on:click&quot; instruction
    seen in the DOM representation (below). &quot;m = m(Rz)&quot; executes. &quot;m(Rz)&quot;
    updates x in the m-M(x) closure; the &quot;m =&quot; part triggers reactivity, causing
    the update to immediately appear in the browser.&quot;</p> <p data-svelte-h="svelte-1jp8yo9">Now click on the top center three times. The right side should be green now.
    Rotate the right side counterclockwise by clicking on its upper left corner.
    Now click the top center once to restore the cube to its original
    orientation.</p> <span style>Digression: <p data-svelte-h="svelte-1jsuhqy">This section is about clicking on cube image, but when we get to it later,
      you will see that pressing the &quot;R&quot; key or clicking the button labeled &quot;R&quot;
      rotates whatever face happens to be on the right when the &quot;R&quot; key is
      pressed.or the &quot;R&quot; button is clicked.</p> <p></p> <pre>${escape(dom)}</pre> <span class="teaser svelte-7c47tb" data-svelte-h="svelte-7v2gj1">***********************************************************************
      <br>
      Case 2 -- Clicking on the buttons.</span> <p data-svelte-h="svelte-d2x6fh">Similar to clicking on parts of the cube, the callback specified in
      buttons that rotate faces, middle sections, and the entire cube do so by
      calling m(func) for some function &quot;func&quot; that rearranges arrays of six
      nine-element arrays. This results in x mutating into fu on the same
      functions that are invoked when the the click is on a section of the cube.
      For example,</p> <pre>${escape(example3)}</pre> <span class="teaser svelte-7c47tb" data-svelte-h="svelte-kozoi1">***********************************************************************
      <br>
      Case 3 -- Key presses.</span> <p data-svelte-h="svelte-115h0va">Pressing keys invokes eventHandler(e) where &quot;e&quot; is the key-press event and
      eventHandler is defined as follows:</p> <pre>${escape(handleEventCode)}</pre> <p data-svelte-h="svelte-16gky82">&quot;svelte:window on:keypress = { handleEvent } &quot; routes keyPress
      event objects to handleEvent.</p> <p data-svelte-h="svelte-zzj0dz">The <a href="./cube7">Rubik&#39;s Cube simulation</a> features a m-M(x)
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
      section provides function definitions, and nothing more.</p> <span class="teaser svelte-7c47tb" data-svelte-h="svelte-1a8jbkd">***********************************************************************</span> <div class="background"><p style="color: lightgreen; font-size: 28px; font-weight: bold " data-svelte-h="svelte-deyoys">Background:</p> <p style="color: lightgreen;" data-svelte-h="svelte-19kfnrq">Indiana University awarded me a bachelor of science degree in chemistry,
        a master&#39;s degree in mathematics, and a doctor of jurisprudence degree
        in law. Sun Microsysystems certified me as a Java Programmer and Java
        Website Developer, which qualified me for a job I took at Indiana
        University, working on a project as a Programmer/Systems Analyst. I got the certifications and entry-level position at I.U. because I believed my doctor when he told me he couldn&#39;t refer me to the liver transplant clinic in Indianapolis unless I got &quot;good&quot; insurance coverage, the kind provided by Indiana University to its employees. I didn&#39;t know about Indiana&#39;s high risk insurance program, which I could have afforded continuing to practice law. The cost was around $1000.00 per month. It was Indiana&#39;s way of guaranteeing health care for the middle class and less affluent people with benefactors willing to pay their premiums.</p> <p style="color: lightgreen;" data-svelte-h="svelte-1kc4x8w">Back in the 1980s, I learned to contact online bulletin boards over the telephone. In 1995, I learned some JavaScript playing around with the amazing Netscape Navigator browser. Then I learned to use some web application frameworks for my law practice website. Programming fascinated me, and over the years I learned to write simple programs in numerous languages. My very first language was Fortran, which I learned in college while working on my bachelor&#39;s degree in chemistry.</p> <p style="color: lightgreen;" data-svelte-h="svelte-17nb89f">My son, Alexander, enjoyed a dice game called &quot;score&quot; that he learned in school, so I developed an online, multi-player version in the Haskell programming language. Users can modify the game and prompt it to display any and all possible solutions. I found a binary version I compiled with the Glasgow Haskell Compiler (GHC) in 2014. It runs online at http://schalk2:3055. There isn&#39;t a working secure version. https://score.schalk2.com loads the login screen, but goes no further than that. Here&#39;s a link: <a href="http://schalk2.com:3055" target="_blank">Game of score</a>. The code is at <a href="https://github.com/dschalk/score2">https://github.com/dschalk/score2</a></p> <p style="color: lightgreen;" data-svelte-h="svelte-13i7vub">I&#39;ll never again get involved in a Java project and I can&#39;t imagine ever
        again needing React. After developing an elaborate online multi-player
        game in the Haskel programming language, still using React for the user
        interface, I decided to stick with JavaScript and simple frameworks.
        This is a SvelteKit application.</p> <p style="color: lightgreen;" data-svelte-h="svelte-1n4pi73">While it makes sense to develop web applications with a few elaborate
        functions in conjunction with reusable small ones, I decided to try the
        opposite approach. What I discovered is worth sharing, to say the least,
        so here it is.</p> <p data-svelte-h="svelte-11qf2a9">The code samples at the top of this page shows that function composition
        using M can&#39;t be more transparent, concise, and maintainable. Going
        beyond numerical computations, M holds the ever-changing state of play
        in the<a href="./score">Game of Score</a>, but that application relies
        too heavily on the functions that transform x in the m-M(x) closure. A
        modified version of M will make the code more efficient and
        understandable after I refactor the application.</p> <p data-svelte-h="svelte-2y9he2">A few additional lines of code in M can facilitate nesting of mixed
        synchronous and asynchronous functions handled by m, and can help avoid
        mutations by providing an array, let&#39;s call it &quot;ar&quot;, into which f(x)
        (which runds after m(f)) can be pushed, and having dF3x prompt the
        return of ar.slice(-1)[0] when f === dF3x. But enough of the small
        stuff, now it&#39;s time to show m-M(x) closures in all their glory, deftly
        making complex applications work while they do nothing but allow the
        function m to transform them by means of the functions m fetches. The <a href="./cube7">Simulated Rubik&#39;s cube</a> is a case in point.</p> <p data-svelte-h="svelte-14wboki">The array x in the m-M(x) Rubik&#39;s cube array is an array consisting of
        six nine-member arrays of references to the strings &quot;blue, green, red,
        orange, yellow and white.&quot; Functions called in response to DOM key
        presses and mouse clicks rearrange these strings, which are the names of
        CSS classes whose &quot;background-color&quot; properties match the names of the
        selectors that contain them. For example, the CSS class &quot;blue&quot; contains
        the line, &quot;background-color: &quot;blue&quot;.</p> <p id="cow7" data-svelte-h="svelte-1jc3qmd">To understand the interface between the m-M(x) representation of the
        cube with the 54 colored divs in the DOM, we first need to know how x in
        the closure is defined. Here it is:</p> <pre>${escape(classCode2)}</pre> <p data-svelte-h="svelte-r2a6lm">m(dF3x)[0][0] on the solved cube representation in the DOM is a div with
        class = &quot;blue&quot;. Here&#39;s blue&#39;s definition:</p> <pre>${escape(showBlue)}</pre> <p data-svelte-h="svelte-1n05fgy">Below is the cube representation in the DOM. Notice how the colors
        corresponds with the image in the monitor -- orange in front m(dF3x)[3],
        blue on the side m(dF3x)[0], and yellow on top (m(dF3x)[4]).</p> <pre>${escape(dom)}</pre> <p data-svelte-h="svelte-10k2eny"><a href="./cube7#cow8">This link</a> takes you to a demonstration driving
        home the point that the mere rearrangement of x in the m-M(x) closure, along
        with a self-reference of m to m, is sufficient to trigger reactivity in Svelte.
        It also shows that the only heavy lifting, such that it is, consists of rearranging
        references to strings. The 54 divs that constitute the DOM representation
        remain stationary.</p> <p data-svelte-h="svelte-yp0kv4">When you press &quot;r&quot;, click the &quot;R&quot; button, or click the upper leift
        corner of the right side of the cube representation, the function &#39;R&#39; is
        called on the array of six arrays of references to strings in the m-M(x)
        closure. The current configuration of x in the closure is of no concern
        to &#39;R&#39;. It rearranges the strings based solely on their positions -- 54
        positions, ranging from m(dF3x)[0][0] to m(dF3)[5][8].</p> <p data-svelte-h="svelte-1cuf12l">R specifies that whatever string reference happens to be in position
        m(dF3x)[3][2] changes to whatever string reference happens to be in
        position m(dF3x)[5][2]. If the cube is in its starting configuration
        (solved, prior to scrambling), the upper right front corner will go from
        orange to white. Beyond that, we know nothing about the color of the
        front upper right corner before or after m(R) runs. The class will
        change to the whatever the class of the div in the front upper right
        corner (m(dF3x)(5)(2)) happens to be, but the background-color of that
        class might be whatever the background color of m(dF3x)(3)(2) happens to
        be. Here&#39;s the definition of R:</p> <pre>${escape(Rcode)}</pre> <p data-svelte-h="svelte-1n96bqf">When R returns temp, the transformation of x completes. It&#39;s new value
        is temp since x = Func(x) and Func is R in this instance.</p> <h1 data-svelte-h="svelte-squptw">STOP</h1> <p data-svelte-h="svelte-1wdccrv">This is where the revision ends.</p>
      paypal card denominations

      <p data-svelte-h="svelte-tojbup">The <a href="./cube7">Simulated Rubik&#39;s cube</a> page has gone through improvements,
        including code refactoring, that render much of its text incorrect -- but
        the cube itself works like a charm. Here&#39;s an explanation of the code, beginning
        with the interface between the closure holding the array of six nine-member
        arrays of references to the strings &quot;blue, green, red, orange, yellow, and
        white&quot; and the div containing six nine-member arrays of divs. The strings
        in the representation are the names of CSS classes with background-color
        entries corresponding to their names.</p> <p data-svelte-h="svelte-15772xe">The code samples at the top of this page show that function composition
        using M can&#39;t be more transparent, concise, and maintainable. When I get
        around to it, I&#39;ll show how slight modification of M facilitate nesting
        of mixed synchronous and asynchronous handled by m, and how, when x is
        an array, pushing modifications onto it can avoid mutations. The code is
        tested and good to to, but it&#39;s time now to show m-M(x) closures
        handling larger applications. There&#39;s the <a href="./score">Game of Score</a>
        and my current project, <a href="./cube7">Simulated Rubik&#39;s cube</a>.</p> <p data-svelte-h="svelte-1mcz7i1">Key press and mouse click events call eventHandler(e) where e is an
        object containing an integer named keyCode. If eventHandler contains an
        object with a keyCode number matching keyCode in e, m(f) is called where
        f is a function that rearranges resides response to events initiated in
        the DOM.</p> <p data-svelte-h="svelte-1mggid6">Events initiated by user key presses and clicks cause eventHandler() to
        call m on functions that operate on arrays of six nine-member arrays.</p></div> <p data-svelte-h="svelte-1bedmew">The following discussion centers around the function M (defined below),
      along with closures of the form m-M(x), where m = M(x) and x can be any
      JavaScript value.</p> <p data-svelte-h="svelte-o0dycy">M can, of course, be modified to include try-catch blocks, objects, or
      anything else. Modification of M in this presentation are small. The
      functions provided to m are responsible for turning the six sides and
      three middle sections of the cube.</p> <p data-svelte-h="svelte-wxrfoh">The simulated Rubik&#39;s cube example follows the convention of creating an
      application&#39;s main closure by calling &quot;m = M(x)&quot;, where x can be any
      value, and r-erring to the result as &quot;the m-M(x) closure.&quot; &quot;x&quot; is
      encapsulated, sequestered from everything outside the closure&#39;s scope. As
      is apparent from the definition of M (below_), &#39;x&#39; can be modified by
      calling m(func) for some function &quot;func&quot;. In the simplest version of &quot;M&quot;,
      calling m(func) mutates &quot;x,&quot; changing it from x to func(x).</p> <p data-svelte-h="svelte-nio40q"><span style="color:yellow; font-weight:bold">CAUTION</span> as will be
      extensively discussed on this page, m(dF3x) is a reference to &#39;x&#39; in the
      closure unless the line in M,
      <span class="O svelte-7c47tb">if (func === dF3x) return x;</span>
      is changed to <span class="O svelte-7c47tb">if (func === dF3x) return clone(x)</span> for
      some function &quot;clone&quot; that returns a perfect duplicate of &#39;x&#39; with an address
      in memory different from that of &#39;x&#39;. More about that later. First, here&#39;s
      the definition M and some examples of m-M(x) closures:</p> <p data-svelte-h="svelte-sknn1e">The <a href="./score#mDef">Solitaire Game of Score</a> involves using two six-sided,
      one twelve-sided, and one twenty-sided die along with arithmetic and concatenation
      to arrive at the number 20 in two or more moves. The initial value of &quot;x&quot; in
      the m-M(x) closure is shown in the definition of m2:</p> <pre data-svelte-h="svelte-1fbr1ln">m2 = M([ 
    [Math.floor(Math.random() * 6)   + 1, Math.floor(Math.random() * 6) + 1,
     Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
     [], [&#39;+&#39;], [], [0], [], [0], [] 
]);</pre> <h2 data-svelte-h="svelte-ej0cvp">The Simulated Rubik&#39;s Cube</h2> <p data-svelte-h="svelte-1u4ms8j">The <a href="./cube7">simulated Rubik&#39;s cube</a> is another example of a fairly
      complex application whose state is maintained in a tiny closure. The bare bones
      M shown above can handle the transformations of the cube, from keystroke or
      button click to the result seen in the browser. But, in order to facilitate
      taking back a series of moves, an array of references to every argument provided
      to m was added.</p> <h3 class="svelte-7c47tb" data-svelte-h="svelte-1we8piy">The Code Directly Responsible for the Browser Display</h3> <p data-svelte-h="svelte-1io4wrf">In the DOM, the simulated Rubik&#39;s cube consists of 6 groups of 9 Div
      elements. User moves rearrange classes. Cubies change color when they are
      assigned a class with a different background</p> <p data-svelte-h="svelte-p7wnbe">Those arguments are functions that operate on x in the m-M(x) closure;
      i.e., that operate on <span style="color: orange">[ bb, gg, rr, oo, yy, ww ]</span>, the array that determines the background colors of the 54 divs in the
      DOM, thereby controling the configuration of the cube displayed in the
      browser. When an array was added to the definition of M, the original M
      was renamed M2. Here&#39;s the complete definition of m in the m-M(x) closure,
      beginning with the revised definition of M:</p> <pre>${escape(Mcode)}</pre> <pre>${escape(classCode2)}</pre> <p data-svelte-h="svelte-19ldkaq">As the line &quot;else x = func(x);&quot; in the definition of M indicates, m(func)
      causes func(x) to replace x in the m-M(x) closure unless func is dF3x or
      dF3ar. Pressing the &quot;r&quot; key or clicking on the &quot;R&quot; rotates the right side
      of the cube clockwise a quarter turn. See how it uses the elements of the
      current configuration (named &quot;ar&quot;) of <span style="color: orange">[ bb, gg, rr, oo, yy, ww ]</span> as a source of building blocks to assemble the updated configuration, named
      &quot;temp.&quot;</p> <pre>${escape(Rcode)}</pre> <p data-svelte-h="svelte-fome7h">The functions that manipulate the cube have numerous lines of code, but
      they are as simple as they could possibly be. They don&#39;t rely on
      procedures to determine what goes where during the construction of &quot;temp&quot;,
      they are just instructions specifying the new locations of the elements of
      the array held in the m-M(x) closure. While not organized in tabular form,
      they are essentially items in a lookup table.</p> <p data-svelte-h="svelte-bzxsym">If the meanings of passing by value and passing by reference is clear, as
      I&#39;m sure it is for many of you, reading the rest of this section on the
      Rubik&#39;s cube simulator might be tedious. For those who are still a little
      unsure, I hope reading this will be the breakthrough that clarifies it
      once and for all.</p> <p data-svelte-h="svelte-1cs8rkg">With moves stored in ar, setting the cube configuration back to where it
      was prior to the most recent move requires nothing more than the three
      short lines of code in the function &quot;reverse&quot;. When m(dF3ar) is modified
      in reverse, &#39;x&#39; is simultaneously modified in the m-M(x) closure. This is
      because both &#39;x&#39; and m(dF3ar) are references to the same address in
      memory. Change what is stored at that address with either one, and that
      will be the value of both &#39;x&#39; and &#39;m(dF3ar) and any other variable that
      happens to point to that location.</p> <pre>${escape(reverseShow)}</pre> <p data-svelte-h="svelte-1odqlsk">m(dF3ar) is a reference to ar in the m-M(x) closure, so reverse() shortens
      the length of ar inside the closure. Very little browser memory is needed
      to store the information necessary to reverse hundreds of moves. Making
      moves is not resource intensive either. A move doesn&#39;t rearrange the div
      elements of the cube or rotate numerous little cubits, as is the case with
      many Rubik&#39;s cube simulators. All it does is rearrange the placement of
      the strings (names of colors) referring to some CSS classes.</p> <p data-svelte-h="svelte-zonyi">The reverse function is oblivious to precisely which functions were
      responsible for the transformations being reversed. Whatever the function
      at the top of the list happens to be, it runs three more times. After foo
      executes, it and the function that was reversed are discarded, making the
      list one item shorter than it was.</p> <div style="margin-left:2%; margin-right: 2%;" data-svelte-h="svelte-oza92p"><img class="display_image svelte-7c47tb"${add_attribute("src", passBy, 0)}></div> <div style="margin-left:12%; margin-right: 12%;" data-svelte-h="svelte-1i0xasy"><p>Distinguishing between passing by value (primitives) and passing by
        reference (objects) is a stumbling block for people new to JavaScript.
        It&#39;s important to know that string, number, bigint, boolean, undefined,
        symbol, and null are the primitive values. All other values are down the
        prototype chain from Object and are, therefore, objects. Here&#39;s
        verification that a simple function is an object:</p></div> <div style="margin-left:2%; margin-right: 2%;" data-svelte-h="svelte-d1vbti"><img class="display_image svelte-7c47tb"${add_attribute("src", object, 0)}></div> <div style="margin-left:12%; margin-right: 12%;"><p data-svelte-h="svelte-1gtcic2">See &quot;prototype: Object&quot; at the bottom of the right side.</p> <a id="examples"></a> <h1 data-svelte-h="svelte-12xuzxf">Elementary Facts and Examples</h1> <p data-svelte-h="svelte-wi399x">M can serve as the outer scope for multiple orthogonal (non-interacting)
        functions, with structures identical to M&#39;s &quot;go()&quot;. For example:</p> <pre>${escape(orthoganal)}</pre> <h3 class="svelte-7c47tb" data-svelte-h="svelte-1kuwr40">&quot;M&quot; facilitates function composition.</h3> <p data-svelte-h="svelte-1wgygkn">Garbage collectors should delete this.</p> <pre>${escape(compose1)}</pre> <p data-svelte-h="svelte-1co65ep">The value &quot;x&quot; in the m-M(x) closure persists until m is redefined or
        deleted.</p> <pre>${escape(compose2)}</pre> <p data-svelte-h="svelte-16900b7">Recommended Reading: <a href="https://www.youtube.com/playlist?list=PLillGF-Rfqbars4vKNtpcWVDUpVOVTlgB">Javascript Under the Hood</a></p></div></span></div> <a href="#cow7" data-svelte-h="svelte-z78alu">Go to cow7</a> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Page as default
};
