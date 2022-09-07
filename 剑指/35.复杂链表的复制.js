/**
 * 请实现 copyRandomList 函数，复制一个复杂链表。
 * 在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    var map = new Map();
    var temp = head;
    while (temp != null) {
        var newNode = new Node(temp.val, null, null);
        map.set(temp, newNode);
        temp = temp.next;
    }

    temp = head;
    var newHead = map.get(head);
    while (temp != null) {
        var newNode = map.get(temp);
        if (temp.next == null) {
            newNode.next = null;
        } else {
            newNode.next = map.get(temp.next);
        }
        if (temp.random == null) {
            newNode.random = null;
        } else {
            newNode.random = map.get(temp.random);
        }
        temp = temp.next;
    }
    return newHead;
};

//另外一种解法
var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    //复制
    //A->B->C变成A->A'->B->B'->C->C'
    for (let node = head; node !== null; node = node.next.next) {
        const nodeNew = new Node(node.val, node.next, null);
        node.next = nodeNew;
    }
    //连接random
    for (let node = head; node !== null; node = node.next.next) {
        const nodeNew = node.next;
        nodeNew.random = (node.random !== null) ? node.random.next : null;
    }
    const headNew = head.next;
    //连接next
    for (let node = head; node !== null; node = node.next) {
        const nodeNew = node.next;
        node.next = node.next.next;
        nodeNew.next = (nodeNew.next !== null) ? nodeNew.next.next : null;
    }
    return headNew;
};