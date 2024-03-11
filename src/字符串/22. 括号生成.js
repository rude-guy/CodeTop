/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ret = [];
  function backTrack(s, i, j) {
    if (i > n || i < j) {
      return;
    }
    if (i === n && j == n) {
      ret.push(s);
      return;
    }
    backTrack(s + '(', i + 1, j);
    backTrack(s + ')', i, j + 1);
  }
  backTrack('', 0, 0);
  return ret;
};

const ret = generateParenthesis(3);
console.log(ret);

// n = 3
// ["((()))","(()())","(())()","()(())","()()()"]

// 如何判断是否能推入 ')' ?
// j <= i 能推入括号  i < j ? 不能推入 base case
