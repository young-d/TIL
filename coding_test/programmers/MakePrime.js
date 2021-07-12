function solution(nums) {
    let answer = 0;

    getCombinations(nums, 3).forEach((c) => {
        if(isPrime(c)) answer++;
    });
    
    return answer;
}

const isPrime = (arr) => {
    let n = arr.reduce((acc, element) => acc + element);

    for(let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }

    return true;
}

const getCombinations = (arr, len) => {
    const results = [];
    if (len === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, len - 1); // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두다 push
    });
    
    return results; // 결과 담긴 results return
}

console.log(solution([1,2,7,6,4]));