//1, 3, 6, 11, 19, 31, 48, (), ...
class Array {
    constructor(arr1) {
        this.arr1 = arr1;
    }
}

function expectNum() {
    this.arr1 = [];
    this.arr1[0] = 1;
    this.arr1[1] = 3;
    this.arr1[2] = 6;
    let number = 0;
    let arr2 = [];
    let added1 = 0;
    let added2 = 0;

    for(let i = 0; i < this.arr1.length-1; i++) {
        arr2[i] = this.arr1[i+1] - this.arr1[i];
        added1 = arr2[i];
    }
    for(let i = 0; i < arr2.length-1; i++) {
        added2 = arr2[i+1] - arr2[i] + 1;
    }
    
    number = this.arr1[this.arr1.length-1] + added1 + added2;
    this.arr1[this.arr1.length] = number;
    console.log(this.arr1.length);

    return number;
}
