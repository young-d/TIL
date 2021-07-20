function solution(s, n) {
    let answer = '';
    
    for(let c of s) {
        if(c === ' ') answer += c;
        else if(code(c.toLowerCase()) + n > code('z')) answer += char(code(c) + n - 26);
        else answer += char(code(c) + n);
    }
    
    return answer;
}

const code = (char) => char.charCodeAt(0);
const char = (code) => String.fromCharCode(code);