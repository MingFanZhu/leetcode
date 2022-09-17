/**
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
 * 返回删除后的链表的头节点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    var pre=null;
    var cur=head;
    while(cur!=null){
        if(cur.val==val){
            if(pre==null){
                head=head.next;
            }else{
                pre.next=cur.next;
            }
            return head;
        }
        pre=cur;
        cur=cur.next;
    }
};