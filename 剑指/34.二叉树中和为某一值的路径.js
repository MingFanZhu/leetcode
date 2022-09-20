/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 */

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
 * @param {number} target
 * @return {number[][]}
 */
 var pathSum = function(root, target) {
    var res=[];
    var temp=[];
    var sum=0;

    function dfs(node){
        if(node==null){
            return;
        }
        sum+=node.val;
        temp.push(node.val);
        if(sum==target&&(node.left==null&&node.right==null)){
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