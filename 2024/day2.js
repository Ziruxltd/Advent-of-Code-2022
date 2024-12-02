const fs = require('fs');

const input = fs.readFileSync('./inputs/day2.txt').toString().replace(/\r/g, '');
const lines = input.split('\n');
const splitLines = lines.map(line => line.split(' ').map(Number));

function solution1(splitLines) {
  let safeReports = 0;
  for (let i = 0; i < splitLines.length; i++) {
    let isSafe = true;
    let array = [];
    for (let j = 0; j < splitLines[i].length - 1; j++) {
      const rest = splitLines[i][j] - splitLines[i][j + 1]
      array.push(rest);
      const diff = Math.abs(rest);
      if (diff < 1 || diff > 3) {
        isSafe = false;
        break;
      }
    }
    if (isSafe && (array.every((value) => value > 0) || array.every((value) => value < 0))) {
      safeReports++;
    }
  }
  return safeReports;
}



console.log('Solution 1: ', solution1(splitLines));
