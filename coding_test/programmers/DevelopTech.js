function solution(progresses, speeds) {
    let answer = [];
    let term = [];
    
    for(let i = 0; i < progresses.length; i++) {
        term[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }

    let min = 0;
    let index = 0;
    
    for(let i = 0; i < term.length; i++) {
        let cnt = 0;
        if(index === i) {
            min = term[index];
            for(let j = index; j < term.length; j++) {
                if(min >= term[j]) {
                    cnt++;
                    index++;
                }else {
                    break;
                }
            }
            answer.push(cnt);
        }
    }

    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));