function solution(n) {
    let answer = 0;
    let next = n + 1;
    let target = 1;
    let cnt = 1;
    while(n > 1) {
        if(n % 2 === 1) {
            target++;
        }
        n = Math.floor(n / 2);
    }
    
    console.log(target);
    
    while(answer === 0) {
        let aux = next;
        cnt = 1;
        while(aux > 2) {
            if(aux % 2 === 1) {
                cnt++;
            }
            aux = Math.floor(aux / 2);
        }
        if(cnt === target) {
            answer = next;
            break;
        }
        next++;
    }

    return answer;
}

console.log(solution(78));