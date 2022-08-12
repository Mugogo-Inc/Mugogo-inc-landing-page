import {gsap }from "gsap"

export default function heroText(textcontent){
    let timeline=gsap.timeline({defaults:{ease:"power4.InOut" , duration:1 , delay:0}})
    console.log(textcontent)
   timeline.from(textcontent,{opacity:0, y:400})
    timeline.to(textcontent,{opacity:1, y:0})
   
   
   }
    
    
