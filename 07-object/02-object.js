// const tinderUser = new Object ()  // this is an singletone object 

const tinderUser ={}
tinderUser.id ="123age"
tinderUser.name="akash singh chauhan";
tinderUser.isLoggedIn=false

 console.log (tinderUser)



/////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++nesterd object +++++++++++++++++++++++++++++++++++++++++++++++++++
  
const regularUser ={
  email:"akashlife2004@gmail.com",
  fullName:{
    userFullName:{
      firstname:"akash",
      lastName:"chauhan"
    }
  }
}

console.log (regularUser.fullName.userFullName?.firstname)
// The question mark (?) in the expression regularUser.fullName.userFullName?.firstname is used for optional chaining in JavaScript.

// Optional chaining allows you to access nested properties of an object without having to check if each property exists. If a property does not exist, the expression will return undefined instead of throwing a TypeErro

// In this example, the expression regularUser.fullName.userFullName?.firstname checks if the fullName property exists on the regularUser object. If it does, it then checks if the userFullName property exists on the fullName object. If it does, it then checks if the firstname property exists on the userFullName object.

// If any of the properties do not exist, the expression will return undefined instead of throwing a TypeError
const regularUser01 = {
  fullName: {
    userFullName: {
      firstname: 'John',
      lastname: 'Doe'
    }
  }
};

console.log(regularUser01.fullName.userFullName?.firstname); // John
console.log(regularUser01.fullName.userFullName?.middlename); // undefined
console.log(regularUser01.fullName?.userFullName?.firstname); // john
console.log(regularUser01.fullName?.userFullName?.sirname) // undefined 
// In this example, we define an object regularUser with a fullName property, which has a userFullName property, which has a firstname and lastname property.
// We then use optional chaining to access the firstname property of the userFullName object. This returns the value John.
// We then use optional chaining to access the middlename property of the userFullName object. Since this property does not exist, the expression returns undefined.
// Finally, we use optional chaining to access the userFullName property of the fullName object. Since this property does not exist, the expression returns undefined.




///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ how to connect  more then one object +++++++++++++++++++++++++++++++++++++++++

const myObj1 = {1:"a",2:"k",3:"a"}
const myObj2 =  {4:"s",5:"s",6:"h"}
const myobj3 =  {7:"s",8:"h"}

// by normal method 
           const obj4 ={myObj1,myObj2,myobj3}
console.log (obj4)  /* output : {
                               myObj1: { '1': 'a', '2': 'k', '3': 'a' },
                              myObj2: { '4': 's', '5': 's', '6': 'h' },
                                myobj3: { '7': 's', '8': 'h' }
                                 }
                          */
// object.assign (its take two parameter , first is target and second is source ) , (target is empty object )
const obj5 = Object.assign({},myObj1,myObj2,myobj3)
console.log (obj5)  /*
                 output:      {
                              '1': 'a',
                              '2': 'k',
                              '3': 'a',
                              '4': 's',
                              '5': 's',
                              '6': 'h',
                              '7': 's',
                              '8': 'h'
                              } 
                              */ 

// spread operator 

const obj6 = {...myObj1,...myObj2,...myobj3}
console.log (obj6)
              /*
     output : 
              {
                     '1': 'a',
                     '2': 'k',
                     '3': 'a',
                     '4': 's',
                     '5': 's',
                     '6': 'h',
                     '7': 's',
                      '8': 'h'
                               }
*/








/// +++++++++++++++++++++++++++++++++++++++++++ when we have object in the array then how to access value +++++++++++++++++++++++++++++++++++
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

// You can access the values in the user array using array indexing and object property accessors.
console.log(user[0].id); // Output: 1
console.log(user[1].email); // Output: "akashlife2"
console.log(user[2].id); // Output: 3
// ++++++++++    You can also use a for loop to iterate over the elements of the user array and access their properties:

/////////////////  ///////////////////// how to access object key 
for (let i = 0; i < user.length; i++) {
  console.log(`User ${i+1} ID: ${user[i].id}`);
  console.log(`User ${i+1} Email: ${user[i].email}`);
}
               // object.keys its return key in array 
console.log (Object.keys(tinderUser)) // now tinder key will come in the form of array 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ how to access object value ++++++++++++++++++++++++++++++++++++++++++++
                                // object.values // its return value in array 
console.log (Object.values(tinderUser))


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ how to access object key and value both 
                                                            // object.entries // its return value and key both in array 
console.log (Object.entries(tinderUser))


//============================================= hasOwnProperty 
                                         // this method will return output in boolean 
console.log (tinderUser.hasOwnProperty('isLoggedIn'))