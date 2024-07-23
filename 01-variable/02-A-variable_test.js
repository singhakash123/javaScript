var number = 33
//console.log(number);

let sirName = "chauhan"
// console.log(sirName);

const isLOggedIn = true 
// console.log(isLOggedIn);

let accountNumber = 47574848
//console.log(typeof (accountNumber));

let accountId = "eiyreiudsbu"
//console.log(typeof accountId)

let userIsLoggedIn = true ;
//console.log(userIsLoggedIn);

let userObject ={
  username : "akash singh chauhan",
  lastLoggedIn : ["monday","tuesday"],
  userId :"j0909jda90"
  
}
//console.log(typeof (userObject));
//console.log(userObject.lastLoggedIn[1]);

let username = "akash singh chauhan"
 //console.log(username);

 username = "rohit singh chauhan"
 //console.log(username);

 const name = "akash singh chauhan"
    //console.log(name);
//name = "javascript is best class" //Assignment to constant variable.


//  
let numbers = 33
  console.log(typeof (numbers));
  console.log(numbers);


let strings = "akash singh chauhan"
  console.log(typeof (strings));
  console.log(strings);

let userLoggedIn = true 
     console.log(typeof (userLoggedIn));
     console.log(userLoggedIn);

let user ;
   console.log(typeof (user));
   console.log(user);
let newUser = undefined
    console.log(newUser);
    console.log(typeof (newUser));

let value = null 
    console.log (value)
     console.log (typeof value) // object 

let bigNumber = 41348974319817487901261237982118275n
   console.log(typeof bigNumber);
   console.log(bigNumber);

let mySym = Symbol (431874318)
   console.log(typeof mySym);
   console.log(mySym);

let myFun = function () {
  console.log("akash singh chauhan");
}

myFun ()
console.log(typeof myFun);

let myObj ={
  firstName:"akash singh",
  lastName : "chauhan"
}
console.log( typeof myObj);
console.log(myObj.lastName);

let myArr = ["akash","singh",457,true,null,undefined]
  console.log(typeof (myArr)); // object
  console.log(myArr);



// 
let userId = 43983;
userId = 2987380;
console.log(userId); 
console.log(userId); 

const userName = "akash"
  //  /userName = "rohit"
console.log(userName);

// Let reassignment demo
let letVariable = 10;
console.log("Initial value of letVariable:", letVariable); // Output: 10

letVariable = 20;
console.log("Value of letVariable after reassignment:", letVariable); // Output: 20

// Const reassignment demo
const constVariable = 30;
console.log("Initial value of constVariable:", constVariable); // Output: 30

try {
  constVariable = 40; // This will throw an error
  console.log("Value of constVariable after reassignment:", constVariable);
} catch (error) {
  console.error("Error:", error.message); // Output: Error: Assignment to constant variable.
}

console.log("Final value of constVariable:", constVariable); // Output: 30