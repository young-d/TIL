function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => b - a);
    
    let first = 0; //가장 몸무게가 많은 사람
    let last = people.length - 1; //가장 몸무게가 적은 사람
    while(first <= last) {
        //한 명이 남았을 때 보트 1개 추가해서 리턴
        if(first === last) return answer + 1;

        //두명을 태웠을 때 제한무게보다 많으면 가장 많은 사람만 태우고 아니면 두명을 태우
        if(people[first] + people[last] > limit) last++;
           
        first++; 
        answer++;
    }

    return answer;
}


console.log(solution([70, 80, 50], 100));