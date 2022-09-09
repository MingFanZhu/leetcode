/**
 * 统计一个数字在排序数组中出现的次数。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    var index=binarysearch(nums,target);
    if(index==-1){
        return 0;
    }
    var res=1;
    var temp=index-1;
    while(nums[temp]==target&&temp>=0){
        res++;
        temp--;
    }
    temp=index+1;
    while(nums[temp]==target&&temp<nums.length){
        res++;
        temp++;
    }
    return res;
};

function binarysearch(nums,target){
    var left=0;
    var right=nums.length-1;
    while(left<=right){
        var mid=left+Math.floor((right-left)/2);
        if(nums[mid]==target){
            return mid;
        }
        if(nums[mid]>target){
            right=mid-1;
        }
        if(nums[mid]<target){
            left=mid+1;
        }
    }
    if(right<0||left==nums.length){
        return -1;
    }
    if(nums[left]!=target){
        return -1;
    }
}