/**
 * 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。
 * 2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。
 * A 不能视为 14。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function(nums) {
    var min=14;
    var max=-1;
    var map=new Map();
    for(var item of nums){
        if(item==0){
            continue;
        }
        if(map.has(item)){
            return false;
        }else{
            map.set(item,1);
            item<min?min=item:{};
            item>max?max=item:{};
        }
    }
    if(max-min<5){
        return true;
    }
    return false;
};