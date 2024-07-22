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
        let index = myArray.indexOf(3);
         console.log(index); // outputs 3
                                                                


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  //The join() method!  ++++++++++++++++++++++++++++++++++++++++++
  // The join() method is a string method that returns a string created by concatenating all the elements of an array, separated by a specified separator.

  // Here's an example:

  let myArray01 = [6, 5, 4, 3, 2, 1];
  let separator = ', ';
  let result = myArray01.join(separator,"final");
  console.log(result); // outputs "6, 5, 4, 3, 2, 1"
 /*
In this example, the join() method takes an optional separator argument, which is a string that separates each element in the resulting string. If you don't provide a separator, the default separator is a comma (,).
 */
const newArr = myArray01.join()  // join method return new array and convert into string 
console.log (myArray01 , "a")
console.log (newArr, "b")
console.log (typeof newArr)


// You can also use an empty string ('') as the separator to concatenate the elements without any separator:
let result01 = myArray.join('');
console.log(result01); // outputs "654321"

// or, you can use a different separator, like a hyphen (-) or a newline character (\n):
let result03 = myArray01.join(' - ');
console.log(result); // outputs "6 - 5 - 4 - 3 - 2 - 1"

let result04 = myArray01.join('\n');
console.log(result); // outputs "6\n5\n4\n3\n2\n1"

// The join() method is a convenient way to convert an array of values into a single string, which can be useful for displaying data, creating CSV files, or sending data to a server.

 // Note that the join() method returns a new string, it doesn't modify the original array.





// slice and splice 
  // Note that splice() modifies the original array, whereas slice() returns a new array without modifying the original.
  const myNewArray = [2, 3, 4, 6, 7, 9, 0];
  
  // Slice() Method
        // The slice() method returns a shallow copy of a portion of an array into a new array object. It doesn't modify the original array.
        // Syntax: arr.slice([start[, end]])
        // start: The index at which to begin extraction. If omitted, it starts from the beginning (0).
            // end: The index at which to end extraction. If omitted, it extracts until the end of the array.
         
           console.log ("A" , myNewArray)
            // Slice from index 2 to the end
            let slicedArray01 = myNewArray.slice(2);
            console.log("B",myNewArray);
            console.log(slicedArray01); // outputs [4, 6, 7, 9, 0]
            
            // Slice from index 2 to 5
            let slicedArray02 = myNewArray.slice(2, 5);
            console.log("B",myNewArray);
            console.log(slicedArray02); // outputs [4, 6, 7]
            
            // Slice from the beginning to index 3
            let slicedArray03 = myNewArray.slice(0, 3);
            console.log("B",myNewArray);
            console.log(slicedArray03); // outputs [2, 3, 4]







            
      // Splice() Method
      // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
      // Syntax: arr.splice(start, deleteCount[, item1[, item2[, …]]])
      /*
          start: The index at which to start changing the array.
          deleteCount: The number of elements to remove from the array.
          item1, item2, …: The elements to add to the array.

      */
          // Remove 2 elements starting from index 2
           const spliceArray= myNewArray.splice(2, 2);
             console.log("C",myNewArray); // outputs [2, 3, 7, 9, 0]
             console.log(spliceArray);
          // Remove 1 element starting from index 3 and add 2 new elements
          const spliceArray01= myNewArray.splice(3, 1, 5, 6);
          console.log("C",myNewArray); // outputs [2, 3, 7, 5, 6, 9, 0]
          console.log(spliceArray01);
          // Add 2 new elements starting from index 1
         const spliceArray02= myNewArray.splice(1, 0, 10, 11);
          console.log("C",myNewArray); // outputs [2, 10, 11, 3, 7, 5, 6, 9, 0]
          console.log(spliceArray02);