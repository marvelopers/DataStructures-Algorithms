// 큐는 기본적으로 선입선출에 따라 데이터를 처리한다.
// 우선순위와 같은 다른 기준으로 요소를 삭제해야 하는 애플리케이션의 경우 우선순위 큐라는 자료구조를 사용해야 한다.

// 큐에 저장할 요소 객체부터 정의
function Patient(name, code) {
  this.name = name;
  this.code = code; //환자의 우선순위를 나타내는 정수 
}

function dequeue() {
  const entry = 0;
  for (const i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i].code < this.dataStore[entry].code) {
      entry = i;
    }
  }
  return this.dataStore.splice(entry, 1);
}

function toString() {
  const retStr = "";
  for (const i = 0; i < this.dataStore.length; ++i) {
    retStr += `${this.dataStore[i].name} code: ${this.dataStore[i].code}\n`
  }
  return retStr
}

// 우선순위 큐 구현

const patient = new Patient('A', 5);
const ed = new Queue();
ed.enqueue(patient);
patient = new Patient('C', 6);
ed.enqueue(patient);
patient = new Patient('B', 4);
ed.enqueue(patient);
patient = new Patient('D', 1);
ed.enqueue(patient);
patient = new Patient('E', 1);
ed.enqueue(patient);
patient = new Patient('F', 2);
ed.enqueue(patient);

const seen = ed.enqueue();
console.log(`Patient being treaded: ${seen[0].name}`)
console.log(`Patient waiting to be seen: ${ed.toString()}`)


