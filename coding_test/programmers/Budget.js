function solution(d, budget) {
    let answer = 0;
    let total = 0;

    d.sort((a, b) => a - b).forEach((element) => {
        if(total + element > budget) return answer;
        else {
            total += element;
            answer++;
        }
    });

    return answer;
}