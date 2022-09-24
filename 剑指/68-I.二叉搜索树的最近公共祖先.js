/**
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    function search(node,p,q){
        if(p.val<=node.val&&q.val>=node.val){
            return node;
        }
        if(p.val<node.val&&q.val<node.val){
            return search(node.left,p,q);
        }
        if(p.val>node.val&&q.val>node.val){
            return search(node.right,p,q);
        }
    }

    if(p.val<q.val){
        return search(root,p,q);
    }else{
        return search(root,q,p);
    }
};