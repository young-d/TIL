function solution(n, lost, reserve) {
    let answer = 0;
    let lostPerson = {};
    let saver = {};
    
    
    for(let r of reserve) {
        saver[r] = 1;
    }

    for(let l of lost) {
        if(saver[l] === 1) {
            delete(saver[l]);
        }else{
            lostPerson[l] = 1;
        }
    }

    for(let l of lost) {
        if(saver[l - 1] === 1) {
            delete(lostPerson[l]);
            delete(saver[l - 1]);
        }else if(saver[l + 1] === 1) {
            delete(lostPerson[l]);
            delete(saver[l + 1]);
        }
    }

    for(let p in lostPerson) {
        answer++;
    }

    return n - answer;
}