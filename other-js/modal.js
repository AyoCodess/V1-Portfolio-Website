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
    }
  }
});

// Rather than looping, since you know the object and the key you can access directly so long as that key exists…
// let selectedData = projectContent[currentProjectSelected];
// modalProjectTechnologies.innerHTML = selectedData.technology;

// let selectedData = projectContent[currentProjectSelected];
// modalProjectTechnologies.innerHTML = selectedData.technology;
// //…

const projectContent = {
  microsoft2021: {
    name: "Microsoft Website 2021",
    description:
      "I had good time building the desktop and mobile versions, emulating the original website as best I could with a few new additions.",
    technology: "<strong>HTML | CSS | JS</strong>",
    liveDemo: "https://microsoft-2021-website-ayocodess.netlify.app/",
    repo: "https://github.com/AyoCodess/Microsoft-Website-2021",
  },
  luxuryRealEstateCompany: {
    name: "Luxury Real Estate Company",
    description:
      "One of my early projects. I wanted to give off a luxury feel... did I succeed? ",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://realtor-landing-page-css-grid.netlify.app/",
    repo: "https://github.com/AyoCodess/CSS-Grid-Landing-Page",
  },
  IsitAGoodInvestment: {
    name: "Isit A Good Investment?",
    description:
      "Learn how to invest in crypto safely and join a private syndicate of investors - Landing page",
    technology: "<strong>HTML | SASS | JS | AOS Library </strong>",
    liveDemo: "https://isitagoodinvestment.netlify.app/",
    repo: "https://github.com/AyoCodess/IIAGI-Website",
  },
  sassLandingPage: {
    name: "SASS Website - Ultra Light/Dark Mode 2021",
    description:
      "Re-envisioned the SASS landing page with a dark and light theme implementation. Local storage automatically saves your choice of theme.",
    technology: "<strong>HTML | SASS | JS</strong>",
    liveDemo: "https://sass-landing-page-ayocodess.netlify.app/",
    repo: "https://github.com/AyoCodess/Sass-Landing-Page",
  },
  travelCompanyLandingPage: {
    name: "Travel Company Landing Page",
    description: "Simple brochure style page for a travel company ",
    technology: "<strong>HTML | CSS </strong>",
    liveDemo: "https://ayo-booking-app.netlify.app/",
    repo: "https://github.com/AyoCodess/trillo-landing-page",
  },

  netflixCrimson: {
    name: "Netflix Crimson 2021",
    description:
      "Completely re-built from the ground up with a nice customized Bootstrap V.5 FAQ component  ",
    technology: "<strong>HTML | CSS | JS | Bootstrap V.5</strong>",
    liveDemo: "https://crimson-neflix-landpage.netlify.app/",
    repo: "https://github.com/AyoCodess/Crimson-Netflix-Landing-Page",
  },
  myPortfolioWebsite: {
    name: "This Website!",
    description:
      "This website was built from ground up and is continually being developed. This was also my first attempt and learning and implementing bootstrap for the very first time. ",
    technology: "<strong>HTML | SASS | JS | Bootstrap V.5 </strong>",
    liveDemo: "https://www.ayoadesanya.com/",
    repo: "https://github.com/AyoCodess/Portfolio-Website",
  },
  minimalistFrom: {
    name: "The Modern Blue Form",
    description: "A simple, yet modern form",
    technology: "<strong>HTML | CSS </strong>",
    liveDemo: "https://modern-blue-form.netlify.app/",
    repo: "https://github.com/AyoCodess/Modern-Blue-Form-Theme",
  },
  backgroundGradientGenerator: {
    name: "Background Gradient Generator",
    description:
      "Generate any linear gradient background you want from any two colors you want",
    technology: "<strong>HTML | CSS GRID ONLY</strong>",
    liveDemo: "https://bgchanger-ayo.netlify.app/",
    repo: "https://github.com/AyoCodess/background-changer-app",
  },
  basicShoppingListApp: {
    name: "Shopping List App",
    description: "A simple shopping list app",
    technology: "<strong>HTML | CSS </strong>",
    liveDemo: "https://the-simple-todo-app.netlify.app/",
    repo: "https://github.com/AyoCodess/The-Simple-todo-App",
  },
};
