function solution(numbers) {
    let answer = '';
    let tmp = [];

    //문자열로 변환
    for (let i = 0; i< numbers.length; i++){
        tmp.push(String(numbers[i]));
    }

    //sort 함수 사용...
    tmp.sort((a,b) => (b+a) - (a+b));
    
    //최대값이 0일 경우 리턴값을 '0'으로 출력
    if (tmp[0] == '0'){
        return '0';
    }

    for (let a of tmp){
        answer+=a;
    }
    

    //try1. 선택정렬 -> timeout
    // for(let i = 0; i < numbers.length - 1; i++) {
    //     let max = numbers[i];
    //     for(let j = i + 1; j < numbers.length; j++) {
    //         //최댓값 찾기
    //         if(max + "" + numbers[j] + "" < numbers[j] + "" + max + "") {
    //             max = numbers[j];
    //             numbers[j] = numbers[i];
    //             numbers[i] = max;
    //         }
    //     }
    //     answer += numbers[i];
    // }

    //try2. 퀵정렬 -> timeout
    // if(left >= right) return;
    
    // let mid = Math.floor((right - left) / 2);
    // let pivot = numbers[mid];
    // let partition = _divide(numbers, left, right, pivot);
    
    // solution(numbers, left, partition - 1);
    // solution(numbers, partition, right);

    // function _divide(numbers, left, right, pivot) {
    //     while(left <= right) {
    //         while(numbers[left] + "" + pivot + "" > pivot + "" + numbers[left] + "") {
    //             left++;
    //         }

    //         while(numbers[right] + "" + pivot + "" < pivot + "" + numbers[right] + "") {
    //             right--;
    //         }

    //         while(left <= right) {
    //             let temp = numbers[left];
    //             numbers[left] = numbers[right];
    //             numbers[left] = temp;
    //             left++;
    //             right--; 
    //         }
    //     }
    //     return left;

    // }
    // for(let a of numbers) {
    //     answer += a;
    // }

    return answer;
}

console.log(solution([3, 30, 34, 5, 9]));