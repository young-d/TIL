function solution(s) {
    s = s.split('');
    let stack = [];

    //문자열 길이가 짝수가 아니면 전부 제거 불가능하므로 0 리턴
    if(s.length % 2 > 0) return 0;

    for(let c of s) {
        if(stack.length === 0) stack.push(c);
        else {
            if(stack[stack.length - 1] === c) stack.pop();
            else stack.push(c);
        }
    }

    //모든 문자 제거했으면 1 리턴
    if(stack.length === 0) return 1;

    return 0;
}