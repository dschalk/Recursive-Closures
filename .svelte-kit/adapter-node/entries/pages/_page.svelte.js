import { c as create_ssr_component, e as escape, b as add_attribute } from "../../chunks/ssr.js";
import { C as Cubeshot } from "../../chunks/Cubeshot.js";
const css$1 = {
  code: ".middle.svelte-uebgwl{text-align:center;width:100%}span.svelte-uebgwl{color:rgb(219, 253, 244);font-size:24px;margin:0%}a.svelte-uebgwl{color:magenta}a.svelte-uebgwl:hover{color:white;background-color:#000}img.svelte-uebgwl{width:25%;height:auto}img.svelte-uebgwl{display:block;margin:0 auto;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var Mdis = `    function M (x) {
      return function go (func)
        {
            if (func === dF3x) return x;
            else x = func(x);
            return go;
        }
    }`;
  var mCode = `m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);`;
  var domCube = `<div class="face front">
                <div class="grid">
                    <button style="background-color: {m(dF3x)[3][0]}" on:click={() => {m = m(Fz)}}/>
                    <button style="background-color: {m(dF3x)[3][1]}" on:click={() => {m = m(Cx)}}/>
                    <button style="background-color: {m(dF3x)[3][2]}" on:click={() => {m = m(F)}}/>
                    <button style="background-color: {m(dF3x)[3][3]}" on:click={() => {m = m(Cyr)}}/>
                    <button style="background-color: {m(dF3x)[3][4]}" on:click={() => {m = m(Zro)}}/>
                    <button style="background-color: {m(dF3x)[3][5]}" on:click={() => {m = m(Cy)}}/>
                    <button style="background-color: {m(dF3x)[3][6]}" on:click={() => {m = m(Fz)}}/>
                    <button style="background-color: {m(dF3x)[3][7]}" on:click={() => {m = m(Cxr)}}/>
                    <button style="background-color: {m(dF3x)[3][8]}" on:click={() => {m = m(F)}}/>
                </div>
            </div>

            <div class="face right">
                <div class="grid">
                    <button style="background-color: {m(dF3x)[0][0]}" on:click={() => {m = m(Rz)}}/>
                    <button style="background-color: {m(dF3x)[0][1]}" on:click={() => {m = m(Cz)}}/>
                    <button style="background-color: {m(dF3x)[0][2]}" on:click={() => {m = m(R)}}/>
                    <button style="background-color: {m(dF3x)[0][3]}" on:click={() => {m = m(Cyr)}}/>
                    <button style="background-color: {m(dF3x)[0][4]}" on:click={() => {m = m(Xro)}}/>
                    <button style="background-color: {m(dF3x)[0][5]}" on:click={() => {m = m(Cy)}}/>
                    <button style="background-color: {m(dF3x)[0][6]}" on:click={() => {m = m(Rz)}}/>
                    <button style="background-color: {m(dF3x)[0][7]}" on:click={() => {m = m(Czr)}}/>
                    <button style="background-color: {m(dF3x)[0][8]}" on:click={() => {m = m(R)}}/>
                </div>
            </div>
            <div class="face top">
                <div class="grid">
                    <button style="background-color: {m(dF3x)[4][0]}" on:click={() => {m = m(Uz)}}/>
                    <button style="background-color: {m(dF3x)[4][1]}" on:click={() => {m = m(Cx)}}/>
                    <button style="background-color: {m(dF3x)[4][2]}" on:click={() => {m = m(U)}}/>
                    <button style="background-color: {m(dF3x)[4][3]}" on:click={() => {m = m(Cz)}}/>
                    <button style="background-color: {m(dF3x)[4][4]}" on:click={() => {m = m(Yro)}}/>
                    <button style="background-color: {m(dF3x)[4][5]}" on:click={() => {m = m(Czr)}}/>
                    <button style="background-color: {m(dF3x)[4][6]}" on:click={() => {m = m(Uz)}}/>
                    <button style="background-color: {m(dF3x)[4][7]}" on:click={() => {m = m(Cxr)}}/>
                    <button style="background-color: {m(dF3x)[4][8]}" on:click={() => {m = m(U)}}/>
                </div>        
            </div>`;
  var mCode = `      var m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
      ["green", "green", "green", "green", "green", "green", "green", "green", "green"],
      ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
      ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"],
      ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
      ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);`;
  var Fcode2 = `      var m = M([ ["yellow", "blue", "blue", "yellow", "blue", "blue", "yellow", "blue", "blue"],
      ["green", "green", "white", "green", "green", "white", "green", "green", "white"],
      ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
      ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"],
      ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "green", "green", "green"],
      ["blue", "blue", "blue", "white", "white", "white", "white", "white", "white"] ]);`;
  var functionF = `function F(ar) {
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
} `;
  var Fbeginning = `let temp = [];
temp[0] = [
ar[4][6]`;
  var Fend = `temp[5] = [
    ar[0][6],
    ar[0][3],
    ar[0][0],
    ar[5][3],
    ar[5][4],
    ar[5][5],
    ar[5][6],
    ar[5][7],
    ar[5][8], ];
return temp;
`;
  var H = "";
  var I = "";
  var G = "";
  function* generatorFunction() {
    yield `m(dF3x) // 3 (as expected from the definition of M)`;
    yield "m(v=>v**3) . . . causing 3 => 3**3 = 27";
    yield "m(dF3x) // 27 (as expected)";
    yield "m(v=>v*2)(v=>v-12) evaluates from left to right; i.e., (2 * 27) - 12.";
    yield `m(dF3x)  // 42`;
    yield `m(v=>v+7)(Math.sqrt)(dF3x)  // x in the m-M(x) closure is now sqrt(42 + 7) = 7`;
    yield `m(v = v * 6) // Back to 42`;
    yield `m(dF3x)  // 42, as expected`;
    yield H = "";
    yield I = "";
    yield ``;
    generatorFunction();
  }
  generatorFunction();
  var x3 = `    const dF3x = () => {}`;
  var fibCode = `var dF3ar = () => {};

function M2(x, ar = [0]) {
    return function go(func) {
        if (func === dF3ar) return ar
        else x = func(x);
        ar.push(x[0]);
        return go;
    };
}

function fib (n) {
  var m = M2([0,1])
  for (k = 1; k < n; k+=1) {
    m(([a, b]) => [b, a + b]);
  }
  return m(dF3ar);
}`;
  var result2 = `Array(8) [ 0, 1, 1, 2, 3, 5, 8, 13 ]`;
  var another2 = `fib(2);
console.log(m(dF3ar)) // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ] `;
  $$result.css.add(css$1);
  return ` <div style="margin-left: 8%; margin-right: 8%" id="top"><h1 style="text-align: center; color: #f5ee9f; font-size:65;" data-svelte-h="svelte-1qz4du1">Recursive Closures</h1> <p style="text-indent:3% " data-svelte-h="svelte-1anluh2">The function &#39;M&#39; (below) returns the recursive function go. Used anonymously, it facilitates efficient and transparent function composition, as in &quot;M(value)(func1)(func2)(func3)(dF3x)&quot; where &quot;dF3x&quot; in the definition of &quot;M&quot; triggers the return of func3(func2(func1(value))).</p> <p data-svelte-h="svelte-1jl7v4h">Named, for example &quot;m&quot; in the statement &quot;m = M(x),&quot; &quot;go&quot; (now &quot;m&quot;) provides a   way to modify an encapsulated value &quot;x&quot; insulated from the space holding the m-M(x) closure.     <span style="color:orange; font-weight:bold;" class="svelte-uebgwl">m( func )</span> causes <span style="color:orange; font-weight:bold;" class="svelte-uebgwl">x =&gt; func(x) </span>, pursuant to the definition of M:
  </p><div style="<color:#880000; font-size:32"><pre>${escape(x3)}</pre> <pre>${escape(Mdis)}</pre> <pre>${escape(I)}</pre> <pre>${escape(H)}</pre> <pre>${escape(G)}</pre></div> <h1 class="middle svelte-uebgwl" data-svelte-h="svelte-1h67mqj">Anonymous Closures</h1> <span class="svelte-uebgwl" data-svelte-h="svelte-1wazq3q">    Anonymous closures can perform computations without leaving persistent closures in memory. The results might be assigned to variables, placed in persistent objects, memorialized in log files, and so forth; but the closures that produced those results are subject to immediate garbage collection. Here&#39;s an example of an anonymous closure:
  <br><br> </span><span style="color: #f5ee9f; text-align:center; width: 100%; font-size:30px" class="svelte-uebgwl" data-svelte-h="svelte-gmmifs">M( 3 )( v=&gt;v**3 )( v=&gt;v+v )( v=&gt;v-5 )( Math.sqrt )( dF3x )    // 7</span> <br><br> <h1 class="middle svelte-uebgwl" data-svelte-h="svelte-1ujfm0a">Maintaining State in Named Closures</h1> <p data-svelte-h="svelte-905ze6">Instead of returning a number, we could return a re-named copy of go.</p> <span style="color: #f5ee9f; text-align:center; width: 100%; font-size:30px" class="svelte-uebgwl" data-svelte-h="svelte-xeebah">var m = M( 3 )( v=&gt;v**3 )( v=&gt;v+v )( v=&gt;v-5 )( Math.sqrt )
   <br><br>
m(dF3x);     // 7</span> <p data-svelte-h="svelte-a7gzwi">The value of x encapsulated in the m-M(x) closure is 7. m(func) for any function &#39;func&#39; results in x = func(x).</p> <span style="color: #f5ee9f; text-align:center; width: 100%; font-size:30px" class="svelte-uebgwl" data-svelte-h="svelte-18q26pz">m( v =&gt; v*6 );
   <br><br>
m(dF3x));    // 42</span> <p data-svelte-h="svelte-1fw40tb">To see how m-M(x) closures handle asynchronous functions, go to <a href="./async5#yes" class="svelte-uebgwl">Async</a>.</p> <h1 class="middle svelte-uebgwl" data-svelte-h="svelte-flucp0">Defining Clones</h1> <p data-svelte-h="svelte-7l6d7k">Neither JSON.parse(JSON.stringify()), Object.assign(), spread operators, nor structuredClone can clone m, M, or the whole m-M(x) closure, such as those defined at <a href="./" class="svelte-uebgwl">here</a> and <a href="./cube" class="svelte-uebgwl">Rubik&#39;s Cube</a>; or, for that matter, any data structure containing a function. The <a href="./Clones" class="svelte-uebgwl">Clones page</a> demonstrates how, for any m-M(x) closure, &quot;mclone = m&quot; followed by &quot;mclone = M(mclone(dF3x))&quot; creates a deep clone named &quot;mclone.&quot;</p> <h1 class="middle svelte-uebgwl" data-svelte-h="svelte-17a9vey">Avoiding Side Effects</h1> <p data-svelte-h="svelte-wwl6m2">An array can be sequestered from everything else in a program, module, or application by encapsulating it in a recursive closure defined inside of a function. Here we use a slightly modified definition of &#39;M&#39; named &#39;M2&#39; to define a recursive x-M2(x) closure in the function &#39;fib&#39;:</p> <pre>${escape(fibCode)}</pre> <p data-svelte-h="svelte-61wdga">The Firefox developer console (loaded by pressing the F12 key) displays this result:</p> <pre>${escape(result2)}</pre> <p data-svelte-h="svelte-139jkst">Calling &quot;fib(2)&quot; adds two more numbers to the Fibonacci numbers encapsulated in the m-M2(x) closure.</p> <pre>${escape(another2)}</pre> <h1 style="text-align: center; color: #f5ee9f" data-svelte-h="svelte-3x2697">A Fast and Efficient Virtual Rubik&#39;s Cube</h1> <p data-svelte-h="svelte-1oicyzr">Here&#39;s the HTML code:</p> <pre>${escape(domCube)}</pre> <p data-svelte-h="svelte-1v1b7sp">And here&#39;s the JavaScript representation of the virtual Rubik&#39;s cube:</p> <pre>${escape(mCode)}</pre> <p data-svelte-h="svelte-16yt25q">After pressing &quot;F&quot;, clicking the &quot;F&quot; button, or clicking the upper or lower right side of the front of the virtual cube, x in the m-M(x) rearranges to this configuration:
</p><pre>${escape(Fcode2)}</pre> <p data-svelte-h="svelte-145bh0k">And the cube looks like this:</p>example:

<img${add_attribute("src", Cubeshot, 0)} alt="Right side turned" style="width:150px;height:155px;" class="svelte-uebgwl"> <pre>${escape(functionF)}</pre> <p data-svelte-h="svelte-1go0zhe">F populates a temporary array &quot;temp&quot; with values taken from locations on x specified by the definition of F. It begins with 
  </p><pre>${escape(Fbeginning)}</pre> <p data-svelte-h="svelte-le3lti">F ends with:</p> <pre>${escape(Fend)}</pre> <p data-svelte-h="svelte-xznn5c">R replaces the first three elements of temp[5] with whatever strings happen to be at x[0][6], x[0][3]Then F returns temp, causing it to replace the current value of x. The values of the strings F places in temp are not relevant.   locations without regard to whetheexampler the strings happen to be &quot;blue&quot;, &quot;green&quot;, &quot;red&quot;, &quot;orange&quot;, &quot;yellow&quot;, or &quot;white&quot;.
</p><p data-svelte-h="svelte-ei6jrz">Looking at x after the transformation (above), we see that the first thing F(x) does is move the string that happens to be at x[4][6] to x[0][0], Near the bottom of F, we see that x[0][0] goes to x[5][2]. Whatever happened to be at x[5][2] ends up at x[1][8].</p> <p data-svelte-h="svelte-1vfx9g">x remains an array of six nine-member arrays of strings, maintaining its one-to-one correspondence with the six, nine-cubit sides of the virtual Rubik&#39;s cube. None of the functions available to users change the structure of x, just as solving a real Rubik&#39;s does not change the number of cubits on each side of the cube.




</p><h1 style="text-align: center; color: #f5ee9f" data-svelte-h="svelte-13ler7r">The Game of Score</h1> <p data-svelte-h="svelte-afo6fr">The <a href="./score#mDef" class="svelte-uebgwl">Solitaire Game of Score</a> involves using two six-sided,
      one twelve-sided, and one twenty-sided dice along with arithmetic and concatenation
      to arrive at the number 20 in two or more moves. The initial value of &quot;x&quot; in
      the m-M(x) closure is shown in the definition of m2:</p> <pre data-svelte-h="svelte-1fbr1ln">m2 = M([ 
    [Math.floor(Math.random() * 6)   + 1, Math.floor(Math.random() * 6) + 1,
     Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
     [], [&#39;+&#39;], [], [0], [], [0], [] 
]);</pre></div> 
/*

<div style="color: #FFCC00; margin-left:12% " data-svelte-h="svelte-595dxa">var m = M(3)
<br>
var m2 = m(() =&gt; m(dF3x))
<br>
var m3 = M(m(dF3x))
<br> <br>
log(m === m2)  // true
<br>
log(m === m3)  // false
<br>
log(m2 === m3) // false 
<br> <br>
log( m(v =&gt; v * 2),  m2(v =&gt; v * 3))
<br>
log(m(dF3x),m2(dF3x),m3(dF3x)); // 18, 18, 3 ;
<br></div> <br><br><br> <a href="#top" class="svelte-uebgwl" data-svelte-h="svelte-1887boa">Back to the top</a> <br><br><br> <br><br><br> <br><br><br> <br><br><br> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Page as default
};
