const fs = require('fs')

let input = fs.readFileSync('../inputs/day1.txt').toString();
let splitInput = input.split('\r\n');
console.log(splitInput);

for (let i = 0; i<splitInput.length; i++) {

}
let greatest = 0;
let actual = 0;
splitInput.forEach(number => {

    if (number != "") {
        console.log(number)        
        actual = actual + Number(number);
    } else {
        console.log(number)
        if (actual>greatest){
            greatest = actual;
        }
        actual = 0;
    }
})
console.log(greatest);


