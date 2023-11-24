/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    if(n==0){
        return 1;
    }
    if(n==1){
        return x;
    }
    if (n < 0) {
        return myPow(1 / x, -n);
    }
    if(n%2==1){
        return x*myPow(x,n-1);
    }else{
        var half=myPow(x,n/2);
        return half*half;
    }
};