function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");  // new instance for Bird
let ownProps = [];                         // array which will be filled with property.
for(let prop in canary) {                
  if(canary.hasOwnProperty(prop)) { 
    ownProps.push(prop);
  }
}
console.log(ownProps);

// for ... in 
// 열거 가능한 속성들을 포함해 객체에서 문자열로 키가 지정된 열거 가능한 속성에 대해 반복함.
// 임의의 순서로 반복하므로 인덱스가 중요한 배열에서는 사용을 추천하지 않음.


