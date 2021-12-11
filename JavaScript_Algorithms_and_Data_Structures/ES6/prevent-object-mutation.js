function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/*
Object.freeze(obj)
반환값 : 함수로 전달된 객체

객체를 동결해 속성을 추가하거나 기존 속성을 제거하는 것을 막음.
프로토타입이 변경되는 것도 방지.
객체를 변경하려는 시도를 할 때 무시하거나 TypeError 발생.
*/