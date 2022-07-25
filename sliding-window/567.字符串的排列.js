/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode.cn/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (44.06%)
 * Likes:    726
 * Dislikes: 0
 * Total Accepted:    208K
 * Total Submissions: 471.6K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
 * 
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s1 = "ab" s2 = "eidbaooo"
 * 输出：true
 * 解释：s2 包含 s1 的排列之一 ("ba").
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s1= "ab" s2 = "eidboaoo"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s1.length, s2.length <= 10^4
 * s1 和 s2 仅包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    var need = {};
    for (var c of s1) {
        if (need[c] != undefined) {
            need[c]++;
        } else {
            need[c] = 1;
        }
    }

    var window = {};
    var size = 0;
    var left = 0, right = 0;
    while (right < s2.length) {
        var c = s2[right];
        right++;
        if (need[c]) {
            window[c] ? window[c]++ : window[c] = 1;
            if (window[c] == need[c]) {
                size++;
            }
        }

        while (right - left == s1.length) {
            if (size == Object.keys(need).length) {
                return true;
            }
            var c = s2[left];
            left++;
            if (need[c]) {
                //注意这里不是先减去再判断小于，而是直接判等减去
                //因为while的条件变成窗口的长度与子串相同而不是达到要求缩小
                if (window[c] == need[c]) {
                    size--;
                }
                window[c]--;
            }
        }
    }
    return false;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = checkInclusion;
// @after-stub-for-debug-end