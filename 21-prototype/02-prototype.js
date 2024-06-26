





let myHeros = ['thor',"spiderman"]


let myUser = {
  username:"akash singh",
  email: "akashlife2004@gmail.com",

  greeting: function(){
    console.log (`username:${this.username}`)
  }
}

Object.prototype.akash = function (){
   console.log ('akash is present in all object ')
}

// Calling Methods:
myHeros.akash()
myUser.akash()




Array.prototype.heyAkash = function (){
  console.log ('welcome in the best javascript')
}


// Calling Methods: 
myHeros.heyAkash()
// myUser.heyAkash() // not accessable 



let myName = "akash  "
let anotherUserName = "chaiAurCode   "

String.prototype.trueLength = function (){
  console.log (`${this}`)
  console.log (`true length is :${this.trim().length}`)
}

// Calling Methods:
anotherUserName.trueLength()
"akash ".trueLength()









// // console.log (myName.trim().length)