  //   +++++++++++++++++++++  arithmetic operator ++++++++++++++++++++++++++
   let firstNum = 10 
   let lastNum = 5 


console.log (10+5)
console.log(10-5);
console.log(10*5);
console.log(9/5);   //Division // 1.8
console.log(9%5);  //Modulus // remander 4
/*
Division (/): The division operator divides the number before it by the number after it. For example: 10 / 2 would result in 5.
Modulus (%): The modulus operator returns the remainder of the division of the number before it by the number after it. For example: 10 % 3 would result in 1, because 10 divided by 3 leaves a remainder of 1.
*/

// ++++++++++    use the += operator to add a number to the variable and log the result of console log

let x = 10;
x += 5; // equivalent to x = x + 5;
console.log(x); // output: 15
/*In this example, the += operator is used to add 5 to the value of x. The result is stored back in x, and then logged to the console using console.log.

The += operator is called the Addition Assignment operator. It's a shorthand way of adding a value to a variable and assigning the result back to the variable.*/
/*
Here's a breakdown of what happens:

x is initially set to 10.
x += 5 is equivalent to x = x + 5, which means "add 5 to the current value of x and store the result back in x".
The result of the addition is 15, which is stored in x.
console.log(x) logs the new value of x to the console, which is 15.
Note that the += operator can be used with other operators as well, such as -= for subtraction, *= for multiplication, /= for division, and so on.


*/

// use the -= operator to substract a number to the variable and log the result of console log
let y = 10;
y -= 3; // equivalent to y = y - 3;
console.log(y); // output: 7
 /*
In this example, x is initially set to 10. Then, x -= 3 subtracts 3 from x, resulting in x being set to 7. Finally, console.log(x) logs the new value of x to the console, which is 7.
 */

/*
Here's a step-by-step breakdown:

x is set to 10.
x -= 3 is equivalent to x = x - 3, which subtracts 3 from x.
x becomes 10 - 3 = 7.
console.log(x) logs the new value of x to the console, which is 7.

*/





//////////////////////////////// comparision operator /////////////////////////////////
  let comapre = 10
  let compareB= 20

  console.log(comapre > compareB); // false 
  console.log(comapre < compareB); // true 
  console.log(comapre >= compareB); // false
  console.log(comapre <= compareB); // true
  console.log(comapre == compareB); // false // value only not type 
  console.log(comapre === compareB); // false // value and type both

let a = 10 ;
let b = "10"
console.log(a==b); // true 
console.log(a === b); // false 

// if  
let userLoggedIn = true 
let userLoggedOut = true 
let userFind = false 

// &&  (and operator)// all condition should be true 
if (userLoggedIn && userLoggedOut) {
  console.log ('well done man ')
} else {
  console.log('you missed man');
}

// || (or operator ) // one condition should be true 
if (userLoggedIn || userLoggedOut || userFind) {
  
  console.log('welcome back');
} else {
  console.log('not welcome');
}

// ! ( logical NOT operator.)

let z = true;
z =!z; // equivalent to z = not z;
console.log(z); // output: false

/*

In this example, x is initially set to true. Then, x =!x applies the logical NOT operator to x, which flips its value to false. Finally, console.log(x) logs the new value of x to the console, which is false.

Here's a step-by-step breakdown:

x is set to true.
x =!x applies the logical NOT operator to x, which flips its value.
x becomes !true, which is false.
console.log(x) logs the new value of x to the console, which is false.
So, the output of console.log(x) will be false.


*/

let n = 5;
if (!(n > 10)) {
  console.log("n is less than or equal to 10");
} else {
  console.log("n is greater than 10");
}

/*
In this example, the conditional statement !(x > 10) uses the logical NOT operator to negate the result of the comparison x > 10.

Here's a step-by-step breakdown:

x > 10 evaluates to false, because 5 is not greater than 10.
The logical NOT operator ! negates the result, making it true.
The if statement evaluates the condition !(x > 10), which is true.
The code inside the if block is executed, logging "x is less than or equal to 10" to the console.
So, the output of the code will be:x is less than or equal to 10

*/


//////////////////////////////////   ternaray operator /////////////////////////////
/*
The ternary operator, also known as the conditional operator, is a concise way to write a simple if-else statement in a single line of code. It's a shorthand for a conditional expression that evaluates to one of two values based on a boolean condition.
*/
// The syntax for the ternary operator is:  
       //  condition ? true_value : false_value

// Here's an example:
let m = 5;
let result = m > 10 ? "m is greater than 10" : "m is less than or equal to 10";
console.log(result); // output: "x is less than or equal to 10"

let isAdmin = true;
let message = isAdmin ? "You are an admin" : "You are not an admin";
console.log(message); // output: "You are an admin"

let score = 80;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade); // output: "B"

let d = 5;
let result01 = d > 10 ? 10 : d;
console.log(result01); // output: 5


// write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console

// JavaScript
let num = 5; // change this to any number you want to test

let result02 = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";

console.log(`The number ${num} is ${result02}.`);
/*
This program uses the ternary operator to evaluate the sign of the num variable. Here's how it works:

The ternary operator checks if num is greater than 0. If true, it returns the string "Positive".
If num is not greater than 0, the ternary operator checks if num is less than 0. If true, it returns the string "Negative".
If num is neither greater than 0 nor less than 0, it must be equal to 0, so the ternary operator returns the string "Zero".
The console.log statement logs a message to the console indicating the sign of the num variable.


*/


/// arithmetic operator 
// JavaScript
let num1 = 10;
let num2 = 3;

// Addition
let result05 = num1 + num2;
console.log(`The result of ${num1} + ${num2} is ${result05}.`);

// Subtraction
result05 = num1 - num2;
console.log(`The result of ${num1} - ${num2} is ${result05}.`);

// Multiplication
result05 = num1 * num2;
console.log(`The result of ${num1} * ${num2} is ${result05}.`);

// Division
result05 = num1 / num2;
console.log(`The result of ${num1} / ${num2} is ${result05}.`);

// Modulus (Remainder)
result05 = num1 % num2;
console.log(`The result of ${num1} % ${num2} is ${result05}.`);

// Exponentiation
result05 = num1 ** num2;
console.log(`The result of ${num1} ** ${num2} is ${result05}.`);






// comparision operator 
  /*
  This script uses the following comparison operators:

== (Equal)
!= (Not Equal)
> (Greater Than)
< (Less Than)
>= (Greater Than or Equal)
<= (Less Than or Equal)
It also combines conditions using logical operators:

&& (And)
|| (Or)
! (Not)
The results of each comparison and logical operation are logged to the console using console.log
  
  */
let number01 = 10
let number02 = 5

// Equal (==)
let result09 = number01 == num2;
console.log(`Is ${num1} equal to ${num2}? ${result09}`);

// Not Equal (!=)
result09 = number01 != number02;
console.log(`Is ${number01} not equal to ${number02}? ${result09}`);

// Greater Than (>)
result09 = number01 > number02;
console.log(`Is ${number02} greater than ${number02}? ${result09}`);

// Less Than (<)
result09 = number01 < number02;
console.log(`Is ${number01} less than ${number02}? ${result09}`);

// Greater Than or Equal (>=)
result09 = number01 >= number02;
console.log(`Is ${number01} greater than or equal to ${number02}? ${result09}`);

// Less Than or Equal (<=)
result09 = number01 <= number02;
console.log(`Is ${number01} less than or equal to ${number02}? ${result09}`);

// Combining conditions using logical operators
// && (And)
result09 = number01 > number02&& number01 < 15;
console.log(`Is ${number01} greater than ${number02} and less than 15? ${result09}`);

// || (Or)
result09 = number01 > number02 || number01 < 5;
console.log(`Is ${number01} greater than ${number02} or less than 5? ${result09}`);

// ! (Not)
result09 = !(number01 == number02);
console.log(`Is ${number01} not equal to ${number02}? ${result09}`);