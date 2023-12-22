import { c as create_ssr_component } from "../../chunks/ssr.js";
const style = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1mqpwds{margin-right:40px;font-size:24px;font-weight:bold;color:rgb(135, 86, 135)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav data-svelte-h="svelte-lrwut2"><a href="./" class="svelte-1mqpwds">Home</a> <a href="./cube7" class="svelte-1mqpwds">Rubik&#39;s Cube</a> <a href="./score" class="svelte-1mqpwds">Game of Score</a> <a href="./async" class="svelte-1mqpwds">Async</a> <a href="./functional" class="svelte-1mqpwds">Functional</a> <a href="./Bell-Inequality" class="svelte-1mqpwds">Bell&#39;s Inequality</a> <a href="./Pilot-Wave" class="svelte-1mqpwds">Pilot-Wave Theory</a></nav> <div data-svelte-h="svelte-8rws20">&quot;***********************************************************************************************&quot;</div> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
