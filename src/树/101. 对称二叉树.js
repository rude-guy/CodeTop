/**
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const stack = [root.left, root.right];
  while (stack.length) {
    const nextFloor = [];
    if (stack.length % 2 !== 0) {
      return false;
    }
    while (stack.length) {
      const prev = stack.shift();
      const next = stack.pop();
      if (prev?.val !== next?.val) {
        return false;
      }
      if (prev) {
        nextFloor.unshift(prev.left);
        nextFloor.unshift(prev.right);
      }
      if (next) {
        nextFloor.push(next.right);
        nextFloor.push(next.left);
      }
    }
    stack.push(...nextFloor);
  }
  return true;
};

var isSymmetric = function (root) {
  return compare(root.left, root.right);
};

function compare(left, right) {
  if (left === right) {
    return true;
  }
  if (left?.val !== right?.val) {
    return false;
  }
  return compare(left.left, right.right) && compare(left.right, right.left);
}

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
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};

isSymmetric(root);
