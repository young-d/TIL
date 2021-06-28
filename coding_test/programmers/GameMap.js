function solution(maps) {
    let answer = -1;
    let n = maps.length;
    let m = maps[0].length;
    let queue = [];
    queue.push([0 ,0]);

    while(queue.length > 0) {
        let len = queue.length;

        for(let i = 0; i < len; i++) {
            let curr = queue.shift();
            let row = curr[0];
            let col = curr[1];
            
            if((row + 1 === n - 1 && col === m - 1)
            || (row === n - 1 && col + 1 === m - 1)) {
                return maps[row][col] + 1;
            }

            //반복문으로 동서남북 탐색
            let x = [0, 0, -1, 1];
            let y = [1, -1, 0, 0];

            for(let i = 0; i < 4; i++) {
                let nx = row + x[i];
                let ny = col + y[i];

                if(nx < 0 || nx > n - 1 || ny < 0 || ny > m - 1 || maps[nx][ny] !== 1) continue;
                else{
                    queue.push([nx, ny]);
                    maps[nx][ny] = maps[row][col] + 1;
                }    
            }
            

            //조건문으로 동서남북 탐색
            // //동
            // if(col < m - 1 && maps[row][col + 1] === 1) {
            //     queue.push([row, col + 1]);
            //     maps[row][col + 1] = maps[row][col] + 1;
            // }
            // //서
            // if(col > 0 && maps[row][col - 1] === 1) {
            //     queue.push([row, col - 1]);
            //     maps[row][col - 1] = maps[row][col] + 1;
            // }
            // //남
            // if(row < n - 1 && maps[row + 1][col] === 1) {
            //     queue.push([row + 1, col]);
            //     maps[row + 1][col] = maps[row][col] + 1;
            // }
            // //북
            // if(row > 0 && maps[row - 1][col] === 1) {
            //     queue.push([row - 1, col]);
            //     maps[row - 1][col] = maps[row][col] + 1;
            // }
            
            maps[row][col] = 0;
        }
    }
    return answer;
}



console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));