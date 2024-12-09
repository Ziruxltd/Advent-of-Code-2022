const fs = require('fs');
const input = fs.readFileSync('./inputs/day6.txt').toString().replace(/\r/g, '');
const lines = input.split('\n').map(line=> line.split(''));

function solution1(map) {
  let guard = null
  const actions = {
    'v' : (y,x) => {return [y+1,x]},
    '<' : (y,x) => {return [y,x-1]},
    '^' : (y,x) => {return [y-1,x]},
    '>' : (y,x) => {return [y,x+1]}
  }
  map.forEach((line,y) => {    
    line.forEach((__,x)=>{
      if (Object.keys(actions).includes(__)) {
        guard = {
          position : [y,x],
          direction : __,
          nextPosition: actions[__](y,x)
        }
      }
    })
  })
  while (true){
    //check if next step is goal 
    if (guard.nextPosition[0] < 0
      || guard.nextPosition[0] > map.length -1
      || guard.nextPosition[1] < 0
      || guard.nextPosition[1] > map[0].length - 1) {
        break
    }
    //check if next position has object        
    if (map[guard.nextPosition[0]][guard.nextPosition[1]] === '#'){
      const directions = Object.keys(actions)  
      const newDirection = (directions.indexOf(guard.direction) === directions.length -1) 
      ? directions[0]
      : directions[directions.indexOf(guard.direction) + 1]
      guard.direction = newDirection
      guard.nextPosition = actions[guard.direction](guard.position[0],guard.position[1])
      continue
    }

    //update the guard & move the guard
    map[guard.nextPosition[0]][guard.nextPosition[1]] = guard.direction
    map[guard.position[0]][guard.position[1]] = 'X'
    
    guard.position = guard.nextPosition  
    guard.nextPosition = actions[guard.direction](guard.position[0],guard.position[1])
  }
  console.log('----------------------------------');
  console.log(map.map(row => row.join('')).join('\n'));

  return map.reduce((places,line) => places + line.reduce((x,current) => current === 'X' ? x + 1 : x + 0, 0), 0) + 1
}

function solution2 (map) {
  let guard = null
  const actions = {
    'v' : (y,x) => {return [y+1,x]},
    '<' : (y,x) => {return [y,x-1]},
    '^' : (y,x) => {return [y-1,x]},
    '>' : (y,x) => {return [y,x+1]}
  }
  map.forEach((line,y) => {    
    line.forEach((__,x)=>{
      if (Object.keys(actions).includes(__)) {
        guard = {
          position : [y,x],
          direction : __,
          nextPosition: actions[__](y,x)
        }
      }
    })
  })
  while (true){
    //check if next step is goal 
    if (guard.nextPosition[0] < 0
      || guard.nextPosition[0] > map.length -1
      || guard.nextPosition[1] < 0
      || guard.nextPosition[1] > map[0].length - 1) {
        break
    }
    //check if next position has object        
    if (map[guard.nextPosition[0]][guard.nextPosition[1]] === '#'){
      const directions = Object.keys(actions)  
      const newDirection = (directions.indexOf(guard.direction) === directions.length -1) 
      ? directions[0]
      : directions[directions.indexOf(guard.direction) + 1]
      guard.direction = newDirection
      guard.nextPosition = actions[guard.direction](guard.position[0],guard.position[1])
      continue
    }

    //update the guard & move the guard
    map[guard.nextPosition[0]][guard.nextPosition[1]] = guard.direction
    map[guard.position[0]][guard.position[1]] = 'X'
    guard.position = guard.nextPosition  
    guard.nextPosition = actions[guard.direction](guard.position[0],guard.position[1])
  }
  console.log('----------------------------------');
  console.log(map.map(row => row.join('')).join('\n'));

  return map.reduce((places,line) => places + line.reduce((x,current) => current === 'X' ? x + 1 : x + 0, 0), 0) + 1
}

const grid = [
  [".", ".", ".", ".", "#", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "#", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "#", ".", ".", "^", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
  ["#", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
];

// console.log('Solution 1: ', solution1(lines))
console.log('Solution 2: ', solution2(grid))
