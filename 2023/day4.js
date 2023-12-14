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
            }
        }
        points += gamePoints;
    }
    return points;
}

function solution2(lines) {
    let nCards = lines.map(() => 1)

    for (let i = 0; i < lines.length; i++) {
        const game = lines[i].split(':')[1];
        let [winners, numbers] = game.split('|').map(s => s.split(' ').filter(Boolean).map(Number));
        const nWins = numbers.filter((n) => winners.includes(n)).length;
        for (let j = 0; j < nWins; j++) {
            nCards[i + 1 + j] += nCards[i];
        }
    }
    return nCards.reduce((a, b) => a + b);

}


console.log('Solution 1: ',solution1(lines));
console.log('Solution 2: ',solution2(lines));