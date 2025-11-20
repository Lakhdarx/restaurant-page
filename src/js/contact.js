export {loadContact};

function loadContact(div) {
    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("h1");
    header.textContent = "Visit Us";

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    p1.classList.add("subheading-1");
    p2.classList.add("subheading-2");
    p1.textContent = "2839 South Street, Texas";
    p2.textContent = "Open for dine-in & takeaway";

    card.appendChild(header);
    card.appendChild(p1);
    card.appendChild(p2);

    const container = document.createElement("div");
    container.classList.add("contact-container");

    container.appendChild(card);

    div.appendChild(container);    
}