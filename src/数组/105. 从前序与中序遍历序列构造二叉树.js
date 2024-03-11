/**
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历，
 *  inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 *  */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return preInBuild(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

function preInBuild(preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd) return null;
  const value = preorder[preStart];
  let index;
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === value) {
      index = i;
      break;
    }
  }
  let leftSize = index - inStart;
  const root = new TreeNode(value);
  const left = preInBuild(preorder, preStart + 1, preStart + leftSize, inorder, inStart, index - 1);
  const right = preInBuild(preorder, preStart + leftSize + 1, preEnd, inorder, index + 1, inEnd);
  root.left = left;
  root.right = right;
  return root;
}

const preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];
const ret = buildTree(preorder, inorder);
console.log(ret);
//
// 输出: [3,9,20,null,null,15,7]
