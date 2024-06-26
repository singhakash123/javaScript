
// Promises in JavaScript are objects representing the eventual completion or failure of an asynchronous operation. They have a standard syntax for creation, consumption, and chaining. Here’s a detailed explanation with examples:

// Creating a Promise

// To create a promise, you use the Promise constructor, which takes a function (executor) with two parameters: resolve and reject.

// Syntax:

// const myPromise = new Promise((resolve, reject) => {
//   // Asynchronous operation
//   if (/* operation is successful */ true) {
//     resolve(value); // The operation was successful, and the promise is resolved with a value
//   } else {
//     reject(error); // The operation failed, and the promise is rejected with an error
//   }
// });


// example 
const myPromise01 = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure

  setTimeout(() => {
    if (success) {
      resolve("Operation was successful!"); // Resolve the promise with a success message
    } else {
      reject("Operation failed."); // Reject the promise with an error message
    }
  }, 2000);
});


// Consuming a Promise
          // To handle the result of a promise, you use the .then(), .catch(), and .finally() methods.
  
// Syntax:

// myPromise
// .then(value => {
//   // Handle the resolved value
// })
// .catch(error => {
//   // Handle the rejected error
// })
// .finally(() => {
//   // Execute code regardless of the promise's outcome
// });

// example 
myPromise01
.then(value => {
  console.log(value); // Outputs: "Operation was successful!"
})
.catch(error => {
  console.error(error); // Outputs: "Operation failed."
})
.finally(() => {
   console.log("Promise has been settled."); // Outputs regardless of success or failure
});


// Chaining Promises
      // You can chain multiple .then() calls to handle sequences of asynchronous operations. Each .then() returns a new promise.

// Syntax:

// myPromise
// .then(value => {
//   // Handle the first resolved value
//   return newValue; // Return a new value or another promise
// })
// .then(newValue => {
//   // Handle the second resolved value
// })
// .catch(error => {
//   // Handle any error that occurs in the promise chain
// });

// example 
const myPromise = new Promise((resolve, reject) => {
  resolve(1);
});

myPromise
  .then(value => {
    console.log(value); // Outputs: 1
    return value * 2;
  })
  .then(newValue => {
    console.log(newValue); // Outputs: 2
    return newValue * 3;
  })
  .then(finalValue => {
    console.log(finalValue); // Outputs: 6
  })
  .catch(error => {
    console.error(error);
  });



   //  Example with Fetch API
  //   Promises are commonly used with the Fetch API to handle HTTP requests.
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    console.log(data); // Handle the data from the API
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  // Summary
  // Creating a Promise: Use the Promise constructor with resolve and reject parameters.
  // Consuming a Promise: Use .then() for handling resolved values, .catch() for handling errors, and .finally() for code that runs regardless of the outcome.
 //  Chaining Promises: Chain multiple .then() calls for sequences of asynchronous operations.
 //  Using with Fetch API: Promises are useful for handling HTTP requests and other asynchronous operations.
 //  Promises provide a cleaner and more manageable way to handle asynchronous operations compared to traditional callback-based approaches.