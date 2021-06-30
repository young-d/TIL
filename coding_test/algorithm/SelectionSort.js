function selectionSortAsc(array) {
    let min = 0;

    for(let i = 0; i < array.length - 1; i++) {
        //최소값 하나 잡기
        min = array[i];
        //더 작은 값 있을 때 마다 swap
        for(let j = i + 1; j < array.length; j++) {
            if(min > array[j]) {
                min = array[j];
                array[j] = array[i];
                array[i] = min;
            }
        }
    }

    return array;
}

function selectionSortDesc(array) {
    let max = 0;

    for(let i = 0; i < array.length - 1; i++) {
        //최대값 하나 잡기
        max = array[i];
        //더 큰 값 있을 때마다 swap
        for(let j = i + 1; j < array.length; j++) {
            if(max < array[j]) {
                max = array[j];
                array[j] = array[i];
                array[i] = max;
            }
        }
    }

    return array;
}

console.log(selectionSortAsc([3,23,2,55,21,45,3]));
console.log(selectionSortDesc([3,23,2,55,21,45,3]));