// 모든 소수의 합을 더하되 num보다는 작거나 같을때까지만 더해서 리턴.

const sumPrimes = (num)=>{
  let sum = 0;
  while(num > 1) {
    let n = Math.floor(Math.sqrt(num));
    let cnt = 0;
    while(n > 1) {
      if(num % n === 0) {
        cnt++;
        break;
      } else n--;
    }
    if(cnt===0) sum += num;
    num--;
  }
  return sum;
}

sumPrimes(10);

// ## 소수 판별을 위해 특정 수의 제곱근 이하의 수만 나눠보면 되는 이유
// 특정 수 : X
// X = M * N 
// M, N 중에서 M이 더 크다고 가정하면,
// M * M >= M * N
// M^2 >= X
// M >= Math.sqrt(X)
// 여기서 M은 N보다 크다고 했으므로 제곱근 이하의 숫자만 체크하면 소수인지 아닌지 알 수 있음.