/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 */

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
var reverseList = function (head) {
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};

const utils = require('./utils');

const root = utils.createListNode([1, 2, 3, 4, 5]);

const ret = reverseList(root);
console.log(utils.listNodeToArray(ret));
// head = [1,2,3,4,5]
// [5,4,3,2,1]
