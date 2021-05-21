package level1;

import java.util.Arrays;

public class UnFinishedPlayer01 {

    //#1. sorting
    public String solution(String[] participant, String[] completion) {

        String answer = "";

        Arrays.sort(participant);
        Arrays.sort(completion);

        int i;
        for (i = 0; i < completion.length; i++) {
            if (!participant[i].equals(completion[i])) {
                return participant[i];
            }
        }
        return participant[i];
    }

    public static void main(String[] args) {
        String[] participant = {"leo", "kiki", "eden"};
        String[] completion = {"eden", "kiki"};

        UnFinishedPlayer01 ufp = new UnFinishedPlayer01();
        String solution = ufp.solution(participant, completion);

        System.out.println(solution);
    }
}