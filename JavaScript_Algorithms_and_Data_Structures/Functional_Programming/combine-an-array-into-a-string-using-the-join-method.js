// replace() 사용하지 않고 공백을 기준으로 나눠진 새 문장 리턴하기.

function sentensify(str) {
  // Only change code below this line

  return str.split(/\W/g).join(' ');

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");