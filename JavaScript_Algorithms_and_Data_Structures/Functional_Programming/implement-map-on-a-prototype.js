// map() 대신 forEach() 또는 for문을 대신 사용해서 map() 구현하기.

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];

  // Only change code below this line
  s.forEach((num) => newArray.push(callback(num)));
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});