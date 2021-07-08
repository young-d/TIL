function solution(s) {
    let answer = '';
    let words = s.toLowerCase().split(' ');

    for(let w of words) {
        answer += w.slice(0, 1).toUpperCase() + w.slice(1, ) + ' ';
    }

    return answer.slice(0, answer.length - 1);
}