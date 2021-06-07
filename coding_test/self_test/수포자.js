function solution(answers) {
    const arr1 = [1,2,3,4,5];
    const arr2 = [2,1,2,3,2,4,2,5];
    const arr3 = [3,3,1,1,2,2,4,4,5,5];
    
    const len = answers.length;
    function countCorrect(arr) {
        let count = 0;
        for(let i = 0 ; i < len; i++) {
            if(arr[i % (arr.length)] === answers[i]) {
                count++;
            }
        }
        return count;
    }

    supo1 = countCorrect(arr1);
    supo2 = countCorrect(arr2);
    supo3 = countCorrect(arr3);

    let max = 0;
    if(supo1 > max) max = supo1;
    if(supo2 > max) max = supo2;
    if(supo3 > max) max = supo3;

    let result = [];
    if(supo1 === max) result.push(1);
    if(supo2 === max) result.push(2);
    if(supo3 === max) result.push(3);

    return result;


}

console.log(solution([1,2,3,4,5]));