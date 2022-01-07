// concat() : 두 배열을 붙여 하나로 만드는 함수 
// 리턴값    : 새로 생생된 배열 

// 기존 배열에 합칠 배열은 argument로 계속 추가해서 사용할 수 있음. concat(arg1, arg2, ...argN);
// argument로 배열이 아닌 숫자, 문자열 등의 타입을 넣어도 동일하게 하나의 배열로 반환.
// ex) ["a"].concat(1, [{}])  반환값 :  ["a", 1, {}]


function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return original.concat(attach);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);