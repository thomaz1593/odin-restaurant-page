const content = document.getElementById("content");

function renderAbout() {
  content.innerHTML = "";

  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");

  const aboutH1 = document.createElement("h1");
  aboutH1.classList.add("about-title");
  const spanH1 = document.createElement("span");
  spanH1.textContent = `👨‍💻 About 👩‍🍳`.toUpperCase();
  aboutH1.appendChild(spanH1);
  aboutDiv.appendChild(aboutH1);

  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about-content");

  const aboutP = document.createElement("p");
  aboutP.classList.add("about-text");
  aboutP.textContent = `At Fork Overflow, we believe that food, like code, should be
            well-structured, clean, and full of flavor. Founded by a team of
            foodies who are just as passionate about debugging as they are about
            dining, we set out to create a restaurant that blends our love for
            coding with our obsession for great food.`;
  aboutContent.appendChild(aboutP);

  const aboutP2 = document.createElement("p");
  aboutP2.classList.add("about-text");
  aboutP2.textContent = `Our kitchen runs on the principle of "agile" cooking, where every
            dish is a sprint towards culinary perfection. We’ve forked the best
            ingredients, merged them into delightful meals, and deployed them to
            your plate without any delays or glitches. Whether you’re here for a
            quick "hotfix" or a full "release," our menu will leave you
            satisfied and hungry for more!`;
  aboutContent.appendChild(aboutP2);

  const aboutP3 = document.createElement("p");
  aboutP3.classList.add("about-text");
  aboutP3.textContent = `At Fork Overflow, we celebrate creativity, innovation, and a dash of
            humor. Our dishes are built with care, ensuring they scale well with
            your appetite, and every plate is responsive to your cravings. No
            endless loops here—just fresh, delicious, and dependable food that
            always gets the job done.`;
  aboutContent.appendChild(aboutP3);

  const spanText = document.createElement("span");
  spanText.classList.add("about-call");
  spanText.textContent = `Hungry for a byte? You’re in the right place.`;
  aboutContent.appendChild(spanText);

  aboutDiv.appendChild(aboutContent);
  content.appendChild(aboutDiv);
}

export default renderAbout;
