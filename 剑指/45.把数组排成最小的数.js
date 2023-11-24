/**
 * 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function (nums) {
    nums.sort((a, b) => {
        if ("" + a + b < "" + b + a) {
            // 返回结果小于0，a 在 b 的前面
            return -1;
        } else {
            // 返回结果大于0，a 在 b 的后面
            return 1;
        }
    });

    var res = "";
    for (var item of nums) {
        res += item;
    }
    return res;
};