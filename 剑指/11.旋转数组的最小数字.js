/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。
 * 请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。  
 */

/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    var left=0;
    var right=numbers.length-1;
    while(left<right){
        var mid=left+Math.floor((right-left)/2);
        if(numbers[mid]>numbers[right]){
            left=mid+1;
            continue;
        }
        if(numbers[mid]<numbers[right]){
            right=mid;
            continue;
        }
        if(numbers[mid]==numbers[right]){
            right--;
        }
    }
    return numbers[left];
};