/**
 * 给出二叉 搜索 树的根节点，该树的节点值各不相同，
 * 请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。
 * 提醒一下，二叉搜索树满足下列约束条件：
 * 节点的左子树仅包含键 小于 节点键的节点。
 * 节点的右子树仅包含键 大于 节点键的节点。
 * 左右子树也必须是二叉搜索树。
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
 * @return {TreeNode}
 */
// 递归
var convertBST = function (root) {
  let preVal = 0;
  const traverse = (node) => {
    if (node === null) {
      return null;
    }
    traverse(node.right);
    node.val += preVal;
    preVal = node.val;
    traverse(node.left);
  };
  traverse(root);
  return root;
};

// 迭代
var convertBST = function (root) {
  const stack = [];
  let cur = root;
  let prevVal = 0;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.right;
    }
    const node = stack.pop();
    node.val += prevVal;
    prevVal = node.val;
    cur = node.left;
  }
  return root;
};

const root = {
  val: 3,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 5,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
};

convertBST(root);
