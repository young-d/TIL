function solution(n, m) {
    let answer = [];
    let multi = 0;
    
    for(let i = n; i > 0; i--) {
        if(n % i === 0 && m % i === 0) {
            answer.push(i);
            break; 
        }
    }
    
    multi = m;
    while(answer.length < 2) {
        if(multi % n === 0 && multi % m === 0) {
            answer.push(multi);
            break;
        }
        multi++;
    }
    
    return answer;
}