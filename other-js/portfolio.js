// selectors
const all = document.querySelector("#all");
const websites = document.querySelector("#websites");
const apps = document.querySelector("#apps");
const components = document.querySelector("#components");
const hideAll = document.querySelector("#hide");
const portfolioContainer = document.querySelector(`.portfolio-container`);
// const scrollText = document.querySelector(`.scroll-text`);

const allItems = document.querySelectorAll(".p-item");

const loader = document.querySelectorAll(`.loader`);

// const mediaQuery = window.matchMedia("(max-width: 569px)");

//?  image loader screen
window.addEventListener("load", function () {
  loader.forEach((item) => {
    item.classList.add("hide");
  });
});

const displayItems = function (e) {
  if (e.target.id === `websites` || `apps` || `components` || `all`)
    allItems.forEach((item) => {
      if (!item.classList.contains(e.target.id)) {
        item.classList.add(`hide`);
        portfolioContainer.hidden = false;
        // if (mediaQuery.matches && !scrollText.classList.contains(`hide`)) {
        //   scrollText.classList.remove("hide");
        // }
      } else {
        item.classList.remove(`hide`);
        portfolioContainer.hidden = false;

        // if (mediaQuery.matches && scrollText.classList.contains(`hide`)) {
        //   scrollText.classList.remove("hide");
        // }
      }
    });

  if (e.target.id === "hide") {
    allItems.forEach((item) => {
      item.classList.add("hide");
      portfolioContainer.hidden = true;
      // if (mediaQuery.matches && !scrollText.classList.contains(`hide`)) {
      //   scrollText.classList.add("hide");
      // }
    });
  }
};

websites.addEventListener("click", displayItems);
apps.addEventListener("click", displayItems);
all.addEventListener("click", displayItems);
components.addEventListener("click", displayItems);
hideAll.addEventListener("click", displayItems);
// window.addEventListener("resize", scrollTextHide);
