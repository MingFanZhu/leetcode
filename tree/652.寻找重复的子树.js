/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 *
 * https://leetcode.cn/problems/find-duplicate-subtrees/description/
 *
 * algorithms
 * Medium (58.64%)
 * Likes:    451
 * Dislikes: 0
 * Total Accepted:    57.7K
 * Total Submissions: 98.4K
 * Testcase Example:  '[1,2,3,4,null,2,4,null,null,4]'
 *
 * 给定一棵二叉树 root，返回所有重复的子树。
 * 
 * 对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 * 
 * 如果两棵树具有相同的结构和相同的结点值，则它们是重复的。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：root = [1,2,3,4,null,2,4,null,null,4]
 * 输出：[[2,4],[4]]
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：root = [2,1,1]
 * 输出：[[1]]
 * 
 * 示例 3：
 * 
 * 
 * 
 * 
 * 输入：root = [2,2,2,3,null,3,null]
 * 输出：[[2,3],[3]]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中的结点数在[1,10^4]范围内。
 * -200 <= Node.val <= 200
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    var map={};
    var res=[];

    var search=function(root){
        if(!root){
            return "#";
        }
        var uid=""+root.val+","+search(root.left)+","+search(root.right);
        if(map[uid]){
            if(map[uid]==1){
                res.push(root);
            }
            map[uid]++;
        }else{
            map[uid]=1;
        }
        return uid;
    }

    search(root);

    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findDuplicateSubtrees;
// @after-stub-for-debug-end