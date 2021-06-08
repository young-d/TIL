const arr = [3,2,4,4,2,5,2,5,5];

let answer = [];

function solution(arr) {
    for(let a of arr) {
        let cnt = 0;
        for(let i = 0; i < arr.length; i++) {
            if(a === arr[i])  {
                arr[i] = 0;
                cnt++;
            }
        }
        if(a !== 0 && cnt !== 1) answer.push(cnt);
    }
    if(answer.length === 0) return [-1];
    return answer;
}

console.log(solution(arr));
