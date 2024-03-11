/**
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
 * 你可以对一个单词进行如下三种操作：
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const memo = new Map();
  function dp(i, j) {
    if (i === word1.length) {
      // 还需要增加的次数
      return word2.length - j;
    }
    if (j === word2.length) {
      // 还需要删除的次数
      return word1.length - i;
    }
    const memoKey = `${i},${j}`;

    if (memo.has(memoKey)) {
      return memo.get(memoKey);
    }

    if (word1[i] === word2[j]) {
      memo.set(memoKey, dp(i + 1, j + 1));
    } else {
      const ret = Math.min(
        // 增加
        dp(i, j + 1) + 1,
        // 删除
        dp(i + 1, j) + 1,
        // 替换
        dp(i + 1, j + 1) + 1
      );
      memo.set(memoKey, ret);
    }
    return memo.get(memoKey);
  }
  return dp(0, 0);
};

// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')

// h !== r  增删替换

// dp[i][j] = ?
// dp[0][0] = Math.min(1, 1, 1)

// s1/s2 "" h  o  r  s  e
//   ""  0  1  2  3  4  5
//   r   1  1  2  2  3  4
//   o   2  2  1  2  3  4
//   s   3  3  2  2  2  3

// s1[i] === s2[j] 取对角线值
// 否则 [i - 1][j]、[i][j - 1]、[i - 1][j - 1] 取最小值加1
// 题意 将一个字符串转为另一个字符串
// base case 就是一个字符串转为空串
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          // 增加
          dp[i - 1][j] + 1,
          // 删除
          dp[i][j - 1] + 1,
          // 替换
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }
  return dp[m][n];
};

minDistance('', 'a');
