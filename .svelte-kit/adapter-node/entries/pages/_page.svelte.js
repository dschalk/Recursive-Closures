import { c as create_ssr_component, e as escape, b as add_attribute } from "../../chunks/ssr.js";
import { C as Cubeshot } from "../../chunks/Cubeshot.js";
const css$1 = {
  code: ".middle.svelte-1dqz71m{text-align:center;width:100%}.middle2.svelte-1dqz71m{text-align:center;width:100%;font-size:26px}span.svelte-1dqz71m{color:rgb(219, 253, 244);font-size:24px;margin:0%}a.svelte-1dqz71m{color:magenta}a.svelte-1dqz71m:hover{color:white;background-color:#000}img.svelte-1dqz71m{width:25%;height:auto}img.svelte-1dqz71m{display:block;margin:0 auto;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  var MCode = `    const dF3x = () => {}

    function M (x) {
      return function go (func)
        {
            if (func === dF3x) return x;
            else x = func(x);
            return go;
        }
    }`;
  $$result.css.add(css$1);
  return ` <div style="margin-left: 8%; margin-right: 8%" id="top"><h1 class="middle svelte-1dqz71m" data-svelte-h="svelte-zjsxjc">Recursive Closures</h1> <p style="text-indent:3% " data-svelte-h="svelte-9eetjc">The function &#39;M&#39; (below) returns the recursive function go. Used anonymously, it facilitates efficient and transparent function composition as in, for example, &quot;M(3)(v=&gt;v**3)(v=&gt;v*2)(v=&gt;v-5)(Math.sqrt)(v=&gt;v*6)(dF3x) = 42&quot; where &quot;dF3x&quot; in the definition of the function returned by &quot;M(3)&quot; triggers the return of what 3 becames after being cubed, doubled, diminished by 5, etc.</p> <pre>${escape(MCode)}</pre> <p data-svelte-h="svelte-a3c4qe">The statement &quot;m = M(x)&quot; creates an m-M(x) closure, where &quot;x&quot; can be any value. Encapsulated in the m-M(x) closure, &quot;x&quot; is insulated away from other functions that might accidentally clobber it, and safe from being garbage-collected. If the <span style="word-break:keep-all" class="svelte-1dqz71m">m-M(x)</span> closure is maintained in a database, x is preserved until such time as m(func) is called for some function &quot;func&quot; causing the value held in the closure to become &quot;func(x)&quot;. The definition of M can be modified to avoid mutation. To see how M can be modified to handle asynchronous functions, go to <a href="./async5#yes" class="svelte-1dqz71m">Async</a>.</p>  <h1 class="middle2 svelte-1dqz71m" data-svelte-h="svelte-1fd8f8m">Maintaining State in Named Closures</h1> <p data-svelte-h="svelte-1ja7si8">At <a href="./cube" class="svelte-1dqz71m">Rubik&#39;s cube</a> and <a href="./score" class="svelte-1dqz71m">Game of Score</a>, x in the m-M(x) closures is the a JavaScript representation of the current configuration of a Rubik&#39;s cube and the current state of game play, respectively. These can be ignored for a time; then later, the Rubik&#39;s cube can be solved and the game of Score finished. JavaScript garbage collectors don&#39;t destroy closures.</p> <h1 class="middle2 svelte-1dqz71m" data-svelte-h="svelte-1chh2l4">Defining Clones</h1> <p data-svelte-h="svelte-1ah5u88">Neither JSON.parse(JSON.stringify()), Object.assign(), spread operators, nor structuredClone can clone m, M, or m-M(x) closures, such as those defined at <a href="./" class="svelte-1dqz71m">here</a> and <a href="./cube" class="svelte-1dqz71m">Rubik&#39;s Cube</a>. None of them can clone data structures that contain functions. The <a href="./Clones" class="svelte-1dqz71m">Clones page</a> demonstrates how, for any m-M(x) closure, &quot;mclone = m&quot; followed by &quot;mclone = M(mclone(dF3x))&quot; creates a deep clone named &quot;mclone.&quot;</p> <h1 class="middle2 svelte-1dqz71m" data-svelte-h="svelte-1w5yz9f">Fibonacci Series Using a Recursive Closure</h1> <p data-svelte-h="svelte-bdrudm">Here we use a slightly modified definition of &#39;M&#39; named &#39;M2&#39; to define a recursive x-M2(x) closure in the function &#39;fib&#39;:</p> <pre>${escape(fibCode)}</pre> <p data-svelte-h="svelte-61wdga">The Firefox developer console (loaded by pressing the F12 key) displays this result:</p> <pre>${escape(result2)}</pre> <p data-svelte-h="svelte-139jkst">Calling &quot;fib(2)&quot; adds two more numbers to the Fibonacci numbers encapsulated in the m-M2(x) closure.</p> <pre>${escape(another2)}</pre> <h1 class="middle2 svelte-1dqz71m" data-svelte-h="svelte-grabzi">A Fast and Efficient Virtual Rubik&#39;s Cube</h1> <p data-svelte-h="svelte-1ah6ryy">Some of the code responsible for the <a href="./cube" class="svelte-1dqz71m">virtual Rubik&#39;s cube</a> is shown below. Here&#39;s the HTML code:</p> <pre>${escape(domCube)}</pre> <p data-svelte-h="svelte-1orwi6g">A JavaScript representation of a solved virtual Rubik&#39;s cube is shown below. &#39;x&#39; in the m-M(x) closure is an array of six nine-member arrays of strings. x[0] contains nine copies of &quot;blue&quot;. The code that determines the colors of the initial right side of the virtual cube displayed in the broswer is shown in the middle block of HTML buttons above. Each of the nine lines specifies background-colors which are elements of x[0], all of which are &quot;blue&quot; when the m-M(x) closure is defined.</p> <pre>${escape(mCode)}</pre> <p data-svelte-h="svelte-15xi2ir">After pressing &quot;F&quot;, clicking the &quot;F&quot; button, or clicking the upper or lower right side of the front of the virtual cube, x in the m-M(x) closure rearranges to this configuration:
</p><pre>${escape(Fcode2)}</pre> <p data-svelte-h="svelte-145bh0k">And the cube looks like this:</p>example:

<img${add_attribute("src", Cubeshot, 0)} alt="Right side turned" style="width:150px;height:155px;" class="svelte-1dqz71m"> <p data-svelte-h="svelte-1odlfg9">Here&#39;s the definition of F:</p> <pre>${escape(functionF)}</pre> <p data-svelte-h="svelte-v62ybc">F populates a temporary array &quot;temp&quot; with values taken from locations on the current configuration of x. It populates temp[0][0], temp[0][3], temp[0][6], with whatever strings happen to be at x[4][2], x[4][5], and x[4][8]. When m(F) returns temp, temp becomes the value of x in the m-M(x) closure.</p> <h1 style="text-align: center; color: #f5ee9f" data-svelte-h="svelte-13ler7r">The Game of Score</h1> <p data-svelte-h="svelte-afo6fr">The <a href="./score#mDef" class="svelte-1dqz71m">Solitaire Game of Score</a> involves using two six-sided,
      one twelve-sided, and one twenty-sided dice along with arithmetic and concatenation
      to arrive at the number 20 in two or more moves. The initial value of &quot;x&quot; in
      the m-M(x) closure is shown in the definition of m2:</p> <pre data-svelte-h="svelte-1fbr1ln">m2 = M([ 
    [Math.floor(Math.random() * 6)   + 1, Math.floor(Math.random() * 6) + 1,
     Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
     [], [&#39;+&#39;], [], [0], [], [0], [] 
]);</pre></div> <a href="#top" class="svelte-1dqz71m" data-svelte-h="svelte-1887boa">Back to the top</a> <br><br><br> <br><br><br> <br><br><br> <br><br><br> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Page as default
};
