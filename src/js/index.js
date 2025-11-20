import "../styles/style.css";
import { loadHome } from "./home";
import { loadContact } from "./contact";
import { loadMenu } from "./menu";

const content = document.querySelector(".content");



function switchTab(loadPage) {
    content.textContent = '';
    loadPage(content);
}

switchTab(loadHome);

document.querySelector("#home").addEventListener("click", () => switchTab(loadHome));
document.querySelector("#menu").addEventListener("click", () => switchTab(loadMenu));
document.querySelector("#contact").addEventListener("click", () => switchTab(loadContact) );


