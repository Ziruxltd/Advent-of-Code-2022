const fs = require('fs')
let input = fs.readFileSync('./inputs/day6.txt').toString();

function solution1(input){
    count = 0;
    for (let i=0; i<input.length; i++){
        count++;
        if (i>3){
            if(input.slice(0,i).includes(input[i])){
                const lastFour = input.slice(i-3,i+1);
                if(!hasDuplicatedChars(lastFour)){
                    return count;
                }
            }
        }
    }
}

function hasDuplicatedChars(lastFour){
    let seen={};
    for(let char of lastFour){
        if(seen[char]){
            return true;
        }
        seen[char]=true;
    }
    return false;
}

function solution2(input){
    count = 0;
    for (let i=0; i<input.length; i++){
        count++;
        if (i>13){
            if(input.slice(0,i).includes(input[i])){
                const last = input.slice(i-13,i+1);
                if(!hasDuplicatedChars(last)){
                    return count;
                }
            }
        }
    }
}

 console.log(solution1(input));
 console.log(solution2(input));