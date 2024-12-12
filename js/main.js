// Select elements
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
// Select elements
const projectsContainer = document.querySelector(".projects");
const filterItems = document.querySelectorAll(".project__item");

// Set up click events for filter items
filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    filterItems.forEach((filter) => filter.classList.remove("active-project"));
    item.classList.add("active-project");
  });
});

// Function to update grid columns based on screen size and visible card count
const updateGridColumns = () => {
  const visibleCardCount = Array.from(projectsContainer.children).filter(
    (card) => card.style.display !== "none"
  ).length;

  // Determine grid layout and column class
  const [gridColumns, columnClass] =
    visibleCardCount === 1
      ? ["1fr", "single-column"]
      : visibleCardCount === 2 && window.innerWidth >= 1024
      ? ["repeat(2, 1fr)", "two-column"]
      : visibleCardCount === 2 && window.innerWidth < 768
      ? ["repeat(1, 1fr)", "single-column"]
      : window.innerWidth >= 1024
      ? ["repeat(3, 1fr)", "three-column"]
      : window.innerWidth >= 550
      ? ["repeat(2, 1fr)", "two-column"]
      : ["1fr", "single-column"]; // Fallback for screens under 768px

  // Apply grid layout and update column class
  projectsContainer.style.gridTemplateColumns = gridColumns;
  projectsContainer.classList.remove(
    "single-column",
    "two-column",
    "three-column"
  );
  projectsContainer.classList.add(columnClass);
};

// Initial call and setup for window resize
updateGridColumns();
window.addEventListener("resize", updateGridColumns);

// Initialize MixItUp and adjust grid after each filtering action
const mixer = mixitup(".projects", {
  selectors: {
    target: ".card",
  },
  animation: {
    duration: 0,
  },
  callbacks: {
    onMixEnd: updateGridColumns, // Ensure grid is updated after filtering
  },
});

// Apply default filter on page load
window.addEventListener("load", () => {
  mixer.filter(".web"); // Apply the "Apps" filter
  filterItems.forEach((item) => {
    item.classList.toggle(
      "active-project",
      item.getAttribute("data-filter") === ".web"
    );
  });
});
