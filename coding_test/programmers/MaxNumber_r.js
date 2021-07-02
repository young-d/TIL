function solution(numbers) {
    let answer = '';
    let str = [];
    
    for(let n of numbers) {
        str.push(n.toString());
    }
    
    str = quickSort(str);
    
    if(str[0] === '0') return '0';
    else answer = str.join('');
    
    return answer;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if(left >= right) return;

    const mid = Math.floor((left + right) / 2);
    const pivot = array[mid];
    const partition = divide(array, left, right, pivot);

    quickSort(array, left, partition - 1);
    quickSort(array, partition, right);

    function divide(array, left, right, pivot) {
        while(left <= right) {
            while(Number(array[left] + pivot) > Number(pivot + array[left])) left++;
        
            while(Number(array[right] + pivot) < Number(pivot + array[right])) right--;
            
            if(left <= right) {
                let swap = array[left];
                array[left] = array[right];
                array[right] = swap;
                //한칸씩 옮기기
                left++;
                right--;
            }
    
            return left;
        }
    }

    return array;
}

console.log(solution([3, 30, 34, 5, 9]));