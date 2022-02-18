let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');

const m = input[0].split(' ')[0];
const n = input[0].split(' ')[1];
const k = input[0].split(' ')[2];

let sections = [];
const board = Array.from({length: m}, () => []);

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    board[i].push(0);
  }
}

for (let i = 1; i <= k; i++) {
  const dots = input[i].split(' ');
  const start = [dots[0], dots[1]];
  const end = [dots[2], dots[3]];

  board.forEach((a, row) => {
    a.forEach((_, col) => {
      if (col >= start[0] && col < end[0] && row >= start[1] && row < end[1]) {
        board[row][col] = 1;
      }
    })
  });
}

// 1. 방문한 좌표를 표시
// 2. 상하좌우에 방문할 수 있는(0이면서 방문한 적 없는) 좌표가 있는지 탐색하여 방문할 수 있다면 같은 과정을 반복
// 3. 더 이상 방문할 수 있는 좌표가 없을 때 방문한 좌표의 개수를 반환
let count = 0;

const visit = (x, y) => {
  board[x][y] = 2;
  count++;
  
  //상
  if (x + 1 < m && board[x + 1][y] === 0) {
    visit(x + 1, y);
  }
  //하
  if (x - 1 >= 0 && board[x - 1][y] === 0) {
    visit(x - 1, y);
  }
  //좌
  if (y - 1 >= 0 && board[x][y - 1] === 0) {
    visit(x, y - 1);
  }
  //우
  if (y + 1 < n && board[x][y + 1] === 0) {
    visit(x, y + 1);
  } 

  // 더이상 방문할 수 있는 좌표 없는 경우
}

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 0) {
      count = 0;
      visit(i, j);
      sections.push(count);
    }
  }
}

console.log(sections.length);
console.log(sections.sort((a, b) => a - b).join(' '));
