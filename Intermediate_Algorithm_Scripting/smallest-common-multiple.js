// 최소값 ~ 최대값을 의미하는 두 element를 담은 배열이 들어옴. ex) [1,5] => 1,2,3,4,5
// 최소값 ~ 최대값은 연속적으로 증가 또는 감소하는 정수임.
// 이 범위 내에 속하는 모든 정수의 최소공배수를 구해서 리턴하기.

const smallestCommons = (arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // 예외 처리
  if(max < 0) throw new Error('each element should be over -1');
  if(min === 0 || (max >= 0 && min < 0)) return 0;

  if(min === 1) min++;
  let len = max - min + 1;

  let newArr = [];
  for(let i = 0; i < len; i++) {
    newArr.push(min++);
  }

  // 최소공배수 = 두 수의 곱 / 두 수의 최대공약수
  const gcd = (a, b) => {
    if(a % b === 0) return b;
    return gcd(b, a % b);
  }

  // 작은 수부터 근접한 수와의 최소공배수를 구하고 배열의 마지막 인덱스까지 반복.
  let i = 0;
  while(i < newArr.length-1) {
    let maxVal = Math.max(newArr[i], newArr[i+1]);
    let minVal = Math.min(newArr[i], newArr[i+1]);
    let n = gcd(maxVal, minVal);
    newArr[i+1] = (maxVal * minVal) / n;
    i++;
  }

  return newArr[newArr.length-1];
}

smallestCommons([1,5]);