/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    var map = {};
    map[0] = 1;
    var sum = 0;
    var res = 0;

    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        var need = sum - k;
        if (map[need] != undefined) {
            res += map[need];
        }
        if (map[sum] != undefined) {
            map[sum]++;
        } else {
            map[sum] = 1;
        }
    }

    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subarraySum;
// @after-stub-for-debug-end