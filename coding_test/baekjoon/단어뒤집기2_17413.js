let fs = require('fs');
let input = fs.readFileSync('_input.txt') + '';
// let input = fs.readFileSync('/dev/stdin') + '';

const inputStr = input.split('');
let answer = '';
let pointer = 0;
let word = '';

const swap = (value) => {
  const result = value.trim().split('');

  let lt = 0;
  let rt = result.length - 1;

  while (lt < rt) {
    const temp = result[rt];
    result[rt--] = result[lt];
    result[lt++] = temp;
  }

  return result.join('');
}

while (pointer < inputStr.length) {
  if (inputStr[pointer] === '<') {
    while (true) {
      word += inputStr[pointer++];

      if (inputStr[pointer - 1] === '>') {
        answer += word;
        word = '';
        break;
      }
    }
  } else {
    while (pointer < inputStr.length && inputStr[pointer] !== '<') {
      word += inputStr[pointer++];
    }
  }

  if (word) {
    answer += word.split(' ').map(w => swap(w)).join(' ');
    word = '';
  }
}

console.log(answer);
