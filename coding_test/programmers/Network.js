function solution(n, computers) {
    let answer = 0;
    let check = Array.from({length: n}, () => false);

    for(let i = 0; i < n; i++) {
        if(!check[i]) {
            visit(i);
            //한번의 방문이 끝나면 네트워크 수 1 증가
            answer++;
        }
    }

    //컴퓨터를 방문했는지 체크하는 재귀함수
    function visit(i) {
        if(check[i] === true) return;
        else {
            check[i] = true;
            for(let j = 0; j < n; j++) {
                if(computers[i][j] === 1 && i !== j) {
                    visit(j);
                }
            }
        }
    }

    return answer;
}


console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));