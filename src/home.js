import Icon from  './pikachu-meme.png';
import Icon2 from './whoCares.png';
const createHomePage = function (){
    const h1 = document.createElement("h1");
    const p = document.createElement("div");
    const content = document.querySelector("#content");
    content.innerHTML=""

    
    content.appendChild(h1);
    h1.textContent  = "hEloo";
    content.appendChild(p);
    p.classList.add("homepage-main")
    p.textContent = "This isnt just a basic HTML page..."
    const MemePikachu = new Image();
    MemePikachu.src = Icon;
    const whoCares = new Image();
    whoCares.src = Icon2;
    p.appendChild(MemePikachu);
    p.innerHTML += "Yup";
    p.appendChild(document.createElement("br"))
    p.innerHTML += "First off, there's css in there. But most of all there's some javascript lying around, maybe a little more than you would think...";

    p.appendChild(document.createElement("br"))
    p.innerHTML += "It's funny to think that even though this looks like my first project: recipe page, it's waaaay more complicated! ";
    p.appendChild(whoCares);
    p.innerHTML += "Fair enough. I don't really have much else to say, why don't you go checkout the other pages? Or even better, GET BACK TO CODING!!!"
}
export {createHomePage};