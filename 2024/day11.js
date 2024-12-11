const stones = '3279 998884 1832781 517 8 18864 28 0'.split(' ').map(Number);

function solutions(stones, times) {
  const cache = new Map()

  function blink(rock, times) {
    const cacheKey = `${rock}-${times}`
    if (cache.has(cacheKey)) return cache.get(cacheKey)

    let result
    if (times === 0) {
      result = 1
    } else if (rock === 0) {
      result = blink(1, times - 1)
    } else if (rock.toString().length % 2 === 0) {
      const left = Number(rock.toString().substring(0, rock.toString().length / 2));
      const right = Number(rock.toString().substring(rock.toString().length / 2));
      result = blink(left, times - 1) + blink(right, times - 1)
    } else {
      result = blink(rock * 2024, times - 1)
    }

    cache.set(cacheKey, result)
    return result
  }

  return stones.reduce((total, rock) => total + blink(rock, times), 0)
}

console.log('Solution 1:', solutions(stones, 25));
console.log('Solution 2:', solutions(stones, 75));