function solution(x) {
    let divisor = x.toString().split('').map(Number).reduce((acc, element) => acc + element);

    return x % divisor === 0 ? true : false;
}