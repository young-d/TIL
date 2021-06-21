function solution(arr) {
    let answer = [];
    let obj = {};
    let idx = 0;

    for(let a of arr) {
        if(obj[a]) {
            obj[a]++;
        }else {
            obj[a] = 1;
        }
    }

    for(let key in obj) {
        if(obj[key] > 1)  {
            answer[idx++] = obj[key];
        }
    }

    return answer.length > 0 ? answer : [-1];
}

console.log(solution([3,2,4,4,2,5,2,5,5]));