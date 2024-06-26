// modern syntax

const User ={
     userName:"chai",
     password:26838,
}
const Teacher = {
  makeVideo: true
};

const TeachingSupport = {
  isAvailable: true
};

const TASupport = {
  makeAssisment: 'js assignment',
  fullTime: true
};

// Set the prototype of TASupport to TeachingSupport
Object.setPrototypeOf(TASupport, TeachingSupport);
Object.setPrototypeOf(TeachingSupport,User)

console.log(Teacher);           // Outputs: { makeVideo: true }
console.log(TeachingSupport);   // Outputs: { isAvailable: true }
console.log(TASupport);         // Outputs: { makeAssisment: 'js assignment', fullTime: true }

// Check prototype chain
console.log(TASupport.isAvailable); // Outputs: true (inherited from TeachingSupport)
console.log (TeachingSupport.userName)




// Explanation 
/*

1) Defining Objects:
 a) => Teacher, TeachingSupport, and TASupport are objects with their respective properties.

2) Setting Prototype with Object.setPrototypeOf:
    a) => Object.setPrototypeOf(TASupport, TeachingSupport); sets the prototype of TASupport to TeachingSupport. This is the modern and recommended way to set prototypes.
3) Logging Objects:
    a) => console.log(Teacher); outputs the Teacher object.
    b) => console.log(TeachingSupport); outputs the TeachingSupport object.
    c) => console.log(TASupport); outputs the TASupport object.

4)Accessing Inherited Properties:
      a) => console.log(TASupport.isAvailable); demonstrates that TASupport has access to properties from its prototype (TeachingSupport).

5) Summary
          a) =>Prototype Chain: Setting up the prototype chain correctly ensures that properties and methods from the prototype are available to the inheriting object.
          b) =>Modern Methods: Use Object.setPrototypeOf or Object.create for setting prototypes in a clean and standardized way.

*/



// old syntax 


const User01 = {
  name: "chai",
  email: "chai@google.com"
}

const Teacher01 = {
  makeVideo: true
}

const TeachingSupport01 = {
  isAvailable: false
}

const TASupport01 = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport01
}

Teacher01.__proto__ = User01

console.log(Teacher01);           // Outputs: { makeVideo: true }
console.log(TeachingSupport01);   // Outputs: { isAvailable: true }
console.log(TASupport01);         // Outputs: { makeAssisment: 'js assignment', fullTime: true }

// Check prototype chain
console.log(TASupport01.isAvailable); // Outputs: true (inherited from TeachingSupport)
console.log (Teacher01.name)
