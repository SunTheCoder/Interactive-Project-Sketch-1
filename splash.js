window.addEventListener('load', () => {

movement()


})

const movement = () => {

    const character = document.getElementById('character')
    console.log(character.style)

    document.addEventListener(
        "keydown",
        (event) => {
          const keyName = event.key;
          console.log(keyName)

          let xPixels = +character.style.left.split('px')[0]
          let yPixels = +character.style.bottom.split('px')[0]
          
          

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
            // if (yPixels >= 0) {
            yPixels += 10
            console.log(yPixels)
            character.style.bottom = yPixels + 'px'
            
            console.log(character.style.bottom)
            // }
          }

          // enter portal helper function
          enterPortal()
    })

}

const enterPortal = () => {

  const character = document.getElementById('character')
  let xPixels = +character.style.left.split('px')[0]

  if (xPixels === 730) {
    alert('entering!')
  }

  // ideally let the animation take over as soon as the character
  // portal contact


}