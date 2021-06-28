//1번 노드 -> n번노드까지가는 경로의 수 
//m : 간선 수
function routeSearch(n, m, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array.from({length: n + 1}, () => 0));
    let check = Array.from({length : n + 1}, () => 0);

    for(let i = 0; i < m; i++) {
        graph[arr[i][0]][arr[i][1]] = 1;
    }

    check[1] = 1;
    DFS(1);

    //n번 노드까지 갔으면 경로 수++ , v노드에서 갈 수 있는 경로들을 계속 탐색
    function DFS(v) {
        if(v === n) answer++;
        else {
            for(let i = 1; i <= n; i++) {
                //v노드에서 i노드로 갈 수 있으면
                if(graph[v][i] === 1 && check[i] === 0) {
                    check[i] = 1; //방문 체크
                    DFS(i); //다시 i노드부터 갈 수 있는 경로 탐색
                    check[i] = 0; //탐색 종료하면 방문 해제
                }
            }
        }
    }

    return answer;
}


console.log(routeSearch(5, 9, [[1,2],[1,3],[1,4],[2,1],[2,3],[2,5],[3,4],[4,2],[4,5]])); //6