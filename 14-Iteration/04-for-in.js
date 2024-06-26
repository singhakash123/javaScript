
// for...in Syntax

/*
for (const key in object) {
  // Code to be executed for each key
}

// explation about this syntax 
key: The variable that will hold the key (property name) of the current property being iterated.
object: The object whose enumerable properties you want to iterate over.


*/

// Example with an Object
 /// Let's look at an example where we print the keys and values of an obj

 const person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Output:
// name: Alice
// age: 25
// city: New York

// explation about this code 
// in this example, key holds each property name from the person object, and person[key] gives the value of that property.


// Example with an Array (Not Recommended)
// While you can use for...in with arrays, it's generally not recommended because for...in iterates over all enumerable properties, including inherited ones. It's better to use for...of or a standard for loop for arrays.
const fruits = ['apple', 'banana', 'cherry'];

for (const index in fruits) {
    console.log(index);       // Outputs the index
    console.log(fruits[index]); // Outputs the value at the index
    console.log (`${index} : ${fruits[index]}`)
}

// Output:
// 0
// apple
// 1
// banana
// 2
// cherry


// Example Showing Why for...in is Not Ideal for Arrays
// Using for...in can lead to unexpected behavior if the array prototype is modified:
Array.prototype.customMethod = function() {};

const fruites = ['ap', 'baa', 'cry'];

for (const index in fruites) {
  console.log(index);       // Outputs the index and the custom method
  console.log(fruites[index]); // Outputs the value at the index or undefined for the custom method
}

// Output:
// 0
// apple
// 1
// banana
// 2
// cherry
// customMethod
// undefined


// Example with Object's Own Properties Only
// To iterate only over an object's own properties (excluding inherited properties), you can use the hasOwnProperty method inside the loop:


/*
Summary
Purpose: The for...in loop is used to iterate over the keys (property names) of an object's enumerable properties.
Syntax: for (const key in object) { ... }
Use Cases: Commonly used for objects to access and manipulate their properties.
Caution: Not recommended for arrays due to potential issues with inherited properties.
The for...in loop is useful for iterating over the properties of an object and should be used with caution when dealing with arrays. For arrays, prefer using for...of or other iteration methods like forEach or a traditional for loop.

*/


