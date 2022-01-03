// argument로 들어온 arr이 배열일 경우 flat 해서 모든 배열의 요소들이 배열이 아닌 상태로 리턴하기.

const steamrollArray = (arr) => {
    // 배열인 요소의 인덱스 찾기
    const findArrIdx = (cArr) => {
        for(let i = 0; i < cArr.length; i++) {
            if(cArr[i] instanceof Array) {
                return i;
            }
        } 
    }

    let aIdx;
    // 모든 요소에 배열이 발견되지 않을떄까지 탐색.
    while((aIdx = findArrIdx(arr)) > -1) {
        let isArray = [];
        isArray.push(...arr[aIdx]);     // spread
        arr.splice(aIdx, 1);            // 기존 요소 삭제
        isArray.forEach((item, i) => {  // 삭제된 인덱스에 spread한 요소들 끼워넣기
            arr.splice(aIdx + i, 0, item);
        });
    }

    return arr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);