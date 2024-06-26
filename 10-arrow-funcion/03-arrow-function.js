// arrow function have two syntax first Explicit return and second is Implicit return 

// Explicit return suytax 

// ()=>{
//     return
// }

//Example of Explicit Return
const add = (a, b) => {
    const result = a + b;
    return result;
};
console.log(add(2, 3)); // Output: 5


//syntax of implicit return 
// ()=>()

//Example of Implicit Return
const add01 = (a, b) => (a + b);
console.log(add01(2, 3)); // Output: 5





// arrow function doesnt allow to use this keyword 


// const addTwo = (num1,num2)=>{
//   return num1 + num2 
// }
//  console.log (addTwo (5,7))


 // implecit return 

//  const addTwo = (num1 , num2 ) =>  num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = ()=> ({username:"akash singh chauhan"})

 console.log (addTwo (7,7)) 


 // uses in the array 
//  const myArray = [1,2,4,6,7]
//  myArray.forEach ( ()=> ())