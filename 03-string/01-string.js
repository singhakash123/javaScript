const name = "akash singh chauhan"
const repoCount=50

//console.log (name+repoCount+"value in number")

 /// string interpulation 

console.log (`hello my name is ${name},and my repocount is ${repoCount}`)



/////////////////   string 
const gamer = "akash singh"
const gameName = ('akash')
 
console.log (gameName[1])
//console.log (gameName__proto__)
console.log (gameName.toUpperCase())
console.log (gameName.toLowerCase())
console.log (gameName.charAt(2))
console.log (gameName.indexOf('a'))
console.log (gameName.length)


// substring and slice 

const newString = gameName.substring(0,4)
console.log (newString)

const anotherString =gameName.slice(0,3)
console.log (anotherString)
      // note : difference between substring and slice is ,in substaring we cant give negative parameter and in slice we can give negative paramter 



/////////////    trim , trimstart and trimend 

const newStringOne = "  hitesh    "
 console.log (newStringOne)
 console.log (newStringOne.trim())
 console.log (newStringOne.trimStart())
 console.log (newStringOne.trimEnd())


 ////  replace // replace takes two parameter : replace(serchvalue, replacevalue) // both should be in the format of string

 const url = 'https://akash@gamil.com'
 console.log(url.replace('@',"20"))


 ////    includes 

 const newUrl = "akash@iwe9e"
 console.log (newUrl.includes('a'))


 /// split // split takes two parameter first is seprater and second is limit //method) String.split(separator: string | RegExp, limit?: number

 const gameChanger = "akash % singh % chauhan"
  console.log (gameChanger.split('%',3))
