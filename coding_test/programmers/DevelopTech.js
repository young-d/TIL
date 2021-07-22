function solution(progresses, speeds) {
    let answer = [];
    let term = [];
    let min = 0;
    let check = Array.from({length : progresses.length}, () => 0);
    
    for(let i = 0; i < progresses.length; i++) {
        term[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    
    for(let i = 0; i < term.length; i++) {
        let tech = 0;
        if(check[i] === 1) continue; 
        min = term[check.indexOf(0)];
        for(let j = check.indexOf(0); j < term.length; j++) {
            if(min < term[j]) break;
            check[j] = 1;
            tech++;
        }
        answer.push(tech);
    }

    return answer;
}