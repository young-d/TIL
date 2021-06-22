function solution(nums) {
    let answer = 0;

    let obj = nums.reduce((kinds, element) => {
        if(!kinds[element]) {
            kinds[element] = 1;
            answer++;
        }
        return kinds;
    }, {});

    return answer > nums.length / 2 ? nums.length / 2 : answer;
}

console.log(solution([3,1,2,3]));