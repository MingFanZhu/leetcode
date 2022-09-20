/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 *
 * https://leetcode.cn/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (63.24%)
 * Likes:    840
 * Dislikes: 0
 * Total Accepted:    295.9K
 * Total Submissions: 467.9K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 
 * 叶子节点 是指没有子节点的节点。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：[[5,4,11,2],[5,8,4,5]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,3], targetSum = 5
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1,2], targetSum = 0
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点总数在范围 [0, 5000] 内
 * -1000 
 * -1000 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    var res=[];
    var temp=[];
    var sum=0;

    function dfs(node){
        if(node==null){
            return;
        }
        sum+=node.val;
        temp.push(node.val);
        console.log(temp);
        if(sum==targetSum&&(node.left==null&&node.right==null)){
            sum-=node.val;
            res.push(JSON.parse(JSON.stringify(temp)));
            temp.pop();
            return;
        }
        dfs(node.left);
        dfs(node.right);
        sum-=node.val;
        temp.pop();
    }
    dfs(root);
    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = pathSum;
// @after-stub-for-debug-end