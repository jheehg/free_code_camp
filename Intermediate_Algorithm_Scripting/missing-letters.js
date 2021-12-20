// 알파벳 순으로 쭉 이어지는 문자열 str 내에 missing letter 찾아 리턴.
// ex) "abce" -> "d"

const fearNotLetter = (str)=>{
  let letter;
  for(let i = 1; i<str.length; i++){
    let first = str[i].charCodeAt(0);
    let scnd = str[i-1].charCodeAt(0);
    if(first - scnd !== 1) {
      letter = String.fromCharCode(first-1);
    }
  }
  return letter;
}

fearNotLetter("abce");