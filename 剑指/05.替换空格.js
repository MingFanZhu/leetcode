/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 */

/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    var temp=s.split(" ");
    var res=temp.join("%20");
    return res;
};