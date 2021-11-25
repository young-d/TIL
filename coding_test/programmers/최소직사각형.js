const solution = sizes => {
    let max = 0;
    let secMax = 0;
    
    sizes.forEach(element => {
        const curr = Math.max(element[0], element[1]);
        if (max < curr) {
            max = curr;
            secMax = Math.min(element[0], element[1]);
        }
    });
    
    sizes.forEach(element => {
        const curr = Math.min(element[0], element[1]);
        if (curr > secMax) {
            secMax = curr;
        }
    });
    
    return max * secMax;
}
