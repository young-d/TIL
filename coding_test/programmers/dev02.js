function solution(deposit) {
    let answer = [];
    let records = [];

    for(let d of deposit) {
        if(d > 0) records.push(d);
        else {
            let rest = records.pop() + d;
            console.log(d, rest, records);
            
            while(rest < 0) {
                rest = records.pop() + rest; 
            }
            
            if(rest > 0) records.push(rest);
        }
        console.log(records);
    }

    return records;
}

console.log(solution([500, 1000, -300, 200, -400, 100, -100]));