// singletion 
 // object.create 

// object have key and value pair ,
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

// how to access object properties 
                         // You can access the properties of these objects using dot notation or square bracket notation. For example:
console.log (jsUser.email)
console.log (jsUser["email"])
console.log (jsUser["sirname"])
console.log (jsUser[mySym])

// how to overwrite value of object 
jsUser.email="akashlife2004@gmail.com"
Object.freeze(jsUser)
jsUser.email="rohitlife2004@gmail.com"

console.log (jsUser)

jsUser.greetingOne = function (){
  console.log ('hello js user')
}
jsUser.greetingOne()

jsUser.greetingTwo = function (){
  console.log (`hello js user ${this.name},what is your email ${this.email}`)
}

jsUser.greetingTwo()

/////////////////////////////////////////////////// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
const jsUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  greetingTwo: function () {
    console.log(`hello js user ${this.name},what is your email ${this.email}`);
  }
};

jsUser.greetingTwo();
// Output: hello js user John Doe,what is your email john.doe@example.com