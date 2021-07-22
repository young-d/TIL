function solution(s){

    let map = new Map();
    map.set('p', 0);
    map.set('y', 0);
    
    s.split('').forEach((element) => {
        if(element.toLowerCase() === 'p') map.set('p', map.get('p') + 1);
        if(element.toLowerCase() === 'y') map.set('y', map.get('y') + 1);
    });
    
    return map.get('p') === map.get('y') ? true : false;
}