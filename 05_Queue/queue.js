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
  this.dataStore.shift()
}
