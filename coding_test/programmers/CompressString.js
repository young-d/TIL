function solution(s) {
    let answer = 0;
    let result = [];

    //압축 단위
    for(let i = 1; i < (s.length / 2 + 1); i++) {
        let cnt = 1;
        let aux = '';
        //문자열 끝까지 단위별로 돌기
        for(let j = 0; j < s.length; j++) {
            let now = s.substr(j * i, i);
            let next = s.substr((j * i) + 1, i);

            if(now === next) {
                cnt++;
            }else {
                if(cnt > 1) {
                    aux += cnt + now;
                }else {
                    aux += now;
                }
                cnt = 1;
            }
        }
        result.push(aux.length);
    }

    answer = result[0];
    for(let r of result) {
        if(answer > r) answer = r;
    }

    return answer;
}

console.log(solution('ababcdcdababcdcd'));