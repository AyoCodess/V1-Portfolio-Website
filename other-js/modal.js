let modal = document.getElementById("modal");

modal.addEventListener("show.bs.modal", function (event) {
  // ? Button that triggered the modal
  let buttonPressed = event.relatedTarget;

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

  //? SELECTING BUTTONS INSIDE MODAL
  const modelButtonLiveDemo = document.querySelector(
    "#live-demo-button-in-modal"
  );
  const modelButtonGithub = document.querySelector("#github-button-in-modal");

  //* ASSIGNING BUTTON PRESSED A HREF LINK TO THE SHARED LIVE DEMO BUTTON AND GITHUB BUTTON IN MODAL
  modelButtonLiveDemo.href = projectLiveDemoLink;
  modelButtonGithub.href = projectGithubLink;
});
