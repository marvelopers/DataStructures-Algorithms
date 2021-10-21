let arr = [120,125,152,130,135,143,127,160];

const findUnsorted = (arr) => {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a,b)=> a-b); 

  for(let i=0; i<arr.length; i++){
    if(arr[i]!==sortArr[i]) answer.push(i+1);
  }

  return answer;
}