// note : 
     // querySelector // return  single value 
     // querySelectorAll // return  nodelist 
     // getElementByClassName// return  html collection 
     // getElementById // only for id 
  

////////////////////////////                     getElementById                            ////////////////////////////////////

const title = document.getElementById('title') 
/* 
output: 
<h1 id="2" class="main heading" style="background-color: blue; padding: 15px; border-radius: 20px;">dom learing  by self <span style="display: none;">text test </span>
</h1>

*/
console.log (title.id )  // output : title
//console.log (title.class) // not allowed
console.log (title.className) // main
console.log (title.getAttribute('id')) // title
console.log (title.getAttribute('class')) // heading
title.setAttribute('class',"main heading")
title.setAttribute('id',Math.floor((Math.random()*10)+1).toString() ,title)
title.style.backgroundColor="yellow"
title.style.padding="15px"
title.style.borderRadius="20px"

console.log (title.innerHTML) // output : dom learing  by self <span style="display: none;">text test </span>

console.log (title.textContent) //output: dom learing  by self text test

console.log (title.innerText)  // output : dom learing by self




///////////////////////// document.querySelector //////////////////////////////////////////////////////////////
// querySelector return only one value ,
const query01 =document.querySelector('h2')
console.log (query01.textContent)

const query02 =document.querySelector('#title')
console.log(query01.textContent)

const query03 =document.querySelector('.heading')
console.log (query03.textContent)

const query04 =document.querySelector('input[type="password"]')
console.log (query04)

// const queryFinal = document.querySelector('p:first-child')
//  console.log (queryFinal)

const query05 = document.querySelector('ul')
 const query06 =query05.querySelector('li')
 console.log (query06.style.backgroundColor="green")
//  console.log (query06.style.padding="15px")
 console.log (query06)
 console.log (query06.textContent)
//  console.log (query06.textContent="one to one")

const query08 = document.querySelector('.list-item')
console.log (query08.textContent)


 /////////////////////////////   querySelectorAll ////////////////////////////////
 // it will return nodelist 

 const querryall01 = document.querySelectorAll('li')
 querryall01.forEach(function (l){
     l.style.backgroundColor="red"
 })
 querryall01[1].style.backgroundColor="yellow"
 console.log (querryall01)


 const querryall02 = document.querySelectorAll('h1')
 console.log (querryall02[0].style.backgroundColor="blue")

 const querryall03=document.querySelectorAll('h2')
     querryall03.forEach(function(changeColor){
        changeColor.style.color="yellow"
     })

  querryall03[2].style.color="red"

  console.log (querryall03)
 ////////////////////////////////  getElementByClassName /////////////////////////////////////////////////////////////////////////

 const tempClassList = document.getElementsByClassName('list-item')
 const convertIntoArray =Array.from(tempClassList)
   convertIntoArray.forEach(function(list){
     list.style.backgroundColor="yellow"
     list.style.color ="black"
     list.style.padding="15px"
     list.textContent="akash singh chauhan"
   })