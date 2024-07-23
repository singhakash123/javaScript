//  for Loop Syntax  

/*
for (initialization; condition; increment) {
  // Code to be executed
}

initialization: Sets up a variable to start the loop (usually a counter).

condition: The loop runs as long as this condition is true.

increment: Changes the counter variable after each loop iteration.

Step-by-Step Breakdown
Initialization: The loop starts with this step. It runs only once at the beginning.

Condition: Before each iteration, the loop checks this condition. If it's true, the loop executes the block of code. If it's false, the loop stops.

Code Block: The code inside the curly braces {} runs as long as the condition is true.

Increment: After executing the code block, the loop performs this step, then checks the condition again.


*/

//Simple Example
 // Let's look at an example where we print numbers from 1 to 5.
 for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Output: // 1
           // 2
           // 3
           // 4
           // 5
// explation of this code 
/*

Initialization: let i = 1 sets the counter i to 1.
Condition: i <= 5 means the loop will run as long as i is less than or equal to 5.
Code Block: console.log(i) prints the current value of i.
Increment: i++ increases the value of i by 1 after each iteration.

*/

// Looping Through an Array
// Here's an example of using a for loop to iterate over an array.

const fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Output:
// apple
// banana
// cherry

 // explation of this code 
/*
Initialization: let i = 0 sets the counter i to 0 (the first i of the array).
Condition: i < fruits.length means the loop will run as long as i is less than the length of the fruits array.
Code Block: console.log(fruits[i]) prints the current element in the array.
Increment: i++ increases the value of i by 1 after each iteration.

*/


// Nested for Loop
// use nested for loops to handle more complex structures like multi-dimensional arrays.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log (matrix.length)
for (let i = 0; i < matrix.length; i++) {
  console.log (matrix[i])
   for (let j = 0; j < matrix[i].length; j++) {
      console.log (matrix[j])
     console.log(matrix[i][j]);
 }
 }

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// explation of this code 
/*
The outer loop (for (let i = 0; i < matrix.length; i++)) iterates over the rows of the matrix.
The inner loop (for (let j = 0; j < matrix[i].length; j++)) iterates over the elements of each row.
*/

////////////////////////////////////////////     Breaking and Continuing   /////////////////////////////////////////////// 

// Breaking: You can use break to exit the loop early.
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log ('5 is best number ')
    break;
  }
  console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5 is best number 



// Continuing: You can use continue to skip the current iteration and move to the next one.

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log ('forgive me at the 3')
    continue;
  }
  console.log(i);
}

// Output:
// 1
// 2
// forgive me at the three 
// 4
// 5




//// summary for loop 

/*
Initialization: Set up a starting point.
Condition: Define how long the loop should run.
Code Block: Execute some code for each iteration.
Increment: Update the counter to eventually meet the condition.

*/


for (let l = 1; l < 10; l++) {
    // console.log(`outer loop is ${l}`)
  for (let m = 1; m < 10; m++) {
    //console.log(`${l} * ${m} = ${l*m}`)
  }
}





