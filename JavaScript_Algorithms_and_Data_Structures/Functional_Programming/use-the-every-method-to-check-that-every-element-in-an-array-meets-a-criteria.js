// 배열의 모든 요소가 양의 정수면 true 아니면 false 리턴. (every())

function checkPositive(arr) {
  // Only change code below this line
  return arr.every(num => num > 0);

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);