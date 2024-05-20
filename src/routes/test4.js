
    var dF3x = () => {};
    var log = console.log;

        function M (x) {
        return function go (func) {
                if (func === dF3x) return x;
                else x = func(x);
                return go;
        }
            
    }

function clone (v) {
   var save = M(v)(dF3x);
   v = "This is temporary";
   v = save;
   return v;
}
log("clone is", `function clone (v) {
   var save = M(v)(dF3x);
   v = "This is temporary";
   v = save;
   return v;
}`);
var bclone;
var b = {arr: [ [ [2], [3], [4] ], [ [ [7], ['alpha'], ['beta'] ],  [ ["clown"], [v=>v**3] ] ], 888 ], ob: { z: "skyblue" } };
log("b is", b);
log("bclone = clone(b)");
bclone=clone(b);
log("bclone is", bclone);
// bclone hasn't changed, except for its memory address.
log("b and bclone are identical");
log(" though not necessarily referring to the same memory address");
log("b === bclone", b === bclone);
log("Despite the above, when bclone changes, b stays the same.");
log("bclone = 'Hello World')'", bclone = "Hello World" );  
log("b === bclone", b === bclone)
log("b is", b);
log("bclone is", bclone);
log("b = 'Cow'", b = "Cow");
log("b is", b);
log("bclone is", bclone);
