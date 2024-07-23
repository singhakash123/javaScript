function sayMyName (){
  console.log ("a")
  console.log ("k")
  console.log ("a")
  console.log ("s")
  console.log ("h")
}
// sayMyName()


function addTwoNumber(number1,number2) {
   console.log (number1+number2)
}

addTwoNumber(3,4)
addTwoNumber(3,"4")
addTwoNumber(3,null)



//////////////////////////////////////////   return /////////////////////////////////////////////////

function addTwoNumber (number1,number2){
   let result = number1+number2
   return result
     // after return you cant excute any code 
}

const printMe = addTwoNumber(5,4)
console.log (printMe)


function loginUserMessage (username){
  // return `${username},welcome to my website`  // this is not best pratice ,always try to hold in variable and then retun value 
   let result = `${username},welcome to my website`
   return result 
}
 const keyReturn=loginUserMessage("hitesh")
 console.log (keyReturn)


function userMessage(username = "akash singh chauhan" ){
  // if(!username){
  //    console.log ( `please enter username`)
  //     return
  // }
  if (username === undefined) {
     console.log ('please enter username')
     return
  }
  return `${username},please enter username`
}
const userdefined= userMessage ("hitesh choudhary")
    console.log (userdefined)


