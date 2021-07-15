//정렬된 영역의 데이터들과 현재값을 비교하며 현재값을 정렬된 영역으로 삽입한다
function insertionSort(array) {
    //정렬되지 않은 영역의 요소 개수만큼 반복
    for(let i = 1; i < array.length; i++) {
        let temp = array[i]; //현재값을 저장
        let index = i - 1; //정렬된 영역의 인덱스
        
        //오름차순 -> 정렬된 영역에서 현재값보다 큰 요소가 있으면 좌우 요소 swap
        //(현재값보다 큰 값을 정렬되지 않은 영역으로 내보내는 과정)
        while(array[index] !== undefined && array[index] > temp) {
            array[index + 1] = array[index];
            index--;
        }

        //루프를 빠져나왔을 때 현재값을 정렬된 영역으로 삽입
        array[index + 1] = temp;

    }


    return array;
}

console.log(insertionSort([3,4,2,5,2,1,6,17,9]));