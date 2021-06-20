function solution(citations) {
    let answer = 0;

    citations.sort((a,b) => b - a);
    
    // 인용횟수가 h보다 크거나 같은 논문들을 매번 뽑아서 판단
    // let h = citations[0];
    // while(h >= 0) {
    //     if(h === 0) return;
    //     let tmp = citations.filter(e => e >= h);
    //     if(tmp.length >= h) {
    //         answer = h;
    //         break;
    //     }
    //     h--;
    // }

    //요건충족할 때까지 h 증가
    //citations[answer]번 이상 인용된 논문 개수가 answer + 1개보다 커지기 직전에 answer를 반환
    while(answer + 1 <= citations[answer]) {
        answer++;
    }
    
    return answer;
}

console.log(solution([1, 7, 0, 1, 6, 4]));