class User {
  constructor (username){
   this.username = username
  }

  logMe(){
    console.log (`username:${this.username}`)
  }

 static creatId (){
    return `123`
  }
}

const chai = new User ('akash')
// chai.logMe()
// console.log (chai.creatId)

class Teacher extends User {
  constructor(username,email){
    super(username)
    this.email = email 
  }
  useMe(){
    console.log (`wecome to ${this.username}`)
  }
  
}

const akash = new Teacher ('rohit',"akashlife2004@gmail.com")
akash.useMe()
akash.logMe()
// chai.useMe()
// console.log (akash.creatId())