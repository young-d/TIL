function solution(s){
    let answer = true;
    let stack = [];
    
    for(let b of s) {
        if(b === '(') stack.push(b);
        else {
            if(stack.length > 0) stack.pop();
            else return false;
        }
    }

    return stack.length === 0 ? answer : false;
}