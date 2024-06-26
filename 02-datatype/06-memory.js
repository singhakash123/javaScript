
// stack (primitive) , heap (non-primitive)

let myYouTubeName = "akash@youtube.com"
let anoterMyYouTubeName = myYouTubeName
anoterMyYouTubeName = "rohit@youtube.com"
console.log (myYouTubeName)
console.log (anoterMyYouTubeName)

let userOne = {
   email:"akashlife2o4",
   upi :"ybl"
}
let userTwo = userOne
userTwo.email = "rohitlife2004@gmail"
console.log (userOne.email)
console.log (userTwo.email)