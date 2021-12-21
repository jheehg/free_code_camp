// &, <, >, ", ' 를 HTML entity로 변환해서 리턴.

const convertHTML = (str)=>{
  const obj = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&apos;'
  };
  
  let idx = 0;
  for(let ch in obj) {
    idx = str.indexOf(ch);
    if(idx > -1) str = str.replaceAll(ch, obj[ch]);
  }

  return str;
}

convertHTML("Dolce & Gabbana");