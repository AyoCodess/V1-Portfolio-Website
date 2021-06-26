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
      //? setting description
      let description = value.description;
      modalProjectDescription.textContent = description;
    }
  }
});

const projectContent = {
  luxuryRealEstateCompany: {
    name: "luxury real estate company",
    description:
      "json objects is just like accessing nested arrays. Nested objects are the objects that are inside an another object.",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://realtor-landing-page-css-grid.netlify.app/",
    repo: "https://github.com/AyoCodess/CSS-Grid-Landing-Page",
  },
  sassLandingPage: {
    name: "SASS Hero Section Landing Page",
    description:
      "In the following example 'vehicles' is a object which is inside a main object called 'person'. Using dot notation",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://sass-landing-page-ayocodess.netlify.app/",
    repo: "https://github.com/AyoCodess/Sass-Landing-Page",
  },
};
