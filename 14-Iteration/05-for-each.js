
// forEach Syntax
/*

array.forEach(function(element, index, array) {
  // Code to be executed for each element
});

element: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array that forEach was called upon.


*/

// Basic Example
 // Here’s a simple example where we print each element of an array:
 const numbers01 = [1, 2, 3, 4, 5];

numbers01.forEach(function(number) {
  console.log(number);
});

// Output:
// 1
// 2
// 3
// 4
// 5
// In this example, the forEach method iterates over each element in the numbers array and logs it to the console.




// Example with Index
 // You can also access the index of each element:
 const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit, index) {
  console.log(`${index}: ${fruit}`);
});

// Output:
// 0: apple
// 1: banana
// 2: cherry
// Here, the index of each element is also logged alongside the element itself.

// exmaple with element .index ,and array
const fruites = ["akash","rohit","singh"]
fruites.forEach((element,index,array)=>{
   console.log (`${element},${index},${array}`)
})

// Example with Arrow Function
 // You can use an arrow function with forEach for more concise syntax:
 const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => console.log(number));

// Output:
// 1
// 2
// 3
// 4
// 5
// 

function printMe (item){
  console.log (item)
}
numbers.forEach(printMe)



const myCoding =[
  {
    languagename :"javascript",
    filename :"js"
  },
  {
    languagename :"python",
    filename :"py"
  },
  {
    languagename :"ruby",
    filename :"rb"
  },
  {
    languagename :"backend",
    filename :"bs"
  },

]
myCoding.forEach((item)=>
  console.log (item.languagename)
)

myCoding.forEach((item, index) => {
  if (index === 0) {
    console.log(item.languagename); // Output: JavaScript
  }
});



/*
mportant Points
No Return Value: forEach does not return a value. If you need to transform the array, consider using map.
Can't Break the Loop: Unlike a for loop, you cannot break out of a forEach loop using break or return. If you need to exit early, use a different method like some or every.

*/


/*
Summary
Purpose: The forEach loop is used to iterate over elements in an array and execute a function for each element.
Syntax: array.forEach(callback(element, index, array)).
Modifies: Can modify the original array but can’t return a new array or break the loop.
Use Cases: Best for performing side effects like logging, updating elements, or other operations that don't require breaking the loop or returning a new array.
The forEach loop is a powerful and convenient method for iterating over arrays in JavaScript, making your code more readable and concise.
*/
