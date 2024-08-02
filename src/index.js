import { createHomePage } from "./home";
import './style.css';
import {createMenuPage} from "./menu"
import {createAboutPage} from "./about"
createHomePage()
console.log(createHomePage)

 const homeButton  = document.querySelector(".home");
const aboutButton = document.querySelector(".about");
const menuButton  = document.querySelector(".menu");
homeButton.addEventListener("click",()=>createHomePage())
aboutButton.addEventListener("click",()=>createAboutPage())
menuButton.addEventListener("click",()=>createMenuPage())
console.log("LETSSGOOOO") 
// HEY THERE! 
// If you're reading this and you're a TOP learner, congrats for getting this far in the curriculum!
// But also, make sure to not look at other people's solutions for as long as possible
// Solving problems on your own will be so much more valuable :)