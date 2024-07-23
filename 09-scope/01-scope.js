// There are two main types of scope in JavaScript:

//Global scope: Variables and functions declared outside of any function or block have global scope. They can be accessed and used from any part of the code.

// Local scope: Variables and functions declared inside of a function or block have local scope. They can only be accessed and used from within that function or block.





let a = 300
const b = 200
//var c = 300 
if (true) {
  let a = 10 
  const b = 20
  console.log ('inner :' ,a)
  console.log ('inner',b)
  var c = 30
}

console.log ("outer :",a)
console.log ('outer',b)
console.log (b)
console.log (c)

// let // const  // inside value will not come outside and outside value can come inside 






function one (){
   const username = "akash singh chauhan"

   function two (){
       const userEmail = "akashlife2004@gmail.com"
       console.log (`${username} and his email id : ${userEmail}`)
   }
   // console.log (userEmail)
   two ()
}

one ()




if(true){
    const website = "http://hiteshChoudhary.com"
    if (website == "http://hiteshChoudhary.com" ) {
       const userName = "akash singh chauhan"
       console.log (`${website} and ${userName}`)
    }
    // console.log (userName)
}
// console.log (website)
