function solution(record) {
    let answer = [];
    let room = {};

    for(let i = 0; i < record.length; i++) {
        let r = record[i].split(' ');
        let userId = r[1];
        if(r[0] === 'Enter') {
            room[userId] = r[2];
        }else if(r[0] === 'Change') {
            room[userId] = r[2];
        }
    }

    for(let i = 0; i < record.length; i++) {
        let r = record[i].split(' ');
        let userId = r[1];
        if(r[0] === 'Enter') {
            answer.push(`${room[userId]}님이 들어왔습니다.`);
        }else if(r[0] === 'Leave') {
            answer.push(`${room[userId]}님이 나갔습니다.`);
        }
    }

    return answer;
}


console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));