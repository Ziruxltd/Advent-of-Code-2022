const fs = require('fs');

const input = fs.readFileSync('./inputs/day2.txt').toString().replace(/\r/g, '');
const lines = input.split('\n');
const splitLines = lines.map(line => line.split(' ').map(Number));

function solution1(splitLines) {
  let safeReports = 0;

  for (const line of splitLines) {
    let isSafe = true;
    let isIncreasing = null;

    for (let i = 0; i < line.length - 1; i++) {
      const diff = line[i] - line[i + 1];

      if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
        isSafe = false;
        break;
      }

      if (isIncreasing === null) {
        isIncreasing = diff > 0;
      } else if ((isIncreasing && diff <= 0) || (!isIncreasing && diff >= 0)) {
        isSafe = false;
        break;
      }
    }

    if (isSafe) {
      safeReports++;
    }
  }

  return safeReports;
}

console.log('Solution 1: ', solution1(splitLines));
