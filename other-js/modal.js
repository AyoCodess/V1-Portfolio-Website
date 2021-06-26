let modal = document.getElementById("modal");

modal.addEventListener("show.bs.modal", function (event) {
  // ? Button that triggered the modal
  let buttonPressed = event.relatedTarget;
  console.log(buttonPressed);

  //! Extracting info from data-bs-* attributes
  //? GETTING PROJECT TITLE FROM BUTTON PRESSED AND DISPLAYING IT IN MODAL
  let projectID = buttonPressed.getAttribute("id");
  let projectTitle = projectID.replace(/-/g, " ").toUpperCase();
  console.log(projectTitle);

  //? GETTING THE A HREF LINK FROM THE BUTTON PRESSED ELEMENT (PROJECT)
  let projectLiveDemoLink = buttonPressed.getAttribute("data-bs-live-demo");
  console.log(projectLiveDemoLink);

  let projectGithubLink = buttonPressed.getAttribute("data-bs-github");
  console.log(projectGithubLink);

  //? SELECTING BUTTONS AND ELEMENTS INSIDE MODAL
  const modelButtonLiveDemo = document.querySelector(
    "#live-demo-button-in-modal"
  );
  const modelButtonGithub = document.querySelector("#github-button-in-modal");

  //* ASSIGNING BUTTON PRESSED A HREF LINK TO THE SHARED LIVE DEMO BUTTON AND GITHUB BUTTON IN MODAL
  modelButtonLiveDemo.href = projectLiveDemoLink;
  modelButtonGithub.href = projectGithubLink;

  let modalProjectTechnologies = modal.querySelector(`#modal-technologies`);
  let modalProjectDescription = modal.querySelector(`#modal-description`);

  console.log(modalProjectDescription);

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
    }
  }
});

const projectContent = {
  luxuryRealEstateCompany: {
    name: "luxury real estate company",
    description: "description goes here.",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://realtor-landing-page-css-grid.netlify.app/",
    repo: "https://github.com/AyoCodess/CSS-Grid-Landing-Page",
  },
  sassLandingPage: {
    name: "SASS Hero Section Landing Page",
    description: "sass description goes here.",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://sass-landing-page-ayocodess.netlify.app/",
    repo: "https://github.com/AyoCodess/Sass-Landing-Page",
  },
  travelCompanyLandingPage: {
    name: "travel company landing page.",
    description: "travel company description ",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://ayo-booking-app.netlify.app/",
    repo: "https://github.com/AyoCodess/trillo-landing-page",
  },
  microsoft2021: {
    name: "microsoft website 2021",
    description: "microsoft company description",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://microsoft-2021-website-ayocodess.netlify.app/",
    repo: "https://github.com/AyoCodess/Microsoft-Website-2021",
  },
  netflixCrimson: {
    name: "netflix crimson 2021",
    description: "netflix description",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://crimson-neflix-landpage.netlify.app/",
    repo: "https://github.com/AyoCodess/Crimson-Netflix-Landing-Page",
  },
  myPortfolioWebsite: {
    name: "my portfolio website",
    description: "this website info",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://www.ayoadesanya.com/",
    repo: "https://github.com/AyoCodess/Portfolio-Website",
  },
  minimalistFrom: {
    name: "blue modern form",
    description: "modern form info",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://modern-blue-form.netlify.app/",
    repo: "https://github.com/AyoCodess/Modern-Blue-Form-Theme",
  },
  backgroundGradientGenerator: {
    name: "background gradient generator",
    description: "background gen info",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://bgchanger-ayo.netlify.app/",
    repo: "https://github.com/AyoCodess/background-changer-app",
  },
  basicShoppingListApp: {
    name: "shopping list app",
    description: "basic todo app",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://the-simple-todo-app.netlify.app/",
    repo: "https://github.com/AyoCodess/The-Simple-todo-App",
  },
};
