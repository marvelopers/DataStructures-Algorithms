// 소인수분해
const primsFactor = (n) => {
  while(n%2===0){
    n = n/2;
  }
  for(let i = 3; i*i <= n; i= i+2){
    while(n%i ===0){
      n = n/i;
    }
  }

  if(n>2){
    console.log(n);
  }
}