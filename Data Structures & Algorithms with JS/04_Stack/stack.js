// # Stack
// 요소리스트로 구성되며 Top이라 불리는 리스트의 한쪽 끝으로만 요소에 접근할 수 있다.
// 후입선출 구조(LIFO)
// push를 통해 추가하고 pop을 통해 요소를 꺼낸다.

function Stack(){
  this.dataStore = []; // 스택요소를 저장하는 배열 
  this.top = 0; //생성자에서는 top을 0으로 초기화
  this.push = push;
  this.pop = pop;
  this.peek = peek;
}

function push(element) {
  this.dataStore[this.top++] = element; 
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top-1];
}
//stack이 비어있으면 undefined 호출 

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

const s = new Stack();
s.push('one');
s.push('two');
s.push('three');
print(`length: ${s.length()}`);

const popped = s.pop();
print(`this popped element is: ${popped}`);


