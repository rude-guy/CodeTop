/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let p = new ListNode(-1);
  p.next = head;
  let prev = p,
    last = p.next;
  while (last !== null && n--) {
    last = last.next;
  }
  while (last !== null) {
    prev = prev.next;
    last = last.next;
  }
  prev.next = prev.next?.next || null;
  return p.next;
};

const utils = require('./utils');
const ret = removeNthFromEnd(utils.createListNode([1]), 2);
console.log(utils.listNodeToArray(ret));

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
