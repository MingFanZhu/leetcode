/**
 * 请实现一个函数按照之字形顺序打印二叉树，
 * 即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
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
            if(res.length%2==0){
                temp.push(node.val);
            }else{
                temp.unshift(node.val);
            }
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