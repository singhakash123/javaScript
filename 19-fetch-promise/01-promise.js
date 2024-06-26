// do an async task 
// DB calls  , file system ,Cryptography, network call ,Password Encryption  ,etc 
// syntax of promise 


const promiseOne = new Promise (function (resolve , reject){
     setTimeout (function(){
       console.log ('akash singh chauhan')
       resolve()
     },2000)
})

promiseOne.then(function(resolve){
 console.log ('your async task is completed')
})

new Promise (function (resolve,reject){
    setTimeout(function(){
        console.log ('async task 2')
        resolve()
    },2000)
}).then(function(){
  console.log ('your 2nd async task is completed')
})


const promiseThree = new Promise (function(resolve,reject){
  setTimeout(function(){
    console.log ('async task ')
    resolve()
  },2000)
})
promiseThree.then(function(){
   console.log ('async task is three')
})


const promiseFour = new Promise (function(resolve,reject){
   setTimeout (function(){
     resolve ({username:"akash singh chauhan",emailId:"akashlife20004@gmail.com"})
   },2000)
})
promiseFour.then(function(response){
     console.log (response)
})

const promiseFive = new Promise (function (resolve,reject){
   setTimeout(function(){
    resolve({username:"rohit singh",password:123})
   },2000)
})

promiseFive.then(function(response){
       return response.username
})
.then(function(data){
   console.log (data)
})



const promiseSix = new Promise(function(resolve,reject){
     setTimeout(function(){
      let error= true
      if (!error) {
         resolve({username:"singh",password:2873783})
      } else {
         reject('ERR:something went wrong')
      }
     },2000)
})
promiseSix
.then(function(response){
       return response.username
})
.then(function(data){
  console.log (data)
})
.catch(function(err){
   console.log (err)
})




const promiseSeven = new Promise(function(resolve,reject){
    setTimeout(function(){
      let error = false
     if (!error) {
       resolve({user:"akash singh",password:38738})
     } else {
        reject ('error:something is going on wrong')
     }
    },2000)
})

async function promiseConsume() {
  try {
    const response = await promiseSeven;
    const result = response.user;
    console.log (result)
    return result; // Return the user result here
    
  } catch (error) {
    console.log(error);
  }
}
promiseConsume()


const url = 'https://jsonplaceholder.typicode.com/users'
async function getAllUser (){
   try {
    const response =   await fetch (url)
    const data = await response.json()
    console.log (data)
   } catch (error) {
      console.log (error,"error:check your code once again")
   }
}

getAllUser()



const urlLink ='https://api.github.com/users/hiteshchoudhary'
fetch (urlLink)
.then (function(response){
   return response.json()
})
.then (function(data){
   console.log (data)
})
.catch(function(err){
 console.log (err,"error find in your code ")
})