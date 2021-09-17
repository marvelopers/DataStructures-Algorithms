const str=["good", "time", "good", "time", "student"];

function solution(str){  
  let answer;

  answer=str.filter((value, index)=> str.indexOf(value)===index && value);
  
  return answer;
}