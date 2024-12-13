const fs = require('fs');
const input = fs.readFileSync('./inputs/day12.txt').toString().replace(/\r/g, '');
const grid = input.split('\n').map(e => e.split(''))

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

function getCorners (currentPlant, neighbours, grid) {
  let corners = 0
  if (neighbours.length === 0) {
    corners = 4
  } else if (neighbours.length === 1) {
    corners = 2
  } else if (neighbours.length === 2) {
    if (neighbours[0].y === neighbours[1].y || neighbours[0].x === neighbours[1].x) {
      corners = 0
    } else {
      const xInterior = neighbours[0].x + neighbours[1].x - currentPlant.x
      const yInterior = neighbours[0].y + neighbours[1].y - currentPlant.y
      if (grid[yInterior][xInterior] === currentPlant.plant) {
        corners = 1
      } else {
        corners = 2
      }
    }
  } else if (neighbours.length === 3) {
    const firstCorner = neighbours[0].x !== neighbours[1].x 
      ? [neighbours[0].x + neighbours[1].x - currentPlant.x, neighbours[0].y + neighbours[1].y - currentPlant.y]
      : false
    const secondCorner = neighbours[1].y !== neighbours[2].y
      ? [neighbours[1].x + neighbours[2].x - currentPlant.x, neighbours[1].y + neighbours[2].y - currentPlant.y]
      : false
    const thirdCorner = neighbours[2].x !== neighbours[0].x
      ? [neighbours[2].x + neighbours[0].x - currentPlant.x, neighbours[2].y + neighbours[0].y - currentPlant.y]
      : false
    if (firstCorner && grid[firstCorner[1]][firstCorner[0]] !== currentPlant.plant) corners++
    if (secondCorner && grid[secondCorner[1]][secondCorner[0]] !== currentPlant.plant) corners++
    if (thirdCorner && grid[thirdCorner[1]][thirdCorner[0]] !== currentPlant.plant) corners++
  } else if (neighbours.length === 4) {
    if (grid[currentPlant.y-1][currentPlant.x-1] !== currentPlant.plant) corners++
    if (grid[currentPlant.y-1][currentPlant.x+1] !== currentPlant.plant) corners++
    if (grid[currentPlant.y+1][currentPlant.x-1] !== currentPlant.plant) corners++
    if (grid[currentPlant.y+1][currentPlant.x+1] !== currentPlant.plant) corners++
  }
  return corners
}

function solution1 (grid) {
  const plants = new Map()
  let cost = 0
  let secondCost = 0

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
      let corners = 0
      while (open.length) {
        let neighbours = []
        const current = open.pop()
        let sides = 4
        closed.push(current)

        //check top
        if(grid[current.y-1]) {
          if (grid[current.y-1][current.x] === current.plant) {
            sides--
            const topKey = `${current.plant}-${current.y-1}-${current.x}`
            const node = createNode('top', current)
            neighbours.push(node)
            if(!open.map(e=>e.key).includes(topKey) && !closed.map(e=>e.key).includes(topKey)) {
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
            const node = createNode('right', current)
            neighbours.push(node)
            if(!open.map(e=>e.key).includes(rightKey) && !closed.map(e=>e.key).includes(rightKey)) {
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
            const node = createNode('bot', current)
            neighbours.push(node)
            if(!open.map(e=>e.key).includes(botKey) && !closed.map(e=>e.key).includes(botKey)) {
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
            const node = createNode('left', current)
            neighbours.push(node)
            if(!open.map(e=>e.key).includes(leftKey) && !closed.map(e=>e.key).includes(leftKey)) {
              open.push(node)
              plants.set(leftKey, node)
            }
          }
        }
        
        perimeter += sides
        corners += getCorners(current, neighbours, grid)
      }
      cost += perimeter * closed.length
      secondCost += corners * closed.length
    }
  }

  console.log('Solution 1: ', cost);
  console.log('Solution 2: ', secondCost);
}


const tinyGrid = [
  ['X', 'A', 'X'],
  ['A', 'A', 'A'],
  ['X', 'X', 'X']

]
solution1(grid)