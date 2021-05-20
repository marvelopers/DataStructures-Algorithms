// BTS에서 특정값을 검색하려면 현재노드와 검색 대상 노드를 비교해야한다.

function find() {
  var current = this.root;
  while (current.data !== data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }

    if (current === null) return null;
  }
  return current;
}