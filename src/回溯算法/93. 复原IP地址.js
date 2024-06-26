/**
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 * 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
 * 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。
 * 你不能重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let ret = [];
  let IPLen = 4;
  let len = s.length;
  const backTrack = (i, track) => {
    if (track.length === IPLen) {
      if (i === len) {
        ret.push(track.join('.'));
      }
      return;
    }
    for (let j = i; j < len; j++) {
      const d = s.substring(i, j + 1);
      if ((d.length > 1 && d[0] === '0') || +d > 255) {
        break;
      }
      track.push(d);
      backTrack(j + 1, track);
      track.pop();
    }
  };
  backTrack(0, []);
  return ret;
};

const ret = restoreIpAddresses('25525511135');
console.log(ret);

// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]
