// In JavaScript, when you want to create objects using a constructor function, you need to use the new keyword. The new keyword is used to create an instance of an object that the constructor function defines.


function User(username, loginCount, isLoggedIn) {
   this.uname = username;
   this.count = loginCount;
   this.login = isLoggedIn;
 }
 
 const userfind = new User('akash', 8, true);
 console.log(userfind);
 

// explanation  of above code 

/*
1) Constructor Function: 
   .) Defined the Users constructor function (Note: Capitalize the constructor function name by convention).
   .) this.uname = username; assigns the username parameter to the uname property of the object being created.
   .) this.count = loginCount; assigns the loginCount parameter to the count property.
   .) this.login = isLoggedIn; assigns the isLoggedIn parameter to the login property.


2) Creating an Instance:
       .) Used the new keyword to create an instance of Users.
       .) const userOne = new Users('akash', 8, true); creates a new object with the specified properties and methods.

3) Logging the Object:
    .) console.log(userOne); logs the created object to the console.

4) Summary: 
      .) Use of new Keyword: Required to create a new instance of an object using a constructor function.
      .) Constructor Function Naming Convention: Constructor functions are typically named with an initial uppercase letter to distinguish them from regular functions.
*/




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// This code defines a constructor function called Users that creates user objects with properties username, loginCount, and isLoggedIn, as well as a method greeting that logs a greeting message to the console. The code then creates two user objects using the new keyword and demonstrates accessing their properties and calling their methods.

// Explanation
// Constructor Function: 

function Users(username, loginCount, isLoggedIn) {
   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn= isLoggedIn;

   this.greeting = function(){
      console.log (`username : ${this.username}`)
   }
  
 }
 
 // Users: The constructor function for creating user objects.
 //this.username, this.loginCount, this.isLoggedIn: Assign the parameters username, loginCount, and isLoggedIn to the properties of the newly created object.
 // this.greeting: Assigns a method to the object that logs the username to the console.




 // Creating User Objects:
 const userOne =   new   Users('akash', 8, true);
 const userTwo =   new   Users ('rohit',16,false)
 // userOne: An instance of Users with username as 'akash', loginCount as 8, and isLoggedIn as true.
//  userTwo: An instance of Users with username as 'rohit', loginCount as 16, and isLoggedIn as false




// Accessing Properties:
 console.log(userOne.isLoggedIn);
 console.log (userTwo.username)
 // userOne.isLoggedIn: Accesses the isLoggedIn property of userOne and logs true.
//  userTwo.username: Accesses the username property of userTwo and logs 'rohit'.


// Calling Methods:
userOne.greeting()
userTwo.greeting()
//    userOne.greeting(): Calls the greeting method of userOne, which logs username : akash.
//    userTwo.greeting(): Calls the greeting method of userTwo, which logs username : rohit.


// Summary
// Constructor Function: Users creates user objects with specific properties and methods.
// Creating Instances: new Users('akash', 8, true) creates a user object userOne, and new Users('rohit', 16, false) creates a user object userTwo.
// ccessing Properties: userOne.isLoggedIn and userTwo.username access the properties of the created user objects.
// Calling Methods: userOne.greeting() and userTwo.greeting() call the greeting method of each user object to log the username.


// This structure allows you to create multiple user objects with the same properties and methods, ensuring that each instance can independently maintain its state and behavior.