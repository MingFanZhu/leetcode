/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (44.46%)
 * Likes:    2015
 * Dislikes: 0
 * Total Accepted:    317.1K
 * Total Submissions: 712.1K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var need={};//存储子串字符和需要的数量
    for(var c of t){
        if(need[c]){
            need[c]++;
        }else{
            need[c]=1;
        }
    }

    var res="";
    var window={};
    var left=0,right=0;//左右指针，[left,right)
    var validValueInWindow=0;//满足条件的字符数，扩张window时，当window中对应字符数量=need中对应字符时加1，缩减时<时减1，它等于need中key的数量则说明包含子串

    while(right<s.length){
        var c=s[right];
        right++;
        //更新window
        if(need[c]){
            window[c]?window[c]++:window[c]=1;
            if(window[c]==need[c]){
                //只在等于时加一次
                validValueInWindow++;
            }
        }

        while(validValueInWindow==Object.keys(need).length){
            //更新res
            var temp=s.substring(left,right);
            if(res==""){
                res=s.substring(left,right);
            }
            if(res.length>temp.length){
                res=temp;
            }

            var c=s[left];
            left++;
            //更新window
            if(need[c]){
                window[c]--;
                if(window[c]<need[c]){
                    //只会减一次，减完就出while了
                    validValueInWindow--;
                }
            }
        }
    }

    return res;
};
// @lc code=end

