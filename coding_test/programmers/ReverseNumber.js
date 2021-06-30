function solution(n) {
    let answer = [];
    for(let i = n.toString().length - 1; i >= 0; i--) {
        answer.push(Number(n.toString().split('')[i]));
    }
    return answer;
}