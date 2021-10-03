const numbers= [23,32,55,33,54,370,100];

const isPrime=(num)=>{
  if(num===1)return false;
  for(let i=2; i<=num/2; i++){

  }
}

const reversedDecimalCheck =(arr)=>{
  const answer;

  for(let x of arr){
    let res = 0;
    while(x){
      let t = x%10;
      res = res*10+t;
      x=parseInt(x/10);
    }
    if(isPrime(res))answer.push(res);
  }
  return answer;
}