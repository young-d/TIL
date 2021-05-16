package level1;

import java.util.Stack;

public class ClawMachine {
    public static int solution(int[][] board, int[] moves) {

        Stack<Integer> stack = new Stack<>();
        int result = 0;
        int line = 0;

        for(int i = 0; i < moves.length; i++) {
            line = moves[i];
            for(int j = 0; j < board.length; j++) {
                if(board[j][line-1] != 0) {
                    if (!stack.isEmpty() && board[j][line - 1] == stack.peek()) {
                        stack.pop();
                        result += 2;
                    } else {
                        stack.push(board[j][line - 1]);
                    }
                    board[j][line-1] = 0;
                    break;
                }
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[][] board = {
                {0,0,0,0,0},
                {0,0,1,0,3},
                {0,2,5,0,1},
                {4,2,4,4,2},
                {3,5,1,3,1}
        };
        int[] moves = {1,5,3,5,1,2,1,4};

        solution(board, moves);
    }
}
