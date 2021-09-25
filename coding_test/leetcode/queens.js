var solveNQueens = function(n) {
    const answer = [];
    const arr = new Array(n);
    
    const getQueen = (depth, queens) => {
        if (depth === n) {
            answer.push(queens);
            return;
        }

        for (let i = 0; i < n; i++) {
            arr[depth] = i;

            if (isPossible(depth)) {
                let queen = '';
                for (let j = 0; j < n; j++) {
                    queen += i === j ? 'Q' : '.';
                }
                getQueen(depth + 1, [...queens, queen]);
            }
        }
    }

    const isPossible = (depth) => {
        for (let i = 0; i < depth; i++) {
            if (arr[depth] === arr[i]
               || Math.abs(depth - i) === Math.abs(arr[depth] - arr[i])) {
                return false;
            } 
        }
        return true;
    }
    
    getQueen(0, []);

    return answer;
};