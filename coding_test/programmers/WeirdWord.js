function solution(s) {
    let answer = '';
    let arr = s.split(' ');
    
    for(let i = 0; i < arr.length; i++) {
        let word = arr[i].split('');
        for(let j = 0; j < word.length; j++) {
            if(j % 2 === 0) answer += word[j].toUpperCase();
            else answer += word[j].toLowerCase();
        }
        if(i !== arr.length - 1) answer += ' ';
    }
    
    return answer;
}