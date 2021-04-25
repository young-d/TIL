package level1;

import java.util.*;

public class UnFinishedPlayer02 {

    //#2 hash
    public String solution(String[] participant, String[] completion) {
        Map<String, Integer> hash = new HashMap<>();

        for (String arg : participant) {
            hash.put(arg, hash.getOrDefault(arg, 0) + 1);
        }

        for(String arg : completion) {
            hash.put(arg, hash.get(arg) - 1);
        }

        for (String key : hash.keySet()) {
            if (hash.get(key) != 0) {
                return key;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        String[] participant = {"eden", "leo", "kiki"};
        String[] completion = {"eden", "kiki"};

        UnFinishedPlayer02 ufp = new UnFinishedPlayer02();
        String solution = ufp.solution(participant, completion);

        System.out.println(solution);
    }
}
