

    var log = console.log;
    var dF3x = () => {}

    function M (x) {
      return function go (func)
        {
            if (func === dF3x) return x;
            else x = func(x);
            return go;
        }
    }
    
    var m1, m2
    var ar = [ [ ], [ [ ], [ [ ], [ M(3) ]]]]
    m1 = ar[1][1][1][0];
    
    m2 = M(m1(dF3x));
    log("ar[1][1][1][0](dF3x)", ar[1][1][1][0](dF3x))
    log('m1(dF3x))', m1(dF3x));  // 3
    log('m2(dF3x))', m2(dF3x));  // 3
    m1(v=>v**3); 
    log("ar[1][1][1][0](dF3x)", ar[1][1][1][0](dF3x))
    log('m1(dF3x))', m1(dF3x));  // 27
    log('m2(dF3x))', m2(dF3x));  // 3
    m1(v => v + 22)(Math.sqrt) 
    log("ar[1][1][1][0](dF3x)", ar[1][1][1][0](dF3x))
    log('m1(dF3x))', m1(dF3x));  // 7
    log('m2(dF3x))', m2(dF3x));  // 3
    m2(v => v+v)(v => v * m1(dF3x));
    log("ar[1][1][1][0](dF3x)", ar[1][1][1][0](dF3x))
    log('m1(dF3x))', m1(dF3x)); // 7
    log('m2(dF3x))', m2(dF3x));  // 42

    log("ar[1][1][1][0](dF3x)", ar[1][1][1][0](dF3x))
    log('m1(dF3x))', m1(dF3x)); // 7
    log('m3(dF3x))', m2(dF3x));  // 42
