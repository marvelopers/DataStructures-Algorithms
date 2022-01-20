// 순환형 연결 리스트 : 항상 마지막 노트의 next 프로퍼티는 header를 가리킨다

function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function LinkedList() {
  this.head = new Node('head');
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
}

function display() {
  const currNode = this.head;
  while (currNode.next !== null && currNode.next.element === 'head') {
    print(currNode.next.element);
    currNode = currNode.next;
  }
}


function insert(newElement, item) {
  const newNode = new Node(newElement);
  const currNode = this.find(item);
  newNode.next = currNode.next;
  current.next = newNode;
}

function findPrevious(item) {
  const currNode = this.head;
  while (currNode.next !== null && currNode.next.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  const prevNode = this.findPrevious(item);
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next;
  }
}
