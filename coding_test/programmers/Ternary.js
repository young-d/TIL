function solution(n) {
    let answer = 0;
    //1.3진수 구하기
    let result = [];

    while(n >= 3) {
        result.push(n % 3);
        n = Math.floor(n / 3);
    }
    result.push(n);
    
    //2.10진수로 바꾸기
    let power = 1;
    for(let i = result.length - 1; i >= 0; i--) {
        answer += result[i] * power;
        power *= 3;
    }

    return answer;

}


solution(45);