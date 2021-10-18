let need="CBA";
let plan="CBDAGE";

const checkLogic = (need, plan) => {
  let answer = 'YES';
  let queue = need.split(''); // 문자 배열 생성

  for(let x of plan){
    if(queue.includes(x)){
      if(x!==queue.shift()){
        return 'NO';
      }
    }
  }
  if(queue.length>0) return 'NO';

  return answer;
}