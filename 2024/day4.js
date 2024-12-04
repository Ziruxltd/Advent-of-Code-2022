const fs = require('fs');
const input = fs.readFileSync('./inputs/day4.txt').toString().replace(/\r/g, '');
const lines = input.split('\n');

function solution1 (lines) {
  const XMAS = 'XMAS'
  let timesFound = 0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] === 'X') {
        //horizontal to right
        if (j < lines[i].length - 3) {
          const word = lines[i].slice(j,j + 4)
          if (word === XMAS) timesFound++
        }
        //horizontal to left
        if (j > 2) {
          const word = lines[i].slice(j - 3, j + 1).split('').reverse().join('')
          if (word === XMAS) timesFound++ 
        }
        //vertical down
        if (i < lines.length - 3) {
          const word = lines.map(row => row[j]).slice(i, i + 4).join('')
          if (word === XMAS) timesFound++
        }
        //vertical up
        if (i > 2) {
          const word = lines.map(row => row[j]).slice(i - 3, i + 1).reverse().join('')
          if (word === XMAS) timesFound++
        }
        // diagonal up to down
        if (i < lines.length - 3 && j < lines[i].length - 3) {
          const word = lines[i][j] + lines[i + 1][j + 1] + lines[i + 2][j + 2] + lines[i + 3][j + 3]
          if (word === XMAS) timesFound++
        }
        // diagonal down to up
        if (i > 2 && j < lines[i].length - 3) {
          const word = lines[i][j] + lines[i - 1][j + 1] + lines[i - 2][j + 2] + lines[i - 3][j + 3]
          if (word === XMAS) timesFound++
        }
        // diagonal up to down reverse
        if (i < lines.length - 3 && j > 2) {
          const word = lines[i][j] + lines[i + 1][j - 1] + lines[i + 2][j - 2] + lines[i + 3][j - 3]
          if (word === XMAS) timesFound++
        }
        // diagonal down to up reverse
        if (i > 2 && j > 2) {
          const word = lines[i][j] + lines[i - 1][j - 1] + lines[i - 2][j - 2] + lines[i - 3][j - 3]
          if (word === XMAS) timesFound++
        }
      }
    }
  }
  return timesFound
}

function solution2 (lines) {
  let timesFound = 0
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      // check vertica MAS
      if (lines[i][j] === 'M' && lines[i][j + 2] === 'M') {
        // check down
        if (lines[i + 2] && lines[i + 1][j + 1] === 'A' && lines[i + 2][j] === 'S' && lines[i + 2][j + 2] === 'S') {
          timesFound++
        }
        //check above
        if(lines[i - 2] && lines[i - 1][j + 1] === 'A' && lines[i - 2][j] === 'S' & lines[i - 2][j + 2] === 'S') {
          timesFound++
        }
      }
      // check horizontal MAS
      if(lines[i][j] === 'M' && lines[i + 2] && lines[i + 2][j] === 'M') {
        //check to right
        if (lines[i + 1][j + 1] === 'A' && lines[i][j + 2] === 'S' && lines[i + 2][j + 2] === 'S') {
          timesFound++
        }
        //check to left
        if (lines[i + 1][j - 1] === 'A' && lines[i][j - 2] === 'S' && lines[i + 2][j - 2] === 'S') {
          timesFound++
        }
      }
    }
  }
  return timesFound
}

console.log('solution 1: ', solution1(lines))
console.log('solution 2: ', solution2(lines))