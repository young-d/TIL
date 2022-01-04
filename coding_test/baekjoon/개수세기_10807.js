let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const target = input[2];
let answer = 0;

input[1].split(' ').forEach(element => {
  target === element && answer++;
});

console.log(answer);
