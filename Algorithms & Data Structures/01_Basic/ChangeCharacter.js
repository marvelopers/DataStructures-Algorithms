const str = 'BANANA';
function solution(str){
  let answer='';

  for(let x of str){
    if(x==='A') answer+='#';
    else answer+='x';
  }

  let answer2=str;

  answer2 = str.replace(/A/g,'#');

  return answer;
}