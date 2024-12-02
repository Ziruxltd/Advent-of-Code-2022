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

function solution2(splitLines) {
  function isSafe(nums, errors = 0) {
    const posDir = nums[1] > nums[0];
    
    for (let i = 1; i < nums.length; i++) {
      const num = nums[i];
      const prev = nums[i - 1];

      if (
        posDir
        ? num <= prev || num - 3 > prev
        : num >= prev || num + 3 < prev
      ) {
        if (errors === 1) {
          return false;
        }
        const next1 = nums.slice(0, i - 1).concat(nums.slice(i));
        const next2 = nums.slice(0, i).concat(nums.slice(i + 1));
        const next3 = nums.slice(1);
        return isSafe(next1, 1) || isSafe(next2, 1) || isSafe(next3, 1);
      }
    }
    return true;
  }

  let safeReports = 0;
  for (let line of splitLines) {
    if (isSafe(line)) {
      safeReports++;
    }
  }
  return safeReports;
}

console.log('Solution 1: ', solution1(splitLines));
console.log('Solution 2: ', solution2(splitLines));

