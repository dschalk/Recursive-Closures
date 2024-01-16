import { c as create_ssr_component } from './ssr-8d0cd32c.js';

const css = {
  code: "a.svelte-1mqpwds{margin-right:40px;font-size:24px;font-weight:bold;color:rgb(135, 86, 135)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav data-svelte-h="svelte-1fgaj11"><a href="./" class="svelte-1mqpwds">Home</a> <a href="./cube7" class="svelte-1mqpwds">Rubik&#39;s Cube</a> <a href="./score" class="svelte-1mqpwds">Game of Score</a> <a href="./async5" class="svelte-1mqpwds">Async</a> <a href="./functional" class="svelte-1mqpwds">Functional</a> <a href="./WebSockets" class="svelte-1mqpwds">WebSockets</a></nav> <div data-svelte-h="svelte-8rws20">&quot;***********************************************************************************************&quot;</div> ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-29d36ba5.js.map
