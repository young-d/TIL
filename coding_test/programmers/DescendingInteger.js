function solution(n) {
    //sort 함수 사용해 정렬
    //return Number(n.toString().split('').map(Number).sort((a, b) => b - a).join(''));
    
    //quickSort 구현해서 정렬
    let answer = 0;
    let arr = [];
    
    if(n < 10) return n;
    else {
        arr = n.toString().split('').map(Number);
        answer = Number(quickSort(arr).join(''));
    }
    return answer;
}

function quickSort(numbers, left = 0, right = numbers.length - 1) {
    if(left >= right) return;

    const mid = Math.floor((left + right) / 2);
    const pivot = numbers[mid];
    const partition = divide(numbers, left, right, pivot);

    quickSort(numbers, left, partition - 1);
    quickSort(numbers, partition, right);

    function divide(numbers, left, right, pivot) {
        while(left <= right) {

            while(numbers[left] > pivot) left++;

            while(pivot > numbers[right]) right--;

            if(left <= right) {
                let tmp = numbers[left];
                numbers[left] = numbers[right];
                numbers[right] = tmp;
                left++;
                right--;
            }
        }
        return left;
    }
    return numbers;
}

