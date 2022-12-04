const fs = require('fs')

let input = fs.readFileSync('./inputs/day4.txt').toString();
let splitInput = input.split('\r\n');

function solution1() {
    let count = 0;
    for (pair of splitInput) {
        let splitArr = pair.split(',').map(el => el.split('-').map(Number));
        if ((splitArr[0][0] <= splitArr[1][0] && splitArr[0][1] >= splitArr[1][1]) || (splitArr[0][0] >= splitArr[1][0] && splitArr[0][1] <= splitArr[1][1])) {
            count++;
        } 
    }
    console.log(count);
}
solution1();

console.log('-------------------------Solution 2---------------------------')

function solution2() {
    let count = 0;
    for (pair of splitInput) {
        let splitArr = pair.split(',').map(el => el.split('-').map(Number));
        if ((splitArr[0][0] >= splitArr[1][0] && splitArr[0][0] <= splitArr[1][1]) || (splitArr[1][0] >= splitArr[0][0] && splitArr[1][0] <= splitArr[0][1])) {
            count++;
        } 
    }
    console.log(count);
}

solution2();