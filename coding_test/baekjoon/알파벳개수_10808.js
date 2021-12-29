let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const array = new Array(26).fill(0);

input[0].split('').forEach(element => {
  const index = element.charCodeAt() - 97;
  array[index]++;
});

console.log(array.join(' '));
