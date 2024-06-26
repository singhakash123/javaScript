/*
Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are a key feature in handling asynchronous code in a more manageable and readable way compared to traditional callback-based approaches.
*/

// Creating a Promise
// A promise is created using the Promise constructor, which takes a function (executor) with two parameters: resolve and reject.
    



// Here's an example of creating a promise:

const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    const success = true; // Change this to false to simulate an error

    if (success) {
      resolve('Operation was successful!');
    } else {
      reject('Operation failed.');
    }
  }, 2000);
});


// Consuming a Promise
/*
   You consume a promise using the .then(), .catch(), and .finally() methods.

.then(onFulfilled, onRejected): This method takes up to two arguments: callbacks for the resolved or rejected states of the promise.
.catch(onRejected): This method takes a single callback for handling rejected states.
.finally(onFinally): This method takes a single callback that is invoked regardless of whether the promise was fulfilled or rejected.

*/
// Here's how you can consume the myPromise created above:
myPromise
  .then((result) => {
    console.log(result); // Output: "Operation was successful!" if resolved
  })
  .catch((error) => {
    console.error(error); // Output: "Operation failed." if rejected
  })
  .finally(() => {
    console.log('Promise has been settled (fulfilled or rejected).');
  });


  // Example with Fetch API
 //  Here's an example of using promises with the Fetch API to make an HTTP request:
 fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    console.log(data); // Handle the data from the API
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });


  // Chaining Promises
// Promises can be chained to handle sequences of asynchronous operations. Each .then returns a new promise, which can be chained further.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

promise1
  .then((result) => {
    console.log(result); // Output: 10
    return result * 2;
  })
  .then((result) => {
    console.log(result); // Output: 20
    return result * 3;
  })
  .then((result) => {
    console.log(result); // Output: 60
  })
  .catch((error) => {
    console.error(error);
  });


  /*
Summary
a) => Promises: Objects representing the eventual completion or failure of an asynchronous operation.
b) => Creating a Promise: Using the Promise constructor with resolve and reject parameters.
c) => Consuming a Promise: Using .then(), .catch(), and .finally() methods.
d) => Chaining Promises: Handling sequences of asynchronous operations in a readable manner.
Promises provide a cleaner and more readable way to handle asynchronous operations compared to traditional callback-based approaches. They help avoid "callback hell" and make asynchronous code easier to manage.


  */