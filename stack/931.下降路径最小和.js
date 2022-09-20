/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 *
 * https://leetcode.cn/problems/minimum-falling-path-sum/description/
 *
 * algorithms
 * Medium (67.13%)
 * Likes:    190
 * Dislikes: 0
 * Total Accepted:    45.3K
 * Total Submissions: 67.5K
 * Testcase Example:  '[[2,1,3],[6,5,4],[7,8,9]]'
 *
 * 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。
 * 
 * 下降路径
 * 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置
 * (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1)
 * 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：matrix = [[2,1,3],[6,5,4],[7,8,9]]
 * 输出：13
 * 解释：如图所示，为和最小的两条下降路径
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：matrix = [[-19,57],[-40,-5]]
 * 输出：-59
 * 解释：如图所示，为和最小的下降路径
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == matrix.length == matrix[i].length
 * 1 <= n <= 100
 * -100 <= matrix[i][j] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let dp=new Array(matrix.length);
    for(let i=0;i<dp.length;i++){
        dp[i]=new Array(matrix[0].length).fill(null);
    }
    for(let j=0;j<dp[0].length;j++){
        dp[0][j]=matrix[0][j];
    }

    function getdp(i,j){
        //应对越界
        if(j<0||j>=dp[0].length){
            return null;
        }
        return dp[i][j];
    }

    function min(a,b,c){
        //应对与null比较
        if(a==null){
            return Math.min(b,c);
        }
        if(c==null){
            return Math.min(a,b);
        }
        return Math.min(a,b,c);
    }

    for(let i=1;i<dp.length;i++){
        for(let j=0;j<dp[i].length;j++){
            dp[i][j]=min(getdp(i-1,j-1),getdp(i-1,j),getdp(i-1,j+1))+matrix[i][j];
        }
    }

    return Math.min(...dp[dp.length-1]);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minFallingPathSum;
// @after-stub-for-debug-end