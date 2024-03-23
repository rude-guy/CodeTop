/**
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  let stack = [root];
  let ret = [];
  while (stack.length) {
    let n = stack.length;
    const level = [];
    while (n--) {
      const node = stack.shift();
      level.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    ret.push(level);
  }
  return ret;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
};

const ret = levelOrder(root);
console.log(ret);
