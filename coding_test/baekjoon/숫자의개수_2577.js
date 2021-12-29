let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const result = input[0] * input[1] * input[2];
const array = new Array(10).fill(0);


result.toString().split('').forEach(element => {
  const index = parseInt(element);
  array[index]++;
});

array.forEach(element => {
  console.log(element);
});
