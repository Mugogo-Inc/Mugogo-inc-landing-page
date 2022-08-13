import { gsap } from "gsap";



//scroll animation


   

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
 function scaleOnload(element){
  element.forEach(element => {
   element.addEventListener('load',function(event){
      console.log(`${event.target} has loaded`)
   });
});
   
 }
  
  export  { heroAnimation, heroText, scaleOnload }



