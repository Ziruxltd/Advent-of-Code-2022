const fs = require('fs');
const input = fs.readFileSync('./inputs/day9.txt').toString().replace(/\r/g, '');
const map = '2333133121414131402'

function solution1 (map) {
  let idArray = map.split('').map((val,idx) => {
    if (idx % 2 === 0) {
      return Array(parseInt(val)).fill(idx / 2)
    } else {
      return Array(parseInt(val)).fill('.')
    }
  }).flat()
  console.log(idArray);
  
  let totalNumbers = idArray.reduce((total, current) => {
    if (current !== '.') {
      total++;
    }
    return total;
  }, 0);
  for (let i = 0; i < totalNumbers; i++) {
    if (idArray[i] === '.') {      
      for (let j = idArray.length -1; j >= 0; j--) {
        if (idArray[j] !== '.') {
          idArray[i] = idArray[j]
          idArray[j] = '.'
          break
        }
      }
    }
  }  
  
  let sum = 0
  for (let i = 0; i < idArray.length; i++) {
    if (idArray[i] === '.') break
    const result = i * parseInt(idArray[i])
    sum += result
  }

  return sum
}

console.log('Solution 1: ', solution1(input))