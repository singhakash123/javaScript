// push method add value in the exitnig array 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ The push() method!

 //The push() method adds one or more elements to the end of an array. It modifies the original array and returns the new length of the array.
    //Syntax: arr.push(element1, ..., elementN)
     //element1, ..., elementN: The elements to add to the end of the array.
     const myNewArray = [2, 3, 4, 6, 7, 9, 0];

     // Add a single element to the end
     myNewArray.push(10);
     console.log(myNewArray); // outputs [2, 3, 4, 6, 7, 9, 0, 10]
     
     // Add multiple elements to the end
     myNewArray.push(11, 12, 13);
     console.log(myNewArray); // outputs [2, 3, 4, 6, 7, 9, 0, 10, 11, 12, 13]
     
     // Add an array of elements to the end
     const newArray = [14, 15, 16];
     myNewArray.push(...newArray);
     console.log(myNewArray); // outputs [2, 3, 4, 6, 7, 9, 0, 10, 11, 12, 13, 14, 15, 16]

// note that push() returns the new length of the array, not the modified array itself. If you want to get the modified array, you can simply log the original array variable, as shown in the examples above.
 // Some important things to keep in mind:
  //push() modifies the original array.
//push() returns the new length of the array.
//You can add multiple elements at once using push().
//You can use the spread operator (...) to add an array of elements to the end of the original array.



const marvel_heros01 = ["spiderman","superman","ironman"]
const dc_heros01 =["flash","batsman"]
marvel_heros01.push(dc_heros01)
console.log (marvel_heros01)
console.log (marvel_heros01[3][1])

                                      
 //+++++++++++++++++++++++++++++++++++++++++++++=================================// The concat() method!

           // The concat() method returns a new array that is the result of concatenating (joining) two or more arrays. It does not modify the original arrays.
          // Syntax: arr.concat([array1[, array2[, …]]])
            // array1, array2, …: The arrays to concatenate.

            const myNewArray01 = [2, 3, 4, 6, 7, 9, 0];

            // Concatenate two arrays
            const newArray01 = myNewArray01.concat([10, 11, 12]);
            console.log(newArray01); // outputs [2, 3, 4, 6, 7, 9, 0, 10, 11, 12]
            
            // Concatenate multiple arrays
            const newArray02 = myNewArray01.concat([10, 11, 12], [13, 14, 15], [16, 17, 18]);
            console.log(newArray02); // outputs [2, 3, 4, 6, 7, 9, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18]
            
            // Concatenate an array with values
            const newArray03 = myNewArray01.concat(10, 11, 12);
            console.log(newArray03); // outputs [2, 3, 4, 6, 7, 9, 0, 10, 11, 12]     
            
   //      Note that concat() returns a new array, it does not modify the original arrays.    
 // Some important things to keep in mind:
//concat() returns a new array, it does not modify the original arrays.
//You can concatenate multiple arrays at once using concat().
//You can concatenate an array with individual values using concat().

const myNewArray08 = [2, 3, 4, 6, 7, 9, 0];
const newArray8 = [...myNewArray08, 10, 11, 12];
console.log(newArray); // outputs [2, 3, 4, 6, 7, 9, 0, 10, 11, 12]

const marvel_heros02 = ["spiderman","superman","ironman"]
const dc_heros02 =["flash","batsman"]

const new_heros = marvel_heros02.concat(dc_heros02)
console.log (new_heros)


//////////////////////////////////////////////////////////////////////////////////////////////++++++++++++++ spread operator 
const marvel_heros = ["spiderman","superman","ironman"]
const dc_heros =["flash","batsman"]

const my_new_heros =[...marvel_heros,...dc_heros]
// console.log (my_new_heros)


/////////////////////////////////////////////////// flat method 

/*
The flat() method!

The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. It does not modify the original array.

Syntax: arr.flat([depth])

depth: The maximum recursion depth. Defaults to 1.


*/
// Let's try some examples:
const arr = [1, 2, [3, 4, [5, 6]], 7, 8, [9, 10]];

// Flat with default depth of 1
const flatArr = arr.flat();
console.log(flatArr); // outputs [1, 2, 3, 4, [5, 6], 7, 8, 9, 10]

// Flat with depth of 2
const flatArr2 = arr.flat(2);
console.log(flatArr2); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Flat with infinite depth
const flatArr3 = arr.flat(Infinity);
console.log(flatArr3); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Note that flat() returns a new array, it does not modify the original array.
  /* Some important things to keep in mind:
   Note that flat() returns a new array, it does not modify the original array.

Some important things to keep in mind:

flat() returns a new array, it does not modify the original array.
You can specify the maximum recursion depth using the depth parameter.
If you omit the depth parameter, it defaults to 1.
If you pass Infinity as the depth parameter, it will recursively flatten the array until all sub-arrays are removed.

*/
// Also, it's worth noting that you can use the flatMap() method to map over the array and then flatten the result. It's similar to flat(), but it allows you to transform the elements before flattening.

const arr06 = [1, 2, [3, 4, [5, 6]], 7, 8, [9, 10]];

const flatMappedArr = arr06.flatMap(x => x * 2);
console.log(flatMappedArr); // outputs [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]






// Array.from()
                 // Array.from() is a method that creates a new array from an array-like or iterable object. It's a way to convert an object that's not an array, but has a length property and indexed elements, into a real array.
                  // Array.from() is a powerful method that can convert various types of objects into arrays. Let's break down each of your examples:

                  console.log(Array.from('chauhan')) //     // Output: ["c", "h", "a", "u", "h", "a", "n"]
                   // Array.from()  //takes a string as an input and converts it into an array of individual characters.
                        
                   console.log(Array.from({name:"akash"})) // Output: []
                       // Array.from() takes an object as an input, but since the object doesn't have a length property or indexed elements, it returns an empty array.
                   
                  console.log(Array.from(Object.keys({name: "akash"}))) // Output: ["name"]
                       //Object.keys() returns an array of property names (keys) from the object.
                       // Array.from() takes this array and returns a new array with the same elements.
             
                  console.log(Array.from(Object.values({name: "akash"}))) //  Output: ["akash"]
                        // Object.values() returns an array of property values from the object.
                        //Array.from() takes this array and returns a new array with the same elements.
                      

                 console.log(Array.from(Object.entries({name: "akash"})))  //  Output: [["name", "akash"]]
                        // Object.entries() returns an array of key-value pairs from the object, where each pair is an array with two elements.
                       //  Array.from() takes this array and returns a new array with the same elements.
                       
                 let arrayLike = {0: "akash", length: 1}; console.log(Array.from(arrayLike)) //  Output: ["akash"]
                       // arrayLike is an object that has a length property and an indexed element at 0.
                    //   Array.from() takes this object and converts it into a real array.
                      
               

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  +++++++++  /// Array.isArray()!

                    //  Array.isArray() is a method that determines whether the passed value is an array or not. It returns true if the value is an array, and false otherwise.

console.log (Array.isArray("akash"))




 //                                             convert multiple dataType into array (Array.of)
          // Array.of()!

 // Array.of() is a method that creates a new array from a variable number of arguments. It's similar to the Array constructor, but with a more intuitive syntax.
// Note that Array.of() can take any number of arguments, and it will create an array with those elements.
console.log(Array.of(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]
console.log(Array.of("a", "b", "c")); // ["a", "b", "c"]
console.log(Array.of(1, "two", true, null)); // [1, "two", true, null]

const score1 = 100 
const score2 = 200 
const score3 = 300 
const fullName = "akash singh chauhan"
console.log (Array.of(score1,score2,score3,fullName))




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  join method //////////////////////////////////////

// The join() method is a powerful tool for concatenating all elements of an array into a single string. It's a versatile method that can be used in a variety of situations.

// arr.join([separator])
// Where:
// arr is the array you want to join.
// separator is an optional parameter that specifies the character or string to use as a separator between elements. If omitted, the default separator is a comma (,).
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.join()); // "apple,banana,cherry"
console.log(fruits.join(' ')); // "apple banana cherry"
console.log(fruits.join('-')); // "apple-banana-cherry"
console.log(fruits.join(', ')); // "apple, banana, cherry"

//s you can see, the join() method concatenates all elements of the array into a single string, using the specified separator (or a comma by default).