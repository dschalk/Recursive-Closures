import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const m = M(7);
  const dF3x = () => {
  };
  function M(x) {
    let value = x;
    let callbacks = [];
    function go(func) {
      if (func === dF3x) {
        return value;
      } else {
        value = func(value);
        callbacks.forEach((callback) => callback(value));
        return go;
      }
    }
    go.onChange = (callback) => {
      callbacks.push(callback);
    };
    return go;
  }
  m(() => 3)((v) => v ** 3)(dF3x).onChange((value) => console.log(value));
  m(() => 3)((v) => v ** 3)(dF3x);
  m(dF3x);
  m((v) => v * 4)((v) => v - 8);
  return `<h2 data-svelte-h="svelte-ckifmr">Here we go!</h2>
&gt;
&gt;`;
});
export {
  Page as default
};
