/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。
 * 要求不能创建任何新的节点，只能调整树中节点指针的指向。
 */

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
 var treeToDoublyList = function(root) {
    var head=null;
    var pre=null;

    function travel(node){
        if(node==null){
            return;
        }
        travel(node.left);
        if(pre==null){
            head=node;
        }else{
            pre.right=node;
            node.left=pre;
        }
        pre=node;
        travel(node.right);
    }
    travel(root);
    if(head){
        head.left=pre;
        pre.right=head;
    }
    return head;
};