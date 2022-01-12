let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const length = parseInt(input[0]);
let answer = '';

for (let i = 1; i <= length; i++) {
  const str = input[i].split(' ');
  
  for (let j = 0; j < str.length; j++) {
    const word = str[j].split('');
    let left = 0;
    let right = word.length - 1;
    
    while (left < right) {
      const temp = word[left];
      word[left] = word[right];
      word[right] = temp;
      left++;
      right--;
    }
    str[j] = word.join('');
  }
  answer += str.join(' ') + '\n';
}

console.log(answer);
