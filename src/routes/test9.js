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
var aa = [ [], [[6,7], [a => b => a * b]], [888]]
var m = M(aa);

var mclone = m;
log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] ) ); 
log("mclone === m)",mclone === m)  
log("mclone = M(mclone(dF3x))", mclone = M(mclone(dF3x))); 
log("mclone === m)",mclone === m)  
log(mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] ) )  

mclone(() => [ [], [[3,4], [a => b => Math.sqrt(a*a + b*b)], [888] ] ] )
log(mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] ) ) // 5
log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] ) ); // 42 
log("m(dF3x)", m(dF3x));
log("mclone(dF3x", mclone(dF3x));

log("mclone === m)",mclone === m)  
log("mclone(dF3x) === m(dF3x)",mclone(dF3x) === m(dF3x))  

m(() => [ [], [[3,4], [a => b => a + b], [888] ] ] )
log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] ) ) // 7
log(mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] ) )  // 5 


log("m(dF3x) === mclone(dF3x)", m(dF3x) === mclone(dF3x));
log("m(dF3x", m(dF3x));
log("mclone(dF3x", mclone(dF3x));

