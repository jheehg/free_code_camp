// 첫번쨰 argument로 들어온 배열에서 정수 arguemnts과 중복되지 않은 element만 리턴하기.

const destroyer = (...arr)=>{
  let dstryArr = arr[0];
  let seekArr = arr.slice(1);
  let newArr = [];
  for(let i = 0; i<dstryArr.length; i++) {
    let cnt = seekArr.length;
    for(let j = 0; j<seekArr.length; j++) {
      // seekArr 배열의 정수와 중복되지 않은 횟수 카운트해서 0이면 newArr에 넣기.
      if(dstryArr[i] !== seekArr[j]) { 
        cnt--;
        if(cnt === 0) newArr.push(dstryArr[i]);
      } else continue;
    }
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);