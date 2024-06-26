/*
map
Syntax
const newArray = array.map(callback(element, index, array));

*/
//Example

//Create an array with the squares of the numbers:
const myNumber = [1, 4, 9, 16];

const squares = myNumber.map(number => number * number);

// console.log(squares); // Output: [1, 16, 81, 256]


const myNewNumber = [4.8,7,9,4,3,6]
const multiply = myNewNumber.map ((num)=>num+10)
// console.log (multiply)



/// channing 
const mychanningNumber = [4,8,7,9,4,3,6]
const channing = mychanningNumber
.map ( (num)=> num+10 )
.map ( (number) => number*5 )
.filter ((mynum)=>mynum >= 80)
console.log (channing )
