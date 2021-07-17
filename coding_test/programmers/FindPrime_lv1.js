function solution(n) {
    let answer = 0;
    let numbers = [];
    for(let i = 0; i <= n; i++) {
        if(i % 2 === 0) numbers.push(0);
        else numbers.push(i);
    }
    
    for(let i = 3; i <= n; i+=2) {
        if (numbers[i] !== 0) answer++;
        for(let j = i; j <= n; j+=i) {
            numbers[j] = 0;
        }
    }
    
    // for(let i = 3; i <= n; i+=2) {
    //     if(Math.sqrt(i) % 1 === 0) continue;
    //     let divisor = 3;
    //     while(divisor <= i) {
    //         if(i % divisor === 0) break;
    //         divisor += 2;
    //     }
    //     if(divisor === i) answer++;
    // }
    
    return answer + 1;
}