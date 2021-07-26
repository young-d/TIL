function solution(s) {
    let answer = 0;
    let string = '';

    let tmp = '';
    s.forEach(element => {
        if(Number(element) - Number(element) === 0) string += element;
        else {
            switch(tmp + element) {
                case 'zero':
                    string += '0';
                    tmp = '';
                    break;
                case 'one':
                    string += '1';
                    tmp = '';
                    break;
                case 'two':
                    string += '2';
                    tmp = '';
                    break;
                case 'three':
                    string += '3';
                    tmp = '';
                    break;
                case 'four':
                    string += '4';
                    tmp = '';
                    break;
                case 'five':
                    string += '5';
                    tmp = '';
                    break;
                case 'six':
                    string += '6';
                    tmp = '';
                    break;
                case 'seven':
                    string += '7';
                    tmp = '';
                    break;
                case 'eight':
                    string += '8';
                    tmp = '';
                    break;
                case 'nine':
                    string += '9';
                    tmp = '';
                    break;
                default:
                    tmp += element;
                    break;
            }
        }
    });

    answer = Number(string);

    return answer;
}