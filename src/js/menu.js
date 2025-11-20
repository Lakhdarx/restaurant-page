export {loadMenu};
import taco from '../images/taco2.png';
import pizza from '../images/pizza.png';
import soup from '../images/soup.png';
import burger from '../images/burger.png';


function loadMenu(div) {
    const container = document.createElement("div");
    container.classList.add("menu-container");

    const card1 = document.createElement("div");
    const card2 = document.createElement("div");
    const card3 = document.createElement("div");
    const card4 = document.createElement("div");

    card1.classList.add("card");
    card2.classList.add("card");
    card3.classList.add("card");
    card4.classList.add("card");



    
    const img1 = document.createElement("img");
    img1.src = burger;
    const h4_1 = document.createElement("h4");
    h4_1.textContent = "Burger";
    const p1_1 = document.createElement("p");
    p1_1.textContent = "Juicy beef patty";
    const p2_1 = document.createElement("p");
    p2_1.textContent = "2$" 

    card1.appendChild(img1);
    card1.appendChild(h4_1);
    card1.appendChild(p1_1);
    card1.appendChild(p2_1);






    const img2 = document.createElement("img");
    img2.src = pizza;
    const h4_2 = document.createElement("h4");
    h4_2.textContent = "Pizza";
    const p1_2 = document.createElement("p");
    p1_2.textContent = "Cheesy pizza with sauce";
    const p2_2 = document.createElement("p");
    p2_2.textContent = "3$" 

    card2.appendChild(img2);
    card2.appendChild(h4_2);
    card2.appendChild(p1_2);
    card2.appendChild(p2_2);




    const img3 = document.createElement("img");
    img3.src = taco;
    const h4_3 = document.createElement("h4");
    h4_3.textContent = "Taco";
    const p1_3 = document.createElement("p");
    p1_3.textContent = "Ground beef tacos";
    const p2_3 = document.createElement("p");
    p2_3.textContent = "2$" 

    card3.appendChild(img3);
    card3.appendChild(h4_3);
    card3.appendChild(p1_3);
    card3.appendChild(p2_3);




    const img4 = document.createElement("img");
    img4.src = soup;
    const h4_4 = document.createElement("h4");
    h4_4.textContent = "Soup";
    const p1_4 = document.createElement("p");
    p1_4.textContent = "Warm and hot!";
    const p2_4 = document.createElement("p");
    p2_4.textContent = "1$" 

    card4.appendChild(img4);
    card4.appendChild(h4_4);
    card4.appendChild(p1_4);
    card4.appendChild(p2_4);


    container.appendChild(card1);
    container.appendChild(card2);
    container.appendChild(card3);
    container.appendChild(card4);

    div.appendChild(container);
}