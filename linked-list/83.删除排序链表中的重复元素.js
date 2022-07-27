/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (53.53%)
 * Likes:    828
 * Dislikes: 0
 * Total Accepted:    462.4K
 * Total Submissions: 864.4K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,1,2,3,3]
 * 输出：[1,2,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    //快慢指针
    if(head==null||head.next==null){
        return head;
    }
    var slow=head;
    var fast=head;

    while(fast!=null){
        if(fast.val!=slow.val){
            slow.next=fast;
            slow=slow.next;
        }
        fast=fast.next;
    }
    slow.next=null;//避免最后几个全是一样的值，到slow就该截断了

    return head;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = deleteDuplicates;
// @after-stub-for-debug-end