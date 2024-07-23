window.addEventListener('load', () => {

setPosition()
movement()


})

const setPosition = () => {

  const character = document.getElementById('character')

  character.style.left = '20px'
  character.style.bottom = '180px'

}

const movement = () => {

    const character = document.getElementById('character')
    console.log(character.style)

    document.addEventListener("keydown", (event) => {

          //use event.key to track keys
          const keyName = event.key;
          console.log(keyName)

          //get x and y axis
          let xPixels = +character.style.left.split('px')[0]
          let yPixels = +character.style.bottom.split('px')[0]
          
          //WASD

          if (keyName === "d") {
            if (xPixels <= 1200) {
            xPixels += 10
            console.log(xPixels)
            character.style.left = xPixels + 'px'
            
            console.log(character.style.left)
            }
          } else if (keyName === "a") {
            if (xPixels > 0) {
            xPixels -= 10
            console.log(xPixels)
            character.style.left = xPixels + 'px'
            
            console.log(character.style.left)
            }
          } else if (keyName === "w") {
            if (yPixels >= 160) {
            yPixels += 10
            console.log(yPixels)
            character.style.bottom = yPixels + 'px'
            
            console.log(character.style.bottom)
            }
          } else if (keyName === "s") {
            if (yPixels >= 170) {
            yPixels -= 10
            console.log(yPixels)
            character.style.bottom = yPixels + 'px'
            
            console.log(character.style.bottom)
            }
          }

          // enter portal helper function
          enterPortal()
    })

}

const enterPortal = () => {

  const character = document.getElementById('character')
  let xPixels = +character.style.left.split('px')[0]

  if (xPixels === 730) {
    // alert('entering!')
    window.location = '/index.html'
  

  }

  // ideally let the animation take over as soon as the character
  // portal contact

}