function solution(people, limit) {
    let answer = 0;
    let save = Array.from({length : people.length}, () => 0);

    people.sort((a, b) => b - a);

    while(save.indexOf(0) > -1) {
        let first = save.indexOf(0);
        let last = save.lastIndexOf(0);
        let total = people[first];

        save[first] = 1;

        //효율성 위해 추가했으나 실패
        // if(people[first] <= Math.floor(limit / 2)) {
        //     let rest = people.length - save.reduce((acc, element) => acc + element) + 1;
        //     answer += Math.ceil(rest / 2);
        //     break;
        // }

        if(total + people[last] > limit) {
            answer++;
            continue;
        }

        for(let i = first + 1; i <= last; i++) {
            if(save[i] === 1 || total + people[i] > limit) continue;
            
            total += people[i];
            save[i] = 1;
            break;
        }

        answer++;
    }

    return answer;
}

