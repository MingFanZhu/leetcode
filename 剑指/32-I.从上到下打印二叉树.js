/**
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
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
 * @return {number[]}
 */
 var levelOrder = function(root) {
    var array=[];
    var res=[];
    if(root!=null){
        array.push(root);
    }
    while(array.length>0){
        var num=array.length;
        while(num>0){
            num--;
            var node=array.shift();
            res.push(node.val);
            if(node.left!=null){
                array.push(node.left);
            }
            if(node.right!=null){
                array.push(node.right);
            }
        }
    }
    return res;
};