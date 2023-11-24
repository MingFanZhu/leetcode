/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    var res=[];
    for(var item of nums){
        if(item%2==0){
            res.push(item);
        }else{
            res.unshift(item);
        }
    }
    return res;
};