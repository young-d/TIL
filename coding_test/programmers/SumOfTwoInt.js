function solution(a, b) {
    let answer = 0;
    let cnt = a < b ? b - a + 1 : a - b + 1;

    if(a === b) return a;
    else {
        if(cnt % 2 === 0) answer = (a + b) * (cnt / 2);
        else answer = (a + b) * (Math.floor(cnt / 2)) + ((a + b) / 2);
    }
    return answer;
}