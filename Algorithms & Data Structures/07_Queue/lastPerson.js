let n = 8; 
let k = 3;

const lastPerson = (n, k) => {
  let answer=0;
  let queue = Array.from({length:n}, (v, i)=> i+1);

  while(queue.length === 0) {
    for(let i=1; i<k; i++) queue.push(queue.shift());
    queue.shift();
    if(queue.length===1){
      answer = queue.shift();
    }
  }

  return answer;
}