// push method add value in the exitnig array 

// const marvel_heros = ["spiderman","superman","ironman"]
// const dc_heros =["flash","batsman"]
// marvel_heros.push(dc_heros)
// console.log (marvel_heros)
// console.log (marvel_heros[3][1])



////////  concat // concat return new array 
// const marvel_heros = ["spiderman","superman","ironman"]
// const dc_heros =["flash","batsman"]

// const new_heros = marvel_heros.concat(dc_heros)
// console.log (new_heros)


/// spread operator 
const marvel_heros = ["spiderman","superman","ironman"]
const dc_heros =["flash","batsman"]

const my_new_heros =[...marvel_heros,...dc_heros]
// console.log (my_new_heros)

// flat method (its combibe multiple array into one array) // its return new array 
const another_array =[1,2,3,5,[4,5],4,0,7,[4,6,8]]
const another_new_array  =another_array.flat(Infinity)
// console.log (another_new_array)


// array . isArray  // Array.from // 

// console.log (Array.isArray("akash"))
// console.log (Array.from('chauhan'))  // its convert into array 
// console.log (Array.from({name:"akash"}))
console.log(Array.from(Object.keys({name: "akash"})));
// Output: ["name"]
console.log(Array.from(Object.values({name: "akash"})));
// Output: ["akash"]
console.log(Array.from(Object.entries({name: "akash"})));
// Output: [["name", "akash"]]
let arrayLike = {0: "akash", length: 1};
console.log(Array.from(arrayLike));
// Output: ["akash"]



// convert multiple dataType into array (Array.of)
// const score1 = 100 
// const score2 = 200 
// const score3 = 300 
// const fullName = "akash singh chauhan"
// console.log (Array.of(score1,score2,score3,fullName))