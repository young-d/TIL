function solution(dartResult) {
    let answer = 0;
    let scores = [];

    for(let i = 0; i < dartResult.length; i++) {
        let n = Number(dartResult[i]);
        //숫자일 경우 scores에 넣어주기
        if(n - n === 0) {
            if(n > 0) scores.push(n);
            else Number(dartResult[i - 1]) === 1 ? scores[scores.length - 1] = 10 : scores.push(0);
        }else {
            let s = dartResult[i];
            switch(s) {
                case 'S':
                    scores[scores.length - 1] = (Math.pow(scores[scores.length - 1], 1));
                    break;
                case 'D':
                    scores[scores.length - 1] = (Math.pow(scores[scores.length - 1], 2));
                    break;
                case 'T':
                    scores[scores.length - 1] = (Math.pow(scores[scores.length - 1], 3));
                    break;
                case '*':
                    scores[scores.length - 2] *= 2;
                    scores[scores.length - 1] *= 2;
                    break;
                case '#':
                    scores[scores.length - 1] *= -1;
                default: continue;
            }
        }
    }

    answer = scores.reduce((acc, element) => acc + element);

    return answer;
}