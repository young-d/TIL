function solution(board, moves) {
    var answer = 0;

    let stack = [];
    for(let m of moves) {
        for(let j = 0; j < board.length; j++) {
            let doll = board[j][m - 1];
            if(doll !== 0) {
                board[j][m - 1] = 0;
                if(stack.length !== 0 && stack[stack.length - 1] === doll) {
                    stack.pop();
                    answer += 2;
                }else {
                    stack.push(doll);
                }
                break;
            }
        }
    }

    return answer;
}