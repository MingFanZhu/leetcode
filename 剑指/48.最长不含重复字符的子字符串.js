/**
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    var left=0;
    var right=0;
    var map=new Map();
    var falg=false;
    var length=0;
    while(right<s.length){
        var c=s[right];
        if(map.has(c)){
            var value=map.get(c);
            map.set(c,++value);
            if(map.get(c)==2){
                falg=true;
            }
        }else{
            map.set(c,1);
        }
        right++;
        while(falg){
            var c=s[left];
            if(map.get(c)==2){
                falg=false;
            }
            var value=map.get(c);
            map.set(c,--value);
            left++;
        }
        length=Math.max(length,right-left);
    }
    return length;
};