/**
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，
 * 其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。
 * 如果气温在这之后都不会升高，请在该位置用 0 来代替。
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  const ret = new Array(n).fill(0);
  const stack = [0];
  for (let i = 1; i < n; i++) {
    while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const num = stack.pop();
      ret[num] = i - num;
    }
    stack.push(i);
  }
  return ret;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]

// stack 保持单调递减
// [73]  => 74 > 73
// [74] => 75 > 74
// [75] => 71 < 75
// [75, 71]
// [75, 71, 69] 72 > 69  72 > 71
// [75] => 76 > 75
// [76]
// [76, 73]
