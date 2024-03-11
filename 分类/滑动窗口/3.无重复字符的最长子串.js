/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  if (n <= 1) return n;
  let ret = 0;
  let left = 0;
  const map = new Map();

  for (let end = 0; end < n; end++) {
    const c = s[end];

    // 收缩条件
    if (map.has(c) && map.get(c) >= left) {
      left = map.get(c) + 1;
    }
    map.set(c, end);

    // 总结 end + 1 数组从0开始
    ret = Math.max(ret, end - left + 1);
  }

  return ret;
};

console.log(lengthOfLongestSubstring('pwwkew'));
