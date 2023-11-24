/**
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    var dp=new Array(nums.length);
    dp[0]=nums[0];
    var max=nums[0];
    for(var i=1;i<nums.length;i++){
        dp[i]=Math.max(dp[i-1]+nums[i],nums[i]);
        max=Math.max(dp[i],max);
    }
    return max;
};