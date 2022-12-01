const fs = require('fs')

let input = fs.readFileSync('../inputs/day1.txt').toString();
let splitInput = input.split('\r\n');

for (let i = 0; i<splitInput.length; i++) {

}
let first = 0;
let second = 0;
let third = 0 ;

let actual = 0;
splitInput.forEach(number => {

    if (number != "") {       
        actual = actual + Number(number);
    } else {
        if (actual>first){
            if (first>second){
                third = second;
                second = first;
            }
            first = actual;
        } else if (actual > second ){
            if (second>third){
                third = second;
            }
            second = actual;
        } else if (actual > third) {
            third = actual
        }
        actual = 0;
    }
})
console.log(first);
console.log(second);
console.log(third);

console.log(first+second+third)
