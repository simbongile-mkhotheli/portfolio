/*=============== SERVICES MODAL ===============*/
// Get the modal elements
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

// When the user clicks on a service button, open the corresponding modal
modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modalViews[i].classList.add("active-modal");  // Show the modal for the clicked button
  });
});

// When the user clicks the close button, close the modal
modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");  // Hide all modals
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
// Initialize MixItUp for filtering portfolio projects
let mixer = mixitup(".project", {
  selectors: {
    target: ".card",  // Set target class for filtering
  },
  animation: {
    duration: 300,  // Set animation duration
  },
});

/* Link active project */
// Function to handle the active project link styling
const projectLinks = document.querySelectorAll(".project__item");

function activeproject(projectLink) {
  projectLinks.forEach((wl) => {
    wl.classList.remove("active-project");  // Remove active class from all project links
  });
  projectLink.classList.add("active-project");  // Add active class to the clicked project link
}

// Add click event listeners to project links to activate the clicked one
projectLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    activeproject(wl);
  });
});
