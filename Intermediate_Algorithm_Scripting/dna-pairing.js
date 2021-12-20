// base pair : AT, CG
// 들어온 문자열에 대해 base pair을 체크한 후 pair에 맞는 나머지 문자를 매칭해서 2차원 배열로 리턴.
// ex) "GCG" => [["G","C"],["C","G"],["G","C"]]

const pairElement = (str)=>{
  const arr = [];
  const obj = {
    A:'T', T:'A', C:'G', G:'C'
  };
for(let i = 0; i<str.length; i++) {
  for(let prop in obj) {
    if(str[i] === prop) {
      arr.push([str[i], obj[prop]]);
    }
  }
}
  return arr;
}

pairElement("GCG");