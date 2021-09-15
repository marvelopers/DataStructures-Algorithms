const arr = [11,12,13,14,15,16,17]

function solution (day, arr) {
  let answer=0;

  for(let x of arr){
    if(x%10===day) answer++;
  }

  return answer;
}