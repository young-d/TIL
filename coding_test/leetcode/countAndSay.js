const countAndSay = n => {
    let digitString = '1';    
    
    for (let i = 1; i < n; i++) {
        const numbers = [];
        
        digitString.split('').forEach((value, index) => {
            if (numbers[numbers.length - 1]?.charAt() !== value) {
                numbers.push(value);
            } else {
                numbers[numbers.length - 1] += value;
            }
        });
        
        digitString = numbers.map(value => value.length + value.charAt()).join('');
    }
    
    return digitString;
};
