// comparison of same data type 

console.log (2>1)
console.log (2>=1)
console.log (2<1)
console.log(2<=1);
console.log (2==1) // its check only value not data type 
console.log (2!=1) // not equal to 



// comparison of different data type 
console.log ('2'>1)
console.log ('02'>1)
         /*
In JavaScript, when you compare a string with a number using the > operator, JavaScript will perform a lexicographic comparison, which means it will compare the characters of the string in alphabetical order.
So, let's see what happens:

console.log('2' > 1):
JavaScript will convert the number 1 to a string, so the comparison becomes '2' > '1'.
Since '2' comes after '1' in alphabetical order, the result is true.
Output: true
console.log('02' > 1):
Again, JavaScript will convert the number 1 to a string, so the comparison becomes '02' > '1'.
Since '0' comes before '1' in alphabetical order, the result is false.
Output: false
         */


console.log(null > 0); // Output: false
console.log(null == 0); // Output: false
console.log(null >= 0); // Output: true
          // note : the reason is that an equality check ==  and comparison <,>,>=,<= work differently 
          // comparison convert null to a number ,treating it as a 0 , thats why (3) null >=0 is true and and (1) null >0 is false 
          /*
           What's happening?
              In JavaScript, null is a primitive value that represents the intentional absence of any object value. When you compare null with a number using relational operators (>, ==, >=, etc.), JavaScript performs a series of implicit conversions to determine the result.
Here's what happens in each case:

console.log(null > 0); // Output: false
When comparing null with a number using the > operator, JavaScript converts null to a number using the ToNumber() function. According to the ECMAScript specification, ToNumber(null) returns 0. So, the comparison becomes 0 > 0, which is false.

console.log(null == 0); // Output: false
In this case, JavaScript performs a loose equality check using the == operator. When comparing null with a number, JavaScript checks if the two values are identical, without performing any implicit conversions. Since null is not equal to 0, the result is false.

console.log(null >= 0); // Output: true
This is where things get interesting! When comparing null with a number using the >= operator, JavaScript again converts null to a number using ToNumber(), which returns 0. So, the comparison becomes 0 >= 0, which is true.

Why does null >= 0 return true?

The reason for this behavior lies in the way JavaScript handles the >= operator. When the left operand is null, JavaScript treats it as if it were 0 for the purpose of the comparison. This is because null is considered a "falsy" value, and in the context of a comparison, it's treated as if it were 0.
This behavior is specific to the >= operator and doesn't apply to other relational operators like >, <, or <=.


In summary:

null > 0 returns false because null is converted to 0 and 0 > 0 is false.
null == 0 returns false because null is not identical to 0.
null >= 0 returns true because null is treated as if it were 0 for the purpose of the comparison, and 0 >= 0 is true.

          */

console.log(undefined > 0); // Output: NaN
console.log(undefined == 0); // Output: false
console.log(undefined >= 0); // Output: false
/*
In JavaScript, undefined is a primitive value that represents an uninitialized or non-existent variable. When you compare undefined with a number using relational operators (>, ==, >=, etc.), JavaScript performs a series of implicit conversions to determine the result.

Here's what happens in each case:
   console.log(undefined > 0); // Output: NaN
When comparing undefined with a number using the > operator, JavaScript converts undefined to a number using the ToNumber() function. According to the ECMAScript specification, ToNumber(undefined) returns NaN (Not-a-Number). So, the comparison becomes NaN > 0, which is also NaN. In JavaScript, any comparison involving NaN returns NaN.

console.log(undefined == 0); // Output: false
In this case, JavaScript performs a loose equality check using the == operator. When comparing undefined with a number, JavaScript checks if the two values are identical, without performing any implicit conversions. Since undefined is not equal to 0, the result is false.


console.log(undefined >= 0); // Output: false
When comparing undefined with a number using the >= operator, JavaScript again converts undefined to a number using ToNumber(), which returns NaN. So, the comparison becomes NaN >= 0, which is also false. In JavaScript, any comparison involving NaN returns false for relational operators like >=, >, <, and <=.

Why does undefined > 0 return NaN?

The reason for this behavior lies in the way JavaScript handles the ToNumber() conversion for undefined. When undefined is converted to a number, it becomes NaN, which is a special value that represents an invalid or unreliable numeric result. Any comparison involving NaN returns NaN or false, depending on the operator used.

In summary:

undefined > 0 returns NaN because undefined is converted to NaN and NaN > 0 is NaN.
undefined == 0 returns false because undefined is not identical to 0.
undefined >= 0 returns false because undefined is converted to NaN and NaN >= 0 is false
*/
        
// == or === 
   // === triple equal check data type and value whereas double equal check only value 
   console.log("2" == 2); // Output: true
   console.log('2' === 2); // Output: false
    /*
In JavaScript, when you compare a string with a number using the == operator, JavaScript performs a type coercion to convert the string to a number. This is known as a "loose equality" check.

console.log("2" == 2); // Output: true
In this case, JavaScript converts the string "2" to a number using the ToNumber() function, which returns 2. Then, the comparison becomes 2 == 2, which is true. This is because the == operator performs a type coercion, allowing the comparison to succeed even though the original types were different.

console.log('2' === 2); // Output: false
However, when you use the === operator, JavaScript performs a "strict equality" check, which means it checks both the value and the type of the operands. In this case, the string "2" is not identical to the number 2, so the comparison returns false. The === operator does not perform type coercion, so the types must match exactly for the comparison to succeed.

Key differences:

== (loose equality) performs type coercion, allowing comparisons between different types.
=== (strict equality) checks both value and type, requiring exact matches.
In summary:

"2" == 2 returns true because JavaScript converts the string to a number and performs a loose equality check.
'2' === 2 returns false because JavaScript performs a strict equality check, which requires exact matches in both value and type.
Remember, when in doubt, use === for strict equality checks to avoid unexpected type coercion behaviors!
    */