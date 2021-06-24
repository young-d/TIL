function solution(arr) {
    let answer = [];

    let obj = arr.reduce((cnt, element) => {
        if(cnt[element]) {
            cnt[element]++;
        }else {
            cnt[element] = 1; 
        }
        return cnt;
    }, {});
    
    for(let key in obj) {
        if(obj[key] > 1)  {
            answer.push(obj[key]);
        }
    }

    return answer.length > 0 ? answer : [-1];
}

console.log(solution([1,3,3,4,3,4,5,9]));