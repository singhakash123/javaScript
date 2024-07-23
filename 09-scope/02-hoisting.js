


console.log (addTwo (5))  // its allowed 
function addTwo (num){
 return num + 2
}


// ddThree (5) // you cant access before initialization // its not allowed 
const addThree = function (num){
 return num *2
}
console.log (addThree (5)) // you have to initialization then you can access 


// JavaScript Declarations are Hoisted
   // In JavaScript, a variable can be declared after it has been used.
   // In other words; a variable can be used before it has been declared


   console.log(a); // output : undefined not error 
   var a = 10
  
  console.log (b)  // b is not defined 
   