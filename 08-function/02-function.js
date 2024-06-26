
//////////// ///////////////  +++++++++++++         rest operator                /////////////////////////////////
//note : rest operator return value in the array form 

function shoppingCart (val1,val2,...num1) {
   return num1 
}
const finalValue = shoppingCart (200,300,400,500,700)

// console.log (finalValue)




//////                    function in the object 

const myObj ={
  username:"akash singh ",
  age :18
}

function user (anyObj){
     return ` wecome to this website ${anyObj.username},and your age is ${anyObj.user}`
}
const objectBasedFunction = user (myObj)
// console.log (objectBasedFunction)


function objectValue (user){
   return `${user.coure}, ${user.price}`
}
const myfun =objectValue({
   
    coure :"js in hindi",
    price :"free"

})
// console.log (myfun)





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
// console.log (finalArrayValue)


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