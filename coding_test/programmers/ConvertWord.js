function solution(begin, target, words) {
    let answer = 0;
    let check = Array.from({length : words.length}, () => 0);
    let queue = [];

    words.unshift(begin);
    
    let obj = words.reduce((acc, element) => {
        acc[element] = new Set();
        for(let i = 0; i < element.length; i++) {
            for(let j = 1; j < words.length; j++) {
                if(words[j] === element) continue;
                if(i === 0 && words[j].slice(1,) === element.slice(1,)
                    || i === element.length - 1 && words[j].slice(0, -1) === element.slice(0, -1)
                    || (words[j].slice(0, i) === element.slice(0, i) && words[j].slice(i + 1,) === element.slice(i + 1,))) {
                        acc[element].add(words[j]);
                }
            }
        }
        return acc;
    }, {});

    queue.push(begin);
    check[0] = 1;

    while(queue.length > 0) {
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let curr = queue.shift();
            let arr = [...obj[curr]];
            for(let j = 0; j < arr.length; j++) {
                if(arr[j] === target) return answer + 1;
                if(check[words.indexOf(arr[j])] === 0) {
                    queue.push(arr[j]);
                    check[words.indexOf(arr[j])] = 1;
                }
            } 
        }
        answer++;
    }

    return 0;
}

console.log(solution("hit","cog",["hot", "dot", "dog", "lot", "log", "cog"]));