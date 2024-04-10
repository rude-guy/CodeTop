/**
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dictSet = new Set(wordDict);
  let len = s.length;
  const memo = new Map();
  const backTrack = (left, right) => {
    if (left === right && left === len) {
      return true;
    }
    const memoKey = `${left},${right}`;
    if (memo.has(memoKey)) {
      return memo.get(memoKey);
    }
    for (let i = right; i < len; i++) {
      const d = s.substring(left, i + 1);
      if (dictSet.has(d) && backTrack(i + 1, i + 1)) {
        return true;
      }
    }
    memo.set(memoKey, false);
    return false;
  };
  return backTrack(0, 0, '');
};

const ret = wordBreak(
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
  ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa']
);
console.log(ret);

// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
