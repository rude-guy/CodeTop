/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let n = digits.length;
  if (n === 0) return [];
  const letterMap = new Map([
    [2, 'abc'],
    [3, 'def'],
    [4, 'ghi'],
    [5, 'jkl'],
    [6, 'mno'],
    [7, 'pqrs'],
    [8, 'tuv'],
    [9, 'wxyz'],
  ]);

  let ret = [];
  function backTrack(s, i) {
    if (i > n) {
      return;
    }
    if (i === n) {
      ret.push(s);
      return;
    }
    const d = letterMap.get(+digits[i]);
    // a b c
    // d e f
    for (let m = 0; m < d.length; m++) {
      backTrack(s + d[m], i + 1);
    }
  }
  backTrack('', 0);
  return ret;
};

letterCombinations('233');

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
