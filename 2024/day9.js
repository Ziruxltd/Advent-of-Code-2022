const fs = require('fs');
const input = fs.readFileSync('./inputs/day9.txt').toString().replace(/\r/g, '');

function solution1 (map) {
  let idArray = map.split('').map((val, idx) => {
    if (idx % 2 === 0) {
      return Array(parseInt(val)).fill(idx / 2)
    } else {
      return Array(parseInt(val)).fill('.')
    }
  }).flat().map(String);  
  
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

function solution2(map) {
  let idArray = map.split('').map((val, idx) => {
    if (idx % 2 === 0) {
      return Array(parseInt(val)).fill(idx / 2)
    } else {
      return Array(parseInt(val)).fill('.')
    }
  }).flat().map(String);

  let number = null
  let size = 0
  let numIdx = null
  for (let i = idArray.length -1; i >= 0; i--) {
    if (!number) {
      number = idArray[i]
    }
    if (number && number === idArray[i]) {
      size++
    }
    if (number !== idArray[i-1]) {
      numIdx = i
    }
    if (numIdx) {
      let spaceIdx = null
      let spaceSize = 0
      for (let j = 0; j < numIdx; j++) {        
        if (!spaceIdx && idArray[j] === '.') {
          spaceIdx = j
        }
        if (idArray[j] === '.') {
          spaceSize++
        }
        if (idArray[j+1] && idArray[j+1] !== '.') {
          // test
          if (spaceSize >= size) {
            for ( let x = 0; x < size; x++) {              
              idArray[spaceIdx + x] = number
              idArray[numIdx + x] = '.'
            }
            number = null
            size = 0
            numIdx = null
          } else {
            spaceIdx = null
            spaceSize = 0
          }
        }
      }
      number = null
      size = 0
      numIdx = null
    }
  }
  let sum = 0
  for (let i = 0; i < idArray.length; i++) {
    const result = idArray[i] === '.' ? 0 : i * parseInt(idArray[i])
    sum += result
  }

  return sum
}

console.log('Solution 1: ', solution1(input))
console.log('Soluution 2: ', solution2(input));
