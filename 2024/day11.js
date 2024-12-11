const stones = '3279 998884 1832781 517 8 18864 28 0'.split(' ');
// const stones = '125 17'.split(' ');

function solutions(stones, times, chunkSize = 1000) {
  let rocks = [...stones];

  for (let i = 0; i < times; i++) {
    let newRocks = [];
    for (let j = 0; j < rocks.length; j += chunkSize) {
      let chunk = rocks.slice(j, j + chunkSize);
      let newChunk = processChunk(chunk);
      newRocks = newRocks.concat(newChunk);
    }
    rocks = newRocks;
    console.log('Loop:', i, 'rocks length:', rocks.length);
  }
  return rocks.length;
}

function processChunk(chunk) {
  let newChunk = [];
  for (let j = 0; j < chunk.length; j++) {
    if (chunk[j] === '0') {
      newChunk.push('1');
    } else if (chunk[j].length % 2 === 0) {
      const digits = chunk[j].length / 2;
      const left = chunk[j].slice(0, digits);
      let right = Number(chunk[j].slice(digits)).toString();

      newChunk.push(left);
      newChunk.push(right);
    } else {
      const result = Number(chunk[j]) * 2024;
      newChunk.push(result.toString());
    }
  }
  return newChunk;
}

// console.log('Solution 1:', solutions(stones, 25));
console.log('Solution 2:', solutions(stones, 75));