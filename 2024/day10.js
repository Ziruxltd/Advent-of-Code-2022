const fs = require('fs');
const input = fs.readFileSync('./inputs/day10.txt').toString().replace(/\r/g, '');
const map = input.split('\n').map(line => line.split('').map(Number));

function solution1(map) {
  let totalTrailScore = 0
  const startingNodes = findStartingNodes(map)

  for (let start of startingNodes) {
    let trailScore = 0
    let open = [start]
    let close = []

    while (open.length > 0) {
      const curr = open.pop()
      if (curr.value === 9) {
        if (!close.map(e => [e.y,e.x]).some(subitem => JSON.stringify(subitem) === JSON.stringify([curr.y,curr.x]))){
          trailScore++
        }
        
      } else {
        //check top
        if (map[curr.y - 1] && map[curr.y - 1][curr.x] === curr.value + 1) {
          open.push({
            y: curr.y - 1,
            x: curr.x,
            value: map[curr.y - 1][curr.x],
            parent: curr
          })
        }
        // check rigth
        if (map[curr.y][curr.x + 1] && map[curr.y][curr.x +1] === curr.value + 1) {
          open.push({
            y: curr.y,
            x: curr.x + 1,
            value: map[curr.y][curr.x + 1],
            parent: curr
          })
        }
        //check bot
        if (map[curr.y + 1] && map[curr.y + 1][curr.x] === curr.value + 1) {
          open.push({
            y: curr.y + 1,
            x: curr.x,
            value: map[curr.y + 1][curr.x],
            parent: curr
          })
        }
        //check left
        if (map[curr.y][curr.x - 1] && map[curr.y][curr.x - 1] === curr.value + 1) {
          open.push({
            y: curr.y,
            x: curr.x - 1,
            value: map[curr.y][curr.x - 1],
            parent: curr
          })
        }
      }
      close.push(curr)
    }
    totalTrailScore += trailScore
  }

  return totalTrailScore
}

function findStartingNodes(map) {
  const nodes = []
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++){
      if (map[y][x] === 0) {
        nodes.push({
          y: y,
          x: x,
          value: map[y][x],
          parent: null
        })
      }
    }
  }  
  return nodes
}

function solution2(map) {
  let totalTrailScore = 0
  const startingNodes = findStartingNodes(map)

  for (let start of startingNodes) {
    let trailScore = 0
    let open = [start]
    let close = []

    while (open.length > 0) {
      const curr = open.pop()
      if (curr.value === 9) {
        trailScore++        
      } else {
        //check top
        if (map[curr.y - 1] && map[curr.y - 1][curr.x] === curr.value + 1) {
          open.push({
            y: curr.y - 1,
            x: curr.x,
            value: map[curr.y - 1][curr.x],
            parent: curr
          })
        }
        // check rigth
        if (map[curr.y][curr.x + 1] && map[curr.y][curr.x +1] === curr.value + 1) {
          open.push({
            y: curr.y,
            x: curr.x + 1,
            value: map[curr.y][curr.x + 1],
            parent: curr
          })
        }
        //check bot
        if (map[curr.y + 1] && map[curr.y + 1][curr.x] === curr.value + 1) {
          open.push({
            y: curr.y + 1,
            x: curr.x,
            value: map[curr.y + 1][curr.x],
            parent: curr
          })
        }
        //check left
        if (map[curr.y][curr.x - 1] && map[curr.y][curr.x - 1] === curr.value + 1) {
          open.push({
            y: curr.y,
            x: curr.x - 1,
            value: map[curr.y][curr.x - 1],
            parent: curr
          })
        }
      }
      close.push(curr)
    }
    totalTrailScore += trailScore
  }

  return totalTrailScore
}

function findStartingNodes(map) {
  const nodes = []
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++){
      if (map[y][x] === 0) {
        nodes.push({
          y: y,
          x: x,
          value: map[y][x],
          parent: null
        })
      }
    }
  }  
  return nodes
}

const grid = [
  [8, 9, 0, 1, 0, 1, 2, 3],
  [7, 8, 1, 2, 1, 8, 7, 4],
  [8, 7, 4, 3, 0, 9, 6, 5],
  [9, 6, 5, 4, 9, 8, 7, 4],
  [4, 5, 6, 7, 8, 9, 0, 3],
  [3, 2, 0, 1, 9, 0, 1, 2],
  [0, 1, 3, 2, 9, 8, 0, 1],
  [1, 0, 4, 5, 6, 7, 3, 2]
];

console.log('Solution 1: ', solution1(map));
console.log('Solution 2: ', solution2(map))
