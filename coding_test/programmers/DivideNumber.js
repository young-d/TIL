function solution(arr, divisor) {
    let answer = [];

    for(let number of arr) {
        if(number % divisor === 0) answer.push(number);
    }

    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}