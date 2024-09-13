const content = document.getElementById("content");

function renderMenu() {
  content.innerHTML = "";

  const cuisineDiv = document.createElement("div");
  cuisineDiv.classList.add("cuisine");

  const cuisineH1 = document.createElement("h1");
  cuisineH1.classList.add("cuisine-title");
  const spanH1 = document.createElement("span");
  spanH1.textContent = `🥘 Cuisine 😋`.toUpperCase();
  cuisineH1.appendChild(spanH1);
  cuisineDiv.appendChild(cuisineH1);

  const pCuisine = document.createElement("p");
  pCuisine.classList.add("cuisine-description");
  pCuisine.textContent = `We serve a fusion of tech-inspired international flavors`;
  cuisineDiv.appendChild(pCuisine);

  const cuisineList = document.createElement("ul");
  cuisineList.classList.add("cuisine-list");
  const listDiv = document.createElement("div");
  listDiv.classList.add("cuisine-menu");

  const cuisineItem = document.createElement("li");
  cuisineItem.classList.add("cuisine-item");
  const spanItem = document.createElement("span");
  spanItem.classList.add("item-name");
  spanItem.textContent = ` Asynchronous ingredients that come together in perfect harmony.`;
  cuisineItem.textContent = `JavaScript Stir-fry:`;
  cuisineItem.appendChild(spanItem);
  listDiv.appendChild(cuisineItem);

  const cuisineItem2 = document.createElement("li");
  cuisineItem2.classList.add("cuisine-item");
  const spanItem2 = document.createElement("span");
  spanItem2.classList.add("item-name");
  spanItem2.textContent = ` Layers so well-structured, you’ll want to inspect every element.`;
  cuisineItem2.textContent = `HTML-baked Lasagna:`;
  cuisineItem2.appendChild(spanItem2);
  listDiv.appendChild(cuisineItem2);

  const cuisineItem3 = document.createElement("li");
  cuisineItem3.classList.add("cuisine-item");
  const spanItem3 = document.createElement("span");
  spanItem3.classList.add("item-name");
  spanItem3.textContent = ` Dynamic, with state-changing toppings that render perfectly every bite.`;
  cuisineItem3.textContent = `React Burger:`;
  cuisineItem3.appendChild(spanItem3);
  listDiv.appendChild(cuisineItem3);

  const cuisineItem4 = document.createElement("li");
  cuisineItem4.classList.add("cuisine-item");
  const spanItem4 = document.createElement("span");
  spanItem4.classList.add("item-name");
  spanItem4.textContent = ` Non-blocking bites with robust, server-side flavors.`;
  cuisineItem4.textContent = `Node.js Noodles:`;
  cuisineItem4.appendChild(spanItem4);
  listDiv.appendChild(cuisineItem4);

  const cuisineItem5 = document.createElement("li");
  cuisineItem5.classList.add("cuisine-item");
  const spanItem5 = document.createElement("span");
  spanItem5.classList.add("item-name");
  spanItem5.textContent = ` Styled to perfection with cheesy grids and flexbox crispiness.`;
  cuisineItem5.textContent = `CSS Grilled Cheese:`;
  cuisineItem5.appendChild(spanItem5);
  listDiv.appendChild(cuisineItem5);

  const cuisineItem6 = document.createElement("li");
  cuisineItem6.classList.add("cuisine-item");
  const spanItem6 = document.createElement("span");
  spanItem6.classList.add("item-name");
  spanItem6.textContent = ` No expiry anytime soon!`;
  cuisineItem6.textContent = `Cookie-based Sessions:`;
  cuisineItem6.appendChild(spanItem6);
  listDiv.appendChild(cuisineItem6);

  cuisineList.appendChild(listDiv);
  cuisineDiv.appendChild(cuisineList);

  content.appendChild(cuisineDiv);
}

export default renderMenu;
