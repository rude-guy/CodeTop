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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  return postInBuild(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};

function postInBuild(inorder, inStart, inEnd, postorder, postStart, postEnd) {
  if (postStart > postEnd) return null;
  const value = postorder[postEnd];
  let index;
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === value) {
      index = i;
      break;
    }
  }
  let rightSize = inEnd - index;
  const root = new TreeNode(value);
  const left = postInBuild(inorder, inStart, index - 1, postorder, postStart, postEnd - rightSize - 1);
  const right = postInBuild(inorder, index + 1, inEnd, postorder, postEnd - rightSize, postEnd - 1);
  root.left = left;
  root.right = right;
  return root;
}

const inorder = [9, 3, 15, 20, 7],
  postorder = [9, 15, 7, 20, 3];
const ret = buildTree(inorder, postorder);
console.log(ret);

// inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]
