function solution(s) {
    let answer = true;

    if(s.length === 4 || s.length === 6) {
        for(let i = 0; i < s.length; i++) {
            //1.
            // for(let j = 0; j <= 9; j++) {
            //     if(s[i] == j) {
            //         answer = true;
            //         break;
            //     }
            //     answer = false;
            // }
            // if(answer === false) return answer;

            //2.
            // if(Number(s[i]) != s[i]) {
            //     answer = false;
            //     break;
            // }

            //3.
            // if(!(s.charCodeAt(i) >= '0'.charCodeAt(0) &&  s.charCodeAt(i)<= '9'.charCodeAt(0))) {
            //     answer = false;
            //     break;
            // }

            //4.
            if(!Number(s[i])) {
                answer = false;
                break;
            }

            
        }
    }else {
        answer = false;
    }
    
    return answer;
}


console.log(solution("a234"));  //false
console.log(solution("1234"));  //true

