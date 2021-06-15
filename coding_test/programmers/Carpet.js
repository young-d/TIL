function solution(brown, yellow) {
    const answer = [];
   
    let width = 0;
    let height = 0;

    for(let i = yellow; i > 0; i--) {
        if(getWidth(brown, yellow, i)) {
            width = i + 2;
            height = (brown + yellow) / width;
            break;
        }
    }
    answer[0] = width;
    answer[1] = height;

    return answer;
}

function getWidth(brown, yellow, width) {
    return (width + 2) * (width + 2) - (brown + 4) * (width + 2) / 2 + (brown + yellow) === 0 ? true : false;
}

console.log(solution(10, 2));