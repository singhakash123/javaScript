// This code defines a User class and a Teacher class that extends User. It demonstrates inheritance, method overriding, and instance creation. 

// Explanation
// User Class Definition:


class User {
  constructor(username){
      this.username=username
  }

  logMe(){
    console.log (`username is ${this.username}`)
  }

}
// User: A class that has a constructor to initialize the username property.
// logMe(): A method that logs the username property to the console.

// 2) Teacher Class Definition: 
 
class Teacher extends User {
  constructor(username, email, password) {
    super(username); // Calls the constructor of the User class
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`new course was added by ${this.username}`);
  }
}
// Teacher: A class that extends User, inheriting its properties and methods.
// super(username): Calls the constructor of the User class, initializing the username property.
// addCourse(): A method that logs a message indicating a new course was added by the username.

// 3) Creating Instances and Using Methods: 

const chai = new Teacher('akash', 'akashlife2004@gmail.com', 37374);
// chai: An instance of Teacher with username as 'akash', email as 'akashlife2004@gmail.com', and password as 37374.
const tea = new User('rohit');
// tea: An instance of User with username as 'rohit'.



// 4) Calling Methods:
chai.addCourse(); // Logs "new course was added by akash"
// chai.addCourse(): Calls the addCourse method on chai, logging "new course was added by akash".

// tea.addCourse(); // This line is commented out because addCourse() is not defined in User class
 tea.logMe(); // Logs "username is rohit"
   // tea.logMe(): Calls the logMe method on tea, logging "username is rohit".



// 5)   Comparisons and Instance Checks:

console.log(chai == tea); // Logs false
console.log(chai instanceof User); // Logs true

// chai == tea: Compares the chai and tea instances. Since they are different objects, it logs false.
// chai instanceof User: Checks if chai is an instance of User. Since Teacher extends User, it logs true.


//////////////////////////////++++++++++++++++++++++++++++++/////////////////////////////////////


// Full Output Explanation
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // Calls the constructor of the User class
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`new course was added by ${this.username}`);
  }
}

const chai01 = new Teacher('akash', 'akashlife2004@gmail.com', 37374);
chai.addCourse(); // Logs "new course was added by akash"

const tea01 = new User('rohit');
// tea.addCourse(); // This line is commented out because addCourse() is not defined in User class
tea01.logMe(); // Logs "username is rohit"

console.log(chai01 == tea01); // Logs false
console.log(chai01 instanceof User); // Logs true


/*
Instance Creation:
chai01: An instance of Teacher.
tea01: An instance of User.

Method Invocation:
chai01.addCourse(): Logs "new course was added by akash".
tea01.logMe(): Logs "username is rohit".

Comparisons:
chai01 == tea01: Logs false because they are different objects.
chai01 instanceof User: Logs true because Teacher extends User.

Summary
User Class: Defines a constructor and a logMe method.
Teacher Class: Extends User, inherits its properties, and adds an addCourse method.
Instance Creation: Creates instances of Teacher and User.
Method Calls: Demonstrates calling methods on instances.
Comparisons and Instance Checks: Shows object comparison and instance checking.

*/