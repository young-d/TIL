function solution(phone_number) {
    let answer = '';
    let len = phone_number.length;
    
    for(let i = 0; i < len; i++) {
        if(i < len - 4) answer += '*';
        else answer += phone_number[i];
    }
    
    return answer;
}