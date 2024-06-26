// dates 

// let myDate = new Date ()
//   console.log (myDate.toString())
//   console.log (myDate.toDateString())
//   console.log (myDate.toLocaleString())
//   console.log (typeof myDate)


// let myCreatedDate = new Date (2023,0,23)
// let myCreatedDate = new Date (2023,0,23,5,3)
// let myCreatedDate = new Date ("2023,01,23")
let myCreatedDate = new Date ("01-14-2023")

//  console.log (myCreatedDate)
//  console.log (myCreatedDate.toString())
//  console.log (myCreatedDate.toDateString())
//  console.log (myCreatedDate.toLocaleString())


// let myTimeStamp = Date.now()
//   console.log(myTimeStamp)
//   console.log (myCreatedDate.getTime())


  // console.log (Math.floor(myCreatedDate/1000))
  // console.log (Math.floor(Date.now()/1000))


  let newDate = new Date ()
    console.log(newDate)
    console.log(newDate.getDay())
    console.log(newDate.getHours())
    console.log (newDate.getMonth())

  console.log(newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"UTC"
  }))