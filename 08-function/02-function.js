
//////////// ///////////////  +++++++++++++         rest operator // Rest parameters               /////////////////////////////////
//note : rest operator return value in the array form 
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
// Syntax  
   /*
  function f(a, b, ...theArgs) {
  // …
}
 */
/*
here are some additional syntax restrictions:

A function definition can only have one rest parameter.
The rest parameter must be the last parameter in the function definition.
Trailing commas are not allowed after the rest parameter.
The rest parameter cannot have a default value.

*/
function shoppingCart (num2,num3,...num1) {
   return num1 
}
const finalValue = shoppingCart (200,300,400,500,700)

console.log (finalValue)
// JavaScript Demo: Functions Rest Parameters
function sum(...theArgs) {
   let total = 0;
   for (const arg of theArgs) {
     total += arg;
   }
   return total;
 }
 
 console.log(sum(1, 2, 3));
 // Expected output: 6
 
 console.log(sum(1, 2, 3, 4));
 // Expected output: 10
 


////// /////////////////////////////////////////////////////////////////////////////////function in the object ////////////////////////////////

const myObj ={
  username:"akash singh ",
  age :18
}
myObj.age = 32
function user (anyObj){
     return ` wecome to this website ${anyObj.username},and your age is ${anyObj.age}`
}
const objectBasedFunction = user (myObj)
console.log (objectBasedFunction)

//////////////////////////////////////////////////////////////////////when you have declare object as a parameter ///////////////////

function objectValue (user){
   return `${user.coure}, ${user.price}`
}
const myfun =objectValue({
                          coure :"js in hindi",
                          price :"free"})

console.log (myfun)





const jsUser = {
  name : "akash singh chauhan",
  "sirname":"chauhan",
  age :28,
 location:"jaipur",
 email:"akashlife2004@gmail.com",
 isLoggedIn:false,
 lastLoggedInDay :["monday,tuesday,wednesday,thursda"]
}

jsUser.greetingOne = function (){
  return  (`welcome js user ${this.name},${this.age}`)
}
const userOfObject =jsUser.greetingOne()
console.log (userOfObject)







///  array in object 
const myArray =[200,30,400]

function findArrayValue (getArray){
   return getArray[2]
}
const finalArrayValue = findArrayValue(myArray)
console.log (finalArrayValue)


function findFirstArrayValue (getArray){
  return getArray[2]
}
const final = findFirstArrayValue([
   200,
   300,
   400,
   500
])
console.log (final)