// arrow function have two syntax first Explicit return and second is Implicit return 

  //++++++++++++++++++++++++++++++++ syntax of implicit and explicit  return +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // syntax of explicit return 

   // ()=> {}

   /*
                     ()=>{
                           return
                          }
              */
      
/*
 exp :
            const add = (a, b) => {
                       const result = a + b;
                        return result;
                    };
              console.log(add(2, 3));  Output: 5
     */


  // syntax implicit return 
              // ()=>   
                  // exp :  const addTwo = (num1 , num2 ) =>  num1 + num2
                                //console.log(addTwo(4,4));


              // ()=>()
 /*                         exp:  const addTwo = (num1,num2) => (num1 + num2)
                                   console.log(addTwo (4,4));

  */

 /*                          exp: const addTwo = ()=> ({username:"akash singh chauhan"})
                                console.log(addTwo(4,4))

   */

/*
                     Example of Implicit Return
                           const add01 = (a, b) => (a + b);
                           console.log(add01(2, 3));  Output: 5
 */
//++++++++++++++++++++++++++++++++++++++++++++ example  to  implit and explicit return of arrow +++++++++++++++++++++++++++++++++=++  


// Example A: Arrow Function with Explicit Return
                        // Multi-line
                 const sayHi = (name) => {
                          return name
                                        }
  
                       // Single-line
                   const sayHi01 = (name) => { return name }


// Example B: Arrow Function with Implicit Return

                      // Single-line
                         const sayHi02 = (name) => name

                     // Multi-line
                       const sayHi03 = (name) => (
                                            name
                                           )

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++                 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// arrow function doesnt allow to use this keyword 




 // uses in the array 
//  const myArray = [1,2,4,6,7]
//  myArray.forEach ( ()=> ())