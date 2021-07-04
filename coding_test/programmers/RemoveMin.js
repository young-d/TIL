function solution(arr) {
    let answer = [];
    let min = arr[0];
    
    for(let i = 1; i < arr.length; i++) {
        if(min > arr[i]) min = arr[i];
    }
    
    for(let a of arr) {
        if(a !== min) answer.push(a);
    }
    
    return answer.length > 0 ? answer : [-1];
}