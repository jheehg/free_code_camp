// 단어로 split해서 새 배열 리턴.
// 알파벳이 아닌 특수문자, 공백 기준으로 split : /\W/

function splitify(str) {
  // Only change code below this line
  let newArr = str.split(/\W/g);
  return newArr;
  // Only change code above this line
}

splitify("Hello World,I-am code");