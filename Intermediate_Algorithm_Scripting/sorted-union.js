// 주어진 2차원배열 arr을 탐색해 서로 중복되는 숫자만 포함한 새로운 배열 리턴.
// ex) [1, 3, 2], [5, 2, 1, 4], [2, 1] -> [1,3,2,5,4]

const uniteUnique = (...arr)=>{
  const newArr = [];
  for(let i=0; i<arr.length; i++) {
    // 길이가 0보다 크고 newArr에 아무것도 넣지 않았을 경우 넣어주기 (초기값 세팅)
    if(newArr.length === 0 && arr[i].length > 0) {
      newArr.push(...arr[i]);
      continue;
    }
    // 비교대상인 초기값이 들어간 이후에는 중복 체크해서 중복이 아닌 숫자만 넣기.
    if(newArr.length > 0) {
      let j = 0;
      while(j < arr[i].length) {
        if(newArr.indexOf(arr[i][j]) < 0) newArr.push(arr[i][j]);
        j++;
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);