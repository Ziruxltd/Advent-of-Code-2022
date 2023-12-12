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


function solution2(){
    let validNumbers = [];

    function getGearRatio(num){
        numbers = [];
        const regex2 = /\d+/;
        const aboveLine = inputLines[num.y-1]
        const aboveSection = aboveLine.slice(num.x-1,num.x+2);

        const belowLine = inputLines[num.y+1]
        const belowSection = belowLine.slice(num.x-1,num.x+2);

        const left = inputLines[num.y][num.x-1];
        const right = inputLines[num.y][num.x+1];
        const regex3 = /\d+/g;
        if(regex2.test(aboveSection)){
            let match;
            // check top line
            while ((match = regex3.exec(aboveSection)) !== null) {
                // console.log(match);
                if(match.index === 0 && match[0].length < 3){
                    // check left and right if has number
                    // console.log(aboveLine[num.x-2]);
                    if (!isNaN(aboveLine[num.x-2])){
                        match[0] = aboveLine[num.x-2] + match[0]; 
                        if (match[0].length === 2 && !isNaN(aboveLine[num.x-3])){
                            match[0] = aboveLine[num.x-3] + match[0];
                            numbers.push(match[0]);
                        } else {
                            numbers.push(match[0]);
                        }
                    }
                } else if (match.index===0 && match[0].length === 3) {
                    numbers.push(match[0]);
                } else if (match.index===1) {
                    if(!isNaN(aboveLine[num.x+2])) {
                        match[0] = aboveLine[num.x+2] + match[0];
                        if (match[0].length === 2 && !isNaN(aboveLine[num.x+3])){
                            match[0] = aboveLine[num.x+3] + match[0];
                            numbers.push(match[0]);
                        } else {
                            numbers.push(match[0]);
                        }
                    }
                } else if (match.index===2) {
                    if(!isNaN(aboveLine[num.x+2])) {
                        match[0] = aboveLine[num.x+2] + match[0];
                        if (match[0].length === 2 && !isNaN(aboveLine[num.x+3])){
                            match[0] = aboveLine[num.x+3] + match[0];
                            numbers.push(match[0]);
                        } else {
                            numbers.push(match[0]);
                        }
                    }
                }
            }

            // check bot line
            while ((match = regex3.exec(belowSection)) !== null) {
                // console.log(match);
                if(match.index === 0 && match[0].length < 3){
                    // check left and right if has number
                    // console.log(aboveLine[num.x-2]);
                    if (!isNaN(belowLine[num.x-2])){
                        match[0] = belowLine[num.x-2] + match[0]; 
                        if (match[0].length === 2 && !isNaN(belowLine[num.x-3])){
                            match[0] = belowLine[num.x-3] + match[0];
                            numbers.push(match[0]);
                        } else {
                            numbers.push(match[0]);
                        }
                    }
                } else if (match.index===0 && match[0].length === 3) {
                    numbers.push(match[0]);
                } else if (match.index===1) {
                    if(!isNaN(belowLine[num.x+2])) {
                        match[0] = belowLine[num.x+2]; + match[0]
                        console.log(match[0].length);
                        if (match[0].length === 2 && !isNaN(belowLine[num.x+3])){
                            match[0] = belowLine[num.x+3] + match[0]; 
                            console.log(match[0]);
                            numbers.push(match[0]);
                        } else {
                            numbers.push(match[0]);
                        }
                    }
                } else if (match.index===2) {
                    if(!isNaN(belowLine[num.x+2])) {
                        match[0] = belowLine[num.x+2] + match[0];
                        if (match[0].length === 2 && !isNaN(belowLine[num.x+3])){
                            match[0] = belowLine[num.x+3] + match[0];
                            numbers.push(match[0]);
                        } else {
                            numbers.push(match[0]);
                        }
                    }
                }
            }

            // check left
            if(!isNaN(left)){
                let n = left;
                for (let i = 0; i < 3; i++){
                    if(!isNaN(inputLines[num.y][num.x-i-2])){
                        n = inputLines[num.y][num.x-i-2] + n;
                    }
                }
            }
            
        }
        // console.log(numbers);       
    }   
    
    
    for (let i = 0; i < inputLines.length; i++) {
        const line = inputLines[i];
        const regex1 = /\*/g;
        let match;
        let aster = [];
        while ((match = regex1.exec(line)) !== null) {
            aster.push({
                number: match[0],
                y: i,
                x: match.index
            })
        }

        for (num of aster){
            let gearRatio = getGearRatio(num);
            validNumbers.push(gearRatio);
        }
        
    }
    return 'no solution yet'
}

console.log('Solution 1: ',solution1());
console.log('Solution 2: ',solution2());
