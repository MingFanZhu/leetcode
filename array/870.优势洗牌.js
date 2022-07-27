/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 *
 * https://leetcode.cn/problems/advantage-shuffle/description/
 *
 * algorithms
 * Medium (46.96%)
 * Likes:    194
 * Dislikes: 0
 * Total Accepted:    26.7K
 * Total Submissions: 56.6K
 * Testcase Example:  '[2,7,11,15]\n[1,10,4,11]'
 *
 * 给定两个大小相等的数组 nums1 和 nums2，nums1 相对于 nums 的优势可以用满足 nums1[i] > nums2[i] 的索引 i
 * 的数目来描述。
 * 
 * 返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
 * 输出：[2,11,7,15]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
 * 输出：[24,32,8,12]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums1.length <= 10^5
 * nums2.length == nums1.length
 * 0 <= nums1[i], nums2[i] <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
    var n = nums1.length;
    var newNums2 = [];
    for (var i = 0; i < n; i++) {
        newNums2.push({ index: i, value: nums2[i] });
    }
    nums1.sort((a, b) => a - b);//升序
    newNums2.sort((a, b) => b.value - a.value);//降序

    var left = 0;//最小值
    var right = n - 1;//最大值
    var newNums1 = new Array(n);
    for (var i = 0; i < n; i++) {
        if (nums1[right] > newNums2[i].value) {
            newNums1[newNums2[i].index] = nums1[right];
            right--;
        } else {
            newNums1[newNums2[i].index] = nums1[left];
            left++;
        }
    }

    return newNums1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = advantageCount;
// @after-stub-for-debug-end