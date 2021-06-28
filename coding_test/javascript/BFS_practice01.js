const distances = [1, -1, 5];
let check = Array.from({length : 10001}, () => 0);
let queue = [];

function BFS(start, end) {
    check[start] = 1;
    queue.push(start);
    let level = 0;

    while(queue.length > 0) {
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let curr = queue.shift();
            for(let j = 0; j < distances.length; j++){
                let next = curr + distances[j];
                if(next === end) return (level + 1);
                if(next >= 1 && next <= 10000 && check[next] === 0) {
                    check[next] = 1;
                    queue.push(next);
                }
            }
        }
        level++;
    }
    return 0;
}

console.log(BFS(5, 14)); // 3   

