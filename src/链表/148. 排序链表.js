/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
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
var sortList = function (head) {
  const arr = [];
  let p = head;
  while (p) {
    arr.push(p);
    p = p.next;
  }

  arr.sort((a, b) => a.val - b.val);
  let dump = new ListNode(-1);
  p = dump;
  for (const node of arr) {
    p.next = node;
    p = p.next;
  }
  p.next = null;
  return dump.next;
};

// 输入：head = [4,2,1,3]
// 输出：[1,2,3,4]
