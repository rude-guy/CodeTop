/**
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const len = nums.length;
  const ret = new Set();
  const backTrack = (track) => {
    if (track.size === len) {
      ret.add(
        Array.from(track)
          .map((v) => nums[v])
          .join(',')
      );
      return;
    }
    for (let i = 0; i < len; i++) {
      if (track.has(i)) {
        continue;
      }
      track.add(i);
      backTrack(track);
      track.delete(i);
    }
  };
  backTrack(new Set());
  return Array.from(ret).map((v) => v.split(','));
};

const ret = permuteUnique([1, 1, 2]);
console.log(ret);

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
