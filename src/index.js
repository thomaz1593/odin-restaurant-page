import "./styles.css";
import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAbout from "./about.js";

const homeButton = document.querySelector(".btn-home");
const menuButton = document.querySelector(".btn-menu");
const aboutButton = document.querySelector(".btn-about");

homeButton.addEventListener("click", () => {
  console.log("hello button");
  renderHome();
});

menuButton.addEventListener("click", () => {
  console.log("menu button");
  renderMenu();
});

aboutButton.addEventListener("click", () => {
  console.log("about button");
  renderAbout();
});

console.log("hello restaurant");

renderHome();
