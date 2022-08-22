/*
 * @lc app=leetcode.cn id=886 lang=javascript
 *
 * [886] 可能的二分法
 *
 * https://leetcode.cn/problems/possible-bipartition/description/
 *
 * algorithms
 * Medium (49.20%)
 * Likes:    192
 * Dislikes: 0
 * Total Accepted:    19.7K
 * Total Submissions: 40K
 * Testcase Example:  '4\n[[1,2],[1,3],[2,4]]'
 *
 * 给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。
 * 
 * 给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] ，表示不允许将编号为 ai 和
 * bi的人归入同一组。当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
 * 输出：true
 * 解释：group1 [1,4], group2 [2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 2000
 * 0 <= dislikes.length <= 10^4
 * dislikes[i].length == 2
 * 1 <= dislikes[i][j] <= n
 * ai < bi
 * dislikes 中每一组都 不同
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
    var graph = new Array(n);
    for (var i = 0; i < n; i++) {
        graph[i] = new Array();
    }

    for (var item of dislikes) {
        graph[item[0] - 1].push(item[1] - 1);
        graph[item[1] - 1].push(item[0] - 1);
    }

    //遍历二分图
    var visite = new Array(n).fill(false);
    var color = new Array(n).fill(null);
    var res = true;

    function travel(graph, i) {
        if (visite[i]) {
            return;
        }
        if (!res) {
            return;
        }
        visite[i] = true;
        if (color[i] == null) {
            color[i] = 0;
        }
        for (var index of graph[i]) {
            if (color[index] == null) {
                color[index] = 1 - color[i];
            } else {
                if (color[index] == color[i]) {
                    res = false;
                    return;
                }
            }
            travel(graph, index);
        }
    }

    for (var i = 0; i < n; i++) {
        travel(graph, i);
    }

    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = possibleBipartition;
// @after-stub-for-debug-end