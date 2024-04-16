function topologicalSortingDFS(graph) {
  // 记录当前顶点是否被访问过
  const visited = new Set();
  // 记录同一次深搜时，当前顶点是否被访问过
  const onStack = new Set();
  // 用于存储拓扑序列
  const order = [];
  // 用于判断是否存在环
  let hasCycle = false;

  function dfs(u) {
    if (onStack.has(u)) {
      // 同一次深度优先搜索时，当前顶点被访问过，说明存在环
      hasCycle = true;
      return;
    }
    if (visited.has(u) || hasCycle) {
      // 当前节点被访问或者有环时直接返回
      return;
    }
    visited.add(u);
    onStack.add(u);

    for (const v of graph[u]) {
      dfs(v);
    }

    // 后序遍历顺序访问节点 u
    order.push(u);
    onStack.delete(u);
  }

  for (const u in graph) {
    dfs(u);
  }
  if (hasCycle) {
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

const ret = topologicalSortingDFS(graph);

console.log(ret);
