const fs = require('fs');

let input = fs.readFileSync('./inputs/day3.txt').toString();
let inputLines = input.split('\n');


function solution1(){
    let validNumbers = [];
    
    function isValid(num){
        let y = num.y;
        const regex2 = /^[.]*$/;
        
        const above = inputLines[y-1] ? (inputLines[y-1][num.x-1] ? inputLines[y-1].slice(num.x-1, num.x+num.length+1) : inputLines[y-1].slice(num.x, num.x+num.length+1)) : '.';
        const below = inputLines[y+1] ? (inputLines[y+1][num.x-1] ? inputLines[y+1].slice(num.x-1, num.x+num.length+1) : inputLines[y+1].slice(num.x, num.x+num.length+1)) : '.';
        const left = inputLines[y][num.x-1] ? inputLines[y][num.x-1] : '.';
        const right = inputLines[y][num.x+num.length] ? inputLines[y][num.x+num.length] : '.';
        
        const testAbove = regex2.test(above);
        const testBelow = regex2.test(below);
        const testLeft = regex2.test(left);
        const testRight = regex2.test(right);
        
        if(!testAbove || !testBelow || !testLeft || !testRight){
            return true;
        }
    }   
    for (let i = 0; i < inputLines.length; i++) {
        const line = inputLines[i];
        const regex1 = /\d+/g;
        let match;
        let numbers = [];
        while ((match = regex1.exec(line)) !== null) {
            numbers.push({
                number: parseInt(match[0]),
                y: i,
                x: match.index,
                length: match[0].length
            })
        }
        
        for (num of numbers){
            if(isValid(num)){
                validNumbers.push(num.number);
            }
        }
        
    }
    const sumOfValidNumbers = validNumbers.reduce((a, b) => a + b, 0);
    return sumOfValidNumbers;
};


function solution2() {
    const fs = require('fs');

    const input = fs.readFileSync('./inputs/day3.txt', 'utf8').trimEnd();

    const dirs = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];

    const map = input.split('\n').map((line) => line.split(''));
    let sum = 0;
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (/\*/.test(map[i][j])) {
          const gears = [];
          for (let [di, dj] of dirs) {
            if (/\d/.test(map[i + di][j + dj])) {
              const digits = [map[i + di][j + dj]];
              for (let j2 = j + dj - 1; j2 >= 0; j2--) {
                if (/\d/.test(map[i + di][j2])) {
                  digits.unshift(map[i + di][j2]);
                  map[i + di][j2] = '.';
                } else {
                  break;
                }
              }
              for (let j2 = j + dj + 1; j2 < map[i + di].length; j2++) {
                if (/\d/.test(map[i + di][j2])) {
                  digits.push(map[i + di][j2]);
                  map[i + di][j2] = '.';
                } else {
                  break;
                }
              }
              gears.push(+digits.join(''));
            }
          }
          if (gears.length === 2) {
            sum += gears[0] * gears[1];
          }
        }
      }
    }
    return sum;
  }

console.log('Solution 1: ',solution1());
console.log('Solution 2: ',solution2());
