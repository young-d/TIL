let numbers = [];
function fibo(n) {
    if(numbers[n] > 0) {
        return numbers[n];  //이미 구한 수는 재귀호출 없이 저장된 값 리턴(memoization)
    }else if(n === 1|| n === 2) {
        return numbers[n] = 1;
    }else {
        return numbers[n] = fibo(n - 2) + fibo(n - 1); 
    }
}

let n = 45;
for(let i = 1; i <= n; i++) console.log(`${fibo(i)}\n`);