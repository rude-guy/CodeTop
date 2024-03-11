/**
 *  给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let p = head;
  const traverse = (node) => {
    if (node === null) {
      return true;
    }
    const ret = traverse(node.next) && p.val === node.val;
    p = p.next;
    return ret;
  };
  return traverse(head);
};

const utils = require('./utils');

const ret = isPalindrome(utils.createListNode([2]));
console.log(ret);
