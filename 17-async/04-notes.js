// setTimeout, clearTimeout, setInterval, and clearInterval are JavaScript functions used to control the timing of code execution. They are particularly useful for scheduling tasks and implementing delays in your code.

// setTimeout

// setTimeout is used to execute a function once after a specified delay. 
//Syntax:

 const timeoutID1= setTimeout(callback, delay);
// callback: The function to be executed after the delay.
// delay: The time, in milliseconds (1000 ms = 1 second), to wait before executing the callback.

// Example:
const sayHello = () => {
   console.log("Hello!");
 };
 
 // Execute sayHello after 2 seconds (2000 milliseconds)
 const timeoutID = setTimeout(sayHello, 2000);
 
 // clearTimeout
 // clearTimeout is used to cancel a timeout set with setTimeout.

 // Syntax:
clearTimeout(timeoutID);
// timeoutID: The identifier of the timeout you want to cancel. This ID is returned by setTimeout.

// setInterval

// setInterval is used to repeatedly execute a function with a fixed time delay between each call.
// Syntax:
  const intervalID01 = setInterval(callback, interval);

// callback: The function to be executed repeatedly.
// interval: The time, in milliseconds, to wait between each call to the callback.
const sayHello01 = () => {
   console.log("Hello!");
 };
 
 // Execute sayHello every 1 second (1000 milliseconds)
 const intervalID = setInterval(sayHello01, 1000);
 


 // clearInterval

 // clearInterval is used to cancel an interval set with setInterval.
 //Syntax:

 clearInterval(intervalID);
// intervalID: The identifier of the interval you want to cancel. This ID is returned by setInterval.

const sayHello03 = () => {
   console.log("Hello!");
 };
 
 const intervalID03 = setInterval(sayHello03, 1000);
 
 // Cancel the interval after 5 seconds (5000 milliseconds)
 setTimeout(() => {
   clearInterval(intervalID03);
 }, 5000);
 




/*
Summary
setTimeout(callback, delay): Executes the callback function once after the specified delay (in milliseconds).
clearTimeout(timeoutID): Cancels a timeout that was set with setTimeout.
setInterval(callback, interval): Repeatedly executes the callback function with the specified interval (in milliseconds) between each execution.
clearInterval(intervalID): Cancels an interval that was set with setInterval.
These functions are useful for managing timed operations and repeating


*/