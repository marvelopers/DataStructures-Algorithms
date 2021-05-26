// 연결리스트 : 노드라 불리는 객체가 모여 연결리스트를 구성한다. 각 노드는 객체 레퍼런스를 통해 리스트의 다른 노드와 연결된다. 
//  다른 노드를 참조하는 레퍼런스를 링크라고 한다.

// 배열로 작업했을 때, 속도가 느리다고 판단되면 대안으로 연결 리스트를 사용할 수 있다 
// 일차원 배열을 사용한 곳은 대부분 리스트로 치환이 가능하다
// 임의의 요소에 접근해야 할 때는 연결 리스트보다 배열이 좋다. 


// 객체기반 연결 리스트 설계
// 연결리스트에서는 두 클래스를 만들어야한다. 연결리스트에 추가할 수 있는 Node 클래스와 노드의 삽입, 삭제, 리스트 출력, 기타 연결리스트에 필요한 기능을 제공하는 LinkedList 클래스를 만든다

// Node 클래스 : 노드의 데이터를 저장하는 element와 연결리스트의 다음 노드 링크를 저장하는 next 프로퍼티를 포함한다
// LinkedList 클래스 : 연결리스트의 기능을 제공. 리스트의 헤드를 나타내는 노드 한 개의 프로퍼티만 포함한다

function LinkedList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
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
  const currNode = this.find(item);
  newNode.next = currNode.next;
  current.next = newNode;
}

function display() {
  const currNode = this.head;
  while (!(currNode.next === null)) {
    print(currNode.next.element);
    currNode = currNode.next;
  }
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

// CITY LIST

const cities = new List();
cities.insert('Seoul', 'head');
cities.insert('Suwon', 'Seoul');
cities.insert('Wonju', 'Suwon');
cities.display();

cities.remove('Suwon');
cities.display();
