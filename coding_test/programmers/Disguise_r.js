function solution(clothes) {
    let answer = 0;
    let combination = 1;
    let map = new Map();
    
    for(let i = 0; i < clothes.length; i++) {
        if(!map.get(clothes[i][1])) map.set(clothes[i][1], 2);
        else map.set(clothes[i][1], map.get(clothes[i][1]) + 1);
    }
    
    for(let v of map.values()) {
        combination *= v;
    }
    
    answer = combination - 1;
    
    return answer;
}