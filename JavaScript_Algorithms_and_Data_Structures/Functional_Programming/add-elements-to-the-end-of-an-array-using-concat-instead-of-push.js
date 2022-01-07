// 1) concat()의 경우 push()와 다르게 원본 배열을 변경하지 않고 새 배열을 리턴한다.
// 2) concat() : argument로 들어오는 배열의 원소를 원본 배열에 합친다.
//      push() : 배열 자체로 원본 배열에 추가하게 된다. 
//               ex) let arr = [1];
//                   arr.push([2,3]); ==> [1,[2,3]]    


function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);