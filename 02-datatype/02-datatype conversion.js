// how to know any data type 
// use type of to know the data type 

let fullName = "akash"

// console.log (typeof fullName)
// console.log (typeof (fullName))  // by using parantheses 

////////////////// ++++++++++++++++++++++++++++++++  conversion start from here +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                                        // conversion into number 

let  score = ""
let valueInNumber = Number (score)
// console.log (typeof valueInNumber)
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1 , false => 0
// "akash" => NaN , "" =>0
// null => 0
// undefined => NaN

                                     // conversion into boolean 
      
let isLoggedIn = "akash"
let booleanIsLoggedIn = Boolean (isLoggedIn)

console.log (typeof booleanIsLoggedIn)
console.log (booleanIsLoggedIn)

// 1 => true   , 0 => false 
// "" => false 
// "hitesh" => true 

                                      // conversion into string 

let someNumber = 33 
let stringNumber = String (someNumber)

console.log (stringNumber)
console.log (typeof stringNumber)