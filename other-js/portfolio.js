// selectors
const all = document.querySelector("#all");
const websites = document.querySelector("#websites");
const apps = document.querySelector("#apps");
const components = document.querySelector("#components");
const hideAll = document.querySelector("#hide");

const allItems = document.querySelectorAll(".p-item");

const loader = document.querySelectorAll(`.loader`);

//?  image loader screen
window.addEventListener("load", function () {
  loader.forEach((item) => {
    console.log(item);

    item.classList.add("hide");
  });
});

const displayItems = function (e) {
  console.log(e.target.id);
  if (e.target.id === `websites` || `apps` || `components` || `all`)
    allItems.forEach((item) => {
      if (!item.classList.contains(e.target.id)) {
        item.classList.add(`hide`);
      } else {
        item.classList.remove(`hide`);
      }
    });

  if (e.target.id === "hide") {
    console.log(e.target.id);
    allItems.forEach((item) => {
      item.classList.add("hide");
    });
  }
};

websites.addEventListener("click", displayItems);
apps.addEventListener("click", displayItems);
all.addEventListener("click", displayItems);
components.addEventListener("click", displayItems);
hideAll.addEventListener("click", displayItems);
