/**
 * 给你一个非负整数数组 nums 和一个整数 target 。
 * 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
 * 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
 * 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const len = nums.length;
  const memo = new Map();
  const dp = (i, n) => {
    if (i > len) {
      return 0;
    }
    if (i === len && n === 0) {
      return 1;
    }
    const memoKey = `${i},${n}`;
    if (memo.has(memoKey)) {
      return memo.get(memoKey);
    }
    const total = dp(i + 1, n - nums[i]) + dp(i + 1, n + nums[i]);
    memo.set(memoKey, total);
    return total;
  };
  return dp(0, target);
};

var findTargetSumWays = function (nums, target) {
  let sum = 0;
  nums.forEach((val) => {
    sum += val;
  });
  if (sum < target || (target + sum) % 2 === 1) {
    return 0;
  }
  return subsets(nums, (sum + target) / 2) || 0;
};

function subsets(nums, sum) {
  let len = nums.length;
  const dp = new Array(len + 1).fill(0).map((v) => new Array(sum + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= sum; j++) {
      if (j >= nums[i - 1]) {
        dp[i][j] =
          // 不将当前元素添加的种数
          dp[i - 1][j] +
          // 将当前元素添加的种数
          dp[i - 1][j - nums[i - 1]];
      } else {
        // 放不下
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[len][sum];
}

const ret = findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1);

console.log(ret);

// 输入：nums = [1,1,1,1,1], target = 3
// 输出：5
// 解释：一共有 5 种方法让最终目标和为 3 。
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

// sum = 5, target = 3
// sum < target || (sum + target) % 2 === 0 ? return 0

// 如果添加 - 号和为 neg。那么添加加号的值 (sum - neg) 那么 (sum - neg) - neg = target
// 推导出 neg = (sum - target) / 2 = 4。那么转化为不需要考虑符号问题（背包问题）
// 在一堆数字中，任意数据加起来等于 neg 有多少种

// dp[i][j] =
// i => 前多少个元素
// j => 所求的值

// base case
// dp[0][j] = j >= 1 ? 0 : 1;
// dp[i][0] = 1;

[
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 2, 1, 0, 0],
  [1, 3, 3, 1, 0],
  [1, 4, 6, 4, 1],
  [1, 5, 10, 10, 5],
];

// 2 >= nums[i] ?  dp[4][2] = dp[3][2] + dp[3][2 - nums[i]];
// 2 < nums[i] ? dp[4][2] = dp[3][2]

// dp[i][j] = j >= nums[i] ? dp[i - 1][j] + dp[i - 1][j - nums[i]] : dp[i - 1];
