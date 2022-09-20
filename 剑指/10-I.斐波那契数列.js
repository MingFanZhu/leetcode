/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n<2){
        return n;
    }
    var a=0;
    var b=1;
    for(var i=2;i<=n;i++){
        var c=(a+b)%1000000007;
        a=b;
        b=c;
    }
    return b;
};