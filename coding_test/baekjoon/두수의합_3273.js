let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numbers = input[1].split(' ').sort((a, b) => a - b).map(n => parseInt(n));
const target = parseInt(input[2]);
let answer = 0;
let left = 0;
let right = numbers.length - 1;

while (left < right) {
  const sum = numbers[left] + numbers[right];

  if (sum === target) {
    answer++;
    left++;
    right--;
  } else if (sum < target) {
    left++;
  } else {
    right--;
  }
}

console.log(answer);
