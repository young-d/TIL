function solution(s) {
    let answer = [];
    let times = 0;
    let zero = 0;

    while(s.length > 0) {
        if(s === '1') break;
        let len = s.split('').reduce((acc, element) => acc + Number(element), 0);
        zero += (s.length - len);
        times++;
        s = convert(len);
    }
    
    answer = [times, zero];
    console.log(answer);

    return answer;
}

function convert(n) {
    let result = [];

    while(n > 0) {
        if(n === 1) {
            result.push(n);
            break;
        }
        result.push(n % 2);
        n = Math.floor(n / 2);
    }

    return result.reverse().join('');
}

solution('110010101001');