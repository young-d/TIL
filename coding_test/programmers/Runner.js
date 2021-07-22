function solution(participant, completion) {
    let answer = '';
    let obj = {};
    
    for(let p of participant) {
        if(!obj[p]) obj[p] = 1;
        else obj[p] += 1;
    }
    
    for(let c of completion) {
        obj[c] -= 1;
    }    
    
    for(let p of participant) {
        if(obj[p] !== 0) {
            answer = p;
            break;
        }
    }
    
    return answer;
}