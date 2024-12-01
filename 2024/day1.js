const fs = require('fs');

const input = fs.readFileSync('./inputs/day1.txt').toString().replace(/\r/g, '');
const lines = input.split('\n');
const splitLines = lines.map(line => line.split('   ').map(Number));
const sortedLeftColumn = splitLines.map(line => line[0]).sort((a, b) => a - b);
const sortedRightColumn = splitLines.map(line => line[1]).sort((a, b) => a - b);

function solution1(leftColumn, rightColumn) {
  return leftColumn.reduce((distance, value, index) => distance + Math.abs(value - rightColumn[index]), 0);
}

function solution2 (sortedLeftColumn, sortedRightColumn) {
  let similarities = []

  for (let i = 0; i < sortedLeftColumn.length; i++) {
    let timesAppeared = 0
    for (let j = 0; j < sortedRightColumn.length; j++) {
      if (sortedLeftColumn[i] === sortedRightColumn[j]) {
        timesAppeared++
      }
    }
    similarities.push(timesAppeared * sortedLeftColumn[i])
  }

  return similarities.reduce((a, b) => a + b, 0)
}

console.log('Solution 1: ', solution1(sortedLeftColumn, sortedRightColumn));
console.log('Solution 2: ', solution2(sortedLeftColumn, sortedRightColumn));
