const arr1 = [1,5,5,10];
const arr2 = [3,4,5,5,10];
const arr3 = [5,5,10,20];

const commonElements = (array) => {
  let hashmap = {};
  let last = []; 
  let answer = [];
  
  for(const i = 0; i< array.length ; i++ ){
    const currentArray = array[i];
    last = null;

    for(const j = 0; j< currentArray.length ; j++ ){
      const currentElement = currentArray[j];
      if(last !== currentElement) {
        if(!hashmap[currentElement]){
          hashmap[currentElement] = 1;
        } else {
          hashmap[currentElement]++;
        }
      }
      last = currentElement;
    }
  }

  for(const prop in hashmap){
    if(hashmap[prop] === array.length){
      answer.push(parseInt(prop))
    }
  }
  return answer
}

commonElements([...arr1, ...arr2, ...arr3]);