import { gsap } from "gsap";



//scroll animation

 //animation for the hero text

function heroText(textcontent){
   let timeline=gsap.timeline({defaults:{ease:"power4.InOut" , duration:1 , delay:0}})
   console.log(textcontent)
  timeline.from(textcontent,{opacity:0, y:400})
   timeline.to(textcontent,{opacity:1, y:0})
  
  
  }

  function heroImg(svgcont){
   let timeline=gsap.timeline({defaults:{ease:"power4.InOut" , duration:1 , delay:0}})
   console.log(svgcont)
  timeline.from(svgcont,{opacity:0, delay:0.1 , x:-400})
   timeline.to(svgcont,{opacity:1, y:0, x:0} )
  
  }
 
   
 
  
 export  {heroText, heroImg }



