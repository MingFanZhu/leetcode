/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 
 * s 只包含小写字母。
 */

/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
    var map=new Map();
    for(var c of s){
        if(map.has(c)){
            var num=map.get(c);
            map.set(c,++num);
        }else{
            map.set(c,1);
        }
    }
    for(var item of map.keys()){
        if(map.get(item)==1){
            return item;
        }
    }
    return " ";
};