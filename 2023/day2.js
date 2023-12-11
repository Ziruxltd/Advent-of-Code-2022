const fs = require('fs');

let input = fs.readFileSync('./inputs/day2.txt').toString();
let inputLines = input.split('\n');


function solution1(inputLines){

    function isPosible(matches){
        for (let match of matches){
            let color = match.split(' ')[1];
            let times = parseInt(match.split(' ')[0]);
            if((color === 'red' && times > 12)||(color === 'green' && times > 13)||(color === 'blue' && times > 14)) {
                return false
            }
        }
        return true;
    }


    let regex = /\b\d+\s(green|red|blue)\b/g;

    let posibleGamesId = [];
    for (let i=0; i<inputLines.length; i++) {
        const line = inputLines[i];
        const lineID = i+1;
        let matches = line.match(regex);

        if (isPosible(matches)){
            posibleGamesId.push(lineID);
        }
    }
    let sum = posibleGamesId.reduce((a, b) => a + b, 0);
    return sum;
}

function solution2(inputLines){
    function getPower(matches){
        let red = 0;
        let green = 0;
        let blue = 0;
        for (let match of matches){
            let color = match.split(' ')[1];
            let times = parseInt(match.split(' ')[0]);
            if(color === 'red'&&times>red) {
                red = times;
            } else if(color === 'green'&&times>green) {
                green = times;
            } else if(color === 'blue'&&times>blue) {
                blue = times;
            }
        }
        return red*green*blue;
    }


    let regex = /\b\d+\s(green|red|blue)\b/g;

    let power = []
    for (let i=0; i<inputLines.length; i++) {
        const line = inputLines[i];
        const lineID = i+1;
        let matches = line.match(regex);
    
        power.push(getPower(matches));   
    }

    let sum = power.reduce((a, b) => a + b, 0);
    return sum;
}


console.log('Solution 1: ',solution1(inputLines));
console.log('Solution 2: ',solution2(inputLines));