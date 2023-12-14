const fs = require('fs');

let input = fs.readFileSync('./inputs/day4.txt').toString();
let lines = input.split('\n');

function solution1(lines) {
    let points = 0;

    for (let i = 0; i < lines.length; i++) {
        const game = lines[i].split(':')[1];
        let [winners, numbers] = game.split('|').map(s => s.split(' ').filter(Boolean).map(Number));
        let gamePoints = 0;
        
        for (n of numbers) {
            if (winners.includes(n)) {
                gamePoints == 0 ? gamePoints++ : gamePoints = gamePoints*2;
                // console.log(gamePoints);
            }
        }
        points += gamePoints;
    }
    return points;
}


console.log('Solution 1: ',solution1(lines));