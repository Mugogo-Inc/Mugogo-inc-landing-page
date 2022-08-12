import { gsap } from "gsap";

export default function heroAnimation(hero){
let timeline = gsap.timeline( {defaults : {ease:"power4.InOut" , duration:2}} );

timeline.to(hero, {delay:0.6, y:100, opacity:10})
console.log(hero)
}