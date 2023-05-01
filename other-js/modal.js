let modal = document.getElementById('modal');

modal.addEventListener('show.bs.modal', function (event) {
  // ? Button that triggered the modal
  let buttonPressed = event.relatedTarget;

  //? SELECTING BUTTONS AND ELEMENTS INSIDE MODAL TO UPDATE DYNAMICALLY
  let modelButtonLiveDemo = document.querySelector(
    '#live-demo-button-in-modal'
  );
  let modelButtonGithub = document.querySelector('#github-button-in-modal');
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
  fbclone: {
    name: 'Leave Your Mark - Facebook Clone (Full Stack)',
    description:
      'This app acts as a pinboard for anyone to use. Think of it like a mood board, a Pinterest-type app with a Facebook user interface. You can share your photos and your writing. And browse the posts of others.',
    technology:
      '<b>Next.js | Next.Auth | Typescript | Tailwind | Firebase V9</b>',
    liveDemo: 'https://leaveyourmark.vercel.app/',
    repo: 'https://github.com/AyoCodess/Facebook-Clone-Functional-NextJs-Firebase-Tailwind-Typescript'
  },
  ayocodesapi: {
    name: 'AyoCodes REST API',
    description:
      'The original third-party API suddenly stopped working so I decided to create my own API for some of my personal projects going forward.',
    technology:
      '<b>Javascript | Node | Express | Vercel Deployment Service | Tailwind CSS </b>',
    liveDemo: 'https://api-for-personal-projects.vercel.app',
    repo: 'https://github.com/AyoCodess/API-for-personal-projects'
  },
  studentdatabase: {
    name: 'Ex-Student Database Web App',
    description:
      'A collection of schools want a web application to help them manage the contact information they hold on ex-students. The data was fetched from my own API.',
    technology: '<b>REACT | Tailwind CSS | Axios | My Own Personal API </b>',
    liveDemo: 'https://student-database-ayocodes.netlify.app/',
    repo: 'https://github.com/AyoCodess/Ex-Student-Database-Fullstack-REACT'
  },
  musicapi: {
    name: 'Musicbrainz Microservice API',
    description:
      'I built a small JavaScript/Node.js backend service with just 1 endpoint(The service). The service consumed the MusicBrainz API and re-organized data',
    technology: '<b>NODE | HTML | Axios | Vercel Deployment Service </b>',
    liveDemo:
      'https://microservice-for-music-brainz-api-nodejs-3zo78xesw-ayocodess.vercel.app/',
    repo: 'https://github.com/AyoCodess/Microservice-for-MusicBrainz-API-NODEJS'
  },
  tradingpairs: {
    name: 'Crypto Trading Pairs App',
    description:
      'I created a small frontend application using any framework that allows users to select a trading pair from an API, display information about the trading pair and its live price change every 10 seconds and view the Bitcoin average price from 3 different exchanges.',
    technology: '<b>REACT | reCharts | Tailwind CSS | Axios </b>',
    liveDemo: 'https://crypto-trading-pairs-app.netlify.app/',
    repo: 'https://github.com/AyoCodess/Crypto-Trading-Pairs-App-REACT'
  },
  pokemon: {
    name: 'Pokemon & Vs App',
    description:
      'This app was a 2 day build challenge with the task of building a React.js web UI that interfaces with the Pokemon API. This App is a PokeDex app with an added pokemon comparison feature.',
    technology:
      '<b>REACT | Tailwind CSS | React Router V6 | React-Pagination | Axios | Pokemon API </b>',
    liveDemo: 'https://pokedex-ayocodes.netlify.app/',
    repo: 'https://github.com/AyoCodess/Pokedex-REACT'
  },
  foundations: {
    name: 'CRUD APP - Form Validation',
    description:
      'Working with user input validation. Displaying errors via a modal with dynamic error content. User data validation - try to break the project see what validation errors you get.',
    technology: '<b>REACT | Bootstrap V5  </b>',
    liveDemo: 'https://ayocodes-react-foundations.netlify.app/',
    repo: 'https://github.com/AyoCodess/CRUD-APP-with-validaiton-Bootstrap-REACT'
  },
  reiz: {
    name: 'Country Finder - React Web App',
    description:
      'Find your country, sort and filter by country name, area size and region. This was a take home assignment for a hiring process. Please checkout the read me in the Github repo for more information about the project.',
    technology: '<b>REACT | Rest Countries API | Tailwind CSS </b>',
    liveDemo: 'https://reiz-tech-app.netlify.app/',
    repo: 'https://github.com/AyoCodess/Reiz-Tech-App-REACT'
  },
  phonebook: {
    name: 'CRUD APP - Phone book',
    description:
      'Add, update and delete contacts from your phone book. Data is saved in local storage.',
    technology: '<b>REACT | Tailwind CSS | Local storage </b>',
    liveDemo: 'https://crud-phonebook.netlify.app/',
    repo: 'https://github.com/AyoCodess/CRUD-APP-Phone-book-REACT'
  },
  dashboard: {
    name: 'All-in-one Dashboard',
    description:
      'This app was created as a take home project within 5 days in an hiring process. I love these types of challenges as it is an opportunity to display my current skills and gain some new ones! The read me file in the repo explains my project experience in depth.',
    technology:
      '<b>REACT | Tailwind CSS | React Router V6 | Auth0 | XML RSS Data | Open weather API | And many more... </b>',
    liveDemo: 'https://ayocodes-dashboard.netlify.app/',
    repo: 'https://github.com/AyoCodess/All-in-one-dashboard-fullstack-REACT'
  },
  coincora: {
    name: 'Coincora - Crypto Forecasting Tool',
    description:
      'This app allows you to compare and analyse the crypto market quickly and objectively to help facilitate wiser investments.',
    technology:
      '<b>REACT | Coingecko API | Material UI | Tailwind CSS | React Router v6 </b>',
    liveDemo: 'https://www.beta.coincora.com',
    repo: 'https://www.youtube.com/channel/UCPa_V2rk5cHyeZMHZuamqxA'
  },
  stopholdingback_app: {
    name: 'Stop Holding Back - App',
    description:
      ' This React app allows the public to filter and search through current SHB charity members, looking for a mentor to support them through their stuttering. Helping them build self-esteem and find the career they want despite their disability.',
    technology: '<b> REACT | SASS | JSX </b>',
    liveDemo: 'https://staff.stopholdingback.org',
    repo: 'https://github.com/AyoCodess/SHB-Find-a-Mentor-REACT'
  },
  stopholdingback: {
    name: 'Stop Holding Back v4',
    description:
      "This is a project I have been involved with since it's inception in 2017. SHB is UK registered charity helping people who stutter find careers. Please donate if you can.",
    technology: '<b> Custom HTML | Custom CSS | Built with WIX </b>',
    liveDemo: 'https://www.stopholdingback.org',
    repo: 'https://www.stopholdingback.org'
  },
  microsoft2021: {
    name: 'Microsoft Website 2021',
    description:
      'I had good time building the desktop and mobile versions, emulating the original website as best I could with a few new additions.',
    technology: '<b>HTML | CSS | JS</b>',
    liveDemo: 'https://microsoft-2021-website-ayocodess.netlify.app/',
    repo: 'https://github.com/AyoCodess/Remake-of-Microsoft-Website-2021-VANILLA-JS'
  },
  luxuryRealEstateCompany: {
    name: 'Luxury Real Estate Company',
    description:
      'One of my early projects. I wanted to give off a luxury feel... did I succeed? ',
    technology: '<b>HTML | CSS GRID ONLY</b>',
    liveDemo: 'https://realtor-landing-page-css-grid.netlify.app/',
    repo: 'https://github.com/AyoCodess/Luxury-Real-Estate-Landing-page-VANILLA-JS'
  },
  IsitAGoodInvestment: {
    name: 'Isit A Good Investment?',
    description:
      'Learn how to invest in crypto safely and join a private syndicate of investors - Landing page.',
    technology: '<b>HTML | SASS | JS | AOS Library </b>',
    liveDemo: 'https://isitagoodinvestment.netlify.app/',
    repo: 'https://github.com/AyoCodess/Crypto-Club-Landing-Page-VANILLA-JS'
  },
  sassLandingPage: {
    name: 'SASS Website - Ultra Light/Dark Mode 2021',
    description:
      'Re-envisioned the SASS landing page with a dark and light theme implementation. Local storage automatically saves your choice of theme.',
    technology: '<b>HTML | SASS | JS</b>',
    liveDemo: 'https://sass-landing-page-ayocodess.netlify.app/',
    repo: 'https://github.com/AyoCodess/Remake-of-the-SASS-Website-VANILLA-JS'
  },
  travelCompanyLandingPage: {
    name: 'Travel Company Landing Page',
    description: 'Simple brochure style page for a travel company. ',
    technology: '<b>HTML | CSS </b>',
    liveDemo: 'https://ayo-booking-app.netlify.app/',
    repo: 'https://github.com/AyoCodess/Travel-Company-Landing-page-VANILLA-JS'
  },

  netflixCrimson: {
    name: 'Netflix Crimson 2021',
    description:
      'Completely re-built from the ground up with a nice customized Bootstrap V.5 FAQ component.  ',
    technology: '<b>HTML | CSS | JS | Bootstrap V.5</b>',
    liveDemo: 'https://crimson-neflix-landpage.netlify.app/',
    repo: 'https://github.com/AyoCodess/Netflix-Landing-Page-VANILLA-JS'
  },
  myPortfolioWebsite: {
    name: 'This Website!',
    description:
      'This website was built from ground up and is continually being developed. This was also my first attempt and learning and implementing bootstrap for the very first time. ',
    technology: '<b>HTML | SASS | JS | Bootstrap V.5 </b>',
    liveDemo: 'https://www.ayoadesanya.com/',
    repo: 'https://github.com/AyoCodess/Portfolio-Website-VANILLA-JS'
  },

  backgroundGradientGenerator: {
    name: 'Background Gradient Generator',
    description:
      'Generate any linear gradient background you want from any two colors you want.',
    technology: '<b>HTML | CSS GRID ONLY</b>',
    liveDemo: 'https://bgchanger-ayo.netlify.app/',
    repo: 'https://github.com/AyoCodess/Background-Changer-App-VANILLA-JS'
  },
  ayoBlogSite: {
    name: 'Ayo Codes - The Blog',
    description:
      ' This was my first time using a static site generator with a headless CMS. We have pagination functionality for every 10 posts. It was challenging at times but I got the job done. Visit the blog to read more about my coding ups and downs.',
    technology:
      '<b>HTML | SASS | JS | 11ty | Nunjunks | Netlify CMS | Disqus</b>',
    liveDemo: 'https://blog.ayoadesanya.com',
    repo: 'https://github.com/AyoCodess/Personal-Coding-Blog-11ty-VANILLA-JS'
  },
  dbzMusicPlayer: {
    name: 'DBZ Music Player',
    description:
      'Are you a fan of Dragonball Z? Ready for a nostalgic blast from the past? This project is a custom built fully functional DBZ music player hosting my favorite tracks from the series.',
    technology: '<b>HTML | CSS | JS </b>',
    liveDemo:
      'https://js-project-collection.netlify.app/dbz-music-player/dbz-music-player.html',
    repo: 'https://github.com/AyoCodess/The-JS-Project-Showcase-VANILLA-JS/tree/master/dbz-music-player'
  },
  yourCountdown: {
    name: 'Your Countdown',
    description:
      'Create your custom countdown and have it saved to the browser with the help of local storage.',
    technology: '<b>HTML | CSS | JS</b>',
    liveDemo:
      'https://js-project-collection.netlify.app/your-countdown/your-countdown.html',
    repo: 'https://github.com/AyoCodess/The-JS-Project-Showcase-VANILLA-JS/tree/master/your-countdown'
  },
  pip: {
    name: 'Picture In Picture + Instant Webcam',
    description:
      'Create a floating screen capture and see what you look like via your webcam in an instant!',
    technology: '<b>HTML | CSS | JS | Screen Capture API | Webcam API </b>',
    liveDemo:
      'https://js-project-collection.netlify.app/picture-in-picture/picture-in-picture.html',
    repo: 'https://github.com/AyoCodess/The-JS-Project-Showcase-VANILLA-JS/tree/master/picture-in-picture'
  },

  superNavigation: {
    name: 'Super Navigation',
    description:
      'Animated Navigation that performs and looks great on any website.',
    technology: '<b>HTML | CSS | JS </b>',
    liveDemo:
      'https://js-project-collection.netlify.app/super-navigation/super-navigation.html',
    repo: 'https://github.com/AyoCodess/The-JS-Project-Showcase-VANILLA-JS/tree/master/super-navigation'
  },
  jokeTeller: {
    name: 'Thw Joker Joke Teller',
    description: 'Enter if you dear...',
    technology: '<b>HTML | CSS | JS | Text-to-speech API |</b>',
    liveDemo:
      'https://js-project-collection.netlify.app/joke-teller/joke-teller.html',
    repo: 'https://github.com/AyoCodess/The-JS-Project-Showcase-VANILLA-JS/tree/master/joke-teller'
  },
  infiniteScroll: {
    name: 'Infinite Crypto Scroll',
    description:
      'Using the unsplash API I built this infinite scroll site which can be implemented on any website.',
    technology: '<b>HTML | CSS | Unsplash API </b>',
    liveDemo:
      'https://js-project-collection.netlify.app/infinite-scroll-gallery/infinite-scroll-gallery',
    repo: 'https://github.com/AyoCodess/The-JS-Project-Showcase-VANILLA-JS/tree/master/infinite-scroll-gallery'
  },
  quoteGenerator: {
    name: 'Quote Generator',
    description: 'Get inspired - Built using a quote API.',
    technology: '<b>HTML | CSS | Quote API </b>',
    liveDemo:
      'https://js-project-collection.netlify.app/quote-generator/quote-generator.html',
    repo: 'https://github.com/AyoCodess/The-JS-Project-Showcase-VANILLA-JS/tree/master/quote-generator.html'
  },
  projectShowcase: {
    name: 'JS Project Showcase',
    description: 'A collection of javascript projects.',
    technology: '<b>HTML | CSS | JS | APIs </b>',
    liveDemo: 'https://js-project-collection.netlify.app/',
    repo: 'https://github.com/AyoCodess/The-JS-Project-Showcase-VANILLA-JS'
  },

  minimalistFrom: {
    name: 'The Modern Blue Form',
    description: 'A simple, yet modern form.',
    technology: '<b>HTML | CSS </b>',
    liveDemo: 'https://modern-blue-form.netlify.app/',
    repo: 'https://github.com/AyoCodess/Modern-Blue-Form-Theme-VANILLA-JS'
  },
  basicShoppingListApp: {
    name: 'Shopping List App',
    description: 'A simple shopping list app.',
    technology: '<b>HTML | CSS </b>',
    liveDemo: 'https://the-simple-todo-app.netlify.app/',
    repo: 'https://github.com/AyoCodess/The-Simple-Todo-App-VANILLA-JS'
  }
};
