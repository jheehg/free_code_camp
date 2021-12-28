// str은 binary로 표현된 문자열. 
// 각 binary값을 char로 변환해서 하나의 문장으로 리턴하기. 하나의 char값은 공백으로 구분지음.

const binaryAgent = (str) => {
  let words = str.split(' ');

  const cnvInt = (bin) => {
    let n = bin.length-1;
    let num = 0;
    for(let i = 0; i < bin.length; i++) {
      if(bin.charAt(i) === '1') num += Math.pow(2, n);
      n--;
    }
    return String.fromCharCode(num);
  }

  words.forEach((word, i) => { words[i] = cnvInt(word); });
 
  return words.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");