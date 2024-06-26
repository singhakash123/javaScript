// object literal 

// This code defines a user object with properties username, loginCount, and singnedIn, and a method greetingDetail. The code demonstrates accessing object properties, calling methods, and logging the this context.


// Explanation

// 1)  Defining the Object: 

const user = {
  username:"akash",
  loginCount: 8 ,
  singnedIn : true ,

  greetingDetail : function (){
       console.log ('got user detail from database')
       console.log (this.username)
       console.log (this)
   }
}
// user: An object representing a user with three properties:
// username: A string "akash".
// loginCount: A number 8.
// singnedIn: A boolean true.
// greetingDetail: A method that logs a message, the username property, and the this context to the console.



// 2) Accessing Properties:
 console.log (user.username)
 // user.username: Accesses the username property of the user object and logs "akash".

// 3) Calling Methods:
 console.log (user.greetingDetail())
 // user.greetingDetail(): Calls the greetingDetail method of the user object.
 // Inside greetingDetail:
  // console.log('got user detail from database'): Logs the message 'got user detail from database'.
  // console.log(this.username): Logs the username property of the this context, which is the user object. Hence, it logs "akash".
  // console.log(this): Logs the this context itself, which is the user object.
 // However, console.log(user.greetingDetail()) will log undefined after executing greetingDetail, because the method greetingDetail does not return a value.



 // Global this Context:
console.log (this) 
                // console.log(this): Logs the this context in the global scope. In a browser environment, this is typically the window object. In a Node.js environment, it could be an empty object {}.

// Full Output Explanation 
  
const users = {
   username: "akash",
   loginCount: 8,
   singnedIn: true,
 
   greetingDetail: function() {
     console.log('got user detail from database');
     console.log(this.username);
     console.log(this);
   }
 }
 
 console.log(users.username); // Logs "akash"
 console.log(users.greetingDetail()); // Logs:
                                     // 'got user detail from database'
                                     // 'akash'
                                     // { username: 'akash', loginCount: 8, singnedIn: true, greetingDetail: [Function: greetingDetail] }
                                     // undefined
 console.log(this); // Logs the global context (e.g., Window object in browser, global object in Node.js)
 
  