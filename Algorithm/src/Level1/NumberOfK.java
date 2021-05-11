package level1;

import java.util.Arrays;

public class NumberOfK {
    public static int[] solution(int[] array, int[][] commands) {
        int[] answer = {};

        for (int i = 0; i < commands.length; i++) {
            int[] temp = new int[commands[i][1]-commands[i][0]+1];
            for (int j = 0; j < end-start+1; j++) {
                temp[j] = array[j];
                Arrays.sort(temp);
                answer[i] = temp[commands[i][2]];
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        int[] array = {1, 5, 2, 6, 3, 7, 4};
        int[][] commands = {
                {2, 5, 3},
                {4, 4, 1},
                {1, 7, 3}
        };

        System.out.println(Arrays.toString(solution(array, commands)));
    }
}
