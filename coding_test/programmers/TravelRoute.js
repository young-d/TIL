function solution(tickets) {
    let answer = [];
    let check = Array.from({length : tickets.length + 1}, () => 0);
    let obj = {};
    let cnt = tickets.length + 1;

    let route = [];

    // while(cnt > 0) {
        
    // }
    findTicket('ICN');


    //경로 1개 찾는 
    function findTicket(disparture) {
        route.push(disparture);
        let tmp = [];

        for(let i = 0; i < tickets.length; i++) {
            if(tickets[i][0] === disparture && check[i] === 0) {
                tmp.push(tickets[i][1]);
                
                for(let j = 0; j < tmp.length; j++) {
                    check[i] = 1;
                    findTicket(tmp[j]);
                    check[i] = 0;
                }
            }
        }
    }

    console.log(route);

    // let cnt = 0;
    // for(let route in obj) {
    //     if(obj[route].length === tickets.length) {
    //         cnt++;
    //     }
    // }
    // if(cnt === 1) answer.push('ICN').concat(obj[route]);
    

    return answer;
}

console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));