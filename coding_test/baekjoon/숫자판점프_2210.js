let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// // let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const graph = input.map((element) => element.split(' '));

const numbers = new Set();
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const DFS = (y, x, result, count) => {
  if (count === 6) {
    numbers.add(result);
    return;
  } 

  for (let i = 0; i < 4; i++) {
    nx = x + dx[i];
    ny = y + dy[i];
    if(ny < 0 || ny >= graph.length || nx < 0 || nx >= graph.length) continue; 
    DFS(ny, nx, result + graph[y][x], count + 1);
  }
}

for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph.length; j++) {
    DFS(i, j, '', 0);
  }
}

console.log(numbers.size);
