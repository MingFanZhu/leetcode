/**
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
 * 一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
 */

/**
 * @param {number} num
 * @return {number}
 */
 var translateNum = function(num) {
    var dp0=0;//-2个
    var dp1=1;//-1个
    var dp2=1;//当前
    var str=num.toString();
    for(var i=1;i<str.length;i++){
        dp0=dp1;
        dp1=dp2;
        var tempnum=parseInt(str[i-1]+str[i]);
        if(tempnum>9&&tempnum<26){
            dp2=dp1+dp0;
        }else{
            dp2=dp1;
        }
    }
    return dp2;
};