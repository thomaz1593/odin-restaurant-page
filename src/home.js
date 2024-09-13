import homeImage from "./keyboard-waffles.jpg";

const content = document.getElementById("content");
const image = document.createElement("img");

function renderHome() {
  content.innerHTML = "";

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main");

  const mainH1 = document.createElement("h1");
  mainH1.classList.add("main-title");
  const spanH1 = document.createElement("span");
  spanH1.textContent = `🍴 Fork Overflow 👨‍💻`.toUpperCase();
  mainH1.appendChild(spanH1);
  mainDiv.appendChild(mainH1);

  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content");

  const pMain = document.createElement("p");
  pMain.classList.add("main-text");
  pMain.textContent = `Welcome to Fork Overflow, the restaurant where your cravings never
            bug, and your hunger finds its fix! This place is built for those
            who want their dining experience to be as smooth as a clean
            codebase. Our chefs follow agile methodologies in the kitchen,
            delivering delicious dishes without any delays. No need to
            refresh—our food is always`;
  const spanPMain = document.createElement("span");
  spanPMain.textContent = ` up-to-date!`;
  pMain.appendChild(spanPMain);

  image.src = homeImage;
  image.classList.add("main-image");

  mainContentDiv.appendChild(pMain);
  mainContentDiv.appendChild(image);

  mainDiv.appendChild(mainContentDiv);
  content.appendChild(mainDiv);
}

export default renderHome;
