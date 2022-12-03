const fs = require('fs')

let input = fs.readFileSync('../inputs/day3.txt').toString();
let splitInput = input.split('\r\n');

function getPriority(char) {
    return char === char.toLowerCase()
      ? char.codePointAt(0) - 'a'.codePointAt(0) + 1
      : char.codePointAt(0) - 'A'.codePointAt(0) + 27;
  }

function solution1(splitInput) {
    let sum = 0;
    for (line of splitInput) {
        const a = line.slice(0, line.length/2);
        const b = line.slice(line.length/2);
        let first = [];
        let second= [];
        for (el of a) {
            first = [...first,el]
        }
        for (el of b) {
            second = [...second,el]
        }
        const same = first.filter((char) => second.includes(char))
        sum += getPriority(same[0]);
    }
    console.log(sum);
}
solution1(splitInput);


function solution2(splitInput) {
  let sum = 0;
  for (let i = 0; i <splitInput.length; i += 3) {
    const group = splitInput.slice(i,i+3).map((line) => [...line]);
    let same = group[0];
    for (const ind of group.slice(1)) {
      same = same.filter((char) => ind.includes(char));
    }
    sum += getPriority(same[0]);
  }
  console.log(sum);
}
solution2(splitInput);
