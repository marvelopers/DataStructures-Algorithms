
let arr = [13,5,11,7,23,15]
const selection = (arr) => { 
  let answer = arr; //얕은 복사

  for(let i=0; i< arr.length; i++){
    let idx = i;
    for(let j=i; j< arr.length; j++){
      if(arr[j]<arr[idx]) idx = j;
    }
    [arr[i],arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}