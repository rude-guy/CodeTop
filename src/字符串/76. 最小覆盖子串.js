/**
 * 给你一个字符串s、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 注意：
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const target = {};
  for (let c of t) {
    target[c] ? target[c]++ : (target[c] = 1);
  }
  const targetLen = Object.keys(target).length;
  let ret = '';
  const wind = {};
  let need = 0;

  const n = s.length;
  let left = 0;
  let right = 0;

  while (right < n) {
    const c = s[right++];

    if (target[c]) {
      wind[c] ? wind[c]++ : (wind[c] = 1);
      if (wind[c] === target[c]) {
        need++;
      }
    }
    while (need >= targetLen && left < right) {
      const d = s[left++];
      if (target[d]) {
        wind[d]--;
        if (wind[d] < target[d]) {
          need--;
        }
      }
      if (!ret || ret.length > right - left + 1) {
        ret = s.substring(left - 1, right);
      }
    }
  }
  return ret;
};

minWindow('ADOBECODEBANC', 'ABC');

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

// ABBDC  BBC
