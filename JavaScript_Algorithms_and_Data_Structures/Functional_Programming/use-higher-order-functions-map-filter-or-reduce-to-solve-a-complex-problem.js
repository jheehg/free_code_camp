// map(), filter(), reduce() 사용해서 양의 정수의 sequare 를 리턴하기.

const squareList = arr => {
  let newArr = [];
  newArr = arr.filter(num => num > 0 && num - Math.floor(num) === 0);

  // 1) map()  
  //newArr = newArr.map(num => num * num);

  // 2) reduce()
  // ### reduce 호출은 accumulator가 마지막인덱스 - 1 일 때까지만 실행된다.
  newArr = newArr.reduce((acc, curr) => {
    return acc.concat(curr * curr); 
  }, []);

  return newArr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);