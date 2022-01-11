let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = input[0];
const b = input[1];
const checkB = new Array(b.length).fill(false);
let removeCount = a.length + b.length;

for (const charA of a) {
  for (let i = 0; i < b.length; i++) {
    if (!checkB[i] && charA === b[i]) {
      checkB[i] = true;
      removeCount -= 2;
      break;
    }
  }
}

console.log(removeCount);
