// 첫번쨰가 자음으로 시작하는 단어일 경우, 모음이 나오기 전까지의 알파벳들을 뒤로 붙이고 + ay를 추가. (모두 자음이면 ay만 추가)
// 첫번쨰가 모음일 경우 뒤에 way만 추가.
// ex1) california -> aliforniacay
// ex2) algorithm  -> algorithmway

const translatePigLatin = (str)=>{
  let word = '';
  const vowel = ['a','e','i','o','u'];
  let i;
  l1:
  for(i=0; i<str.length; i++) {
    l2:
    for(let j=0; j<vowel.length; j++) {
      if(str[i].indexOf(vowel[j]) > -1) {
        break l1;
      } else {
        if(j === vowel.length-1) word += str[i]; // 자음인 경우 word에 append
      }
    }
  }
  // 중간에 모음이 있는 경우 필요없는 부분 slice
  if(word.length < str.length) {
    if(word.length > 0) { str = str.slice(i) + word + 'ay'; }
    else { str += 'way'; }
  } else {
    str += 'ay';
  }
  return str;
}

translatePigLatin("consonant");