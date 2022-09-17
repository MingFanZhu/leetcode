/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    var nullHead=new ListNode(null);
    var cur=nullHead;
    while(l1!=null&&l2!=null){
        if(l1.val>l2.val){
            cur.next=new ListNode(l2.val);
            l2=l2.next;
        }else{
            cur.next=new ListNode(l1.val);
            l1=l1.next;
        }
        cur=cur.next;
    }
    if(l1==null){
        cur.next=l2;
    }else{
        cur.next=l1;
    }
    return nullHead.next;
};