function solution(clothes) {
    let answer = 0;
    let combination = 1;
    let kinds = [];
    
    for(let i = 0; i < clothes.length; i++) {
        kinds.push(clothes[i][1]);
    }


    let obj = kinds.reduce((cnt, element) => {
        if(cnt[element]) {
            cnt[element] += 1;
        }else {
            cnt[element] = 2;
        }
        return cnt;
    }, {});

    
    for(let key in obj) {
        combination *= obj[key];
    }
    
    answer = combination - 1;
    
    return answer;
}