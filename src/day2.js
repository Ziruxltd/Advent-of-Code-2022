const fs = require('fs')

let input = fs.readFileSync('../inputs/day2.txt').toString();
let splitInput = input.split('\r\n');
console.log(splitInput[0][2])

// a = rock;
// b = paper;
// c = scissors;

// y = paper; 2
// x = rock; 1
// z = scissors; 3

const y = 2
const x = 1
const z = 3

let sum = 0;
let games = [];


splitInput.forEach(element => {
    let first = undefined;
    let second = element[2];

    if (element[0] == 'A') {
        first  = 'X';
    } else if(element [0] == 'B') {
        first = 'Y';
    } else if (element[0] == 'C') {
        first = 'Z';
    }

    games.push([first,second]);
});

games.forEach(element => {
    if (element[1] == 'Y') {
        sum += 2;
    } else if (element[1] == 'X') {
        sum += 1;
    } else if (element[1] == 'Z') {
        sum += 3;
    }
});
games.forEach(element => {
    if (element[1] == 'Y' && element[0] == 'X') {
        sum += 6;
    } else if (element[1] == 'X' && element[0] == 'Z') {
        sum += 6;
    } else if (element[1] == 'Z' && element[0] == 'Y') {
        sum += 6;
    } else if (element[0] == element[1]) {
        sum += 3;
    }
});

console.log(sum);
console.log('-----------------------------------Solution 2----------------------------');

sum = 0;
games = [];


splitInput.forEach(element => {
    let first = element[0];
    let second = element[2];
    let third = undefined;
    if (second == 'Y') {
        sum += 3;
        if (first == 'A') {
            third = 'A';
            sum += 1;
        } else if(first == 'B') {
            third = 'B';
            sum += 2;
        } else if (first == 'C') {
            third = 'C';
            sum += 3;
        }
    } else if (second == 'Z') {
        sum += 6;
        if (first == 'A') {
            third = 'B';
            sum += 2;
        } else if(first == 'B') {
            third = 'C';
            sum += 3;
        } else if (first == 'C') {
            third = 'A';
            sum += 1;
        }
    } else if (second == 'X') {
        sum +=0;
        if (first == 'A') {
            third = 'C';
            sum += 3;
        } else if(first == 'B') {
            third = 'A';
            sum += 1;
        } else if (first == 'C') {
            third = 'B';
            sum += 2;
        }
    }
    
    
    games.push([first,second]);
});

console.log(sum);