/**
 * 二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。
 * 同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
 * 路径和 是路径中各节点值的总和。
 * 给你一个二叉树的根节点 root ，返回其 最大路径和
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxVal = -Infinity;

  function maxGain(node) {
    if (node === null) {
      return 0;
    }
    const maxLeftVal = Math.max(maxGain(node.left), 0);
    const maxRightVal = Math.max(maxGain(node.right), 0);

    const priceNewpath = node.val + maxLeftVal + maxRightVal;
    maxVal = Math.max(maxVal, priceNewpath);

    return node.val + Math.max(maxLeftVal, maxRightVal);
  }

  maxGain(root);
  return maxVal;
};

const root = {
  val: 2,
  left: {
    val: -2,
    left: null,
    right: null,
  },
  right: {
    val: -1,
    left: null,
    right: null,
  },
};

const ret = maxPathSum(root);
console.log(ret);
