// argument로 들어온 배열 내 두 정수 사이에 있는 모든 숫자들을 더하기.

const sumAll = (arr)=>{
  let sum = 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  for(; max >= min; max--) sum+= max;
  return sum;
}

console.log(sumAll([1, 4]));  // 10