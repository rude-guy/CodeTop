/**
 * 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。
 * 除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，
 * 聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。
 * 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。
 * 给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。
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
var rob = function (root) {
  const memo = new Map();
  const traverse = (node) => {
    if (node === null) {
      return 0;
    }
    if (memo.has(node)) {
      return memo.get(node);
    }
    const ret = Math.max(
      node.val +
        (node.left !== null ? traverse(node.left.left) + traverse(node.left.right) : 0) +
        (node.right !== null ? traverse(node.right.left) + traverse(node.right.right) : 0),
      traverse(node.left) + traverse(node.right)
    );
    memo.set(node, ret);
    return ret;
  };
  return traverse(root, true);
};

// 如何当前 +node.val => node.left.left node.left.right node.right.left node.right.right
// 如果当前 -node.val => node.left node.right
