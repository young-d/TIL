function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let minTime = bridge_length + truck_weights.length;

    let index = 0;
    let total = 0;
    let head_idx = 0;
    for(let i = 0; i < truck_weights.length; i++) {
        if(index === i) {
            let head = truck_weights[head_idx]; 
            for(let j = 1; j < bridge_length; j++) {
                if(total + truck_weights[index] <= weight) {
                    total += truck_weights[index];
                    index++;
                }else {
                    minTime++;
                }
            }
            total -= head;
            head_idx++;
        }
    }
    answer = minTime;

    return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));


