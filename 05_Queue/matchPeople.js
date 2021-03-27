// 댄스 파트너 정하기 
function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(males, females) {
  const names = read('dancerList.txt').split('\n');
  for (const i = 0; i < names.length; ++i) {
    names[i] = names[i].trim();
  }
  for (const i = 0; i < names.length; ++i) {
    const dancer = names[i].split('');
    const sex = dancer[0];
    const name = dancer[1];
    if (sex === 'F') {
      females.enqueue(new Dancer(name, sex));
    } else {
      males.enqueue(new Dancer(name, sex));
    }
  }
}

function dance(males, females) {
  while (!femals.empty() && !males.empty()) {
    person = females.dequeue();
    person = males.dequeue();
  }
}

// TEST
const maleQueue = new Queue();
const femaleQueue = new Queue();
getDancers(maleQueue, femaleQueue);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
  console.log(femaleDancers.front().name + 'is waiting to dance');
}
if (!maleDancers.empty()) {
  console.log(maleDancers.front().name + 'is waiting to dance');
}