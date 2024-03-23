/**
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 有效 二叉搜索树定义如下：
 * 节点的左子树只包含 小于 当前节点的数。
 * 节点的右子树只包含 大于 当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
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
var isValidBST = function (root) {
  let lastNodeVal = -Infinity;
  const traverse = (node) => {
    if (node === null) {
      return true;
    }
    const leftRet = traverse(node.left);
    if (lastNodeVal >= node.val) {
      return false;
    }
    lastNodeVal = node.val;
    const rightRet = traverse(node.right);
    return leftRet && rightRet;
  };
  return traverse(root);
};

const root = {
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 4,
    left: null,
    right: null,
  },
};

const ret = isValidBST(root);
console.log(ret);
