function solution(N, stages) {
    let answer = [];
    let obj = {};
    
    for(let i = 1; i < N + 1; i++) {
        let cnt = stages.reduce((acc, element) => {
            if(element === i) {
                acc[0]++;
                acc[1]++;
            }else if(element > i) {
                acc[1]++;
            }
            return acc;
        }, [0, 0]);

        let rate = cnt[1] !== 0 ? cnt[0] / cnt[1] : 0;

        if(obj[rate]) obj[rate].push(i);
        else obj[rate] = [i];
        
    }

    answer = sortObject(obj).reduce((acc, element) => acc.concat(element), []);

    return answer;
}

function sortObject(obj) {
    let keys = [];
    let result = [];

    for(let key in obj) {
        if(obj.hasOwnProperty(key)) keys.push(key);
    }

    keys.sort((a, b) => b - a);
    console.log(keys);

    for(let i = 0; i < keys.length; i++) {
        result.push(obj[keys[i]]);
    }

    return result;
}