// const tinderUser = new Object ()  // this is an singletone object 

const tinderUser ={}
tinderUser.id ="123age"
tinderUser.name="akash singh chauhan";
tinderUser.isLoggedIn=false

// console.log (tinderUser)



///// nesterd object 
  
const regularUser ={
  email:"akashlife2004@gmail.com",
  fullName:{
    userFullName:{
      firstname:"akash",
      lastName:"chauhan"
    }
  }
}

// console.log (regularUser.fullName.userFullName?.firstname)

/// how to conact more then one object 

const myObj1 = {1:"a",2:"k",3:"a"}
const myObj2 =  {4:"s",5:"s",6:"h"}
const myobj3 =  {7:"s",8:"h"}

// by normal method 
const obj4 ={myObj1,myObj2,myobj3}
// console.log (obj4)

// object.assign (its take two parameter , first is target and second is source ) , (target is empty object )
const obj5 = Object.assign({},myObj1,myObj2,myobj3)
// console.log (obj5)

// spread operator 

const obj6 = {...myObj1,...myObj2,...myobj3}
// console.log (obj6)


///  when we have object in the array then how to access value 
const user =[
  {
    id:1,
    email:"akashlife2004"
  },
  {
    id:2,
    email:"akashlife2"
  },
  {
    id:3,
    email:"akashlif"
  }
]
// console.log (user[1].email)
// console.log (user[0].id)





/// object.keys its return key in array 
console.log (Object.keys(tinderUser)) // now tinder key will come in the form of array 

// object.values // its return value in array 
console.log (Object.values(tinderUser))

// object.entries // its return value and key both in array 
console.log (Object.entries(tinderUser))


// hasOwnProperty 

console.log (tinderUser.hasOwnProperty('isLoggedIn'))