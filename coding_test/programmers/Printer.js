function solution(priorities, location) {
    let answer = 1;
    let first = -1;

    while(priorities.length > 0) {
        first = priorities.shift();

        if(priorities.some((value) => value > first)) {
            priorities.push(first);
        }else {
            if(location === 0) break;
            else answer++;
        }

        if(location === 0) location = priorities.length - 1;
        else location--;
        
    }
    return answer;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));