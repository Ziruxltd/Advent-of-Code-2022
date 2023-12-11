const fs = require('fs');

let input = fs.readFileSync('./inputs/day1.txt').toString();
let inputLines = input.split('\n');

function solution1() {
    function first(string) {
        let splitted = string.split('');
        for (let i = 0; i < splitted.length; i++) {
            if (!isNaN(parseInt(splitted[i]))) {
                return splitted[i];
            }
        }
    }

    function last(string) {
        let splitted = string.split('');
        for (let i = splitted.length; i >= 0 ; i--) {
            if (!isNaN(parseInt(splitted[i]))) {
                return splitted[i];
            }
        }
    }

    let values = [];
    let sum = 0;

    for (let i = 0; i < inputLines.length; i++) {
        values.push(parseInt(first(inputLines[i])+ last(inputLines[i])));
    }
    
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
    
}

function solution2() {

    let stringNumbers =['zero','one','two','three','four','five','six','seven','eight','nine']

    function first(string) {
        let joined = '';
        for (let i = 0; i < string.length; i++) {
            if (!isNaN(parseInt(string[i]))) {
                return string[i];
            } else {
                joined += string[i];
                for (let j = 0; j < stringNumbers.length; j++) {
                    if (joined.includes(stringNumbers[j])) {
                        return j.toString();
                    }
                }
            }
        }
    }

    function last(string) {
        let joined = '';
        for (let k = (string.length-1); k >= 0 ; k--) {
            if (!isNaN(parseInt(string[k]))) {
                return string[k];
            } else {
                joined = string[k] + joined;
                for (let j = 0; j < stringNumbers.length; j++) {
                    if (joined.includes(stringNumbers[j])) {
                        return j.toString();
                    }
                }
            }
        }
    }
    
    let values = [];
    let sum = 0;

    for (let i = 0; i < inputLines.length; i++) {
        values.push(parseInt(first(inputLines[i])+ last(inputLines[i])));
    }
    
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}

console.log('Solution 1: ',solution1());
console.log('Solution 2: ',solution2());

