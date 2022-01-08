// currying 기법 사용해보기.

function add(x) {
  // Only change code below this line
  return y => z => x + y + z;

  // Only change code above this line
}

add(10)(20)(30);


// 커링은 인자를 여러개 받는 함수를 분리해 인자를 하나씩만 받는 함수의 체인으로 만드는 기법.