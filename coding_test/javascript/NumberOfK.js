function solution(array, commands) {
    var answer = [];
    
    for(let i = 0; i < commands.length; i++) {
        let start = commands[i][0] - 1;
        let end = commands[i][1] - 1;
        let target = commands[i][2] - 1;
        
        let result = divide(array, start, end, target);
        answer.push(result);
    }
    
    function divide(array, start, end, target) {
    let tmp = [];

    for(let i = start; i < end + 1; i++) {
        tmp.push(array[i]);
    }
        
    tmp.sort((a,b) => a-b); //오름차순 정렬(매개변수 명시 안해줄 경우 예외에 걸릴 수 있음 주의)

    return tmp[target];
}
    
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));