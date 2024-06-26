// Es6 
// This code defines a User class with a constructor that initializes username, password, and email properties. It also includes two methods: encryptPassword and upperCaseName. The code demonstrates creating an instance of the User class and calling these methods.


// Explanation 
// 1) Class Definition 
class User {
  constructor(username,password,email){
    this.username=username
    this.password=password
    this.email=email
  }

  encryptPassword (){
    return `${this.password}abc`
  }

  upperCaseName (){
    return `${this.username.toUpperCase()}`
  }
}

// User: The class definition.
// constructor(username, password, email): The constructor function for the User class, which initializes username, password, and email properties.
// this.username = username;: Assigns the username parameter to the username property of the instance.
// this.password = password;: Assigns the password parameter to the password property of the instance.
// this.email = email;: Assigns the email parameter to the email property of the instance 


// 2) Methods: 
/*
encryptPassword() {
  return `${this.password}abc`;
}

upperCaseName() {
  return `${this.username.toUpperCase()}`;
}
*/

// encryptPassword(): A method that returns the password with "abc" appended to it.
// upperCaseName(): A method that returns the username in uppercase.



// 3) Creating an Instance of User: 
const chai = new User ('akash',374,"akashlife2004@gmail.com")
// new User('akash', 374, 'akashlife2004@gmail.com'): Creates a new instance of the User class named chai with username as 'akash', password as 374, and email as 'akashlife2004@gmail.com'.
const lemaonTea = new User ('rohit',49895,"rohitlife2004@gmail.com")

// 4) Calling Methods: 
console.log (chai.encryptPassword())
console.log (chai.upperCaseName())

// chai.encryptPassword(): Calls the encryptPassword method on the chai instance, which returns the password with "abc" appended, logging "374abc".
// chai.upperCaseName(): Calls the upperCaseName method on the chai instance, which returns the username in uppercase, logging "AKASH".

// 5) // Accessing Properties:
  console.log (chai)
  console.log (lemaonTea)
/////////////////////////////////////////////////////////////////_____+++++++++++++++++++++++++++++++++++++/////////////
// Full Output Explanation

// class User {
//   constructor(username, password, email) {
//     this.username = username;
//     this.password = password;
//     this.email = email;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   upperCaseName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai02 = new User('akash', 374, 'akashlife2004@gmail.com');
// console.log(chai.encryptPassword()); // Logs "374abc"
// console.log(chai.upperCaseName()); // Logs "AKASH"


// Class Definition: The User class is defined with a constructor and two methods.
// Creating an Instance: new User('akash', 374, 'akashlife2004@gmail.com') creates an instance of User with the specified properties.
// Calling Methods:
// chai02.encryptPassword() logs "374abc".
// chai02.upperCaseName() logs "AKASH

/*
Summary
Class Definition: Defines a User class with a constructor and methods.
Instance Creation: Uses the new keyword to create an instance of the class.
Method Invocation: Calls methods on the instance to manipulate and retrieve data.
Output:
encryptPassword: Appends "abc" to the password.
upperCaseName: Converts the username to uppercase.
*/

////////////  behind the scene 

function User (username,password,email){
  this.username=username
  this.password=password
  this.email=email
}
User.prototype.encryptPasswordname=function(){
  return `${this.password}abc`
}

User.prototype.changeUserName = function (){
 return`${this.username.toUpperCase()}`
}
const tea = new User  ('rohit',555,"akashlife200@")
console.log (tea.encryptPasswordname())
 console.log (tea.changeUserName())