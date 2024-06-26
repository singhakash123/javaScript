// console.log (Math.pi)
// Math.pi = 5
// console.log (Math.pi)

// writable: false,
// enumerable: false,
// configurable: false


const descriptor =Object.getOwnPropertyDescriptor (Math,'PI')
console.log (descriptor)


const chai ={
  name:"ginger chai",
  price:250,
  isAvailable:true,

  orderChai:function(){
    console.log ('chai nahi bani')
  }
}
console.log (chai)

const chaiDescriptor=Object.getOwnPropertyDescriptor(chai,"name")
console.log (chaiDescriptor)

Object.defineProperty(chai,"name",{
//writable: false,
 enumerable: false,
//configurable: false
})

// const updateDescriptor =Object.getOwnPropertyDescriptor(chai,"name")
// console.log (updateDescriptor)

for (let [key,value] of Object.entries(chai)) {
  if (typeof value !== 'function') {
    console.log (`${key}:${value}`)
  }
}