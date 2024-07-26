const home = () => {
    const h1 = document.getElementById('logo')
    
    h1.addEventListener('click', () => {

      document.body.innerHTML =  
      
      `
      
      <div id="top">
          <h1 id="logo">SUN</h1>
          
          <nav id="nav">
            <ul id="nav-items">
                <li id="about" class="nav-item">About</li>
                <li class="nav-item"><a href="">Mission</a></li>
                <li class="nav-item"><a href="">Résumé</a></li>
                <li class="nav-item"><a href="">Projects</a></li>
                <li class="nav-item"><a href="">Contact</a></li>
            </ul>
          </nav>
        </div>
      
      <p id="intro">You've entered the mind of Sun English Jr., an artist, programmer, farmer, musician, and dog-lover living in Prospect, Virginia.</p>
      
      <script src="/splash.js"></script>`

    })
  }