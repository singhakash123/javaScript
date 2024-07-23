// Immeditely Invoked  Function Expressions  (IIFE)
// synatx // ()()
// global scope ke pollution se bachne ke liye 
// if you are declaring more then one iifi, dont forget to use semicolom 
(function chai (){
  console.log ('Db is connected')
})();

((username)=> {
  console.log (`wecome back ${username}`)
})("akash")