// Immeditely Invoked  Function Expressions  (IIFE)
// synatx // ()()
// global scope ke pollution se bachne ke liye 

(function chai (){
  console.log ('Db is connected')
})();

((username)=> {
  console.log (`wecome back ${username}`)
})("akash")