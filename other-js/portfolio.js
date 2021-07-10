// selectors
const all = document.querySelector("#all");
const websites = document.querySelector("#websites");
const apps = document.querySelector("#apps");
const components = document.querySelector("#components");
const hideAll = document.querySelector("#hide");
const portfolioContainer = document.querySelector(`.portfolio-container`);

const allItems = document.querySelectorAll(".p-item");

const loader = document.querySelectorAll(`.loader`);

//?  image loader screen
window.addEventListener("load", function () {
  loader.forEach((item) => {
    item.classList.add("hide");
  });
});

const displayItems = function (e) {
  console.log(e.target.id);
  if (e.target.id === `websites` || `apps` || `components` || `all`)
    allItems.forEach((item) => {
      if (!item.classList.contains(e.target.id)) {
        item.classList.add(`hide`);
        portfolioContainer.hidden = false;
      } else {
        item.classList.remove(`hide`);
        portfolioContainer.hidden = false;
      }
    });

  if (e.target.id === "hide") {
    console.log(e.target.id);
    allItems.forEach((item) => {
      item.classList.add("hide");
      portfolioContainer.hidden = true;
    });
  }
};

websites.addEventListener("click", displayItems);
apps.addEventListener("click", displayItems);
all.addEventListener("click", displayItems);
components.addEventListener("click", displayItems);
hideAll.addEventListener("click", displayItems);
