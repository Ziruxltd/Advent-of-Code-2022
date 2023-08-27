const fs = require('fs');
const { parse } = require('path');
const input = fs.readFileSync('./inputs/day7.txt').toString().split("\n");

const lines = input.map(line => line.replace("\r", ""));

function isComand(line) {
    if (line[0]==='$') {
        return true;
    }else{ return false;}
}

function isLs(line) {
    if (line.includes('ls')) {
        return true;
    }
}

function isDir(line) {
    if (line.includes('dir')) {
        return true;
    }
}



function solution1(lines){
    let paths = ['/'];
    let directoriesSiezes = {'/': 0};
    for (let i = 1; i < lines.length; i++) {
        if(isLs(lines[i])){
            for (i++; i<lines.length; i++) {
                const parts = lines[i].split(' ');
                if(parts[0] === '$'){
                    i--
                    break;
                }
                if(parts[0] !== 'dir'){
                    for (const path of paths){
                        directoriesSiezes[path] = (directoriesSiezes[path] || 0) + parseInt(parts[0]);
                    }
                }
            }
        } else {
            if(lines[i]=== 'cd ..') {
                paths.pop();
            } else {
                paths.push(lines[i].split(' ')[1]);
            }
        }
    }
    console.log(directoriesSiezes);
}

solution1(lines);