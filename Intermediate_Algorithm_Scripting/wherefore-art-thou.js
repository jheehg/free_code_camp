// first argument로 들어오는 object array를 second argument로 들어오는 object와 비교한 후,
// second argument의 object의 (name, value)와 매칭이 되는 객체를 리턴하기.

const whatIsInAName = (collection, source)=>{
  const arr = [];
  const propArr = [];

  // 1) 비교해야할 second object의 property를 배열에 담기.
  for(let prop in source) {
    propArr.push(prop);
  }

  // 2) 배열을 탐색하면서 1번에서 담은 property와 모두 매칭이 되는 object 찾기.
  collection.forEach(obj=>{
    let cnt = 0;
    propArr.forEach(prop=>{
      if(obj.hasOwnProperty(prop) && obj[prop] === source[prop]) cnt++;
    });
    if(cnt === propArr.length) arr.push(obj);
  });

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });