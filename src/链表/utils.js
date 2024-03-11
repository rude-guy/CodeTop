function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createListNode(arr) {
  const head = new ListNode();
  let p = head;
  for (let i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    p.next = node;
    p = p.next;
  }
  return head.next;
}

function listNodeToArray(root) {
  const ret = [];
  let p = root;
  while (p !== null) {
    ret.push(p.val);
    p = p.next;
  }
  return ret;
}

module.exports = {
  createListNode,
  listNodeToArray,
};
