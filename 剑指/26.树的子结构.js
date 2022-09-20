/**
 * 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    if(A==null||B==null){
        return false;
    }
    if(A.val==B.val&&compareTree(A,B)){
        return true;
    }
    return isSubStructure(A.left,B)||isSubStructure(A.right,B);
};

function compareTree(Aroot,Broot){
    if(Broot==null){
        //匹配完了所有的b树结点
        return true;
    }
    if(Aroot==null){
        return false;
    }
    if(Aroot.val!=Broot.val){
        return false;
    }
    return compareTree(Aroot.left,Broot.left)&&compareTree(Aroot.right,Broot.right);
}