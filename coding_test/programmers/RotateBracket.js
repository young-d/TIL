function solution(s) {
    var answer = -1;
    let left = ['[', '(', '{'];
    let right = [']', ')', '}'];
    let check = Array.from({length: s.length}, () => 0);
    let rotation = 0;
    s = s.split('');
    
    while(rotation < s.length) {
        let stack = [];
        let bracket = 0;

        for(let i = 0; i < s.length; i++) {
            if(right.indexOf(s[0]) > -1) break;
            if(left.indexOf(s[i]) > -1) stack.push(s[i]);
            else {
                if(stack.length === 0 || right.indexOf(s[i]) !== left.indexOf(stack.pop())) {
                    break;
                }else {
                    bracket++;
                }
            }
        }
        if(bracket === s.length / 2) check[rotation] = 1;

        rotation++;
        s.push(s.shift());
    }

    answer = check.filter(element => element === 1).length;
    return answer;
}

console.log(solution('[[]{]]{}())'));