function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for(let prop in beagle) {
  if(beagle.hasOwnProperty(prop)) { // Dog instance에 지정된 property만 true로 반환.
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);  // prototype에 지정한 property일 경우.
  }
}
console.log(ownProps);
console.log(prototypeProps);

// Only change code below this line