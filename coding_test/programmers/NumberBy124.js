function solution(n) {
    let answer = '';
    let tmp = [];

    while(n > 0) {
        if(n % 3 === 0) {
            tmp.push(4);
            n  = Math.floor(n / 3) - 1;
        }else {
            tmp.push(n % 3);
            n = Math.floor(n / 3);
        }
    }

    answer = tmp.reverse().join('');

    return answer;
}

console.log(solution(19));