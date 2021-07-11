function solution(deposit) {
    let answer = [];

    for(let d of deposit) {
        if(d > 0) answer.push(d);
        else {
            let rest = answer.pop() + d;
            
            while(rest < 0) rest = answer.pop() + rest; 
            
            if(rest > 0) answer.push(rest);
        }
    }

    return answer;
}

console.log(solution([500, 1000, -300, 200, -400, 100, -100]));