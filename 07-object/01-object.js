// singletion 
 // object.create 


// object literal 
const mySym =Symbol("key1")
const jsUser = {
  name : "akash singh chauhan",
  "sirname":"chauhan",
  [mySym]:"key1",
  age :28,
 location:"jaipur",
 email:"akashlife2004@gmail.com",
 isLoggedIn:false,
 lastLoggedInDay :["monday,tuesday,wednesday,thursda"]
}

// console.log (jsUser.email)
// console.log (jsUser["email"])
// console.log (jsUser["sirname"])
// console.log (jsUser[mySym])

// jsUser.email="akashlife2004@gmail.com"
// Object.freeze(jsUser)
// jsUser.email="rohitlife2004@gmail.com"

// console.log (jsUser)

jsUser.greetingOne = function (){
  console.log ('hello js user')
}
jsUser.greetingTwo = function (){
  console.log (`hello js user ${this.name},what is your email ${this.email}`)
}
jsUser.greetingOne()
jsUser.greetingTwo()