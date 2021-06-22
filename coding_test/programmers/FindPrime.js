function solution(numbers){
    let answer = 0;
    let set = new Set();
    let merged = new Set();

    for (let i = 1; i <= numbers.length; i++){
        let result = getPermutations(numbers.split(""), i);
        set.add(result);
    }
    
    for(let i = 0; i < [...set].length; i++) {
        for(let j = 0; j < [...set][i].length; j++) {
            merged.add((Number([...set][i][j].join(''))));
        }
    }

    [...merged].forEach(value => {
        if(isPrime(value)) answer++;
    });
    
    return answer;
}

//순열 구하기
function getPermutations(arr, selectNumber) {
    let results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 fixed를 제외한 나머지 배열 
        const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
        const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두다 push
    });
    return results; // 결과 담긴 results return
};

//소수 찾기
function isPrime(n) {
    if(n < 2) return false;
    for(let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    return true;
}

console.log(solution("17"));