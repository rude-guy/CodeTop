class Solution {
  constructor() {}
  /**
   * 拓扑排序（Kahn 算法）
   * @param {object} graph - 有向图的邻接表表示
   * @returns {number[]} 拓扑序列，如果图中存在环则返回空数组
   */
  topologicalSortingKahn(graph) {
    // 初始化入度表 用于记录所有顶点入度
    const indegrees = {};
    for (const node in graph) {
      indegrees[node] = 0;
    }
    // 统计所有顶点入度
    for (const node in graph) {
      for (const neighbor of graph[node]) {
        indegrees[neighbor] += 1;
      }
    }

    // 将入度为 0 的顶点存入队列 queue 中
    const queue = [];
    for (const node in indegrees) {
      if (indegrees[node] === 0) {
        queue.push(node);
      }
    }

    // 拓扑排序
    const order = [];
    while (queue.length) {
      // 从队列中选择一个没有前驱的顶点 0
      const node = queue.shift();
      // 将其输出到拓扑序列 order 中
      order.push(node);

      // 遍历顶点 u 的邻接顶点 v
      for (const neighbor of graph[node]) {
        // 删除从顶点 u 出发的有向边
        indegrees[neighbor] -= 1;
        // 如果删除该边后顶点 v 的入度变为 0
        if (indegrees[neighbor] === 0) {
          // 将其放入队列 queue 中
          queue.push(neighbor);
        }
      }
    }
    // 还有顶点未遍历（存在环），无法构成拓扑序列 -> 判断是否存在环
    if (order.length !== Object.keys(graph).length) {
      return [];
    }
    // 返回拓扑序列
    return order;
  }
}

function topologicalSortingKahn(graph) {
  const indegrees = {};
  for (const node in graph) {
    indegrees[node] = 0;
  }

  for (const node in graph) {
    for (const neighbor of graph[node]) {
      // 统计指向 neighbor 节点的次数
      indegrees[neighbor] += 1;
    }
  }

  // 获取所有指向为 0 的节点
  const queue = [];
  for (const node in indegrees) {
    if (indegrees[node] === 0) {
      queue.push(node);
    }
  }

  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const neighbor of graph[node]) {
      indegrees[neighbor] -= 1;
      if (indegrees[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  if (order.length !== Object.keys(graph).length) {
    return [];
  }
  return order;
}

const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['D'],
  D: ['E'],
  E: [],
};

const solution = new Solution();
const ret = solution.topologicalSortingKahn(graph);
console.log(topologicalSortingKahn(graph));
