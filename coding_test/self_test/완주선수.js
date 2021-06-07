function solution(participant, completion) {
    let answer = '';
    let obj = {};
    for(let person of participant) {
        for(let i = 0; i < completion.length; i++) {
            if(person === completion[i]) {
                obj[person] = 1;
                completion[i] = '';
                break;
            }
            obj[person] = 0;
        }
        if(obj[person] === 0) {
            answer = person;
        }
    }

    


    return answer;
}

console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]));