/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，
 * 最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const memo = new Map();
  let count = 0;
  const dfs = (root) => {
    if (root === null || count === 2) {
      return;
    }
    if (root === p || root === q) {
      count++;
    }
    if (root.left) {
      memo.set(root.left, root);
      dfs(root.left);
    }
    if (root.right) {
      memo.set(root.right, root);
      dfs(root.right);
    }
  };
  dfs(root);

  const pSet = new Set();
  let node = p;
  while (node) {
    pSet.add(node.val);
    node = memo.get(node);
  }

  node = q;
  while (node) {
    if (pSet.has(node.val)) {
      return node;
    }
    node = memo.get(node);
  }
  return null;
};

// const root = {
//   val: 3,
//   left: {
//     val: 5,
//     left: {
//       val: 6,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 2,
//       left: {
//         val: 7,
//         left: null,
//         right: null,
//       },
//       right: {
//         val: 4,
//         left: null,
//         right: null,
//       },
//     },
//   },
//   right: {
//     val: 1,
//     left: {
//       val: 0,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 8,
//       left: null,
//       right: null,
//     },
//   },
// };

const root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
};

const ret = lowestCommonAncestor(root, root.right, root);
console.log(ret);
