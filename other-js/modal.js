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
  stopholdingback_app: {
    name: "Stop Holding Back - App",
    description:
      " This React app allows the public to filter and search through current SHB charity members, looking for a mentor to support them through their stuttering. Helping them build self-esteem and find the career they want despite their disability.",
    technology: "<b> REACT | SASS | JSX </b>",
    liveDemo: "https://staff.stopholdingback.org",
    repo: "https://github.com/AyoCodess/React---SHB-Team-Chart-App",
  },
  stopholdingback: {
    name: "Stop Holding Back v4",
    description:
      "This is a project I have been involved with since it's inception in 2017. SHB is UK registered charity helping people who stutter find careers. Please donate if you can.",
    technology: "<b> Custom HTML | Custom CSS | Built with WIX </b>",
    liveDemo: "https://www.stopholdingback.org",
    repo: "https://www.stopholdingback.org",
  },
  microsoft2021: {
    name: "Microsoft Website 2021",
    description:
      "I had good time building the desktop and mobile versions, emulating the original website as best I could with a few new additions.",
    technology: "<b>HTML | CSS | JS</b>",
    liveDemo: "https://microsoft-2021-website-ayocodess.netlify.app/",
    repo: "https://github.com/AyoCodess/Microsoft-Website-2021",
  },
  luxuryRealEstateCompany: {
    name: "Luxury Real Estate Company",
    description:
      "One of my early projects. I wanted to give off a luxury feel... did I succeed? ",
    technology: "<b>HTML | CSS GRID ONLY</b>",
    liveDemo: "https://realtor-landing-page-css-grid.netlify.app/",
    repo: "https://github.com/AyoCodess/CSS-Grid-Landing-Page",
  },
  IsitAGoodInvestment: {
    name: "Isit A Good Investment?",
    description:
      "Learn how to invest in crypto safely and join a private syndicate of investors - Landing page.",
    technology: "<b>HTML | SASS | JS | AOS Library </b>",
    liveDemo: "https://isitagoodinvestment.netlify.app/",
    repo: "https://github.com/AyoCodess/IIAGI-Website",
  },
  sassLandingPage: {
    name: "SASS Website - Ultra Light/Dark Mode 2021",
    description:
      "Re-envisioned the SASS landing page with a dark and light theme implementation. Local storage automatically saves your choice of theme.",
    technology: "<b>HTML | SASS | JS</b>",
    liveDemo: "https://sass-landing-page-ayocodess.netlify.app/",
    repo: "https://github.com/AyoCodess/Sass-Landing-Page",
  },
  travelCompanyLandingPage: {
    name: "Travel Company Landing Page",
    description: "Simple brochure style page for a travel company. ",
    technology: "<b>HTML | CSS </b>",
    liveDemo: "https://ayo-booking-app.netlify.app/",
    repo: "https://github.com/AyoCodess/trillo-landing-page",
  },

  netflixCrimson: {
    name: "Netflix Crimson 2021",
    description:
      "Completely re-built from the ground up with a nice customized Bootstrap V.5 FAQ component.  ",
    technology: "<b>HTML | CSS | JS | Bootstrap V.5</b>",
    liveDemo: "https://crimson-neflix-landpage.netlify.app/",
    repo: "https://github.com/AyoCodess/Crimson-Netflix-Landing-Page",
  },
  myPortfolioWebsite: {
    name: "This Website!",
    description:
      "This website was built from ground up and is continually being developed. This was also my first attempt and learning and implementing bootstrap for the very first time. ",
    technology: "<b>HTML | SASS | JS | Bootstrap V.5 </b>",
    liveDemo: "https://www.ayoadesanya.com/",
    repo: "https://github.com/AyoCodess/Portfolio-Website",
  },

  backgroundGradientGenerator: {
    name: "Background Gradient Generator",
    description:
      "Generate any linear gradient background you want from any two colors you want.",
    technology: "<b>HTML | CSS GRID ONLY</b>",
    liveDemo: "https://bgchanger-ayo.netlify.app/",
    repo: "https://github.com/AyoCodess/background-changer-app",
  },
  ayoBlogSite: {
    name: "Ayo Codes - The Blog",
    description:
      " This was my first time using a static site generator with a headless CMS. We have pagination functionality for every 10 posts. It was challenging at times but I got the job done. Visit the blog to read more about my coding ups and downs.",
    technology:
      "<b>HTML | SASS | JS | 11ty | Nunjunks | Netlify CMS | Disqus</b>",
    liveDemo: "https://blog.ayoadesanya.com",
    repo: "https://github.com/AyoCodess/my-coding-blog",
  },
  dbzMusicPlayer: {
    name: "DBZ Music Player",
    description:
      "Are you a fan of Dragonball Z? Ready for a nostalgic blast from the past? This project is a custom built fully functional DBZ music player hosting my favorite tracks from the series.",
    technology: "<b>HTML | CSS | JS </b>",
    liveDemo:
      "https://js-project-collection.netlify.app/dbz-music-player/dbz-music-player.html",
    repo: "https://github.com/AyoCodess/The-JS-Project-Showcase/tree/master/dbz-music-player",
  },
  yourCountdown: {
    name: "Your Countdown",
    description:
      "Create your custom countdown and have it saved to the browser with the help of local storage.",
    technology: "<b>HTML | CSS | JS</b>",
    liveDemo:
      "https://js-project-collection.netlify.app/your-countdown/your-countdown.html",
    repo: "https://github.com/AyoCodess/The-JS-Project-Showcase/tree/master/your-countdown",
  },
  pip: {
    name: "Picture In Picture + Instant Webcam",
    description:
      "Create a floating screen capture and see what you look like via your webcam in an instant!",
    technology: "<b>HTML | CSS | JS | Screen Capture API | Webcam API </b>",
    liveDemo:
      "https://js-project-collection.netlify.app/picture-in-picture/picture-in-picture.html",
    repo: "https://github.com/AyoCodess/The-JS-Project-Showcase/tree/master/picture-in-picture",
  },

  superNavigation: {
    name: "Super Navigation",
    description:
      "Animated Navigation that performs and looks great on any website.",
    technology: "<b>HTML | CSS | JS </b>",
    liveDemo:
      "https://js-project-collection.netlify.app/super-navigation/super-navigation.html",
    repo: "https://github.com/AyoCodess/The-JS-Project-Showcase/tree/master/super-navigation",
  },
  jokeTeller: {
    name: "Thw Joker Joke Teller",
    description: "Enter if you dear...",
    technology: "<b>HTML | CSS | JS | Text-to-speech API |</b>",
    liveDemo:
      "https://js-project-collection.netlify.app/joke-teller/joke-teller.html",
    repo: "https://github.com/AyoCodess/The-JS-Project-Showcase/tree/master/joke-teller",
  },
  infiniteScroll: {
    name: "Infinite Crypto Scroll",
    description:
      "Using the unsplash API I built this infinite scroll site which can be implemented on any website.",
    technology: "<b>HTML | CSS | Unsplash API </b>",
    liveDemo:
      "https://js-project-collection.netlify.app/infinite-scroll-gallery/infinite-scroll-gallery",
    repo: "https://github.com/AyoCodess/The-JS-Project-Showcase/tree/master/infinite-scroll-gallery",
  },
  quoteGenerator: {
    name: "Quote Generator",
    description: "Get inspired - Built using a quote API.",
    technology: "<b>HTML | CSS | Quote API </b>",
    liveDemo:
      "https://js-project-collection.netlify.app/quote-generator/quote-generator.html",
    repo: "https://js-project-collection.netlify.app/quote-generator/quote-generator.html",
  },
  projectShowcase: {
    name: "JS Project Showcase",
    description: "A collection of javascript projects.",
    technology: "<b>HTML | CSS | JS | APIs </b>",
    liveDemo: "https://js-project-collection.netlify.app/",
    repo: "https://github.com/AyoCodess/The-JS-Project-Showcase",
  },

  minimalistFrom: {
    name: "The Modern Blue Form",
    description: "A simple, yet modern form.",
    technology: "<b>HTML | CSS </b>",
    liveDemo: "https://modern-blue-form.netlify.app/",
    repo: "https://github.com/AyoCodess/Modern-Blue-Form-Theme",
  },
  basicShoppingListApp: {
    name: "Shopping List App",
    description: "A simple shopping list app.",
    technology: "<b>HTML | CSS </b>",
    liveDemo: "https://the-simple-todo-app.netlify.app/",
    repo: "https://github.com/AyoCodess/The-Simple-todo-App",
  },
};
