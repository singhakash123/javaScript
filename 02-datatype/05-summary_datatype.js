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
console.log (id===anotherId)  // output:false 


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


 console.log (typeof fullName)  // output : string
 console.log (typeof score) // output : number
 console.log (typeof scoreValue) // output : number 
 console.log (typeof isLoggedIn) // output : boolean 
 console.log (typeof outSideTemp) // output : object 
 console.log (typeof userMail) // output : undefined 
 console.log (typeof id) // output : symbol 
 console.log (typeof anotherId) // output : symbol 
 console.log (typeof arrayHeros) // output : object  
 console.log (typeof myObj) // output : object 
 console.log (typeof myFun) // output : function 