
// accumulator
//The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

// currentValue
//The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].





const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial =
 array1.reduce
 (
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// console.log(sumWithInitial);
// Expected output: 10

//                    




// reduce

//Example
// Sum all the numbers in an array:
const numbersess = [1, 2, 3, 4, 5];

const sum = numbersess.reduce((accumulator, currentValue) => {
  // console.log (`accumulator:${accumulator},currentValue:${currentValue}`)
  return accumulator + currentValue
}, 0);

// console.log(sum); // Output: 15



const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

const calculateShoppingCart = shoppingCart.reduce((accumulator,currentValue)=>{
// console.log (`${accumulator},price:${currentValue.price}`)
  return accumulator + currentValue.price
},0)
// console.log (calculateShoppingCart)









// // Combined Example
//Here's an example combining filter, map, and reduce:
//Given an array of numbers, filter out the numbers greater than 10, square the remaining numbers, and then sum them all:


const numberst = [5, 12, 8, 130, 44];

const result = numberst
  .filter(number => number <= 10)        // Filter out numbers greater than 10
  .map(number => number * number)        // Square the remaining numbers
  .reduce((acc, current) => acc + current, 0); // Sum them all

  console.log (result)









/*
Summary
filter: Creates a new array with elements that pass a test.
map: Creates a new array with the results of applying a function to each element.
reduce:creates  Executes a function on each element, resulting in a single output value.
*/