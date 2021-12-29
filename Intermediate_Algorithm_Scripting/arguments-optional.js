// argument로 두 개의 정수가 들어오면 두 argument 합을 리턴.
// 만약 하나라도 nubmer 타입이 아니면 undefned 리턴.
// argument가 하나의 정수만 들어올 경우, 이 argument와의 합을 리턴하는 함수를 만들어 리턴.
// argument가 하나인데 number 타입이 아니면 undefined 리턴.

const addTogether = (...args) => {
  let func;
  const isNumber = (ele) => { if(typeof ele === 'number') return true; }

  // forEach 내에서 return, break, continue 사용 불가.
  //args.forEach(arg => { if(isNumber(arg)) cnt++;} );
  for(let i = 0; i < args.length; i++) {
     if(!isNumber(args[i])) return undefined; 
  }
  // number만 있을 경우
  if(args.length === 2) return args[0] + args[1];
  else {
    func = (n) => {
      if(isNumber(n)) return args[0] + n;
      else return undefined;
    } 
  }
  return func;
}

addTogether(2,3);