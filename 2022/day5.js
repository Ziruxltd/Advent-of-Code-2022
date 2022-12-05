const fs = require('fs')

let input = fs.readFileSync('./inputs/day5.txt').toString();


function solution1 (input) {
    const [diagram, moves] = input.split('\r\n\r\n');
    let stacks = [];
    for(line of diagram.split('\r\n').slice(0,-1)) {
        for (let i = 0; i < line.length; i += 4){
            if (line[i+1] !== " ") {
                stacks[i / 4] = stacks[i / 4] ?? [];
                stacks[i / 4].unshift(line[i + 1]);
            }
        }
        
    }
    console.log(stacks[0]);
}

solution1(input)

let array = [1,2]
array[4] = 3;
console.log(array);



// function solve(input, part) {
//     const [diagram, moves] = input.split('\r\n\r\n');
//     const stacks = [];
//     for (const line of diagram.split('\r\n').slice(0, -1)) {
//       for (let i = 0; i < line.length; i += 4) {
//         if (line[i + 1] !== ' ') {
//           stacks[i / 4] = stacks[i / 4] ?? [];
//           stacks[i / 4].unshift(line[i + 1]);
//         }
//       }
//     }
//     for (const move of moves.split('\r\n')) {
//       const [n, from, to] = move.match(/\d+/g).map(Number);
//       const crates = stacks[from - 1].slice(-n);
//       stacks[to - 1].push(...(part === 2 ? crates : crates.reverse()));
//       stacks[from - 1].length -= n;
//     }
//     console.log(stacks.map((stack) => stack[stack.length - 1]).join(''));
//   }
//   solve(input, 1);
//   solve(input, 2);