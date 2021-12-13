function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = () => {
  console.log('Woof!');
}

// Only change code above this line

let beagle = new Dog();
let animal = new Animal();
beagle.eat();
beagle.bark();
animal.eat();
//animal.bark(); // TypeError: animal.bark is not a function. (In 'animal.bark()', 'animal.bark' is undefined)
