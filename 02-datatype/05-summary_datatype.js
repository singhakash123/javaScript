// primitive (call by value)

// 7 types : string , number ,boolean , null ,undefined ,symbol , bigint 

const fullName = "akash singh "

const score = 100
const scoreValue=100.2

const isLoggedIn = true
const outSideTemp = null 
let userMail ;

const id = Symbol ('124')
const anotherId = Symbol ('124')
console.log (id===anotherId)


const bigNumber = 286748043987439n





// non-primitive (call by refrence)
 // array , objects , functions 

 const arrayHeros=["akash","rohit",true,1253,null,undefined] 

 const myObj = {
  age :18,
  name:"hitesh"
 }

 const myFun =function (){
     console.log ('find your hello world')
 }


 console.log (typeof fullName)
 console.log (typeof score)
 console.log (typeof scoreValue)
 console.log (typeof isLoggedIn)
 console.log (typeof outSideTemp)
 console.log (typeof userMail)
 console.log (typeof id)
 console.log (typeof anotherId)
 console.log (typeof arrayHeros)
 console.log (typeof myObj)
 console.log (typeof myFun)