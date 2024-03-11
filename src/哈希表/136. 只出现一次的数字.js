/**
 * 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 相同数进行 异或 => 0  2 ^ 2 => 0
var singleNumber = function (nums) {
  return nums.reduce((a, b) => {
    return a ^ b;
  });
};

singleNumber([2, 2, 1]);

// 输入：nums = [2,2,1]
// 输出：1
