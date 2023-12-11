const { log } = require('console');
const fs = require('fs');

let input = fs.readFileSync('./inputs/day3.txt').toString();
let inputLines = input.split('\n');

let map = [];
let numbers = [];
for (let i=0; i<inputLines.length; i++) {
    const line = inputLines[i];
    let regex = /\d+/g;
    let match;
    while ((match = regex.exec(line)) !== null) {
        const num = {
            x: match.index,
            y: i,
            value: parseInt(match[0])
        }
        numbers.push(num);
    }

    for (let j=0; j<line.length; j++) {
        const char = {x: i, y: j, value: line[j]};
        map.push(char);
    }
}

// const numbers = []

// function extractNumbersFromLine(map, x) {
//     let line = map.filter(point => point.x === x);
//     let str = line.map(point => point.value).join('');
//     let numbers = str.match(/\d+/g);
//     return numbers ? numbers.map(num => parseInt(num)) : [];
// }



// if (line[j] !== '.') {
    // char.nextCoordinates =[{x: i+1, y: j}, {x: i, y: j+1}, {x: i-1, y: j}, {x: i, y: j-1}, {x: i+1, y: j+1}, {x: i-1, y: j-1}, {x: i+1, y: j-1}, {x: i-1, y: j+1}]
// }