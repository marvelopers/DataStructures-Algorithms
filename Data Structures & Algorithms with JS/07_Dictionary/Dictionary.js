// Dictionary : 데이터를 키와 값 쌍으로 저장하는 구조

function Dictionary() {
  this.datastore = new Array();
}

function add(key, value) {
  this.datastore[key] = value;
}

function find(key) {
  return this.datastore[key];
}

function remove(key) {
  delete this.datastore[key];
}

function showAll() {
  for (let key in Object.keys(this.datastore)) {
    print(`${key}: ${this.datastore[key]} `);
  }
}

// Dictionary 클래스의 부가함수 
function count() {
  let n = 0;
  for (const key in Objects.keys(this.datastore)) {
    ++n;
  }
  return n;
}

function clear() {
  for (const key in Object.keys(this.datastore)) {
    delete this.datastore[key];
  }
}

// Dictionary 클래스 정렬기능 추가 
function showAll() {
  for (const key in Object.keys(this.datastore).sort()) {
    print(`${key}: ${this.datastore[key]} `);
  }
}
