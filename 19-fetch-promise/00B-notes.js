  // fetch (http://github.com/users/hiteshchoudhary).then ().catch().finally // this called cosume of promises 

  //////////////////////////////////// /////////////////////////////////// fetch //////////////////////////////////////////////////
  
  const url = 'https://jsonplaceholder.typicode.com/users';

  fetch(url)

    .then((response) => {
      return response.json()
    })

    .then((data) => {
      let authors = data;
    })

    .catch(function(error) {
      console.log(error);
    });


 /////////////////////////////////////////////////////////////////////  async await  ///////////////////////////////////////////////////////

 const urlLink = 'https://jsonplaceholder.typicode.com/users';

 async function runProcess (){

  try {
    const response = await fetch (urlLink)
    const json = await response.json()
    console.log (json)

  } catch (error) {
    console.log (error)
  }
 }

 runProcess()