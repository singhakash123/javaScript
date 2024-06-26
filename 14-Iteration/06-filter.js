/*
filter
The filter method creates a new array with all elements that pass the test implemented by the provided function.
Syntax

  const newArray = array.filter(callback(element, index, array));

  // expltion of this syntax 

*/
// Example
// Filter out numbers greater than 10:
const myNum = [5, 15, 8, 12, 3]; // Example array

const filterd =myNum.filter ((number)=> number > 10)
console.log (filterd)
const newNums = [];

myNum.forEach((num) => { // Use the same parameter name
  if (num > 10) {
    newNums.push(num);
  }
});

console.log(newNums); // Output: [15, 12]



const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let  newBooks =books.filter ((bk)=>bk.genre ==="Non-Fiction")
    newBooks = books .filter((bk)=>{
      return bk.genre === "Non-Fiction" && bk.publish >= 1990
    })
   newBooks = books.filter ((bk)=>{
      return bk.edition >=2000 && bk.publish >=1980
   })
console.log (newBooks)





































