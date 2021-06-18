// selectors
const all = document.querySelector("#all");
const websites = document.querySelector("#websites");
const apps = document.querySelector("#apps");
const components = document.querySelector("#components");

const allItems = document.querySelectorAll(".p-item");

const displayItems = function (e) {
  if (e.target.id === `websites` || `apps` || `components` || `all`)
    allItems.forEach((item) => {
      if (!item.classList.contains(e.target.id)) {
        item.classList.add(`hide`);
      } else {
        item.classList.remove(`hide`);
      }
    });
};

websites.addEventListener("click", displayItems);
apps.addEventListener("click", displayItems);
all.addEventListener("click", displayItems);
components.addEventListener("click", displayItems);
