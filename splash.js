window.addEventListener('load', () => {

setPosition()

movement()



})


const setPosition = () => {

  const character = document.getElementById('character')

  character.style.left = '20px'
  character.style.bottom = '-441px'

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
           
            yPixels += 10
            console.log(yPixels)
            character.style.bottom = yPixels + 'px'
            
            console.log(character.style.bottom)
            
          } else if (keyName === "s") {
            
            yPixels -= 10
            console.log(yPixels)
            character.style.bottom = yPixels + 'px'
            
            console.log(character.style.bottom)
            
          }

          // enter portal helper function
          enterPortal()
    })

}

const enterPortal = () => {
  const innerPortal = document.getElementById('inner-portal')
  const portal = document.getElementById('portal')
  const character = document.getElementById('character')
  
  let xPixels = +character.style.left.split('px')[0]

  if (xPixels === 730) {
    
    portal.style.opacity = '0'
    portal.style.transition = 'opacity 2s linear'
    character.style.opacity = '0'
    character.style.transition = 'opacity 1.2s linear'
    innerPortal.style.opacity = '0'
    innerPortal.style.transition = 'opacity 1.2s linear'
   
    setTimeout( () => {
    
      document.body.innerHTML =  
      
      `
      
      <nav id="nav">
      <ul id="nav-items">
      <li id="about" class="nav-item">About</li>
      <li id="mission" class="nav-item"><a href="">Mission</a></li>
      <li id="resume" class="nav-item"><a href="">Résumé</a></li>
      <li id="projects" class="nav-item"><a href="">Projects</a></li>
   
      <li class="nav-item"><a href="">Contact</a></li>
      </ul>
      </nav>
      
      <p id="intro">You've entered the mind of Sun English Jr., an artist, programmer, farmer, musician, and dog-lover living in Prospect, Virginia.</p>
      
      <script src="/splash.js"></script>`

  introDisplay()
  navDisplay()
  nav()

    }, 2000)
  }

  // ideally let the animation take over as soon as the character
  // portal contact
}





const navDisplay = () => {

  const nav = document.getElementById('nav-items')
  
  setTimeout( ()=> {
      
      nav.style.opacity = 1
      nav.style.justifyContent = 'flex-end'
      nav.style.marginRight = '150px'
      
      nav.style.transition = 'opacity 1s linear'
    }, 5000)
  
  }
  
  const introDisplay = () => {
  
      const intro = document.getElementById('intro')
      
  setTimeout( ()=> {
          
          
      intro.style.opacity = '1'
      
      intro.style.transition = 'opacity 3s linear'
    })
      
      
  }

  const nav = () => {

    const about = document.getElementById('about')

    about.addEventListener('click', (event) => {
      event.preventDefault()
      
      
        document.body.innerHTML = 
        `
        <nav id="nav">
          <ul id="nav-items">
              <li class="nav-item"><a href="">About</a></li>
              <li class="nav-item"><a href="">Mission</a></li>
              <li class="nav-item"><a href="">Résumé</a></li>
              <li class="nav-item"><a href="">Projects</a></li>
              <li class="nav-item"><a href="">Contact</a></li>
          </ul>
        </nav>
        <div id="about-container">
            <img id="my-img" src="/Calendula2.jpg"/>
            <p>Motivated by process. Excited by challenges.</p>
        </div>
        `
        
        const nav = document.getElementById('nav-items')
        const div = document.getElementById('about-container')

        div.style.display = 'flex'
        div.style.flexDirection = 'column'
        div.style.alignItems = 'center'
        
        div.children[1].style.textAlign = 'center'

        div.children[0].style.width = '20%'

        nav.style.opacity = '1'
        nav.style.justifyContent = 'flex-end'
        nav.style.marginRight = '150px'
        

    })
  }


