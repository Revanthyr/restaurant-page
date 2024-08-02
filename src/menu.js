import pickpathimg from './path.png';
import letmeoutimg from './letmeout.png';
import rollerimg from './roller.png';

const createMenuPage = function(){
    const content = document.querySelector("#content");
    content.innerHTML= ""
    const h1 = document.createElement("h1");
    const p = document.createElement("div");
    
    const pickpath = new Image();
    pickpath.src = pickpathimg;
    const letmeout = new Image();
    letmeout.src = letmeoutimg;
    const roller = new Image();
    roller.src = rollerimg;
    content.appendChild(h1)
    h1.textContent += "This is the about page. :)";
    content.appendChild(p);
    p.classList.add("homepage-main");
    p.innerHTML += "You might have realized this is not a typical restaurant. Therefore, the menu will be composed of only memes. Bon appetit!";
    p.appendChild(roller);
    
    p.innerHTML += "Memes for TOP learners";
    p.appendChild(pickpath);
    p.innerHTML += "Me during Intermediate HTML and CSS";
    p.appendChild(letmeout);
    
    
}
export {createMenuPage};