function addParagraph(paragraph) {
    let firstWord = paragraph.split(' ')[0]
    let rest = paragraph.substring(firstWord.length)

    const span = document.createElement('span')
    span.innerText = firstWord
    span.classList.add('add-indent')

    const p = document.createElement('p')

    p.appendChild(span)
    p.appendChild(document.createTextNode(' ' + rest))
    document.body.appendChild(p)
}

addParagraph(`Hello how are you`)

const notificationDisplay = document.getElementById('notificationDisplay')
const notificationButton = document.getElementById('notification')

notificationButton.addEventListener('click', function() {
    notificationDisplay.innerText = 'New email in your inbox!!'
})
window.addEventListener("load", () => {
    const box = document.querySelector(".box");
    const image = box.querySelector("img");
  
    const newElem = document.createElement("p");
    newElem.textContent = "Image: ";
    newElem.appendChild(document.createElement("code")).textContent =
      image.currentSrc;
    box.appendChild(newElem);
  });

  let images = [
    {
    src: `./assets/600.jpg 600w`
    }
    {
    src: `./assets/800.jpg 800w`
    }
    {
    src: `./assets/1000.png 1000w`
    }
    {
    src: `./assets/2000.jpg 2000w`
  }
  ]



  const thumbNailContainer = document.getElementById('thumbNailContainer')
  const displayImage = document.getElementById('displayImage')
  
  let images = [
      {
          src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'California blooming like crazy after months of non-stop rains. Even deserts are covered with juicy bright flowers. The photo was made on Diamond Valley Lake a few days ago.'
      },
      {
          src: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'An image of a jungle'
      },
      {
          src: 'https://images.unsplash.com/photo-1502164980785-f8aa41d53611?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Found these walking out of work, what a surprise'
      }
  ]
  
  function createThumbnails() {

      images.forEach(function (image) {
          let imageElem = document.createElement('img')
          imageElem.src = image.src
          imageElem.alt = image.alt
          imageElem.addEventListener('click', function() {
              console.log(image)
              createBigImage(image)    
          })

          imageElem.setAttribute('tabindex', '0')
          thumbNailContainer.appendChild(imageElem)
      })
  }
  
  createThumbnails()

  function createBigImage(img) {
      displayImage.innerHTML = ''
      const bigImage = document.createElement('img')
      bigImage.src = img.src
      bigImage.alt = img.alt
      displayImage.appendChild(bigImage)
  }