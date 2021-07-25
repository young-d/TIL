function solution(numbers, hand) {
    let answer = '';
  
    let currLeft = 10;
    let currRight = 12;

    for(let n of numbers) {
        if(n === 1 || n === 4 || n === 7) {
            answer += 'L';
            currLeft = n;
        }else if(n === 3 || n === 6 || n === 9) {
            answer += 'R'
            currRight = n;
        }else {
            if(getDistance(currLeft, n) < getDistance(currRight, n)) {
                answer += 'L';
                currLeft = n;
            }else if(getDistance(currLeft, n) > getDistance(currRight, n)) {
                answer += 'R';
                currRight = n;
            }else {
                if(hand === 'left') {
                    answer += 'L';
                    currLeft = n;
                }else {
                    answer += 'R';
                    currRight = n;
                }
            }
        }
    }
    return answer;
}

function getDistance(current, dist) {
    
    if(current === 0) current = 11;
    if(dist === 0) dist = 11;

    let distance = Math.abs(current - dist);

    if(distance % 3 === 0) {
        distance = distance / 3;
    }else if(distance === 1) {
        distance = 1;
        
    }else if(distance === 2 || distance === 4) {
        distance = 2;
    }else if(distance === 5 || distance === 7) {
        distance = 3;
    }else {
        distance = 4;
    }

    return distance;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); //LRLLLRLLRRL