function solution(d, m) {
    let answer = 0;
    let box = 1;
    let total = 0;
    
    for(let i = 0; i < d.length; i++) {
        if(total >= m) break;
        if(d[i] >= box) {
            answer++;
            total += box;
            box *= 2;
        }else {
            answer++;
            box = 1;
        }
    }
    
    return total >= m ? answer : -1;
}

console.log(solution([1,3,2,5,4], 6));