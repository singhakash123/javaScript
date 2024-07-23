
  //       comparison operator 

 // < , > ,<= ,>= ,== ,!= ,===,!== ,! , && ,||

 //     1 ) Less than (<)
    // example 
    console.log(5 < 10); // true
    console.log(10 < 5); // false
    console.log(5 < 5);  // false
    
 //     2) Greater than (>)
       // exapmle 
       console.log(10 > 5); // true
       console.log(5 > 10); // false
       console.log(5 > 5);  // false

//     3) Less than or equal to (<=)
      // example 
      console.log(5 <= 10); // true
      console.log(10 <= 5); // false
      console.log(5 <= 5);  // true

//    4) Greater than or equal to (>=)
   // exapmle 
   console.log(10 >= 5); // true
   console.log(5 >= 10); // false
   console.log(5 >= 5);  // true
   
//   5) Equal to //  (==)
     // example 
     console.log(5 == 5);  // true
     console.log(5 == '5'); // true (type coercion)
     console.log(5 == 10); // false

//  6) Not equal to (!=)
     // example 
     console.log(5 != 10);  // true
     console.log(5 != '5'); // false (type coercion) // it doesnt check data type // it check only the value  
     console.log(5 != 5);   // false // note : it doesnt check data type it check only value 

// 7) Strict equal to (===)
      // exapmple 
      console.log(5 === 5);   // true // note : tripel equal is known as strick equal it check data type and value // 
      console.log(5 === '5'); // false (no type coercion)
      console.log(5 === 10);  // false

// 8)  Strict not equal to (!==)
      // example 
      console.log(5 !== 10);  // true
      console.log(5 !== '5'); // true (no type coercion) // because strict not equal is strict check , it check both value and data tupe 
      console.log(5 !== 5);   // false

// 9) Logical NOT (!)
    // example 
    console.log(!true);  // false
    console.log(!false); // true
    console.log(!(5 > 10)); // true (5 is not greater than 10)
    
// 10 ) Logical AND (&&)
         // Both Operands should be  True: 
         // example 
         console.log(true && true);   // true
         console.log(5 > 2 && 3 < 4); // true (both expressions are true)

// 11) Logical OR (||)
       // one operands should be true 
      // expample 
     console.log(true || false);   // true
     console.log(5 > 2 || 3 > 4);  // true (first expression is true)


// all operator example in one shot 

let a = 5;
let b = 10;
let c = 0;

// Comparison operators 
console.log(a < b);    // true
console.log(a > b);    // false
console.log(a <= 5);   // true
console.log(b >= 5);   // true
console.log(a == c);   // false
console.log(a != b);   // true
console.log(a === 5);  // true
console.log(b !== 10); // false

// Logical NOT operator

console.log(!true);    // false
console.log(!false);   // true
console.log(!(a > b)); // true

// Logical AND operator 
    // both condition should be true 
console.log(a > b && b > c);   // false
console.log(a < b && b > c);   // true

// Logical OR operator
    // only one should be true 
console.log(a > b || b > c);   // true
console.log(a < b || b < c);   // true
console.log(a > b || b < c);   // false

// Combined logical operators
console.log((a > b && b > c) || (a < b && b > c) , "Akash singh chauhan"); // true
console.log(!(a > b) && (b > c));                 // true



//////////   Example with All Operators

// let a = 5;
// let b = 10;
// let c = '5';

// // Comparison Operators
// console.log(a < b);    // true
// console.log(b > a);    // true
// console.log(a <= 5);   // true
// console.log(b >= 5);   // true
// console.log(a == c);   // true (type coercion)
// console.log(a != b);   // true
// console.log(a === c);  // false (no type coercion)
// console.log(a !== b);  // true

// // Logical NOT Operator
// console.log(!true);    // false
// console.log(!false);   // true
// console.log(!(a > b)); // true (a is not greater than b)


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
