/**
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。
 * 如果有多对数字的和等于s，则输出任意一对即可。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var left=0;
    var right=nums.length-1;
    while(left<right){
        var sum=nums[left]+nums[right];
        if(sum<target){
            left++;
            continue;
        }
        if(sum>target){
            right--;
            continue;
        }
        return [nums[left],nums[right]];
    }
    return null;
};