// 두 배열을 비교해서 서로 중복되지 않은 element로만 구성된 배열 리턴하기.

const diffArray = (arr1, arr2)=>{
  const newArr = [];
  arr1.forEach(ele => {
    if(arr2.indexOf(ele) < 0) {
      // arr1에 있는게 arr2에 없으면 넣기
      newArr.push(ele); 
    } else {
      // 둘이 중복되는 건 arr2에서 삭제
      arr2.splice(arr2.indexOf(ele), 1); 
    }
  });
  // 중복되고 남은 element를 마지막에 넣기
  // push()는 새로 추가된 배열의 길이를 리턴함.
  newArr.push(...arr2);  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]