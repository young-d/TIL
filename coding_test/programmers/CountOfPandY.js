function solution(s){

    let obj = s.split('').reduce((acc, element) => {
        if(element.toLowerCase() === 'p') acc['p']++;
        if(element.toLowerCase() === 'y') acc['y']++;

        return acc;
    }, {'p' : 0, 'y' : 0});

    console.log(obj);

    return obj['p'] === obj['y'] ? true : false;
}

solution('Pyy');