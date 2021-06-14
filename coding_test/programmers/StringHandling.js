function solution(s) {
    let answer = true;

    if(s.length === 4 || s.length === 6) {
        for(let i = 0; i < s.length; i++) {
            if(Number(s[i]) != s[i]) {
                answer = false;
                break;
            }
            // for(let j = 0; j <= 9; j++) {
            //     if(s[i] == j) {
            //         answer = true;
            //         break;
            //     }
            //     answer = false;
                
            // }
            // if(answer === false) return answer;
        }
    }else {
        answer = false;
    }
    
    return answer;
}


console.log(solution("a234"));
console.log(solution("1234"));