const testInput = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`
const fs = require('fs');
let [pages, updates] = fs.readFileSync('./inputs/day5.txt').toString().replace(/\r/g, '').split('\n\n');
// let [pages, updates] = testInput.toString().replace(/\r/g, '').split('\n\n');
pages = pages.split('\n')
updates = updates.split('\n')


function solution1(pages, updates) {
  let sum = 0;
  let instructions = {};
  for (let page of pages) {
    const [before, after] = page.split('|');
    if (!instructions[before]) {
      instructions[before] = {
        before: [],
        after: []
      }
    }
    if (!instructions[after]) {
      instructions[after] = {
        before: [],
        after: []
      }
    }
    instructions[before].after.push(after)
    instructions[after].before.push(before)
  }

  for (let update of updates) {
    const array = [...update.split(',')]    
    let hasError = false
    for (let i = 0; i < array.length; i++) {
      const beforeArray = array.slice(0, i);
      const afterArray = array.slice(i + 1);      

      beforeArray.forEach((val) => {
        if (instructions[array[i]].after.includes(val)) hasError = true
      })
      afterArray.forEach((val) => {
        if (instructions[array[i]].before.includes(val)) hasError = true
      })

      if (i === array.length - 1) {
        if (!hasError) sum += Number(array[Math.floor(array.length / 2)])
      }
    }
  }
  return sum
}

function solution2 (pages, updates) {
  function hasError(array) {    
    let error = false
    for (let i = 0; i < array.length; i++) {
      const beforeArray = array.slice(0, i);
      const afterArray = array.slice(i + 1);      

      beforeArray.forEach((val) => {
        if (instructions[array[i]].after.includes(val)) error = true
      })
      afterArray.forEach((val) => {
        if (instructions[array[i]].before.includes(val)) error = true
      })
    }
    return error
  }

  function generatePermutations(arr) {    
    if (arr.length <= 1) {
        return [arr];
    }
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        const remainingElements = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const permutationsOfRemaining = generatePermutations(remainingElements);
        for (let perm of permutationsOfRemaining) {
            result.push([currentElement, ...perm]);
        }
    }    
    return result;
}

  let sum = 0;
  let instructions = {};
  for (let page of pages) {
    const [before, after] = page.split('|');
    if (!instructions[before]) {
      instructions[before] = {
        before: [],
        after: []
      }
    }
    if (!instructions[after]) {
      instructions[after] = {
        before: [],
        after: []
      }
    }
    instructions[before].after.push(after)
    instructions[after].before.push(before)
  }

  for (let update of updates) {
    if (hasError([...update.split(',')])) {
      let nodes = generatePermutations([...update.split(',')])
      for (let i = 0; i < nodes.length; i++) {
        if (!hasError(nodes[i])) {
          sum += Number(nodes[i][Math.floor(nodes[i].length / 2)])
        }
      }
    }
  }
  return sum
}


console.log('solution 1: ', solution1(pages, updates));
console.log('solution 2: ', solution2(pages, updates));
