const fs = require('fs');
const input = fs.readFileSync('./inputs/day3.txt').toString().replace(/\r/g, '');

function solution1 (input) {  
  const regex = /mul\(\d+,\d+\)/g;
  const instructions = input.match(regex);
  const numbers = instructions.map(instruction => instruction.match(/\d+/g).map(Number));
  return numbers.reduce((acc, [a, b]) => acc + (a * b), 0);
}
function solution2 (input) {
  const regex = /mul\(\d+,\d+\)/g;
  const dontRegex = /don't\(\)/g;
  const doRegex = /do\(\)/g;
  const combinedRegex = new RegExp(`${regex.source}|${dontRegex.source}|${doRegex.source}`, 'g');
  const instructions = input.match(combinedRegex);
  let total = 0;

  let canMultiply = true

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === "don't()") {
      canMultiply = false
    }

    if (canMultiply && instructions[i] !== 'do()' ) {
      const numbers = instructions[i].match(/\d+/g)      
      const mult = numbers[0] * numbers[1]      
      total += mult
    }

    if (instructions[i + 1] === 'do()') {
      canMultiply = true
    }
  }

  return total;

}

console.log('solution 1:', solution1(input));
console.log('solution 2:', solution2(input));