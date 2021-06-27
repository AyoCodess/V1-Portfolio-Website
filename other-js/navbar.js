const navbarDropdown = document.querySelector(`.navbar-toggler`);
const areaOutsideNavbar = document.body;
const nav = document.querySelector(`.navbar-collapse`);

areaOutsideNavbar.addEventListener(`click`, function (e) {
  if (navbarDropdown.getAttribute("aria-expanded") === `true`) {
    console.log(nav);
    nav.classList.remove(`show`);
  }
});
