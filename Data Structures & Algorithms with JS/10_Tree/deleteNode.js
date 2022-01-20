// remove(), removeNode() 사용 
// 삭제방법
// 1. 노드가 삭제할 데이터를 포함하고 있는지 확인, 포함하고 있을 경우에만 삭제
// 2. 포함하고 있지 않은 경우, 현재 노드의 데이터와 삭제하려는 데이터의 크기를 비교 
// 삭제하려는 데이터가 현재 노드의 데이터보다 작으면 왼쪽 자식노드로, 크면 오른쪽 자식노드로 이동
// 3. 리프노드의 경우 삭제된 노드를 가리키던 부모노드의 링크를 null로 설정

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node === null) return null;
  if (data === node.data) {
    if (node.left === null && node.right === null) return null;
    if (node.left === null) return node.right;
    if (node.right === null) return node.left;

    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data); return node;
  } else {
    node.right = removeNode(node.right, data); return node;
  }
}
