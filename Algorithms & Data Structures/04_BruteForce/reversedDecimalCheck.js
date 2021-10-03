const numbers= [23,32,55,33,54,370,100];

const isPrime=(num)=>{
  if(num===1)return false;
  for(let i=2; i<=perseInt(Math.sqrt(num/2)); i++){
    if(num%1===0)return false;
  }
  return true;
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


const reversedDecimalCheck_ =(arr)=>{
  const answer;

  for(let x of arr){
    let res = Number(x.toString().split('').reverse().join(''));
    if(isPrime(res))answer.push(res);
  }
  
  return answer;
}