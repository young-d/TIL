function solution(numbers, target) {
    let answer = 0;
    const n = numbers.length;
    
    DFS(0);
    
    function DFS(L) {
        if(L === n) {
            // let total = 0;
            // for(let n of numbers) {
            //     total += n;
            // }
            //콜백함수 사용해서 total값 구하기 -> 위의 for문 보다 시간 단축됨
            let total = numbers.reduce((accumulator, current) => accumulator + current, 0);
            if(total === target) answer++;
        }else {
            numbers[L] *= 1;
            DFS(L + 1);
            numbers[L] *= -1;
            DFS(L + 1);
        }
    }
    
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));