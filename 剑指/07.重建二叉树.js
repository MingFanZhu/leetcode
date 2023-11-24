/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if(preorder.length==0){
        return null;
    }
    var val=preorder.shift();
    var node=new TreeNode(val);
    var index=inorder.indexOf(val);
    if(index!=0){
        var left=inorder.slice(0,index);
        node.left=buildTree(preorder,left);
    }
    if(index!=inorder.length-1){
        var right=inorder.slice(index+1,inorder.length);
        node.right=buildTree(preorder,right);
    }
    return node;
};