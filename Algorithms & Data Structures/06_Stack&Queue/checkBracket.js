
const str='(())()()()))))';

const checkBrackets=(str)=>{
  let answer='YES';
  stack=[];

  for(let x of str){
    if(x==='(') stack.push(x);
    else{
      if(stack.length===0) return 'NO';
      stack.pop();
    }
  }
  if(stack.length>0)return 'NO';
  return answer;
}

checkBrackets(str);