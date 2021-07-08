function solution(name) {
    let answer = 0;
    let s = Array.from({length : name.length}, () => 'A');
    let idx = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] !== name.charAt(i)){
           idx.push(i);
           answer += (name.charCodeAt(i) - 'A'.charCodeAt()) < ('Z'.charCodeAt() - name.charCodeAt(i) + 1) ? name.charCodeAt(i) - 'A'.charCodeAt() : 'Z'.charCodeAt() - name.charCodeAt(i) + 1;
        }
    }

    let cursor = 0;
    let check = Array.from({length : idx.length}, () => 0);
    for(let i = 0; i < idx.length; i++) {
        if(check[i] === 1) continue;
        if(idx[i] - cursor < s.length - idx[i] + cursor) {
            check[i] = 1;
            answer += idx[i] - cursor;
        }else {
            for(let j = i; j < check.length; j++) {
                check[j] = 1;
            }
            answer += s.length - idx[i] + cursor;
        }
        // console.log(idx[i], idx[i] - cursor, s.length, idx[i],cursor);
        cursor = idx[i];
    }

    // console.log(idx, answer);
    return answer;
}