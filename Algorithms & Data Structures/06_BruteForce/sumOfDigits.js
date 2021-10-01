const numbers = [128, 460, 470, 40, 512, 137, 88];

const sumOfDigits = (num, arr) => {
  let answer, max = Number.MIN_SAFE_INTEGER;

  for(let x of arr){
    let sum = x.toString().split('').reduce((a,b)=>a+Number(b),0);

    if(sum>max){
      max = sum;
      if(x>answer) answer=x;
    }
  }

  return answer;
}