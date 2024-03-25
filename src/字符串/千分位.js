// 正则
var splitStr = function (str) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g;
  /**
   * $&: 当前匹配的内容
   * $': 当前匹配后面的内容
   * $`: 当前匹配之前的内容
   */
  return str.replace(reg, '$&,');
};

splitStr('12345678901');

// 10000000000
