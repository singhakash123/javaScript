

function multiplyBy5 (num){
    return num * 5
}
multiplyBy5.power = 2

console.log (multiplyBy5(5))
console.log (multiplyBy5.power)
console.log (multiplyBy5.prototype)

/////////////////////////////////////////////////////////////////   new keyword ////////////////////////////////////////////


/* 
When you call a constructor function without new, this does not refer to a new instance of the object but instead refers to the global object (or is undefined in strict mode).



*/

function CreateUser(username, price) {
    this.username = username;
    this.price = price;
  }
  
  // Adding methods to the prototype
  CreateUser.prototype.increment = function() {
    this.price++;
  }
  
  CreateUser.prototype.printMe = function() {
    console.log(`Price of this tea: ${this.price}`);
  }
  
  // Creating instances using the 'new' keyword
  const chai = new CreateUser('akash', 35);
  const tea = new CreateUser('rohit', 350);
  
  // Calling Methods:
  chai.printMe(); // Outputs: Price of this tea: 35
  tea.printMe();  // Outputs: Price of this tea: 350
  
  // Accessing Properties:
  console.log(chai); // Outputs: CreateUser { username: 'akash', price: 35 }
  console.log(tea);  // Outputs: CreateUser { username: 'rohit', price: 350 }
  
  // explation about this code 
  /*
  1)  Using the new Keyword:
               a) => const chai = new CreateUser('akash', 35); creates a new instance of CreateUser. The new keyword ensures that this inside the constructor function refers to the new instance being created.

               b) => Without new, this would refer to the global object (or be undefined in strict mode), which is not the desired behavior.

 2)  Constructor Function Name:
              a) => The convention is to capitalize the constructor function's name (CreateUser) to indicate that it is intended to be used with new.

 3)  Prototype Methods:   
            
              a) => CreateUser.prototype.increment = function() { ... } defines the increment method on the CreateUser prototype.
              b) => CreateUser.prototype.printMe = function() { ... } defines the printMe method on the CreateUser prototype.

 4) Logging Instances:
          a) console.log(chai); and console.log(tea); log the created instances, showing their properties.


 summary : 
           a) => Use new Keyword: Always use the new keyword when calling a constructor function to create an instance.
           b) => Constructor Function Naming: Capitalize constructor function names to distinguish them from regular functions.
           c) => Prototype Methods: Define shared methods on the prototype to ensure all instances have access to these methods without duplicating them in each instance.


           Example without Prototype Methods:
           
           When you define methods directly inside the constructor function, each instance gets its own copy of those methods. This can be inefficient in terms of memory usage, especially if you create many instances.

                                          function CreateUser(username, price) {
                                                this.username = username;
                                                this.price = price;
                                                this.increment = function() {
                                                        this.price++;
                                  };
                                           this.printMe = function() {
                                           console.log(`Price of this tea: ${this.price}`);
                         };
                }

                  const chai = new CreateUser('akash', 35);
                  const tea = new CreateUser('rohit', 350);

                console.log(chai.increment === tea.increment); // false, different copies of the method

  
  
  

  
 Example with Prototype Methods 
  When you define methods on the prototype, all instances share the same method, which is more memory efficient.  


function CreateUser(username, price) {
  this.username = username;
  this.price = price;
}

// Define methods on the prototype
CreateUser.prototype.increment = function() {
  this.price++;
};

CreateUser.prototype.printMe = function() {
  console.log(`Price of this tea: ${this.price}`);
};

const chai = new CreateUser('akash', 35);
const tea = new CreateUser('rohit', 350);

console.log(chai.increment === tea.increment); // true, same shared method


  */



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/