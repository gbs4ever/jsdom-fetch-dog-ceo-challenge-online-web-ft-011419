console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let container = document.querySelector('#dog-image-container')
document.addEventListener('DOMContentLoaded', function () {
 
  callfetch(imgUrl)
  breedimages()
})

function callfetch(imgUrl) {
fetch(imgUrl).then(r => r.json())
    .then(data => {
      addImage(data,container)
   });
    }



function addImage(data,container){

  data.message.forEach(element => {
    let img = document.createElement('img')
    img.src = element
    container.appendChild(img)
  })
}

function breedimages() {
  container = document.querySelector('#dog-breeds')
  let list = document.createElement('li')
  container.appendChild(list)
  callfetch(breedUrl)
  console.log()
 
  }



