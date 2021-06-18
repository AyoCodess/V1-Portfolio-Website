// //? BUTTON SELECTORS

// const sassBasicHeroSection = document.querySelector(`#sass-basic-hero-Section`);
// const luxuryRealEstateCompany = document.querySelector(
//   `#luxury-real-estate-company`
// );
// const travelCompanyLandingPage = document.querySelector(
//   `#travel-company-landing-page`
// );
// const microsoft2021 = document.querySelector(`#microsoft-2021`);
// const netflixCrimson = document.querySelector(`#netflix-crimson`);
// const myPortfolioWebsite = document.querySelector(`#my-portfolio-website`);
// const minimalistForm = document.querySelector(`#minimalist-from`);
// const backgroundGradientGenerator = document.querySelector(
//   `#background-gradient-generator`
// );
// const basicShoppingListApp = document.querySelector(`#basic-shopping-list-app`);

// //! THE FUNCTION
// const displayModel = function (e) {
//   //button notification
//   let buttonID = e.target.id;
//   console.log(buttonID);
// };

// //! THE FUNCTION ENDS

// //* CALLING MODULE FUNCTION WHEN BUTTON IS SELECTED

// sassBasicHeroSection.addEventListener("click", displayModel);
// luxuryRealEstateCompany.addEventListener("click", displayModel);
// travelCompanyLandingPage.addEventListener("click", displayModel);
// microsoft2021.addEventListener("click", displayModel);
// netflixCrimson.addEventListener("click", displayModel);
// myPortfolioWebsite.addEventListener("click", displayModel);
// minimalistForm.addEventListener("click", displayModel);
// backgroundGradientGenerator.addEventListener("click", displayModel);
// basicShoppingListApp.addEventListener("click", displayModel);

//2 html of model needs to be dynamic and changed with template literal attributes data src depending on what project is selected

const modelButtonLiveDemo = document.querySelector(
  "#live-demo-button-in-modal"
);

let modal = document.getElementById("modal");

modal.addEventListener("show.bs.modal", function (event) {
  // ? Button that triggered the modal
  let buttonPressed = event.relatedTarget;

  //! Extract info from data-bs-* attributes
  //? GETTING PROJECT TITLE FROM BUTTON PRESSED AND DISPLAYING IT IN MODAL
  let projectID = buttonPressed.getAttribute("id");
  let projectTitle = projectID.replace(/-/g, " ").toUpperCase();
  console.log(projectTitle);

  //? GETTING THE A HREF LINK FROM THE BUTTON PRESSED ELEMENT (PROJECT)
  let projectLiveDemoLink = buttonPressed.getAttribute("data-bs-live-demo");
  console.log(projectLiveDemoLink);
  let projectGithubLink = buttonPressed.getAttribute("data-bs-github");
  console.log(projectGithubLink);

  //? ASSIGNING BUTTON PRESSED A HREF LINK TO THE SHARED LIVE DEMO BUTTON IN MODAL
  let liveDemoButton = modelButtonLiveDemo.getAttribute("id");
  console.log(liveDemoButton);

  console.log(modelButtonLiveDemo);

  //? link its URLS

  buttonPressed.href = projectLiveDemoLink;
  modelButtonLiveDemo.href = projectLiveDemoLink;
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  let modalTitle = modal.querySelector(".modal-title");
  let modalBodyInput = modal.querySelector(".modal-body input");

  modalTitle.textContent = projectTitle;
  // modalBodyInput.value = projectTitle;
});
