/**
 * 写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var add = function(a, b) {
    if(a == 0 || b == 0) {
            return a == 0 ? b : a;
        }
        // 设 a = 1001
        // 设 b = 0101
        // 求和 1100
        var sum = a ^ b;
        // 进位 0001 << 1 = 0010
        var carry = (a & b) << 1;
        // add(1100, 0010)
        return add(sum, carry);
};