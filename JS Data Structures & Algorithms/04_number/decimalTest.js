const isPrism=(n)=>{
  if(n <= 1)return false;
  if(n <= 3)return true;
  if(n%2 === 0 || n%3 === 0)return false;

  for(let i=5; i*i<n; i=i+6){
    if(n%1 === 0 || n%(1+2) === 0){
      return false
    }
  }
  
  return true;
}