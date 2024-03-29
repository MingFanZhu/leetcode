/**
 * 输入整数数组 arr ，找出其中最小的 k 个数。
 * 例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
    arr.sort((a,b)=>{
        return a-b;
    });
    var res=[];
    for(var i=0;i<k;i++){
        res.push(arr[i]);
    }
    return res;
};