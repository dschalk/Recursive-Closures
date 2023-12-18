import { c as create_ssr_component, e as escape, b as add_attribute } from './ssr-6e786045.js';

const array = "/_app/immutable/assets/Screenshot_async.d10e0e78.png";
const css = {
  code: "pre.svelte-1o6tzw9{margin-left:3%}img.svelte-1o6tzw9{width:90%;height:90%}",
  map: null
};
function ret() {
}
function M1(x) {
  return function go(func) {
    if (func === ret)
      return x;
    else
      x = func(x);
    return go;
  };
}
function M2(x = [0]) {
  return function go(func) {
    if (func === ret)
      return x;
    else {
      x.push(func(x.slice(-1)[0]));
      return go;
    }
  };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var m1 = M1([2]);
  var mpow = (y) => (x) => {
    x.push(x.slice(-1) ** y);
    return x;
  };
  var msqrt = (x) => {
    x.push(Math.sqrt(x.slice(-1)));
    return x;
  };
  var madd = (y) => (x) => {
    x.push(x.slice(-1) * 1 + 1 * y);
    return x;
  };
  m1(mpow(10))(msqrt)(madd(10))(ret);
  var m2 = M2([3]);
  m2((v) => v ** 3)((v) => v + v)((v) => v - 12)(ret);
  var code = `function ret () {};  // Used in M1 (below).

function M1 (x) {
    return function go (func) {
        if (func === ret) return x;
        else x = func(x);
        return go;
    }
}

var m1 = M1([2]);

var mpow = y => x => {x.push((x.slice(-1))**y); return x}
var msqrt = x => {x.push(Math.sqrt(x.slice(-1))); return x}
var madd = y => x => {x.push(x.slice(-1)+1*y); return x}

m1(mpow(3))(mpow(3))(mdouble)(msqrt)(madd(10))(ret)`;
  var code3 = `function M2 (x) {
    return function go (func) {
        if (func === ret) return x;
        else {
            x.push(func(x.slice(-1)[0]));
            return go;
        }
    }
}

var m4 = M2([3]);`;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-8uqoua_START -->${$$result.title = `<title>Arrys in monads</title>`, ""}<!-- HEAD_svelte-8uqoua_END -->`, ""} <br> <div data-svelte-h="svelte-9ovhf0">**************************************************************************</div> <h3 class="h3b" data-svelte-h="svelte-1acbbz">Arrays in Monads</h3> <p data-svelte-h="svelte-u91ddh">The simple monads used in this section are returned by M1(x) where x can be any valid JavaScript value, including primitive values, functions, promises, etc. It differs from M(x) in that the monads it spawns use the function ret() rather than the string &quot;stop&quot; to trigger the return of the values they hold. M1 monads don&#39;t test for types although arguments must be functions. It is up to users to use Typescript, catch errors, or just be careful.</p> <pre class="svelte-1o6tzw9">${escape(code)}</pre> <p data-svelte-h="svelte-i1l6ok">m1 consumes the functions shown above as follows: m1(mpow(10))(msqrt)(madd(10))(ret)</p> <p>The result, as expected, is [ ${escape(m1(ret).join(", "))} ].</p> <p data-svelte-h="svelte-2lc6pn">This is an excercize in using very small monads with specialized functions. Usually, it&#39;s better to use a specialized monad with generally useful functions. For example, monads spawned by M2 (below) must start with non-empty arrays but after that, generic functions, even elementary lambdas, can facilitate computations.</p> <pre class="svelte-1o6tzw9">${escape(code3)}</pre> <p>Here&#39;s the result of m4(v=&gt;v**3)(v=&gt;v+v)(v=&gt;v-12)(ret): [${escape(m2(ret).join(", "))}].</p> <p data-svelte-h="svelte-8cn1la">The state of the solitaire  game of Score is maintined in m2 = M(x) where x is an array of seven arrays.</p> <p data-svelte-h="svelte-y2a7tl">The functions shown on this page were tested in Firefox Developer Tools, which is loaded in the Firefox browser by pressing F12. Here&#39;s a screenshot:</p> <img${add_attribute("src", array, 0)} class="svelte-1o6tzw9">`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4488d699.js.map
