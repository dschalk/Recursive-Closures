import { c as create_ssr_component, e as escape } from './ssr-6e786045.js';

const css = {
  code: "h3.svelte-xvyccl{color:rgb(187, 248, 204) }",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var closure = `function dF3x () {};
var log = console.log;
async function asyncId (x) {return x};

function M (x) {
  return function go (func) {
      if (func === dF3x) return clone(x);
      else x = asyncId(x).then(v => func(v));
      return go;
  }
}`;
  var test = `var m = M(3);
m(v=>v**3)(v=>3*v)(v=>v+19)(Math.sqrt)(dF3x).then(v => log(v)); // 10 `;
  $$result.css.add(css);
  return `<h1 style="text-align: center" data-svelte-h="svelte-z7nlbi">Asynchronous Transformations</h1> <h3 class="svelte-xvyccl" data-svelte-h="svelte-cmiygg">GOAL: Handle both Synchronous and Asynchronous Functions in a Simple Closure</h3> <pre>${escape(closure)}</pre> <p data-svelte-h="svelte-1a82hpg">If some value x is not a Promise, asyncId(x) creates a promise that resolves to x. asyncId(x) has no effect on x if x is a Promise. Using the basic definition of M, the following computation would return the number 10. Here, it returns a promise that resolves to 10</p> <pre>${escape(test)}</pre>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-079961d4.js.map
