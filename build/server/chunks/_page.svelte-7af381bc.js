import { c as create_ssr_component, e as escape, f as null_to_empty } from './ssr-6e786045.js';

const css = {
  code: '.cell.svelte-1n2cpd4{justify-content:center;align-items:center;display:flex;font-family:Arial;font-size:3rem;font-weight:bold;background:white}.o0.svelte-1n2cpd4::before{width:60px;font-size:42px;font-weight:bold;background-color:orange;content:"o0"}.o1.svelte-1n2cpd4::before{font-size:42px;font-weight:bold;background-color:orange;content:"o1"}.o2.svelte-1n2cpd4::before{font-size:42px;font-weight:bold;background-color:orange;content:"o2"}.o3.svelte-1n2cpd4::before{font-size:42px;font-weight:bold;background-color:orange;content:"o3"}.o4.svelte-1n2cpd4::before{font-size:42px;font-weight:bold;background-color:orange;content:"o4"}.o5.svelte-1n2cpd4::before{font-size:42px;font-weight:bold;background-color:orange;content:"o5"}.o6.svelte-1n2cpd4::before{font-size:42px;font-weight:bold;background-color:orange;content:"o6"}.o7.svelte-1n2cpd4::before{font-size:40px;font-weight:bold;background-color:orange;content:"o7"}.o8.svelte-1n2cpd4::before{font-size:40px;font-weight:bold;background-color:orange;content:"o8"}.r0.svelte-1n2cpd4::before{font-size:40px;font-weight:bold;background-color:red;content:"r0"}.r1.svelte-1n2cpd4::before{font-size:40px;font-weight:bold;background-color:red;content:"r1"}.r2.svelte-1n2cpd4::before{font-size:40px;font-weight:bold;background-color:red;content:"r2"}.r3.svelte-1n2cpd4::before{font-size:40px;font-weight:bold;background-color:red;content:"r3"}.r4.svelte-1n2cpd4::before{font-size:40px;font-weight:bold;background-color:red;content:"r4"}.r5.svelte-1n2cpd4::before{font-size:40px;font-weight:bold;background-color:red;content:"r5"}.r6.svelte-1n2cpd4::before{font-size:40px;font-weight:bold;background-color:red;content:"r6"}.r7.svelte-1n2cpd4::before{font-size:40px;font-weight:bold;background-color:red;content:"r7"}.r8.svelte-1n2cpd4::before{font-size:40px;font-weight:bold;background-color:red;content:"r8"}.g0.svelte-1n2cpd4::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g0"}.g1.svelte-1n2cpd4::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g1"}.g2.svelte-1n2cpd4::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g2"}.g3.svelte-1n2cpd4::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g3"}.g4.svelte-1n2cpd4::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g4"}.g5.svelte-1n2cpd4::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g5"}.g6.svelte-1n2cpd4::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g6"}.g7.svelte-1n2cpd4::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g7"}.g8.svelte-1n2cpd4::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g8"}.b0.svelte-1n2cpd4::before{color:yellow;font-size:40px;font-weight:bold;background-color:blue;content:"b0"}.b1.svelte-1n2cpd4::before{color:yellow;font-size:40px;font-weight:bold;background-color:blue;content:"b1"}.b2.svelte-1n2cpd4::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b2"}.b3.svelte-1n2cpd4::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b3"}.b4.svelte-1n2cpd4::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b4"}.b5.svelte-1n2cpd4::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b5"}.b6.svelte-1n2cpd4::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b6"}.b7.svelte-1n2cpd4::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b7"}.b8.svelte-1n2cpd4::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b8"}.y0.svelte-1n2cpd4::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y0"}.y1.svelte-1n2cpd4::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y1"}.y2.svelte-1n2cpd4::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y2"}.y3.svelte-1n2cpd4::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y3"}.y4.svelte-1n2cpd4::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y4"}.y5.svelte-1n2cpd4::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y5"}.y6.svelte-1n2cpd4::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y6"}.y7.svelte-1n2cpd4::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y7"}.y8.svelte-1n2cpd4::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y8"}.w0.svelte-1n2cpd4::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w0"}.w1.svelte-1n2cpd4::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w1"}.w2.svelte-1n2cpd4::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w2"}.w3.svelte-1n2cpd4::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w3"}.w4.svelte-1n2cpd4::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w4"}.w5.svelte-1n2cpd4::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w5"}.w6.svelte-1n2cpd4::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w6"}.w7.svelte-1n2cpd4::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w7"}.w8.svelte-1n2cpd4::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w8"}.red.svelte-1n2cpd4{height:60px;width:60px;background-color:rgb(230, 113, 113);border-radius:10px}.blue.svelte-1n2cpd4{height:60px;width:60px;background-color:lightblue;display:inline;border-radius:10px}.orange.svelte-1n2cpd4{height:60px;width:60px;background-color:orange;border-radius:10px}.green.svelte-1n2cpd4{height:60px;width:60px;background-color:lightgreen;display:inline;border-radius:10px}.white.svelte-1n2cpd4{height:60px;width:60px;background-color:white;border-radius:10px}.yellow.svelte-1n2cpd4{height:60px;width:60px;background-color:yellow;display:inline;border-radius:10px}.container.svelte-1n2cpd4{width:198px;height:198px;perspective:1000px;float:right;margin-right:7%;color:aqua}.container2.svelte-1n2cpd4{float:right}.grid.svelte-1n2cpd4{display:grid;grid-template-columns:repeat(3, 60px);grid-template-rows:repeat(3, 60px);grid-gap:7px;justify-content:center}.grid2.svelte-1n2cpd4{display:grid;grid-template-columns:repeat(3, 190px);grid-template-rows:repeat(3, 190px);grid-gap:5px;justify-content:center}.cube4.svelte-1n2cpd4{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-30deg) rotateY(60deg)}.cube2.svelte-1n2cpd4{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-30deg) rotateY(150deg)}.cube3.svelte-1n2cpd4{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-30deg) rotateY(240deg)}.cube1.svelte-1n2cpd4{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-30deg) rotateY(330deg)}.cube5.svelte-1n2cpd4{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-210deg) rotateY(30deg)}.cube6.svelte-1n2cpd4{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-210deg) rotateY(120deg)}.cube7.svelte-1n2cpd4{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-210deg) rotateY(210deg)}.cube8.svelte-1n2cpd4{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-210deg) rotateY(300deg)}.face.svelte-1n2cpd4{position:absolute;width:100%;height:100%;background-color:grey}.top.svelte-1n2cpd4{transform:rotateX(90deg) translateZ(100px)}.bottom.svelte-1n2cpd4{transform:rotateX(-90deg) translateZ(100px)}.right.svelte-1n2cpd4{transform:rotateY(90deg) translateZ(100px)}.left.svelte-1n2cpd4{transform:rotateY(-90deg) translateZ(100px)}.front.svelte-1n2cpd4{transform:rotateX(0deg) translateZ(100px)}.back.svelte-1n2cpd4{transform:rotateX(-180deg) translateZ(100px)}@keyframes svelte-1n2cpd4-spin{from{transform:rotateX(0deg) rotateY(0deg)}to{transform:rotateX(360deg) rotateY(360deg)}}button.svelte-1n2cpd4{margin-left:1%;background-color:lightblue;border-width:2px;border-color:#E8F7C1;border-radius:10px;color:blue;font-size:20px;box-shadow:0px 0px 15px 0px rgb(255, 215, 0);padding:3px 10px 3px 10px}button.svelte-1n2cpd4:hover{color:blue;background-color:gold;border-color:#E8F7C1;border-radius:10px;box-shadow:0px 0px 25px 0px rgb(255, 255, 0)}.rite.svelte-1n2cpd4{float:right}h1.svelte-1n2cpd4{text-align:center;color:#bb00ff}.col-3.svelte-1n2cpd4{position:fixed;right:12%;top:20%;width:35%}#steady.svelte-1n2cpd4{position:fixed;top:52%;left:25%}h3.svelte-1n2cpd4{color:#FFCCFF}',
  map: null
};
function M(x) {
  return function go(func) {
    if (func) {
      x = func(x);
      return go;
    } else
      return x;
  };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var ERROR = "";
  var b0, b1, b2, b3, b4, b5, b6, b7, b8;
  var g0, g1, g2, g3, g4, g5, g6, g7, g8;
  var r0, r1, r2, r3, r4, r5, r6, r7, r8;
  var o0, o1, o2, o3, o4, o5, o6, o7, o8;
  var y0, y1, y2, y3, y4, y5, y6, y7, y8;
  var w0, w1, w2, w3, w4, w5, w6, w7, w8;
  b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = "blue";
  g0 = g1 = g2 = g3 = g4 = g5 = g6 = g7 = g8 = "green";
  r0 = r1 = r2 = r3 = r4 = r5 = r6 = r7 = r8 = "red";
  o0 = o1 = o2 = o3 = o4 = o5 = o6 = o7 = o8 = "orange";
  y0 = y1 = y2 = y3 = y4 = y5 = y6 = y7 = y8 = "yellow";
  w0 = w1 = w2 = w3 = w4 = w5 = w6 = w7 = w8 = "white";
  var bb = [b0, b1, b2, b3, b4, b5, b6, b7, b8];
  var gg = [g0, g1, g2, g3, g4, g5, g6, g7, g8];
  var rr = [r0, r1, r2, r3, r4, r5, r6, r7, r8];
  var oo = [o0, o1, o2, o3, o4, o5, o6, o7, o8];
  var yy = [y0, y1, y2, y3, y4, y5, y6, y7, y8];
  var ww = [w0, w1, w2, w3, w4, w5, w6, w7, w8];
  var cube = [bb, gg, rr, oo, yy, ww];
  var m = M(cube);
  console.log("m() is", m());
  var cu;
  cu = "cube1";
  $$result.css.add(css);
  return `  <section class="columns"><div style="width: 50%"><br>  <h1 class="svelte-1n2cpd4">${escape(ERROR)}</h1> <button class="svelte-1n2cpd4" data-svelte-h="svelte-1jnjc72">Start</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-kmdmj9">Scramble</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-z03mfx">X axis rotate</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-n8hlab">Y axis rotate</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-1u1c7t1">Z axis rotate</button> <br><br> <button class="svelte-1n2cpd4" data-svelte-h="svelte-ia4gym">U</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-5q7x5o">D</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-bevvq4">R</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-1o1ree4">L</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-gxyvw">F</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-1i5efw">B</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-kytv4s">Mx</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-163u8fw">My</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-h8p958">Mz</button> <br><br> <button class="svelte-1n2cpd4" data-svelte-h="svelte-1upwmil">U&#39;</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-ip606p">D&#39;</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-4qpie9">R&#39;</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-1kf3g4h">L&#39;</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-18zq1kp">F&#39;</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-1nqm2gx">B&#39;</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-138onkn">Mx&#39;</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-cy9jkp">My&#39;</button> <button class="svelte-1n2cpd4" data-svelte-h="svelte-kw5ehj">Mz&#39;</button> <br><br>  <br><br><br> <br><br><br> <h3 style="color: darkgreen" class="svelte-1n2cpd4" data-svelte-h="svelte-h4727e">Demonstration 1 - keep scrolling down if the cube covers the text</h3> <p>Click <button style="all: revert" class="svelte-1n2cpd4" data-svelte-h="svelte-fw05yr">Reverse Niklas &#39;</button> (L&#39; U R U&#39; L U R) &quot;Reverse Niklas&quot; and observe that (1) the &quot;fish&quot; points toward the lower left and (2) the forward-facing lower-right sticker is yellow. Elementary tutorials say this configuration calls for the sune algorithm; and, indeed, sune sune makes the entire upper face yellow. Try it. <button style="all: revert" class="svelte-1n2cpd4" data-svelte-h="svelte-18zeeyj">Sune</button> (R U R&#39; U R U2 R&#39;). The cube has a way to go before being solved.</p> <p>Now click <button style="all: revert" class="svelte-1n2cpd4" data-svelte-h="svelte-1b68ia9">Start</button> and <button style="all: revert" class="svelte-1n2cpd4" data-svelte-h="svelte-fw05yr">Reverse Niklas &#39;</button> (L&#39; U R U&#39; L U R) again. Note that the upper corners have opposite colors, red and orange in this case (green and blue are also considered opposite).The lower-right side sticker and the top left uppward-facing sticker match (both are red). These observations indicate that the cube can be quickly solved. All you need to do is click <button style="all: revert" class="svelte-1n2cpd4" data-svelte-h="svelte-xtdoje">U&#39;</button> and <button style="all:revert" class="svelte-1n2cpd4" data-svelte-h="svelte-12999bm">Revolve</button> (U R U&#39; L&#39; U R&#39; U&#39; L), or click <button style="all:revert" class="svelte-1n2cpd4" data-svelte-h="svelte-x08v5">Niklas</button> (R U&#39; L&#39; U R&#39; U&#39; L).</p> <br><br><br> <br><br><br> <br><br><br> <br><br><br> <br><br><br> <br><br><br> <br><br><br></div> <br><br><br> <div style="width: 49%"> <div style="margin-left: 25px"><br><br> <button class="svelte-1n2cpd4" data-svelte-h="svelte-zy6rkl">Sune: R U R&#39; U R U2 R&#39;</button> <br> <button class="svelte-1n2cpd4" data-svelte-h="svelte-1t25e7z">Antisune: R U2 R&#39; U&#39; R U&#39; R&#39;</button> <br> <button class="svelte-1n2cpd4" data-svelte-h="svelte-131h37e">Sexy: R U R&#39; U&#39;</button> <br> <button class="svelte-1n2cpd4" data-svelte-h="svelte-vlyvsh">Reverse Sexy: U R U&#39; R&#39;</button> <br> <button class="svelte-1n2cpd4" data-svelte-h="svelte-nj5wtf">Revolve: U R U&#39; L&#39; U  R&#39; U&#39; L</button> <br> <button class="svelte-1n2cpd4" data-svelte-h="svelte-kxjqmw">Reverse Revolve: L&#39; U R U&#39; L U R&#39; U&#39;</button> <br> <button class="svelte-1n2cpd4" data-svelte-h="svelte-1f9p2o0">Sledgehammer: R&#39; F R F&#39;</button> <br> <button class="svelte-1n2cpd4" data-svelte-h="svelte-1sngs1p">Niklas: R U&#39; L&#39; U R&#39; U&#39; L</button> <br> <button class="svelte-1n2cpd4" data-svelte-h="svelte-173hecp">Reverse Niklas: L&#39; U R U&#39; L U R&#39;</button> <br> <button class="svelte-1n2cpd4" data-svelte-h="svelte-ieyy8l">Jb_Perm: R U R&#39; U&#39; R&#39; F R2 U&#39; R&#39; U&#39; R U R&#39; F&#39;</button> <br><br>  <div data-svelte-h="svelte-1b0w1st">T Perm: R U R&#39; U&#39; R&#39; F R2 U&#39; R&#39; U&#39; R U R&#39; F&#39;</div> <div data-svelte-h="svelte-1u8w2bi">H Perm: M2&#39; U&#39; M2&#39; U2&#39; M2&#39; U&#39; M2&#39;</div> <div data-svelte-h="svelte-36pywb">Key: R U R&#39; U&#39; R&#39; F R F&#39;</div> <div data-svelte-h="svelte-15fvue9">Bottlecap: f (R U R&#39; U&#39;) (R U R&#39; U&#39;) f&#39;</div> <div data-svelte-h="svelte-1nbia9k">Checkerboard: M2 E2 S2  or  R2 L2 U2 D2 F2 B2</div> <br><br> <p data-svelte-h="svelte-1l2opi5">As mentioned on the splash page, rotation of the cube, its middle sections, and its faces is accomplished with JavaScript, not with the CSS transform property. The keyboard controls are not affected by rotations, making the cube much easier to solve than most (possibly all) other online Rubik&#39;s cube simulators. For example, clicking &quot;R&quot; always turns the right face clockwise. Other simulator keyboard controls follow the original cube orientation, so clicking &quot;R&quot; might turn the bottom, top, left, back, or front face.</p> <div style="margin-down:400px"></div></div></div></section> <div id="steady" class="svelte-1n2cpd4"><div class="container svelte-1n2cpd4"><div class="${escape(null_to_empty(cu), true) + " svelte-1n2cpd4"}"><div class="face front svelte-1n2cpd4"><div class="grid svelte-1n2cpd4" id="a3"><div class="${escape(null_to_empty(cube[3][0]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[3][1]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[3][2]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[3][3]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[3][4]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[3][5]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[3][6]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[3][7]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[3][8]), true) + " svelte-1n2cpd4"}"></div></div></div> <div class="face back svelte-1n2cpd4"><div class="grid svelte-1n2cpd4" id="a2"><div class="${escape(null_to_empty(cube[2][8]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[2][7]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[2][6]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[2][5]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[2][4]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[2][3]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[2][2]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[2][1]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[2][0]), true) + " svelte-1n2cpd4"}"></div></div></div> <div class="face right svelte-1n2cpd4"><div class="grid svelte-1n2cpd4" id="a0"><div class="${escape(null_to_empty(cube[0][0]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[0][1]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[0][2]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[0][3]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[0][4]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[0][5]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[0][6]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[0][7]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[0][8]), true) + " svelte-1n2cpd4"}"></div></div></div> <div class="face left svelte-1n2cpd4"><div class="grid svelte-1n2cpd4" id="a1"><div class="${escape(null_to_empty(cube[1][0]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[1][1]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[1][2]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[1][3]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[1][4]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[1][5]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[1][6]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[1][7]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[1][8]), true) + " svelte-1n2cpd4"}"></div></div></div> <div class="face top svelte-1n2cpd4"><div class="grid svelte-1n2cpd4" id="a4"><div class="${escape(null_to_empty(cube[4][0]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[4][1]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[4][2]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[4][3]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[4][4]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[4][5]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[4][6]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[4][7]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[4][8]), true) + " svelte-1n2cpd4"}"></div></div></div> <div class="face bottom svelte-1n2cpd4"><div class="grid svelte-1n2cpd4" id="b5"><div class="${escape(null_to_empty(cube[5][0]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[5][1]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[5][2]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[5][3]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[5][4]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[5][5]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[5][6]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[5][7]), true) + " svelte-1n2cpd4"}"></div> <div class="${escape(null_to_empty(cube[5][8]), true) + " svelte-1n2cpd4"}"></div></div></div></div></div></div> ${slots.default ? slots.default({}) : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7af381bc.js.map
