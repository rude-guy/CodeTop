/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) {
    return;
  }
  // 先序遍历 记录上一次节点
  let lastNode = null;
  const traverse = (node) => {
    if (node === null) {
      return;
    }
    const left = node.left;
    const right = node.right;
    if (lastNode) {
      lastNode.left = null;
      lastNode.right = node;
    }
    lastNode = node;
    traverse(left);
    traverse(right);
  };
  traverse(root);
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
};

const ret = flatten(root);
console.log(ret);
