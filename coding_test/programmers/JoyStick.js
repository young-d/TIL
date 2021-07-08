function solution(name) {
    let answer = 0;
    let cursor = 0;
    let len = name.length;
    let visited = Array.from({length : len}, () => false);

    //변경이 필요없는 문자 체크
    for(let i = 0; i < len; i++) {
        if(name[i] === 'A') visited[i] = true;
    }
    
    //변경할 문자 위치로 이동(좌우) + 변경(위아래)
    while(true) {
        let idx = findIndex(visited, cursor, len);

        //방문 확인
        if(visited[idx] === true || idx < 0) break;
        visited[idx] = true;

        //커서 이동 최소 횟수
        answer += min(idx, cursor, len);
        cursor = idx;  //커서 위치 옮기기

        //문자 변경 최소 횟수
        answer += Math.min(name[idx].charCodeAt() - 'A'.charCodeAt(), 'Z'.charCodeAt() - name[idx].charCodeAt() + 1);
    }

    return answer;
}

//커서에서 해당 인덱스로 이동가능한 최소 횟수
const min = (idx, cursor, len) => Math.min(Math.abs(idx - cursor), cursor + len - idx);

//현재 커서 위치 기준으로 변경할 문자 index 찾기
const findIndex = (visited, cursor, len) => {
    let idx = visited.indexOf(false);
    for(let i = 0; i < len; i++) {
        if(visited[i] === true) continue;
        idx = min(i, cursor, len) < min(idx, cursor, len) ? i : idx;
    }
    return idx;
};

console.log(solution('ABAAAAAAAAABB'));  //7