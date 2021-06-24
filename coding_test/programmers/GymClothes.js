function solution(n, lost, reserve) {
    let cnt = 0;

    for(let i = 0; i < lost.length; i++) {
        for(let j = 0; j < reserve.length; j++) {
            if(lost[i] === reserve[j]) {
                lost[i] = 0;
                reserve[j] = 0;
                break;
            }
        }
    }

    for(let i = 0; i < lost.length; i++) {
        if(lost[i] === 0) continue;

        for(let j = 0; j < reserve.length; j++) {
            if(reserve[j] === 0) continue;

            if(lost[i] - 1 === reserve[j] || lost[i] + 1 === reserve[j]) {
                lost[i] = 0;
                reserve[j] = 0;
                break;
            }
        }
        if(lost[i] !== 0) cnt++;
    }

    return n - cnt;
}
