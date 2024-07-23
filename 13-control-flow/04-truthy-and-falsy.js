// Falsy Values:
       //The number 0: The numeric value zero (0) is considered falsy.
       //Empty strings: An empty string ("") evaluates to falsy.
      //null and undefined: Both null and undefined are considered falsy.
      //NaN: Not a Number (NaN) is considered falsy.
     //The boolean value false: The boolean value false itself is falsy.
     //-0 , bigint 0n , 
   
     // example : 
       if (0) {
            console.log("0 is truthy");  // No output, because 0 is falsy
       }
  
      if ("") {
           console.log("'' is truthy");  // No output, because an empty string is falsy
       }
  
       if (false) {
           console.log("false is truthy");  // No output, because false is falsy
       }
  
       if (null) {
            console.log("null is truthy");  // No output, because null is falsy
       }
  

// Truthy Values:
               // Non-zero numbers: Any non-zero numeric value (positive or negative) is considered truthy.
               // Non-empty strings: Any string with at least one character is considered truthy.
               // Arrays and Objects: Non-empty arrays and objects are considered truthy, even if they are empty.
               // The boolean value true: The boolean value true itself is obviously truthy
              // "false" , "0"  ,function(){} ,

              // example :
if (1) {
    console.log("1 is truthy");  // Output: "1 is truthy"
}

if ("hello") {
    console.log("'hello' is truthy");  // Output: "'hello' is truthy"
}

if (true) {
    console.log("true is truthy");  // Output: "true is truthy"
}
if ("false") {
    console.log("string false is truthy value"); // output : string false is truthy value
}
if ("0") {
  console.log('string zero is truthy value'); // output : string zero is truthy value 
}
if ({}) {
    console.log("{} is truthy");  // Output: "{} is truthy"
}



///   how to check condtion in array 
    // You can check if an array is empty by verifying its length:
const userArray =[]

if (userArray.length==0) {
  console.log ('array is empty')
} else {
  console.log ('correct your condition ')
}

// how to check condition for object 
const myObj = {}
if (Object.keys(myObj).length==0) {
  console.log ('your object is empty ')
} else {
  console.log ('correct your object')
}

//
console.log (false == 0) // true
console.log (false == '') // true 
console.log  (0 == '' ) // true 




/// Nullish coalescing operator (??) : null , undefined 

let val1 ;
// val1 = 5??10
val1 = null ?? 10 
val1 = null ?? 10 ?? 15
val1 = undefined ?? 20 
val1 = undefined ?? 20 ?? 25
console.log (val1)



// Conditional (ternary) operator (?)
// condition ? true : false ,
const iceTeaPrice = 100 
iceTeaPrice >= 80 ? console.log('less then 80'):console.log ('more then 80')