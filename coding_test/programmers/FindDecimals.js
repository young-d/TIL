function solution(numbers) {
    let answer = 0;
    const number = Number(numbers);

    //경우의 수 : length + length*length-1 + length*length-1*length-2*..*length-(length-1)
    // for(let i = 0; i < numbers.length; i++) {
        
    //     numbers[i]
    // }

    // console.log(numbers);

    // for(let i = 0; i < numbers; i++) {
    //     let factor
    //     if(number % i === 0) {
    //         factor++;  
    //     }
    //     if(factor > 2) {
    //         break;
    //     }
    // }

    //길이 1
    for(let i = 0; i < numbers.length; i++) {
        let number = Number(numbers[i]);
        let factor = 0;
        for(let i = 2; i < number; i++) {
            if(number % i === 0) factor++;
        }
        if(factor === 1) {
            answer++;
        }
    } 


    //길이 2
    








    return answer;
}

solution("2390340");