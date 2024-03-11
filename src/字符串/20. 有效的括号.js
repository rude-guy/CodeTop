/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else {
      const left = stack.pop();
      if (left !== s[i]) {
        return false;
      }
    }
  }
  return stack.length ? false : true;
};

// s = "()[]{}" true
// s = "(]"   false
