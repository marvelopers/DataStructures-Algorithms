const arr=[1,0,1,1,1,0,1,1,0];

function solution(arr){
  let answer 
  let cnt = 0;

  for(i=0;i<arr.length;i++){
    for(let x of arr){
      if(x===1){
        cnt++;
        answer+=cnt;  
      }
      else cnt=0;
    }
  }

  return answer
}