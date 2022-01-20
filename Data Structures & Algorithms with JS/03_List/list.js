// 리스트 : 순서가 있는 일련의 데이터 집합
// insert--->  [      ]  <---append

// 리스트가 효율적인 상황 : 리스트의 항목을 검색할 필요가 없을 때, 일정한 순서로 항목을 집어넣을 필요가 없을 때, 
// list가 비효율적인 상황 : 검색을 수행하거나, 복잡한 정렬을 필요로 할 때

// 리스트의 추상적 데이터형 : abstract data type(ADT)

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

// remove 구현
function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
}

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.split(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore;
}

function insert(element, after) {
  const insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.split(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore.length = 0;
  this.listSize = this.pos = 0;
}


const names = new List();
names.append('chloe1');
names.append('chloe2');
names.append('chloe3');
names.append('chloe4');
names.append('chloe5');
print(names.toString());


function Containe(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return true;
    }
    return false;
  }
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.dataStore.length - 1;
}

function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

// searchList
for (names.front; names.currPos() < names.length; names.next()) {
  print(names.getElement)
}