function solution(record) {
    let answer = [];
    
    const user = record.reduce((acc, element) => {
        const arr = element.split(' ');
        
        if (arr[0] === 'Enter' || arr[0] === 'Change') {
            const id = arr[1];
            acc[id] = arr[2];
        } 
        return acc;
    }, {});
    
    for (const r of record) {
        const arr = r.split(' ');
        
        if (arr[0] === 'Enter') {
            answer.push(user[arr[1]] + '님이 들어왔습니다.')
        } else if (arr[0] === 'Leave') {
            answer.push(user[arr[1]] + '님이 나갔습니다.')
        }
    }

    return answer;
}
