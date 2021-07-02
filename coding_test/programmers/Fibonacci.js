function solution(n) {
    let answer = 0;
    let numbers = [0];

    for(let i = 1; i <= n; i++) {
        if(i === 1 || i === 2) numbers.push(1);
        else numbers.push((numbers[i - 2] + numbers[i - 1]) % 1234567);
    }

    answer = numbers[n];
    
    return answer;
}