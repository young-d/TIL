let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const length = parseInt(input[0]);
for (let i = 1; i <= length; i++) {
  const a = input[i].split(' ')[0].split('');
  const b = input[i].split(' ')[1].split('');
  
  if (a.sort().join('') === b.sort().join('')) {
    console.log('Possible');
  } else {
    console.log('Impossible');
  }
}
