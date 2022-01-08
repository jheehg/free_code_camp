// 전역변수인 globalArray를 변경하지 않고 ascending 으로 정렬한 배열 리턴하기.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = [];
  newArr.push(...arr);
  return newArr.sort((a, b) => a - b);

  // Only change code above this line
}

nonMutatingSort(globalArray);