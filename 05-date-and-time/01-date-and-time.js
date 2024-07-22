/*
Date Object Methods
 
Method	                           Description	                                       Example Output
toString()	           Returns a string representation of the Date object              Wed Jun 14 2023 14:30:00 GMT-0700 (Pacific Daylight Time)
toDateString()         Returns a string representation of the Date object 
                         in a short format	                                           Wed Jun 14 2023
toLocaleString()	     Returns a string representation of the Date object in a
                      format specific to the user's locale	                           6/14/2023, 2:30:00 PM

*/






// dates 
// Creating a new Date object
// The first section of code creates a new Date object using the new Date() constructor:

let myDate = new Date ()
//     toString(): 
  console.log (myDate.toString()) 
               // this logs a string representation of the Date object in the format Wed Jun 14 2023 14:30:00 GMT-0700 (Pacific Daylight Time).
//    toDateString():
  console.log (myDate.toDateString())
          // This logs a string representation of the Date object in the format Wed Jun 14 2023.
//  toLocaleString():
  console.log (myDate.toLocaleString())
            // This logs a string representation of the Date object in a format that is specific to the user's locale, such as 6/14/2023, 2:30:00 PM.
  console.log (typeof myDate)

 // Creating a Date Object with Specific Values
          // The next section of code creates a new Date object with specific values:
let myCreatedDate01 = new Date (2023,0,23)
let myCreatedDate02= new Date (2023,0,23,5,3)
let myCreatedDate03 = new Date ("2023,01,23")
let myCreatedDate = new Date ("01-14-2023")
          // This creates a Date object representing January 14, 2023.

 console.log (myCreatedDate)

 // toString():
 console.log (myCreatedDate.toString())
     // This logs a string representation of the myCreatedDate object in the format Wed Jan 14 2023 00:00:00 GMT-0700 (Pacific Standard Time).
// toDateString():
 console.log (myCreatedDate.toDateString())
         // This logs a string representation of the myCreatedDate object in the format Wed Jan 14 2023.
  
   //     toLocaleString():  
 console.log (myCreatedDate.toLocaleString())
                         // This logs a string representation of the myCreatedDate object in a format that is specific to the user's locale, such as 1/14/2023, 12:00:00 AM.


 
// Creating a new Date object
// The first section of code creates a new Date object using the new Date() constructor:
  let newDate = new Date ()


      // console.log(newDate);: The output 2023-06-14T21:30:00.000Z is the ISO string representation of the Date object, which includes the date, time, and timezone (UTC).
    console.log(newDate)

    // console.log(newDate.getDay());: The output 3 represents the day of the week, where 0 is Sunday, 1 is Monday, ..., and 6 is Saturday. In this case, 3 corresponds to Wednesday.
    console.log(newDate.getDay())

    // console.log(newDate.getHours());: The output 21 represents the hour of the day in 24-hour format, ranging from 0 to 23.
    console.log(newDate.getHours())

    // console.log(newDate.getMonth());: The output 5 represents the month, where 0 is January, 1 is February, ..., and 11 is December. In this case, 5 corresponds to June.
    console.log (newDate.getMonth())

    // console.log(newDate.toLocaleString('default',{ weekday:"long", timeZone:"UTC" }));: The output Wednesday, June 14, 2023, 21:30:00 is the formatted string representation of the Date object, using the toLocaleString() method with the specified options:
    // weekday:"long": formats the weekday as a long string (e.g., "Wednesday" instead of "Wed").
    // timeZone:"UTC": formats the date and time in the UTC time zone.
  console.log(newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"UTC",
    month :"long",
  }))