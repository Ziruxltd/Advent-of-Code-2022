const fs = require('fs');
const input = fs.readFileSync('./inputs/day12.txt').toString().replace(/\r/g, '');
const grid = input.split('\n').map(e => e.split(''))

const gridData = [
  'RRRRIICCFF',
  'RRRRIICCCF',
  'VVRRRCCFFF',
  'VVRCCCJFFF',
  'VVVVCJJCFE',
  'VVIVCCJJEE',
  'VVIIICJJEE',
  'MIIIIIJJEE',
  'MIIISIJEEE',
  'MMMISSJEEE'
].map(e => e.split(''))
/**
 * data structure
 * const 'L-Y-X' = {
 *  regionId = 1,
 *  y = 1,
 *  x = 3
 * }
 */
function createNode (side, parent) {
  const y = side === 'top' ? parent.y-1 : side === 'bot' ? parent.y+1 : parent.y
  const x = side === 'right' ? parent.x+1 : side === 'left' ? parent.x-1 : parent.x
  return {
    plant: parent.plant,
    y: y,
    x: x,
    parent, parent,
    key: `${parent.plant}-${y}-${x}`
  }
}
function solution1 (grid) {
  const plants = new Map()
  let cost = 0

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      let perimeter = 0
      const key = `${grid[y][x]}-${y}-${x}`

      if (plants.has(key)) continue
      
      plants.set(key, {
        plant: grid[y][x],
        y: y,
        x: x,
        parent: null,
        key: key
      })

      let open = [plants.get(key)]
      let closed = []
      while (open.length) {
        const current = open.pop()
        let sides = 4
        closed.push(current)

        //check top
        if(grid[current.y-1]) {
          if (grid[current.y-1][current.x] === current.plant) {
            sides--
            const topKey = `${current.plant}-${current.y-1}-${current.x}`
            if(!open.map(e=>e.key).includes(topKey) && !closed.map(e=>e.key).includes(topKey)) {
              const node = createNode('top', current)
              open.push(node)
              plants.set(topKey, node)
            }
          }
        }
        //check right
        if(grid[current.y][current.x+1]) {
          if (grid[current.y][current.x+1] === current.plant) {
            sides--
            const rightKey = `${current.plant}-${current.y}-${current.x+1}`
            if(!open.map(e=>e.key).includes(rightKey) && !closed.map(e=>e.key).includes(rightKey)) {
              const node = createNode('right', current)
              open.push(node)
              plants.set(rightKey, node)
            }
          }
        }
        //check bot
        if(grid[current.y+1]) {
          if (grid[current.y+1][current.x] === current.plant) {
            sides--
            const botKey = `${current.plant}-${current.y+1}-${current.x}`
            if(!open.map(e=>e.key).includes(botKey) && !closed.map(e=>e.key).includes(botKey)) {
              const node = createNode('bot', current)
              open.push(node)
              plants.set(botKey, node)
            }
          }
        }
        //check left
        if(grid[current.y][current.x-1]) {
          if (grid[current.y][current.x-1] === current.plant) {
            sides--
            const leftKey = `${current.plant}-${current.y}-${current.x-1}`
            if(!open.map(e=>e.key).includes(leftKey) && !closed.map(e=>e.key).includes(leftKey)) {
              const node = createNode('left', current)
              open.push(node)
              plants.set(leftKey, node)
            }
          }
        }
        
        perimeter += sides
      }
      cost += perimeter * closed.length
    }
  }

  return cost
}

console.log('Solution 1: ', solution1(grid))