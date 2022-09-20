/**
 * 给定一棵二叉搜索树，请找出其中第 k 大的节点的值。
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
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
    var n=0;
    var num=null;

    function travel(node){
        if(node==null){
            return;
        }
        if(num!=null){
            return;
        }
        travel(node.right);
        n++;
        if(n==k){
            num=node.val;
            return;
        }
        travel(node.left);
    }
    travel(root);

    return num;
};