let modal = document.getElementById("modal");

modal.addEventListener("show.bs.modal", function (event) {
  // ? Button that triggered the modal
  let buttonPressed = event.relatedTarget;
  console.log(buttonPressed);

  //? SELECTING BUTTONS AND ELEMENTS INSIDE MODAL TO UPDATE DYNAMICALLY
  let modelButtonLiveDemo = document.querySelector(
    "#live-demo-button-in-modal"
  );
  let modelButtonGithub = document.querySelector("#github-button-in-modal");
  let modalProjectTechnologies = modal.querySelector(`#modal-technologies`);
  let modalProjectDescription = modal.querySelector(`#modal-description`);

  let currentProjectSelected = buttonPressed.id;

  for (const [key, value] of Object.entries(projectContent)) {
    if (currentProjectSelected === key) {
      //? setting title
      modalProjectTechnologies.innerHTML = value.technology;
      //? setting description
      modalProjectDescription.textContent = value.description;
      //? setting live demo link
      modelButtonLiveDemo.href = value.liveDemo;
      //? setting git repo link
      modelButtonGithub.href = value.repo;

      value.name;
    }
  }
});

const projectContent = {
  luxuryRealEstateCompany: {
    name: "Luxury Real Estate Company",
    description: "description goes here.",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://realtor-landing-page-css-grid.netlify.app/",
    repo: "https://github.com/AyoCodess/CSS-Grid-Landing-Page",
  },
  sassLandingPage: {
    name: "SASS Hero -  Section Landing Page",
    description: "sass description goes here.",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://sass-landing-page-ayocodess.netlify.app/",
    repo: "https://github.com/AyoCodess/Sass-Landing-Page",
  },
  travelCompanyLandingPage: {
    name: "Travel Company Landing Page",
    description: "travel company description ",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://ayo-booking-app.netlify.app/",
    repo: "https://github.com/AyoCodess/trillo-landing-page",
  },
  microsoft2021: {
    name: "Microsoft Website 2021",
    description: "microsoft company description",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://microsoft-2021-website-ayocodess.netlify.app/",
    repo: "https://github.com/AyoCodess/Microsoft-Website-2021",
  },
  netflixCrimson: {
    name: "Netflix Crimson 2021",
    description: "netflix description",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://crimson-neflix-landpage.netlify.app/",
    repo: "https://github.com/AyoCodess/Crimson-Netflix-Landing-Page",
  },
  myPortfolioWebsite: {
    name: "This Website!",
    description: "this website info",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://www.ayoadesanya.com/",
    repo: "https://github.com/AyoCodess/Portfolio-Website",
  },
  minimalistFrom: {
    name: "The Modern Blue Form",
    description: "modern form info",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://modern-blue-form.netlify.app/",
    repo: "https://github.com/AyoCodess/Modern-Blue-Form-Theme",
  },
  backgroundGradientGenerator: {
    name: "Background Gradient Generator",
    description: "background gen info",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://bgchanger-ayo.netlify.app/",
    repo: "https://github.com/AyoCodess/background-changer-app",
  },
  basicShoppingListApp: {
    name: "Shopping List App",
    description: "basic todo app",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://the-simple-todo-app.netlify.app/",
    repo: "https://github.com/AyoCodess/The-Simple-todo-App",
  },
};
