import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <main>
    <nav>
    <div class='navbar-logo'>
    <img src='./logo_w.png' alt='google logo'/>
    </div> 
    <div class='navbar-item'>
    <a href='#'><span>Work</span></a>
    <a href='#'><span>Team</span></a>
    <a href='#'><span>Connect</span></a>
  
    </div>
     <div class='navbar-icons'>
     <i class="fa-solid fa-envelope"></i>
     <i class="fa-solid fa-phone"></i>
     </div>

    </nav>

    <section class='hero'>
    <div class = 'hero-content'>
    <div class='text-content'>
    <h1>Trust is earned through Experience<br>
    <span>let us earn yours</span></h1>
    <p>We are reimagining the endless posibilities<br> in building enterprise software!</p>
    <button>Learn More</button>
    </div>
    <div class='svg-cont'>
    <img src= "/hero.svg"/>
    </div>
    </div>
    
    </div>
    </section>
    </main>
  </div>
`

// setupCounter(document.querySelector('#counter'))
