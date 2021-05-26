function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}


function LinkedList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.findLast = findLast;
  this.dispReverse = dispReverse;
}

function find(item) {
  const currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  const newNode = new Node(newElement);
  const current = this.find(item);
  newNode.next = currNode.next;
  newNode.previous = current;
  current.next = newNode;
}

function remove(item) {
  const currNode = this.find(item);
  if (currNode !== null) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}

function findLast() {
  const currNode = this.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

function dispReverse() {
  const currNode = this.head;
  currNode = this.findLast();
  while (currNode.previous !== null) {
    print(currNode.element);
    currNode = currNode.previous;
  }
}