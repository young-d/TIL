function solution(arr) {
    let answer = 0;
    let multiple = arr[0];

    while(answer === 0) {
        for(let i = 0; i < arr.length; i++) {
            if(multiple % arr[i] > 0) break;
            if(i === arr.length - 1) answer = multiple;
        }
        multiple++;
    }

    return answer;
}