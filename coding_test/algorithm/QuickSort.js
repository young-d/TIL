function quickSort(array, left = 0, right = array.length - 1) {
    if(left >= right) return;

    const mid = Math.floor((left + right) / 2);
    const pivot = array[mid];
    const partition = divide(array, left, right, pivot);

    //재귀호출 (분할정복)
    quickSort(array, left, partition - 1);
    quickSort(array, partition, right);

    //배열을 둘로 나눈 후 오른쪽 배열의 첫번째 index값 리턴
    function divide(array, left, right, pivot) {
        while(left <= right) {
            //pivot 보다 작은 값은 swap skip
            while(array[left] < pivot) left++;
        
            //pivot 보다 큰 값은 swap skip
            while(pivot < array[right]) right--;
            
            //swap (pivot 보다 큰 left의 값과 pivot보다 작은 right의 값)
            if(left <= right) {
                let swap = array[left];
                array[left] = array[right];
                array[right] = swap;
                //한칸씩 옮기기
                left++;
                right--;
            }
        }

        return left;
    }

    return array;
}

console.log(quickSort([3,5,2,3,34,1,32]));