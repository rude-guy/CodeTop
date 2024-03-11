/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串的长度。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let wind = {};
  const n = s.length;
  let ret = 0;
  let left = 0;
  let right = 0;
  while (right < n) {
    const c = s[right++];
    wind[c] ? wind[c]++ : (wind[c] = 1);
    // 收缩到不能收缩在进行扩张
    while (left < right && wind[c] > 1) {
      const d = s[left++];
      wind[d]--;
    }
    ret = Math.max(ret, right - left);
  }
  return ret;
};

lengthOfLongestSubstring('abcabcbb');

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
