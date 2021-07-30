function solution(number, k) {
    let answer = '';
    let cnt = 0;
    number.split('').map(Number);
    console.log(number);
    for(let i = 0; i < number.length; i++) {
        console.log(number[i], cnt, answer);
        if(cnt < k && (i === 0 || number[i] < number[i + 1])) {
            cnt++;
            continue;
        }
        answer += number[i];
    }
    
    return answer;
}

console.log(solution("1231234", 3));