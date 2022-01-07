// bookList 원본을 변경하지 않고 add, remove 함수 실행해서 맞는 결과 리턴하기.

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookLists, bookName) {
  let bookArr = [];
  bookArr.push(...bookLists);
  bookArr.push(bookName);
  return bookArr;
  
  // Change code above this line
}

// Change code below this line
function remove (bookLists, bookName) {
  const book_index = bookLists.indexOf(bookName);
  if (book_index >= 0) {
    let bookArr = [];
    bookArr.push(...bookLists);
    bookArr.splice(book_index, 1);
    return bookArr;

    // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newBookList);