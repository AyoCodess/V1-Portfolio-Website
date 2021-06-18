//? BUTTON SELECTORS

const sassBasicHeroSection = document.querySelector(`#sass-basic-hero-Section`);
const luxuryRealEstateCompany = document.querySelector(
  `#luxury-real-estate-company`
);
const travelCompanyLandingPage = document.querySelector(
  `#travel-company-landing-page`
);
const microsoft2021 = document.querySelector(`#microsoft-2021`);
const netflixCrimson = document.querySelector(`#netflix-crimson`);
const myPortfolioWebsite = document.querySelector(`#my-portfolio-website`);
const minimalistForm = document.querySelector(`#minimalist-from`);
const backgroundGradientGenerator = document.querySelector(
  `#background-gradient-generator`
);
const basicShoppingListApp = document.querySelector(`#basic-shopping-list-app`);

//! THE FUNCTION
const displayModel = function (e) {
  console.log(`yes`);
};

//! THE FUNCTION ENDS

//* CALLING MODULE FUNCTION WHEN BUTTON IS SELECTED

sassBasicHeroSection.addEventListener("click", displayModel);
luxuryRealEstateCompany.addEventListener("click", displayModel);
travelCompanyLandingPage.addEventListener("click", displayModel);
microsoft2021.addEventListener("click", displayModel);
netflixCrimson.addEventListener("click", displayModel);
myPortfolioWebsite.addEventListener("click", displayModel);
minimalistForm.addEventListener("click", displayModel);
backgroundGradientGenerator.addEventListener("click", displayModel);
basicShoppingListApp.addEventListener("click", displayModel);

//2 html of model needs to be dynamic and changed with template literal attributes data src depending on what project is selected
