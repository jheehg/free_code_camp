// sort() 사용해서 알파벳 순서대로 배열 리턴.

function alphabeticalOrder(arr) {
  // Only change code below this line
    return arr.sort((a, b) => a > b);
  // Only change code above this line
}

 alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

 // 문자열을 비교할 때 a - b 사용 못함.
 // 'a' - 'b' ==> NaN
 // 'a' > 'b' ==> false