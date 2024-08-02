import rat from './rat.jpg';
const createAboutPage = function(){
    const content = document.querySelector("#content");
    content.innerHTML = ""
    const h1 = document.createElement("h1");
    const p = document.createElement("div");
    h1.textContent = "This is the menu page. :)";
    content.appendChild(h1);
    const ratPic = new Image();
    ratPic.src=rat; 
    content.appendChild(p);
    p.textContent += "Creator of this wonderful website:";
    p.appendChild(ratPic);

}
export {createAboutPage}