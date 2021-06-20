function solution(clothes) {
    let answer = 1;
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
    }, {})

    
    for(let key of obj) {
        answer *= obj[key];
    }
    
    console.log(answer);
    return answer - 1;
}

solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]);