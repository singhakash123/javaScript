
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
   
//   5) Equal to (==)
     // example 
     console.log(5 == 5);  // true
     console.log(5 == '5'); // true (type coercion)
     console.log(5 == 10); // false

//  6) Not equal to (!=)
     // example 
     console.log(5 != 10);  // true
     console.log(5 != '5'); // false (type coercion)
     console.log(5 != 5);   // false

// 7) Strict equal to (===)
      // exapmple 
      console.log(5 === 5);   // true
      console.log(5 === '5'); // false (no type coercion)
      console.log(5 === 10);  // false

// 8)  Strict not equal to (!==)
      // example 
      console.log(5 !== 10);  // true
      console.log(5 !== '5'); // true (no type coercion)
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
console.log(a > b && b > c);   // false
console.log(a < b && b > c);   // true

// Logical OR operator
console.log(a > b || b > c);   // true
console.log(a < b || b < c);   // true
console.log(a > b || b < c);   // false

// Combined logical operators
console.log((a > b && b > c) || (a < b && b > c)); // true
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
