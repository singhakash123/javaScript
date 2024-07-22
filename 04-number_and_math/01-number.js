const score = 400 
 console.log (score)


const balance = new Number (100)
 console.log (balance)
 console.log (balance.toString().length)


// toFixed 
  // The toFixed() method formats a number using fixed-point notation, which means it returns a string representation of the number with a fixed number of digits after the decimal point.
   // Syntax
    //The general syntax for toFixed() is:
    // number.toFixed(fractionDigits) 
     /*
     Where:
         fractionDigits is the number of digits to appear after the decimal point.
     */
     // Examples
    // 1 // Formatting a number with 2 decimal places:
      const num = 123.456;
      const formattedNum = num.toFixed(2);
      console.log(formattedNum); // "123.46"
 
  // 2 // Formatting a number with 4 decimal places:
  const num01 = 123.456;
  const formattedNum01 = num01.toFixed(4);
  console.log(formattedNum01); // "123.4560"

 // toPrecision() 
 // The toPrecision() method formats a number using either fixed-point or exponential notation, depending on the size of the number.
 // Syntax 
  //The general syntax for toPrecision() is:
            // number.toPrecision(precision)
            // Where:
               // precision is the number of significant digits to appear in the formatted string.

   //  Examples  
   // 1 // Formatting a number with 5 significant digits:
    
   const num92 = 123.456;
   const formattedNum92 = num92.toPrecision(5);
   console.log(formattedNum); // "123.46"

   // 2 //  Formatting a large number with 5 significant digits:
   const num3 = 1234567890;
   const formattedNum3 = num3.toPrecision(5);
   console.log(formattedNum); // "1.2346e+9"

//// to localstring 
const hundrads = 1000000
console.log (hundrads.toLocaleString('en-IN')) // output : 10,00,000



