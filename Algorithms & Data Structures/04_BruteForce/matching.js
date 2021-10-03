let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];

const matching=(test)=>{
  let answer = 0;

  let testNum = test.length; // 테스트 횟수
  let memberNum = test[0].length; // 구성원 명수

  for(let i=0; i<=memberNum ;i++){
    for(let j=1; j<=memberNum; j++){
      let cnt = 0;

      for(let k=0; k<testNum; k++){
        let mi, mj  =0;

        for(let s=0; s<memberNum ; s++){
          if(test[k][s]===i) mi=s;
          if(test[k][s]===j) mj=s;
        }
        if(mi<mj) cnt++;
      }
      if(cnt===testNum) answer++;
    }   
  }
  return answer;
}