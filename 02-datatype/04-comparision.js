// comparison of same data type 

console.log (2>1)
console.log (2>=1)
console.log (2<1)
console.log (2==1)
console.log (2!=1)



// comparison of different data type 
console.log ('2'>1)
console.log ('02'>1)


console.log (null > 0)
console.log (null ==0)
console.log (null >=0)

          // note : the reason is that an equality check ==  and comparison <,>,>=,<= work differently 
          // comparison convert null to a number ,treating it as a 0 , thats why (3) null >=0 is true and and (1) null >0 is false 
  console.log (undefined > 0)
  console.log (undefined ==0)
  console.log (undefined >=0)
        
// == or === 
   // === thiple equal check data type and value
  console.log ("2" == 2)
  console.log ('2'===2)