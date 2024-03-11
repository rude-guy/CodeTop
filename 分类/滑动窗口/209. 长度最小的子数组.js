var minSubArrayLen = function (target, nums) {
  const n = nums.length;

  let ret = n + 1;
  let total = 0;
  let left = 0;
  for (let right = 0; right < n; right++) {
    total += nums[right];
    // 收缩范围
    while (total >= target && left <= right) {
      ret = Math.min(ret, right - left + 1);
      if (ret === 1) return ret;
      total -= nums[left++];
    }
  }

  return ret === n + 1 ? 0 : ret;
};

// const target = 7,
//   nums = [2, 3, 1, 2, 4, 3];

const target = 4,
  nums = [1, 4, 4];

console.log(minSubArrayLen(target, nums));
