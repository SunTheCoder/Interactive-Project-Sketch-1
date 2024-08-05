window.addEventListener('load', () => {

setPosition()

movement()



})


const setPosition = () => {

  const character = document.getElementById('character')

  character.style.left = '1000px'
  character.style.bottom = '50px'

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
            if (xPixels <= 1190) {
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

  const portal = document.getElementById('portal')
  const character = document.getElementById('character')
  
  let xPixels = +character.style.left.split('px')[0]

  if (xPixels === 1130) {
    
    portal.style.opacity = '0'
    portal.style.transition = 'opacity 2s linear'
    character.style.opacity = '0'
    character.style.transition = 'opacity 1.2s linear'
    
   
    setTimeout( () => {
    
      document.body.innerHTML =  
      
      `
      
      <div id="top">
          <h1 id="logo"></h1>
          
          <nav id="nav">
            <ul id="nav-items">
                <li  class="nav-item"><img id="about" src="/about.png" alt=""></li>
                <li id="mission" class="nav-item">Mission</li>
                <li class="nav-item"><a href="">Résumé</a></li>
                <li id="projects" class="nav-item">Projects</li>
                <li id="contact" class="nav-item">Contact</li>
            </ul>
          </nav>
        </div>
      
      <p id="intro">You've entered the mind of Sun English Jr., an artist, programmer, farmer, musician, and dog-lover living in Prospect, Virginia.</p>
      `

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
  const h1 = document.getElementById('logo')
  
  setTimeout( ()=> {
      
      h1.style.opacity = '1'
      nav.style.opacity = '1'
      
      
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

    const projects = document.getElementById('projects')
    const about = document.getElementById('about')
    const contact = document.getElementById('contact')
    const mission = document.getElementById('mission')
    
    document.addEventListener('click', (event) => {
      event.preventDefault()
      
      if (event.target === about) {
      document.body.innerHTML = 
      `
      <div id="top">
      <h1 id="logo"></h1>
      
      <nav id="nav">
      <ul id="nav-items">
      <li class="nav-item"><img id="about" src="/about.png" alt=""></li>
      <li id="mission" class="nav-item">Mission</li>
      <li class="nav-item"><a href="">Résumé</a></li>
      <li id="projects" class="nav-item">Projects</li>
      <li id="contact" class="nav-item">Contact</li>
      </ul>
      </nav>
      </div>
      <div id="about-container">
      <img id="my-img" src="/Calendula2.jpg"/>
      <p id="about-p-header" >Motivated by process. Excited by challenges.</p>
      <p id="about-p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque mi nunc, et ullamcorper dolor blandit non. Integer pretium nunc vestibulum sollicitudin cursus. Aliquam sit amet nulla volutpat, sollicitudin nisl ac, iaculis magna. Duis bibendum tempor accumsan. Aenean interdum tempor pretium. Sed ac justo hendrerit, tincidunt quam sit amet, sollicitudin turpis. Ut suscipit purus id tortor scelerisque bibendum. Praesent fringilla lorem id efficitur iaculis. Ut eget leo augue. Integer sodales varius purus vitae euismod. Nam sit amet justo quis velit egestas cursus eget sed est. Quisque sed luctus mauris, tristique vehicula nibh. Nam maximus porttitor ligula. Pellentesque tempus pellentesque est, et luctus leo lobortis at. Vivamus mollis sit amet orci in sollicitudin.</p>
      </div>
      `
      
      const nav = document.getElementById('nav-items')
      const div = document.getElementById('about-container')
      const h1 = document.getElementById('logo')
      
      div.style.display = 'flex'
      div.style.flexDirection = 'column'
      div.style.alignItems = 'center'
        
        div.children[1].style.textAlign = 'center'

        div.children[0].style.width = '40%'

        nav.style.opacity = '1'
        h1.style.opacity = '1'
        
        
        home()
        
      }

      
      
      
      
      if (event.target === mission) {
      document.body.innerHTML = 
      
      `
      <div id="top">
          <h1 id="logo"></h1>
        
          <nav id="nav">
            <ul id="nav-items">
            <li class="nav-item"><img id="about" src="/about.png" alt=""></li>
            <li id="mission" class="nav-item">Mission</li>
            <li class="nav-item"><a href="">Résumé</a></li>
            <li id="projects" class="nav-item">Projects</li>
            <li id="contact" class="nav-item">Contact</li>
            </ul>
          </nav>
      </div>

      <p id="mission-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque mi nunc, et ullamcorper dolor blandit non. Integer pretium nunc vestibulum sollicitudin cursus. Aliquam sit amet nulla volutpat, sollicitudin nisl ac, iaculis magna. Duis bibendum tempor accumsan. Aenean interdum tempor pretium. Sed ac justo hendrerit, tincidunt quam sit amet, sollicitudin turpis. Ut suscipit purus id tortor scelerisque bibendum. Praesent fringilla lorem id efficitur iaculis. Ut eget leo augue. Integer sodales varius purus vitae euismod. Nam sit amet justo quis velit egestas cursus eget sed est. Quisque sed luctus mauris, tristique vehicula nibh. Nam maximus porttitor ligula. Pellentesque tempus pellentesque est, et luctus leo lobortis at. Vivamus mollis sit amet orci in sollicitudin.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque mi nunc, et ullamcorper dolor blandit non. Integer pretium nunc vestibulum sollicitudin cursus. Aliquam sit amet nulla volutpat, sollicitudin nisl ac, iaculis magna. Duis bibendum tempor accumsan. Aenean interdum tempor pretium. Sed ac justo hendrerit, tincidunt quam sit amet, sollicitudin turpis. Ut suscipit purus id tortor scelerisque bibendum. Praesent fringilla lorem id efficitur iaculis. Ut eget leo augue. Integer sodales varius purus vitae euismod. Nam sit amet justo quis velit egestas cursus eget sed est. Quisque sed luctus mauris, tristique vehicula nibh. Nam maximus porttitor ligula. Pellentesque tempus pellentesque est, et luctus leo lobortis at. Vivamus mollis sit amet orci in sollicitudin.
      </p>
      `
      
      const nav = document.getElementById('nav-items')
      const h1 = document.getElementById('logo')
      
        nav.style.opacity = '1'
        h1.style.opacity = '1'
        
        home()
        
        
      }

      if (event.target === projects) {
      document.body.innerHTML = 
      
      `
      <div id="top">
          <h1 id="logo"></h1>
        
          <nav id="nav">
            <ul id="nav-items">
            <li  class="nav-item"><img id="about" src="/about.png" alt=""></li>
            <li id="mission" class="nav-item">Mission</li>
            <li class="nav-item"><a href="">Résumé</a></li>
            <li id="projects" class="nav-item">Projects</li>
            <li id="contact" class="nav-item">Contact</li>
            </ul>
          </nav>
      </div>
      `
      
      const nav = document.getElementById('nav-items')
      const h1 = document.getElementById('logo')
      
        nav.style.opacity = '1'
        h1.style.opacity = '1'
        
        home()
        
        
      }

      if (event.target === contact) {
      document.body.innerHTML = 
      
      `
      <div id="top">
          <h1 id="logo"></h1>
      
          <nav id="nav">
            <ul id="nav-items">
            <li class="nav-item"><img id="about" src="/about.png" alt=""></li>
            <li id="mission" class="nav-item">Mission</li>
            <li class="nav-item"><a href="">Résumé</a></li>
            <li id="projects" class="nav-item">Projects</li>
            <li id="contact" class="nav-item">Contact</li>
            </ul>
          </nav>
      </div>

      <div id="contact-container">
        <p id="contact-info-header"> My contact information: </p>

        <p> Email: Sunenglishjr@gmail.com </p>
        <p> Phone: 510-388-4720 </p>
        <form action="" method="get" class="form-example">
          <div class="form-example">
            <label for="name">Enter your name: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div class="form-example">
            <label for="email">Enter your email: </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div class="form-example">
            <input type="submit" value="Subscribe!" />
          </div>
        </form>
      </div>
      `
      
      const nav = document.getElementById('nav-items')
      const h1 = document.getElementById('logo')
      
        nav.style.opacity = '1'
        h1.style.opacity = '1'
        
        home()
        
        
      }

      nav()
    })
    
  }

  const home = () => {
    const h1 = document.getElementById('logo')
    
    h1.addEventListener('click', () => {

      document.body.innerHTML =  
      
      `
      
      <div id="top">
          <h1 id="logo"></h1>
          
          <nav id="nav">
            <ul id="nav-items">
                <li class="nav-item"><img id="about" src="/about.png" alt=""></li>
                <li id="mission" class="nav-item">Mission</li>
                <li class="nav-item"><a href="">Résumé</a></li>
                <li id="projects" class="nav-item">Projects</li>
                <li class="nav-item"><a href="">Contact</a></li>
            </ul>
          </nav>
        </div>
      
      <p id="intro">You've entered the mind of Sun English Jr., an artist, programmer, farmer, musician, and dog-lover living in Prospect, Virginia.</p>
      `

      introDisplay()
      navDisplay()
      nav()
    })

  }


 
  
