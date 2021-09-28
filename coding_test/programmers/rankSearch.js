function solution(info, query) {
    var answer = [];

    const obj = info.reduce((acc, element, i) => {
        acc[i] = element.split(' ');
        return acc;
    }, {});

    
    for (const q of query) {
        let arr = [];
    
        for (let i = 0; i < info.length; i++) {
            arr.push(i);
        }

        const lastIndex = q.lastIndexOf(' ');
        const condition = q.substr(0, lastIndex).split(' and ');
        const minScore = Number(q.substr(lastIndex));
        let count = 0;

        for (let i = 0; i < condition.length; i++) {
            if (condition[i] === '-') continue;
            arr = arr.filter(idx => obj[idx.toString()][i] === condition[i]);
        }
        
        for (const a of arr) {
            if (obj[a][4] >= minScore) {
                count++;
            }
        }
        answer.push(count);
    }

    console.log(answer);

    return answer;
}

solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]);