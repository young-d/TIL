function solution(n, edge) {
    let check = Array.from({length : n + 1}, () => 0);
    let queue = [];
    let farthest = [];
    
    //인접행렬 -> 메모리초과(signal: aborted (core dumped))
    // for(let i = 0; i < edge.length; i++) {
    //     graph[edge[i][0]][edge[i][1]] = 1;
    //     graph[edge[i][1]][edge[i][0]] = 1;
    // }

    //인접리스트        
    let graph = edge.reduce((acc, element) => {
        if(acc[element[0]]) acc[element[0]].push(element[1]);
        else acc[element[0]] = [element[1]];

        if(acc[element[1]]) acc[element[1]].push(element[0]);
        else acc[element[1]] = [element[0]];

        return acc;
    }, {});

    queue.push(1);
    check[1] = 1;

    while(queue.length > 0) {
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let curr = queue.shift();
            farthest.push(curr);
            for(let j = 1; j <= n; j++) {
                if(graph[curr].indexOf(j) > -1 && check[j] === 0) {
                    queue.push(j);
                    check[j] = 1;
                }
            }
        }
        if(queue.length === 0) return farthest.length;
        else farthest = [];
    }

    return 0;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));