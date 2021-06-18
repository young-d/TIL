function solution(bridge_length, weight, truck_weights) {
    let trucks = [];
    let bridge = [];

    //다리를 건너는데 걸리는 최소 시간
    let minTime = bridge_length + truck_weights.length;

    //다리를 건너지 않은 트럭들
    for(let i = truck_weights.length - 1; i >= 0; i--) {
        trucks.push(truck_weights[i]);
    }

    //다리 위 트럭의 총 무게
    let total_weight = 0;
    //다리를 건너고 있는 트럭들 간의 간격을 계산(간격1칸 = 시간1초)
    for(let i = trucks.length - 1; i >= 0; i--) {
        //다리를 건널지 판단할 트럭의 무게
        let target = trucks[i];

        while(true) {
            //트럭이 다리를 완전히 건너면 무게를 빼주기(동시에 다음 트럭이 건널 수 있는지를 아래 조건에서 판단)
            if(bridge.length === bridge_length) {
                total_weight -= bridge.pop();
            }
            //트럭 한 대가 다리에 올라가면 반복문을 종료하고 타겟을 해당 트럭으로 변경
            if(total_weight + target <= weight) {
                total_weight += target;
                trucks.pop();
                bridge.unshift(target);
                break;
            }else {    
                //트럭이 올라가지 못하면 다리 위의 트럭들만 한칸씩 이동(새트럭대신 0을 다리에 올리기)            
                bridge.unshift(0);
                //시간 증가
                minTime++;   
            }
        }           
    }
    
    return minTime;
}

console.log(solution(2, 10, [7, 4, 5, 6]));


