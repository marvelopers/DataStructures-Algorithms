// 최솟값은 할상 왼쪽 자식에 저장하므로 더이상 왼쪽 자식 노드가 없어질 때까지 BST의 왼쪽 에지를 탐색하면 최솟값을 찾을 수 있다

function getMin() {
  var current = this.root;
  while (current.left !== null) {
    currnet = current.left;
  }
  return current.data;
}


function getMax() {
  var current = this.root;
  while (current.right !== null) {
    currnet = current.left;
  }
  return current.data;
}

