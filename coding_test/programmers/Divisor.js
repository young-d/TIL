function solution(left, right) {
    let answer = 0;
    let numbers = [];

    while(left <= right) {
        numbers.push(left++);
    }

    let obj = numbers.reduce((acc, element) => {
        acc[element] = 0;
        for(let i = 1; i <= element; i++) {
            if(element % i === 0) acc[element]++;
        }
        if(acc[element] % 2 === 0) answer += Number(element);
        else answer -= Number(element);
        return acc;
    }, {});

    return answer;
}


console.log(solution(5,10)); //27