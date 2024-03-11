/**
 * 给你一个字符串 s，找到 s 中最长的回文子串
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 */

/**
 * @param {string} s
 * @return {string}
 */
// 从中间向两边扩张，找最大的回文子串
var longestPalindrome = function (s) {
  let ret = '';
  let n = s.length;
  for (let i = 0; i < n; i++) {
    // 情况1 b a b
    let s1 = palindrome(s, i, i);
    // 情况2 b a a b
    let s2 = palindrome(s, i, i + 1);
    ret = s1.length > ret.length ? s1 : ret;
    ret = s2.length > ret.length ? s2 : ret;
  }
  return ret;
};
// 向两边扩展
function palindrome(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--, r++;
  }
  // b a b  l = -1 ; r = 3
  return s.substring(l + 1, r);
}

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// b or b b => 向两边扩张到最大回文子串
// 对应 情况1 b a b  情况2  a b b a
