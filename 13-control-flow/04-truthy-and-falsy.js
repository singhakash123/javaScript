// falsy value 

// false , 0 , "" ,-0 , bigint 0n , null ,undefined ,NaN

// truthy value 

// "false" , "0" ," " ,[] ,{} ,function(){} ,
const userLoggedIn = ""

if (userLoggedIn) {
   console.log ('got user email')
} else {
   console.log ('dont have user email')
}




///   how to check condtion in array 
const userArray =[]

if (userArray.length==0) {
  console.log ('array is empty')
} else {
  console.log ('correct your condition ')
}

// how to check condition for object 
const myObj = {}
if (Object.keys(myObj).length==0) {
  console.log ('your object is empty ')
} else {
  console.log ('correct your object')
}

//
console.log (false == 0) // true
console.log (false == '') // true 
console.log  (0 == '' ) // true 




/// Nullish coalescing operator (??) : null , undefined 

let val1 ;
// val1 = 5??10
val1 = null ?? 10 
val1 = null ?? 10 ?? 15
val1 = undefined ?? 20 
val1 = undefined ?? 20 ?? 25
console.log (val1)



// Conditional (ternary) operator (?)
// condition ? true : false ,
const iceTeaPrice = 100 
iceTeaPrice >= 80 ? console.log('less then 80'):console.log ('more then 80')