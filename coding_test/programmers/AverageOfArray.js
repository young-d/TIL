function solution(arr) {
    let answer = 0;

    let sum = arr.reduce((acc, element) => acc + element, 0);
    answer = sum / arr.length;

    return answer;
}