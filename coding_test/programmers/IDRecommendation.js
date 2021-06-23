function solution(new_id) {
    let answer = '';

    //소문자로 변경
    new_id = new_id.toLowerCase();

    //마침표 개수와 특수문자 처리
    let comma = false;
    for(let i = 0; i < new_id.length; i++) {
        
        if(((new_id[i] >= '0'.charAt() && new_id[i] <= '9'.charAt())) 
            || new_id[i] === '\-'.charAt() 
            || new_id[i] === '\_'.charAt()
            || new_id[i] === '\.'.charAt()
            || (new_id[i] >= 'a'.charAt() && new_id[i] <= 'z'.charAt())) {
            
            if(new_id[i] === '\.') {
                if(comma !== true) {
                    answer += new_id[i];
                    comma = true;
                }
            }else {
                comma = false; 
                answer += new_id[i];
            }
        }
    }

    //처음이나 끝에 위치한 마침표 제거
    if(answer.charAt(0) === '\.') answer = answer.slice(1, );
    if(answer.charAt(answer.length - 1) === '\.') answer = answer.slice(0, answer.length - 1);


    //빈 문자열인 경우
    if(answer === '') answer = 'a'; 

    //길이 조정 (최대길이)
    if(answer.length > 15) answer = answer.slice(0, 15);

    //길이 조정 후 마침표 처리
    if(answer.charAt(answer.length - 1) === '\.') answer = answer.slice(0, answer.length - 1);

    //길이 조정 (최소 길이)
    if(answer.length < 3) {
        while(answer.length < 3) {
            answer += answer.slice(-1);
        }
    }

    return answer;
}

solution('...............................');