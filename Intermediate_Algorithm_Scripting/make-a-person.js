// 1) 아래 6가지 함수 모두 사용.
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// 2) Object.keys(bob).length 이 6 이여야 함.
// 3) bob.firstName, bob.lastName은 undefined 여야 함.


const Person = function(firstAndLast) {
  let fullName = firstAndLast;
  this.getFullName = () => fullName;
  this.getFirstName = () => {
    let name = fullName.split(' ');
    return name[0];
  }
  this.getLastName = () => {
    let name = fullName.split(' ');
    return name[1];
  }
  this.setFullName = (firstAndLast) => {
    fullName = firstAndLast;
  }
  this.setFirstName = (first) =>{
    let name = fullName.split(' ');
    name[0] = first;
    fullName = name.join(' ');
  }
  this.setLastName = (last) => {
    let name = fullName.split(' ');
    name[1] = last;
    fullName = name.join(' ');
  }
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();