function solution(strings, n) {
    let answer = [];

    answer = strings.sort((a, b) => {
            if(a.charAt(n) > b.charAt(n)) return 1;
            else if(a.charAt(n) < b.charAt(n)) return -1;
            else {
                if(a < b) return -1;
                else return 1;
            }
        });

    return answer;
}