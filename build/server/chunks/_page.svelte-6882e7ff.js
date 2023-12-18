import { c as create_ssr_component } from './ssr-6e786045.js';

const css = {
  code: ".rubiks-cube.svelte-2uekd5{width:300px;height:300px;margin:0 auto;border:1px solid #ccc;position:relative;perspective:1000px;transform-style:preserve-3d}.rubiks-cube-face.svelte-2uekd5{width:100px;height:100px;position:absolute;background-color:#fff;border:1px solid #ccc}.rubiks-cube-face.front.svelte-2uekd5{transform:translateZ(-50px)}.rubiks-cube-face.back.svelte-2uekd5{transform:translateZ(50px) rotateY(180deg)}.rubiks-cube-face.left.svelte-2uekd5{transform:translateX(-50px) rotateY(-90deg)}.rubiks-cube-face.right.svelte-2uekd5{transform:translateX(50px) rotateY(90deg)}.rubiks-cube-face.top.svelte-2uekd5{transform:translateY(-50px) rotateX(90deg)}.rubiks-cube-face.bottom.svelte-2uekd5{transform:translateY(50px) rotateX(-90deg)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="rubiks-cube svelte-2uekd5" data-svelte-h="svelte-1b0c0t1"><div class="rubiks-cube-face front svelte-2uekd5">Front</div> <div class="rubiks-cube-face back svelte-2uekd5">Back</div> <div class="rubiks-cube-face left svelte-2uekd5">Left</div> <div class="rubiks-cube-face right svelte-2uekd5">Right</div> <div class="rubiks-cube-face top svelte-2uekd5">Top</div> <div class="rubiks-cube-face bottom svelte-2uekd5">Bottom</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6882e7ff.js.map
