const name = "akash singh chauhan"
const repoCount=50

//console.log (name+repoCount+"value in number")

 /// string interpulation 

console.log (`hello my name is ${name},and my repocount is ${repoCount}`)



/////////////////   string 
const gameName = String ('akash') 
const gamer = "akash singh"

 
console.log (gameName[1])
//console.log (gameName__proto__)
console.log (gamer.toUpperCase())
console.log (gamer.toLowerCase())
console.log (gamer.charAt(1)) // output :k  //  charAt(1) would return "k" (the second character)
console.log (gamer.indexOf('s')) //output: 5 //  indexOf("s") would return 5 (the first occurrence of "s" is at index 5)
console.log (gamer.length)  // length is not a method it is a property 


// substring and slice 
 // Substring

//  The substring method extracts a portion of a string, starting from a specified index, and returns a new string containing the extracted characters.
// Syntax 
  // string.substring(start, end)
  /*
Where:

start is the starting index (inclusive) of the substring.
end is the ending index (exclusive) of the substring.
  */
 // Example

// Let's extract a substring from the string "akash singh":

const gamers = "akash singh";
const substring = gamers.substring(5, 10);
console.log(substring); // "singh"
       // n this example, we start from index 5 (inclusive) and end at index 10 (exclusive), extracting the substring "singh"


 // Slice

// The slice method is similar to substring, but it's more flexible and powerful. It extracts a portion of a string, starting from a specified index, and returns a new string containing the extracted characters.

// Syntax
   // string.slice(start, end)
   /*
        Where:

         start is the starting index (inclusive) of the slice.
         end is the ending index (exclusive) of the slice.
   */
  // Example

  // Let's extract a slice from the string "akash singh":

  const gamerr = "akash singh";
  const slice = gamerr.slice(5, 10);
  console.log(slice); // "singh"
            // In this example, we start from index 5 (inclusive) and end at index 10 (exclusive), extracting the slice "singh".

      // Key Differences
        //Here are the key differences between substring and slice:

      // Negative indices: slice allows negative indices, which count from the end of the string. substring does not support negative indices.
       //Omitting end index: If you omit the end index in slice, it will extract the rest of the string from the start index. substring requires both start and end indices.
     //Error handling: slice returns an empty string if the start index is greater than the end index. substring throws a RangeError in this case.

 ////////////////////////////////////////////////////////////////////////   tostring() 
   // toString(): Converts a value to a string. This method is often used to convert numbers, booleans, or objects to strings.
       let number = 33
       let newNumber = toString (number)
       console.log(newNumber);
       console.log(typeof newNumber);

/////////////    trim , trimstart and trimend 
       // trim(): Removes whitespace characters from the beginning and end of a string. This method is useful for cleaning up user input or formatting strings.
const newStringOne = "  hitesh    "
 console.log (newStringOne)
 console.log (newStringOne.trim())
 console.log (newStringOne.trimStart())
 console.log (newStringOne.trimEnd())


 ////  replace // replace takes two parameter : replace(serchvalue, replacevalue) // both should be in the format of string

 const url = 'https://akash@gamil.com'
 console.log(url.replace('@',"20"))


 ////    includes 

 const newUrl = "akash@iwe9e"
 console.log (newUrl.includes('a'))


 /// split // split takes two parameter first is seprater and second is limit //method) String.split(separator: string | RegExp, limit?: number
    // split(): Splits a string into an array of substrings based on a specified separator. This method is often used for parsing data, such as CSV files or query strings.

      // syntax 


      /*
         Where:

             separator is the character or string that separates the substrings.
             imit is an optional parameter that specifies the maximum number of substrings to return.
      */
             //Examples

             // Let's explore some examples:
 //  1 // Splitting a string with a comma separator:
               const fruits = "apple,banana,orange";
               const fruitArray = fruits.split(",");
               console.log(fruitArray); // ["apple", "banana", "orange"]

// 2 // Splitting a string with a whitespace separator:
               const sentence = "Hello World, this is a test";
               const words = sentence.split(" ");
               console.log(words); // ["Hello", "World,", "this", "is", "a", "test"]

// 3 // Splitting a string with a custom separator:
             const data = "name:John;age:30; occupation:Developer";
             const keyValuePairs = data.split(";");
             console.log(keyValuePairs); // ["name:John", "age:30", " occupation:Developer"]
// 4 // Splitting a string with a limit:
const longString = "apple,banana,orange,grape,mango";
const limitedArray = longString.split(",", 3);
console.log(limitedArray); // ["apple", "banana", "orange"]

 const gameChanger = "akash % singh % chauhan"
  console.log (gameChanger.split('%',3))
