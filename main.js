import {heroText} from './gsap/main'

import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <main class="smooth-content">
    <div class= "smooth-scroll">
    <nav>
    <div class='navbar-logo'>
    <img src='./logo_t.png' alt='google logo'/>
    </div> 
    <div class='navbar-item'>
    <a href='#work'><span>Work</span></a>
    <a href='#team'><span>Team</span></a>
    <a href='#connect'><span>Connect</span></a>
  
    </div>
     <div class='navbar-icons'>
     <i class="fa-solid fa-envelope"></i>
     <i class="fa-solid fa-phone"></i>
     </div>

    </nav>
   <div class='main section'>
    <section class='hero'>
    <div class = 'hero-content'>
    <div class='text-content'>
    <h1>Trust is earned through Experience<br>
    <span>let us earn yours</span></h1>
    <p>We are reimagining the endless posibilities<br> in building enterprise software!</p>
    <a href="#about">Learn More</a>
    </div>
    <div class='svg-cont'>
    <img src= "./heroo.svg"/>
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
    <div class='paragraph' id ="about">
    <p>Our sucess rests<br> in relationships <br>between people</p>
    </div>
    <div class= 'product-head connections'>
    <h1>Human Connections <span class = 'human'>First</span> <br/> Code <span class='second'>Second </span></h1></div>
    </div>
    <section class='about'>
    <div class='about-img'>
    <img src="./thought.svg" alt="about"/>
    </div>
    <div class='about-text'>
    <h1><span class="human">Constant evolution</span><br><span class='second'>Constant adaptation.</span></h1>
    <p>We have all the tools to take your business to the future <br>of digital transformations.<br>Here at Mugogo, we provide a comprevensive<br> suite of services to make your business reach the digital age</p>

    <a  href='#work' class='about-btn'>Learn More<i class="fa-solid fa-arrow-right"></i></a>
    </div>
    </div>
    </section>
    <div class='about-info'>
    <h1>Lets work together into <br> turning your <span class='vision'>business vision</span> <br> into a <span class='modern'>modern software solution</span>  <br>for your clients.</h1>
    </div>
    </div>
    <div class='about-things'>
    <div class='things-text' id ='work'>
    <h1>We do things <br><span>differently</span></h1>
    <p>We are a team of talented engineers and managers<br> to complete work that will exeed your expectations. <br>We use open source tools to ensure you have total<br> control of your products</p>
    <a href='work.html'> Our Work <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    <div class = 'things-img'>
    <img src='/differ.svg'/>
    
    </div>
    </div>
   
    </div>
   
    </section>
    </div>
    <div class='lines process'>
    <p> 02/ <span class='five'>05</span></p>
    </div>
    <section class='featuress section' id="connect">
    <div class='details'>
    <p>We have spent many<br> years refining<br> a process <br>that deliver <br>results</p>
    <div class= 'product-head product'>
    <h1>Process & <br><span class='second'>Control </span></h1>
    </div>
    </div>
    <div class='coperate'>
    <i class="fa-solid fa-angle-right"></i>
    <h1>Cooperate</h1>
  
    </div>
    <div class='create'>
    <i class="fa-solid fa-angle-right"></i>
    <h1>Create</h1>
    
    </div>
    <div class='continue'>
     <i class="fa-solid fa-angle-right"></i>
    <h1>Continue</h1>
    </div>
   <div class='ideas-heading'>
   <h1>Want to <span class='idea'>let go</span> <br>of <span class='idea'>old ideas?</span><br> We're here <span class='here'>for it</span>...</h1>
   <i class="fa-solid fa-square-down-right"></i>
   </div>
    </div>

    </section>
    <div class='lines three'>
    <p> 03/ <span class='five'>05</span></p>
    </div class='services'>
    <div>
    <section class='featuress products'>
    <div class='details'>
    <p>Choose from our <br>services to find a   <br>solution for your<br> needs</p>
    <div class= 'product-head product'>
    <h1>Solution & <br><span class='second'>Technology </span></h1>
    </div>
    </div>
    </section>
    <section>
    <div class='services'>
    <div class='services-grid'>
    <div class='grid-item-1 card'>
    <i class="fa-brands fa-cloudsmith"></i>
    <h4>Cloud Computing & <br>Infrastructure</h4>
    <p>Mugogo helps clients <br>to scale thier services<br> on AWS, Netlify and Google Cloud</p>
        </div>
    <div class='grid-item-2 card' ><i class="fa-solid fa-globe"></i></i>
    <h4>Web Application & <br>Development</h4>
    <p>Mugogo develops responsive <br>web applications that work<br> with modern frameworks</p></div>
    <div class='grid-item-3 card'> <i class="fa-solid fa-gears"></i>
    <h4>Cross platform <br>mobile App development </h4>
    <p>Secure our team <br>to perform mobile development <br>on both Android and IOS</p></div>
    <div class='grid-item-4 card'><i class="fa-brands fa-uikit"></i></i>
    <h4>UI/UX <br>Design</h4>
    <p>Want to enquire about<br>what tech to use<br>reach to us </p></div>

    <div class='grid-item-4 card'><i class="fa-regular fa-folder-closed"></i>
    <h4>Enterprise data <br>Handling</h4>
    <p>As companies like yours thrive<br>and grow in today's competitive<br> business enviroment<br>we provide key metrics to drive good <br>decison making </p></div>
    <div class='grid-item-4 card'><i class="fa-solid fa-lightbulb"></i>
    <h4>Digital Marketting</h4>
    <p>Want Take your business to the next level<br>with our perfect<br>digital marketing service</p></div>
   
    </div>
    
    <button class='btn-services'>Learn More  <i class="fa-solid fa-arrow-right"></i></button>
    </div>
    </section>
    </div>
    
    <div>

    <div class='ideas-heading'>
    <h1>Need a <span class='idea'><br>dependable team?</span> <br> We've <span class='here'>got you</span>...</h1>
    <i class="fa-solid fa-square-down-right"></i>
    </div>
    <div class='lines process team'>
    <p> 04/ <span class='five'>05</span></p>
    </div>
    <section class='featuress'>
    <div class='details'>
    <p>Technology is great<br>The minds that<br> create it <br>are greater <br>results</p>
    <div class= 'product-head'>
    <h1 class='head'>Leadership <br> &<span class='second'><br>Team </span></h1>
    </div>
    
    </div>
    <div class='team-section' id = 'team'>
    <div class='team-grid'>
    <div class='team-grid-card'>
    <div class ='grid-img-container'>
    <img src='/sandee.jpeg'/>
    </div>
    <div class='grid-text'>
    <h1>Peter Sande</h1>
    <p>CEO</p>
    </div>
    </div>
    <div class='team-grid-card'>
    <div class ='grid-img-container'>
    <img src='/alii.jpeg'/>
    </div>
    <div class='grid-text'>
    <h1>Ali Salim</h1>
    <p>Managing Director</p>
    </div>
    </div>
    <div class='team-grid-card'>
    <div class ='grid-img-container'>
    <img src='/reuben.png'/>
    </div>
    <div class='grid-text'>
    <h1>Reuben Jefwa</h1>
    <p>Technical Director</p>
    </div>
    </div>
    <div class='team-grid-card'>
    <div class ='grid-img-container'>
    <img src='/nzaih.png'/>
    </div>
    <div class='grid-text'>
    <h1>Nzai Kilonzo</h1>
    <p>Software Engineer</p>
    </div>
    </div>
     </div>
     
    </div>
    <div class='ideas-heading'>
    <h1>Mugogo is <span class='idea'>Working</span> <br> on  <span class='idea'>Software</span> that brings  <br>all the pieces <span class='here'>Together</span></h1>
    <i class="fa-solid fa-square-down-right"></i>
    </div>
    </div>
   

   
    </div>
    
    </div>
    <div class='lines'>
    <p> 04/ <span class='five'>05</span></p>
    </div>
    <div class = 'work-section'>
    <div>
    <h1> Together, we'll come up <br>with radical ideas and <br>execute them flawlessly.<br> Check out our work.
    </h1>
    </div>
    <div class='work-grid'>
    <div class='work-grid-card'>
    <div class='work-grid-card-img'>
    <img src='/fising.png' loading='lazy'/>
    </div>
    <div class='work-grid-card-text'>
    <h5>Zanzibar Sports Club</h5>
    <div class='work-btns'>
    <button class='btn'>Explore</button>
    <a href="https://zanzibarsportfishing.com/" type="button"><button class='btn'> View</button></a>
    </div>
   </div>
    </div>
   <div class='work-grid-card'>
    <div class='work-grid-card-img'>
    <img src='/cinnamon.png'/>
    </div>
    <div class='work-grid-card-text'>
    <h5>Travely</h5>
    <div class='work-btns'>
    <button class='btn'>Explore</button>
    <button class='btn'> View</button>
    </div>
   </div>
    </div>
    <div class='work-grid-card'>
    <div class='work-grid-card-img'>
    <img src='/cinnamon.png'/>
    </div>
    <div class='work-grid-card-text'>
    <h5>Mnarani Cinnamon Spa</h5>
    <div class='work-btns'>
    <button class='btn'>Explore</button>
    <a href='https://mnaranicinnamonspa.com/' type="button"><button class='btn'> View</button></a>
    </div>
   </div>
    </div>
    <div class='work-grid-card'>
    <div class='work-grid-card-img'>
    <img src='/beauty.png'/>
    </div>
    <div class='work-grid-card-text'>
    <h5> Jambiani Beauty Spa</h5>
    <div class='work-btns'>
    <button class='btn'>Explore</button>
    <a href="https://jambianibeautyspa.com/" type="button"><button class='btn'> View</button></a>
    </div>
   </div>
    </div>

    </div>
  
    </div>
    <section class='featuress'>
    <div class='footer-grid'>  
    <div class='footer-grid-1'>
  
    <a href="#"><img src='./logo.png'/></a>
    <a href="#">Work</a>
    <a href="#">Team</a>
    <a href="#">Connect</a>
    </div>
    <div class='footer-grid-2'>
    <h1>Contact Info</h1>
     <h5>Nairobi</h5>
     <h5><span>Customer Care:</span> customerservice@mugogoinc.com
     </h5>
     <h5><span>Info:</span> info@mugogoinc.com</h5>
    <h5>+254 721902248</h5>
    </div>
    
    </section>
    <div class='social-media'>
    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
    <a href="#"><i class="fa-brands fa-twitter"></i></a>
    <a href="#"><i class="fa-brands fa-instagram"></i></a>
    <h5> © Infinity, Mugogo Inc</h5>
    </div>
    </div>
    </main>
  </div>
`

// setupCounter(document.querySelector('#counter'))



heroText(document.querySelector('.text-content'))
 
 

