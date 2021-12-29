// 두번째 argument는 object의 property.
// 첫번쨰 argument로 들어오는 객체 배열 중 pre와 같은 property의 value값이 하나라도 false 면 false, 모두 true면 true 리턴.
// false => NaN, '', 0, null, undefined ...

const truthCheck = (collection, pre) => {
  let ans = false;
  for(let i = 0; i < collection.length; i++) {
    if(!collection[i][pre]) {
      ans = false;
      break;
    } else {
      ans = true;
    }
  }
  return ans;
}

truthCheck(
  [{"user": "Tinky-Winky",
    "sex": "male"},
   {"user": "Dipsy", 
    "sex": "male"}, 
   {"user": "Laa-Laa", 
    "sex": "female"}, 
   {"user": "Po", 
    "sex": "female"}],
  "sex");