function solution (a, b, c) {
  let answer='Yes', max;
  let sum=a+b+c;

  // Max
  if(a>b) max=a;
  else max=b;
  if(c>max) max=c;

  if((sum-max)<=max) answer='No';

  return answer;
}