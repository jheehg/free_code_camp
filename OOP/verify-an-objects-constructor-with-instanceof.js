function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// check if it is an instance of House.
let myHouse = new House(4);
myHouse instanceof House;
// Only change code below this line