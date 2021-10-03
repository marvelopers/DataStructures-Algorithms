const arr=[13,15,34,23,45,65,33,11,26,42];

const solution=(total, nth, card)=>{
  let answer;
  let temp=new Set();

  for(let i=0; i<total; i++){
    for(let j=i+1; j<total; j++){
      for(let k=i+1; k<total; k++){
        temp.add(card[i]+card[j]+card[k]);
      }
    }
  }
  let a=Array.from(temp).sort((a,b)=> b-a);
  answer=a[k-1];
  return answer;
}