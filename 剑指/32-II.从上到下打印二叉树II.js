/**
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    var array=[];
    var res=[];
    if(root!=null){
        array.push(root);
    }
    while(array.length>0){
        var num=array.length;
        var temp=[];
        while(num>0){
            num--;
            var node=array.shift();
            temp.push(node.val);
            if(node.left!=null){
                array.push(node.left);
            }
            if(node.right!=null){
                array.push(node.right);
            }
        }
        res.push(temp);
    }
    return res;
};