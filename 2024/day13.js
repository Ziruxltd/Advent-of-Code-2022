const fs = require('fs');
const input = fs.readFileSync('./inputs/day13.txt').toString().replace(/\r/g, '').split('\n\n').map(e => e.split('\n'));
// solved with Cramer's rule : https://www.youtube.com/watch?v=jBsC34PxzoM
// I learned here: https://www.reddit.com/r/adventofcode/comments/1hd7irq/2024_day_13_an_explanation_of_the_mathematics/
function getData(data) {
  return {
    a: [Number(data[0].match(/X\+(\d+),/)[1]), Number(data[0].match(/Y\+(\d+)/)[1])],
    b: [Number(data[1].match(/X\+(\d+),/)[1]), Number(data[1].match(/Y\+(\d+)/)[1])],
    goal: [Number(data[2].match(/X=(.+?),/)[1]), Number(data[2].match(/Y=(.+)$/)[1])]
  }
}

function solutions(machines, offset = 0) {
  let totalCost = 0;
  for (let machineData of machines) {
    const machine = getData(machineData);
    const prize = [machine.goal[0] + offset, machine.goal[1] + offset];
    const det = (machine.a[0] * machine.b[1]) - (machine.a[1] * machine.b[0]);
    if (det === 0) continue;

    const a = (prize[0] * machine.b[1] - prize[1] * machine.b[0]) / det;
    const b = (machine.a[0] * prize[1] - machine.a[1] * prize[0]) / det;

    const checkX = (machine.a[0] * a) + (machine.b[0] * b);
    const checkY = (machine.a[1] * a) + (machine.b[1] * b);        

    if (checkX === prize[0] && checkY === prize[1] && Number.isInteger(a) && Number.isInteger(b)) {
      totalCost += (a * 3) + b;
    }
  }
  return totalCost;
}

console.log('Solution 1: ', solutions(input));
console.log('Solution 2: ', solutions(input, 10000000000000))