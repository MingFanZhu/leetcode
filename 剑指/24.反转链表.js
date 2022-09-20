/**
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    var pre = null;
    var current = head;
    while (current != null) {
        var temp = current.next;
        current.next = pre;
        pre = current;
        current = temp;
    }
    return pre;
};