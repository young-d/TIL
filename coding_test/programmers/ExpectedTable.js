function solution(n,a,b) {
    let answer = 1;
    let left = a < b ? a : b;
    let right = a > b ? a : b;
    
    while(n > 1) {
        if(left % 2 > 0 && right - left === 1) return answer;
        left = Math.ceil(left / 2);
        right = Math.ceil(right / 2);
        n /= 2;
        answer++;
    }

    return answer;
}