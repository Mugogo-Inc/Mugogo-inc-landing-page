import { gsap } from "gsap";


//scroll animation

function smoothScroll(){
   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
   let smoother = ScrollTrigger.create({
      trigger: ".smooth-scroll",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: true,
      onUpdate: function(instance) {
         console.log(instance.progress);
      }
   });
   }
   

function heroAnimation(hero){
let timeline = gsap.timeline( {defaults : {ease:"power4.InOut" , duration:2}} );
timeline.from(hero,{delay:0.07, opacity:0} )
timeline.to(hero, {delay:1,  opacity:1})
console.log(hero)

}
 //animation for the hero text

function heroText(textcontent){
   let timeline=gsap.timeline({defaults:{ease:"power4.InOut" , duration:1 , delay:0}})
   console.log(textcontent)
  timeline.from(textcontent,{opacity:0, y:400})
   timeline.to(textcontent,{opacity:1, y:0})
  
  
  }

  
  export  { heroAnimation, heroText}



