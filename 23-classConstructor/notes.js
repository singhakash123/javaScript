/* ## class constructor 
Yes, JavaScript does have classes. While JavaScript is a prototype-based language, ES6 (ECMAScript 2015) introduced the class syntax to provide a clearer and more concise way to create objects and handle inheritance.

Here is an example of how you can use classes in JavaScript: */

class User {
  constructor(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
  }

  greeting() {
    console.log(`Username: ${this.username}`);
  }
}

// Create an instance of the User class
const userOne = new User('akash', 8, true);

// Call the greeting method on the instance
userOne.greeting(); // Outputs: Username: akash



// Explanation

/*
1) Class Declaration:
           .) class User { ... } defines a class named User.


2) Constructor:
           .) The constructor method is a special method for creating and initializing an object created with the class keyword.
           .) this.username = username; initializes the username property.


3 ) Methods:
           .)Methods are defined inside the class body. Here, greeting is a method that logs the username.

4) Creating an Instance:
          .)const userOne = new User('akash', 8, true); creates a new instance of the User class with the specified properties.

5) Calling a Method:
           .)userOne.greeting(); calls the greeting method on the userOne instance.

Summary
           .)Class Syntax: Provides a more familiar and structured syntax for creating objects and handling inheritance.
           .)Constructor Method: Used for initializing properties.
           .)Methods: Defined within the class body and can be called on instances of the class.

           
While the class syntax is syntactic sugar over JavaScript's existing prototype-based inheritance model, it provides a more traditional and readable way to create and work with objects and their relationships.
*/