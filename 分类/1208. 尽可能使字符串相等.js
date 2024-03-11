/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let n = s.length;
  let ret = 0;
  let left = 0;
  let right = 0;
  let cost = 0;
  while (right < n) {
    if (!s[right] || !t[right]) {
      break;
    }
    cost += Math.abs(s[right].charCodeAt() - t[right].charCodeAt());
    while (cost > maxCost) {
      cost -= Math.abs(s[left].charCodeAt() - t[left].charCodeAt());
      left++;
    }

    ret = Math.max(ret, right - left + 1);
    right++;
  }

  return ret;
};

const s = 'abcd',
  t = '',
  maxCost = 3;

console.log(equalSubstring(s, t, maxCost));
