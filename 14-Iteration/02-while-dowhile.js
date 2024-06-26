/*
while Loop
The while loop checks the condition before executing the loop's code. If the condition is true, the code block runs. This process repeats until the condition becomes false.

Syntax

while (condition) {
  // Code to be executed
}
*/


// Example
//  Print numbers from 1 to 5 using a while loop:

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// Output:
// 1
// 2
// 3
// 4
// 5

// explation of this code In this example, the loop continues to execute as long as i is less than or equal to 5. The condition i <= 5 is checked before each iteration.


/*
do...while Loop
The do...while loop executes the code block once before checking the condition. After the first execution, it checks the condition. If the condition is true, the code block runs again. This process repeats until the condition becomes false.

Syntax
do {
  // Code to be executed
} while (condition);


*/
//Example
//Print numbers from 1 to 5 using a do...while loop:
let j = 1;

do {
  console.log(i);
  j++;
} while (j <= 5);

// Output:
// 1
// 2
// 3
// 4
// 5
// In this example, the loop executes the code block once before checking j <= 5. The loop then continues to execute as long as the condition is true.


/*
Key Differences
Condition Check:
while: Checks the condition before executing the code block.
do...while: Executes the code block once before checking the condition.
*/