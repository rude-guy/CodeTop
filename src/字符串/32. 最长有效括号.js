/**
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let stack = [];
  let n = s.length;
  let dp = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      if (stack.length) {
        const leftIdx = stack.pop();
        dp[i + 1] = i - leftIdx + 1 + dp[leftIdx];
      }
    }
  }
  return Math.max(...dp);
};
longestValidParentheses(')()())');

// 输入：s = ")()())"
// 输出：4
// 解释：最长有效括号子串是 "()()"

// 中间向两边扩张
//  stack = []  ')' => 没有 '(' ? stack => []
// stack = []  '(' => 推入 ? stack => ['(']
// stack = ['(']  ')' => 有 ? stack => []  +2 ？ 连续性

// dp = new Array(n + 1) => n + 1 ? 连续性
// 比如: ')()())' ? [0, 0, 0, 2, 0, 0, 0]
// 针对于 i = 3 对应 '(' => dp[3] = 2 说明前面有连续的部分
//  ) ( ) ( ) )
//  0 0 0 2 0 4 0
// leftIdx 代表左括号的索引。 左括号的索引与前一个的最大括号子串重叠 => 保证与前一个点连续性
// dp[i + 1] = 1 + i - leftIdx + dp[leftIdx]
