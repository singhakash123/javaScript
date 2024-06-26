 //if else 
 const isLoggedIn = true 
 const temprature = 42
 if (temprature > 40) {
    console.log ('temprature is greater than 40')
 } else {
   console.log ('temprature is less then 50')
 }

 console.log ('temprature is very high leval')




 ///////////    block scope leval 
  const score = 100
if (score > 90) {
     let power ="fly"
     console.log (`user power : ${power}`)
}
// console.log (`user power : ${power}`)




/// shorthand notetion  // implicit scope 

const balance = 1000 
if (balance > 900) console.log ('test')


///    nestered condition 

const remainingBalanace = 1000
if (remainingBalanace > 1200) {
   console.log ('less then 1200')
}
else if(remainingBalanace < 750){
  console.log ('less then 750')
}
 else if (remainingBalanace == 650){
  console.log ('less than 650')
}
else if (remainingBalanace < 600){
   console.log ('less than 500')
}
else {
   console.log ('this is an final value')
}



const userLoggedIn = true 
const debitCard = true 

if (userLoggedIn && debitCard && 2==2) {
  console.log ('allow course to buy')
}


const loggedInfromGoggle=false
const loggedInfromEmail = true

if (loggedInfromEmail || loggedInfromGoggle) {
  console.log ('let login to user')
}
