import { gsap } from "gsap";



//scroll animation

 //animation for the hero text

function heroText(textcontent, delay){
   let timeline=gsap.timeline({defaults:{ease:"power4.InOut" , duration:1 , delay:0}})
   console.log(textcontent)
  timeline.from(textcontent,{opacity:0, duration:1, delay:delay})
   timeline.to(textcontent,{opacity:1, duration:1})
  
  
  }

  function heroImg(svgcont){
   let timeline=gsap.timeline({defaults:{ease:"power4.InOut" , duration:1 , delay:0}})
   console.log(svgcont)
  timeline.from(svgcont,{opacity:0 , duration:1, delay:1.5})
   timeline.to(svgcont,{opacity:1, y:0, x:0} )
  
  }
 
   
 
  
 export  {heroText, heroImg }



