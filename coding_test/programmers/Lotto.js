function solution(lottos, win_nums) {
    let corr = 0;
    let diff = 0;

    let obj = win_nums.reduce((acc, element) => {
        acc[element] = 1;
        return acc;
    }, {});
    console.log(obj);
    
    lottos.reduce((acc, element) => {
        if(element === 0) {
            diff++;
        }
        if(acc[element]) {
            corr++;
        }
        return acc;
    }, obj);
    console.log(diff);
    console.log(corr);
    

    let high = 7 - corr - diff;
    let low = high + diff; 

    return [high > 6 ? 6 : high, low > 6 ? 6 : low];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));