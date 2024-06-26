// object destructre 

const courseName ={
    course:"js in hindi",
    coursePrice :999,
    couseInstructor:"hitesh choudhary"
}

console.log (courseName.couseInstructor) // normal way 

const {couseInstructor} = courseName  // this is called destructutre of object 
console.log (couseInstructor)

const {couseInstructor:instructor} = courseName
console.log (instructor)

// how to do desturctor in react 

const navbar = ({company})=>{

}
navbar (company="hitesh")



///  api  
// {
//   "name":"akash singh chauhan",
//   "age" :18
//   "isLoggedIn":true
// }

// [
//   {},
//   {},
//   {},
//   {}
// ]


// randomuser.me
// json.formator 
// https://api.github.com/users/hiteshchoudhary