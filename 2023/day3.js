const { log } = require('console');
const fs = require('fs');

let input = fs.readFileSync('./inputs/day3.txt').toString();
let inputLines = input.split('\n');

let validNumbers = [];

function isValid(num){
    let y = num.y;
    const regex2 = /^[.]*$/;

    const above = inputLines[y-1] ? inputLines[y-1].slice(num.x-1, num.x+num.length+1) : '.';
    const below = inputLines[y+1] ? inputLines[y+1].slice(num.x-1, num.x+num.length+1) : '.';
    const left = inputLines[y][num.x-1];
    const right = inputLines[y][num.x+num.length];
    
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
console.log(validNumbers);
console.log(sumOfValidNumbers);

