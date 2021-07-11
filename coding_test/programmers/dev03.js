function solution(n, wires) {
    let diff = n - 1;
    
    let obj = {};
    for(let w of wires) {
        if(!obj[w[0]]) obj[w[0]] = new Array();
        if(!obj[w[1]]) obj[w[1]] = new Array();
        
        obj[w[0]].push(w[1]);
        obj[w[1]].push(w[0]); 
    }

    for(let w of wires) {
        let abs = getAbs(n, obj, w[0], w[1]);
        if(abs < diff) {
            diff = abs;
        }
    }
    
    return diff;
}


function getAbs(n, obj, left, right) {
    let abs = Math.abs(countNode(obj, left, right) - countNode(obj, right, left));

    function countNode(obj, start, exception) {
        let cnt = 1;
        let check = Array.from({length: n + 1}, () => 0);
        let queue = [];
        queue.push(start);
        check[start] = 1;
        
        while(queue.length > 0) {
            let len = queue.length;
            for(let i = 0; i < len; i++) {
                let curr = queue.shift();
                let arr = obj[curr];
                for(let j = 0; j < arr.length; j++) {
                    if(arr[j] === exception || check[arr[j]] === 1) continue;
                    check[arr[j]] = 1;
                    queue.push(arr[j]);
                    cnt++;
                } 
            }
        }
        return cnt;
    }
    return abs;
}


console.log(solution(4, [[1,2],[2,3],[3,4]]));