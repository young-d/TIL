function bubbleSort(...arr) {
    console.log(arr);
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    console.log(arr);
}
bubbleSort(3,6,41,2,4,1,5,7);
