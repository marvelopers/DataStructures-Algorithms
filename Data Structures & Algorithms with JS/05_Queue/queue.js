// 리스트의 일종으로 끝부분으로 데이터가 삽입되고 앞부분에서는 데이터가 삭제되는 자료구조
// 선입선출 구조 
// 운영체제의 프로세스 처리구조, 프린트 스풀러, 상인들의 대기줄 등의 애플리케이션에서 큐를 사용 
// enqueue, dequeue

//  배열 기반의 Queue
{
  const names = [];
  names.push('Kim');
  names.push('Lee');
  console.log(names);
}

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element)
}
function dequeue() {
  this.dataStore.shift();
  // 배열의 앞부분에서부터 요소를 삭제
}
function front() {
  return this.dataStore[0];
}
function back() {
  return this.dataStore[this.dataStore.length - 1];
}
// 큐의 모든 요소를 출력해주는 toString()
function toString() {
  const retStr = '';
  for (var i = 0; this.dataStore.length; i++) {
    retStr += this.dataStore[i] + '\n';
  }
  return retStr;
}

function empty() {
  if (this.dataStore.length === 0) {
    return true;
  }
  return false;
}


// TEST
const q = new Queue();
q.enqueue('A');
q.enqueue('B');
q.enqueue('C');
q.dequeue();
console.log(q.toString());
console.log('front of queue' + q.front());
console.log('back of queue' + q.back());