/////////   /////////////////////////////////////////////// Destructuring of object 

const courseName ={
    course:"js in hindi",
    coursePrice :999,
    couseInstructor:"hitesh choudhary"
}

console.log (courseName.couseInstructor) // this is way to access object properties  

const {couseInstructor} = courseName  // this is called destructutre of object 
console.log (couseInstructor)

const {couseInstructor:instructor} = courseName // this is shortest way of 
console.log (instructor)

// Destructuring of Props in ReactJS
          // In ReactJS, destructuring of props is a way to extract specific props from a component's props object and use them directly in the component's code. This can make your code more concise and easier to read.

          function MyComponent({ id, name = "John Doe" }) {
            return (
              <div>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
              </div>
            );
          }
          
          // Usage
          <MyComponent id={1} /> // name will default to "John Doe"


          function MyComponent({ id, name }) {
            return (
              <div>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
              </div>
            );
          }
          
          // Usage
          <MyComponent id={1} name="John Doe" />
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