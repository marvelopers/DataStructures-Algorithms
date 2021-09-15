const arr = [1,2,3,4,5,6,7]

function solution (arr) {
  let answer=[];
  let sum=0, min=Number.MAX_SAFE_INTEGER;

  for(let x of arr){
    if(x%2===1){
      sum+=x;
      if(x<min) min=x;
    }
  }

  for(let i=0; i<arr.length; i++){
    if(arr[i]<min) min=arr[i];
  }

  answer.push(sum);
  answer.push(min);

  return answer;
}

