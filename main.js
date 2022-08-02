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
    </main>
  </div>
`

setupCounter(document.querySelector('#counter'))
