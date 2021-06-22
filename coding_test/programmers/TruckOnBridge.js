function solution(bridge_length, weight, truck_weights) {
    var answer = bridge_length + truck_weights.length;
    let bridge = [];
    let total = 0;
    let idx = 0;

    while(truck_weights.length > 0) {
        if(idx === bridge_length) {
            total -= bridge[0];
            bridge.shift();
            idx--;
        }
        if(total + truck_weights[0] <= weight) {
            total += truck_weights[0]
            bridge.push(truck_weights.shift());
        }else {
            answer++;
            bridge.push(0);
        }
        idx++;
    }

    return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));