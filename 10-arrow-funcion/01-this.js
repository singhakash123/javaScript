// this always use for current context 

const user = {
   username:"hitesh singh chauhan",
  price :999,

  welcomeMessage : function (){
    console.log (`${this.username},welcome to the website`)
    console.log (this)
  }
}
user.welcomeMessage()
user.username = "rohit singh chauhan"
user.welcomeMessage()
console.log (this)  // note : in node this give empty object but in the brower it give global object 







////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  functiom this ++++++++++++++++++++++++++++++++++++++++++==+++++
 
function chai (){
     const username = "javscript"
     console.log (this.username) // this doesnt work in the function 
     console.log (this)
}
chai()



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ variabe function+++++++++++++++++++++++++++++++++++++++++++++=+

const chai01 = function (){
    const username = " akash singh chauhan "
    console.log (this.username) // not allowed 
    console.log (this)
}
chai01()





const chai02 = () => {
  const username = "react js is best series to get something in your life";
  console.log(this.username); // `this` does not have `username` property
  console.log(this); // `this` refers to the enclosing scope
}
chai();
