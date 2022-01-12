let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function Stack() {
  this._stack = [];
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this._stack[this.length++] = value;
}

Stack.prototype.pop = function() {
  if (!this.length) return -1;

  const value = this.top();
  this._stack.splice(this.length-- - 1, 1);

  return value;
}

Stack.prototype.top = function() {
  if (!this.length) return -1;

  return this._stack.slice(-1);
}

Stack.prototype.size = function() {
  return this.length;
}

Stack.prototype.empty = function() {
  return !this.length ? 1 : 0;
}

let result = '';
const stack = new Stack();
const commands = input.splice(1,);

for (c of commands) {
  switch (c.split(' ')[0]) {
    case 'push':
      stack.push(c.split(' ')[1]);
      break;
    case 'pop':
      result += (stack.pop() + '\n');
      break;
    case 'top':
      result += (stack.top() + '\n');
      break;
    case 'size': 
      result += (stack.size() + '\n');
      break;
    case 'empty':
      result += (stack.empty() + '\n');
      break;
  }
}

// console.log(result.slice(0, result.length - 1));
console.log(result);

