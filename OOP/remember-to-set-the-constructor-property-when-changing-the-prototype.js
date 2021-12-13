function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// 위와 같은 방식으로 prototype을 수동으로 지정해줄 떄
// 아래와 같은 side effect가 발생한다.
// let pepper = new Dog();
// pepper.constructor === Dog;  // false
// pepper.constructor === Object;  // true
// pepper instanceof Dog; // true
 // 그러므로 prototype을 지정해줄때 그 constructor까지 같이 지정해준다.