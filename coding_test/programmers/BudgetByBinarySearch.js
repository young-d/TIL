function solution(d, budget) {
    let answer = 0;
    let start = 0;
    let end = d.length - 1;

    d.sort((a, b) => a - b);

    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        const currSum = sum(d, mid);
        
        if (currSum <= budget) {
            if (mid === d.length - 1 || (currSum + d[mid + 1]) > budget)) {
                            answer = mid + 1;
                            break;
            }
                        start = mid + 1
        } else {
            end = mid - 1;
        }
    }

    return answer;
}

const sum = (arr, targetIdx) => 
        arr.filter((_, index) => index <= targetIdx)
            .reduce((acc, element) => acc += element);