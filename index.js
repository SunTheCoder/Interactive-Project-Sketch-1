window.addEventListener('load', () => {

    navDisplay()
    introDisplay()

})


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
    
   
        
    intro.style.opacity = '1'
        
    intro.style.transition = 'opacity 3s linear'
      
    
}