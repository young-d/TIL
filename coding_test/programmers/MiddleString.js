function solution(s) {
    let answer = '';
    mid = 0;

    if(s.length % 2 === 1) {
        mid = Math.floor(s.length / 2);
        answer = s[mid];
    }else {
        mid = s.length / 2 - 1;
        answer = s[mid++] + s[mid];
    }

    return answer;
}

console.log(solution('123456789')); //5
console.log(solution('1234567890'));  //56