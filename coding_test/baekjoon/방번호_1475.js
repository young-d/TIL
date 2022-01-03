const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const array = Array(9).fill(0);

    input[0].split('').forEach((element) => {
      element === '6' || element === '9' 
        ? array[6]++
        : array[Number(element)] += 2
    });

    const max = Math.ceil(Math.max(...array) / 2);

    console.log(max);
});
