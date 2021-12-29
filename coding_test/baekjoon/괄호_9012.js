let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];

for (let i = 1; i <= count; i++) {
  const stack = [];
  let isCorrect = true;

  for (const brace of input[i]) {
    if (brace === '(') {
      stack.push(brace);
    } else {
      if (!stack.length) {
        isCorrect = false;
        break;
      } 

      stack.pop();
    }
  }

  isCorrect && !stack.length 
    ? console.log('YES') 
    : console.log('NO');
}
