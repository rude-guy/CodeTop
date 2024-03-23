/**
 * 给你一棵二叉树的根节点，返回该树的 直径 。
 * 二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。
 * 两节点之间路径的 长度 由它们之间边数表示。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxRet = -Infinity;
  function maxDepp(node) {
    if (node === null) {
      return 0;
    }
    const left = maxDepp(node.left);
    const right = maxDepp(node.right);
    maxRet = Math.max(left + right, maxRet);
    return Math.max(left, right) + 1;
  }
  maxDepp(root);
  return maxRet;
};
