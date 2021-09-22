// 회문 문자열 : 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열 (이효리 거꾸로해도 이효리)
let str="goooG";

function solution(str) {
  let answer = 'YES';
  str = str.toLowerCase(); 
  let len = str.length;

  for(let i=0; i<Math.floor(len/2); i++){
    if(str[i]!==str[len-i-1]) return 'NO'
  }

  return answer
}

function solution2(str) {
  let answer = 'YES';
  str = str.toLowerCase();
  let reverseStr = str.split('').reverse().join('');

  if(str!== reverseStr) return 'NO'


  return answer
}