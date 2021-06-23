function solution(strings, n) {
    var answer = [];

    answer = strings.sort()
        .sort((a, b) => {
            if(a.charAt(n) > b.charAt(n)) return 1;
            else if(a.charAt(n) < b.charAt(n)) return -1;
            return 0; 
        });

    return answer;
}

solution(["sun", "bed", "car"], 1);