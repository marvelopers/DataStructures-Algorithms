
const str = 'KoreaTimeGood';
function solution(str){
  let answer=0;
  for(let x of str){
    if(x===x.toUpperCase()){
      answer++;
    }

    // let num = x.charCodeAt();
    // // 대문자: 65~90 소문자: 97~122

    // if(num>=65&& num<=90)answer++;
  }

  return answer;
}