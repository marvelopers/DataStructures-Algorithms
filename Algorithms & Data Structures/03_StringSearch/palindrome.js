let str="found7, time: study; Yduts; emit, 7Dnuof";

function solution1(str) {
  let answer = 'YES';

  // 알파벳만 뽑기 
  str = str.toLowerCase().replace(/[^a-z]g/,''); 
  // 문자열 뒤집기
  let reverseStr = str.split('').reverse().join('');

  if(str!== reverseStr) return 'NO'


  return answer
}