// filter() 대신 forEach() 또는 for문을 대신 사용해서 filter() 구현하기.

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  // Only change code above this line
  s.forEach((num) => {
    if(callback(num)) newArray.push(num);
  });
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});