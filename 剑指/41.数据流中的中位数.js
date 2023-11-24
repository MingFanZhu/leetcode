/**
 * 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
 */

/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.base=[];
    this.size=0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
if(this.size === 0||num>=this.base[this.size-1]){
        this.base.push(num);
        this.size++;
        return;
    }
    if(num<=this.base[0]){
        this.base.unshift(num);
        this.size++;
        return;
    }
    let start = 0,end = this.base.length-1;
    while(start<end){
        let middle = start+Math.floor((end-start)/2);
        if(num<this.base[middle]){
            end = middle;
        }else if(num>this.base[middle]){
            start = middle+1;
        }else{
            start = middle;
            break;
        }
    }
    //console.log(start);
    this.base.splice(start,0,num);
    this.size++;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.size==0){
        return null;
    }
    if(this.size%2==0){
        return (this.base[Math.floor((this.size-1)/2)]+this.base[Math.ceil((this.size/2))])/2
    }else{
        return this.base[(this.size-1)/2]
    }
    
};