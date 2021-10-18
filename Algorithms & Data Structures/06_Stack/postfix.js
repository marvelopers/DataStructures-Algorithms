let str = '352+*9-';

const postfix = (str) => {
  let answer = 0;
  let stack = [];

    for(let x of str){
      if(!isNaN(x)){
        stack.push(Number(x));
      }else{
        let rt = stack.pop();
        let lt = stack.pop();

        if(x === '+') stack.push(lt+rt);
        else if(x === '-')stack.push(lt-rt);
        else if(x === '*')stack.push(lt*rt);
        else if(x === '/')stack.push(lt/rt);
      }
    }
    answer = stack[0];

  return answer;
}