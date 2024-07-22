// array
/*notes
  =>  The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
 
 =>   JavaScript arrays are resizable and can contain a mix of different data types
 
 =>   JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes

=>    JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1

=>    JavaScript array-copy operations create shallow copies. 

       // shallow copy => A shallow copy of an object is a copy whose properties share the same references
       // deep copy    => A deep copy of an object is a copy whose properties do not share the same references
*/

let expArray = ["akash" , true ,134 ] 
const myArr1 = new Array (1,2,3,5,7)


// how to access any array value 
let myArray =[6,5,4,3,2,1]
// console.log (myArray[3])


//                                                                           =======array method 
// myArray.push(7)      // add in last 
// myArray.pop ()      // remove last value
// myArray.unshift(10) // add in the starting point 
// myArray.shift()     // remove the starting value 

// console.log (myArray.includes(9)) // it gives you boolean value 
 console.log (myArray.indexOf(2) , "a")  // find the index no // result is 4

const newArr = myArray.join()  // join method return new array and convert into string 
// console.log (myArray)
// console.log (newArr)
// console.log (typeof newArr)





// slice and splice 
  // slice dont change orignal array but splice change orignal array 
  
  const myNewArray=[2,3,4,6,7,9,0]

  console.log ("A",myNewArray)

  const sliceArray = myNewArray.slice(1,4)
  console.log ("B",myNewArray)
  console.log (sliceArray)


  const spliceArray = myNewArray.splice(3,4)  // @param start — The zero-based location in the array from which to start removing elements.
                                              // @param deleteCount — The number of elements to remove.
 
  console.log ("c",myNewArray)
  console.log (spliceArray)
