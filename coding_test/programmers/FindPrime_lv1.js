function solution(n) {
    let answer = 0;
    
    //짝수인덱스에는 0, 홀수인덱스에는 해당숫자를 담은 배열 만들기
    let numbers = [];
    for(let i = 0; i <= n; i++) {
        if(i % 2 === 0) numbers.push(0);
        else numbers.push(i);
    }
    
    //홀수 중에서 소수찾기
    for(let i = 3; i <= n; i+=2) {
        if (numbers[i] !== 0) answer++;
        for(let j = i; j <= n; j+=i) {
            numbers[j] = 0;
        }
    }

    //짝수 중에서 소수찾기 -> 2
    answer += 1; 
    

    //(time out...)
    // for(let i = 3; i <= n; i+=2) {
    //     if(Math.sqrt(i) % 1 === 0) continue;
    //     let divisor = 3;
    //     while(divisor <= i) {
    //         if(i % divisor === 0) break;
    //         divisor += 2;
    //     }
    //     if(divisor === i) answer++;
    // }
    
    return answer;
}