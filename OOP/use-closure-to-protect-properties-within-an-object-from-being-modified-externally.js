function Bird() {
  let weight = 15;
  this.getWeight = () =>  weight;
}

let penguin = new Bird();
console.log(penguin.getWeight());