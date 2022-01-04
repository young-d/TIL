let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const length = input[0].split(' ')[0];
const limit = parseInt(input[0].split(' ')[1]);
const obj = { w: new Array(7).fill(0), m: new Array(7).fill(0) };

for (let i = 1; i <= length; i++) {
  const grade = input[i].split(' ')[1];

  input[i].split(' ')[0] === '0'
    ? obj['w'][grade]++
    : obj['m'][grade]++;
}

const roomForWoman = obj['w'].reduce((acc, element) => {
  acc += Math.ceil(parseInt(element) / limit);

  return acc;
}, 0);

const roomForMan = obj['m'].reduce((acc, element) => {
  acc += Math.ceil(parseInt(element) / limit);

  return acc;
}, 0);

console.log(roomForMan + roomForWoman);
