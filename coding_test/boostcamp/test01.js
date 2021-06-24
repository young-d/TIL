function solution(param0) {
    let answer = [];

    let obj = param0.reduce((cnt, element) => {
        let name = '';
        for(let i = 0; i < element.length; i++) {
            if(element.charAt(i) === '\_' || element.charAt(i) === '\.') {
                name = element.charAt(i - 1);
                break;
            }
        }
        let file = name + element.split('').slice(-2).join('');

        if(cnt[file]) {
            cnt[file]++;
        }else {
            cnt[file] = 1;
        }

        return cnt;
    }, {});

    for(let file in obj) {
        if(obj[file] > 1) {
            answer.push(file);
            answer.push(obj[file] + '');
        }
    }

    return answer;
}

console.log(solution(["/d/f/a.z", "/d/a_v2.z", "/d/b.z", "/d/b_v9.z"]));