import { c as create_ssr_component, e as escape } from './ssr-2ecffa58.js';

const css = {
  code: "input.svelte-1rld2h7{margin-left:5%;size:16px;font-size:22px}.big.svelte-1rld2h7{font-size:25px;font-weight:700}.marg.svelte-1rld2h7{margin-left:5%;font-size:22px}p.svelte-1rld2h7{font-size:24px}pre.svelte-1rld2h7{font-size:22px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ar = [];
  var display_main = `function main (n) {
        if (n === 1) return;
        N = n;
        var buf = new ArrayBuffer(Math.ceil(N/8));
        var view = new Uint8Array(buf); 
        var top = Math.ceil(Math.sqrt(N));
        let i = 2;
        for(i; i <= N; i+=1){
            if(test(view, i)) {
                for(let j = i; j <= N; j+=i) {
                    set(view, j);
                    if (j === N) {
                        ar.push(" " + i);
                        N = N / i;
                        main(N);
                    }
                }
            }
        }
    };
    
    function set(ar,i) {
      var a = Math.floor(i / 8)
      var b = i % 8
      ar[a] |= (1 << b)
    };
    
    function test (ar,i) {
      var a = Math.floor(i / 8);
      var b = i % 8;
      var value = ar[a] & (1 << b);
      return value === 0;
    }`;
  let ar2 = [];
  var code = `let N2 = 1;
    let ar2 = [];
    
    var first2 = function first (e) {
        ar2 = [];
        if (e.keyCode == 13) {
            let num = parseInt(e.target.value);
            main2(num);
        };
    };
    
    function main2 (n) {
        N2 = n;
        for(let i = 2; i <= N2; i+=1){
            while (N2 % i === 0) {
                ar2.push(" " + i);
                N2 = N2 / i;
                if (N2 == 1) return
            }
        }
    }`;
  $$result.css.add(css);
  return `<div style="font-family: Times New Roman; text-align: center; font-size: 38px;" data-svelte-h="svelte-1qcx4le"><br>
       Two Factorization Algorithms</div> <p class="big svelte-1rld2h7" data-svelte-h="svelte-qrbugj">Efficient Algorithm</p> <p class="svelte-1rld2h7" data-svelte-h="svelte-zcyupp">Enter a number between 2 and a few <span class="big svelte-1rld2h7">quadrillion</span><span>.</span></p> <input type="text" class="svelte-1rld2h7"> <h3 class="marg svelte-1rld2h7">${escape(ar2)}</h3> <p class="big svelte-1rld2h7" data-svelte-h="svelte-rb5daq">Inefficient Algorithm</p> <p class="svelte-1rld2h7" data-svelte-h="svelte-pk8e92">Just for fun, I tried finding factors using bitwise operators instead of &quot;%&quot;, the modulo operater. The Google Chrome engine processed it very slowly.</p> <p class="svelte-1rld2h7" data-svelte-h="svelte-5ey14x">Enter a number between 2 and not much greater than a <span class="big svelte-1rld2h7">billion</span><span>.</span></p> <input type="text" class="svelte-1rld2h7"> <br> <h3 class="marg svelte-1rld2h7">${escape(ar)}</h3> <p class="svelte-1rld2h7" data-svelte-h="svelte-13ug16w">Here&#39;s the code for the more efficient, modulo-operator algorithm:</p> <pre class="svelte-1rld2h7">${escape(code)}</pre> <p class="svelte-1rld2h7" data-svelte-h="svelte-m44qop">This is the code for the bitwise-operator algorithm:</p> <pre class="svelte-1rld2h7">${escape(display_main)}</pre> <a href="http://score.schalk.net" data-svelte-h="svelte-1ruktk0">Game of Score</a>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-545d5bb0.js.map
