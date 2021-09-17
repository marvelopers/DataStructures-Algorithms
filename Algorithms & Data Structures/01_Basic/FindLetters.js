const str = 'COMPUTERPROGRAMMING';
function solution(str, text){
  let answer=0;

  // for(let x of str){
  //   if(x===text) answer++;
  // }

  strArr= str.split(text);
  answer2 = strArr.length-1;

  return answer;
}