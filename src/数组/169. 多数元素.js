/**
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let countObj = {};
  for (const num of nums) {
    if (countObj[num]) {
      countObj[num]++;
    } else {
      countObj[num] = 1;
    }
  }
  let max = 0,
    ret = 0;
  for (let num in countObj) {
    if (countObj[num] > max) {
      max = countObj[num];
      ret = num;
    }
  }
  return ret;
};

majorityElement([3, 2, 3]);

// [3,2,3] => 3
