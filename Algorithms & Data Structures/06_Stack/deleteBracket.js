
const str='(AB(C))DEF(G)H';

const deleteBracket=(str)=>{
  let answer;

  stack=[];
  for(let x of str){
    if(x===')') {
      while(stack.pop()!=='(');
    }
    else stack.push(x);
  }

  answer=stack.join('');

  return answer;
}

deleteBracket(str);