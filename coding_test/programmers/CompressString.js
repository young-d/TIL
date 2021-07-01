function solution(s) {
    let answer = 0;
    let compression = '';

    for(let i = s.split('').length; i >= 1; i--) {
        if(s.split('').length / i < 2) continue;
        
        let pattern = s.slice(0, i);
        let cnt = 0;

        console.log(pattern, i);

        let start = i;
        for(let j = 1; j < Math.floor(s.split('').length / i); j++) {
            if(s.slice(start * j, start * j + i) === pattern) {
                cnt++;
            }
        }   

        if(cnt > 0) {
            compression = (cnt + 1) + pattern + s.slice( (cnt + 1) * i, );
            console.log(compression, cnt);
            answer = compression.split('').length;
            break;
        }
    }


    return answer > 0 ? answer : s.split('').length;
}

solution('ababcdcdababcdcd');