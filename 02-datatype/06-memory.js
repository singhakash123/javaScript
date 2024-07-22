
// stack (primitive) , heap (non-primitive)
// What is heap memory and stack memory in JavaScript?
//                    The stack is used for static memory allocation, while the heap is used for dynamic memory allocation. Static memory allocation means that the size and location of the memory is fixed at compile time, while dynamic memory allocation means that the size and location of the memory can change at runtime.
// stack memory means copy 
// heap means refrence 

let myYouTubeName = "akash@youtube.com"
let anoterMyYouTubeName = myYouTubeName
anoterMyYouTubeName = "rohit@youtube.com"
console.log (myYouTubeName) // output : akash@youtube.com
console.log (anoterMyYouTubeName) // output : rohit@youtube.com

let userOne = {
   email:"akashlife2o4",
   upi :"ybl"
}
let userTwo = userOne
userTwo.email = "rohitlife2004@gmail"
console.log (userOne.email) // ouput : rohitlife2004@gmail
console.log (userTwo.email) // ouput : rohitlife2004@gmail


let obj = { a: 10, b: 20 }; // obj is stored on the heap
let arr = [1, 2, 3]; // arr is stored on the heap 
/*
In the above example, the variables obj and arr are stored on the stack, but they reference objects and arrays that are stored on the heap. When we assign a new value to obj or arr, we're only updating the reference on the stack, not the actual data on the heap.
*/
let obj1 = { a: 10, b: 20 };
let obj2 = obj1; // obj2 references the same object as obj1
obj1.a = 30; // updates the object on the heap
console.log(obj2.a); // outputs 30, because obj2 references the same object
/*
In this example, obj1 and obj2 are stored on the stack, but they reference the same object on the heap. When we update the object through obj1, we can see the changes through obj2 because they reference the same object.
*/