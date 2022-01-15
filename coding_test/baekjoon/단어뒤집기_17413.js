let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const inputStr = input[0];
const outputStr = [];

console.log(inputStr.split('<>'));