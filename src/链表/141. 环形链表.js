/**
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
 * 如果链表中存在环 ，则返回 true 。 否则，返回 false
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  do {
    if (fast === null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  } while (slow !== fast);
  return true;
};

// head = [3,2,0,-4], pos = 1
// true

// 快慢指针
// slow * 1 fast * 2
// 节点数为复数 如: [3,2,0,-4]  3     2     0
//                           3 2   0 -4  2 0
// 节点数为单数 如: [3,2,0],   3     2
//                           3 2   0 2
