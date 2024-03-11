/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let p = (head = new ListNode(-1));
  let p1 = l1,
    p2 = l2;
  while (p1 !== null || p2 !== null || carry) {
    const total = carry + (p1?.val || 0) + (p2?.val || 0);
    const node = new ListNode(total % 10);
    carry = Math.floor(total / 10);
    p.next = node;
    p = p.next;
    if (p1 !== null) {
      p1 = p1.next;
    }
    if (p2 !== null) {
      p2 = p2.next;
    }
  }
  return head.next;
};

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
