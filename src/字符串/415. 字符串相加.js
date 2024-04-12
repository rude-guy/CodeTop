/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0;
  let ret = '';
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 || j >= 0) {
    const total = (+num1[i--] || 0) + (+num2[j--] || 0) + carry;
    carry = Math.floor(total / 10);
    ret = (total % 10) + ret;
  }
  if (carry > 0) {
    ret = carry + ret;
  }
  return ret;
};

const ret = addStrings('11', '123');
console.log(ret);

// num1 = "11", num2 = "123"
// "134
