/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0,
    right = height.length - 1;
  let l_max = 0,
    r_max = 0;

  let ret = 0;

  while (left < right) {
    l_max = Math.max(l_max, height[left]);
    r_max = Math.max(r_max, height[right]);

    if (l_max < r_max) {
      ret += l_max - height[left];
      left++;
    } else {
      ret += r_max - height[right];
      right--;
    }
  }
  return ret;
};

// 单调递减栈
var trap = function (height) {
  let len = height.length;
  const stack = [];
  let ret = 0;
  for (let i = 0; i < len; i++) {
    // 出栈条件
    while (height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      // 边界
      if (!stack.length) {
        break;
      }
      // 计算x横坐标的
      const left = stack[stack.length - 1];
      const currWidth = i - left - 1;
      const currHeight = Math.min(height[left], height[i]) - height[top];
      ret += currWidth * currHeight;
    }
    stack.push(i);
  }
  return ret;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）

// 2
// [1, 2]
