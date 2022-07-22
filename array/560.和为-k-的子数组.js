/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 *
 * https://leetcode.cn/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (45.37%)
 * Likes:    1581
 * Dislikes: 0
 * Total Accepted:    246.4K
 * Total Submissions: 543.1K
 * Testcase Example:  '[1,1,1]\n2'
 *
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,1], k = 2
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3], k = 3
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 2 * 10^4
 * -1000 <= nums[i] <= 1000
 * -10^7 <= k <= 10^7
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
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

