function solution(p) {
    let answer = '';
    p = p.split('');
    let v = divide(p);
    divide(v);

    
    function divide(brackets) {
        let stack = [];
        let u = [];
        let check = Array.from({length : u.length}, () => 0);
        let v = [];
        let left = 0;
        let right = 0;

        if(brackets.length === 0) return [''];

        for(let i = 0; i < brackets.length; i++) {
            console.log(i, brackets[i]);
            if(left > 0 && right > 0 && left === right) {
                v.push(brackets[i]);
            }else {
                u.push(brackets[i]);
                if(brackets[i] === '(') {
                    left++;
                }else {
                    right++;
                }
            }
        }

        for(let i = 0; i < u.length; i++) {
            if(u[i] === '(') {
                stack.push(u[i]);
                check[i] = 1;
            }else {
                if(stack.length > 0) {
                    stack.pop();
                    check[i] = 1;
                }
                else {
                    break;
                }
            }
        }
        console.log(check);

        if(check.indexOf(0) > -1) {
            u[0] = '(';
            u[u.length - 1] = ')';
            for(let i = 1; i < u.length - 1; i++) {
                if(u[i] === '(') u[i] = ')';
                if(u[i] === ')') u[i] = '(';
            }
        }

        answer += u.join('');


        return v;
    }


    return answer;
}

console.log(solution(")("));