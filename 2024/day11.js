const stones = '3279 998884 1832781 517 8 18864 28 0'.split(' ');
// const stones = '125 17'.split(' ');

function solutions(stones, times) {
  let rocks = [...stones];

  for (let i = 0; i < times; i++) {
    for (let j = 0; j < rocks.length; j++) {
      if (rocks[j] === '0') {
        rocks[j] = '1';
      } else if (rocks[j].length % 2 === 0) {
        const digits = rocks[j].length / 2;
        const left = rocks[j].slice(0, digits);
        let right = Number(rocks[j].slice(digits)).toString();

        rocks.splice(j, 1, left, right);
        j++; // Skip the next element since it's already processed
      } else {
        const result = Number(rocks[j]) * 2024;
        rocks[j] = result.toString();
      }
    }
    console.log('Loop:', i, 'rocks length:', rocks.length);
  }
  return rocks.length;
}

console.log('Solution 1:', solutions(stones, 25));
console.log('Solution 2:', solutions(stones, 75));