function solution(n, computers) {
    let answer = 0;
    let check = Array.from({length: n}, () => false);

    for(let computer = 0; computer < n; computer++) {
        if(!check[computer]) {
            findNetwork(computer);
            //한번의 방문이 끝나면 네트워크 수 1개 카운트
            answer++;
        }
    }

    //컴퓨터를 방문했는지 체크하면서 더 이상 방문할 수 있는 컴퓨터가 없으면 종료하는 재귀함수
    function findNetwork(curr) {
        if(check[curr] === true) return;
        else {
            check[curr] = true;
            for(let next = 0; next < n; next++) {
                if(computers[curr][next] === 1 && curr !== next) {
                    findNetwork(next);
                }
            }
        }
    }

    return answer;
}


console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));