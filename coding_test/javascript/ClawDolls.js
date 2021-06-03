function solution(board, moves) {
    let answer = 0;
    let bucket = [];

    for(let i=0; i < moves.length; i++) {
        let col = moves[i]-1;
        for(let row = 0; row < board.length; row++) {
            let doll = board[row][col];
            if(board[row][col] !== 0) {
                if(bucket.length !== 0 && doll === bucket[bucket.length-1]) {
                    bucket.pop();
                    answer+=2;
                }else {
                    bucket.push(doll);
                }
                board[row][col] = 0;
                break;
            }
        }
    }
    return answer;
}


// function pop(row, col) {
//     const doll = board[row][col];
//     board[row][col] = 0;
//     return doll;
// }


// function push(doll) {
//     bucket[bucket.length] = doll;
// }


console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));