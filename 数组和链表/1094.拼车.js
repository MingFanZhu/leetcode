/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    var currrentNum=new Array(1000).fill(0);
    var diff=new Array(1000).fill(0);

    //没有初始数组，不用构造diff
    //否则遍历（1，length），diff[i]=origin[i]-origin[i-1]

    for(var item of trips){
        diff[item[1]]+=item[0];
        diff[item[2]]-=item[0];
    }

    currrentNum[0]=diff[0];
    if(diff[0]>capacity){
        return false;
    }
    for(var i=1;i<1000;i++){
        currrentNum[i]=currrentNum[i-1]+diff[i];
        if(currrentNum[i]>capacity){
            return false;
        }
    }
    return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = carPooling;
// @after-stub-for-debug-end