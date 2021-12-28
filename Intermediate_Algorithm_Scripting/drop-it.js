// 들어온 배열의 요소 중 func에서 정의한 조건에 성립할 경우,
// 성립하는 요소의 인덱스부터 마지막 인덱스까지 담은 새로운 배열 리턴. 하나도 성립하지 않으면 빈 배열 리턴.

const dropElements = (arr, func) => {
  let idx = arr.findIndex(func);
  return (idx > -1)? arr.slice(idx) : [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });