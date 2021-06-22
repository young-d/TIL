function solution(nums) {
    //1. object 사용해서 중복되지 않는 요소 개수 구하기
    // let answer = 0;
    // let obj = nums.reduce((kinds, element) => {
    //     if(!kinds[element]) {
    //         kinds[element] = 1;
    //         answer++;
    //     }
    //     return kinds;
    // }, {});

    // return answer > nums.length / 2 ? nums.length / 2 : answer;

    //2. set으로 중복 제거한 후 요소 개수 반환
    let tmp = new Set(nums);

    return [...tmp].length > nums.length / 2 ? nums.length / 2 : [...tmp].length;
}

console.log(solution([3,1,2,3]));