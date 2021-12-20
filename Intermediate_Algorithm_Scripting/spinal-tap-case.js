// 문자열을 spinal case로 변환해서 리턴하기.
// spnial case => all-lowercase-words-joined-by-dashes.

const spinalCase = (str)=>{
  const arr = [];
  let idx = 0;
  let chk = null; // 알파벳이 아님 : '', 소문자: 'l', 대문자: 'u'
  for(let i = 0; i<str.length; i++) {
    // 1) 알파벳이 아닌 문자일 경우
    if(str[i] < 'A' || ('Z' < str[i] && str[i] < 'a') || 'z' < str[i]) {
      arr.push(str.slice(idx, i).replaceAll(' ', ''));
      idx = i + 1;
      chk = '';
    // 2) 알파벳인 경우
    } else {
      // 2-1) 대문자인 경우
      if('A' <= str[i] && str[i] <= 'Z' && i > 0 && chk === 'l') { 
        arr.push(str.slice(idx, i).replaceAll(' ', ''));
        idx = i;
        chk = 'u';
    // 2-1) 소문자인 경우
      } else {  
        chk = 'l';
      }
    }
  }
  if(idx !== str.length-1) arr.push(str.slice(idx).replaceAll(' ', ''));
  
  return arr.join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');