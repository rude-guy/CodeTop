/**
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 返回 滑动窗口中的最大值 。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const decrementQueue = new DecrementQueue();
  decrementQueue.init(nums.slice(0, k));
  const len = nums.length;
  const ret = [decrementQueue.first()];
  for (let i = k; i < len; i++) {
    decrementQueue.push(nums[i], nums[i - k]);
    ret.push(decrementQueue.first());
  }
  return ret;
};
// 单调递减数组
class DecrementQueue {
  constructor() {
    this.queue = [];
  }
  init(arr) {
    for (const num of arr) {
      while (this.last() < num) {
        this.pop();
      }
      this.queue.push(num);
    }
  }
  push(num, delNum) {
    if (this.first() === delNum) {
      this.queue.shift();
    }
    if (this.first() < num) {
      this.queue.length = 0;
      this.queue.push(num);
      return;
    }
    while (this.last() < num) {
      this.pop();
    }
    this.queue.push(num);
  }
  pop() {
    this.queue.pop();
  }
  first() {
    return this.queue[0];
  }
  last() {
    return this.queue[this.queue.length - 1];
  }
}
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3  // [3, -1]
//  1 [3  -1  -3] 5  3  6  7       3  // [3, -1, -3]
//  1  3 [-1  -3  5] 3  6  7       5  // [5]
//  1  3  -1 [-3  5  3] 6  7       5  // [5, 3]
//  1  3  -1  -3 [5  3  6] 7       6  // [6]
//  1  3  -1  -3  5 [3  6  7]      7  // [7]
