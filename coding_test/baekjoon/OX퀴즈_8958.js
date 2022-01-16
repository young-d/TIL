let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const length = input[0];

for (let i = 1; i <= length; i++) {
  let count = 0;

  const score = input[i].split('').reduce((acc, element, index) => {
    element === 'O' ? acc += ++count : count = 0;

    return acc;
  }, 0);

  console.log(score);
}
