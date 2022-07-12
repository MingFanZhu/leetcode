/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.preNums = [];
    this.preNums.push(0);
    for (var i = 1; i < nums.length + 1; i++) {
        this.preNums.push(this.preNums[i - 1] + nums[i - 1]);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.preNums[right + 1] - this.preNums[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = NumArray;
// @after-stub-for-debug-end