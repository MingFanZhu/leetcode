/**
 * 输入两个链表，找出它们的第一个公共节点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    var p1=headA;
    var p2=headB;
    if(p1==null||p2==null){
        return null;
    }
    while(p1!=p2){
        if(p1.next==null&&p2.next==null){
            return null;
        }
        p1.next==null?p1=headB:p1=p1.next;
        p2.next==null?p2=headA:p2=p2.next;
    }

    return p1;
};