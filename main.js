import { heroText, heroImg } from "./gsap/main";

import "./style.css";

document.querySelector("#app").innerHTML = `
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
    
      <div class="download">
   <button class="downloader"><i class="fa-solid fa-download"></i>Download Proposal</button>
   <div id="dropdown" class="dropdown-content">
    <a href="./SME Proposal-Kenya.pdf" download><i class="fa-solid fa-download"></i>SME Kenya</a>
    <a href="./SME Proposal-International.pdf" download ><i class="fa-solid fa-download"></i>SME International</a>
    <a href="./Corporate Proposal-Kenya.pdf" download ><i class="fa-solid fa-download"></i>Corporate Kenya</a>
    <a href="./Corporate Proposal-International.pdf" download ><i class="fa-solid fa-download"></i>Corporate international</a>

  </div>
    </div>
    <div class='text-content'>
    <h1>Trust is earned through Experience<br>
    <span>let us earn yours </span>here at <span>Mugogo</span></h1>
    <p>We are reimagining the endless posibilities<br> in building enterprise software!</p>
    <a href="#about">Learn More</a>
    </div>
    <div class='svg-cont'>
    <img src= "/heroo.svg"/>
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
    <img  loading="lazy" src="./thought.svg" alt="about"/>
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
    <div class='things-text'>
    <h1>We do things <br><span>differently</span></h1>
    <p>We are a team of talented engineers and managers<br> to complete work that will exeed your expectations. <br>We use open source tools to ensure you have total<br> control of your products</p>
    <a href='#work'> Our Work <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    <div class = 'things-img'>
    <img loading="lazy" src='/differ.svg'/>
    
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
    <div class='infos'>
    <h1>Our Process</h1>
    <i class="fa-solid fa-angle-down"></i>
    </div>
    <div class='coperate-text'>
    <div class='coperate-items'>
   <h1>
   Our Signature Design Process
   </h1>
   <p>Our signature process is broken down into six steps, even though our approach to every design process depends on the product itself to build a sustainable solution to bring growth & prosperity. </p>

   <h1><span>O1</span> User </h1>
   <p>
   What problems are they facing?<br>How are they struggling and how can we contribute?
   </p>
   <h1><span>O2</span> Brand </h1>
   <p>
   After understanding users we try to understand<br> the brand needs to provide better solutions <br>that align with their long-term goals.
   </p>
    <h1><span>O3</span> User Persona </h1>
    <p>We make multiple types of the persona<br> of how our ideal customers look like.<br> In general, we comprise an identity, relevant quotes, <br>and information about any behavioral trends in the user persona.</p>
    <h1><span>O4</span> Design & Code </h1>
    <p>We create diagrams that illustrate<br> the entire user journey while<br> interacting with a product, <br>from the initial interaction to the last.</p>
   
    <h1><span>O5</span> Prototype </h1>
    <p>We create prototypes that illustrate<br> the entire user experience while<br> the client is interacting with the product,<br> from the initial interaction to the last while taking feedback.</p>

    <h1><span>O6</span> Launch </h1>
    <p>Now the product is ready for launch<br> We ensure that the client<br> is contented with the product.</p>
   
    </div>
    </div>
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

    <div class='grid-item-4 card'><i class="fa-solid fa-laptop-code"></i>
    <h4>Machine Learning & <br>Big Data</h4>
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
    <img loading="lazy" src='/sandee.jpeg'/>
    </div>
    <div class='grid-text'>
    <h1>Peter Sande</h1>
    <p>CEO</p>
    </div>
    </div>
    <div class='team-grid-card'>
    <div class ='grid-img-container'>
    <img  loading="lazy" src='/ali.jpeg'/>
    </div>
    <div class='grid-text'>
    <h1>Ali Salim</h1>
    <p>Managing Director</p>
    </div>
    </div>
    <div class='team-grid-card'>
    <div class ='grid-img-container'>
    <img  loading="lazy" src='/jefwa.jpeg'/>
    </div>
    <div class='grid-text'>
    <h1>Reuben Jefwa</h1>
    <p>Chief Technology Officer</p>
    </div>
    </div>
    <div class='team-grid-card'>
    <div class ='grid-img-container'>
    <img  loading="lazy" src='/nzaih.png'/>
    </div>
    <div class='grid-text'>
    <h1>Nzai Kilonzo</h1>
    <p>Senior Developer</p>
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
    <p> 05/ <span class='five'>05</span></p>
    </div>
    <div class = 'work-section' id="work">
    <div>
    <h1> Together, we'll come up <br>with radical ideas and <br>execute them flawlessly.<br> Check out our work.
    </h1>
    </div>
    <div class='work-grid'>
    <div class='work-grid-card'>
    <div class='work-grid-card-img'>
    <img loading='lazy' src='/fising.png'/>
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
    <img loading='lazy' src='/travely.png'/>
    </div>
    <div class='work-grid-card-text'>
    <h5>Travely</h5>
    <div class='work-btns'>

    <a href="https://play.google.com/store/apps/details?id=com.kwanzainc.travely" type="button"><button class='btn'> Explore</button></a>
    <a href="https://play.google.com/store/apps/details?id=com.kwanzainc.travely" type="button"><button class='btn'> View</button></a>

    </div>
   </div>
    </div>
    <div class='work-grid-card'>
    <div class='work-grid-card-img'>
    <img loading='lazy' src='/cinnamon.png'/>
    </div>
    <div class='work-grid-card-text'>
    <h5>Mnarani Cinnamon Spa</h5>
    <div class='work-btns'>
   <a href='https://www.google.com/travel/hotels/Nungwi%2C%20Tanzania/entity/CgoI0d7cw5XbguMEEAE?q=spa%20nungwi%20village&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4518327%2C4597339%2C4703207%2C4718358%2C4723331%2C4757164%2C4786958%2C4790928%2C4794648%2C4812120%2C4814050%2C4816977%2C4828448%2C4831357%2C4837140%2C4840029&hl=en-KE&gl=ke&ssta=1&ts=CAESABoECgIaACoECgAaAA&rp=ENHe3MOV24LjBBCAoMuuk9ai3AcQodzrnYuP59mNARDqrNrW_Ivqp7ABOAJAAEgCogEQTnVuZ3dpLCBUYW56YW5pYcABAw&ap=aAE&ictx=1&ved=0CAAQ5JsGahcKEwjYsJW0odP5AhUAAAAAHQAAAAAQAw&utm_campaign=sharing&utm_medium=link&utm_source=htls' type="button"> <button class='btn'>Explore</button></a>
    <a href='https://mnaranicinnamonspa.com/' type="button"><button class='btn'> View</button></a>
    </div>
   </div>
    </div>
    <div class='work-grid-card'>
    <div class='work-grid-card-img'>
    <img loading='lazy' src='/beauty.png'/>
    </div>
    <div class='work-grid-card-text'>
    <h5> Jambiani Beauty Spa</h5>
    <div class='work-btns'>
    <a href="https://g.page/r/CdpSz9FlwcnCEAE" type="button"><button class='btn'>Explore</button></a>
    <a href="https://jambianibeautyspa.com/" type="button"><button class='btn'> View</button></a>
    </div>
   </div>
    </div>

    </div>
  
    </div>
    <div class='partners'>
    <h1>Our Partners</h1>
    <div class = 'partner-img'>
    <img src = 'logosmall.jpg'/>
    <img src = 'hero-img.jpeg' />
    <img src = 'cin.png' />
    </div>
    </div>
    <section class='featuress'>
    <div class='footer-grid'>  
    <div class='footer-grid-1'>
  
    <a href="#"><img loading='lazy' src='./logo.png'/></a>
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
    <h5><span>Whatsapp:</span>+254721902248</h5>
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
`;

// setupCounter(document.querySelector('#counter'))






const el = document.querySelectorAll('.coperate')

el.forEach(element => {
  element.addEventListener('click', () => {
   element.classList.toggle('active')
  })
}
)

const dropdown = document.querySelector('.dropdown-content')
const btn = document.querySelector('.downloader')
btn.addEventListener('click', show)
function show(){
  dropdown.classList.toggle('show')
}
heroText(document.querySelector(".text-content"));
heroImg(document.querySelector('.svg-cont'))


