let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const stack = [];
let pointer = 1;
let answer = '';

for (i = 1; i <= n; i++) {
  if (stack.length && stack[stack.length - 1] >= i) {
    return 'NO';
  }

  stack.push(i);
  answer += ('+ \n');
  
  while (stack[stack.length - 1] === parseInt(input[pointer])) {
    stack.pop();
    answer += ('- \n');
    pointer++;
  }
}

console.log(!stack.length ? answer : 'NO');
