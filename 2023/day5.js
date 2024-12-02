const fs = require('fs');

let input = fs.readFileSync('./inputs/day5.txt').toString();
let lines = input.split('\n');

const MAPS = [
  'seed-to-soil',
  'soil-to-fertilizer',
  'fertilizer-to-water',
  'water-to-light',
  'light-to-temperature',
  'temperature-to-humidity',
  'humidity-to-location'
]

function solution1(lines) {
  let map = {};
  function getIndexRange(start, end) {
    const startIndex = lines.findIndex(line => line.includes(start)) + 1;
    const endIndex = lines.findIndex(line => line.includes(end)) - 1;
    return lines.slice(startIndex, endIndex);
  }
  
  // get seed to soil
  const seedToSoilRange = getIndexRange(MAPS[0], MAPS[1]);
  seedToSoilRange.forEach(line => {
    const lineSplitted = line.split(' ');
    console.log('lineSplitted: ', lineSplitted);
    
    const soil = lineSplitted[0];
    const seed = lineSplitted[1];
    const length = lineSplitted[2];
    for ( let i = 0; i < length; i++ ) {     
      console.log(`${i}/${length}`);
       
      map[seed + i] = [soil + i];
    }

    return map
  });


}

console.log('Solution 1: ',solution1(lines));
