
<script>

const m = M(7);
const dF3x = () => {};

/*function M(x) {
  return function go(func) {
    if (func === dF3x) {
      return x;
    } else {
      x = func(x);
      return go;
    }
  }
} */



function M(x) {
  let value = x;
  let callbacks = [];
  function go(func) {
    if (func === dF3x) {
      return value;
    } else {
      value = func(value);
      callbacks.forEach(callback => callback(value));
      return go;
    }
  }
  go.onChange = callback => {
    callbacks.push(callback);
  };
  return go;
}
m(() => 3)(v => v ** 3)(dF3x).onChange(value => console.log(value));



m(() => 3)(v=>v**3)(dF3x);

var res = m(dF3x);
m(v => v*4)(v=>v - 8)
var A = 66;

function test () {
    A = 900;
    m(Math.sqrt)(v=>v+4)(v=>v*3);
    res = m(dF3x);
};



</script>

<h2>Here we go!</h2>
>
>


