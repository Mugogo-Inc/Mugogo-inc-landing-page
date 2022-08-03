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
   <div class='main'>
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
    </section>
    </div>
    
    <div class='lines'>
    <p> 01/ <span class='five'>05</span></p>
    </div>
    
 
    <section class='features'>
    <div>
    <div class='details'>
    <p>Our sucess rests<br> in relationships <br>between people</p>
    <div class= 'product-head'>
    <h1>Human Connections <span class = 'human'>First</span> <br/> Code <span class='second'>Second </span></h1></div>
    </div>
    <section class='about'>
    <div class='about-img'>
    <img src="/texture.jpg" alt="about"/>
    </div>
    <div class='about-text'>
    <h1><span class="human">Constant evolution</span><br><span class='second'>Constant adaptation.</span></h1>
    <p>We have all the tools to take your business to the future <br>of digital transformations.<br>Here at Mugogo, we provide a conmprevensive<br> suite of services to make your business reach the digital age</p>

    <button class='about-btn'>Learn More<i class="fa-solid fa-arrow-right"></i></button>
    </div>
    </div>
    </section>
    <div class='about-info'>
    <h1>Lets work together into <br> turning your <span class='vision'>business vision</span> <br> into a <span class='modern'>modern software solution</span>  <br>for your clients.</h1>
    </div>
    <div class='about-things'>
    <div class='things-text'>
    <h1>We do things <br>differently</h1>
    <p>We are a team of talented engineers and managers<br> to complete work that will exeed your expectations. <br>We use open source tools to ensure you have total<br> control of your products</p>
    <button >Our Work <i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div class = 'things-img'>
    <img src='/texture.jpg'/>
    </div>
    </div>
   
    </div>
   
    </section>
    </div>
    <div class='lines'>
    <p> 02/ <span class='five'>05</span></p>
    </div>
    <section class='featuress'>
    <div class='details'>
    <p>We have spent many<br> years refining a process <br>that deliver results</p>
    <div class= 'product-head product'>
    <h1>Process & <br><span class='second'>Control </span></h1>
     <div class='connect'><h1>Connect<h1></div>
    </div>
    </div>
    <div class='coperate'>
    <h1>Cooperate</h1>
    <p>This is where your business idea gets<br>foundational bones to build on <br>As a team we work together<br> to set goals and timelines</p>
    <button>Details <i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div class='create'><h1>Create</h1></div>
    <div class='continue'><h1>Continue</h1></div>
    </div>
    </section>
   

    
    </main>
  </div>
`

// setupCounter(document.querySelector('#counter'))
