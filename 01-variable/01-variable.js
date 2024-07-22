const accountId = 28763647  // you cant change it and you cant overwrite and you cant keep it undefined 
let accountName = "akash singh chauhan"
var accountState = "madhya"
accountCity = "inodre"
let accountBranch ;   // undefined 



// accountId = 78495858; // not allowed because it is a const  // you cant overwrite to const 
accountName = "rohit singh chauhan"
accountState = "hyd"
accountCity ="neh"


/*
prefer not to use var 
because of an issue in block scope and functional scope 
*/





console.log (accountId)

console.table ([accountId,accountName,accountState,accountCity,accountBranch])
