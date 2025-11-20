import imgSrc from "../images/taco.png";
export {loadHome};


function loadHome(div) {
    const left = document.createElement("div");
    left.classList.add("left");
    const right = document.createElement("div");
    right.classList.add("right");
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "taco";
    img.id = 'taco-homepage';

    right.appendChild(img);

    const header1 = document.createElement("h1");
    const header2 = document.createElement("h1");
    header1.textContent = "Indulge in Delight.";
    header2.textContent = "Relish Every Bite.";
    header1.classList.add("main");
    header2.classList.add("main");

    const secondHeader1 = document.createElement("h4");
    const secondHeader2 = document.createElement("h4");
    const secondHeader3 = document.createElement("h4");

    secondHeader1.textContent = "Farm-to-table freshness.";
    secondHeader2.textContent = "Exciting flavors.";
    secondHeader3.textContent = "Artisan dishes made with care for you.";
    secondHeader1.classList.add("main-secondary");    
    secondHeader2.classList.add("main-secondary");    
    secondHeader3.classList.add("main-secondary");    

    left.appendChild(header1);
    left.appendChild(header2);
    left.appendChild(secondHeader1);
    left.appendChild(secondHeader2);
    left.appendChild(secondHeader3);

    div.appendChild(left);
    div.appendChild(right);
}