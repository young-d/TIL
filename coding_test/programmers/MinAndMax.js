function solution(s) {
    let answer = '';
    let numbers = [];

    for(let i = 0; i < s.split(' ').length; i++) {
        numbers.push(Number(s.split(' ')[i]));
    }

    let min = numbers[0];
    let max = numbers[0];
    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] < min) min = numbers[i];
        if(numbers[i] > max) max = numbers[i];
    }

    answer = min.toString() + ' ' + max.toString();

    return answer;
}
