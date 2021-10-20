let arr = [];

// bubble sort: 이웃한 두 수끼리 비교해서 변경하는 것.

const bubble = (arr) => {
  let answer = arr;

  for(let i=0; i< arr.length; i++){
    for(let j=0; j < arr.length-i-1; j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }

  return answer;
}