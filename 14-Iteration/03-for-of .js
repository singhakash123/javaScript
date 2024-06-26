
// for...of Syntax

/* 

for (const element of iterable) {
  // Code to be executed for each element
}

*/
// explation of this syntax 
/*
element: The variable that will hold the value of the current element in the iteration.
iterable: The object that you want to iterate over (e.g., an array, string, map, set).
*/


// Simple Example

// Let's look at an example where we print each number in an array
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}

// Output:
// 1
// 2
// 3
// 4
// 5
// explation of this code 
/*
In this example, number holds each value from the numbers array as the loop iterates over the array
*/


// Iterating Over a String
 //  use the for...of loop to iterate over each character in a string:
 const str = "hello";

 for (const char of str) {
   console.log(char);
 }
 
 // Output:
 // h
 // e
 // l
 // l
 // o


 // Iterating Over a Map
  // The for...of loop can also be used with a Map to iterate over its entrie

  const map = new Map([
    ['name', 'Alice'],
    ['age', 30]
  ]);
  
  for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
  }
  
  // Output:
  // name: Alice
  // age: 30

// map.set 
  //The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value
  const maps = new Map()
  maps.set('in' , "india")
  maps.set ('usa',"united state kingdom")
  maps.set ('fr',"france")
  maps.set ('in',"india")

  console.log (maps)
  for (const [maping,value ]of maps) {
     console.log (`${maping} = ${value} `)
  }
  for (const maping of maps) {
        console.log (maping)
    }



//Iterating Over a Set
// Similarly, you can use the for...of loop to iterate over a Set:
const set = new Set([1, 2, 3]);

for (const value of set) {
  console.log(value);
}

// Output:
// 1
// 2
// 3


/*

Summary
Purpose: The for...of loop is used to iterate over the values of an iterable object.
Syntax: for (const element of iterable) { ... }
Use Cases: Commonly used for arrays, strings, maps, sets, and other iterable objects.
The for...of loop provides a clean and easy way to iterate over the elements of an iterable, making your code more readable and concise.

*/



// Comparing for...of with for...in
// While for...of iterates over the values of an iterable, for...in iterates over the keys or property names of an object. Here's a comparison using an array:

const arr = ['a', 'b', 'c'];

// Using for...of
for (const value of arr) {
  console.log(value);
}

// Output:
// a
// b
// c

// Using for...in
for (const index in arr) {
  console.log(index); // Outputs the index
  console.log(arr[index]); // Outputs the value at the index
}

// Output:
// 0
// a
// 1
// b
// 2
// c



// for of loop in not applicable in object 