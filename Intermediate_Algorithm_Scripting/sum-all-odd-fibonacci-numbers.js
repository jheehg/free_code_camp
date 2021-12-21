// 피보나치 수열 중 홀수의 모든 합을 구해서 리턴. 
// (주어진 num(positive integer)보다 같거나 작은 피보나치 수까지의 합)

const sumFibs = (num)=>{
  // 피보나치 수 구하는 함수
  // fib(0) = 1
  // fib(1) = 1
  // fib(2) = 2
  // fib(3) = 3
  // fib(4) = 5
  const fib = (val)=> {
    if(val <= 1) return 1;
    else return fib(val - 1) + fib(val - 2);
  }
  let sum = 0;
  let initVal = 0;
  let val = 0;
  // num보다 작거나 같을 떄까지 반복
  while(fib(initVal) <= num) {
    val = fib(initVal);
    sum = (val % 2 === 1)? sum + val : sum; // 홀수일 경우만 합에 더함
    initVal++;
  }
  return sum;
}

sumFibs(4);