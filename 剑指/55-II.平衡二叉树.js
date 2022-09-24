/**
 * 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
 * 如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    var res=true;

    function height(node){
        if(!node){
            return 0;
        }
        var left=height(node.left);
        var right=height(node.right);
        if(Math.abs(left-right)>1){
            res=false;
        }
        if(!res){
            return;
        }
        return Math.max(left,right)+1;
    }

    height(root);
    return res;
};