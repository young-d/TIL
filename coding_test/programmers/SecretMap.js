function solution(n, arr1, arr2) {
    let answer = [];

    //1. 이진수 구해서 string 배열 만들기 (10진수)
    // let binary1 = [];
    // let binary2 = [];
    // for(let i = 0; i < n; i++) {
    //     binary1[i] = getBinary(arr1[i], n);
    //     binary2[i] = getBinary(arr2[i], n);
    // }
		//2진수로 바꿔서 문자열 채우기
    // for(let i = 0; i < n; i++) {
    //     let s = '';
    //     for(let j = 0; j < n; j++) {
    //         if(binary1[i][j] === '#' || binary2[i][j] === '#') {
    //             s += '#';
    //         }else {
    //             s += ' ';
    //         }
    //     }
    //     answer[i] = s;
    // }

    //2. 비트연산으로 전체 지도 만들기 (10진수)
    let tmp = [];
    let s = '';
    for(let i = 0; i < n; i++) {
        tmp[i] = arr1[i] | arr2[i];
        //2진수로 바꿔서 문자열 채우기
        answer[i] = getBinary(tmp[i], n);
    }


    return answer;
}

function getBinary(number, n) {
    let s = '';
    let square = 1;

    for(let index = 1; index < n; index++) {
        square *= 2;
    }

    for(let i = 0; i < n; i++) {
        if(number / square >= 1) {
            s += '#';
            number -= square;
        }else {
            s += ' ';
        }
        square /= 2;
    }

    return s;
}


console.log(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]));
//[ '#####', '# # #', '### #', '#  ##', '#####' ]