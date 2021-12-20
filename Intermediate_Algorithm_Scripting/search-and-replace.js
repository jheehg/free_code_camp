// 문자열 str내에 before로 들어온 단어를 after로 바꾸어 리턴.
// 주의할 점) before의 첫번째단어가 대문자일경우 after도 동일한 타입으로 변환해줘야 함. (소문자일 경우도 동일하게 소문자로)

const myReplace = (str, before, after)=>{
  let words = [];
  if(str.indexOf(before) > -1) words = str.split(before);
  // 1) before단어가 처음 또는 마지막에 있는 경우 : ['', ' 문장'] 또는 ['문장 ', '']
  // 2) before단어가 중간에 있는 경우 : ['문장 ', ' 문장'] 

  // before문자 형태로 맞춰주기
  if(before.charAt(0) < 'a') { // 첫문자 대문자일 경우
    let fst = after.charAt(0).toUpperCase();
    after = fst + after.slice(1);
  } else {                     // 모두 소문자일 경우
    after = after.toLowerCase();
  }

  let chk = false;
  for(let i = 0; i <words.length; i++) {
    if(words[i].length === 0) { // 1번 CASE
      words[i] = after;
      chk = true;
    } 
  }
// 2번 CASE
  if(!chk) words[0] += after;
  
  return words.join('');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");