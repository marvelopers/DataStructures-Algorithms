const str="ItisTimeToStudy";

function solution(str){
  let answer='';
  for(let x of str){
    if(x===x.toLowerCase()){
      answer+=x.toUpperCase();
    }
    else answer += x;
  }

}