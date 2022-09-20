/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (58.13%)
 * Likes:    2100
 * Dislikes: 0
 * Total Accepted:    685.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root==null){
        return true;
    }
    var arr=[root.left,root.right];
    while(arr.length>0){
        var num=arr.length;
        var temp=[];
        while(num>0){
            num--;
            var node=arr.shift();
            if(node!=null){
                temp.push(node.val);
                arr.push(node.left);
                arr.push(node.right);
            }else{
                temp.push(null);
            }
        }
        if(!chargeLevel(temp)){
            return false;
        }
    }
    return true;
};

function chargeLevel(arr){
    var left=0;
    var right=arr.length-1;
    while(left<right){
        if(arr[left]!=arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isSymmetric;
// @after-stub-for-debug-end