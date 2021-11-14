function solution(numbers) {
    var answer = 0;
    
    numbers.sort((a, b) => b - a);
    
    for (let i = 0; i < 10; i++) {
        if (numbers[numbers.length - 1] === i) {
            numbers.pop();
            continue;
        }
        answer+=i;
    }
    
    return answer;
}
